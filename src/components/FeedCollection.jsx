import React, { useEffect } from "react";
import { collection, getDocs, limit, query } from "firebase/firestore";
import PostFeed from "./PostFeed";
// import { feedCollection } from "../Data/feedCollection";
import { db } from "../firebase";

function FeedCollection() {
  const [feedCollection, setFeedCollection] = React.useState([]);

  useEffect(() => {
    async function callBack() {
      const postsRef = collection(db, "posts");
      const lastThreeRes = query(postsRef, limit(8));
      const querySnapshot = await getDocs(lastThreeRes);
      const postData = [];
      querySnapshot.forEach((doc) =>
        postData.push({ ...doc.data(), id: doc.id })
      );
      setFeedCollection(postData);
    }
    callBack();
  }, [feedCollection, setFeedCollection]);

  return (
    <div className="py-4">
      {feedCollection.map((feed, index) => (
        <PostFeed key={index} post={feed} />
      ))}
    </div>
  );
}

export default FeedCollection;
