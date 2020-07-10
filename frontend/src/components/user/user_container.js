import { connect } from "react-redux";

import UserProfile from "./user";

const mSTP = (state) => {
  return {
    currentUser: state.session.user,
  };
};

// const mDTP = dispatch => {
//     return {

//     }
// }

export default connect(mSTP, null)(UserProfile);
