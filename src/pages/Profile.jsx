import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { profileData } from "../Data/profile";
import { db } from "../firebase";
import DashboardLayout from "../layouts/DashboardLayout";
import HeaderLayout from "../layouts/HeaderLayout";

function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [profileData, setProfileData] = React.useState({
    name: "",
    profession: "",
    location: "",
    bio: "",
    image: "",
  });

  useEffect(() => {
    document.title = `Social Site | ${id}`;
    const userDetails = async () => {
      const docRef = collection(db, "users");
      const q = query(docRef, where("uid", "==", id));
      const docSnap = await getDocs(q);

      if (docSnap.empty) {
        console.log("No matching documents.");
        navigate("/social");
      } else {
        // eslint-disable-next-line no-shadow
        docSnap.forEach((doc) => {
          setProfileData(doc.data());
        });
      }
    };
    userDetails();
  }, []);

  return (
    <DashboardLayout>
      <div
        className="container pt-5"
        style={{ minHeight: "calc(100vh - 51px)" }}
      >
        <div className="row mt-5">
          <div className="col-md-4 text-center align-self-center">
            <img
              src={profileData.image}
              className="img-fluid rounded-circle"
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
              }}
              width={100}
              height={100}
              alt="profile-pic"
            />
          </div>
          <div className="col-md-8">
            <h1>{id}</h1>
            <h1>{profileData.name}</h1>
            <p>{profileData.profession}</p>
            <p>Lives in {profileData.location}</p>
            <p>{profileData.bio}</p>
            <a href="https://www.linkedin.com/in/johndoe">LinkedIn</a>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;
