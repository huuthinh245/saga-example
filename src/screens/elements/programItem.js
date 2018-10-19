import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { responsiveFont } from 'PremiumContact/overrideDefaultComponentsProps';

class ProgramItem extends React.PureComponent {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.textTime}>9h00</Text>
                <View style={styles.wrapperTitle}>
                    <Text style={styles.title}>Discours Ouverture</Text>
                    <Text style={styles.subTitle} numberOfLines={2}>Monsieur jesaistout</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginBottom: 20
    },
    textTime: {
        flex: 1,
        fontSize: responsiveFont(21),
        fontWeight: 'bold',
        textAlign: 'left',
    },
    wrapperTitle: {
        flex: 3,
    },
    title: {
        fontSize: responsiveFont(20),
    },
    subTitle: {
        fontSize: responsiveFont(16),
    }
})
export default ProgramItem;