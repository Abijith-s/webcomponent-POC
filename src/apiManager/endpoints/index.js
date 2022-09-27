import { SERVER_BASE_URL } from "./config";
export const API = {
    ADD_TODO : `${SERVER_BASE_URL}/api/todo/add-todo`,
    GET_TODO : `${SERVER_BASE_URL}/api/todo/get-todo`,
    EDIT_TODO : `${SERVER_BASE_URL}/api/todo/edit-todo`,
    DELETE_TODO : `${SERVER_BASE_URL}/api/todo/delete-todo`
}