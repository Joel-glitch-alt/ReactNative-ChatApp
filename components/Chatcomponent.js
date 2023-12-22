import { useContext, useEffect } from 'react';
import { Pressable, Stylesheet, Text, View } from 'react-native';
import { GlobalContext } from '../context';
import { useNavigation } from '@react-navigation/native'



export default function Chatcomponent ({item}) {

  // const { messages, setMessages } = useContext(GlobalContext);
  const navigation = useNavigation()

  console.log(item.messages[item.messages.length -1]);

  // useEffect(()=>{
  //     setMessages(item.messages[item.messages.length -1 ])
  // }, [])


  function handleNavigateToMessageScreen () {
          navigation.navigate('MessageScreen', {
            currentGroupName: item.currentGroupName,
            id: item.id,
          })
  }


  
  return
   <Pressable style = {styles.chat} onPress={ handleNavigateToMessageScreen }>

    <View style={styles.circle}>

    </View>

    <View style={styles.rightContainer}>
      <View>
        <Text style={styles.userName}>{item.currentGroupName}</Text>
        <Text style = {styles.message}>
          {item && item.messages && items.messages.length? item.messages[item.messages.length -1].text : 'Tap to start messaging'}
        </Text>
      </View>
        
        <View>
          <Text style={styles.time}>
            {item && item.messages && items.messages.length? item.messages[item.messages.length -1].time  : "Now"}
          </Text>
        </View>
    </View>
  </Pressable>

}


const styles = Stylesheet.create({

  chat : {
    width : '100%',
    flexDirection : 'row',
    alignItems : 'center',
    borderRadius : 5,
    padding :  10,
    backgroundColor : '#fff',
    height : 80,
    marginBottom : 10
  },
  userName : {
    fontSize : 18,
    marginBottom : 5,
    fontWeight : 'bold'
  },
  message : {
    fontSize : 14,
    opacity : 0.8
  },
  rightContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    flex : 1
  },
  time : {
    opacity : 0.6
  },
  circle : {
    width: 50,
    borderRadius : 50,
    height : 50,
    alignItems :'center',
    borderWidth : 2,
    marginRight : 10
  }

})