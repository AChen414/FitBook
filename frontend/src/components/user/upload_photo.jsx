import React from 'react';
import axios from 'axios'

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }

  singleFileChangedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  singleFileUploadHandler = () => {
    const data = new FormData();
    // If file selected
    if (this.state.selectedFile) {
      data.append(
        "profileImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      axios
        .post("/api/profile/profile-img-upload", data, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          },
        })
        .then((response) => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ("LIMIT_FILE_SIZE" === response.data.error.code) {
                this.ocShowAlert("Max size: 2MB", "red");
              } else {
                console.log(response.data);
                // If not the given file type
                this.ocShowAlert(response.data.error, "red");
              }
            } else {
              // Success
              let fileName = response.data;
              console.log("fileName", fileName);
              this.ocShowAlert("File Uploaded", "#3089cf");
            }
          }
        })
        .catch((error) => {
          // If another error
          this.ocShowAlert(error, "red");
        });
    } else {
      // if file not selected throw error
      this.ocShowAlert("Please upload file", "red");
    }
  };

  render() {
    console.log(this.state)
    return (
        <div >
            <div className="card border-light mb-3 mt-5">
                <div className="card-header">
                <h3>Single Image Upload</h3>
                <p className="text-muted">Upload Size: 250px x 250px ( Max 2MB )</p>
                </div>
                <div className="card-body">
                <p className="card-text">Please upload an image for your profile</p>
                <input type="file" onChange={this.singleFileChangedHandler} />
                <div className="mt-5">
                    <button
                    className="btn btn-info"
                    onClick={this.singleFileUploadHandler}
                    >
                    Upload!
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
  }
}

export default PhotoForm;