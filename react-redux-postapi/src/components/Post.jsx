import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

class Post extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.addPost) {
            this.props.posts.unshift(nextProps.addPost);
        }
    }

    render() {
        const postItems = this.props.posts.map((post) => (
            <div key={post.id}>
                <h3> {post.title} </h3>
                <hr></hr>
                <p> {post.body} </p>
            </div>
        ));

        return (
            <div>
                <h1>POSTS.</h1>
                {postItems}
            </div>
        )
    }
}

Post.propTypes = {
    fetchPosts : PropTypes.func.isRequired,
    posts : PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts : state.posts.items,
    addPost : state.posts.item
});

export default connect(mapStateToProps , {fetchPosts})(Post);
