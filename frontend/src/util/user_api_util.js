import axios from 'axios';

export const fetchUser = (userId) => {
    return axios.get(`/api/users/profile/${userId}`);
}

export const addProfilePic = (formData, userId) => {
    return axios.post(`/api/users/${userId}/profile-img`, formData);
}

export const updateUser = (user) => {
    return axios.patch(`/api/users/${user._id}/calendar`, user);
}