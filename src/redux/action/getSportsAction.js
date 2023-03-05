import {GET_SPORTS_REQUEST,GET_SPORTDETAILS_REQUEST,GET_MOVIEDETAILS_REQUEST} from './constant';
export const getSports=()=>{
    return{
        type:GET_SPORTS_REQUEST
    }
}


export   const getSportDetails=(payload)=>{
    console.log("AT Action Sports",payload);
       return{
           type:GET_SPORTDETAILS_REQUEST,
           payload
       }
   }

export const getMoviesDetails=(payload)=>{
 console.log("AT Action",payload);
    return{
        type:GET_MOVIEDETAILS_REQUEST,
        payload
    }
}