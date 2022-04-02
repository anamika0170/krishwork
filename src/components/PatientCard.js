import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/style.css";
import axios from "axios";
import { BiUser } from "react-icons/bi";
import { Button } from "bootstrap";
import Navs from "./Navs";
import Cancle from "./Cancle";
import File from "./File";

const PatientCard = () => {
  const [patientData, setPatientData] = useState([]);
  const Image =
    "https://i0.wp.com/freehindiwishes.com/wp-content/uploads/2020/10/Good-Girl-Pic-9.jpg?resize=400%2C400";

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    await axios
      .get(
        "https://619f39821ac52a0017ba467e.mockapi.io/patientDetails?name=Diane"
      )
      .then((results) => {
        setPatientData(results.data);
      });
  };

  const phoneNumber = "1234567890";
  const StreetAdd = "JI. Diponegoro No. 21";
  const ZipCode = "655849";
  const MemberStatus = "Active Member";
  const RegisteredDate = "Feb 24th, 1997";
  const City = "Cilecap";

  return (
    <div className="MainPage">
      <Navs />
      <div className="patientCard container mt-5">
        {patientData.map((element, index) => {
          return (
            <div key={index}>
              <div className="card h-100 w-100">
                <div className="card-body pt-5">
                  <div className="profileImage">
                    <center>
                      <div>
                        <img
                          src={Image}
                          alt="wait....."
                          width={100}
                          height={100}
                          className="ImageCrd"
                        />
                      </div>
                    </center>
                  </div>
                  <h3 className="card-subtitle mb-2 text-muted text-center pt-5">
                    {element.name}
                  </h3>
                  <h5 className="card-text text-secondary">
                    diane.cooper@example.com
                  </h5>
                  <div className="PastUp">
                    <div class="container">
                      <div class="row justify-content-md-center pt-4">
                        <div class="col col-lg-4">
                          {element.Past}
                          <h6>Past</h6>
                        </div>
                        <div class="col-md-auto">
                          {element.Upcoming}
                          <h6>Upcoming</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="mb-5 messagebtn">Message</button>
              </div>
            </div>
          );
        })}
        <div class="card mx-md-1">
          <div class="card-body">
            <div>
              {patientData.map((element, index) => {
                return (
                  <div>
                    <div className="d-flex pt-5">
                      <div className="mx-5">
                        <h4 className="text-secondary pt-3">
                          Gender{" "}
                          <h5 className="text-dark pt-3">
                            {element.Gender}
                          </h5>
                        </h4>
                      </div>
                      <div className="mx-5">
                        <h4 className="text-secondary pt-3">
                          BirthDay{" "}
                          <h5 className="text-dark pt-3">
                            {element.Birthday}
                          </h5>
                        </h4>
                      </div>
                      <div className="mx-5">
                        <h4 className="text-secondary pt-3">
                          Phone Number
                          <h5 className="text-dark pt-3">{phoneNumber}</h5>
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex pt-5">
                      <div className="mx-5">
                        <h4 className="text-secondary pt-3">
                          Street Address
                          <h5 className="text-dark pt-3">{StreetAdd}</h5>
                        </h4>
                      </div>
                      <div className="mx-5">
                        <h4 className="text-secondary pt-3">
                          City<h5 className="text-dark pt-3">{City}</h5>
                        </h4>
                      </div>
                      <div className="mx-5">
                        <h4 className="text-secondary pt-3">
                          Zip Code{" "}
                          <h5 className="text-dark pt-3">{ZipCode}</h5>
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex pt-5">
                      <div className="mx-5">
                        <h4 className="text-secondary pt-3">
                          Member Status
                          <h5 className="text-dark pt-3">
                            {MemberStatus}
                          </h5>
                        </h4>
                      </div>
                      <div className="mx-5">
                        <h4 className="text-secondary pt-3">
                          Registered Date
                          <h5 className="text-dark pt-3">
                            {RegisteredDate}
                          </h5>
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        
        <div>
          <div className="card h-100 mx-md-3 w-100 pt-5">
            <h4>Notes</h4>
            <div className="card noteCard pt-5">
              <p className="pt-3">- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>- Lorem ipsum dolor sit amet, consectetur.</p>
              <p>- Lorem ipsum dolor sit amet.</p>
              <div>
                <button className="btn btn-primary mt-5 savebtn px-md-5">Save Note</button>
              </div>
            </div>
            <div>
              <h5 className="pt-5">Lorem ipsum dolor sit amet</h5>
              <div className="container">
                <div className="row pt-2">
                  <div className="col-8"><BiUser className="userIcons"/>Dr Mega Nanade</div>
                  <div class="col-4">20 Nov 19</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div className="d-flex secondComponent">
     <div className=""><Cancle /></div>
     <div className="px-md-5 mt-5"><File/></div>
     
     </div>
    </div>
  );
};

export default PatientCard;
