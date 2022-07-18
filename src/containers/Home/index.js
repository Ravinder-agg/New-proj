import React from 'react'
import { View,Text, Button, StatusBar, Pressable,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../styles/sharedStyles"

const Home = ({navigation}) => {
  return (
    <>
        <StatusBar barStyle='dark-content'/>
        <SafeAreaView style = {styles.mainContainer}>
          <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            style = {styles.scrollView}>
              <Image
                style = {styles.image}
                source = {require('../../images/hero_image.png')}
              />
              <View style = {styles.body}>
                <View style = {styles.sectionContainer}>
                  <Text style = {styles.sectionTitle}>
                    Housing Tech Conference
                  </Text>
                  <Text style = {styles.sectionDescription}>
                    Manically taking tech to the globe
                  </Text>
                </View>
                <View style ={styles.sectionContainer}>
                  <Pressable
                    onPress = {() =>
                      navigation.navigate('Conference',{name:'Conference'})
                    }>
                      <Text style = {styles.sectionTitle}>Conference</Text>
                  </Pressable>
                  <Text style = {styles.sectionDescription}>View conference sessions and speakers</Text>
                </View>
                <View style ={styles.sectionContainer}>
                  <Pressable
                    onPress = {() =>
                      navigation.navigate('Story',{name:'Story'})
                    }>
                      <Text style = {styles.sectionTitle}>Story</Text>
                  </Pressable>
                  <Text style = {styles.sectionDescription}>Learn more about us</Text>
                </View>
                <View style ={styles.sectionContainer}>
                  <Text style = {styles.sectionTitle}>Submit Sessions</Text>
                  <Text style = {styles.sectionDescription}>Are you interested in speaking? Submit a Session</Text>
                </View>
                <View style ={styles.sectionContainer}>
                  <Text style = {styles.sectionTitle}>Feedback</Text>
                  <Text style = {styles.sectionDescription}>we would love to hear from you!</Text>
                </View>
                <View style ={styles.sectionContainer}>
                  <Text style = {styles.sectionTitle}>Learn more</Text>
                  <Text style = {styles.sectionDescription}>Read docs to discover what to do next: </Text>
                </View>
                <View style ={styles.sectionContainer}>
                  <View style = {styles.footer}>
                    <Image
                      style={{
                        width: 300,
                        height: 70,
                        resizeMode: 'stretch',
                        position: 'relative'
                      }}
                      source = {require('../../images/pluralsight-white.png')}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>

        </SafeAreaView>
        {/* <Text>Welcome To Home</Text>
        <Button title='Go to Speakers'
          onPress={(e)=>{
            navigation.navigate("Speakers")
          }}
        />
        <Button title='Go to Sessions'
          onPress={(e)=>{
            navigation.navigate("Sessions")
          }}
        />
        <Button title='Go to Story'
          onPress={(e)=>{
            navigation.navigate("Story")
          }}
        />
        <Button title='Go to Conference'
          onPress={(e)=>{
            navigation.navigate("Conference")
          }}
        /> */}
    </>
  )
};
export default Home;