import React from 'react'
import img from '../../assets/1.jpg'
import styled from 'styled-components'
import { AiFillCaretRight,AiOutlinePlus } from "react-icons/ai";
import './Style.css'
function Test() {
  return (
    <Container className='movies-list'>
    
      <Content className='card-container'>
        <Warp className='card'>
      <img src={img} alt="" className='card-image' />
      <Contex className='card-body'>
      <h2 className='name'>JAGANATH MAHANTA THE IRON MAN OF ODISHA</h2>
      <h6 className='des'>Threlar<br/>
      Children,Commedy,en,2012</h6>
     <h6 className='des'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque minus corporis illo et, blanditiis officiis non quod ducimus adipisci.
   </h6>
     <div>
     
      <button className='Watch'><AiFillCaretRight/> WATCH MOVIES</button></div>
     <div ><button className='Watchlist'><AiOutlinePlus/> ADD TO WATCHLIST</button></div>
     </Contex>
        </Warp>
      </Content>
    </Container>
    
  )
}

export default Test

const Container = styled.div`
`;
const Content = styled.div` 
 `
const Warp = styled.div`
`
const Contex =styled.div`
`