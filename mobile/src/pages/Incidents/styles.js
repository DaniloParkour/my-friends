import {StyleSheet} from 'react-native';
import constants from 'expo-constants';
import {COLOR_BLACK, COLOR_WHITE, COLOR_PALETTE_PINK, COLOR_PALETTE_GREEN, COLOR_PALETTE_BLUE} from '../../util/AppConstants';

export default StyleSheet.create ({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingBottom: 20,
        width: 140,
    },
    headerText: {
        fontSize: 15,
        color: '#737380',
    },
    headerTextBold: {
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        marginBottom: 4,
        marginTop: 48,
        color: COLOR_PALETTE_PINK.COLOR,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },
    incident: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: COLOR_PALETTE_PINK.COLOR,
    },
    incidentList: {
        marginTop: 18,
    },
    incidentProperty: {
        fontSize: 14,
        color: COLOR_PALETTE_PINK.COLOR,
        fontWeight: 'bold',
    },
    incidentValue: {
        fontSize: 15,
        marginLeft: 4,
        marginBottom: 8,
        color: '#737380',
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
});