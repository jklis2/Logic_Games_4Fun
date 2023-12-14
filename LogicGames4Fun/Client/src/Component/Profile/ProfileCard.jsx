import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../Redux/thunks/fetchUserData";
import ProfileModal from "./ProfileModal";
import { ProfileAchievements } from "./ProfileAchievements";

export const ProfileCard = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) dispatch(fetchUserData());
  }, [dispatch, token]);

  const { user } = useSelector((state) => state.auth);
  const [type, setType] = useState("");

  const modalHandler = (type) => {
    setType(type);
    setShowModal(true);
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {ReactDOM.createPortal(
        <ProfileModal setShow={setShowModal} show={showModal} type={type} />,
        document.getElementById("modal-root")
      )}

      <div className="profile d-flex align-items-center">
        <div className="container profile__box bg-light">
          <div className="row py-5">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-center">
                <img
                  onClick={() => modalHandler("avatar")}
                  src={`${process.env.PUBLIC_URL}${user?.path}`}
                  alt="User avatar"
                ></img>
              </div>
              <div className="d-flex justify-content-center fs-4 mt-3">
                <span className="profile__info px-2">{user?.login}</span>
                <span>|</span>
                <span className="profile__info text-success px-2">Online</span>
              </div>
              <div className="mt-4 fs-4 px-3 py-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                fuga repellendus cupiditate, blanditiis necessitatibus vero
                provident dignissimos, fugit nisi explicabo aut ab deleniti
                laboriosam voluptatum distinctio. Quasi atque blanditiis fugit.
              </div>

              <div className="row mt-3 py-2 px-3">
                <div className="col-lg-4">
                  <button
                    onClick={() => modalHandler("profile")}
                    className="button-light w-100 h-100 fs-3 p-3"
                  >
                    Edit profile
                  </button>
                </div>
                <div className="col-lg-4 my-3 my-lg-0">
                  <button
                    onClick={() => modalHandler("password")}
                    className="button-light w-100 fs-3 p-3 "
                  >
                    Change password
                  </button>
                </div>
                <div className="col-lg-4">
                  <a href="/Dashboard">
                    <button className="button-light w-100 fs-3  p-3">
                      Back to dashboard
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ProfileAchievements />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};