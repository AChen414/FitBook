import {fetchUser, addProfilePic, updateUser } from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_PROFILE_PIC = 'RECEIVE_PROFILE_PIC';

export const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    };
};

export const editUser = user => dispatch => {
    return updateUser(user)
        .then((user => dispatch(receiveUser(user))))
}

export const fetchUserProfile = userId => dispatch => (
    fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
        .catch(err => console.log(err))
);

export const updateProfilePic = (formData, userId) => dispatch => {
    return addProfilePic(formData, userId).then(res => {
        // debugger
        return dispatch(fetchUserProfile(res.data._id))
    }, err => {
        console.log(err);
    })
}
