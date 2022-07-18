import React from 'react'
import { View,Text, ScrollView,Image,Pressable } from 'react-native'
import styles from "../styles/sharedStyles"

const Conference = ({navigation}) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior='automatic'
      style = {styles.scrollView}>
      <Image
        style = {styles.image}
        source = {require('../../images/Bitmap.png')}
      />
      <View style = {styles.body}>
        <View style = {styles.sectionContainer}>
          <Text style = {styles.sectionTitleStory}>Globomantics Conference</Text>
          <Text style = {styles.sectionDescriptionStory}>
            Join us along with awsomeSpeakers and great content from around
            the globe!
          </Text>
          <View style = {styles.buttonWrapper}>
          <Pressable
            onPress = {() =>
              navigation.navigate('Sessions',{name:'Sessions'})
            }
            style = {styles.buttonStyle}>
            <Text style = {styles.buttonText}>Sessions</Text>
          </Pressable>
          <Pressable
            onPress = {() =>
              navigation.navigate('Speakers',{name:'Speakers'})
            }
            style = {styles.buttonStyle}>
            <Text style = {styles.buttonText}>Speakers</Text>
          </Pressable>
          </View>
        </View>
      </View>





    </ScrollView>
    // <View>
    //     <Text>Welcome To Conference</Text>
    //     <Button title='Go to Home'
    //       onPress={(e)=>{
    //         navigation.navigate("Home")
    //       }}
    //     />
    // </View>
  )
};
export default Conference;