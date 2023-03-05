import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector,useDispatch } from 'react-redux';
import './style.css'
import { Link } from 'react-router-dom';
import { AiFillCaretRight,AiOutlinePlus,AiOutlineShareAlt } from "react-icons/ai";
import { getCelibrityById } from '../redux/action/getCelibrity';
import ShowModal from '../componets/Modal/ShowModal';
import ModalShow from '../componets/Modal/ModelShow';
import SingleContent from './Movies/Movies';
import GetMoreLike from './Movies/GetmoreLike';


function Musics({Genres}) {
  console.log("Geners at Page",Genres);
  const dispatch = useDispatch()
  const [showModal,setShowModal]=useState(false)
  const [Modal,setModal]=useState(false)
  
  const movieDetailsById = useSelector((state) => state.GetmovieData?.eachMovieData);
  console.log("Jagannth", movieDetailsById)
   
   const celibrityDetails = useSelector((state)=>state) ;
   console.log("CELEBRATY DATA",celibrityDetails)

 const closeModal = () => setShowModal(false)
 const modalClose = () =>setModal(false)
const movieGener=movieDetailsById?.genres



  const getPersopnId=(Id)=>{
    //setID(e)
    dispatch(getCelibrityById(Id))
    console.log("Personal ID",Id)
  }
  // useEffect ((Id)=>{
  //   dispatch(getCelibrityById(Id))
  // },[Id])

  return (
    <>
   
      <Container className='main-container'>
      <Subcontainer className='details'>
        <Content className='container'>
          <Warp className='details-card'>

            <Contex className='details-cardbody'>

              <h2 className='move-desc'>{movieDetailsById?.title} ({movieDetailsById?.releaseYear})</h2>

              <p className='movie-desc'>Genre : {movieDetailsById?.genres?.map((genreData, index, genre) => {
                return (
                  <>
                    {genreData} {index !== genre.length - 1 && ','}
                  </>
                )
              })}</p>
              {
                (movieDetailsById?.runTime ? <p className='movie-desc'>Runtime : {movieDetailsById?.runTime.slice(2, 4)} hr {movieDetailsById?.runTime.slice(5, 7)} min</p> : "")
              }
              {
                (movieDetailsById?.ratings?.map((item) => {

                  if (item.body === "Motion Picture Association") {
                    return (
                      <p className='movie-desc'>MPAA Rating : {item.code}</p>
                    )
                  } else {

                    <p className='movie-desc'>MPAA Rating : "N/A"</p>
                  }

                }))

              }

              <p className='movie-desc'>{movieDetailsById?.longDescription}</p>
              <p className='movie-desc'>Director : {movieDetailsById?.directors}</p>
              <p className='movie-desc'> Cast : {movieDetailsById?.cast?.map((items, index, item) => {

                return (
                  <>

                    <Link onMouseEnter={e=>{getPersopnId(items.personId);setShowModal(true)}}
                    onMouseLeave={e=>setShowModal(false)}
                    onClick={e=>{getPersopnId(items.personId);setModal(true);setShowModal(false)}}
                    
                    >{items.name} {index !== item.length - 1 && ','}</Link>
                      
                      </>
                )
              }
              )}
              </p>
                <div className='all'>
                  <div className='left'><AiFillCaretRight size="2rem" />
                   <p className='para'>Watch Latest Episode</p></div>
                  <div className='midle'><AiOutlineShareAlt size="2rem" />
                  <p>SHARE</p> </div>
                  <div className='right'><AiOutlinePlus size="2rem" />
                  <p>WATCHLIST</p> </div>
                </div>
     
    
            </Contex>
            
            <img src={`http://developer.tmsimg.com/${movieDetailsById?.preferredImage.uri.split('?')[0]}?imageSize=Ms&api_key=sutnr87xw6e5duru7eytcxwd`} className='card-image' alt="" />
          </Warp>
          
        </Content>
        </Subcontainer>
        <GetMoreLike/>
      </Container>
      {showModal && <ShowModal closeModal={closeModal}/>}
      {Modal && <ModalShow closeModal={modalClose}/>}
     
    </>
  )
}

export default Musics;

const Container = styled.main`
min-height: calc(100vh-70px);
padding: 0 calc(3.5vw + 5px );
position: relative;
color:white;
&:before{
background-image: url("/images/home-background.png") center center / cover
no-repeat fixed;
content:"";
position: absolute;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
}
`;
const Subcontainer = styled.div`
color:white;
`
const Content = styled.div`
color:white;
`
const Warp = styled.div`
color:white;
`
const Contex = styled.div`
color:white;
`