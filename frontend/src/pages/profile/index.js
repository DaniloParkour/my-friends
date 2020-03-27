import React, {useEffect, useState} from 'react'; //useEffect is used for calls a function in a determined moment of component
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';


import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {

    const [incidents, setIncidents] = useState([]);

    const ongName = localStorage.getItem('ong_name');
    const ongId = localStorage.getItem('ong_id');

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            //Delete the incidente (state) to React reload the data on page
            setIncidents(incidents.filter(incident => incident.id !== id)); //Filter remove all incident that "incident.id != id"

        } catch {
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    //useEffect(() => { }, [ong_nane]); //The "useEffect" will be called when "ong_name" changes

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="My Friends - Victory For Animals" />
                <span>Bem vindo, {ongName}</span>

                <Link className="button" to="/incidents/new">Solicitar Ajuda</Link>
                <button onClick={() => handleLogout()} type="button">
                    <FiPower size={18} color="#f29"/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    {/*<p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'} ).format(incident.value)}</p>*/}
                    <p>{incident.value}</p>

                    <button onClick={ () => handleDeleteIncident(incident.id) } type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                ))}

            </ul>

        </div>
    );
}