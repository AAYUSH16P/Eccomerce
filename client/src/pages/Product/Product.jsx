import React,{useState} from 'react' 
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [selectedImg,setSelectedImg] = useState(0);
  const [quantity,setQuantity] = useState(0);

  const images = [
      "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1545584/pexels-photo-1545584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
             <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
             <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/> 
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatem quasi eligendi eum, non facere voluptates ullam distinctio aliquid eius, magni dignissimos inventore et error maiores magnam iure? Adipisci consequuntur in tempore doloribus maxime beatae repudiandae consectetur obcaecati sed? Corrupti, consectetur! Tempora unde voluptatem velit magnam quisquam rerum similique amet obcaecati!</p>
        <div className="quantity">
        <button disable={quantity > 0} onClick={()=> quantity > 0 && setQuantity(prev=> prev-1)}>-</button>
           {quantity}
        <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-shirt,Women,Top</span>
        </div>
        <hr/>
        <div className="info">
          <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFORMATION</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product;