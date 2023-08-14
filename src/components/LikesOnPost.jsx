import React from "react";
import { AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import ShareOnPost from "./ShareOnPost";

function LikesOnPost({ id, likes }) {
  const [user] = useAuthState(auth);
  const likesRef = doc(db, "posts", id);
  const handelLike = () => {
    if (likes?.includes(user.uid)) {
      updateDoc(likesRef, { likes: arrayRemove(user.uid) })
        .then(() => {
          console.log("unliked");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      updateDoc(likesRef, { likes: arrayUnion(user.uid) })
        .then(() => {
          console.log("liked");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div className="d-flex gap-2 py-3">
      <i>
        <AiFillHeart
          size={20}
          style={{
            cursor: "pointer",

            color: likes?.includes(user.uid) ? "red" : "grey",
          }}
          onClick={handelLike}
        />
        <i>{likes ? <span>{likes.length}</span> : "0"}</i>
      </i>
      <i>
        <AiOutlineComment size={20} style={{ cursor: "pointer" }} />
      </i>
      <i>
        <ShareOnPost />
      </i>
    </div>
  );
}
export default LikesOnPost;
