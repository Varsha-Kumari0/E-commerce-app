import React from "react";  
function deleteItem(){

}
function Wishlist()
{
    var noOfItems=0;
    return
    {
        <div className="mywishlist-pad10">
            <div><h2>My WishList ({noOfItems})</h2></div>
            <hr />
            <div className="Itemscontainer">
                <div className="itemimage"></div>
                <div className="itemdetails"></div>
                <button className="delete" onClick={deleteItem()}></button>
            </div>
        </div>
    }
}

export default Wishlist;