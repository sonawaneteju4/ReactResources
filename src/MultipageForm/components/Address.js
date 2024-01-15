import React from "react";
import useFormContext from "../context/useFormContext";
const Address = () => {
  const { data, handleChange } = useFormContext();

  return (
    <div>
      <div>
        <div>
          <label className="form-label" htmlFor="lane">
            Lane
          </label>
        </div>
        <input
          type="text"
          id="lane"
          name="lane"
          placeholder="Lane"
          pattern="([A-Z])[\w+.]{1,}"
          value={data.lane}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <label className="form-label" htmlFor="city">
            City
          </label>
        </div>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="City"
          value={data.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <label className="form-label" htmlFor="state">
            State
          </label>
        </div>
        <input
          type="text"
          id="state"
          name="state"
          placeholder="State"
          value={data.state}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <label className="form-label" htmlFor="pin">
            Pin
          </label>
        </div>
        <input
          type="number"
          id="pin"
          name="pin"
          placeholder="Pin Code"
          value={data.pin}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Address;
