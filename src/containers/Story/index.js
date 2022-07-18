import React from 'react'
import { View,Text,Button } from 'react-native'

const Story = ({navigation}) => {
  return (
    <View>
        <Text>Welcome To Story</Text>
        <Button title='Go to Home'
          onPress={(e)=>{
            navigation.navigate("Home")
          }}
        />
    </View>
  )
};
export default Story;