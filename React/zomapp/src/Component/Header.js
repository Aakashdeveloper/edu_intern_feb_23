import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import {Link} from 'react-router-dom';

const url = "http://3.17.216.66:5000/api/auth/userinfo"

const Header = () => {

    const [userData,setUserData] = useState('')
    let navigate = useNavigate();

    useEffect(() => {
        if(sessionStorage.getItem('ltk') !== null){
            fetch(url,{
                method:'GET',
                headers:{
                    'x-access-token':sessionStorage.getItem('ltk')
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setUserData(data)
            })
        }
    },[])

    const handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userInfo')
        setUserData('');
        navigate('/')
    }

    const ConditionalHeader =  () => {
        if(userData){
            if(userData.name){
                sessionStorage.setItem('userInfo',JSON.stringify(userData))
                return(
                    <>
                        <Link to="register" className='btn btn-primary'>
                            <span className="glyphicon glyphicon-user"></span> Hi {userData.name}
                        </Link> &nbsp;
                        <button onClick={handleLogout} className='btn btn-danger'>
                            <span className="glyphicon glyphicon-log-out"></span> Logout
                        </button>
                    </>
                )
            }
        }else{
                return(
                    <>
                        <Link to="register" className='btn btn-primary'>
                            <span className="glyphicon glyphicon-user"></span> Sign Up
                        </Link> &nbsp;
                        <Link to="login" className='btn btn-success'>
                            <span className="glyphicon glyphicon-log-in"></span> Login
                        </Link>
                    </>
                )
            }
    }

    return(
        <>
            <header>
                <div id="brand">
                    Developer Funnel &nbsp;&nbsp; 
                    <Link className='btn btn-info' to="/">Home</Link>
                </div>
                <div id="social">
                    {ConditionalHeader()}
                  
                </div>
            </header>
        </>
    )
}

export default Header;