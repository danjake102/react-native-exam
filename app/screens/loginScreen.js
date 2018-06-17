import React from 'react';
import {Text, View, StatusBar} from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { TextInputs } from '../components/TextInput';


export default () => (
	<Container>
		<StatusBar translucent= {false} />
		<Logo />
		<TextInputs />
		
      	<View />
	</Container>
	
);