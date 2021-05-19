import React from "react";
import DataTable from "react-data-table-component";
import "styled-components";

const columns = [
  {
    name: "Date",
    selector: "date",
    sortable: false,
  },
  {
    name: "Age Limit",
    selector: "min_age_limit",
    sortable: false,
  },
  {
    name: "Vaccine Name",
    selector: "vaccine",
    sortable: false,
  },
  {
    name: "Available Capacity",
    selector: "available_capacity",
    sortable: true,
  },
];

const ExpandC = ({ data }) => (
  <>
    <div className="container-fluid">
      <table class="table table-bordered">
        <tbody>
          <tr>
            {data.slots.map((value, index) => {
              return (
                <td>
                  {value}
                  {/* {console.log(value)} */}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

const ExpandableComponent = ({ data }) => (
  <>
    <DataTable
      title=""
      columns={columns}
      data={data.sessions}
      expandableRows
      expandableRowsComponent={<ExpandC />}
    />
  </>
);

export default ExpandableComponent;
