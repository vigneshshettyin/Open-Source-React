import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../components/PartConfig";
import "../index.css";
import { Link } from "react-router-dom";
import { SidebarData } from "../components/SidebarData";

const Home = () => {
  return (
    <>
      <div className="full-width">
        <Particles params={particlesConfig}></Particles>
        <div id="text_div center_all">
          <div className="center_all">
            <h2 className="custom-subTitle text-danger">
              React Open-Source ⚛️
            </h2>
            {SidebarData.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className="custom-subTitle"
                    style={{ textDecoration: "none" }}
                    to={item.path}
                  >
                    <h5>
                      {item.icon} {item.title}
                    </h5>
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
