import React from 'react'
import styled from 'styled-components';
import './Style.css'
import { getSportDetails } from '../../redux/action/getSportsAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiFillCaretRight,AiOutlinePlus,AiOutlineCaretRight } from "react-icons/ai";

function SingleSports({program,duration}) {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const sportDetailsById = useSelector((state)=>state?.GetSportDetailsData?.sportDetails);
  console.log("Sports by Id",sportDetailsById)
  const handleImage=(id)=>{
    console.log("TSM ID ",id)
    dispatch(getSportDetails(id)) 
    navigate('/sports')
  }
  return (
    

    <Container className='sport-list'>

      <Content className='sport-container'>
        <Warp className='sport-card' >
        <img src={`http://developer.tmsimg.com/${program.preferredImage.uri.split('?')[0]}?api_key=sutnr87xw6e5duru7eytcxwd`} className="sport-image" onClick={()=>handleImage(program.tmsId)}alt="" />
      
        <Begning className="start">
        <h6 className='duration'>{duration} m</h6>
          <h2 className='sport-type'><AiOutlineCaretRight/> {program.genres }</h2>
           
        </Begning>
      <Contex className='sport-body'>
      <h2 className='sport-name' onClick={()=>handleImage(program.tmsId)}><AiFillCaretRight/>{program.title}</h2>
      <h6 className='descript'>{program.eventTitle}</h6>
      {/* {genres},{descriptionLang},{releaseYear}</h6>
     <h6 className='des'>{shortDescription} </h6> */}
    
     
     
     <div ><button className='Watchlist-btn'><AiOutlinePlus/> ADD TO WATCHLIST</button></div>
     </Contex>
        </Warp>
      </Content>
    </Container>
    
      // <Content onClick={handleImage}>
        
      //   <Wrap>
         
      // <img src={`http://developer.tmsimg.com/${program.preferredImage.uri.split('?')[0]}?api_key=sutnr87xw6e5duru7eytcxwd`} onClick={()=>handleImage(program.tmsId)}alt="" />
      // <b>{program.title}</b>
      // <span>{program.eventTitle}</span>
      // </Wrap>
      // </Content>
 
  )
}

export default SingleSports

const Container = styled.div`

`;

const Content = styled.div`

`

const Warp = styled.div`
`
const Contex =styled.div`
`
const Begning =styled.div``