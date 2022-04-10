import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const Cart = props =>{

    const cart = JSON.parse(localStorage.getItem("cart"));
    
    const [isempty, setIsempty] = useState(false);

    const cart_clear = () =>{
        localStorage.removeItem("cart");
        setIsempty(!isempty);
    }

    const cart_total=()=>
    {
        let sum1=0;
        for(let item of cart)
        {
            sum1+=item.planPrice?item.planPrice:item.devicePrice;
        }
        return Number.parseFloat(sum1).toFixed(2);
    }

    const monthly_total=()=>
    {
        let sum=0;
        for(let item of cart)
        {
            sum+=item.planPrice?item.planPrice:0;
        }
        return Number.parseFloat(sum).toFixed(2);
    }

if (cart != null){
    return (
        <div className='row'>
            <div className='col'>
                {
                cart.map((item,i)=>{
                    return <CartItem item={item} index={i}></CartItem>
                })
                }
                
            </div>
            <div className='col'>
            <button class="btn btn-primary" onClick={cart_clear}>Empty Cart </button>
            <div className='totalBox'>
                <h2>Total Due Today = {cart_total()}</h2>
                <br></br>
                <h2>Monthly Total = {monthly_total()}</h2>
            </div>
            {/* <div className='checkoutButton'>
            <button className="btn" onClick="checkOut">Checkout Now</button>
            </div> */}
            <div>
                <h2 className='text-danger'>*****DISCLAIMER: THESE ARE NOT ACTUAL PRODUCTS AND WILL NTO BE SHIPPED OR SUPPORTED*****</h2>
            </div>
            <div>
                <PayPalScriptProvider options={{ "client-id": "AePJVIFckZZuasUJxxAtugniqCl4Td9YpSJzQmiwIE2rQT9Fg7rgJ-kfz0I4qF9bkTkejZ_pZaxJriCu"}}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: cart_total(),
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            alert(`Transaction completed by ${name}`);
                        });
                    }}
                />
                </PayPalScriptProvider>
            </div>
        </div>
        </div>
    )}
    else{
    return(
        <div className='row'>
            <div className='col'>
                <h1>Your Cart Is Empty</h1>
            </div>
            <div className='col'>
            </div>
        </div>
    )
}
}

export default Cart;