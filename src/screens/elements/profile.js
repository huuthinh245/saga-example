import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { responsiveFont } from 'PremiumContact/overrideDefaultComponentsProps';

const { width } = Dimensions.get('window');

const profile = props => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.cover} source={require('../../assets/images/cover_photo.jpg')} />
      <Image style={styles.avatar} source={require('../../assets/images/cover_photo.jpg')} />
      <View style={styles.wrapperInfo}>
        <Text style={styles.name}>Federic Plourde</Text>
        <View style={styles.devine} />
        <Text style={styles.info}>abc@gmail.com</Text>
        <Text style={[styles.info, { marginTop: 10 }]}>321321321312</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center'
  },
  cover: {
    width,
    height: width / 2,
    backgroundColor: 'silver'
  },
  avatar: {
    width: width / 4,
    height: width / 4,
    borderRadius: width / 8,
    position: 'absolute',
    top: width * 0.375,
    left: width * 0.375,
    zIndex: 10000
  },
  wrapperInfo: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 80,
    borderTopWidth: 1,
    borderColor: '#eff0f3',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    elevation: 2,
    shadowRadius: 10,
    shadowOpacity: 0.2
  },
  name: {
    fontSize: responsiveFont(20),
    fontWeight: 'bold'
  },
  info: {
    fontSize: responsiveFont(20),
    color: 'silver'
  },
  devine: {
    width: '100%',
    height: 0.8,
    backgroundColor: 'silver',
    marginVertical: 10
  }
});

export default profile;
