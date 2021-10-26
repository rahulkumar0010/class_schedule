import React, { useContext } from "react";
import { Card, Table } from "react-bootstrap";
import { context } from "../App";

const Cart = () => {
  const { subjectData, setSubjectData } = useContext(context);

  const handleCancel = (id) => {
    const removeFilter = subjectData.filter((val) => val.id !== id);
    setSubjectData(() => [...removeFilter]);
  };
  // console.log(subjectData);
  return (
    <div>
      <Card>
        <h1>Cart</h1>
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
            {subjectData.length <= 0
              ? "No data in the cart"
              : subjectData?.map((val, i) => (
                  <tr key={i}>
                    <td>{val.subject}</td>
                    <td>{val.date}</td>
                    <td>{val.time}</td>
                    <td>{val.availability} seats available</td>
                    <td>
                      <button
                        className={val.availability === 0 ? "full" : "NotFull"}
                        onClick={() => handleCancel(val.id)}
                        disabled={val.availability === 0 ? true : false}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default Cart;
