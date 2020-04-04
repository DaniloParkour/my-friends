import {StyleSheet} from 'react-native';
import constants from 'expo-constants';
import {COLOR_BLACK, COLOR_WHITE, COLOR_PALETTE_PINK, COLOR_PALETTE_GREEN, COLOR_PALETTE_BLUE} from '../../util/AppConstants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: constants.statusBarHeight + 20,
    }, loginContent: {
        height: 420,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }, textInput: {
        borderColor: COLOR_PALETTE_PINK.COLOR,
        borderWidth: 1,
        borderRadius: 14,
        fontSize: 16,
        height: 50,
        width: '100%',
        textAlign: 'center',
        backgroundColor: COLOR_WHITE,
    },





    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: COLOR_WHITE,
        marginBottom: 16,
        borderColor: COLOR_PALETTE_PINK.COLOR,
        borderWidth: 1,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingBottom: 20,
        width: 140,
    },
    incidentProperty: {
        fontSize: 14,
        color: COLOR_PALETTE_PINK.COLOR,
        fontWeight: 'bold',
    },

    incidentValue: {
        fontSize: 15,
        color: '#737380',
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: COLOR_WHITE,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: COLOR_PALETTE_PINK.COLOR,
    },

    heroTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions: {  
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: COLOR_WHITE,
        fontSize: 15,
        fontWeight: 'bold'
    },

});