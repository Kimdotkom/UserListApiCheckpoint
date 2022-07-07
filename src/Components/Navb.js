import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Navb = () => {
  return (
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">API Checkpoint</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/users">Users</Nav.Link>
      <Nav.Link href="/admin">Admin</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
  )
}

export default Navb