// import React, { Component } from "react";
// import Slider from "react-slick";
// import styled from "styled-components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import {getMovies} from '../redux/action/getMoviesAction'
// import SingleSports from '../componets/SingelSports/SingleSports'
// import { useEffect } from 'react'
// import {useDispatch,useSelector} from 'react-redux'
// import { Carousel } from "./ImagaSlider/Style";
// const Comedy = () => {
//     const settings = {
//         className: "center",
//         centerMode: false,
//         infinite: false,
//         centerPadding: "60px",
//         slidesToShow: 6,
//         speed: 500,
//         mobileFirst: true,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               centerMode: false,
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//         ]
//     };

//   const dispatch=useDispatch()
//   const comedy=useSelector((state)=>state.GetMoviesData.moviesData)
  
//  console.log("Comedy",comedy)
//   const desiredGenres = ['action', 'Cricket'];


//       const filteredContent =comedy?.filter(movie => {
//         return movie?.genres?.some(g => desiredGenres.includes(g));
//       });
      
//       console.log("filtered content",filteredContent);

//   useEffect(() => {
//     dispatch(getMovies())
//   },[]);

  

//     return (

      
//         <Container>
//             <h4>Comedy</h4>
           
//             <Carousel {...settings}>
           
//             {
//           filteredContent?.map((data)=>(
          
//             <SingleSports program={data.program}  title={data.title} duration={data.duration} genres={data.genres} />
       
//              )
//             )
//            }
                
//             </Carousel>
        
//         </Container>
//     );
// }


// export default Comedy;

// const Container = styled.div`



// `;
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleComedy from '../../componets/SingleComedy/SingleComedy'
import styled from 'styled-components'
import { Carousel } from "../ImagaSlider/Style";
// import { getGener } from '../redux/action/getGenerAction'
import { getMovies } from '../../redux/action/getMoviesAction'
function Children() {

  const dispatch = useDispatch()
  const movies = useSelector((state) => state?.GetMoviesData?.moviesData)
  console.log("Componet Data:::::::::::::::::", movies)

  // const genres = useSelector((state)=>state)
  // console.log("Geners Data",genres);
  const desiredGenres = ['Children'];


        const filteredContent =movies?.filter(movie => {
          return movie?.genres?.some(g => desiredGenres.includes(g));
        });
        
        console.log("filtered content",filteredContent);
  

  useEffect(() => {
    dispatch(getMovies())
  }, []);
  // return (
  // <div>
  //   <h4>Movies</h4>
  //   <Container >
  //     {
  //       movies && movies.map((movie) => (

  //         <SingleContent key={movie.tmsId} id={movie.tmsId}
  //           preferredImage={movie.preferredImage} title={movie.title}
  //           releaseDate={movie.releaseDate} topCast={movie.topCast}
  //         />

  //       )

  //       )
  //     }
  //   </Container>
  // </div>


  // const settings = {
  //   className: "center",
  //   centerMode: false,
  //   infinite: false,
  //   centerPadding: "20px",
  //   slidesToShow: 6,
  //   slidesToScroll: 6,
  //   speed: 500,
  // };
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 8,
    slidesToScroll: 8,
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

  return (
    <Container>

      <h4>Kids Movies</h4>
      <Carousel {...settings}>
        {

filteredContent && filteredContent.map((movie) => (

            <SingleComedy key={movie.tmsId} id={movie.tmsId}
            preferredImage={movie.preferredImage} title={movie.title}
            releaseYear={movie.releaseYear} topCast={movie.topCast} genres={movie.genres}
            shortDescription={movie.shortDescription} subType={movie.subType} descriptionLang={movie.descriptionLang}
            />
          )

          )
        }

      </Carousel>

    </Container>
  );
}



export default Children

const Container = styled.div`
overflow-y :initial
`;






// const Warp = styled.div`
// border-radius:10px;
// overflow:hidden;
// border:3px solid rgba(249,249,249,0.1)
// box-shadow:rgb(0 0 0/ 69% ) 0px 26px 30px -10px,
// rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
// transition: all 250ms ease;
// img{
//   width:240px;
//   height:360px;
//   object-fit:cover;
// }
// &:hover{
//   transform:scale(1.1);
//   border:3px solid rgba(249,249,249,0.8)
//   box-shadow:rgb(0 0 0/ 80% ) 0px 40px 58px -16px,
//   rgb(0 0 0 / 72% ) 0px 30px 22px -10px;

// }
// `;
