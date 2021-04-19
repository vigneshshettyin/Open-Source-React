import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../components/PartConfig";

const Home = () => {
  return (
    <>
      <div className="full-width" style={{ overflow: "hidden" }}>
        <Particles params={particlesConfig}></Particles>
        <div id="text_div center_all">
          <div className="center_all">
            <h1 className="custom-subTitle text-danger">Hola 👋</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
