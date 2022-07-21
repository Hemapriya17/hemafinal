// import {
//   Button,
//   MenuItem,
//   Select,
//   Grid,
//   TextField,
//   FormControl,
// } from "@material-ui/core";
// import React, { useState, useRef } from "react";
// import Modal from "react-modal";
// import { Editor } from "@tinymce/tinymce-react";
// import { nanoid } from "nanoid";
// import path from "path";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
//   overlay: { zIndex: 1000 },
// };

// const EditprocedureSchool = (props) => {
//   const [experiment, setExperiment] = useState("");
//   const [subject, setSubject] = useState("");
//   const [standard, setStandard] = useState("");
//   const [school, setSchool] = useState("");
//   const [group, setGroup] = useState("");

//   const [modalopen, setModalopen] = useState();
//   const [initialcontent, setInitialcontent] = useState();
//   const editorRef = useRef(null);

//   let content =
//     props.location.pathname.replace("/editProce/", "") ||
//     window.localStorage.getItem("proceId");

//   useEffect(() => {
//     axios.get(`${ApiUrl}/procedures/test/${content}`).then((res) => {
//       setInitialcontent(res.data.html);
//       setProcedureid(res.data._id);
//     });

//     axios.get(`${ApiUrl}/moreInfo/${content}`).then((res) => {
//       console.log("check", res.data);
//       setExperiment(res.data.ProcedureName);
//       setSubject(res.data.labtype);
//       setStandard(res.data.standard);
//       setGroup(res.data.group);
//       setSchool(res.data.school);
//       setMoreinfoid(res.data._id);
//     });

//     return () => {};
//   }, [content]);

//   const showmodal = (e) => {
//     e.preventDefault();
//     setModalopen(true);
//   };

//   const goBack = () => {
//     props.history.push("/procedure");
//   };

//   const handleSave = () => {
//     axios
//       .patch(`${ApiUrl}/procedures/edit`, {
//         title: experiment,
//         html: editorRef.current.getContent(),
//         content: procedureid || content,
//       })
//       .then((res) => {
//         axios
//           .patch(`${ApiUrl}/moreInfocategory/edit`, {
//             experiment: experiment,
//             lab: subject,
//             standard: standard,
//             group: group,
//             school: school,
//             _id: moreinfoid,
//           })
//           .then((res) => {
//             if (res.data == "error") {
//               Swal.fire({
//                 icon: "error",
//                 title: "Oops...",
//                 text: "Something went wrong Check your internet connection",
//               });
//             } else {
//               Swal.fire("success", "Procedure has been updated", "success");
//             }
//           });
//       });
//   };

//   const duplicate = (e) => {
//     e.preventDefault();
//     if (!experiment) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Must enter Experiment Name",
//       });
//     } else if (!subject) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Must enter Lab Name",
//       });
//     } else if (experiment && subject) {
//       axios
//         .post(`${ApiUrl}/procedures`, {
//           title: experiment,
//           html: editorRef.current.getContent(),
//         })
//         .then((res) => {
//           console.log(res.data.content);
//           if (res.data.result === "already exist") {
//             Swal.fire({
//               icon: "error",
//               title: "Oops...",
//               text: "There is already a experiment in this name plz add you school name to be specific",
//             });
//           } else {
//             axios
//               .post(`${ApiUrl}/moreInfocatagory`, {
//                 experimentno: res.data.content,
//                 experiment: experiment,
//                 labtype: subject,
//                 standard: standard,
//                 group: group,
//                 school: school,
//               })
//               .then(() => {
//                 console.log("sent meta info");
//                 Swal.fire("success", "Procedure has been updated", "success");
//                 setModalopen(false);
//               })
//               .catch((err) => {
//                 console.error(err);
//                 Swal.fire({
//                   icon: "error",
//                   title: "Oops...",
//                   text: "Something went wrong Check your internet connection",
//                 });
//               });
//           }
//         });
//     } else {
//     }
//   };

