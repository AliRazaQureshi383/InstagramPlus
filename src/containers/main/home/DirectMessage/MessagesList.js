import React from 'react';
import {Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import DirectMessageSearch from './DirectMessageSearch';
import Title from './Title';
import MessageListItem from './MessageListItem';

const data = [
  {
    key: '1',
    name: 'James',
    message: 'risus commodo viverra',
  },
  {key: '2', name: 'Robert', message: 'nulla aliquet enim tortor at'},
  {key: '3', name: 'John', message: 'id donec ultrices tincidunt arcu'},
  {
    key: '4',
    name: 'barack',
    message: 'pellentesque habitant morbi',
  },
  {key: '5', name: 'Michael', message: 'id ornare arcu odio ut'},
  {key: '6', name: 'David', message: 'in mollis nunc sed id'},
  {key: '7', name: 'William', message: 'in est ante in nibh'},
  {key: '8', name: 'Richard', message: 'egestas erat imperdiet sed'},
  {key: '9', name: 'Joseph', message: 'dictum sit amet justo donec'},
  {key: '10', name: 'Thomas', message: 'nisl suscipit adipiscing'},
  {key: '11', name: 'Christopher', message: 'volutpat est velit egestas dui'},
  {key: '12', name: 'Charles', message: 'magna fermentum iaculis eu non'},
  {key: '13', name: 'Daniel', message: 'fermentum posuere urna'},
  {key: '14', name: 'Matthew', message: 'facilisis leo vel fringilla est'},
  {key: '15', name: 'Mark', message: 'quam viverra orci sagittis eu'},
];

export default function MessagesList() {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => <MessageListItem data={item} />}
    />
  );
}
