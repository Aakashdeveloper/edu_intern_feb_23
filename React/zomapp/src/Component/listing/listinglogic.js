import React,{useState,useEffect} from 'react';
import './listing.css';
import { useParams} from 'react-router-dom';
import ListingDisplay from './listingDisplay';
import axios from 'axios';

const base_url = "http://3.17.216.66:4000";

const Listing = () => {
    let params = useParams();

    const [restList,setRestList] = useState();

    useEffect(() => {
        let mealid = params.mealId;
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
                        
                    </div>
                    <ListingDisplay listData={restList}/>
                </div>
            </div>
            
        </>
        
    )
}

export default Listing