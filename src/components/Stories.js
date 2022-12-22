import { Button, View, Text } from "react-native";

export default function Stories({route,navigation}) {
    return (
        <View>
            <View>
                {/*  */}
            </View>
            <Button onPress={() => navigation.navigate('StoriesDetails')} title="Open Stories"/>
        </View>
    )
}