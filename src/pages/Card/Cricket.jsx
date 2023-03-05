import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import {getMovies} from '../../redux/action/getMoviesAction'
import SingleSports from '../../componets/SingelSports/SingleSports'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Carousel } from "../ImagaSlider/Style";
const Cricket = () => {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 6,
        speed: 500,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              centerMode: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

  const dispatch=useDispatch()
  const sportsData=useSelector((state)=>state?.GetSportsData?.sportsData)
  
  console.log("Sports Data:::::::::::::::::",sportsData)

  const desiredGenres = ['Cricket'];


        const filteredContent =sportsData?.filter(movie => {
          return movie?.program?.genres?.some(g => desiredGenres.includes(g));
        });
        
  useEffect(() => {
    dispatch(getMovies())
  },[]);
    return (

      
        <Container>
            <h4>Cricket</h4>
           
            <Carousel {...settings}>
           
            {
          filteredContent?.map((data)=>(
          
            <SingleSports program={data.program}  title={data.title} duration={data.duration} genres={data.genres} />
       
             )
            )
           }
                
            </Carousel>
        
        </Container>
    );
}


export default Cricket;

const Container = styled.div`



`;

