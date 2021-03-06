import React from 'react';
import { ScrollView } from 'react-native';
import Logo from './components/Logo';
import Photo from './components/Photo';

const Main = () => {
    return (
        <ScrollView>
            <Logo />
            <Photo file={require('./assets/img/cat.png')} count={10} />
            <Photo file={require('./assets/img/cat2.png')} count={13} />
        </ScrollView>
    );
}

export default Main