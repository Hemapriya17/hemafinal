// import { Button, Snackbar, TextField, Typography } from "@material-ui/core";
// import { Autocomplete } from "@mui/material";
// import MuiAlert from "@material-ui/lab/Alert";
// import React, { useState, useEffect } from "react";
// import { IoIosArrowRoundBack } from "react-icons/io";

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// const style = {
//   display: "flex",
//   alignItems: "center",
//   margin: "40px",
//   justifyContent: "center",
// };

// const formContainer = {
//   display: "flex",
//   flexFlow: "column wrap",
//   alignContent: "space-between",
//   zIndex: "100%",
// };

// const AddUserComponentadminSchool = (props) => {
//   const options = ["Physics", "Chemistry", "Computer science", "Biology"];
//   const options1 = ["Exp1", "Exp2", "Exp3"];
//   const options2 = ["Achariya", "SSV"];

//   const [open, setOpen] = useState(false);
//   const [message, setMessage] = useState(null);
//   const [messageerror, setMessageerror] = useState(null);

//   const [description, setDescription] = useState();
//   const [schoolname, setSchoolname] = useState("");
//   const [subjectname, setSubjectname] = useState("");
//   const [procedurename, setProcedurename] = useState();

//   const [descriptionerror, setDescriptionerror] = useState();
//   const [subjecterror, setSubjecterror] = useState();
//   const [schoolnameerror, setSchoolnameerror] = useState();
//   const [procedureerror, setProcedureerror] = useState();

//   // useEffect(() => {
//   //   return () => {
//   //     effect
//   //   };
//   // }, [options])

//   const addrunz = (e) => {
//     e.preventDefault();
//     setDescriptionerror();
//     setSubjecterror();
//     setProcedureerror();
//     if (!description) {
//       setDescriptionerror("*Write some Descriptions*");
//     } else if (!schoolname) {
//       setSchoolnameerror("*Select a School*");
//     } else if (!subjectname) {
//       setSubjecterror("*Choose a lab*");
//     } else if (!procedurename) {
//       setProcedureerror("*Select an Experiment*");
//     } else {
//       // let user = {
//       //   studentName: username,
//       //   procedureDescription: data.description,
//       //   labType: subjectname,
//       //   experimentName: procedurename,
//       //   userId: useridval
//       // };
//       // console.log("list user", user)
//       // ApiService.addUser(user)
//       // .then((res)=>{
//       //   console.log("check again",res.data)
//       //   if(res.data.errors==="already created"){
//       //     setMessageerror("Already Created");
//       //   setTimeout(() => {
//       //     props.closeModal();
//       //   }, 1000);
//       //   }
//       //   else{
//       //     setMessage("Runz Added successfully.");
//       //     setTimeout(() => {
//       //       props.closeModal();
//       //     }, 1000);
//       //   }

//       // });
//       setOpen(true);
//       setMessage("Runz Added successfully.");
//     }
//   };

//   const handleClose = (reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Typography variant="h4" style={style}>
//         Add Runz &nbsp;&nbsp;
//         <IoIosArrowRoundBack
//           onClick={props.closeModal}
//           style={{
//             alignItems: "center",
//           }}
//         />
//       </Typography>
//       <div>
//         <form style={formContainer}>
//           <Typography>Description</Typography>
//           <TextField
//             type="text"
//             placeholder="Procedure Description"
//             fullWidth
//             margin="normal"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           ></TextField>
//           <p className="errormsg">{descriptionerror}</p>

//           <Typography>School Name</Typography>
//           <Autocomplete
//             placeholder="Subject Name"
//             value={schoolname}
//             onChange={(event, newValue) => {
//               setSchoolname(newValue);
//             }}
//             options={options2}
//             sx={{ width: 300 }}
//             renderInput={(params) => <TextField {...params} />}
//           ></Autocomplete>
//           <p className="errormsg">{schoolnameerror}</p>

//           <Typography>Subject Name</Typography>
//           <Autocomplete
//             placeholder="Subject Name"
//             value={subjectname}
//             onChange={(event, newValue) => {
//               setSubjectname(newValue);
//             }}
//             options={options}
//             sx={{ width: 300 }}
//             renderInput={(params) => <TextField {...params} />}
//           ></Autocomplete>
//           <p className="errormsg">{subjecterror}</p>

//           <Typography>Procedure Name</Typography>
//           <Autocomplete
//             value={procedurename}
//             placeholder="Experiment Name"
//             onChange={(event, newValue) => {
//               setProcedurename(newValue);
//             }}
//             options={options1}
//             sx={{ width: 300 }}
//             renderInput={(params) => <TextField {...params} />}
//           ></Autocomplete>
//           <p className="errormsg">{procedureerror}</p>
//           <br />

//           <div>
//             <Button
//               onClick={addrunz}
//               variant="contained"
//               fullWidth
//               style={{ backgroundColor: "#F1C232", color: "black" }}
//             >
//               Save
//             </Button>
//             <br />
//             <br />

//             <Button
//               variant="contained"
//               color="secondary"
//               onClick={props.closeModal}
//               fullWidth
//             >
//               Cancel
//             </Button>
//           </div>

//           <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
//             <Alert
//               onClose={handleClose}
//               severity={message ? "success" : "error"}
//             >
//               {message}
//             </Alert>
//           </Snackbar>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddUserComponentadminSchool;
