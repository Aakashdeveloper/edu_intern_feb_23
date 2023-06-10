import React from 'react';
import './App.css';
import Header from './Header';

const App = () => {
    return(
        <>
            <Header/>
            <div style={{height:'200px',width:'500px',backgroundColor:'skyblue',textAlign:'center'}}>
                <h1>React Zom App</h1>
                <h2>Final Project</h2>
            </div>
            <div className="secondDiv">

            </div>
           
        </>
       
    )
}

export default App;