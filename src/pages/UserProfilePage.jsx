import React, { use, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import UserUpdateModal from "../components/UserProfilePage/UserUpdateModal";
import { toast } from "react-toastify";

export default function UserProfilePage() {
  const [openModal, setOpenModal] = useState(false);
  // const { userId } = useParams();
  const { user, updateProfileInfo, setUser } = use(AuthContext);
  console.log(user);
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    console.log(displayName, photoURL);
    const userInfo = {
      displayName,
      photoURL,
    };
    try {
      await updateProfileInfo(userInfo);
      toast.success("Profile updated successFully");
      setOpenModal(false);
      setUser({
        ...user,
        displayName,
        photoURL,
      });
    } catch (err) {
      console.error("Error updating profile:", err);
      toast.error("Error updating profile");
    }
  };
  // console.log(user.photoURL);
  return (
    <div>
      {openModal && (
        <UserUpdateModal
          setOpenModal={setOpenModal}
          handleProfileUpdate={handleProfileUpdate}
        />
      )}
      <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 wrap-break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  src={`${
                    user?.photoURL ||
                    "https://res.cloudinary.com/dutnq2gdm/image/upload/v1745864054/user-1699635_640_mgcjmz.png"
                  }`}
                  className="shadow-xl rounded-full w-40 h-40 object-cover bg-gray-500 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div className="w-full text-center mt-20"></div>
          </div>
          <div className="text-center mt-6">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {user?.displayName || "User Name"}
            </h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold ">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              {user?.email || ""}
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  An artist of considerable range, Mike is the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm.
                </p>

                <button
                  onClick={() => setOpenModal(true)}
                  className="font-normal text-slate-700 hover:text-slate-400 underline cursor-pointer"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
