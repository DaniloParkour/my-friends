import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import api from '../../services/api';

import {COLOR_PALETTE_PINK, COLOR_WHITE} from '../../util/AppConstants';

export default function Incidents() {

    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setloading] = useState(false);

    const navigation = useNavigation();
    
    async function loadIncidents() {

        if(loading){
            return;
        }

        if(total > 0 && incidents.length == total) {
            return;
        }

        setloading(true);

        //The Page Number (params) can be used like the line bellow
        //const response = await api.get(`incidents?page=${page}`);
        
        //Or pass the param page number using code bellow
        const response = await api.get(`incidents`, {
            params: {
                page
            }
        });        

        setIncidents([... incidents, ...response.data]);
        setTotal(response.headers["x-total-count"]);

        setloading(false);
        setPage(page + 1);

    }

    useEffect( () => {
        loadIncidents();
    }, [] );

    function navigateToDetails(incident) {
        navigation.navigate('Details', {incident});
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>

                <View style={styles.navBar}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                        <View style={{width: 40, height: 40, backgroundColor: COLOR_PALETTE_PINK.COLOR, 
                            alignItems: 'center', justifyContent: "center", borderRadius: 20}}>
                            <Feather name='user' size={28} color={COLOR_WHITE} />
                        </View>
                        
                    </TouchableOpacity>
                    <Image source={logoImg} />
                </View>
                
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Seja Bem Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e mude o mundo!</Text>

            <FlatList
                data={incidents}
                style={styles.incidentList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator = {false}
                onEndReached = {loadIncidents} //This function will called when user dash to bottom of list
                onEndReachedThreshold = {0.2} //When left 20% to end list load more itens (calls onEndReached)
                renderItem = { ( {item : incident} ) => (
                    <View style={styles.incident}>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start' }}>
                            <Text style={styles.incidentProperty}>ONG:</Text>
                            <Text style={styles.incidentValue}>{incident.name}</Text>
                        </View>

                        <View style={{flexDirection: 'row' }}>
                            <Text style={styles.incidentProperty}>CASO:</Text>
                            <Text style={styles.incidentValue}>{incident.title}</Text>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.incidentProperty}>Valor</Text>
                                <Text style={styles.incidentValue}>{incident.value}</Text>                                
                            </View>

                            <TouchableOpacity
                                style={styles.detailsButton}
                                onPress={() => navigateToDetails(incident)}
                            >
                                <Feather name="arrow-right" size={32} color={'#e02041'}/>
                        </TouchableOpacity>

                        </View>
                        
                    </View>
                )}
            />

        </View>
    );
}