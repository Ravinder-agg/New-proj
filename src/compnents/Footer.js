import React from "react";
import { Text,Image,View } from "react-native";

import styles from '../containers/styles/sharedStyles'

export const Footer =()=>{
    return (
        <View style = {styles.footerContainer}>
            <Image style = {styles.footerImage} source = {(require('../images/G.png'))}/>
            <Text style = {styles.sectionDescription}>
                {" "}
                All right reserved
            </Text>
        </View>
    )
}