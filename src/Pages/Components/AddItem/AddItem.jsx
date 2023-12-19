import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import Swal from "sweetalert2";

const image_token = import.meta.env.VITE_img_apiKey

const AddItem = () => {
  const axiosSecure = useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_token}`

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);
    /*fetch for upload image*/
    fetch(image_hosting_url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((imageData) => {
        console.log('Image uploaded successfully:', imageData.data.display_url);
        const imgURL = imageData.data.display_url;
        const {name,category,price,recipe} = data;
        const newItem = {name,category,price:parseFloat(price),recipe,image:imgURL}
        console.log(newItem)
        axiosSecure.post('/menu',newItem)
        .then(res=>{
          console.log(res)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            reset()
          }
        })     
      })
  };

  return (
    <div className="w-full">
      <SectionTitle
        subHeading="---New Item---"
        heading="ADD AN ITEM"
      ></SectionTitle>
      <div className="hero-content flex-col">
        <div className="card w-full shadow-2xl bg-base-300">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe name*</span>
              </label>
              <input
                type="text"
                placeholder="Recipe name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
            </div>
            <div className="flex space-x-3">
              <div className="form-control w-2/4">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <select defaultValue='category'
                  className="select select-bordered w-full max-w-xs"
                  {...register("category", { required: true })}
                >
                  <option disabled>
                    category
                  </option>
                  <option>Salad</option>
                  <option>Dessert</option>
                  <option value='drinks'>Drinks</option>
                </select>
              </div>
              <div className="form-control w-2/4">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered"
                  {...register("price", { required: true })}
                />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Recipe Details*</span>
              </label>
              <textarea
                placeholder="Recipe Details"
                className="textarea textarea-bordered textarea-lg w-full"
                {...register("recipe", { required: true })}
              ></textarea>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              {...register("image", { required: true })}
            />
            <input
              type="submit"
              className="btn bg-[#835D23] text-white w-1/6"
              value="ADD ITEM"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
