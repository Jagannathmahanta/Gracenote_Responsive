import React from 'react'
import { useSelector } from 'react-redux';
import "./modalShow.css"


export default function ModalShow({closeModal}) {

    const CelibratyDetailsById = useSelector((state)=>state.GetCelibratyData.CelibratyData);
    console.log("Celibraty Data At Modal",CelibratyDetailsById)

  return (
    <>
    <div className="modal" onClick={closeModal}></div>
    <div className='card-contain'>
     <div className='image'>
      <img src={`http://developer.tmsimg.com/${CelibratyDetailsById?.preferredImage?.uri.split('?')[0]}?api_key=sutnr87xw6e5duru7eytcxwd`} className='image' alt="" />
      </div>
      <div className='personal-details'>
      <h2 className='movie-desc'>{CelibratyDetailsById?.name?.first} {CelibratyDetailsById?.name?.last}({CelibratyDetailsById.gender})</h2>
      <p className='movie-desc'>Birth Place : {CelibratyDetailsById.birthPlace}</p>
      <p className='movie-desc'> Birth Date :{CelibratyDetailsById.birthDate} </p>
      <p className='movie-desc'>Movie Details:
       {/* {
        CelibratyDetailsById.credits.filter((items,index)=>CelibratyDetailsById.credits.type ==="movie" && index < 20).map((item)=>{
          return(
            <span> {item.title}{item !== item.length - 1 && ','}</span>
          )
        })
      }  */}
      {
        CelibratyDetailsById?.credits.filter((item)=>{
          return  item.type==="movie"
         }).map((item,index)=>{
          if(index <= 15){
            return <span>{item.title + ',' }</span>
          }
         })
      }
      </p>
      <p className='movie-desc'>Award :{
        CelibratyDetailsById?.awards?.map((award)=>{
          return(
          <span>{award.awardName + ','} ({award.year})</span>
          )})
        }</p>
      </div>
       
    </div>
         
     
         </>
  )
}
