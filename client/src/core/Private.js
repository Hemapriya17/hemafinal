import { Autocomplete, Button, Card, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
// import { Navigate, useNavigate } from 'react-router-dom';

const SchoolPrivate = () => {
  const [school, setSchool] = useState("");
  const [standard, setStandard] = useState("");
  const [group, setGroup] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const [schoolerror, setSchoolerror] = useState("");
  const [standarderror, setStandarderror] = useState("");
  const [grouperror, setGrouperror] = useState("");
  const [stateerror, setStateerror] = useState("");
  const [countryerror, setCountryerror] = useState("");
  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`${ApiUrl}/moreInfo/all/school`, {
  //     method: "POST",

  //     body: JSON.stringify({
  //       catagory: school,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setSchool(json.ids);
  //       console.log(json);
  //     });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSchoolerror();
    setStandarderror();
    setGrouperror();
    setCountryerror();
    setStateerror();

    if (!school) {
      console.log("No School selected");
      setSchoolerror("*School required*");
    } else if (!standard) {
      console.log("No Standard selected");
      setStandarderror("*Standard required*");
    } else if (
      (standard === "eleven" || standard === "twelve") &&
      (group === "" || null)
    ) {
      console.log("No Group selected");
      setGrouperror("*Group required*");
    } else if (!state) {
      console.log("No State");
      setStateerror("*State required*");
    } else if (!country) {
      console.log("No Country");
      setCountryerror("*Country required*");
    } else {
      // navigate('/app')
      console.log("success");
      console.log(school, standard, group, state, country);
    }
  };

  return (
    <div>
      <Card style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <label>School name</label>
        <br />
        <Autocomplete
          style={{ width: "100%", maxHeight: "35px" }}
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        >
          <MenuItem value={"achariya"}>Achariya</MenuItem>
          <MenuItem value={"ssv"}>SSV</MenuItem>
        </Autocomplete>
        <p className="errormsg">{schoolerror}</p>
        <br />
        <br />

        <label>Standard</label>
        <br />
        <Select
          style={{ width: "100%", maxHeight: "35px" }}
          value={standard}
          onChange={(e) => setStandard(e.target.value)}
        >
          <MenuItem value={"tenth"}>X</MenuItem>
          <MenuItem value={"eleven"}>XI</MenuItem>
          <MenuItem value={"twelve"}>XII</MenuItem>
        </Select>
        <p className="errormsg">{standarderror}</p>
        <br />
        <br />

        {(standard === "eleven" || standard === "twelve") && (
          <div>
            <label>Group</label>
            <br />
            <Select
              style={{ width: "100%", maxHeight: "35px" }}
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            >
              <MenuItem value={"bio"}>Biology</MenuItem>
              <MenuItem value={"computer"}>Computer Science</MenuItem>
              <MenuItem value={"science"}>Pure Science</MenuItem>
            </Select>
            <p className="errormsg">{grouperror}</p>
            <br />
            <br />
          </div>
        )}

        <label>State</label>
        <br />
        <input
          type="text"
          style={{ width: "100%", height: "30px" }}
          value={state}
          onChange={(e) => setState(e.target.value)}
        ></input>
        <p className="errormsg">{stateerror}</p>
        <br />
        <br />

        <label>Country</label>
        <br />
        <input
          type="text"
          style={{ width: "100%", height: "30px" }}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        ></input>
        <p className="errormsg">{countryerror}</p>
        <br />
        <br />

        <Button variant="contained" onClick={handleSubmit}>
          SUBMIT
        </Button>
      </Card>
    </div>
  );
};

export default SchoolPrivate;
