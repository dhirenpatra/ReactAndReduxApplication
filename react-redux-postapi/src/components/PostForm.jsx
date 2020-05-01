import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addPost } from '../actions/postAction';

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : '',
            body : ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    };

    handleOnSubmit = (e) => {

        const data = {
            title: this.state.title,
            body: this.state.body
        };

        e.preventDefault();
        // call the add action here...
        this.props.addPost(data);
        this.setState( { 
            title : '',
            body : ''
        })
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <div className="form-group">
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label> Title : </label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange}/>
                    </div>
                    <div>
                        <label> Body : </label>
                        <input type="textarea" value={this.state.body} name="body" onChange={this.handleOnChange}/>
                    </div>
                    <div>
                        <button type="submit" > SUBMIT </button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default connect(null, {addPost} )(PostForm)
