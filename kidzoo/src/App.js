import './App.css';
import logo from "./images/KZLogo.png"
import fb from "./images/fb.png"
import log from "./images/login.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home"><img src={logo}  alt=""/>
    Playdate App|KidZoo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#Blog">Blog</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
      <Nav.Link href="#Contact">Forum</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Members</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">App Updates</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#FB"><img src={fb} style={{width:60,marginTop:-13}} alt ="FB"/></Nav.Link>
      <Nav.Link  href="#Login"><img src={log} style={{width:32}} alt=""/>
        Log in
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}

export default App;
