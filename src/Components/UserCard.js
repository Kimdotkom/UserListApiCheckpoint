import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({user}) => {
  return (
    <div className="userCard">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src='https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w' />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.username}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Button variant="warning">
            <Link to={`/user/${user.id}`}>Profile</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
