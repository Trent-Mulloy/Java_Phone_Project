import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeviceBox from '../components/DeviceBox';
import Footer from '../components/Footer';



const Devices = props =>{
    const [devices, setDevices] = useState([]);

    useEffect(()=>{
        axios.get("http://javaphoneapp.com/api/allDevices") 
            .then(res =>{
                setDevices(res.data);
            }) 
            .catch(err => console.log(err));
    },[])
    return(
        <div className='DeviceBoxMain'>
            {
                devices.map((device,i)=>{
                    return <DeviceBox device={device} index={i} key={i}></DeviceBox>
                })
            }
        </div>
    )
}

export default Devices;