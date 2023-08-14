import React from "react";

const singleEvents = {
  name: "Event_Name",
  location: "Event_Location",
  event_id: 1,
  user_id_of_post: 1,
  participants: [
    {
      name: "John Doe1",
      image: "https://picsum.photos/200",
      location: "some location",
      accpected: false,
    },
    {
      name: "Jane Doe2",
      image: "https://picsum.photos/200",
      location: "some location3",
      accpected: true,
    },
    {
      name: "John Doe3",
      image: "https://picsum.photos/200",
      location: "this is a location4",
      accpected: false,
    },
  ],
};

function ViewParticipants() {
  // const [singleEvents, setSingleEvents] = useState({});
  // localStorage hold the user id of the post

  // API call to get the event data Event by Event Id

  const localUserId = 1;
  return (
    <div
      className="modal fade"
      id="participants"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {singleEvents.name} - Participants
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {singleEvents.participants.map((participant, idx) => (
              <div className="row my-2 border p-3 rounded" key={idx}>
                <div className="col-8 d-flex align-items-center gap-3">
                  <img
                    src={participant.image}
                    alt={participant.name}
                    className="rounded-circle"
                    width="35"
                    height="35"
                  />
                  <div className="m-0">
                    <p className="m-0 lh-2" style={{ fontSize: "14px" }}>
                      {participant.name}
                    </p>
                    <p className="m-0 lh-1" style={{ fontSize: "12px" }}>
                      {participant.location}
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  {participant.accpected ? (
                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ width: "100%" }}
                      disabled={localUserId !== singleEvents.user_id_of_post}
                    >
                      Accepted
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={
                        localUserId === singleEvents.user_id_of_post
                          ? "btn btn-danger disable"
                          : "btn btn-warning pe-none"
                      }
                      style={{ width: "100%" }}
                      disabled={localUserId !== singleEvents.user_id_of_post}
                    >
                      {localUserId === singleEvents.user_id_of_post
                        ? "Reject"
                        : "Pending"}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewParticipants;
