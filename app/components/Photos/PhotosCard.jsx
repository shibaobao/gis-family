import React from 'react';

module.exports = React.createClass({

  render(){
    const { src, des, cardWidth } = this.props;
    return (
      <div className="photo-card" style={{width:cardWidth + "px"}}>
        <div className="photo-box">
          <img src={src} />
        </div>
        <div className="photo-des">
            {des}
        </div>
      </div>
    )
  }
})
