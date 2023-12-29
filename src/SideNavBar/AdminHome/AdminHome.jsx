import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiousSecure';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const AdminHome = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data } = useQuery({
        queryKey: ['admin-states'],
        queryFn: async()=>{
           const res = await axiosSecure('/admin-states')
           return res.data
        }
      })

    const { data:chartData=[{}] } = useQuery({
        queryKey: ['order-state'],
        queryFn: async()=>{
           const res = await axiosSecure('/order-state')
           console.log(chartData)
           return res.chartData
        }
      })
    return (
      <div className='' style={{ width: '100%',height:'100%' }}>
        <h2>Hi, {user?.displayName}</h2>
          <div className="stats shadow mx-8">
  
  <div className="stat place-items-center">
    <div className="stat-value">${data?.users}</div>
    <div className="stat-title">Users</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-value text-secondary">${data?.products}</div>
    <div className="stat-title">Products</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-value">${data?.orders}</div>
    <div className="stat-title">Orders</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-value">${data?.paymentResult}</div>
    <div className="stat-title">PaymentResult</div>
  </div>
  
</div>
<div>
<BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="_id" />
      <YAxis />
      <Bar dataKey="totalPrice" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
</div>
      </div>
    );
};

export default AdminHome;