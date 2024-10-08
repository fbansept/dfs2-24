import { Pressable, StyleSheet, Text, useColorScheme } from "react-native";
import { primary } from '@/constants/Colors';

declare type Props = {
    title: string,
    width: number,
    onPress: () => void
};

export default function Button({ title, width, onPress }: Props) {

    return <Pressable
        onPress={onPress}
        style={{
            ...styles.button,
            width,
            backgroundColor: primary
        }}>
        <Text style={styles.textButton}>{title}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        height: 30,
        padding: 5,

    },
    textButton: {
        width: '100%',
        textAlign: 'center',
        color: 'white'
    }
})