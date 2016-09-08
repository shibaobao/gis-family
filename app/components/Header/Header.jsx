import React from 'react';
import StaticInfo from '../constant/StaticInfo.jsx';
const LoginModal = require('./LoginModal.jsx');
const ModalContainer = require('../modal');

module.exports = React.createClass({
  displayName:"Header",

  getInitialState (){
    return {
      visible:false
    }
  },

  showLoginModal(){
    this.setState({
      visible:true
    })
  },

  hideLoginModal(){
    this.setState({
      visible:false
    })
  },

  onConfirm(){

  },

  render() {
    const { visible } = this.state;
    var title = "登录";
    return (
      <header className="gis-header">
        <div className="logo"></div>
        <div className="title">{StaticInfo.AssetTitle}</div>
        <div className="actiongroup">
          <a href="javascript:;" onClick={this.showLoginModal} > 登录</a>
        </div>
        <ModalContainer
          title = { title }
          visible = { visible }
          hideModal = {this.hideLoginModal}
          hideModalFooter = {true}
        >
          <LoginModal />
        </ModalContainer>
      </header>
    );
  }
});
