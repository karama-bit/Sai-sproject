import axios from "axios";
import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

export function BuyBook(){
    const navigate=useNavigate();
    const params=useParams();
    const [customer,setCustomer]=useState({name:"",email:"",phone:""})
    const url = "http://localhost:8080/api/customers/buy/"+ params.id;
    
    //Value changes it updates
    const inputHandler=(e)=>{
        setCustomer((customer)=>({
            ...customer,
            [e.target.id]:e.target.value
        }))
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const data=axios.post(url,customer);
        data.then(resp=>{
            navigate('/booklist')
        })
        .catch(error=>console.log(error));
    }

    return(
        <div>
            <h1>Buy Book</h1>
            <div className="row">
                <div className="col-md-6 offset-3">
                    <form className="form" onSubmit={submitHandler}>
                        <label>Name</label>
                        <input type = "text" id="name" placeholder="Enter Id"
                        value={customer.name} className="form-control" onChange={inputHandler}/>
                        <label>Email</label>
                        <input type = "email" id="email" placeholder="Enter email"
                        value={customer.email} className="form-control" onChange={inputHandler}/>
                        <label>Phone</label>
                        <input type = "number" id="phone" placeholder="Enter phome"
                        value={customer.phone} className="form-control" onChange={inputHandler}/>
                        <br/>
                        <button className="btn btn-primary" type="submit">Register</button>
                    </form>
                </div>
            </div>
   
        </div>
    )
    }