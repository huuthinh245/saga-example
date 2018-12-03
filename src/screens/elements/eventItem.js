import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-material-ui';
import Placeholder from 'rn-placeholder';
import moment from 'moment';
import 'moment/locale/fr';
import { responsiveFont } from 'PremiumContact/overrideDefaultComponentsProps'; // eslint-disable-line
import ImageEv from '../../assets/images/cover_photo.jpg';

const { height, width } = Dimensions.get('window');
class EventItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props !== nextProps) {
      return true;
    }
    return false;
  }
  render() {
    const { goToDetail, item, fetching } = this.props;
    const {
      intermediation,
      lieu,
      idSociete,
      dateIntermediation,
      siteWebIntermediation,
      isEventHistory
    } = item;
    const parseDate = moment(dateIntermediation)
      .locale('fr')
      .format('LL');
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={goToDetail} style={styles.imageBackground}>
          <Image style={styles.image} source={ImageEv} />
        </TouchableOpacity>
        <View style={styles.header}>
          <Icon name="shopping-basket" size={36} color="#64abda" />
          <Text style={styles.headerText}>
            {intermediation}
            {'\n'}
            {lieu}
          </Text>
        </View>
        <View style={styles.wrapperContact}>
          <View style={styles.date}>
            <Icon name="alarm" size={24} />
            <Text style={styles.contentText}>{parseDate}</Text>
          </View>
          <View style={styles.address}>
            <Icon name="location-on" size={24} />
            <Text style={styles.contentText} numberOfLines={1}>
              Westotel Nantes Atlantiqued23d32d32d23d23d23{' '}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Acces a vos informations</Text>
          <TouchableOpacity style={styles.button} onPress={goToDetail}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderBottomWidth: 6,
    borderColor: '#ad121c'
  },
  header: {
    flexDirection: 'row',
    marginTop: 10
  },
  headerText: {
    fontSize: responsiveFont(17)
  },
  wrapperContact: {
    flexDirection: 'row',
    marginTop: 20
  },
  imageBackground: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.3,
    width: width - 20
  },
  image: {
    height: height * 0.3,
    width: width - 20,
    resizeMode: 'stretch'
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  contentText: {
    fontSize: responsiveFont(16),
    color: '#c0c0c0'
  },
  footer: {
    flexDirection: 'row',
    marginLeft: 2,
    alignItems: 'center'
  },
  footerText: {
    fontSize: responsiveFont(20),
    fontWeight: '100',
    flex: 0.75
  },
  button: {
    backgroundColor: '#ad121c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flex: 0.25,
    alignSelf: 'center'
  },
  buttonText: {
    marginVertical: 10,
    color: '#fff',
    fontSize: responsiveFont(18),
    fontWeight: '100'
  }
});
export default EventItem;
