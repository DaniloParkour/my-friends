import React from 'react';
import {View, TouchableOpacity, Image, Text, Linking} from 'react-native';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import {Feather} from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

export default function Details() {

    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Olá ${incident.name}, no aplicativo *My Friends* vi o caso *${incident.title}* e estou entrado em contato pois gostaria de ajudar.`;

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.sendWhatsapp}&text=${message}`)
    }

    return(
        <View style={styles.container}>
            <View>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={28} color={'#e82041'} />
                </TouchableOpacity>

                <View style={styles.incident}>
                    <View style={styles.incident}>
                            <Text style={styles.incidentProperty}>ONG:</Text>
                            <Text style={styles.incidentValue}>{incident.name} ({incident.city} - {incident.uf})</Text>
                            
                            <Text style={styles.incidentProperty}>CASO:</Text>
                            <Text style={styles.incidentValue}>{incident.title}</Text>
                            
                            <Text style={styles.incidentProperty}>Valor</Text>
                            <Text style={styles.incidentValue}>{incident.value}</Text>
                        </View>
                </View>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso!</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

            

        </View>
    );
}