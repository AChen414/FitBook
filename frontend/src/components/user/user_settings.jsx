import React from 'react'

import UserBioForm from './user_settings_form'

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    document.getElementById("recommendation").style = "visibility: visible";
    this.props.closeModal();
  }

  render() {
    return (
      <div className="user-settings-form">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.props.closeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h3 className="modal-title">User Quiz</h3>
            </div>
            <div className="modal-body">
              <UserBioForm />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                {" "}
                Save changes{" "}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.props.closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserSettings;