import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { ImFeed } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

import { HiUserGroup } from "react-icons/hi";
import { MdTravelExplore } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { selectUser } from "../slice/features/user/userSlice";

function SideBar() {
  const [active, setActive] = useState("/");
  const navigate = useNavigate();

  const userUid = useSelector(selectUser);

  // side menu data
  const sideMenu = [
    { name: "Feed", link: "/social", icon: <ImFeed size={24} /> },
    // { name: "My community", link: "/social/community", icon: <HiUserGroup size={24} /> },
    // { name: "Explore", link: "/social/explore", icon: <MdTravelExplore size={24} /> },
    // { name: "Notification", link: "/social/notification", icon: <IoIosNotifications size={24} /> },
    {
      name: "Profile",
      link: `/social/profile/${userUid.uid}`,
      icon: <CgProfile size={24} />,
    },
    { name: "logout", link: "/logout", icon: <FiLogOut size={24} /> },
  ];

  const handleSelect = (eventKey) => {
    if (eventKey === "/logout") {
      signOut(auth)
        .then(() => {
          console.log("User firbase is signed out");
          localStorage.removeItem("user_token");
          navigate("/login");
        })
        .catch((error) => {
          console.log("User firbase is signed out ERROR");
          alert("Error on logout");
        });
    } else navigate(eventKey);
  };

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  return (
    <Nav
      variant="pills"
      className="flex-column position-sticky"
      style={{ top: "70px" }}
      activeKey={active}
      onSelect={handleSelect}
    >
      {sideMenu.map((item, index) => (
        <Nav.Item key={index} className="mx-4 my-1 ">
          <Nav.Link eventKey={item.link} className="d-flex align-items-center">
            <span>{item.icon}</span> <span className="ms-3">{item.name}</span>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default SideBar;
