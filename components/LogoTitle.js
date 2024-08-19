import { View, Image, StyleSheet } from "react-native";

export default function LogoTitle(){
    return(
        <View>
        <Image style={styles.image} source={{uri: '/assets/images/facebook.png'}} />
        </View>
    );
}

const style = create.StyleSheet({
    image: {
        width: 50,
        height: 50,
        borderRadius:30,
      },
      
});