import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrder';

const url = "http://localhost:8899/orders";

const ViewOrder = () => {

    const [orders,setOrder] = useState();

    useEffect(() => {
        axios.get(url).then((res) => {setOrder(res.data)})
    })

    return(
        <>
            <DisplayOrder orderData={orders}/>
        </>

    )

}

export default ViewOrder;