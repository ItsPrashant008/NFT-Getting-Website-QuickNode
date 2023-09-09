import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import img from "../assets/RevealImg.jpeg";

import io from "socket.io-client";

const Members = () => {
  const [socket, setSocket] = useState(null);
  const navigateTo = useNavigate();

  useEffect(() => {
    const socketInstance = io("http://localhost:3000");
    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("nftsUpdated", (data) => {
        if (data.userNFTs < 1) {
          navigateTo("/");
          alert("Logout, Because you don't have any NFT!");
        }
      });
    }
  }, [socket]);

  return (
    <>
      <h1>Members Page</h1>

      <Link to="/">Back to Home </Link>
      <br />
      <br />

      <img src={img} width={1000} height={500}></img>

      <br />
      <br />
    </>
  );
};

export default Members;
