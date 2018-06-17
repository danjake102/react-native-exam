import React, { PropTypes, Component } from 'react';

import { View, Text, TouchableHighlight, TextInput, TouchableOpacity} from 'react-native';

import styles from './style';



export default class TextInputs extends Component{
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
        };
    }

    onChangeEmail = (text) => {
        var emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(!emailValidator.test(text)){
            this.setState({emailError: "not correct format for email address"})
        }
        else {
            this.setState({emailError: ''});
            
        }
        if(text.length < 1){
            this.setState({emailError: ''});
        }
        
    };

    onChangePassword = (text) => {
        if(text.length < 6){
            this.setState({passError: 'input at least 6-12 characters'});
        }
        else {
            this.setState({passError: ''});
        }
        if(text.length < 1){
            this.setState({passError: ''});
        }
    };


    render(){
        return(
            <View>
                <Text style={styles.text}>Email</Text>
                    <TextInput 
                        placeholder='Input email address'
                        underlineColorAndroid='transparent' 
                        style={styles.textInput}
                        onChangeText={this.onChangeEmail}
                        
                    />
                    <Text style={styles.errorMessage}>{this.state.emailError}</Text>

                <Text  style={styles.text}>Password</Text>
                    <TextInput 
                        placeholder='Input password'
                        secureTextEntry={true} 
                        underlineColorAndroid='transparent' 
                        style={styles.textInput}
                        onChangeText={this.onChangePassword}
                    />
                    <Text style={styles.errorMessage}>{this.state.passError}</Text>

                <TouchableOpacity
                    style={styles.button}
                    
                >
                    <Text style={styles.buttonText}> Sign In </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
