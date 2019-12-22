import React from 'react';

import logo from '../../assets/logo.svg';
import { Container, Content, Box } from './styles';

export default function SignIn() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="AirCnC" />
                <Box>
                    <p>
                        Ofereça <strong>spots</strong> para programadores, e
                        encontre <strong>talentos</strong> para sua empresa.
                    </p>
                    <form>
                        <span>E-MAIL*</span>
                        <input type="text" placeholder="Seu melhor e-mail" />
                        <button type="submit">Entrar</button>
                    </form>
                </Box>
            </Content>
        </Container>
    );
}
