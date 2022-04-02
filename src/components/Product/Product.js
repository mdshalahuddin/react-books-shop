import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { image, title, name, price } = props;
    const { addtocart } = props;

    return (
        <div className="product-card">
            <figure>
                <img src={image} alt={name} />
            </figure>
            <div className="">
                <h3>{title}</h3>
                <h4>{name}</h4>
                <span>TK. {price}</span>
            </div>
            <button onClick={() => addtocart(props)}>Add to Cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default Product;