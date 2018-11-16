import React, { Component } from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet, SafeAreaView, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';
import { popScreen, pushScreen } from '../../navigation/actions';
import { screens } from '..';
import Header from '../elements/Header';
import EventTitle from '../elements/eventTitle';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE = 10.855438;
const LONGITUDE = 106.626068;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class MapEvent extends Component {

    showCallout = () => {
        this.myMarker.showCallout();
    }

    _back = () => {
        popScreen(this.props.componentId);
    }
    _reCenter = () => {
        this._map.animateToCoordinate({
            latitude: 10.813611,
            longitude: 106.662623
        });
    }

    handleIndoorFocus = (event) => {
        alert(event);
        const { indoorBuilding } = event.nativeEvent;
        const { defaultLevelIndex, levels } = indoorBuilding;
        const levelNames = levels.map(lv => lv.name || '');
        const msg = `Default Level: ${defaultLevelIndex}\nLevels: ${levelNames.toString()}`;
        Alert.alert(
          'Indoor building focused',
          msg
        );
    }

    setIndoorLevel = () => {
        this._map.setIndoorActiveLevelIndex(5);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView>
                    <Header title="Map" hidden={false} onBack={this._back} />
                </SafeAreaView>
                <EventTitle />
                <View style={styles.wrapperMap}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                            latitude: LATITUDE,
                            longitude: LONGITUDE,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA
                        }}
                        maxZoomLevel={100}
                        zoomControlEnabled
                        onRegionChangeComplete={this.showCallout}
                        ref={_map => { this._map = _map; }}
                        showsIndoorLevelPicker
                        showsIndoors
                        showsBuildings
                        onIndoorBuildingFocused={this.handleIndoorFocus}
                    >
                        <MapView.Marker
                            key="marker"
                            coordinate={{
                                latitude: 10.813611,
                                longitude: 106.662623
                            }}
                            ref={myMarker => { this.myMarker = myMarker; }}
                        >
                            <MapView.Callout>
                                <Text>BiG BiG Callout</Text>
                            </MapView.Callout>
                        </MapView.Marker>
                    </MapView>
                    <TouchableOpacity
                        style={styles.buttonFilter}
                        onPress={this.setIndoorLevel}
                    >
                        <MaterialCommunityIcons name="tune" size={26} color="#000" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonCenter}
                        onPress={this._reCenter}
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
        margin: 20,
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    buttonFilter: {
        borderRadius: 12,
        backgroundColor: '#fff',
        shadowOffset: { width: 10, height: 10, },
        shadowColor: '#eff0f3',
        elevation: 1,
        shadowRadius: 12,
        shadowOpacity: 0.2,
        alignSelf: 'flex-end',
        marginVertical: 10,
        marginHorizontal: 10
    },
    buttonCenter: {
        borderRadius: 12,
        backgroundColor: '#fff',
        shadowOffset: { width: 10, height: 10, },
        shadowColor: '#eff0f3',
        elevation: 1,
        shadowRadius: 12,
        shadowOpacity: 0.2,
        alignSelf: 'flex-end',
        marginHorizontal: 10
    },
    icon: {
        margin: 15
    }
});