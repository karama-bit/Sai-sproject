import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddBook(){
    const navigate=useNavigate();
    const [book,setBook]=useState({title:"",author:"",price:""})
    const url = "http://localhost:8080/api/books";
    
    const inputHandler=(e)=>{
        setBook((book)=>({
            ...book,
            [e.target.id]:e.target.value
        }))
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const data=axios.post(url,book);
        data.then(resp=>{
            navigate('/booklist')
        })
        .catch(error=>console.log(error));
    }

    return(
        <div>
            <h1>Book Registration</h1>
            <div className="row">
                <div className="col-md-6 offset-3">
                    <form className="form" onSubmit={submitHandler}>
                        {/* <label>Id</label>
                        <input type = "number" id="id" placeholder="Enter Id"
                        value={book.id} className="form-control" onChange={inputHandler}/> */}
                        <label>Title</label>
                        <input type = "text" id="title" placeholder="Enter Title"
                        value={book.title} className="form-control" onChange={inputHandler}/>
                        <label>Author</label>
                        <input type = "text" id="author" placeholder="Enter Author"
                        value={book.author} className="form-control" onChange={inputHandler}/>
                        <label>Price</label>
                        <input type = "number" id="price" placeholder="Enter Price"
                        value={book.price} className="form-control" onChange={inputHandler}/>
                        {/* <label>Status</label>
                        <input type = "text" id="status" placeholder="Enter status"
                        value={book.status} className="form-control" onChange={inputHandler}/> */}
                        <br/>
                        <button className="btn btn-primary" type="submit">Register</button>
                    </form>
                </div>
            </div>
   
        </div>
    )

}