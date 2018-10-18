import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-material-ui';
import { responsiveFont} from 'PremiumContact/overrideDefaultComponentsProps';
const eventItem = (props) => {
    const { 
        goToDetail
    } = props;
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
            <View style={styles.footer}>
                <Text style={styles.footerText}>Acces a vos informations</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={goToDetail}
                >
                    <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 25,
        paddingHorizontal: 10,
        borderBottomWidth: 6,
        borderColor: '#ad121c'
    },
    header: {
        flexDirection: 'row'
    },
    headerText: {
        fontSize: responsiveFont(17),
    },
    date: {
        flexDirection: 'row',
        marginVertical: 20,
        marginLeft: 30
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
    footer: {
        flexDirection: 'row',
        marginLeft: 2,
        alignItems: 'center'
    },
    footerText: {
        fontSize: responsiveFont(20),
        fontWeight: '100',
        flex: 0.75,
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
})
export default eventItem;