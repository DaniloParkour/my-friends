import React from 'react';
import {View, TouchableOpacity, Image, Text, Linking, TextInput} from 'react-native';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import {Feather} from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';
import { COLOR_PALETTE_PINK } from '../../util/AppConstants';

export default function Login() {

    const navigation = useNavigation();
    const route = useRoute();

    function navigateBack() {
        navigation.goBack();
    }


    return(
        <View style={styles.container}>
            <View>
                <View style={styles.navBar}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={28} color={'#e82041'} />
                </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center', paddingBottom: 60}}>
                    <Image source={logoImg} />
                    <Text style={{color: COLOR_PALETTE_PINK.COLOR, fontWeight: 'bold'}}>Protetores de Animais</Text>
                    <Text style={{color: COLOR_PALETTE_PINK.COLOR}}>Teresina-PI</Text>
                </View>
                
                <View style={styles.loginContent}>

                    <View style={{height: 130, width: '100%', alignItems: "center", justifyContent: 'space-between'}}>
                        <TextInput style={styles.textInput} placeholder="E-mail" />
                        <TextInput style={styles.textInput} secureTextEntry placeholder="Senha" />
                    </View>

                    <TouchableOpacity onPress={() => {alert('Implementar Login!');}} 
                        style={{marginTop: 40, padding: 8, backgroundColor: '#fff', 
                        borderWidth: 1, borderColor: COLOR_PALETTE_PINK.COLOR, borderRadius: 18}}>
                        
                        <Text style={{color: COLOR_PALETTE_PINK.COLOR, fontSize: 18, fontWeight: 'bold'}}>Acessar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{paddingTop: 160}}>
                        <Text style={{color: 'red', fontStyle: 'italic'}}>Não tem conta?</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}
