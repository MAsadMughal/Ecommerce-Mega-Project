import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
const Product = ({ product }) => {
    const options = {
        edit: false,
        color: "lightgrey",
        activeColor: "orange",
        value: product.ratings,
        size: window.innerWidth < 600 ? 20 : 25,
        isHalf: true,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
    }

    return (
        <div>
            <Link style={{ textDecoration: "none", color: "black" }} to={`/product/${product._id}`}>
                <div className="ProductCard">
                    <img id={product._id} src={product.images[0].url} style={{ objectFit: "cover" }} alt={`${product.name} 's pic`} />
                    <p id='nameofProduct'>{product.name}</p>
                    <div><ReactStars {...options} /><span> {product.numOfReviews} reviews </span></div>
                    <span>{product.price} $</span>
                </div>
            </Link>
        </div>
    )
}

export default Product
