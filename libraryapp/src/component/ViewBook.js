import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function ViewBook(props){
    const [book,setBook]=useState({});
    const param=useParams();
    const navigate=useNavigate();
    const url = "http://localhost:8080/api/books/"+param.id;
    const getData = () =>{
        const data = axios.get(url);
        data.then(resp => setBook(resp.data))
        .catch(error => console.log(error));
    }
    useEffect(() => {
        getData();
    },[])

    return(
        <div>
            <h1>View Book Component</h1>
            <button className = "btn btn-secondary" onClick={()=>{navigate(-1)}}>Go Back</button>
            <ul className="list-group">
                <li className="list-group-item">Id: {book.id}</li>
                <li className="list-group-item">Title: {book.title}</li>
                <li className="list-group-item">Author: {book.author}</li>
                <li className="list-group-item">Price: {book.price}</li>
                <li className="list-group-item">Status: {book.status}</li>
            </ul>
        </div>
    );
}