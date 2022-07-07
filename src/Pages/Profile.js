import React, { useEffect, useState } from "react";
import {Card, Button} from 'react-bootstrap'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'

const Profile = () => {
  const [user, setUser] = useState({});

  const {id} = useParams()

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then((res) => setUser(res.data[0]))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.username}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.phone}</Card.Text>
          <Button variant="warning">
            <Link to={`/users`}>Go Back</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
