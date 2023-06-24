import React,{useState,useEffect} from 'react';
import './listing.css';
import { useParams} from 'react-router-dom';
import ListingDisplay from './listingDisplay';
import axios from 'axios';
import CusineFilter from '../filters/cuisineFilter'

const base_url = "http://3.17.216.66:4000";

const Listing = () => {
    let params = useParams();

    const [restList,setRestList] = useState();
    let mealid = params.mealId;
    useEffect(() => {
       
        sessionStorage.setItem('mealId',mealid)
        axios.get(`${base_url}/restaurant?mealtype_id=${mealid}`)
        .then((res) => {
            setRestList(res.data)
        })
    },[])
    
    return(
        <>
            <div className='row'>
                <div id="mainListing">
                    <div id="filter">
                        <CusineFilter mealId={mealid}/>
                    </div>
                    <ListingDisplay listData={restList}/>
                </div>
            </div>
            
        </>
        
    )
}

export default Listing