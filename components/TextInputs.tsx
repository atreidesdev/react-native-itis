import {Fragment, useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';

type InputFieldProps = {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
};

type ButtonProps = {
    title: string;
    onPress: () => void;
};

export const InputField = ({
    label,
    value,
    onChangeText,
    secureTextEntry,
}: InputFieldProps) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

export const CustomButton = ({title, onPress}: ButtonProps) => {
    return (
        <View style={styles.buttonContainer}>
            <Button title={title} onPress={onPress} />
        </View>
    );
};

export const TextInputs = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formUsername, setFormUsername] = useState('');
    const [formPassword, setFormPassword] = useState('');
    const [fixedPassword, setFixedPassword] = useState('');
    const [show, setShow] = useState(false);
    const [formStatus, setFormStatus] = useState('');

    const handlePress = () => {
        setShow(true);
        setFixedPassword(password);
    };

    const handleFormCheck = () => {
        if (formUsername === username && formPassword === password) {
            setFormStatus('Совпадение: всё верно');
        } else if (formUsername !== username && formPassword !== password) {
            setFormStatus('Ошибка: неверные юзернейм и пароль');
        } else if (formUsername !== username) {
            setFormStatus('Ошибка: неверный юзернейм');
        } else if (formPassword !== password) {
            setFormStatus('Ошибка: неверный пароль');
        }
    };

    return (
        <Fragment>
            <Text style={styles.title}>
                {username ? `Username: ${username}!` : 'What is your username?'}
            </Text>

            <InputField
                label="Введите юзернейм"
                value={username}
                onChangeText={setUsername}
            />

            <Text style={styles.title}>
                {show ? `Password: ${fixedPassword}` : 'What is your password?'}
            </Text>

            <InputField
                label="Введите пароль"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <CustomButton title="Set password" onPress={handlePress} />

            <Text style={styles.status}>
                {formStatus ? formStatus : 'Заполните форму'}
            </Text>

            <InputField
                label="Введите юзернейм (форма)"
                value={formUsername}
                onChangeText={setFormUsername}
            />

            <InputField
                label="Введите пароль (форма)"
                value={formPassword}
                onChangeText={setFormPassword}
                secureTextEntry
            />

            <CustomButton title="Проверить форму" onPress={handleFormCheck} />
        </Fragment>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
    },
    label: {
        fontSize: 16,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 4,
        borderRadius: 5,
    },
    buttonContainer: {
        marginVertical: 8,
    },
    title: {
        marginVertical: 16,
        fontSize: 18,
        fontWeight: 'bold',
    },
    status: {
        marginVertical: 16,
        fontSize: 16,
        color: '#ff0000',
    },
});
