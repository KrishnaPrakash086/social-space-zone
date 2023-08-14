import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";
import SideBar from "../components/SideBar";
import { setUser } from "../slice/features/user/userSlice";

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem("user_token")) navigate("/login");
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        localStorage.removeItem("user_token");
        navigate("/login");
      } else {
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            username: user.email.split("@")[0],
          })
        );
      }
    });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xl={2} lg={3} className="px-0">
          <SideBar />
        </Col>
        <Col xl={10} sm={9} className="px-0">
          <Container fluid>{children}</Container>
        </Col>
      </Row>
    </Container>
  );
}
