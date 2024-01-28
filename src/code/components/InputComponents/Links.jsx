import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
// import "../Home.css";

const Links = ({ prop }) => {
  const { setData, clearInput, showError } = prop;
  const [value, setValue] = useState("");

  useEffect(() => {
    if (clearInput) {
      setValue("");
    }
  }, [clearInput]);

  const handleInputChange = (event) => {
    const updatedValue = event.target.value;
    setValue(updatedValue);
  };

  const handleBlur = () => {
    setData(value); // Call setData on focus out
  };

  // console.log(showError);

  return (
    <div className="input-container-home">
      {/* <span className="block font-m">Submit Url</span> */}
      {/* <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur} // Call handleBlur on focus out
        placeholder="https://"
      /> */}
      <TextField
          required
          id="outlined-required"
          label="Submit Url Here"
          fullWidth
        />
        <p>Your QR code will open this URL</p>
      {/* {showError && <span style={{ color: "tomato", fontSize:'10px' }}>This field is required</span>}
      <span className="block font-m">Your QR code will open this url.</span> */}
    </div>
  );
};

export default Links;
