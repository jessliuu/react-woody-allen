import React from "react";

import "./Home.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const redirectTo = useNavigate();
  const handleStartBrowsing = () => redirectTo("/browse");

  return (
    <div>
      <div className="home-container fluid">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          repellat vitae fugit id numquam temporibus saepe dolorem delectus.
          Illum fugit eaque saepe earum voluptatibus labore velit ut sunt
          voluptate esse? Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Distinctio nihil possimus eveniet, incidunt doloremque
          reprehenderit quisquam aperiam rem. Recusandae cumque labore adipisci
          provident tempore maxime distinctio iure, nulla autem accusantium?
        </p>
        <p></p>
        <Button variant="outline-light" onClick={handleStartBrowsing}>
          Start browsing
        </Button>
      </div>
    </div>
  );
}

export default Home;
