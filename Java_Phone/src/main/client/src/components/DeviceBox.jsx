import React from 'react';
import { Link } from 'react-router-dom';


const DeviceBox = props =>{

    const cart_has=(cart,obj)=>
    {
        for(let item of cart)
        {
            if(item.device=="device"&&obj.id==item.id)
            {
                props.quantity++;
                return true;
            }
        }
        return false;
    }

    const cart_add=()=>
    {
        if(!localStorage.getItem("cart"))
        {
            localStorage.setItem("cart",JSON.stringify([]));
        }
        let cart=JSON.parse(localStorage.getItem("cart"));
        let has_device=cart_has(cart.props.device);
        if(!has_device)
        {
            props.device.type="device";
            props.device.quantity=1;
            cart.push(props.device);
        }
        localStorage.setItem("cart",JSON.stringify(cart));
    }
    return(
        <div className='DeviceBox'>
            <div className="card text-white">
                <img className='deviceImg' src={props.device.imgLink} alt="Card image cap"></img>
                <div class="card-body">
                    <h5 class="card-title">{props.device.deviceName}</h5>
                    <p class="card-text">{props.device.deviceDetails}</p>
                    <p>${props.device.devicePrice}</p>
                <div className='deviceTileBtn'>
                <Link class="btn btn-primary" to={`/device/${props.device.id}`}>View Device</Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DeviceBox;