const _ = require('lodash');

const albumListState = {
  albumListStatus: "init",
  albumListData:[]
}

const albumList = (state = albumListState, action) => {
  switch (action.type) {
    case 'ALBUMLIST_lOADING':
      return _.assign({},state,{albumListStatus:"loading"});
    case 'ALBUMLIST_DONE':
      return _.assign({},state,{albumListStatus:"done",albumListData:action.result});
    default:
      return state;
  }
}

export default albumList
