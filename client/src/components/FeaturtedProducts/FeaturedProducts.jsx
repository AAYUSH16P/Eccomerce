import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import "./FeaturedProducts.scss";
import Card from '../Card/Card';
import axios from "axios";

const FeaturedProducts = ({type}) => {

    const data=[
        {
            id:1,
            img: "https://m.media-amazon.com/images/I/91k42Z5zwZL._SL1500_.jpg",
            img2: "https://m.media-amazon.com/images/I/815NGvP7m8L._SL1500_.jpg",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:2,
            img: "https://m.media-amazon.com/images/I/61S1aWBo2RL._SL1500_.jpg",
            img2: "https://m.media-amazon.com/images/I/61C9hBfHDEL._SL1500_.jpg",
            title: "Jeans",
            isNew: true,
            oldPrice: 21,
            price: 34,
        },
        {
            id:3,
            img: "https://m.media-amazon.com/images/I/51oF63fS-1L._SL1000_.jpg",
            img2: "https://m.media-amazon.com/images/I/51X7ozCOvoL._SL1000_.jpg",
            title: "Suit",
            isNew: true,
            oldPrice: 31,
            price: 25,
        },
        {
            id:4,
            img: "https://m.media-amazon.com/images/I/61vqu05tFDL._SL1024_.jpg",
            img2: "https://m.media-amazon.com/images/I/81P-2-j7FUL._SL1500_.jpg",
            title: "Shirt",
            isNew: true,
            oldPrice: 17,
            price: 20,
        }
    ];


    const [products, setProducts] = useState([]);

    useEffect(()=> {
        const fetchData = async() =>{
            try{
                const data = await axios.get(process.env.REACT_APP_API_URL+"/products",
                {
                    Authorization: "bearer" + process.env.REACT_APP_API_TOKEN, 
                });
                console.log(data);
            } catch(err){
                console.log(err);
            }
        };
        fetchData();
    },[]);


  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} products</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam unde veniam adipisci? Animi, facere accusantium totam nihil facilis quasi laudantium eveniet repellat alias quae natus ex magni reiciendis magnam deleniti, rerum quo incidunt? Est animi aspernatur nobis dignissimos perspiciatis doloremque!</p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts;