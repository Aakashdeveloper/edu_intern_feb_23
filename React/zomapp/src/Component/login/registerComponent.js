import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

const url = "http://3.17.216.66:5000/api/auth/register"

const Register = () => {

    let navigate = useNavigate();
    const initialValues = {
        name: "Arpit",
        email: "arpit1@gmail.com",
        password:'12345678',
        phone: "9876543211"
    };

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    };

    const checkout = () => {
        console.log(values)
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate(`/login`))
    }
    

    return(
        <>
             <Header/>
            <div className="container">
                <hr/>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3>Register</h3>
                    </div>
                    <div className="panel-body">
                       
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label for="fname" className="control-label">Name</label>
                                <input className="form-control" id="fname"
                                name="name" value={values.name} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Password</label>
                                <input className="form-control" id="password" type="password"
                                name="password" value={values.password} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Phone</label>
                                <input className="form-control" id="phone"
                                name="phone" value={values.phone} onChange={handleInputChange}/>
                            </div>
                            
                        </div>
                      
                        <button className='btn btn-success' onClick={checkout}>
                                Register
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Register