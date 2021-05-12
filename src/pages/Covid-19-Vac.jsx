import React from "react";

const Vaccine = () => {
  return (
    <>
      <div>
        <h2 className="text-capitalize text-center text-success pt-2">
          Get Vaccine Details ( Currently supported only in 🇮🇳 )
        </h2>

        <div>
          <form action="" method="POST">
            <input
              style={{ width: "50%" }}
              className="form-control container-fluid"
              type="date"
              name="date"
              required
            />
            <div className="pt-3">
              <input
                style={{ width: "50%" }}
                className="form-control container-fluid"
                type="number"
                name="pincode"
                maxlength="6"
                required
              />
            </div>
            <div className="pt-3">
              <center>
                <button
                  style={{ width: "25%" }}
                  type="submit"
                  class="btn btn-outline-primary"
                >
                  Fetch Data
                </button>
              </center>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Vaccine;
