import axios from "axios";

export const getWorkouts = () => {
    return axios.get(`api/workouts`)
} 

export const getUserWorkouts = (userId) => {
    return axios.get(`/api/workouts/user/${userId}`)
};

export const getUserWorkout = (userId) => {
    return axios.get(`/api/workouts/${userId}`)
};

export const createWorkout = (data) => {
    return axios.post('/api/workouts', data)
};

export const updateWorkout = (data) => {
    // debugger
    return axios.patch(`/api/workouts/${data._id}`, data)
};

export const deleteWorkout = (id) => {
    return axios.delete(`/api/workouts/${id}`)
};