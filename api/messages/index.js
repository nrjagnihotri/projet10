import { messageSave, messageLoad, messageDelete, messageUpdate, messageView } from "../../redux/reducers/message/index.js"
import axios from 'axios';
import { useEffect } from "react";

export const addedMessage = (message) => {
    return function (dispatch) {
        axios.post(`http://localhost:5000/Message`, message).then((resp) => {
            console.log("resp add", resp);
            dispatch(messageSave());
            loadMessage()

        }).catch(error => console.log(error));
    }
}

export const loadMessage = () => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/Message`).then((resp) => {
            console.log("res", resp)
            dispatch(messageLoad(resp.data));
        }).catch(error => console.log(error));
    }
}

export const deletMessage = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:5000/Message/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(messageDelete(resp.data));

        }).catch(error => console.log(error));
    }
}
export const viewMessage = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/Message/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(messageView(resp.data));

        }).catch(error => console.log(error));
    }
}
export const updatMessage = (id, message) => {
    return function (dispatch) {
        axios.put(`http://localhost:5000/Message/${id}`, message).then((resp) => {
            console.log("resp", resp);
            dispatch(messageUpdate(resp.data));
        }).catch(error => console.log(error));
    }
}
