import React, { useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import "styled-components";
import ExpandC from "./Covid-19-Vac-On-Expand";

const Vaccine = () => {
  const [formData, setFormData] = useState({
    date: "",
    pincode: "575001",
  });

  const [vaccineData, setVaccineData] = useState();

  const data = vaccineData;
  const columns = [
    {
      name: "Center ID",
      selector: "center_id",
      sortable: true,
    },
    {
      name: "District Name",
      selector: "district_name",
      sortable: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Fee Type",
      selector: "fee_type",
      sortable: true,
    },
    {
      name: "Time (from IST)",
      selector: "from",
      sortable: true,
    },
    {
      name: "Time (To IST)",
      selector: "to",
      sortable: true,
    },
    {
      name: "Time (To IST)",
      selector: "to",
      sortable: true,
    },
  ];

  function reverseString(str) {
    var splitString = str.split("-");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("-");
    return joinArray;
  }

  const fetchData = () => {
    const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${
      formData["pincode"]
    }&date=${reverseString(formData["date"])}`;
    // console.log(url);
    axios
      .get(url)
      .then(function (response) {
        // handle success
        // console.log(response.data.centers);
        setVaccineData(response.data.centers);
      })
      .catch(function (error) {
        // handle error
        alert(`${error}. Please Enter Valid Indian Pincode !! 😠`);
      });
  };

  const getData = (event) => {
    const { value, name } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const dataSubmitted = (event) => {
    event.preventDefault();
    fetchData();
  };
  return (
    <>
      <div>
        <h2 className="text-capitalize text-center text-success pt-2">
          Get Vaccine Details ( Currently supported only in 🇮🇳 )
        </h2>

        <div className="pt-4">
          <form onSubmit={dataSubmitted}>
            <div className="mb-3">
              <input
                style={{ width: "50%" }}
                className="form-control container-fluid"
                type="date"
                name="date"
                onChange={getData}
                value={formData["date"]}
                required
              />
            </div>

            <div className="mb-3">
              <input
                style={{ width: "50%" }}
                className="form-control container-fluid"
                type="number"
                name="pincode"
                placeholder="Enter Your Pincode"
                maxLength="6"
                onChange={getData}
                value={formData["pincode"]}
                required
              />
            </div>
            <center>
              <button
                style={{ width: "25%" }}
                type="submit"
                className="btn btn-outline-primary"
              >
                Fetch Data 😱
              </button>
            </center>
          </form>
        </div>
      </div>
      <div className="pt-2">
        <DataTable
          title=""
          columns={columns}
          data={data}
          expandableRows
          expandableRowsComponent={<ExpandC />}
        />
      </div>
    </>
  );
};

export default Vaccine;
