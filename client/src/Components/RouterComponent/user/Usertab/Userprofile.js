import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";

const Userprofile = () => {
  const [edit, setEdit] = useState(false);
  const [school, setSchool] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [standard, setStandard] = useState("");
  const [group, setGroup] = useState("");

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#F1C232", color: "black" }}
          onClick={() => setEdit(!edit)}
        >
          Edit
        </Button>
      </div>
      <br />
      <hr />

      {edit ? (
        <div>
          <form>
            {role === "superadmin" ? (
              <>
                <div className="form-group">
                  <label>School</label>
                  <input
                    className="form-control"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                  ></input>
                </div>
                <br />
              </>
            ) : null}

            <div className="form-group">
              <label className="text-muted">Country</label>
              <input
                className="form-control"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              ></input>
            </div>
            <br />

            <div className="form-group">
              <label className="text-muted">State</label>
              <input
                className="form-control"
                value={state}
                onChange={(e) => setState(e.target.value)}
              ></input>
            </div>

            {role === "student" && (
              <>
                <div className="form-group">
                  <label>Standard</label>
                  <input
                    className="form-control"
                    value={standard}
                    onChange={(e) => setStandard(e.target.value)}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Group</label>
                  <input
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </>
            )}
            <br />

            <Button
              variant="contained"
              style={{ backgroundColor: "#F1C232", color: "black" }}
            >
              Submit
            </Button>
            <br />
          </form>
        </div>
      ) : (
        <div>
          <Card>
            <CardContent style={{ backgroundColor: "#E7EBF0" }}>
              <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                  <label style={{ fontWeight: "bold" }}>Name:</label>
                  <br />
                  <label style={{ fontStyle: "italic", color: "gray" }}>
                    Hemapriyadharshini
                  </label>
                </Grid>

                <Grid item xs={8}>
                  <label style={{ fontWeight: "bold" }}>Email:</label>
                  <br />
                  <label style={{ fontStyle: "italic", color: "gray" }}>
                    hema.learny@gmail.com
                  </label>
                </Grid>

                <Grid item xs={8}>
                  <label style={{ fontWeight: "bold" }}>School:</label>
                  <br />
                  <label
                    value={school}
                    style={{ fontStyle: "italic", color: "gray" }}
                  >
                    SSV
                  </label>
                </Grid>

                {/* {role === "student" ? ( */}
                  <>
                    {/* {(standard === "eleven" || standard === "twelve") && ( */}
                    <Grid item xs={8}>
                      <label style={{ fontWeight: "bold" }}>Standard:</label>
                      <br />
                      <label style={{ fontStyle: "italic", color: "gray" }}>
                        XI
                      </label>
                    </Grid>
                    {/* )} */}
                    <Grid item xs={8}>
                      <label style={{ fontWeight: "bold" }}>Group:</label>
                      <br />
                      <label style={{ fontStyle: "italic", color: "gray" }}>
                        Biology
                      </label>
                    </Grid>
                  </>
                {/* ) : null} */}

                <Grid item xs={8}>
                  <label style={{ fontWeight: "bold" }}>Role:</label>
                  <br />
                  <label
                    value={role}
                    style={{ fontStyle: "italic", color: "gray" }}
                  >
                    student
                  </label>
                </Grid>

                <Grid item xs={8}>
                  <label style={{ fontWeight: "bold" }}>State:</label>
                  <br />
                  <label style={{ fontStyle: "italic", color: "gray" }}>
                    Pondicherry
                  </label>
                </Grid>

                <Grid item xs={8}>
                  <label style={{ fontWeight: "bold" }}>Country:</label>
                  <br />
                  <label style={{ fontStyle: "italic", color: "gray" }}>
                    India
                  </label>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Userprofile;
