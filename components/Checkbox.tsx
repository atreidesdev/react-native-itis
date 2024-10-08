import {StyleSheet, TouchableOpacity} from 'react-native';

type ColorCheckboxProps = {
    color: string;
    selected: boolean;
    onSelect: (color: string) => void;
};

export const ColorCheckbox = ({
    color,
    selected,
    onSelect,
}: ColorCheckboxProps) => {
    return (
        <TouchableOpacity
            style={[
                styles.colorBox,
                {
                    backgroundColor: color,
                    borderColor: selected ? '#000' : '#fff',
                },
            ]}
            onPress={() => onSelect(color)}
        />
    );
};

const styles = StyleSheet.create({
    colorBox: {
        width: 40,
        height: 30,
        borderWidth: 2,
        borderRadius: 5,
    },
});
