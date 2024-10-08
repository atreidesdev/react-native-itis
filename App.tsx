import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {ButtonText} from './components/ButtonText.tsx';
import {TextInputs} from './components/TextInputs.tsx';
import {Linebreacker} from './components/Linebreacker.tsx';
import {BoxGenerator} from './components/BoxGenerator.tsx';

function App(): React.JSX.Element {
    return (
        <SafeAreaView style={styles.app}>
            <ScrollView>
                <ButtonText />
                <Linebreacker />
                <TextInputs />
                <BoxGenerator />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    app: {
        justifyContent: 'center',
        padding: 8,
    },
});

export default App;
