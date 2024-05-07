import { Link } from "react-router-dom";
import Header from "../components/header";

function AboutPage() {
  return (
    <>
      <Header bg="black" color="white" text="FeedBack UI" />
      <div className="container">
        <div className="about">
          <h1>About This Project</h1>
          <p>This is a React app to leave feedback for a product or service</p>
          <p>Version: 1.0.0</p>

          <p>
            <Link to="/">Back To Home</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
