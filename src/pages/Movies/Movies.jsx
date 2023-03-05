import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleContent from '../../componets/SingleComponets/SingleContent'
import { getSports } from '../../redux/action/getSportsAction'
import styled from 'styled-components'
import { Carousel } from "../ImagaSlider/Style";
import { getGener } from '../../redux/action/getGenerAction'
function Movies() {

  const dispatch = useDispatch()
  const movies = useSelector((state) => state?.GetMoviesData?.moviesData)
  console.log("Componet Data:::::::::::::::::", movies)

  const genres = useSelector((state)=>state?.GetGenersData?.GenersData)
  console.log("Geners",genres);
  useEffect(() => {
    dispatch(getSports())
    dispatch(getGener())
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
  //   slidesToShow:6 ,
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

      <h4>Movies</h4>
      <Carousel {...settings}>
        {

          movies && movies?.map((movie) => (

            <SingleContent key={movie.tmsId} id={movie.tmsId}
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



export default Movies

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