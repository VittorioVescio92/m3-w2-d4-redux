import { Badge, Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavBar = () => {
  const FavLength = useSelector(state => state.favourites.content.length);
  return (
    <Navbar bg="info">
      <Container className="justify-content-start gap-5 align-items-center mx-5">
        <Link className="navbar-brand fw-bold" to="/">
          <p>Home</p>
        </Link>
        <Link className="navbar-brand fw-bold" to="/favourites">
          <p>Favourites</p>
        </Link>
      </Container>
      <Container className="justify-content-end mx-5">
        <Badge bg="warning" className="text-dark">
          💝 {FavLength}
        </Badge>
      </Container>
    </Navbar>
  );
};
export default FavBar;
