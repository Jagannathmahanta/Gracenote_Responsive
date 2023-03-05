import React from 'react'
import { useSelector } from 'react-redux';
import "./style.css";

export default function ShowModal({closeModal}) {

    const CelibratyDetailsById = useSelector((state)=>state.GetCelibratyData.CelibratyData);
    console.log("Celibraty Data At Modal",CelibratyDetailsById)

  return (
    <>
    <div className="modal-wrapper" onClick={closeModal}></div>
    <div className='modal-container'>
    <div >
            <img src={`http://developer.tmsimg.com/${CelibratyDetailsById?.preferredImage?.uri.split('?')[0]}?api_key=sutnr87xw6e5duru7eytcxwd`} className='card-image' alt="" />
        
    </div>
    {/* <button onMouseLeave={closeModal}>Close</button> */}
         
        
         
     </div>
         </>
  )
}
