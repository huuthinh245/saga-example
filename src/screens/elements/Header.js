import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, } from 'react-native';
import { Icon } from 'react-native-material-ui';
import { responsiveFont } from 'PremiumContact/overrideDefaultComponentsProps';
const { width } = Dimensions.get('window');
import PropTypes from 'prop-types';


type Props = {
    onBack?: void,
    title?: string,
    hidden: boolean
   };
   

class Header extends React.Component<Props> {
    static propTypes = {
        onBack: PropTypes.func,
        title: PropTypes.string,
        hidden: PropTypes.bool
    }

    static defaultProps = {
        onBack: () => { },
        title: '',
        hidden: true
    }
    render() {
        const { title, onBack, hidden } = this.props;
        return (
            <View style={styles.wrapper}>
                {
                    !hidden &&
                    <TouchableOpacity
                        onPress={onBack}
                        style={styles.icon}
                    >
                        <Icon
                            name={"arrow-back"}
                            size={24}
                            color="#fff"
                        />
                    </TouchableOpacity>
                }
                <Text style={styles.title} onPress={onBack}>{title.toUpperCase()}</Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ad121c',
        flexDirection: 'row'
    },
    title: {
        fontSize: responsiveFont(18),
        color: '#fff',
        flex: 1,
        textAlign: 'center',
        marginRight: 24
    },
    icon: {
        marginLeft: 10
    }
})

export default Header;
