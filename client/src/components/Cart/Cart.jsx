import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss";


const Cart = () => {
 
  const data =[
    {
      id:1,
      img:"https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Winter Jacket",
      desc: "Long Sleeve Graphic T-shirt",
      isNew:true,
      oldPrice: 19,
      price: 12,
  },
  {
    id:2,
    img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Women Winter Jacket",
    desc: "Skirt",
    isNew:true,
    oldPrice: 19,
    price: 12,
  }
  ];


  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item)=>(
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0,100)}</p>
              <div className="price">1 x ${item.price}</div>
            </div>
            <DeleteOutlineIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="rest">Reset Cart</span>
    </div>
  );
};

export default Cart