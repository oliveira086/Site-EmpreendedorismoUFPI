import React from 'react';

import Header from '../../components/Header'
import Button from '../../components/Atoms/Button'
import FormInput from '../../components/Atoms/FormInput'
import './styles.css';

function LoginPage() {
  return (
    <div>
      <Header/>
      <section id="section-login">
        <div id="container-form-login">
          <div id="form-login">
            <span id="text-entrar">Entrar</span>
            <FormInput width={20} title={'Email'} placeHolder={'seuemail.com.br'} required={true} type={'email'}/>
            <FormInput width={20} title={'Senha'} placeHolder={'*****'} required={true} type={'password'}/>
            <Button width={15} content={'Entrar'}></Button>
            <span id="text-recuperar">Esqueceu a senha?</span>
            <div id="container-chamada-cadastro">
              <span id="text-cadastrar">Você ainda não é cadastrado</span>
              <Button width={8} content={'Cadastre-se'} size={12}></Button>
            </div>
          </div>
        </div>
        <div id="container-transform"></div>
        <div id="container-complete-transform">
          <div id="logo-login"></div>
        </div>

      </section>

    </div>

  );
}

export default LoginPage;