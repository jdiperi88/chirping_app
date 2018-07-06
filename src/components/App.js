import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import Dasboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
        <LoadingBar />
          <div className='container'>

            <Nav />
            {this.props.loading === true 
              ? <h2> loading... </h2>
              : <div>
                  <Route path='/' exact component={Dasboard} />
                  <Route path='/tweet/:id' exact component={TweetPage} />
                  <Route path='/new' exact component={NewTweet} />
                </div>}
            
          </div>
        </Fragment>
      </Router>
    )
  }
}


function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)