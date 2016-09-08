import React from 'react';

module.exports = React.createClass({
  displayName:"ModalContainer",

  getInitialState(){
    return {
      hideModalFooter:false
    }
  },

  componentWillReceiveProps(nextProps){
    if(nextProps.hideModalFooter){
      this.setState({
        hideModalFooter:true
      })
    }
  },


  render(){
    const { hideModalFooter } = this.state;
    const { children, title, hideModal,onConfirm } = this.props;
    return(
      <div className="modal-background" style={this.props.visible?{}:{display:"none"}}>
        <div className="modal-container">
          <div className="modal-title">
            {title}
          </div>
          <div className="modal-content">
            {children}
          </div>
          <div className="modal-footer" style={hideModalFooter?{display:"none"}:{}}>
            <button className="btn" onClick={hideModal}>取消</button>
            <button className="btn btn-primary" onClick={onConfirm}>确认</button>
          </div>
        </div>
      </div>
    )
  }
})
