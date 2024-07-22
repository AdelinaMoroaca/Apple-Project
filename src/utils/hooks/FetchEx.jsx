import { Container, ListGroup, ListGroupItem, Spinner } from "react-bootstrap";

import { useFetch } from "./useFetch";

export default function FetchExample() {
  const { data, loading } = useFetch(
    "https://json-server-deployment-5til.onrender.com/iPhone"
  );

  return (
    <Container>
      <h1>iPhone</h1>

      {loading && <Spinner />}

      <ListGroup>
        {data &&
          data.map((iPhone) => (
            <ListGroupItem key={iPhone.id}>
              <h2>{iPhone.title}</h2>
            </ListGroupItem>
          ))}
      </ListGroup>
    </Container>
  );
}