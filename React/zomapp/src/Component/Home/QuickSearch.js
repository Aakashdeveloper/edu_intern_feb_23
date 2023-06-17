import React,{useState,useEffect} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay'

const base_url = "http://3.17.216.66:4000";

const QuickSearch = () => {

    const [mealType,setMealType] = useState();

    useEffect(() => {
        fetch(`${base_url}/quicksearch`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMealType(data)
        })
    },[])

    return(
        <>
           <div id="quickSearch">
            <span className="quickHeading">Quick Search</span>
            <span className="quickSubHeading">Find Restaurants By MealType</span>
            <QuickDisplay mealData={mealType}/>
        </div>
        </>
    )
}

export default QuickSearch;