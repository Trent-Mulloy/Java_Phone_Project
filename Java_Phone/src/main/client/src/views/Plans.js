import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlanBox from '../components/PlanBox';



const Plans = props =>{
    const [plans, setPlans] = useState([]);

    useEffect(()=>{
        axios.get("http://javaphoneapp.com/api/allPlans") 
            .then(res =>{
                setPlans(res.data); 
            })
            .catch(err => console.log(err));
    },[])
    return(
        <div className='PlanBoxMain'>
            {
                plans.map((plan,i)=>{
                    return <PlanBox plan={plan} index={i} key={i}></PlanBox>
                })
            }
        </div>
    )
}

export default Plans;