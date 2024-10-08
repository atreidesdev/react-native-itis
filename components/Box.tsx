import {View} from 'react-native';

export type BoxProps = {
    color: string;
    width: number;
    height: number;
};

export const Box = (props: BoxProps) => (
    <View
        style={{
            width: props.width,
            height: props.height,
            backgroundColor: props.color,
            borderRadius: 10,
        }}
    />
);
