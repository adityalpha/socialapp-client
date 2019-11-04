import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import Post from "../components/Post";
import Profile from "../components/Profile";

import { connect } from "react-redux";
import { getPosts } from "../redux/actions/dataActions";

export class home extends Component {
  //state = {
  //  posts: null
  //};
  componentDidMount() {
    /*
    //Fetching posts
    axios
      .get("/posts")
      .then(res => {
        //console.log(res.data);
        this.setState({
          posts: res.data
        });
      })
      .catch(err => console.log(err));*/
    this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props.data;
    let recentPostsMarkup = !loading ? (
      posts.map(post => <Post key={post.postId} post={post} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={5}>
        <Grid item sm={8} xs={12}>
          {recentPostsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getPosts }
)(home);
