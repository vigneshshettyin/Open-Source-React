import React, { useState, useEffect } from "react";
import axios from "axios";

const Ip_Info = () => {
  const [getIp, setIp] = useState();

  const [getMessage, setMessage] = useState();

  const [ipData, setIpData] = useState();

  useEffect(() => {
    checkIp();
  });

  const checkIp = () => {
    var re = new RegExp(
      "(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]).){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))"
    );
    var flag = re.test(getIp);

    if (flag === true) {
      setMessage(1);
    } else {
      setMessage(0);
    }
  };

  const onChangeIp = (event) => {
    setIp(event.target.value);
  };

  const submitIp = (event) => {
    event.preventDefault();
    fetchData();
  };

  const fetchData = () => {
    const url = `https://ipapi.co/${getIp}/json`;
    // console.log(url);
    axios
      .get(url)
      .then(function (response) {
        // handle success
        // console.log(response.data);
        setIpData(response.data);
      })
      .catch(function (error) {
        // handle error
        alert(`${error}. Please Enter Valid IP !! 😠`);
      });
  };

  return (
    <>
      <div className="container">
        <div>
          <h2 className="text-warning text-center pt-4">Get IP Details ⛏️</h2>
        </div>
        <form className="pt-3" onSubmit={submitIp}>
          <div className="form-group">
            <input
              style={{ width: "50%" }}
              type="text"
              value={getIp}
              onChange={onChangeIp}
              className="form-control container-fluid"
              placeholder="24.48.0.1"
              required
            />
            <small id="emailHelp" className="form-text text-muted  text-center">
              🚧 We never store any ip address.
            </small>
          </div>
          <div style={{ padding: "25px" }}>
            {getMessage ? (
              <center>
                <div
                  style={{ width: "50%" }}
                  className="alert alert-success text-capitalize"
                  role="alert"
                >
                  Ip Address is Valid! 😄
                </div>
              </center>
            ) : (
              <center>
                <div
                  style={{ width: "50%" }}
                  className="alert alert-danger text-capitalize"
                  role="alert"
                >
                  Please enter correct IP Address! 😠
                </div>
              </center>
            )}
          </div>
          <center>
            {getMessage ? (
              <button type="submit" className="btn btn-outline-success">
                Get Info ❕
              </button>
            ) : (
              <button
                disabled
                type="submit"
                className="btn btn-outline-success"
              >
                Get Info ❕
              </button>
            )}
          </center>
        </form>

        <center>
          {ipData ? (
            <div className="pt-4">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>IP</th>
                    <td>{`${ipData["ip"]} (${ipData["version"]})`}</td>
                  </tr>
                  <tr>
                    <th>ISP</th>
                    <td>{`${ipData["org"]} (${ipData["asn"]})`}</td>
                  </tr>
                  <tr>
                    <th>City</th>
                    <td>{`${ipData["city"]}, ${ipData["region"]}, ${ipData["country_name"]}, ${ipData["postal"]}`}</td>
                  </tr>
                  <tr>
                    <th>Approx Location</th>
                    <td>{`Latitude: ${ipData["latitude"]}   Longitude: ${ipData["longitude"]} `}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-3">
              <div
                style={{ width: "50%" }}
                className="alert alert-danger text-capitalize"
                role="alert"
              >
                Data Not Available! 😠
              </div>
            </div>
          )}
        </center>
      </div>
    </>
  );
};

export default Ip_Info;
