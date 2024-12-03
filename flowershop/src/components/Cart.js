import { useState, useEffect } from 'react';
export default function Cart({cartItems}) {
    useEffect(() => {
        const grandTotal = cartItems.reduce((total, item) => totla + item.price * item.qty, 0);
        setTotalPrice(grandTotal);
    }, [cartItems]);

    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
            <tbody>
                {cartItems.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td>${item.price * item.qty}</td>

                    </tr>
                ))
                    
                }
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>${totalPrice}</td>
                </tr>
                </tbody>
            </table>
           
        </div>
    );
}