import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import '../../componets/Test/Style.css'
import { AiFillCaretRight,AiOutlinePlus } from "react-icons/ai";
import { useSelector,useDispatch } from 'react-redux';
import { getMoviesDetails } from '../../redux/action/getSportsAction';
import { useNavigate,useLocation } from 'react-router-dom';
import Videos from '../../pages/Videos';
function SingleContent({title,preferredImage,id,topCast,releaseYear,descriptionLang
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
    
    {/* // <Container>
    
    //   <Content>
    //     <Warp>
    //   <img src={`http://developer.tmsimg.com/${preferredImage.uri.split('?')[0]}?api_key=sutnr87xw6e5duru7eytcxwd`} onClick={()=>handleImage(id)} alt="" />
    //   <b className='title'>{title}</b>
    //    <span className='subTitle'>Release Date
    //  <span className='subTitle'>{releaseDate}</span>
    //  </span>
    //     </Warp>
    //   </Content>
    // </Container> */}
  
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

export default SingleContent

const Container = styled.div`
`;
const Content = styled.div` 
 `
const Warp = styled.div`
`
const Contex =styled.div`
`
  




// const Container = styled.div`

// `;

// const Content = styled.div`
// display: flex;
// max-width:250;
//   flex-direction: column;
//   width: 240px;
//   height:360px;
//   padding: 5px;
//   margin: 2px 15px;
//   background-color: #282c34;
//   border-radius: 10px;
//   position: relative;
//   img{
//     border-radius:10px;
//     width:240px;
//     height:300px;
//     z-index:10;
   
//   }

//   &:hover {
//     transform:scale(1.1);
//     border:3px solid rgba(249,249,249,0.8)
//     box-shadow:rgb(0 0 0/ 80% ) 0px 40px 58px -16px,  
//     rgb(0 0 0 / 72% ) 0px 30px 22px -10px;
//     background-color: white;
//   color: black;   
//   z-index:90;
// }
//   font-family: "Montserrat", sans-serif;
//   transition: all 250ms ease;
  

// `

// const Warp = styled.div`
// border-radius: 4px;
//   cursor: pointer;
//   position: relative;

//   a {
//     border-radius: 4px;
//     box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
//       rgb(0 0 0 / 73%) 0px 16px 10px -10px;
//     cursor: pointer;
//     display: block;
//     position: relative;
//     padding: 4px;

//     img {
//       width: 100%;
//       height: 100%;
//     }

//     &:hover {
//       padding: 0;
//       border: 4px solid rgba(249, 249, 249, 0.8);
//       transition-duration: 300ms;
//     }
//   }
// `;