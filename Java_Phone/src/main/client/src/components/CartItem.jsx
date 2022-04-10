import React from 'react';
import { Link } from 'react-router-dom';
 

const CartItem=props=>
{
    return(
        <div className='ItemBox'>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{props.item.planName || props.item.deviceName}</h5>
                    <p class="card-text">{props.item.planDetails || props.item.deviceDetails}</p>
                    <h2>${props.item.planPrice || props.item.devicePrice}</h2>
                </div>
            </div>
        </div>
    )
}

export default CartItem;