import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Reddit} from './Reddit';

export class Todo extends Component {
  constructor () {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  componentWillMount () {
    fetch('http://192.168.0.6:3000/todos', {
      headers: {
        'Accept': 'aplication/json'
      }
    })
    .then(res => res.json())
    .then(data => this.setState({todos: data}));
  }

  handleChange (text) {
    this.setState({newTodo: text});
  }
  handlePress () {
    fetch('http://192.168.0.6:3000/todos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.newTodo
      })
    })
    .then(res => res.json())
    .then(data => {
      const todos = [data, ...this.state.todos];
      this.setState({todos, newTodo: ''});
    });
    // this.setState({todos, newTodo: ''});
  }
  render () {
    return (
      <View style={styles.container}>
        <Reddit />
        <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={this.state.newTodo}
          onChangeText={this.handleChange.bind(this)}
        />
        <TouchableOpacity
        style={styles.button}
        onPress={this.handlePress.bind(this)}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.todos}>
          {this.state.todos.map((todo, i) =>
            <Text style={styles.todo} key={i}>{todo.name} </Text>)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    fontSize: 24
  },
  button: {
    flex: 0.3,
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  todos: {
    marginTop: 60
  },
  todo: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    padding: 20
  }
});
