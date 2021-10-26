import React, { useState, useEffect, useContext } from "react";
import { Card, Row, Table, Col } from "react-bootstrap";
import data from "../service/data.json";
import "../App.css";
import { context } from "../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const MainFile = () => {
  const randomNumber = Math.floor(Math.random() * (60 - 30) + 30);
  const freeSeat= Math.floor(Math.random()*(15-5)+5);
  const [counter, setCounter] = useState(randomNumber);
  const { subjectData, setSubjectData } = useContext(context);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  
  const handleClick = (id) => {
    const Booked = data.find((val) => val.id === id);
    setSubjectData(() => [...subjectData, Booked]);
    data.find(c => c.id === id).availability--;
    
  };
 

  const disabledButton =
    subjectData.length > 0 ? (subjectData?.length <= 2 ? false : true) : false;
  useEffect(() => {
    if (subjectData.length === 3) {
      toast("You can only book maximum 3 classes per week");
    }
  }, [subjectData]);

  return (
    <div>
      <Card style={{ padding: "20px" }}>
        <p>
          <b>Time Left: {counter} seconds</b>
        </p>
        <h4 style={{ color: "orange" }}>Claim Your Free Trial Class</h4>
        <Row>
          <Col md={10}>
            <h5 style={{ color: "blue" }}>Class Schedule</h5>
          </Col>
          <Col>
            <h5>
              Free Seats Left: <span className="freeSeat">{ freeSeat}</span>
            </h5>
          </Col>
        </Row>
        <Row>
          <Table striped bordered hover>
            <thead className="Thead">
              <tr>
                <th>Subject</th>
                <th>Date</th>
                <th>Time</th>
                <th>Availability</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, i) => (
                <tr key={i}>
                  <td>{val.subject}</td>
                  <td>{val.date}</td>
                  <td>{val.time}</td>
                  <td>{val.availability} seats available</td>
                  <td>
                    <button
                      className={
                        val.availability === 0
                          ? ("full")
                          : (disabledButton === true
                          ? "disableButton"
                          : "NotFull")
                      }
                      onClick={() => handleClick(val.id)}
                      disabled={
                        val.availability === 0 ? true : false || disabledButton
                      }
                    >
                      {val.availability === 0 ? "Full" : "Book"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Card>
    </div>
  );
};

export default MainFile;
