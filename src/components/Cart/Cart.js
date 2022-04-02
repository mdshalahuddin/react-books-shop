import React from 'react';
import BookSelect from '../BookSelect/BookSelect';
import './Cart.css';

const Cart = (props) => {
    const { cart, randomProduct, removeBtn, resetCart, randomSelection } = props;

    return (
        <div className="cart">
            <h3>{randomProduct && cart.length === 1 ? 'প্ৰিয় একটি বই কালেকশন :)' : (cart.length > 0 ? 'বই কালেকশন' : 'কালেকশন নেই!')}</h3>
            {
                cart?.map(item => <BookSelect key={item.name} cart={item} removeBtn={removeBtn} luckyStatus={randomProduct && cart.length === 1 ? true : false}></BookSelect>)
            }

            <button onClick={randomSelection} className="cart-btn">Choose One</button>
            <button onClick={resetCart} className="cart-btn clear">Clear All</button>
        </div>
    );
};

export default Cart;