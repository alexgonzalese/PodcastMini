import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import PodcastList from "../Pages/podcastList";
import ChapterDetails from "../pages/ChapterDetails";
import "../../styles/NavBar.css";
import { LinkContainer } from "react-router-bootstrap";
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
            <Link to="/detalle">Detalle</Link>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <Link to="/contacto">Contacto</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<PodcastList />} />
        <Route path="/detalle" element={<ChapterDetails />} />
        <Route path="/contacto" element={<PodcastList />} />
      </Routes>
    </>
  );
}
