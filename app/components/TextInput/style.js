import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


const textInputSize = Dimensions.get('window').width / 1.2;


export default EStyleSheet.create({
    textInput: {
        
        paddingHorizontal: 10,
        borderRadius: 3,
        borderColor: '$amethyst',
        borderWidth: 1.5,
        height: 40,
        width: textInputSize,
    },
    text: {
        fontWeight: 'bold',
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
        marginBottom: 15,
        fontStyle: 'italic',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$wisteria',
        width: textInputSize,
        padding: 10,
        marginTop: 20,
    },
});
