import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2  className="text-center">Our Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed recusandae
        earum nostrum deleniti cumque est aliquid corrupti. Non, dolorem vitae.
      </p>
      <br />
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        excepturi dicta error sint, minus ullam veritatis qui. Officia, eos
        eius, dignissimos voluptatibus labore iste quae debitis natus vitae
        inventore sequi?
      </h4>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor praesentium quis.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor praesentium quis.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor praesentium quis.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor praesentium quis.</li>
        
      </ul>
      <h2>Go back to  <Link to="/register">Register</Link> </h2>
    </Container>
  );
};

export default Terms;