//   return (
//     <div>
//       <ArrowBackIcon
//         onClick={goBack}
//         style={{
//           color: "red",
//           border: "1px solid black",
//           borderRadius: "50%",
//           background: "white",
//           zIndex: 100000,
//           position: "absolute",
//           top: 10,
//           right: 30,
//         }}
//       />
//       <Button
//         variant="contained"
//         style={{ backgroundColor: "#F1C232", color: "black", float: "right" }}
//         onClick={showmodal}
//       >
//         Show
//       </Button>
//       <br />
//       <br />

//       <Modal
//         isOpen={modalopen}
//         style={customStyles}
//         contentLabel="Education Level"
//         appElement={document.getElementById("root")}
//         disableBackdropClick="true"
//         sx={{ overflow: "hidden" }}
//       >
//         <div>
//           <label style={{ margin: 0 }}>Experiment</label>
//           <br />
//           <TextField
//             variant="outlined"
//             style={{ marginBottom: "10px", marginTop: "5px" }}
//             size="small"
//             placeholder="Experiment Title"
//             value={experiment}
//             onChange={(e) => {
//               setExperiment(e.target.value);
//             }}
//           ></TextField>
//           <br />

//           <label style={{ margin: 0 }}>Subject</label>
//           <br />
//           <TextField
//             variant="outlined"
//             style={{ marginBottom: "10px", marginTop: "5px" }}
//             size="small"
//             placeholder="Subject Name"
//             value={subject}
//             onChange={(e) => {
//               setSubject(e.target.value);
//             }}
//           ></TextField>
//           <br />

//           <label style={{ margin: 0 }}>Standard</label>
//           <br />
//           <FormControl
//             style={{
//               marginBottom: "10px",
//               marginTop: "5px",
//               minWidth: "200px",
//             }}
//             size="small"
//           >
//             <Select
//               variant="outlined"
//               value={standard}
//               label="Standard"
//               onChange={(e) => {
//                 setStandard(e.target.value);
//               }}
//             >
//               <MenuItem value={"ten"}>X</MenuItem>
//               <MenuItem value={"eleven"}>XI</MenuItem>
//               <MenuItem value={"twelve"}>XII</MenuItem>
//             </Select>
//           </FormControl>
//           <br />

//           {(standard === "eleven" || standard === "twelve") && (
//             <div>
//               <label style={{ margin: 0 }}>Group</label>
//               <br />
//               <FormControl
//                 style={{
//                   marginBottom: "10px",
//                   marginTop: "5px",
//                   minWidth: "200px",
//                 }}
//                 size="small"
//               >
//                 <Select
//                   variant="outlined"
//                   value={group}
//                   label="Group"
//                   onChange={(e) => {
//                     setGroup(e.target.value);
//                   }}
//                 >
//                   <MenuItem value={"biology"}>Biology</MenuItem>
//                   <MenuItem value={"science"}>Pure Science</MenuItem>
//                   <MenuItem value={"computer"}>Computer science</MenuItem>
//                   <MenuItem value={"physics"}>Physics</MenuItem>
//                   <MenuItem value={"chemistry"}>Chemistry</MenuItem>
//                 </Select>
//               </FormControl>
//             </div>
//           )}

//           <label style={{ margin: 0 }}>School</label>
//           <br />
//           <TextField
//             variant="outlined"
//             style={{ marginBottom: "10px", marginTop: "5px" }}
//             size="small"
//             placeholder="School Name"
//             value={school}
//             onChange={(e) => {
//               setSchool(e.target.value);
//             }}
//           ></TextField>
//           <br />

//           <Grid
//             container
//             direction="row"
//             justifyContent="space-around"
//             alignItems="center"
//           >
//             <Grid item>
//               <Button
//                 variant="contained"
//                 style={{
//                   color: "#000000",
//                   backgroundColor: "#f1c232",
//                   margin: "10px",
//                 }}
//                 onClick={handleSave}
//               >
//                 SAVE
//               </Button>
//             </Grid>
//             <Grid item>
//               <Button
//                 variant="contained"
//                 style={{
//                   color: "#000000",
//                   backgroundColor: "#f1c232",
//                   margin: "10px",
//                 }}
//                 onClick={duplicate}
//               >
//                 Duplicate
//               </Button>
//             </Grid>

