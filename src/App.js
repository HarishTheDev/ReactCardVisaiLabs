// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { length } from "./Backend";
// vishnukumar@visailabs.com
function App() {
  return (
    <React.Fragment>
      {length.map((s) => (
        <Card className="col-md-4" style={{ width: "18rem" }} key={s}>
          <Card.Img variant="top" src={s.image} />
          <Card.Body>
            <Card.Title>{s.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </React.Fragment>
  );
}

export default App;
