import React, { Component } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  AsyncStorage,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { connectionSelector } from '../../reducers/connection';
import { authSelector } from '../../reducers/auth';
import { showOverlay, dismissOverlay } from '../../navigation/actions';
import Auth from '../../models/Auth';
import { authActionsToDispatch } from '../../actions/auth';
import { alertNoNetwork } from '../../utils/alert';
import { responsiveFont } from '../../../overrideDefaultComponentsProps';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'matrizzull',
      password: 'un9qbvs$'
    };
  }

  _login = () => {
    const { username, password } = this.state;
    const { auth } = this.props;

    const { isConnected, dispatch } = this.props;
    if (!isConnected) {
      alertNoNetwork();
    } else if (!auth.fetching) {
      dispatch(
        authActionsToDispatch.getToken({
          username,
          password
        })
      );
    }
  };

  render() {
    return (
      <View style={styles.wrapper} >
        <Text style={styles.title} >
          Bienvenus dans votre espace de gestion
          {"\n"}
          de vos événements PREMIUM   CONTACT
        </Text>
        <View>
          <Text style={styles.subTitle}>Identifiant:</Text>
          <View style={styles.wrapperInput}>
            <TextInput
              ref={ref => {
                this.username = ref;
              }}
              placeholder="Identifiant"
              placeholderTextColor="#d5d5d5"
              onChangeText={text => this.setState({ username: text })}
              style={styles.input}
              value={this.state.username}
            />
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.subTitle}>Mot de passe:</Text>
          <View style={styles.wrapperInput}>
            <TextInput
              ref={ref => {
                this.password = ref;
              }}
              placeholder="Mot de passe"
              placeholderTextColor="#d5d5d5"
              onChangeText={text => this.setState({ password: text })}
              secureTextEntry
              style={styles.input}
              value={this.state.password}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={this._login}
        >
          {this.props.auth.fetching ? (
            <ActivityIndicator />
          ) : (
              <Text style={styles.buttonText}>SE CONNECTER</Text>
            )}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f7f7fa',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  wrapperInput: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#eff0f3',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowOffset: { width: 10, height: 10, },
    shadowColor: '#eff0f3',
    elevation: 1,
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  input: {
    color: 'black'
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#ad121c',
    borderRadius: 12,
    marginTop: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '100',
    fontSize: responsiveFont(18)
  },
  subTitle: {
    fontSize: responsiveFont(18),
    marginBottom: 5,
    fontWeight: '100'
  },
  title: {
    fontSize: responsiveFont(17),
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 25
  }
})
export default connect(state => ({
  isConnected: connectionSelector(state).isConnected,
  auth: authSelector(state)
}))(LoginScreen);
