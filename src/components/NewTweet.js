import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'
class NewTweet extends Component {
    
    state = {
        text: '',
        toHome: false
    }

    handleChange = (e) =>{
        const text = e.target.value

        this.setState(()=>({
            text
        }))
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        const { text } = this.state
        const { dispatch, id } = this.props

        dispatch(handleAddTweet(text,id))

        this.setState(() => ({
            text:'',
            toHome: id ? false : true
        }))
    }
    render() {
        let {text, toHome} = this.state
        let tweetleft = 280 - text.length

        if(toHome === true){
            return <Redirect to ='/' />
        }

        return (
            <div>
                <h3 className='center'>Compose New Tweet </h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea 
                        placeholder='whats happening'
                        value={text}
                        onChange={this.handleChange}
                        className='textarea'
                        maxLength={280}
                    />
                    {tweetleft <= 100 && (
                        <div className='tweet-left'>
                            {tweetleft}
                        </div> 
                    )}
                    <button 
                        className='btn'
                        type='submit'
                        disabled={text===''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet)