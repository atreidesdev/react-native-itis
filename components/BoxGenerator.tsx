import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ColorCheckbox} from './Checkbox';
import {Box, BoxProps} from './Box';
import {CustomButton, InputField} from './TextInputs.tsx';

export const BoxGenerator = () => {
    const [width, setWidth] = useState('100');
    const [height, setHeight] = useState('100');
    const [color, setColor] = useState('#B3E5FC');
    const [boxes, setBoxes] = useState<BoxProps[]>([]);

    const handleAddBox = () => {
        const newBox = {
            width: parseInt(width, 10),
            height: parseInt(height, 10),
            color: color,
        };
        setBoxes([...boxes, newBox]);
    };

    const colors = ['#FFF9C4', '#B3E5FC', '#FFCDD2'];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <InputField
                label="Введите ширину квадрата"
                value={width}
                onChangeText={setWidth}
                secureTextEntry={false}
            />
            <InputField
                label="Введите высоту квадрата"
                value={height}
                onChangeText={setHeight}
                secureTextEntry={false}
            />

            <View style={styles.colorContainer}>
                {colors.map(colorOption => (
                    <ColorCheckbox
                        key={colorOption}
                        color={colorOption}
                        selected={color === colorOption}
                        onSelect={setColor}
                    />
                ))}
            </View>

            <CustomButton title="Добавить квадрат" onPress={handleAddBox} />

            <View style={styles.boxesContainer}>
                {boxes.map((box, index) => (
                    <Box key={index} {...box} />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
    },
    colorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    boxesContainer: {
        marginTop: 20,
        alignItems: 'center',
        gap: 10,
    },
});
