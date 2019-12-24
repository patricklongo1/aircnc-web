/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '../../services/api';
import logo from '../../assets/logo.svg';
import { Container, Content, Box } from './styles';

export default function SignIn({ history }) {
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            if (email.length <= 0) {
                toast.error('Campo de email obrigatório');
            } else {
                const response = await api.post('/sessions', {
                    email,
                });
                setEmail('');

                const { _id } = response.data;
                localStorage.setItem('user', _id);
                history.push('dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Content>
                <img src={logo} alt="AirCnC" />
                <Box>
                    <p>
                        Ofereça <strong>spots</strong> para programadores, e
                        encontre <strong>talentos</strong> para sua empresa.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <span>E-MAIL*</span>
                        <input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                        />
                        <button type="submit">Entrar</button>
                    </form>
                </Box>
            </Content>
        </Container>
    );
}

SignIn.propTypes = {
    history: PropTypes.object.isRequired,
};
