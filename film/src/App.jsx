import React from 'react'
import './index.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import List from './components/listMovie/list';
import Detail from "./components/detailMovie/detail";

const App = () => {
    
    return (
    <Router>
        <div>
        <Routes>
            <Route  path="/detail/:img/:title/:tahun" element={<Detail/>}/>
            <Route  path="/" element={<List/>}/>
        </Routes>
        </div>
    </Router>
    )
}

export default App