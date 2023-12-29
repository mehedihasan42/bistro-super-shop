import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiousSecure";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
// import "./styles.css";
import useShop from "../../hooks/useShop";

const CheckOutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [shop] = useShop();
  const { user } = useContext(AuthContext);
  const [error, setError] = useState();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data);
      setClientSecret(res.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError(" ");
    }
    setProcessing(true);

    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (paymentError) {
      console.log(paymentError);
    } else {
      console.log("Successfully payment: ", paymentIntent);
    }
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "payment success",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    const paymentData = {
      email: user.email,
      transationId: paymentIntent.id,
      transationAmount: paymentIntent.amount,
      quantity: shop.length,
      data: new Date(),
      productNames: shop.map((item) => item.name),
      menuId: shop.map(menu=>menu.menuId),
      shopId: shop.map(id=>id._id)
    };
    axiosSecure.post("/payment", paymentData)
    .then((res) => res.json())
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-neutral"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default CheckOutForm;
