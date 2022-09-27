import { httpGETRequest, httpPOSTRequest } from "../httpRequestHandler";
import { API } from "../endpoints/index";
import { setTodoList } from "../../actions/userAction";

export const addTodo = (data,...rest)=>{
    const done = rest.length ? rest[0] : () => { };
    const url = API.ADD_TODO
    return async (dispatch) => {
        try {
            if(data){
                let response = await httpPOSTRequest(url, data);
                done(true);
            }
        }
        catch (err) {
            console.log("error",err);
            done(false);
        }
    }
}

export const getTodo = (...rest)=>{
    const done = rest.length ? rest[0] : () => { };
    const url = API.GET_TODO
    return async (dispatch) => {
        try {
                let response = await httpGETRequest(url);
                dispatch(setTodoList(response.data.data))
                done(true);
            
        }
        catch (err) {
            console.log("error",err);
            done(false);
        }
    }
}

export const editTodo = (data,...rest)=>{
    const done = rest.length ? rest[0] : () => { };
    const url = API.EDIT_TODO
    return async (dispatch) => {
        try {
                let response = await httpPOSTRequest(url);
                done(true);
            
        }
        catch (err) {
            console.log("error",err);
            done(false);
        }
    }
}

export const deleteTodo = (data,...rest)=>{
    const done = rest.length ? rest[0] : () => { };
    const url = API.DELETE_TODO
    return async (dispatch) => {
        try {
                let response = await httpPOSTRequest(url,data);
                dispatch(setTodoList(response.data.data))
                done(true);
            
        }
        catch (err) {
            console.log("error",err);
            done(false);
        }
    }
}