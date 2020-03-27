import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import '../../global.css';

import myFriendsImg from '../../assets/myFriends.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {

    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault(); //Add this line on all form react to not reloar the page when submit

        try{
            const response = await api.post('sessions', {id});
            localStorage.setItem('ong_id', id);
            localStorage.setItem('ong_name', response.data.name);
            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente');
        }
    }

    return(
       <div className="logon-container">
           <section className="form">
               <img src={logoImg} alt="My Friends - Victory For Animals" />
               
               <form onSubmit={handleLogin}>
                    <h1>Faça Seu Logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button> {/*OBS: The "class" is a reserved word from JavaScript. On React, to set a class of a component, we use the className*/}

                    {/* With tag <a> the borwser will reload all page and reload all react
                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não Tenho Cadastro
                    </a>

                    With <Link> the page will not reloaded, just the necessary content will reload*/}
                    <Link to="/register" className="text-link">
                        <FiLogIn size={16} color="#E02041"/>
                        Não Tenho Cadastro
                    </Link>
               </form>

           </section>
           <img src={myFriendsImg} alt="My Friends - All Together, All For The Animals" />
       </div>
    );
}