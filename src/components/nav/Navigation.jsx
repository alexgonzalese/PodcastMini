import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "../pages/Home";
import ChapterDetails from "../pages/EpisodeDetailsCard";
import "../../styles/NavBar.css";
import { LinkContainer } from "react-router-bootstrap";
import PodcastDetail from "../pages/PodcastDetail";
import EpisodeDetail from "../pages/EpisodeDetail";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <Link to="/">Inicio</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PodcastDetail" element={<PodcastDetail />} />
        <Route path="/EpisodeDetail/:id" element={<EpisodeDetail />} />
      </Routes>
    </>
  );
}
