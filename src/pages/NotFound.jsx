// router-dom
import { Link } from "react-router-dom";

// css
import "./css/notFound.css";

function NotFound() {
  return (
    <div className="container notFound">
      <h1 className="notFound__title">No page found!</h1>
      <Link className="notFound__btn" to="/home">
        Go back
      </Link>
    </div>
  );
}

export default NotFound;
