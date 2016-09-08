import React from 'react';
import { connect } from 'react-redux'
import PhotosColumn from './PhotosColumn.jsx';
import commonMethod from '../commonMethod/column.jsx';
import { loadAlbums } from '../../actions';
const _ = require('lodash');
const $q = require('q');

module.exports = connect(state=>{return state})(React.createClass({

  getInitialState (){
    return {
      cardWidth:300,
      PhotosColumnData:[]
    }
  },

  caculateColumns(){
    var columns = 2;
    var innerWidth = window.innerWidth;
    if(innerWidth >= 1100){
      columns = 3;
    }
    if(innerWidth >= 1500){
      columns = 4;
    }
    if(innerWidth > 1900){
      columns = 5;
    }
    return columns;
  },

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(loadAlbums());
  },

  componentWillReceiveProps(nextProps){
    const {albumListData,albumListStatus} = nextProps.albumList;
    var newColumns = this.caculateColumns();
    var PhotosColumnData = commonMethod.distribution(newColumns,albumListData);
    this.setState({
      PhotosColumnData:PhotosColumnData
    });
  },

  render(){
    const {PhotosColumnData,cardWidth} = this.state;
    var rows = [];
    PhotosColumnData.map((item, index)=>{
      rows.push(
        <div key ={index} className="photos-column">
          <PhotosColumn
          cardWidth={cardWidth}
          cards = {item.data}
          />
        </div>
      )
    });
    return (
      <div className="gis-photos-container">
        {rows}
      </div>
    )
  }
}));
