import React, { useState } from 'react'
import { View,Text, Pressable,TextInput,Image,FlatList } from 'react-native'
// import { FlatList } from 'react-native-gesture-handler';
import {speakers} from '../../data/speakers.json'
import styles from "../styles/sharedStyles"
import { Header } from '../../compnents/Header';
import { Footer } from '../../compnents/Footer';



const Speakers = ({navigation}) => {
  const [filteredSpeaakers,setFilteredSpeakers] = useState(speakers);
  const getSearchText = (text) => {
    let filteredSpeaakersList = speakers.filter((value) =>
      value.sessions[0].name.toLowerCase().includes(text.toLowerCase()),  
    );
    setFilteredSpeakers(filteredSpeaakersList);
  }
  return (
    <View>
      <SearchSessions getSearchText = {getSearchText}/>
      <FlatList
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps  = {'always'}
        data = {filteredSpeaakers}
        keyExtractor = {(item)=>item.id}
        renderItem = {renderItem}
        ItemSeparatorComponent = {SeparatorComponent}
        pagingEnabled = {false}
        ListHeaderComponent = {HeaderComponent}
        ListFooterComponent = {FooterComponent}
      />
    </View>
    // <View>
    //     <Text>Welcome To Speakers</Text>
    //     <Button title='Go to Home'
    //       onPress={(e)=>{
    //         navigation.navigate("Home")
    //       }}
    //     />
    // </View>
  )
};

const SearchSessions = (props) =>{
  const [searchText,setSeachText] = useState("");

  const handleSearch = (text) => {
    setSeachText(text);
    props.getSearchText(text);
  };

  const clearSearch = () => {
    this.textInput.clear();
    props.getSearchText("");
  };
  return (
    <View style = {styles.container}>
      <TextInput
        ref = {(ref) => {
          this.textInput = ref
        }}
        style = {styles.searchInput}
        value = {searchText}
        onChangeText = {(text) => handleSearch(text)}
        placeholder = {'Search Sessions'}
        returnKeyType = {'go'}
        autoCorrect = {false}
        autoFocus = {false}
        keyboardType = {'default'}
        multiline = {false}
        selectionColor = {'green'}
      />
      <Pressable onPress = {clearSearch} style = {styles.clearContainer}>
        <Image
          style = {styles.clearImage}
          source = {require("../../images/multiply-1_Orange.png")}
        />
      </Pressable>

    </View>
  )
};

const renderItem = ({item,index}) =>{
  return (
    <View>
      <SpeakerList
        id = {index}
        name = {item.name}
        bio = {item.bio}
        session = {item.sessions[0].name}
      />
    </View>
  );
};

const SpeakerList = ({id,name,bio,session}) =>{
  return(
    <View style = {styles.sectionContainer} key = {id}>
      <Text style = {styles.sectionTitle}>{'speaker Name: '+name}</Text>
      <Text style = {styles.sectionDescription}>{'Bio : '+bio}</Text>
      <Text style = {styles.sectionDescriptionBold}>{'session: '+session}</Text>
    </View>
  );
};

const SeparatorComponent = () =>{
  return <View style = {styles.seperatorStyle}/>
}

const HeaderComponent = () =>{
  return (
    <Header
      image = {require('../../images/girl.png')}
      heading = {'Awesome Speakers Lineup!!'}
      style = {styles.sectionTitleGreen}
    />
  )
}
const FooterComponent =()=>{
  return <Footer/>
}





export default Speakers;