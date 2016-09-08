import React from 'react';

module.exports = React.createClass({
  displayName:"ModalContainer",

  getInitialState(){
    return {
      value:{
        username:"",
        password:""
      }
    }
  },

  userLogin(e){
    console.log(e)
    e.stopPropagation();
  },

  render(){
    const { username, password } = this.state.value;
    return(
      <form className="form" onSubmit ={this.userLogin}>
        <div className="form-group">
          <label htmlFor="username">学号：</label>
          <input name="username" type="text" value={username} />
        </div>
        <div className="form-group" style={{marginBottom:"20px"}}>
          <label htmlFor="password">密码<small>（首次登陆使用默认密码）</small>：</label>
          <input name="password" type="password" value={password} />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            登陆
          </button>
        </div>
      </form>
    )
  }
})
