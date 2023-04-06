import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const FavBar = () => {
  return (
    <Navbar bg="info">
      <Container className="justify-content-start gap-5 align-items-center">
        <Link className="navbar-brand" to="/">
          <p>Home</p>
        </Link>
        <Link className="navbar-brand" to="/favourites">
          <p>Favourites</p>
        </Link>
      </Container>
    </Navbar>
  );
};
export default FavBar;
