import React from 'react'
import './list.css'
import '../../index.css'
import { useEffect } from 'react';
import { useState } from 'react';
const PAGE_NUMBER = 1;

const List = () => {
    const[state, setState] = useState([]);
    // const [firstName, setFirstName] = useState('');
    const[page, setPage] = useState(PAGE_NUMBER);
    
    useEffect( () => {
        fetch('http://www.omdbapi.com/?apikey=faf7e5bb&s=Batman&page='+page)
        .then(res => res.json())
        .then(json => setState([...state, ...json.Search]))
    }, [page])
    
    
    const scrollToEnd = () =>{
        setPage(page+1);
    }    
    window.onscroll = function(){
        if((window.innerHeight + window.scrollY) > (document.body.offsetHeight)
        ){
            scrollToEnd();
        }
        
    }
    return (
        <div className='App'>
            {/* <input value={firstName}   name="firstName" onChange={e => setFirstName(e.target.value)} />
            {firstName}
            {state.length} */}
            {state.map((data, i) => 
              (
                <div className='container' key={i}>
                    No = {i} <br/>
                    Title = {data.Title} <br/>
                    Tahun = {data.Year}<br/><br/><br/>
                </div>
              )
            )}
        </div>
    )
}

export default List