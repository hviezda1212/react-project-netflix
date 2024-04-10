import Spinner from "react-bootstrap/Spinner";
import "../Spinner/LoadingSpinner.style.css";

function LoadingSpinner() {
  return (
    <div className="loading-spinner-container">
      <Spinner animation="border" size="lg" />
    </div>
  );
}

export default LoadingSpinner;
