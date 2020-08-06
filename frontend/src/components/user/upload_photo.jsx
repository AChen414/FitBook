// import React, {Component} from 'react';
// import axios from 'axios';
// import $ from "jquery";


// class PhotoForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       profilePic: null,
//       // profilePhotoKey: this.props.currentUser.profilePhotoKey
//     };
//     this.handleProfileImg = this.handleProfileImg.bind(this);
//     this.handleSubmitProfileImg = this.handleSubmitProfileImg.bind(this);
//   }

//   //find current user and handle upload to change photo key on backend 
  
//   handleProfileImg(e) {
//     e.preventDefault();
//     this.setState({
//       profilePic: e.target.files[0],
//     });
//   };

//   handleSubmitProfileImg(e){
//     e.preventDefault();

//     if (!this.state.profilePic) {
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", this.state.profilePic);
//     // debugger
//     this.props.updateProfilePic(formData, this.props.currentUser.id)
 
//   }

//   render() {
//     console.log(this.state);
//     return (
//       <div className="container">
//         {/* For Alert box*/}
//         <div id="oc-alert-container"></div>
//         {/* Single File Upload*/}
//         <div
//           className="card border-light mb-3 mt-5"
//           style={{ boxShadow: "0 5px 10px 2px rgba(195,192,192,.5)" }}
//         >
//           <div className="card-header">
//             <h3 style={{ color: "#555", marginLeft: "12px" }}>
//               Single Image Upload
//             </h3>
//             <p className="text-muted" style={{ marginLeft: "12px" }}>
//               Upload Size: 250px x 250px ( Max 2MB )
//             </p>
//           </div>
//           <div className="card-body">
//             <p className="card-text">Please upload an image for your profile</p>
//             <input type="file" onChange={this.handleProfileImg} />
//             <div className="mt-5">
//               <button
//                 className="btn btn-info"
//                 onClick={this.handleSubmitProfileImg}
//               >
//                 Upload!
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default PhotoForm;



//   // singleFileUploadHandler = (e) => {
//   //   e.preventDefault();

//   //   const data = new FormData();
//   //   // If file selected
//   //   if (this.state.selectedFile) {
//   //     data.append(
//   //       "profileImage",
//   //       this.state.selectedFile,
//   //       this.state.selectedFile.name
//   //     );
//   //     axios
//   //       .post("/api/profile/profile-img-upload", data, {
//   //         headers: {
//   //           accept: "application/json",
//   //           "Accept-Language": "en-US,en;q=0.8",
//   //           "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
//   //         },
//   //       })
//   //       .then((response) => {
//   //         if (200 === response.status) {
//   //           // If file size is larger than expected.
//   //           if (response.data.error) {
//   //             if ("LIMIT_FILE_SIZE" === response.data.error.code) {
//   //               this.ocShowAlert("Max size: 2MB", "red");
//   //             } else {
//   //               console.log(response.data);
//   //               // If not the given file type
//   //               this.ocShowAlert(response.data.error, "red");
//   //             }
//   //           } else {
//   //             // Success
//   //             let fileName = response.data;
//   //             console.log("filedata", fileName);
//   //             this.ocShowAlert("File Uploaded", "#3089cf");
//   //             // debugger
//   //             // this.setState({
//   //             //   profilePhotoKey: fileName.image
//   //             // })
//   //             // debugger
//   //           }
//   //         }
//   //       })
//   //       .catch((error) => {
//   //         // If another error
//   //         this.ocShowAlert(error, "red");
//   //       });
//   //   } else {
//   //     // if file not selected throw error
//   //     this.ocShowAlert("Please upload file", "red");
//   //   }
//   // };

//   // // ShowAlert Function
//   // ocShowAlert = (message, background = "#3089cf") => {
//   //   let alertContainer = document.querySelector("#oc-alert-container"),
//   //     alertEl = document.createElement("div"),
//   //     textNode = document.createTextNode(message);
//   //   alertEl.setAttribute("class", "oc-alert-pop-up");
//   //   $(alertEl).css("background", background);
//   //   alertEl.appendChild(textNode);
//   //   alertContainer.appendChild(alertEl);
//   //   setTimeout(function () {
//   //     $(alertEl).fadeOut("slow");
//   //     $(alertEl).remove();
//   //   }, 3000);
//   // };