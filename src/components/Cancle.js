import React from "react";
import { Data } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import '../components/style/style.css'
import {IoChevronUpSharp} from 'react-icons/io5'
const Cancle = () => {
  return (
    <div>
      <div className="">
      
      <div className="appointment container d-flex mt-5">
                <div className="apText1 w-25 text-center">Upcoming appointment</div>
                <div className="mx-md-5 apText2">Past appointment</div>
                <div className="mx-md-5 apText3">Medical Report</div>
            </div>
            <div className="Treatment">
            <div className="mt-5 d-flex">
              <div><h5>Role Canel Treatment</h5></div>
              <div className="px-md-5"><button className="px-md-5 mt-1 showbtn"><IoChevronUpSharp/> Show Previous Treatment</button></div>
            </div>
         {
           Data.map((element,index)=>{
             return(
              <div className="d-flex container mt-5">
              <div className="steps">{element.id}</div>
              <div className="px-md-5"><h4>{element.date}</h4></div>
              <div className="px-md-5"><h4>Treatment</h4><h5>{element.Treatment}</h5></div>
              <div className="px-md-5"><h4>Dentist</h4> <h5>{element.Dentist}</h5></div>
              <div className="px-md-5"><h4>Nurse</h4> <h5>{element.Nurse}</h5></div>
              <div className="px-md-5">Notes</div>
          </div>
             )
           })
         }
            </div>
      </div>
    </div>
  );
};

export default Cancle;
