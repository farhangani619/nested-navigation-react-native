import { View, Text, Button } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import Stories from "./Stories"
import HomeHeader from "./HomeHeader"
export default function HomeScreen ({route, navigation}) {
    return(
       <SafeAreaView>
            <View>
                <HomeHeader />
            </View>
            <ScrollView>
                <View>
                    <Stories navigation={navigation} />
                </View>
                <View>
                    {/* feed */}
                </View>

            </ScrollView>
       </SafeAreaView>
    )
}