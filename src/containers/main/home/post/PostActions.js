import React from 'react';
import {TouchableOpacity, Image, View, StyleSheet} from 'react-native';
import images from 'res/images';
import { useColorScheme } from 'react-native';
import commentBlack from '../../../../res/images/commentBlack.png'
import heartBlack from '../../../../res/images/heartBlack.png'
import sendBlack from '../../../../res/images/sendBlack.png'
import savedBlack from '../../../../res/images/savedBlack.png'
import bookmarkBlack from '../../../../res/images/bookmarkBlack.png'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function PostActions() {
  const theme = useColorScheme();

  const [likeIcon, setLikeIcon] = React.useState(1);
  const [bookmarkIcon, setBookmarkIcon] = React.useState(1);

  function tapToLike(likeIcon) {
    if (likeIcon % 2 === 0) {
      return 'red';
    } else {
      return theme == 'dark' ? 'white': 'black';
    }
  }
  function tapToBookmark(bookmarkIcon) {
    if (bookmarkIcon % 2 === 0) {
      return theme == 'dark' ?  'red' : 'red';
    } else {
      return theme == 'dark' ? 'white' :  'black';
    }
  }
  
  return (
    <View style={Styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <TouchableOpacity onPress={() => setLikeIcon(likeIcon + 1)}>
<Icon name="heart-o" size={30} color= {tapToLike(likeIcon)} style={Styles.actionIcons} />

          {/* <Image source={tapToLike(likeIcon)} style={Styles.actionIcons} /> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Pressed Comment')}>
          {/* <Image source={theme == 'dark' ?   images.comment : commentBlack} style={Styles.actionIcons} /> */}
<Icon name="comment-o" size={30} color= {theme === 'dark' ? 'white' : 'black'} style={Styles.actionIcons} />

        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Pressed Direct Message')}>
          {/* <Image source={theme == 'dark' ? images.direct_message : sendBlack} style={Styles.actionIcons} /> */}
<Icon name="send-o" size={30} color= {theme === 'dark' ? 'white' : 'black'} style={Styles.actionIcons} />
        
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setBookmarkIcon(bookmarkIcon + 1)}>
        {/* <Image
          source={tapToBookmark(bookmarkIcon)}
          style={Styles.actionIcons}
        /> */}
<Icon name="bookmark-o" size={30} color= {tapToBookmark(bookmarkIcon)} />

      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    //paddingStart: 20,
    marginEnd: 15,
    marginTop: 15,
    // backgroundColor :'black'
  },
  actionIcons: {
    width: 33,
    height: 33,
    marginStart: 15,
    // alignSelf:'center',
    // backgroundColor :'red'
  },
});
