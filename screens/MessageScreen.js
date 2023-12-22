import { useContext, useEffect, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable,FlatList, Keyboard } from 'react-native'
import { GlobalContext } from '../context'
import MessageComponent from '../components/MessageComponent'
import {socket} from '../utils/index'

export default function MessageScreen({navigation, route}) {

   const{ currentGroupName, currentGroupID} = route.params

  const {allChatMessages, setAllChatMessages, 
    currentUser,currentChatMessage, 
    setCurrentChatMessage } = useContext(GlobalContext)
    
  function handleAddNewMessage(){
       const timeData = {
        hr : new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours(),
        mins : new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()
       };

       if(currentUser) {
         socket.emit('newChatMessage', {
          currentChatMessage,
          groupIdentifier : currentGroupID,
          currentUser,
          timeData
         })

         setCurrentChatMessage('')
         Keyboard.dismiss()
       }
    }

    // useLayoutEffect(()=>{
    //   socket.emit('findGroup', currentGroupID)
    // })

    useEffect(()=>{
         socket.emit('findGroup', currentGroupID)
         socket.on('foundGroup', (allChats)=> setAllChatMessages(allChats))
    }, [socket])

  return (
    <View style= {styles.wrapper}>
      <View styles={[styles.wrapper, {paddingVertical :15, paddingHorizontal: 10}]}>
        {
          allChatMessages && allChatMessages[0] ?
          <FlatList 
          data={allChatMessages}
          renderItem={({ item }) => <MessageComponent item={item} currentUser={currentUser} />}
          keyExtractor={(item) => item.id.toString()} // Assuming item.id is a number, convert to string
        />
          : ''
        }
      </View>
      <View style={styles.messageInputContainer}>

      <TextInput
                  style={styles.messageInput}
                  value={currentChatMessage}
                  onChangeText={(value) => setCurrentChatMessage(value)}
                  placeholder='Enter your message'
/>

        <Pressable onPress={ handleAddNewMessage } style={styles.button}>
          <View>
            <Text style={styles.buttonText}>SEND</Text> 
          </View>
        </Pressable>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#eee'
  },
  messageInputContainer: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 15,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  messageInput: {
    borderWidth:1,
    padding : 15,
    flex: 1,
    borderRadius: 50,
    marginRight: 10
  },
  button : {
    width : '30%',
    backgroundColor : '#703efe',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius : 50
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  }

})