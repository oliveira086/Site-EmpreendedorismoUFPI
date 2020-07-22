import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import "./styles.css";
import logo from "../../imgs/logo4.png";

class Header extends Component {
    render(){
        return (
            <header id="headerGeral">
                <img src={logo} className="logoHeader"></img>
                <ul>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/sobre' className="link">Quem Somos</Link></li>
                    <li><Link to='/contato' className="link">Contato</Link></li>
                    <li><Link to='/servicos' className="link">Serviços</Link></li>
                    <li><Link to='/eventos' className="link">Eventos</Link></li>
                    <li><Link to='/login' className="link">Minha conta</Link></li>
                    <li><Link to='/cadastro' className="link">Cadastre-se</Link></li>
                </ul>
            </header>
        );
    }
}

//<li><Link to='/admin'>Painel do admin</Link></li>
//<li><Link to='/usuario'>Painel do usuário</Link></li>

export default Header;