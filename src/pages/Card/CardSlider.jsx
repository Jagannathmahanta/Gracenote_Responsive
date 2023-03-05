import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import {getMovies} from '../../redux/action/getMoviesAction'
import SingleSports from '../../componets/SingelSports/SingleSports'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Carousel } from "../ImagaSlider/Style";
const CardSlider = () => {
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
  useEffect(() => {
    dispatch(getMovies())
  },[]);
    return (

      
        <Container>
            <h4>Live Sports</h4>
           
            <Carousel {...settings}>
           
            {
          sportsData?.map((data)=>(
          
            <SingleSports program={data.program}  title={data.title} duration={data.duration} genres={data.genres} />
       
             )
            )
           }
                
            </Carousel>
        
        </Container>
    );
}


export default CardSlider;

const Container = styled.div`



`;

