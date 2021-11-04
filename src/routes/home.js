import React from "react";
import "./home.css";
import "../components/detail.css";
import { ReactComponent as Logo } from "../db/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <section className="container">
      <div className="intro">
        <Logo />
        <Link to="/select">
          <Button variant="success">START</Button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
