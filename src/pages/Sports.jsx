import React from 'react'
import { useSelector } from 'react-redux';
import { AiFillCaretRight, AiOutlinePlus, AiOutlineShareAlt } from "react-icons/ai";
import styled from 'styled-components';
import './style.css'
import './sportsStyling.css'



function Sports() {

  const sportDetailsById = useSelector((state) => state?.GetSportDetailsData?.eachsportDetails );
  console.log("Dusk till Dawn in Sports" , sportDetailsById);

  return (
  <>
    <Container className='main'>
      <Subcontainer className='details'>
        <Content className='container'>
          <Warp className='details-card'>

            <Contex className='details-cardbody'>
                 
                <h2 >{sportDetailsById?.eventTitle} <h6>{sportDetailsById?.title}</h6></h2> 
        
              {sportDetailsById?.episodeNum && <p>Episode Number : {sportDetailsById?.episodeNum }</p>}
              <div className='timing'>
                {sportDetailsById?.startTime && <p> {sportDetailsById?.startTime.substring(0, 10)} {sportDetailsById?.startTime.substring(11, 16)} {sportDetailsById?.startTime.charAt(16)} </p> }
                {sportDetailsById?.endTime && <p>to {sportDetailsById?.endTime.substring(0, 10)} {sportDetailsById?.endTime.substring(11, 16)} {sportDetailsById?.endTime.charAt(16)}  </p> }
                {sportDetailsById?.duration && <p> || Duration :  {sportDetailsById?.duration} min</p>}
              </div>
              
              {sportDetailsById?.genres && <p>Genre: {sportDetailsById?.genres.map(genre => `${genre}`).join(', ')}</p>}
              {sportDetailsById?.season?.content && <p>Season Year  {sportDetailsById?.season?.content} </p>}
              

              <h3>MORE DETAILS</h3>

                
                  <div className='stationBio'>
                      {sportDetailsById?.teams && <p>Teams :  {sportDetailsById?.teams.map(team => `${team.name}`).join(' Vs ')} </p>}
                     
                  </div>
                  
                  <div className = "videoQuality "> <p>  </p>
                      <div className ="videoQualityDetails" >
                        {sportDetailsById?.teams && <p>Home Team:  {sportDetailsById?.teams.map(team => team?.isHome && `${team.name}`)} </p>}
                      </div>
                  </div>
             
              {sportDetailsById?.longDescription && <p>Description : {sportDetailsById?.longDescription} </p>}
           
              <Controls>
                  {/* <PlayButton>
            <button className='play-button'><FaPlay size={20} color="#a4a7ab"/></button>
            <span className='watch-movies'>Watch Movies</span>
        </PlayButton> */}
                  <WatchList>
                    <button className='add-list'><AiOutlinePlus size={30} /></button>
                    <span className='watch-list'>watchlist</span>
                  </WatchList>
                  <Share>
                    <button className='shares'><AiOutlineShareAlt size={30} /></button>
                    <span className='share'>share</span>
                  </Share>
                </Controls>

            </Contex>
          <></>
          <img src={`http://developer.tmsimg.com/${sportDetailsById?.preferredImage?.uri.split('?')[0]}?api_key=sutnr87xw6e5duru7eytcxwd`} alt = "{program.title}"  />
          </Warp>
        </Content>
        </Subcontainer>
      </Container>
    </>
  )
}

export default Sports;

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
`
const Subcontainer = styled.div`
color:white;`
const Content = styled.div`
color:white;
`
const Warp = styled.div`
color:white;
`
const Contex = styled.div`
color:white;
`

const para = styled.p`
color:white;
display:content ;
`
const Controls = styled.div`
display:flex;
margin-top: 20px;
`
// const PlayButton = styled.button`
// margin-left:16px;
// border-radius:4px;
// font-size:15px;
// margin-right:20px
// display:flex;
// align-items:center;
// padding: 0px 10px 0px 30px;
// height: 56px;
// border:none;
// font-weight:bold;
// background:none;
// color : white;
// cursor:pointer;
// `

const WatchList =styled.button`
margin-left:5px;
border-radius:4px;
font-size:15px;
margin-right:20px;
// display:grid;
align-items:center;
padding: 0px 0px 0px 30px;
height: 56px;
border:none;
font-weight:bold;
background:none;
color:white;
cursor:pointer;
`
const Share = styled.button`
// margin-left:10px;
border-radius:4px;
font-size:15px;
margin-right:20px
// display:grid;
align-items:center;
padding: 0px 10px 0px 30px;
height: 56px;
border:none;
font-weight:bold;
background:none;
color:white;
cursor:pointer;
`