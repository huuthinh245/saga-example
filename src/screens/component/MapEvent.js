import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'react-native-material-ui';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import { popScreen, pushScreen } from '../../navigation/actions';
import { screens } from '..';
import Header from '../elements/Header';
import EventTitle from '../elements/eventTitle';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE = 10.763555;
const LONGITUDE = 106.604342;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class MapEvent extends Component {
    _back = () => {
        popScreen(this.props.componentId);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title="Map" hidden={false} onBack={this._back} />
                <EventTitle />
                <View style={{ flex: 1, justifyContent: 'flex-start', paddingHorizontal: 20 }}>
                <MapView
                    style={{ width: '100%', height: 250 }}
                    initialRegion={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA
                    }}
                    maxZoomLevel={4}
                >
                    <Marker
                        key="marker"
                        coordinate={{
                            latitude: 10.8941183,
                            longitude: 106.7719983
                        }}
                    >
                        <Icon name="md-pin" size={30} />
                    </Marker>
                </MapView>
                </View>

            </View>
        );
    }
}
