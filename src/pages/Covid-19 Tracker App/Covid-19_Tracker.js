import React, { useEffect, useState } from "react";
import axiosLikeFetch from "axios-like-fetch";
import covid_top_img from "../../media/images/covid19_logo.png";
import Covid from "./Covid_India_States";
const About = () => {
  const [data, setdata] = useState("");

  const [indData, setIndData] = useState("");

  const [state, setState] = useState("");

  const [stateData, setStateData] = useState("");

  const getState = (event) => {
    setState(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    axiosLikeFetch({
      url: "https://api.covid19india.org/data.json",
    })
      .then(function (res) {
        // handle success
        setStateData(res.data.statewise);
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosLikeFetch({ url: "https://covid19.mathdro.id/api" })
      .then(function (res) {
        // handle success
        setdata(res.data);
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      });

    axiosLikeFetch({ url: "https://covid19.mathdro.id/api/countries/india" })
      .then(function (res) {
        // handle success
        // console.log(res.data);
        setIndData(res.data);
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      });
  }, []);

  return (
    <div className="pt-3 container-fluid">
      <center>
        <img
          style={{ alignItems: "center", width: "200px", height: "75px" }}
          src={covid_top_img}
          alt="Covid_Image"
        />
      </center>

      <h2 className="pt-2 text-danger text-center">
        Worldwide Covid-19 Cases 🗺️
      </h2>
      <hr />
      {data ? (
        <table
          className="table table-bordered container-fluid"
          style={{ width: "75%", overflow: "scroll" }}
        >
          <thead>
            <tr>
              <th scope="col">Confirmed</th>
              <th scope="col">Recovered</th>
              <th scope="col">Deaths</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{data.confirmed.value}</th>
              <td>{data.recovered.value}</td>
              <td>{data.deaths.value}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h6 className="text-center text-danger">No Data Recived</h6>
      )}

      <h2 className="pt-2 text-danger text-center">India Covid-19 Cases 🇮🇳</h2>
      <hr />
      {indData ? (
        <table
          className="table table-bordered container-fluid"
          style={{ width: "75%", overflow: "scroll" }}
        >
          <thead>
            <tr>
              <th scope="col">Confirmed</th>
              <th scope="col">Recovered</th>
              <th scope="col">Deaths</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{indData.confirmed.value}</th>
              <td>{indData.recovered.value}</td>
              <td>{indData.deaths.value}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h6 className="text-center text-danger">No Data Recived</h6>
      )}
      <hr />
      <div className="container-fluid">
        <h2 className="text-center text-danger">
          State Wise Covid-19 Stats 👨‍💻
        </h2>
        <center>
          <select
            style={{ width: "50%" }}
            onChange={getState}
            value={state}
            className="form-control"
          >
            {stateData ? (
              stateData.map(
                (val, index) => <option value={index}>{val.state}</option>
                // console.log(val.state)
              )
            ) : (
              <h6 className="text-center text-danger">No Data Recived</h6>
            )}
          </select>
          {/* <h1>{state}</h1> */}
          <Covid index={state}></Covid>
        </center>
      </div>
    </div>
  );
};

export default About;
