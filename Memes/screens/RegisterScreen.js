import React from "react";
import { View, Text, StyleSheet, TextInput,TouchableOpacity, Image, StatusBar } from "react-native";
import {Ionicons } from "@expo/vector-icons" 
import Setting from "./Settings";
import firebase from "firebase";


export default class RegisterScreen extends React.Component {

     static navigationOptions = {

          header: null
  
      };

     state = {
     
               name: "",
               email: "",
               password: "",
          
          
          errorMessage: null
     };

     handleSignUp = () => {
        firebase
           .auth()
           .createUserWithEmailAndPassword(this.state.email, this.state.password)
           .then(userCredentials => {
                return userCredentials.user.updateProfile({
                     displayName: this.state.name
                });
           })
           .catch(error => this.setState({ errorMessage: error.message }));

           };
     
    

     render() {
        return (
             <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                     <Ionicons name="ios-arrow-round-back" size={39} color="black" ></Ionicons>
                 </TouchableOpacity>
                 
                 <View style={{ position: "absolute", top: 0, alignItems: "center", width: "100%" }}>
                   <Text style={styles.greeting}>{'Hello!\nSign up to get started.'}</Text>
                    </View>


                    <Image 

         source={require("../assets/Sign.png")}

style={{ width: 100, height:100, left:130,top:90}}

/>

                   <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                   </View>

                     <View style={styles.form}>
                  
                    <View style={{ marginTop: 90}}>

                   <Text style={styles.inputTitle}>Full Name</Text>
                   <TextInput style={styles.input}
                    autoCapitalize="none"
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                    ></TextInput>
              </View>

              <View>
                    <View style={{ marginTop: 10}}>
                   <Text style={styles.inputTitle}>Email Address</Text>
                   <TextInput style={styles.input}
                      autoCapitalize="none"
                       onChangeText={email => this.setState({ email })}
                       value={this.state.email}
                      ></TextInput>
                  </View>
                  </View>
                  
                 <View style={{ marginTop: 10 }}>
                      <Text style={styles.inputTitle}>Password</Text>
                      <TextInput 
                      style={styles.input} 
                      secureTextEntry 
                      autoCapitalize="none"
                      onChangeText={password => this.setState({ password })}
                      value={this.state.password}
                      ></TextInput>
                 </View>

          </View>
          <TouchableOpacity style={styles.button}  onPress={this.handleSignUp}>
               <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{ alignSelf: "center", marginTop: 20}}
            onPress={() => this.props.navigation.navigate("Login")}
            >
               <Text style={{ color: "#414959", fontSize: 13 }}>
                    New to AsyncStorage!    <Text style={{ fontWeight: "500", color: "#E9446A" }}>Login</Text>
               </Text>
          </TouchableOpacity>
      </View>
        );
     }
}


const styles = StyleSheet.create({
     container: {
         flex: 1,
     },
      greeting: {
           marginTop: 32,
           fontSize: 18,
           fontWeight: "400",
           textAlign: "center"
      },
      errorMessage: {
           height: 72,
           alignItems: "center",
           justifyContent: "center",
           marginHorizontal: 30
      },
      error: {
           color: "#E9446A",
           fontSize: 13,
           fontWeight: "600",
           textAlign: "center",
           top: 100
      },
      form: {
           marginBottom: 48,
           marginHorizontal: 30
      },
      inputTitle: {
           color: "#8A8F9E",
           fontSize: 10,
           textTransform: "uppercase"
      },
      input: {
           borderBottomColor: "#8A8F9E",
           borderBottomWidth: StyleSheet.hairlineWidth,
           height: 40,
           fontSize: 15,
           color: "#161F3D"
      },
      button: {
           marginHorizontal: 30,
           backgroundColor: "#E9446A",
           borderRadius: 4,
           height: 52,
           alignItems: "center",
           justifyContent: "center"
      },
     back: {
          position: "absolute",
          top: 20,
          left: 10,
          width: 32,
          height: 32,
          borderRadius: 16,
          backgroundColor: "rgba(255, 99, 71, 0)",
          alignItems: "center",
          justifyContent: "center"
     }
      
});