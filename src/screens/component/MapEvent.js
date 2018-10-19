import React, { Component } from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import { popScreen, pushScreen } from '../../navigation/actions';
import { screens } from '..';
import Header from '../elements/Header';
import EventTitle from '../elements/eventTitle';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE = 10.8941183;
const LONGITUDE = 106.7719983;
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
                <View style={styles.wrapperMap}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: LATITUDE,
                            longitude: LONGITUDE,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA
                        }}
                        maxZoomLevel={8}
                        zoomControlEnabled

                    >
                        <Marker
                            key="marker"
                            coordinate={{
                                latitude: 10.8941183,
                                longitude: 106.7719983
                            }}
                        >
                        </Marker>
                    </MapView>
                    <TouchableOpacity
                        style={styles.buttonFilter}
                    >
                        <MaterialCommunityIcons name="tune" size={26} color="#000" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonCenter}
                    >
                        <MaterialCommunityIcons name="target" size={26} color="#000" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapperMap: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 20
    },
    map: {
        width: '100%',
        height: 300
    },
    buttonFilter: {
        position: 'absolute',
        top: 4,
        right: 24,
        borderRadius: 12,
        backgroundColor: '#fff',
        shadowOffset: { width: 10, height: 10, },
        shadowColor: '#eff0f3',
        elevation: 1,
        shadowRadius: 12,
        shadowOpacity: 0.2,
    },
    buttonCenter: {
        position: 'absolute',
        top: 70,
        right: 24,
        borderRadius: 12,
        backgroundColor: '#fff',
        shadowOffset: { width: 10, height: 10, },
        shadowColor: '#eff0f3',
        elevation: 1,
        shadowRadius: 12,
        shadowOpacity: 0.2,
    },
    icon: {
        margin: 15
    }
});