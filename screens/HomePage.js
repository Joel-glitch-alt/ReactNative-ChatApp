import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Pressable, Alert, Keyboard,} from 'react-native';
// import { withNavigation } from 'react-navigation';
import { GlobalContext } from '../context';
import people from '../assets/people.png'; 


export default function HomeScreen({navigation}) {
  const { showLoginView, setShowLoginView, 
    currentUserName, setCurrentUserName ,
    currentUser, setCurrentUser, 
    allUsers, setAllUsers
  } = useContext(GlobalContext);

  function handleRegisterAndSignIn(isLogin) {
    const trimmedUserName = currentUserName.trim();
    if (trimmedUserName !== '') {
      const index = allUsers.findIndex(userItem => userItem === trimmedUserName);
  
      if (isLogin) {
        if (index === -1) {
          Alert.alert('Please register first');
        } else {
          setCurrentUser(trimmedUserName);
        }
      } else {
        if (index === -1) {
          allUsers.push(trimmedUserName);
          setAllUsers(allUsers);
          setCurrentUser(trimmedUserName);
        } else {
          Alert.alert('Already registered! Please login');
        }
      }
      setCurrentUserName('');

    } else {
      Alert.alert('User field is empty');
    }
  
    // Dismiss keyboard
    Keyboard.dismiss();
  }

  useEffect(()=>{
    if(currentUser.trim() !=='')  navigation.navigate('ChatScreen');
  }, [currentUser])
  console.log(allUsers, currentUser);
  

  return (
    <View style={styles.mainWrapper}>
      <ImageBackground
        source={people}
        style={styles.people}
      />
      <View style={styles.content}>
        {
          showLoginView ? (
            <View style= { styles.infoBlock}>
              <View style = {styles.loginInputContainer}>
                <Text style = { styles.heading}>Enter your User name </Text>
                <TextInput
                  autoCorrect={false}
                  placeholder='Enter your User name here'
                  style={styles.loginInput}
                  onChangeText={(value) => setCurrentUserName(value)}
                  value={currentUserName}
                />
              </View>
              <View style = {styles.buttonWrapper}>
                <Pressable onPress={()=>handleRegisterAndSignIn(false)} style = {styles.button}>
                  <View>
                    <Text style = {styles.buttonText}>Register</Text>
                  </View>
                </Pressable>
                <Pressable onPress={()=>handleRegisterAndSignIn(true)} style = {styles.button}>
                  <View>
                    <Text style = {styles.buttonText}>Login</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          ) :
          (
            <View style={styles.infoBlock}>
              <Text style= {styles.heading}>Connect, Grow and Inspire</Text>
              <Text style = {styles.subHeading}>Connect people around the world for free</Text>
              <Pressable  style = {styles.button} onPress= {()=> setShowLoginView(true)}>
                <View>
                  <Text style = {styles.buttonText}>Get started</Text>
                </View>
              </Pressable>
            </View>
          )
        }
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1
  },
  people: {
    width: '100%',
    flex: 3,
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white'
  },
  infoBlock: {
    width: '100%',
    alignItems: 'center',
    justifyContent : 'center'
  },
  heading : {
    fontSize: 28,
    fontWeight: 'bold',
    color : '#000',
    marginBottom: 10
  },
  subHeading : {
    fontSize : 15,
    color : '#acacac',
    marginBottom : 15
  },
  loginInput : {
    borderRadius : 50,
    borderWidth : 1,
    padding : 8
  }, 
  button : {
    backgroundColor : '#703efe',
    padding: 15,
    marginVertical : 10,
    width : '34%',
    elevation : 1,
    borderRadius : 50
  },
  buttonWrapper : {
    flexDirection: 'row',
    gap: 10
  },
  buttonText : {
    textAlign: 'center',
    color : '#fff',
    fontWeight : 'bold',
    fontSize : 15
  }
})