import React, { useState } from "react";
import photo_url1 from '../WishlistPage/assets/abc.jpg';
import './Wishlist.css';

function Wishlist() {
    const [noOfItems, setNoOfItems] = useState(8);
    const [items, setItems] = useState([
        {
            photo_url: '../WishlistPage/assets/abc.jpg',
            price: 299,
            description: 'This is the best shoes for mens'
        },
        {
            photo_url: '../WishlistPage/assets/shoes.jpg',
            price: 4000,
            description: 'Bacca Bucci shoes best quality and best comfort'
        },
        {
            photo_url: '../WishlistPage/assets/shoes.jpg',
            price: 4000,
            description: 'Bacca Bucci shoes best quality and best comfort'
        },
        {
            photo_url: '../WishlistPage/assets/shoes.jpg',
            price: 4000,
            description: 'Bacca Bucci shoes best quality and best comfort'
        },
        {
            photo_url: '../WishlistPage/assets/shoes.jpg',
            price: 4000,
            description: 'Bacca Bucci shoes best quality and best comfort'
        },
        {
            photo_url: '../WishlistPage/assets/shoes.jpg',
            price: 4000,
            description: 'Bacca Bucci shoes best quality and best comfort'
        },
        {
            photo_url: '../WishlistPage/assets/shoes.jpg',
            price: 4000,
            description: 'Bacca Bucci shoes best quality and best comfort'
        },
        {
            photo_url: '../WishlistPage/assets/shoes.jpg',
            price: 4000,
            description: 'Bacca Bucci shoes best quality and best comfort'
        }
    ]);

    function deleteItem(index) {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
        setNoOfItems(updatedItems.length);
    }

    return (
        <>
            <div className="mywishlist-pad10">
                <div><h2>My WishList ({noOfItems})</h2></div>
                <hr />
                <div className="itemsContainer">
                    {items.map((item, index) => (
                        <div key={index} className="item">
                            <div className="itemImage">
                                <img src={photo_url1} alt={item.description} />
                            </div>
                            <div className="itemDetails">
                                <div className="description">{item.description}</div>
                                <div className="priceAndButton">
                                    <div className="price">PRICE: RS {item.price}</div>
                                    <button className="delete" onClick={() => deleteItem(index)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Wishlist;
