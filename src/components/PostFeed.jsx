import React from "react";
import { useSelector } from "react-redux";
import { doc, updateDoc } from "firebase/firestore";
import { selectUser } from "../slice/features/user/userSlice";
import { db } from "../firebase";
import LikesOnPost from "./LikesOnPost";
// import post from "../Data/post";
// import "./PostFeed.css";

function PostFeed({ post }) {
  const user = useSelector(selectUser);
  const handleJoinBtn = async () => {
    // handle join button click
    alert(`Join button clicked ${post.id}\n${user.uid}`);
    // add user id to participants in post collection
    const postRef = doc(db, "posts", post.id);
    // postRef get data as user id
    await updateDoc(postRef, {
      paticipicare: [{ user: 1, name: "name", image: "image" }],
    });
    console.log("postRef", postRef.data);
  };
  return (
    <div id="post" className="rounded mb-3 border shadow">
      <div className="d-flex align-items-center gap-2 mb-3">
        <img
          src={post.user.image}
          alt={post.user.username}
          id="profile-img"
          width="50"
          height="50"
        />

        <div className="">
          <div id="user-name" className="fw-bold" style={{ fontSize: "12px" }}>
            {post.user.name}
          </div>
          <div id="location" style={{ fontSize: "10px" }}>
            {post.user.location}
          </div>
        </div>
      </div>
      <img
        src={post.event.image}
        alt="post"
        id="image"
        width="400"
        height="300"
        className="rounded"
      />
      <div>
        <div>{user && <LikesOnPost id={post.id} likes={post.likes} />}</div>
        <div className="m-0">
          <p className="m-0 fw-bold">{post.event.name}</p>
          <p className="mb-3" style={{ fontSize: "14px" }}>
            <i className="fa-solid fa-location-dot" />
            <span className="ms-1">{post.event.location}</span>
          </p>
        </div>

        <p style={{ fontSize: "12px" }} className="lh-sm">
          {post.event.description}
        </p>
      </div>

      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleJoinBtn()}
          style={{ width: "100%" }}
        >
          Join
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary mt-2"
          data-bs-toggle="modal"
          data-bs-target="#participants"
          style={{ width: "100%" }}
        >
          {" "}
          View Participents
        </button>
      </div>
    </div>
  );
}

export default PostFeed;
