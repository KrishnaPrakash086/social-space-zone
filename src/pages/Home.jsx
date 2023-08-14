import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
// import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import FeedCollection from "../components/FeedCollection";
import PostInputModal from "../components/PostInputModal";
import ViewParticipents from "../components/ViewParticipants";
import DashboardLayout from "../layouts/DashboardLayout";
import CreatePost from "../components/CreatePost";
// import HeaderLayout from "../layouts/HeaderLayout";

import photo from "../assets/photo.png";
import video from "../assets/video.png";
import event from "../assets/event.png";
import article from "../assets/article.png";

import "./Home.css";

function Home() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const [PopupTrigger, setPopupTrigger] = useState(false);

  const [profileData, setProfileData] = React.useState({
    name: "",
    profession: "",
    location: "",
    bio: "",
    image: "",
  });

  useEffect(() => {
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
    // <HeaderLayout>
    <DashboardLayout>
      <div className="bg-light">
        <div className="text-center py-4 row">
          <div style={{ width: "max-content", margin: "auto" }}>
            <div className="col">
              <img
                src="data:image/jpeg;base64,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"
                className="img-fluid rounded-circle"
                style={{
                  height: "40px",
                  width: "40px",
                  objectFit: "cover",
                }}
                width={100}
                height={100}
                alt="profile-pic"
              />
              <button type="button" onClick={() => setPopupTrigger(true)} className="post-button rounded-5">Start a post</button>
            </div>
            <div className="post-icons">
              <div className="post-icon-div rounded-5">
                <img className="post-icon" src={photo} alt="photos" />
                <h6>Photo</h6>
              </div>
              <div className="post-icon-div rounded-5">
                <img className="post-icon" src={video} alt="video" />
                <h6>Video</h6>
              </div>
              <div className="post-icon-div rounded-5">
                <img className="post-icon" src={event} alt="event" />
                <h6>Event</h6>
              </div>
              <div className="post-icon-div rounded-5">
                <img className="post-icon" src={article} alt="write article" />
                <h6>Write Article</h6>
              </div>
            </div>
            {/* <Button variant="primary" onClick={handleShow}>
            Create Post +
          </Button> */}

            <CreatePost 
              trigger={PopupTrigger} 
              setTrigger={setPopupTrigger}
              img="data:image/jpeg;base64,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"
              name="Angelina Gupta"  
            />
          </div>
        </div>
        <FeedCollection />
        <ViewParticipents />
      </div>
      <PostInputModal {...{ show, setShow }} />
    </DashboardLayout>
    // </HeaderLayout>
  );
}

export default Home;
