import React from 'react';
import {Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import DirectMessageSearch from './DirectMessageSearch';
import Title from './Title';
import MessageListItem from './MessageListItem';

const data = [
  {
    key: '1',
    name: 'Raza',
    message: 'risus commodo viverra',
  },
  {key: '2', name: 'Ali', message: 'nulla aliquet enim tortor at'},
  {key: '3', name: 'ALI RAZA QURESHI', message: 'id donec ultrices tincidunt arcu'},
  {
    key: '4',
    name: 'barack',
    message: 'pellentesque habitant morbi',
  },
  {key: '5', name: 'user 2', message: 'id ornare arcu odio ut'},
  {key: '6', name: 'user 3', message: 'in mollis nunc sed id'},
  {key: '7', name: 'user 4', message: 'in est ante in nibh'},
  {key: '8', name: 'user 5', message: 'egestas erat imperdiet sed'},
  {key: '9', name: 'user 6', message: 'dictum sit amet justo donec'},
  {key: '10', name: 'user 6', message: 'nisl suscipit adipiscing'},
  {key: '11', name: 'user 7', message: 'volutpat est velit egestas dui'},
  {key: '12', name: 'user 8', message: 'magna fermentum iaculis eu non'},
  {key: '13', name: 'user 9', message: 'fermentum posuere urna'},
  {key: '14', name: 'user 10', message: 'facilisis leo vel fringilla est'},
  {key: '15', name: 'user 11', message: 'quam viverra orci sagittis eu'},
];

export default function MessagesList() {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => <MessageListItem data={item} />}
    />
  );
}
