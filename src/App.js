import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {signIn, signOut} from './actions/index'

import {authRef} from './config/firebase';


class App extends Component {

  state ={
    currentUser:''
  }

  componentDidMount(){
    authRef.onAuthStateChanged((user) => {
      console.log(user)
        if (user) {
            this.setState({currentUser:user.displayName})
        } else {
            this.setState({currentUser:'Plaese signIn'})
        }
    });
  }




  render() {
    return (
        <div>
          <button onClick={this.props.signIn}>signIn</button>
          <button onClick={this.props.signOut}>signOut</button>
          <hr/>
          <h2>{this.state.currentUser}</h2>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  signIn,
  signOut
},dispatch)

export default connect(null,mapDispatchToProps)(App);
