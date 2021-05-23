import React, { useEffect, useState } from "react";
import axiosLikeFetch from "axios-like-fetch";
const Get_Dist = (props) => {
  const [getDist, setDist] = useState();

  useEffect(() => {
    axiosLikeFetch({
      url: "https://api.covid19india.org/v2/state_district_wise.json",
    })
      .then(function (res) {
        setDist(res.data[props.index].districtData);
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      });
  });
  return (
    <select className="form-control">
      {getDist ? (
        getDist.map((val, index) => (
          <option value={index}>{val.district}</option>
        ))
      ) : (
        <h6 className="text-center text-danger">No Data Recived</h6>
      )}
    </select>
  );
};

export default Get_Dist;
