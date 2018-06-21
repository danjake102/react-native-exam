import React, { PropTypes, Component } from 'react';

import { View, Text, TouchableHighlight, TextInput, TouchableOpacity} from 'react-native';

import styles from './style';


export default class TextInputs extends Component{
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
            isDisabled: false,
        };
    }
    

    onChangeEmail = (text) => {
        var emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(!emailValidator.test(text)){
            this.setState({
                emailError: "not correct format for email address", 
                email: '',
                isDisabled: true
            });
            
        }
        else 
        {
            this.setState({
                emailError: '',
                email: text,
                isDisabled: false,
            });   
        }

        if(text.length < 1){
            this.setState({emailError: '', isDisabled: false,});
            if(this.state.passError != ''){
                this.setState({isDisabled: true,});
            }
        }
        
        if(this.state.passError != ''){
            this.setState({isDisabled: true,});
        }
    };

    onChangePassword = (text) => {
        if(text.length < 6){
            this.setState({
                passError: 'please use at least 6-12 characters',
                password: '',
                isDisabled: true
            });   
        }
        else {
            this.setState({
                passError: '',
                password: text,
                isDisabled: false,
            });
        }
   
        if(text.length < 1){
            this.setState({passError: '', isDisabled: false,});
            if(this.state.emailError != ''){
                this.setState({isDisabled: true,});
            }
        }

        if(this.state.emailError != ''){
            this.setState({isDisabled: true,});
        }
        
    };

    btnSucess = () => {
        if(this.state.email == '' || this.state.password ==''){
            alert('Please input username or password');
        }
        else {
            alert('Login Success!');
        }

        
    }

    render(){
        var btnStyle = [styles.btnStyles];

        if(this.state.isDisabled == true){
            btnStyle.push(styles.btnDisabled)
        }


        return(
            <View>
                <Text style={styles.text}>Email</Text>
                    <TextInput 
                        placeholder='Input email address'
                        underlineColorAndroid='transparent' 
                        style={styles.textInput}
                        onChangeText={this.onChangeEmail}
                        keyboardType='email-address'
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
                    disabled={this.state.isDisabled}
                    style={btnStyle}
                    onPress={this.btnSucess}
                >
                    <Text style={styles.buttonText}> Sign In </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
