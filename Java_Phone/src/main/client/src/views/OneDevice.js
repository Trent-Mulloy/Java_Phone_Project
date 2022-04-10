import React, {useEffect, useState } from  'react';
import axios from 'axios';
 import { useParams } from "react-router-dom";

 const OneDevice = (props) =>{
    const [device, setDevice] = useState({});
    const { id } = useParams();

    useEffect(()=>{
        axios.get(`http://javaphoneapp.com/api/oneDevice/${id}`)
            .then(res =>{ 
                setDevice(res.data);
            })
            .catch(err => console.log(err));
    },[id])


    const cart_add=()=>
    {
        if(!localStorage.getItem("cart"))
        {
            localStorage.setItem("cart",JSON.stringify([]));
        }
        let cart=JSON.parse(localStorage.getItem("cart"));
        
        cart.push(device);

        localStorage.setItem("cart",JSON.stringify(cart));
    }
    
    return(
        <div className='row'>
            <div className='col'>
                <img src={device.imgLink} width={500} height={600}></img>
            </div>
            <div className='col'>
                <h1>{device.deviceName}</h1>
                <br></br>
                <h2> Specs: {device.deviceDetails}</h2>
                <br></br>
                <br></br>
                <h3>Price: ${device.devicePrice}</h3>
                <button class="btn btn-primary" onClick={cart_add}>Add To Cart</button>
            </div>
        </div>
    )
 }

 export default OneDevice;