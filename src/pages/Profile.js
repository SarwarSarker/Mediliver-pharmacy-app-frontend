import React from "react";
import { useSelector } from "react-redux";
import userImg from "../assets/user.png";
import "../styles/profile.scss";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="profile">
        <div className="container d-flex justify-content-center align-items-center vh-75 py-5">
          <div className="card h-75 w-50 rounded-5 mx-auto text-white">
            <div className="row">
              <div className="col-12 p-5">
                <div className="main active">
                  <div className="text-center">
                    <h1>Your Personal Information</h1>
                  </div>
                  <div className="input-text text-center">
                    <div>
                      <img src={userImg} alt="" className="w-25 h-25" />
                    </div>
                    <div className="input-div py-3">
                      <h5>
                        <b>Name : </b>
                        <span className="fs-5 text-capitalize">
                          {user.name}
                        </span>
                      </h5>
                    </div>
                    <div className="input-div">
                      <h5>
                        <b>Email : </b>
                        <span className="fs-5 ">{user.email}</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
