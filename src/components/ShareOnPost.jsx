import { React, useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import {
  EmailIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  FacebookIcon,
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

function ShareOnPost() {
  const [show, setShow, setIsShown] = useState(false);
  const handleClick = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div>
      {show && (
        <div className="overlay">
          <div className="share">
            <div>
              <WhatsappShareButton
                url="social-space-zone.vercel.app"
                quote="Join the team"
              >
                <WhatsappIcon size={27} className="icons" />
              </WhatsappShareButton>
              <LinkedinShareButton
                url="social-space-zone.vercel.app"
                quote="Join the team"
              >
                <LinkedinIcon size={27} className="icons" />
              </LinkedinShareButton>
              <FacebookShareButton
                url="social-space-zone.vercel.app"
                title="Join the team"
              >
                <FacebookIcon size={27} className="icons" />
              </FacebookShareButton>
              <EmailShareButton
                url="social-space-zone.vercel.app"
                quote="Join the team"
              >
                <EmailIcon size={27} className="icons" />
              </EmailShareButton>
              <TwitterShareButton
                url="social-space-zone.vercel.app"
                hashtag="social-space-zone"
              >
                <TwitterIcon size={27} className="icons" />
              </TwitterShareButton>
            </div>
          </div>
        </div>
      )}
      <i>
        <AiOutlineShareAlt
          size={20}
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        />
      </i>
    </div>
  );
}

export default ShareOnPost;
