import React from 'react';
import './BookSelect.css';

const SelectedProduct = (props) => {
    const { image, title, id } = props.cart;
    const { removeBtn, luckyStatus } = props;

    return (
        <div style={luckyStatus ? { backgroundColor: '#dfffd5', padding: '12px' } : { backgroundColor: '#ffffff', padding: '0px' }} className="selected-product">
            <figure style={luckyStatus ? { borderColor: '#27ae60' } : { borderColor: '#e0e0e0' }}>
                <img src={image} alt="name" />
            </figure>
            <h4>{title}</h4>
            <button onClick={() => removeBtn(id)}>&times;</button>
        </div>
    );
};

export default SelectedProduct;