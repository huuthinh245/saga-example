import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-material-ui';
import { responsiveFont } from 'PremiumContact/overrideDefaultComponentsProps';

class EventTitle extends React.PureComponent {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Icon
                        name={'shopping-basket'}
                        size={36}
                        color="#64abda"
                    />
                    <Text style={styles.headerText}>Production Temps Reel{"\n"}LYON</Text>
                </View>
                <View style={styles.date}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            name={'alarm'}
                            size={24}
                        />
                        <Text style={styles.contentText}>13 Juin 2018</Text>
                    </View>
                    <View style={styles.address} >
                        <Icon
                            name={'location-on'}
                            size={24}
                        />
                        <Text style={styles.contentText}>Westotel Nantes Atlantique</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    header: {
        flexDirection: 'row',
    },
    headerText: {
        fontSize: responsiveFont(17),
        marginLeft: 5
    },
    date: {
        flexDirection: 'row',
        marginVertical: 20,
        marginLeft: 35
    },
    address: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25
    },
    contentText: {
        fontSize: responsiveFont(16),
        color: '#c0c0c0'
    },
})
export default EventTitle;