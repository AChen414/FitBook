import React from 'react';

class UploadPhoto extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profilePic: null,
      tempPic: null
    }
    this.handleProfileImg = this.handleProfileImg.bind(this);
    this.handleSubmitProfileImg = this.handleSubmitProfileImg.bind(this);
  }

  handleProfileImg(e) {
    e.preventDefault();
    
    this.setState({
      profilePic: e.target.files[0],
      tempPic: URL.createObjectURL(e.target.files[0])
    });
  }
  

  handleSubmitProfileImg(e) {
    
    e.preventDefault();

    if (!this.state.profilePic) {
      return;
    }

    const formData = new FormData();
    formData.append("file", this.state.profilePic);
    // debugger
    this.props.updateProfilePic(formData, this.props.currentUser.id)
      .then(() => {
        this.setState({
          profilePic: null,
          tempPic: null
        })
      }).then(() => {
        this.props.closeModal()
      })
  }

  render (){
    
    const profileLink = `https://fit-book-bucket.s3.amazonaws.com/${this.props.user.profilePhotoKey}`

    const previewCurrentPhoto = this.state.profilePic !== null ? (
      <div className="profile-userpic">
        <img
          src={this.state.tempPic}
          alt=""
        />
      </div>
    ) : (
        <div className="profile-userpic">
          <img
            src={profileLink}
            alt=""
          />
        </div>
    )

    return(
      <div className="upload-img-container">
        <div className="abcdef">
          <div className="close-modal-btn">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={this.props.closeModal}
            >
              <span >&times;</span>
            </button>
          </div>
          <div className="current-img">
            {previewCurrentPhoto}
          </div>
        </div>

        <div className="card border-light mb-3 mt-5" >
          <div className="card-header">
            <h3 className="upload-form-title"> Image Preview </h3>
          </div>
          <div className="card-body">
            {/* <p className="card-text">Please upload an image for your profile</p> */}
            <input className="file-upload" type="file" accept="image/*" onChange={this.handleProfileImg} />
            <div className="mt-5">
              <button
                className="btn btn-success"
                onClick={this.handleSubmitProfileImg}
              >
                Save!
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default UploadPhoto