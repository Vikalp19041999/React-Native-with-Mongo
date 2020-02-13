import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      UserName: '',
      Password1: ''
    }
  }

  login() {
    var username = this.state.UserName
    var password1 = this.state.Password1
    if (username == "" || password1 == "") {
      alert("All fields are required")
    }
    else {
      fetch('http://192.168.0.123:3000/login', {
        method: "POST",
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            Username: username,
            Password: password1
          }
        )
      }).then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("./images.jpeg")}
          style={styles.img}
        ></Image>
        <Text style={styles.header}>Log Inshubham</Text>
        <TextInput style={styles.input} placeholder="Enter Name" placeholderTextColor='#576574'
          defaultValue={this.state.UserName} onChangeText={(n) => this.setState({ UserName: n })} />
        <TextInput style={styles.input} placeholder="Enter Password" placeholderTextColor='#576574'
          secureTextEntry={true} defaultValue={this.state.Password1} onChangeText={(p) => this.setState({ Password1: p })} />
        <TouchableOpacity style={styles.btn} onPress={this.login.bind(this)}>
          <Text style={styles.btntext}>Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  header:
  {
    fontSize: 40,
    fontWeight: '500',
    fontStyle: 'italic',
    color: 'white',
    margin: 20
  },
  input:
  {
    borderColor: "#2c3e50",
    borderWidth: 1,
    margin: 6,
    fontSize: 15,
    height: 45,
    width: 300,
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 5,
  },
  img:
  {
    height: 200,
    width: 200,
    resizeMode: 'stretch'
  },
  btn:
  {
    backgroundColor: "#0097e6",
    height: 30,
    width: 100,
    alignItems: 'center',
    margin: 6
  },
  btntext:
  {
    color: 'white',
    fontSize: 20,
  },
  white:
  {
    color: 'white',
    fontSize: 15
  }
})


export default Login