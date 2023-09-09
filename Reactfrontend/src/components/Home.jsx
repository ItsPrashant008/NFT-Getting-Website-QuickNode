import { useNavigate, useLocation, Link } from "react-router-dom";
import "../assets/Home.css";

const Home = () => {
  const location = useLocation();

  const navigateTo = useNavigate();

  const revealMsg = async () => {
    try {
      var address = location.state.address;

      const res = await fetch("http://localhost:3000/members", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ address: address }),
      });

      var data = await res.json();
      console.log("dds->>>", data);

      if (data.status) {
        window.alert(data.message + " with this address " + address);
        navigateTo("/members");
      } else {
        window.alert(
          "Home Erro: " + data.message + " with this address " + address
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1>Home Page</h1>

      <Link to="/">Back to Home </Link>

      <div className="beautiful-sentence">
        <p>I have Secret Message for Holders of my NFT</p>
      </div>

      <button onClick={revealMsg}>Reveal Message</button>
    </>
  );
};

export default Home;
