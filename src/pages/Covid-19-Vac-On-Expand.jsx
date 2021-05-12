import React from "react";
import DataTable from "react-data-table-component";
import "styled-components";

const columns = [
  {
    name: "Date",
    selector: "date",
    sortable: true,
  },
  {
    name: "Age Limit",
    selector: "min_age_limit",
    sortable: true,
  },
  {
    name: "Vaccine Name",
    selector: "vaccine",
    sortable: true,
  },
  {
    name: "Available Capacity",
    selector: "available_capacity",
    sortable: true,
  },
];
const ExpandableComponent = ({ data }) => (
  <>
    <DataTable title="" columns={columns} data={data.sessions} />
  </>
);

export default ExpandableComponent;
