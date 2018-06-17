import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


const imageSize = Dimensions.get('window').height / 2.3;


export default EStyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageSize: {
        width: imageSize,
        height: imageSize,
    },
});