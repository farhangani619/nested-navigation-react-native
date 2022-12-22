import { Image, View , StyleSheet, Text } from "react-native";

export default function HomeHeader() {
    return(
    <View style={HomeHeaderStyles.headerConatiner}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={HomeHeaderStyles.instagramImage} source={require('../../src/images/instagram.png')}/>
            <Image style={HomeHeaderStyles.images} source={require('../../src/images/down-arrow.png')}/>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 10 ,justifyContent:'space-between'}}>
            <Image style={{...HomeHeaderStyles.images, ...HomeHeaderStyles.addmage}} source={require('../../src/images/add.png')}/>
            <Image style={HomeHeaderStyles.images} source={require('../../src/images/messenger.png')}/>
        </View>
    </View>
    )
}


const HomeHeaderStyles = StyleSheet.create({
    instagramImage: {
        width: 120,
        height: 45,
    },
    images: {
        width: 25,
        height: 25,
        marginRight: 10
    },
    headerConatiner: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    addmage: {
        marginRight: 30
    }
})