//             <Grid item>
//               <Button
//                 variant="contained"
//                 style={{
//                   color: "#000000",
//                   backgroundColor: "#f1c232",
//                   margin: "10px",
//                 }}
//                 onClick={() => {
//                   setModalopen(false);
//                 }}
//               >
//                 Back
//               </Button>
//             </Grid>
//           </Grid>
//         </div>
//       </Modal>

//       <Editor
//         id="myTiny_Mce"
//         initialValue={initialcontent}
//         apiKey="au50u78j9vjabzcr4icg4v3oknubu08ifv9rfstawlzmdobp"
//         init={{
//           height: "100vh",
//           menubar: true,
//           selector: "textarea",
//           external_plugins: {
//             tiny_mce_wiris: `${path.join(
//               __dirname,
//               "../../../../node_modules/@wiris/mathtype-tinymce5/plugin.min.js"
//             )}`,
//           },
//           plugins: [
//             "advlist autolink lists link image code textpattern template",
//             "charmap print preview anchor help",
//             "searchreplace visualblocks code",
//             "insertdatetime media table advtablesort paste wordcount save",
//           ],
//           toolbar: `undo redo | formatselect | bold italic | \
//               alignleft aligncenter alignright | \
//               bullist numlist outdent indent | help | image code table customInsertButton customDateButton template tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry`,
//           image_advtab: true,
//           image_title: true,
//           automatic_uploads: true,
//           file_picker_types: "image",
//           file_picker_callback: function (cb, value, meta) {
//             var input = document.createElement("input");
//             input.setAttribute("type", "file");
//             input.setAttribute("accept", "image/*");
//             input.onchange = function () {
//               var file = this.files[0];

//               var reader = new FileReader();
//               reader.onload = function () {
//                 var id = "blobid" + new Date().getTime();
//                 var blobCache =
//                   window.tinymce.activeEditor.editorUpload.blobCache;
//                 var base64 = reader.result.split(",")[1];
//                 var blobInfo = blobCache.create(id, file, base64);
//                 blobCache.add(blobInfo);
//                 cb(blobInfo.blobUri(), { title: file.name });
//               };
//               reader.readAsDataURL(file);
//             };

//             input.click();
//           },
//           setup: function (editor) {
//             editor.ui.registry.addButton("customInsertButton", {
//               icon: "edit-block",
//               tooltip: "Insert Input Element",
//               onAction: function (_) {
//                 const value = nanoid(7);
//                 editor.insertContent(
//                   `&nbsp;<input type='text' id='value_${value}' name='value_${value}'>&nbsp;`
//                 );
//               },
//             });

//             var toTimeHtml = function (date) {
//               return (
//                 '<time datetime="' +
//                 date.toString() +
//                 '">' +
//                 date.toDateString() +
//                 "</time>"
//               );
//             };

//             editor.ui.registry.addButton("customDateButton", {
//               icon: "insert-time",
//               tooltip: "Insert Current Date",
//               disabled: true,
//               onAction: function (_) {
//                 editor.insertContent(toTimeHtml(new Date()));
//               },
//               onSetup: function (buttonApi) {
//                 var editorEventCallback = function (eventApi) {
//                   buttonApi.setDisabled(
//                     eventApi.element.nodeName.toLowerCase() === "time"
//                   );
//                 };
//                 editor.on("NodeChange", editorEventCallback);

//                 /* onSetup should always return the unbind handlers */
//                 return function (buttonApi) {
//                   editor.off("NodeChange", editorEventCallback);
//                 };
//               },
//             });
//           },
//           content_style:
//             "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//         }}
//         onInit={(evt, editor) => (editorRef.current = editor)}
//       />
//     </div>
//   );
// };

// export default EditprocedureSchool;
