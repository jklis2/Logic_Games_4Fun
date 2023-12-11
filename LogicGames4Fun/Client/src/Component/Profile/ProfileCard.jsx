import React, { useEffect, useState } from "react";
import { EditProfileForm } from "../EditData/EditProfileForm";
import { EditPhotoForm } from "../EditData/EditPhotoForm";
import { EditPasswordForm } from "../EditData/EditPasswordForm";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../Redux/thunks/fetchUserData";

export const ProfileCard = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) dispatch(fetchUserData());
  }, [dispatch, token]);

  const { user } = useSelector((state) => state.auth);

  // Edit profile
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const handleClickOpenEditProfile = () => setOpenEditProfile(true);
  const handleCloseEditProfile = () => setOpenEditProfile(false);

  // Edit password
  const [openEditPassword, setOpenEditPassword] = useState(false);
  const handleClickOpenEditPassword = () => setOpenEditPassword(true);
  const handleCloseEditPassword = () => setOpenEditPassword(false);

  // Edit photo
  const [openEditPhoto, setOpenEditPhoto] = useState(false);
  const handleClickOpenEditPhoto = () => setOpenEditPhoto(true);
  const handleCloseEditPhoto = () => setOpenEditPhoto(false);

  return (
    <>
      {ReactDOM.createPortal(
        <EditProfileForm
          open={openEditProfile}
          setOpen={setOpenEditProfile}
          handleClickOpen={handleClickOpenEditProfile}
          handleClose={handleCloseEditProfile}
        />,
        document.getElementById("modal-root")
      )}
      {ReactDOM.createPortal(
        <EditPasswordForm
          open={openEditPassword}
          setOpen={setOpenEditPassword}
          handleClickOpen={handleClickOpenEditPassword}
          handleClose={handleCloseEditPassword}
        />,
        document.getElementById("modal-root")
      )}

      {ReactDOM.createPortal(
        <EditPhotoForm
          open={openEditPhoto}
          setOpen={setOpenEditPhoto}
          handleClickOpen={handleClickOpenEditPhoto}
          handleClose={handleCloseEditPhoto}
        />,
        document.getElementById("modal-root")
      )}

      <div className="profile d-flex align-items-center">
        <div className="container profile__box bg-light">
          <div className="row py-5">
            <div className="col-md-6">
              <div className="d-flex justify-content-center">
                <img
                  onClick={handleClickOpenEditPhoto}
                  src={`${process.env.PUBLIC_URL}${user?.path}`}
                  alt="User avatar"
                ></img>
              </div>
              <div className="d-flex justify-content-center fs-4">
                <span className="profile__info px-2">{user?.login}</span>
                <span>|</span>
                <span className="profile__info px-2">Online</span>
              </div>
              <div className="mt-4 fs-4 px-3 py-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                fuga repellendus cupiditate, blanditiis necessitatibus vero
                provident dignissimos, fugit nisi explicabo aut ab deleniti
                laboriosam voluptatum distinctio. Quasi atque blanditiis fugit.
              </div>

              <div className="row mt-3 py-2 px-3">
                <div className="col-lg-4">
                  {" "}
                  <button
                    onClick={handleClickOpenEditProfile}
                    className="button-light w-100 h-100 fs-3 p-3"
                  >
                    Edit profile
                  </button>
                </div>
                <div className="col-lg-4 my-3 my-xl-0">
                  {" "}
                  <button
                    onClick={handleClickOpenEditPassword}
                    className="button-light w-100 fs-3 p-3 my-md-0"
                  >
                    Change password
                  </button>
                </div>
                <div className="col-lg-4">
                  {" "}
                  <a href="/Dashboard">
                    <button className="button-light w-100 fs-3  p-3">
                      Back to dashboard
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <h1>My achievements</h1>
                <div>Some achievements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
