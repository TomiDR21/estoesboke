import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import MemesContainer from './MemesContainer';




const Home = () => 
    <div>
    <MemesContainer></MemesContainer>
    

    <div className='container'>
        <div className='texto-boke'>
            Buscá tu meme BOKE con los FILTROS de arriba. <br/><br/>
            <p>Ponele la más hermosa música a tu búsqueda:</p>
            <audio controls>
          <source src={`${process.env.PUBLIC_URL}/dalebo.mp3`} type="audio/mpeg"/>
        </audio>
           

        </div>   
    </div>

    </div>

    
export default Home