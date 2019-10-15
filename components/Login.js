import React, { Component } from 'react';
import { AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    AsyncStorage,
    Button,
    TextInput,
    Keyboard,
    Platform,
    ImageBackground,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert } from 'react-native';
class Login extends Component {
    /**
     * @summary constructor for the login page 
     * @param {*} props the props passed from other classes using the component 
     */
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: ''
        }
    }

    /**
     * @summary making API request to authenticate a user
     */
    componentDidMount() {

    }

    /**
     * @summary render JSX components for the login screen
     * @returns a view containing a text box and a button
     */
    render() {
        return(
           <KeyboardAvoidingView
           behavior='padding'
           style={{flex: 1, alignItem: 'center', justifyContent: 'center'}}>
                <View style={styles.rectangle}>
                    <Text style={styles.signUp}>Login</Text>
                </View>

                <TextInput
                style= {styles.textInput}
                placeholder="Email"
                onChangeText = {email => this.setState({email})}
                underlineColorAndroid = 'transparent'
                />

                <TextInput
                style = {styles.textInput}
                placeholder="Password"
                onChangeText = {password => this.setState({password})}
                underlineColorAndroid = "transparent"
                />

                <View>
                    <Button
                    //add navigation based on api call response 
                    title="Login"
                    
                    />
                </View>

           </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: '90%',
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
        fontSize: 20,
        padding: '2%'
    },
    continueButton: {
        width: '50%',
        justifyContent: 'flex-end',
        borderRadius: 50,
        margin: 30,
       // backfaceVisibility: '#e1665c',
        fontWeight: 'bold'
    },
    signUp: {
        position: 'absolute',
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: '5%'
    },
    rectangle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '10%',
        borderColor: '#707070',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#e1665c',
        justifyContent: 'center'
    }
})

export default Login;


