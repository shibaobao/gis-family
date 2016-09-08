const _ = require('lodash');

const userInfoState = {
  userStatus: "logout",
  userInfo:{
    userId:"",
    name:"",
    avator:""
  }
}

const albumList = (state = userInfoState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return _.assign({},state,{userStatus:"logining"});
    case 'USER_LOGIN_SUCCESS':
      const { userId,name,avator } = this.action.data;
      return _.assign({},state,{
        userStatus:"logined",
        userInfo:{
          userId,
          name,
          avator
        }
      });
    case 'USER_LOGOUT':
      return _.assign({},state,{userStatus:"logout"});
    default:
      return state;
  }
}

export default albumList
