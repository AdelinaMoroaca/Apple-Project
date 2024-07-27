import { Container, ListGroup, ListGroupItem, Spinner, Button } from "react-bootstrap";
import { useFetch } from "./useFetch";
import { useLocalStorage } from "./useLocalStorage";

function FetchExample() {
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

function LocalStorageExample() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <Container style={{
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      }}>
      <h1>{theme} Theme</h1>

      <Button 
        variant='warning'
        onClick={toggleTheme}
        >Toggle Theme</Button>
    </Container>
  );
}

export { FetchExample, LocalStorageExample};