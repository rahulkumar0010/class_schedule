import React,{useContext} from "react";
import { Navbar, Container, Badge } from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { context } from "../App";

const Header = () => {
    const {subjectData} = useContext(context);
   
  return (
    <div>
      <Navbar>
        <Container>
          {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link to="/my-Cart">
              <GiShoppingCart size={25} />
              <Badge bg="primary" pill>{subjectData.length}</Badge>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
