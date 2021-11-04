import "./App.css";
import Home from "./routes/home";
import Select from "./routes/select";
import Vegan from "./category/vegan";
import Ovo from "./category/ovo";
import LactoOvo from "./category/lactoOvo";
import Lacto from "./category/lacto";
import Pesce from "./category/pesce";
import About from "./routes/About";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <HashRouter>
      <Navbar fixed="top" className="header" bg="#b2ef91" variant="dark">
        <Container>
          <Navbar.Brand>EYG</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/select">
              Select
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Route path="/" exact={true} component={Home} />
      <Route path="/select" exact={true} component={Select} />
      <Route path="/select/vegan" exact={true} component={Vegan} />
      <Route path="/select/vegan/:id" exact={true} component={Detail} />
      <Route path="/select/lactoOvo" exact={true} component={LactoOvo} />
      <Route path="/select/lactoOvo/:id" exact={true} component={Detail} />

      <Route path="/select/ovo" exact={true} component={Ovo} />
      <Route path="/select/ovo/:id" exact={true} component={Detail} />
      <Route path="/select/lacto" exact={true} component={Lacto} />
      <Route path="/select/lacto/:id" exact={true} component={Detail} />
      <Route path="/select/pesce" exact={true} component={Pesce} />
      <Route path="/select/pesce/:id" exact={true} component={Detail} />

      <Route path="/about" component={About} />
      <Navbar fixed="bottom" className="footer" bg="#b2ef91" variant="dark">
        <Container>
          <Nav className="me-auto" style={{color: '#C0EBC3'}}>
            ©2021 EatYourGreen
          </Nav>
        </Container>
      </Navbar>
    </HashRouter>
  );
}

export default App;
