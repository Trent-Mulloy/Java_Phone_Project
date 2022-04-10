import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../components/Footer';

const Home = props =>{

    return( 
        <div className='container-fluid'>
            <div className='saveTodayBox d-flex w-80 justify-content-evenly'>
                <h2>Do you feel like you are paying too much for your phone plan?</h2>
                <Link className="btn" to="/plans">Explore Our Options And Save Today!</Link>
            </div>
            
            <div className='feauturedDevices'>
                <h2 className='display-4'>Check Out Our Newest Devices!</h2>
                <Carousel width={400} height={500} controls={false}>
                    <Carousel.Item interval={2500}>
                        <img width={300} height={320} alt="900x500" src="https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/apple/iphone-13-pro/graphite/device-front.png"/>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <img width={300} height={320} alt="900x500" src="https://m.xcite.com/media/wysiwyg/Samsung-s22/en/ultra-green/back.png"/>
                    </Carousel.Item >
                    <Carousel.Item interval={2500}>
                        <img width={300} height={320} alt="900x500" src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S21-FE-5G/White/Samsung-Galaxy-S21-FE-5G-White-frontimage.png"/>
                    </Carousel.Item>
                </Carousel>
                <Link className="btn" to="/devices">View All Devices</Link>
            </div>
            <div className='advert1Box'>
                <h3>Save up to 40% compared to our top competitors!</h3>
                <p>*When you switch from another carrier or add a new line! Bring your own device or shop for one now!</p>
            </div>
            <h2 className='display-4'>Our Most Popluar Plans!</h2>
            <div className='feauturedPlans'>
                <div className='PlanBox'>
                    <div className="card text-white">
                        <img className='deviceImg' src="https://cdn4.iconfinder.com/data/icons/logos-and-brands-2/471/181_Java_logo_logos-512.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Java Pre-Paid</h5>
                            <p class="card-text">Pre-Paid, 20Gb/month, 5G data, unlimited Talk & Text, Mobile Hotspot, Fraud call blocking, NO INTERNATIONAL FEES</p>
                            <p>$32.99/Month per line</p>
                        </div>
                    </div>
                </div><Link className="btn" to="/plans">Compare All Plans</Link>
                <div className='PlanBox'>
                    <div className="card text-white">
                        <img className='deviceImg' src="https://www.nicepng.com/png/full/223-2231460_courses-mda-ithub-programming-skills-software-development-advance.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Java Advance</h5>
                            <p class="card-text">Post-Paid, Unlimited 5G data, unlimited Talk & Text, Unlimited Mobile Hotspot, Fraud call blocking, 4K Streaming, HBO Max included</p>
                            <p>$49.99/Month per line</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='coverageMap'>
                <h2>Nationwide HighSpeed Coverage!</h2>
                <img className='coverageImg' src='https://mobilecitizen.org/wp-content/uploads/2016/09/MobileCitizen_CoverageMap-1024x624.png' alt=''/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;