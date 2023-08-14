import React, { useState } from "react";

function CreatePost({trigger, setTrigger, img, name}){
    const [moreoptions, setMoreOptions] = useState(false);
    const [buttonToggle, setButtonToggle] = useState();
    const [leftValue, setLeftValue] = useState(5);

    return (trigger) ?  (
        <div className="post-overlay">
            <div className="post-modalContainer">
                <div className="post-first-layer">
                    <button type="button" className="post-first-layer-button">
                        <img
                            src={img}
                            className="img-fluid rounded-circle"
                            style={{
                                height: "56px",
                                width: "56px",
                                objectFit: "cover",
                            }}
                            width={100}
                            height={100}
                            alt="profile-pic"
                        />
                        <div className="post-first-layer-content">
                            <div className="post-first-layer-details">
                                <h2>{name}</h2>
                                <p>Post to Anyone</p>
                            </div>
                            <svg className="post-first-layer-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><mask id="ipSDownOne0"><path fill="#fff" stroke="#fff" strokeLinejoin="round" strokeWidth="4" d="M36 19L24 31L12 19h24Z"/></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDownOne0)"/></svg>
                        </div>
                    </button>
                    <svg onClick={() => setTrigger(false)} className="post-first-layer-cross-icon" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15.5 15.5l-10-10zm0-10l-10 10"/></svg>
                </div>
                <div className="post-second-layer">
                    <textarea rows="4" placeholder="What do you like to talk about?" />
                </div>
                <div className="post-third-layer">
                    <svg className="post-emoji" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="2 2 28 28"><path fill="rgba(0, 0, 0, 0.6)" d="M12 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0ZM9.553 19.106a1 1 0 0 1 1.338.44l.003.006l.034.058c.035.057.093.146.177.259c.169.225.44.536.832.85C12.71 21.337 13.993 22 16 22c2.007 0 3.29-.663 4.063-1.28c.393-.315.664-.626.832-.851a3.242 3.242 0 0 0 .211-.317l.004-.007a1 1 0 0 1 1.785.902v.001l-.002.002v.002l-.004.006l-.008.015a2.613 2.613 0 0 1-.1.175a4.96 4.96 0 0 1-.285.42a6.76 6.76 0 0 1-1.184 1.213C20.21 23.163 18.493 24 16 24c-2.493 0-4.21-.837-5.312-1.72a6.76 6.76 0 0 1-1.183-1.211a5.24 5.24 0 0 1-.386-.596l-.008-.015l-.003-.006l-.001-.003l-.001-.002a1 1 0 0 1 .447-1.341ZM16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14S23.732 2 16 2ZM4 16C4 9.373 9.373 4 16 4s12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16Z"/></svg>
                    <div className="post-third-layer-container">
                        <p style={{"display": buttonToggle === "photo" ? "block" : "none", "left": leftValue}}>Add a photo</p>
                        <p style={{"display": buttonToggle === "video" ? "block" : "none", "left": leftValue}}>Add a video</p>
                        <p style={{"display": buttonToggle === "event" ? "block" : "none", "left": leftValue}}>Create an event</p>
                        {
                            moreoptions ? (
                                <div className="post-third-layer-additional-container">
                                    <p style={{"display": buttonToggle === "occasion" ? "block" : "none", "left": leftValue}}>Celebrate an occasion</p>
                                    <p style={{"display": buttonToggle === "hiring" ? "block" : "none", "left": leftValue}}>Share that you’re hiring</p>
                                    <p style={{"display": buttonToggle === "poll" ? "block" : "none", "left": leftValue}}>Create a poll</p>
                                    <p style={{"display": buttonToggle === "document" ? "block" : "none", "left": leftValue}}>Add a document</p>
                                    <p style={{"display": buttonToggle === "expert" ? "block" : "none", "left": leftValue}}>Find an expert</p>
                                </div>
                            ) : (
                                <p style={{"display": buttonToggle === "more" ? "block" : "none", "left": leftValue}}>More</p>
                            )
                        }
                    </div>
                    <div className="post-third-layer-container">
                        <button onMouseOverCapture={() => { setButtonToggle("photo"); setLeftValue(5); }} onMouseOutCapture={() => setButtonToggle("")} type="button" aria-label="Picture"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1920 1536"><path fill="rgba(0, 0, 0, 0.6)" d="M640 448q0 80-56 136t-136 56t-136-56t-56-136t56-136t136-56t136 56t56 136zm1024 384v448H256v-192l320-320l160 160l512-512zm96-704H160q-13 0-22.5 9.5T128 160v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5V160q0-13-9.5-22.5T1760 128zm160 32v1216q0 66-47 113t-113 47H160q-66 0-113-47T0 1376V160Q0 94 47 47T160 0h1600q66 0 113 47t47 113z"/></svg></button>
                        <button onMouseOverCapture={() => { setButtonToggle("video"); setLeftValue(75); }} onMouseOutCapture={() => setButtonToggle("")} type="button" aria-label="Video"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="rgba(0, 0, 0, 0.6)" fillRule="evenodd" d="M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1.586l2.293 2.293A1 1 0 0 0 22 16V8a1 1 0 0 0-1.707-.707L18 9.586V8a3 3 0 0 0-3-3H5z" clipRule="evenodd"/></svg></button>
                        <button onMouseOverCapture={() => { setButtonToggle("event"); setLeftValue(145); }} onMouseOutCapture={() => setButtonToggle("")} type="button" aria-label="Event"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="rgba(0, 0, 0, 0.6)" d="M7 11h2v2H7v-2m14-6v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2M5 7h14V5H5v2m14 12V9H5v10h14m-4-6h2v-2h-2v2m-4 0h2v-2h-2v2Z"/></svg></button>
                        {
                            moreoptions ? (
                                <div className="post-third-layer-additional-container">
                                    <button onMouseOverCapture={() => { setButtonToggle("occasion"); setLeftValue(190); }} onMouseOutCapture={() => setButtonToggle("")} type="button" aria-label="Ocassion"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="rgba(0, 0, 0, 0.6)" d="m8.076 7.26l.095.083l8.486 8.485a1 1 0 0 1-.246 1.595l-.116.05L5.91 21.3c-1.952.72-3.853-1.115-3.26-3.064l.05-.146L6.526 7.705a1 1 0 0 1 1.447-.516l.103.07Zm9.031 4.344c.911.048 2.16.24 3.246.892a1 1 0 0 1-.925 1.77l-.104-.055c-.682-.41-1.554-.57-2.322-.61a7.666 7.666 0 0 0-.95.004l-.316.031a1 1 0 0 1-.281-1.98a8.587 8.587 0 0 1 1.652-.053Zm2.025-2.786a1 1 0 0 1 .116 1.993l-.116.007h-.708a1 1 0 0 1-.116-1.993l.116-.007h.708ZM15.95 8.05a1 1 0 0 1 .083 1.32l-.083.094l-1.061 1.061a1 1 0 0 1-1.497-1.32l.083-.094l1.06-1.06a1 1 0 0 1 1.415 0Zm-2.587-5.266c.448 1.346.208 2.82-.072 3.85a10.11 10.11 0 0 1-.69 1.863a1 1 0 0 1-1.79-.893a8.13 8.13 0 0 0 .55-1.496c.227-.832.341-1.735.166-2.475l-.061-.216a1 1 0 1 1 1.897-.633Zm5.415 2.438a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0Z"/></g></svg></button>
                                    <button onMouseOverCapture={() => { setButtonToggle("hiring"); setLeftValue(250); }} onMouseOutCapture={() => setButtonToggle("")} type="button" aria-label="Work"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="rgba(0, 0, 0, 0.6)" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg></button>
                                    <button onMouseOverCapture={() => { setButtonToggle("poll"); setLeftValue(355); }} onMouseOutCapture={() => setButtonToggle("")} type="button" aria-label="Poll"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(-90 12 12)"><path fill="rgba(0, 0, 0, 0.6)" d="M7 11h7v2H7zm0-4h10.97v2H7zm0 8h13v2H7zM4 4h2v16H4z"/></g></svg></button>
                                    <button onMouseOverCapture={() => { setButtonToggle("document"); setLeftValue(410); }} onMouseOutCapture={() => setButtonToggle("")} type="button" aria-label="Document"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="rgba(0, 0, 0, 0.6)"><path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z"/><path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279a9.768 9.768 0 0 0-6.963-6.963Z"/></g></svg></button>
                                    <button onMouseOverCapture={() => { setButtonToggle("expert"); setLeftValue(480); }} onMouseOutCapture={() => setButtonToggle("")} type="button" aria-label="Expert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="rgba(0, 0, 0, 0.6)" d="M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4l4 4l4-4h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-8 2.3c1.5 0 2.7 1.2 2.7 2.7c0 1.5-1.2 2.7-2.7 2.7c-1.5 0-2.7-1.2-2.7-2.7c0-1.5 1.2-2.7 2.7-2.7M18 15H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9Z"/></svg></button>
                                </div>
                            ) : (
                                <button onMouseOverCapture={() => { setButtonToggle("more"); setLeftValue(235); }} onMouseOutCapture={() => setButtonToggle("")} type="button" aria-label="More" onClick={() => setMoreOptions(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><circle cx="12" cy="24" r="3"/><circle cx="24" cy="24" r="3"/><circle cx="36" cy="24" r="3"/></svg></button>
                            )
                        }
                    </div>
                </div>
                <div className="post-last-layer">
                    <svg onMouseOverCapture={() => { setButtonToggle("schedule"); setLeftValue(60); }} onMouseOutCapture={() => setButtonToggle("")} className="post-schedule" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="2 2 20 20"><path fill="rgba(0, 0, 0, 0.6)" d="M15.098 12.634L13 11.423V7a1 1 0 0 0-2 0v5a1 1 0 0 0 .5.866l2.598 1.5a1 1 0 1 0 1-1.732ZM12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8Z"/></svg>
                    <p style={{"display": buttonToggle === "schedule" ? "block" : "none", "top": "-20px", "right": leftValue}}>Schedule for Later</p>
                    <button className="post-btn" type="button" aria-label="Post">Post</button>
                </div>
            </div>
        </div>
    ) : "";
}

export default CreatePost;