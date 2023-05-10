import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../Qzone/Qzone";
import bg from '../../../assets/bg.png';



const RightNav = () => {
  return (
    <div>
      <h3 className="mt-4">Login with</h3>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with google
      </Button>{" "}
      <Button variant="outline-secondary">
        <FaGithub /> Login with Github
      </Button>{" "}
      <div>
        <h4 className="mt-4">Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebook /> facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone/>
      <div >
        <img className="w-100 rounded-2 mt-4" src={bg} alt="" />

      </div>
      
    </div>
  );
};

export default RightNav;
