import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom";

const Categories = () => {
  return (
     <div className="categories">
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg" alt="" />
                <button>
                    <Link className="link" to="/products/1">
                     Sale
                    </Link>
                </button>
            </div>
            <div className="row">
            <img src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg" alt="" />
                <button>
                    <Link className="link" to="/products/2">
                     Sale
                    </Link>
                </button>
            </div>

        </div>
        <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg" alt="" />
                <button>
                    <Link className="link" to="/products/3">
                     Sale
                    </Link>
                </button>
            </div>
        </div>
        <div className="col col-1">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/834872/pexels-photo-834872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className="link" to="/products/4">
                     Sale
                    </Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/19547436/pexels-photo-19547436/free-photo-of-portrait-of-a-man-wearing-orange-blazer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className="link" to="/products/5">
                     Sale
                    </Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="https://images.pexels.com/photos/19556878/pexels-photo-19556878/free-photo-of-model-in-khaddar-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className="link" to="/products/6">
                     Sale
                    </Link>
                </button>
            </div>
        </div>
        
     </div>
  )
}

export default Categories