import { StyleSheet } from "react-native";
import { Text, View } from "react-native-web";

export default function MessageComponent ({currentUser, item}) {

    // const containerStyle = currentUserStatus ? {} : { alignItems: 'flex-end' };

     const currentUserStatus = item.currentUser !==currentUser;

    return <View style={currentUserStatus ? {} : {alignItems: 'flex-end'}}>
        {/* <View style={[styles.container, containerStyle]}></View> */}

        <View style={styles.messageItemWrapper}>
            <View style={styles.messageItemInnerWrapper}>
                <View style ={currentUserStatus ? styles.messageItem : [style.messageItem,  {backgroundColor : '#703efe'}]}>
                    <Text style={currentUserStatus ? {color : '#000'} : {color : '#e5c1fe'}}>{item.text}</Text>
                </View>
            </View>
            <Text style={styles.messageTime}>{item.time}</Text>
        </View>
        
        </View>
}

const styles = StyleSheet.create({
  messageItemWrapper : {
    maxWidth  : '50%',
    marginBottom : 15
  },
  messageItemInnerWrapper : {
    flexDirection : 'row',
    alignItems : 'center'
  },
  messageItem : {
    width : '100%',
    backgroundColor : '#ffffff',
    padding: 20,
    borderRadius : 10,
    marginBottom : 2
  },
  messageTime : {
    marginLeft : 10
  }
 
 
})