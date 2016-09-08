import 'whatwg-fetch';
import leanCloud from '../services/leanCloud.js';
const Lean = new leanCloud();
Lean.init();

const USER_LOGIN = 'USER_LOGIN';
const USER_LOGINING = 'USER_LOGINING';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGOUT = 'USER_LOGOUT';

const ADD_USERLOCATION = 'ADD_USERLOCATION';
const ALBUMLIST_DONE = 'ALBUMLIST_DONE';
const ALBUMLIST_lOADING = 'ALBUMLIST_lOADING';



export const addUserLocation = (text) => {
  return {
    type: ADD_USERLOCATION,
    text: text
  }
}

export const addAlbumDone = (text,result) => {
  return {
    type: ALBUMLIST_DONE,
    text: text,
    result: result
  }
}

export const albumListPosts = (text) => {
  return {
    type: ALBUMLIST_lOADING,
    text: text
  }
}

export const loadAlbums = (text) => {
  return (dispatch, getState) => {
    return dispatch(getAlbumsData(text))
  }
}

function getAlbumsData(text) {
  return dispatch => {
    dispatch(albumListPosts(text));
    var newQuery = Lean.creatNewQuery('AlbumList');
    newQuery.find().then((results)=>{
      let data = [];
      _(results).forEach((value)=>{
        let tempObj = {
          id:value.id,
          updatedAt:value.updatedAt,
          createdAt:value.createdAt
        }
        data.push(_.assign({},tempObj,value._serverData))
      })
      dispatch(addAlbumDone(text,data));
    });
  }
}

export const loginReqProcessing = (text) => {
  return {
    type: USER_LOGINING,
    text: text
  }
}

export const userLogin = (text) => {
  return (dispatch, getState) => {
      return dispatch(userLoginRequest(text));
  }
  return {
    type: USER_LOGIN,
    text: text
  }
}

export const userLoginSuccess = (text) => {
  return {
    type: USER_LOGIN_SUCCESS,
    text: text
  }
}

function userLoginRequest(text) {
  return dispatch => {
    dispatch(loginReqProcessing(text));
  }
}
