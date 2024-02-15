import React from 'react'
import Card from "../Card/Card"
import "./List.scss"

 const List = () => {

    const data =[
        {
            id:1,
            img:"https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Winter Jacket",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:2,
            img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Women Winter Jacket",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/9558567/pexels-photo-9558567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/65676/nanjing-studio-jeans-65676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Jeans",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
    ];

  return (
    <div className="list">
        {data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}


export default List;


