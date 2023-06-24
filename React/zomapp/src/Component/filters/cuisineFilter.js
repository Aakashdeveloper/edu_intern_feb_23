import React from 'react';

const url = "http://3.17.216.66:4000/filter/4?cuisine=1";

const CuisineFilter = (props) => {

    const handleFilter = () => {}

    return(
        <>
            <center><h3>Cuisine Filter</h3></center>
            <div style={{marginLeft:'15%'}} onChange={handleFilter}>
                <label className="radio">
                    <input type="radio" name="cuisine" value=""/>All
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="1"/>All
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="2"/>All
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="3"/>All
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="4"/>All
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="5"/>All
                </label>
            </div>

        </>
    )
}

export default CuisineFilter