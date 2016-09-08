import React from 'react';
import PhotosCard from './PhotosCard.jsx';

module.exports = React.createClass({

  getInitialState (){
    return {
        columHeight:0
    }
  },

  render(){
    const { cards,cardWidth }= this.props;
    var rows = [];
    cards.map((item, index) =>{
      rows.push(
        <PhotosCard
          key = {index}
          cardWidth={cardWidth}
          updateColumHeight={this.updateColumHeight}
          {...item}
        />
      )
    })
    return(
      <div className="photo-card-column">
        {rows}
      </div>
    )
  }
})
