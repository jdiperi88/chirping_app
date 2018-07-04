import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import Dasboard from './Dashboard'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true 
          ? <h2> loading... </h2>
          : <Dasboard />}
        
      </div>
    )
  }
}


function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)