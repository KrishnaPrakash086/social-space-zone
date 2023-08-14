import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { Button, Modal } from "react-bootstrap";
import { db } from "../firebase";

function PostInputModal({ show, setShow }) {
  const [postData, setPostData] = useState({
    event_name: "",
    description: "",
    location: "",
    date: "",
    image_url: "",
  });

  const onHandleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const resetData = () => {
    setPostData({
      event_name: "",
      description: "",
      location: "",
      date: "",
      image_url: "",
    });
  };

  const handleClose = () => setShow(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      postData.event_name.trim() === "" ||
      postData.description.trim() === "" ||
      postData.location.trim() === "" ||
      postData.date.trim() === "" ||
      postData.image_url.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }
    console.log(postData);
    await addDoc(collection(db, "posts"), {
      user: {
        id: 1,
        name: "Nayak 2",
        username: "krishna_nayak-2",
        image:
          "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
        location: "bhubneswar",
      },

      likes: [],
      comments: 6,
      shares: 2,
      event: {
        id: 177,
        name: "Event Name 12",
        location: "Event Location",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt sed sapiente deserunt! Accusantium, magni blanditiis ex odio, fugiat repellat voluptates voluptatum voluptatem, inventore praesentium distinctio soluta officiis a pariatur!",
        date: "2021-10-11",
        time: "10:00",
        image:
          "https://t4.ftcdn.net/jpg/01/64/83/47/360_F_164834714_2UMLp8c0bszO8T3kpuKjTPBNcmVO8ad0.jpg",
      },
      ...postData,
    });
    resetData();
    handleClose();
    window.location.reload();
    alert("Post Created!");
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Create Event Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form-group">
          <div className="row">
            <div className="col-12">
              <label htmlFor="grid-first-name" className="form-control-label">
                Event Name
              </label>
              <input
                onChange={onHandleChange}
                name="event_name"
                value={postData.event_name}
                type="text"
                className="form-control"
                id="grid-first-name"
                placeholder="Jane"
              />
            </div>
            <div className="col-12">
              <label htmlFor="grid-last-name" className="form-control-label">
                Description
              </label>
              <textarea
                onChange={onHandleChange}
                name="description"
                value={postData.description}
                className="form-control"
                id="grid-last-name"
                placeholder="..."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="grid-city" className="form-control-label">
                City
              </label>
              <input
                onChange={onHandleChange}
                name="location"
                value={postData.location}
                type="text"
                className="form-control"
                id="grid-city"
                placeholder="Albuquerque"
              />
            </div>
            <div className="col-6">
              <label htmlFor="grid-password" className="form-control-label">
                Date
              </label>
              <input
                onChange={onHandleChange}
                name="date"
                value={postData.date}
                type="date"
                className="form-control"
                id="grid-date"
                placeholder=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label htmlFor="grid-city" className="form-control-label">
                Image URL
              </label>
              <input
                onChange={onHandleChange}
                name="image_url"
                value={postData.image_url}
                type="text"
                className="form-control"
                id="grid-url"
                placeholder="Albuquerque"
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PostInputModal;
