import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "../pages/Home";
import ChapterDetails from "../pages/EpisodeDetailsCard";
import "../../styles/NavBar.css";
import { LinkContainer } from "react-router-bootstrap";
import PodcastDetail from "../pages/PodcastDetail";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Podcast</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <Link to="/">Inicio</Link>
          </Nav.Link>
          <Nav.Link href="#features">
            <Link to="/PodcastDetail">Detalle</Link>
          </Nav.Link>
          {/* <Nav.Link href="#pricing">
            <Link to="/contacto">Contacto</Link>
          </Nav.Link> */}
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PodcastDetail" element={<PodcastDetail />} />
        {/* <Route path="/contacto" element={<Home />} /> */}
      </Routes>
    </>
  );
}
