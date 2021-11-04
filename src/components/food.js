import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./food.css";

function FoodCard(props) {
  const { data, path } = props;
  return data.map((d, index) => (
    <div className="food__intro" key={index}>
      <Card style={{ width: "17rem" }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1556386734-4227a180d19e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=405&q=80"
        />
        <Card.Body style={{ height: "12rem" }}>
          <Card.Title>{d.upso_nm}</Card.Title>
          <Card.Text>{d.food_menu.slice(0, 100)}...</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{d.tel_no}</ListGroupItem>
          <ListGroupItem>{d.bizcnd_code_nm}</ListGroupItem>
          <ListGroupItem style={{ height: "3rem" }}>
            {!d.rdn_detail_addr
              ? `${d.rdn_code_nm}`
              : `${d.rdn_code_nm} ${d.rdn_detail_addr} `}
          </ListGroupItem>
        </ListGroup>
        <Card.Body className="click" style={{ height: "3rem" }}>
          <Link
            to={{
              pathname: `${path.url}/${d.crtfc_upso_mgt_sno}`,
              state: { data },
            }}
          >
            Click
          </Link>
        </Card.Body>
      </Card>
    </div>
  ));
}

export default FoodCard;
