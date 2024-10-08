import {Fragment, useState} from 'react';
import {Button, Text} from 'react-native';

export const ButtonText = () => {
    const [pressedCount, setPressedCount] = useState(0);

    const handlePress = () => {
        setPressedCount(pressedCount + 1);
    };
    const handleClear = () => {
        setPressedCount(0);
    };
    return (
        <Fragment>
            <Text style={{margin: 16}}>
                {pressedCount > 0
                    ? `The button was pressed ${pressedCount} times!`
                    : "The button isn't pressed yet"}
            </Text>
            <Button
                title="Press me"
                onPress={handlePress}
                disabled={pressedCount === 3}
            />
            {pressedCount === 3 && (
                <Button title="Clear" onPress={handleClear} />
            )}
        </Fragment>
    );
};
