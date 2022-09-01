import React from 'react'
import './list.css'
import '../../index.css'
import Modal from "../modal/Modal";
import Header from "../header/header";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
const PAGE_NUMBER = 1;
const NAMA = 'Batman';

const List = () => {
    const[state, setState] = useState([]);
    const [search, setsearch] = useState(NAMA);
    const[page, setPage] = useState(PAGE_NUMBER);
    
    useEffect( () => {
        fetch('http://www.omdbapi.com/?apikey=faf7e5bb&s='+search+'&page='+page)
        .then(res => res.json())
        .then(json => setState([...state, ...json.Search]))
    }, [page,search])
    
    
    const scrollToEnd = () =>{
        setPage(page+1);
    }    
    window.onscroll = function(){
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        let modifier = 100; 
        if((currentScroll + modifier) > documentHeight) {
            scrollToEnd();
        }
        
    }
    
    return (
        <div className='wrapper'>
            <Header/>
            
            {state.map((data, i) => 
              (
                <div className='container' key={i}>
                    
                    <Modal nama={data.Poster}/>
                    <img src={data.Poster} width="100%" height="290px" className='img-movie' />
                    
                    <Link to={"/detail/"+btoa(data.Poster)+"/"+data.Title+"/"+data.Year}>
                        {data.Title} <br/>
                        {data.Year}<br/>
                    </Link>
                    
                </div>
              )
            )}
        </div>
    )
}

export default List