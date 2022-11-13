import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import Button from './Button';

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1 }}>
      <Button
        title="To Sticky Header"
        onPress={() => navigation.navigate('StickyHeader')}
      />
    </ScrollView>
  );
};

export default Home;
