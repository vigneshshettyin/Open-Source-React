import React, { useEffect, useState } from "react";
import axiosLikeFetch from "axios-like-fetch";

const Covid_India_States = (props) => {
  const [getState, setState] = useState("");
  useEffect(() => {
    axiosLikeFetch({
      url: "https://api.covid19india.org/data.json",
    })
      .then(function (res) {
        setState(res.data.statewise[props.index]);
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      });
  });
  return (
    <div className="pt-3">
      {/* <h1>{props.index}</h1> */}
      {getState ? (
        <table
          className="table table-bordered container-fluid"
          style={{ width: "75%", overflow: "scroll" }}
        >
          <thead>
            <tr>
              <th scope="col">Active</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Deaths</th>
              <th scope="col">last Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{getState.active}</th>
              <td>{getState.confirmed}</td>
              <td>{getState.deaths}</td>
              <td>{getState.lastupdatedtime}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h6 className="text-center text-danger">No Data Recived</h6>
      )}

      <hr />
    </div>
  );
};

export default Covid_India_States;
