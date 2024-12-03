import { flowers } from './FlowerDB';
import { useState } from 'react';
import '../assets/CSS/layout.css';


export default function Products(){
   
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {flowers.map(flower => (
                        <div key={flower.id} className='flower-item'>
                            <img src={flower.img} alt={flower.name}/>
                            <h4>{flower.name} Price: {flower.price}</h4>
                            <label>
                                Quantity:<Input type = "number" id={`qty-${flower.id}`} min="1" className="quantity-input"/>
                            </label>
                            <button onClick={()=> handleAddToCart(flower,`qty-${flower.id}`)}>Add to Cart</button>
                            
                        </div>
                    ))
                      
                       
                    }
                

            </div>
            <div className="item3">
                {
                //cart
                }
            </div>
        </>
    );

}