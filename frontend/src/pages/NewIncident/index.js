import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';



export default function NewIncident() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");

    const ong_id = localStorage.getItem('ong_id');
    const history = useHistory();

    async function handleNewIncident(e) {

        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ong_id
                }
            });
            alert('Solicitação de ajuda cadastrada com sucesso');
            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar solicitação de ajuda, tente novamente');
        }

    }

    return(
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImg} alt="My Friends - Victory For Animals" />

                    <h1>Cadastrar Novo Caso</h1>
                    <p>Cadastre, uma solicitação de ajuda para buscar por pessoas de bom coração que junto com você, querem um mundo melhor para os animais.</p>

                    <Link to="/profile" className="text-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título Da Solicitação"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    
                    <textarea 
                        placeholder="Descreva o que você está precisando" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    
                    <input
                        placeholder="Valor em Reais (R$)"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}