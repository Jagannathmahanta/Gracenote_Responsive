import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import './Style.css'
import { AiFillCaretRight,AiOutlinePlus } from "react-icons/ai";
import { useSelector,useDispatch } from 'react-redux';
import { getMoviesDetails } from '../../redux/action/getSportsAction';
import { useNavigate,useLocation } from 'react-router-dom';


function SingleMoreLikeThis({title,preferredImage,id,topCast,releaseYear,descriptionLang
,genres,shortDescription,subType,}) {

 
  const navigate=useNavigate();
const movieDetailsById=useSelector((state)=>state.GetmovieData.eachMovieData);
console.log("DETAILS AT PAGE",movieDetailsById)
const dispatch=useDispatch()

  const handleImage=(Id)=>{
    console.log("Movies tsmId",Id)
    dispatch(getMoviesDetails(Id))
   
    navigate('/videos')
    
  }

 const getGener=(genres)=>{
  console.log("Geners List",genres)
  
 }
  
  


  return (
<>
    
    <Container className='movies-list'>

      <Content className='card-container'>
        <Warp className='card'onClick={e=>{handleImage(id);getGener(genres)}}>
        <img src={`http://developer.tmsimg.com/${preferredImage?.uri?.split('?')[0]}?api_key=sutnr87xw6e5duru7eytcxwd`}  className='card-image' alt="" />  
      <Contex className='card-body'>
      <h2 className='name'>{title}</h2>
      <h6 className='des'>{subType}<br/>
      {genres +','} {descriptionLang},{releaseYear}</h6>
     <h6 className='des'>{shortDescription} </h6>
     <div>
     
      <button className='Watch'><AiFillCaretRight/> WATCH MOVIES</button></div>
     <div ><button className='Watchlist'><AiOutlinePlus/> ADD TO WATCHLIST</button></div>
     </Contex>
        </Warp>
      </Content>
    </Container>
    </>
    )
  
}

export default SingleMoreLikeThis

const Container = styled.div`
`;
const Content = styled.div` 
 `
const Warp = styled.div`
`
const Contex =styled.div`
`
  



