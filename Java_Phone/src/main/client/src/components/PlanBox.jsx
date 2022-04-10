import React from 'react';
import { Link } from 'react-router-dom';


const PlanBox=props=>
{
    const cart_has=(cart,obj)=>
    {
        for(let item of cart)
        {
            if(item.plan=="plan"&&obj.id==item.id)
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
        let has_plan=cart_has(cart,props.plan);
        if(!has_plan)
        {
            props.plan.type="plan";
            props.plan.quantity=1;
            cart.push(props.plan);
        }
        localStorage.setItem("cart",JSON.stringify(cart));
    }

    return(
    <div className='PlanBox'>
        <div className="card text-white">
            <img className='deviceImg' src={props.plan.imgLink} alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title">{props.plan.planName}</h5>
                <p class="card-text">{props.plan.planDetails}</p>
                <p>${props.plan.planPrice}/Month per line</p>
            <div className='deviceTileBtn'>
            <button class="btn btn-primary" onClick={cart_add}>Select This Plan </button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default PlanBox;