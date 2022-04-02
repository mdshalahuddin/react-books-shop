import React from 'react';
import { useState, useEffect } from 'react';
import './Shop.css';
import Product from './../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    // Fetch and Display Products
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // Display Cart Items
    const [cart, setCart] = useState([]);

    const selectProduct = (product) => {
        let items = [];
        for (const item of cart) {
            items.push(item.id);
        }

        if (cart.length >= 4) {
            alert('You can\'t Select more than 4 products!');
        } else if (items.includes(product.id)) {
            alert('This product is already in Cart');
        } else {
            const newProduct = [...cart, product];
            setCart(newProduct);
        }
    }

    // Choose Random Product
    const [randomProduct, setRandomProduct] = useState(false);

    const randomSelection = () => {
        if (cart.length >= 4) {
            const randomIndex = Math.floor(Math.random() * cart.length);
            const randomItem = cart[randomIndex];
            const newProduct = [randomItem];
            setRandomProduct(true);
            setCart(newProduct);
        } else {
            alert('Add 4 Products to run Random Selection!');
        }
    }

    // Remove Specific Item
    const removeItem = (id) => {
        const newProduct = cart?.filter(product => product.id !== id);
        setCart([...newProduct]);
        setRandomProduct(false);
    }

    // Reset Cart
    const resetCart = () => {
        setCart([]);
        setRandomProduct(false);
    }

    return (
        <div className="shop-layout">
            <div className="products-wrapper">
                {
                    products.map(product => <Product key={product.id} id={product.id} image={product.image} title={product.title} name={product.name} price={product.price} addtocart={selectProduct} ></Product>)
                }
            </div>

            <div className="cart-wrapper">
                <Cart cart={cart} randomProduct={randomProduct} removeBtn={removeItem} resetCart={resetCart} randomSelection={randomSelection}></Cart>
            </div>
        </div>
    );
};

export default Shop;