import React from 'react'
import {useParams} from 'react-router-dom'
import './detail.css'
const Detail = () => {
  const { img } = useParams();
  const { title } = useParams();
  const { tahun } = useParams();
  return (

    <div className='wrap'>
      <div className='conten'>
        <h3>
          <img src={atob(img)} className="img-cover"  height="290px"/><br/>
          <div className='title'>
            {title}<br/>
            <p>{tahun}</p><br/>
          </div>
          <div className='sinopsis'>
            Batman ventures into Gotham City's underworld when a sadistic killer leaves 
            behind a trail of cryptic clues. As the evidence begins to lead closer to home 
            and the scale of the perpetrator's plans become clear, he must forge new relationships, 
            unmask the culprit and bring justice to the abuse of power and corruption that has 
            long plagued the metropolis.
          </div>
        </h3>
      </div>
    </div>
  );
}

export default Detail