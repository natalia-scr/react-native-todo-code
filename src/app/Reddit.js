import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {ADD_POST} from './reducers';

const _Reddit = (props) => (
    <View>
      <Text>Reddit</Text>
      <View>
        {props.posts.map(post => (
          <Text>{post.name}</Text>
        ))}
        <TouchableOpacity onPress={props.addRedditPost}>
          <Text> Add </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
const mapStateToProps = (state) => ({
  posts: state.reddit
});

const mapActionsToProps = (dispatch) => ({
  addRedditPost(post={name: 'new post'}) {
    dispatch({type: ADD_POST, payload: post});
  }
});

export const Reddit = connect(mapStateToProps, mapActionsToProps)(_Reddit);
