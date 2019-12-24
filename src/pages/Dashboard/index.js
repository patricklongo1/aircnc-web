/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import logo from '../../assets/logo.svg';
import api from '../../services/api';
import { Container, LogoBox, Content, SpotsList } from './styles';

export default function Dashboard({ history }) {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: {
                    user_id,
                },
            });

            setSpots(response.data);
            if (response.data.length <= 0) {
                toast.success(
                    'CADASTRE SEU PRIMEIRO SPOT, E RECEBA VISITAS DE FUTUROS TALENTOS'
                );
            }
        }
        loadSpots();
    }, []);

    async function handleLogout() {
        await localStorage.setItem('user', '');
        history.push('/');
    }

    return (
        <>
            <Container>
                <LogoBox>
                    <img src={logo} alt="AirCnC" />
                </LogoBox>
                <Content>
                    <SpotsList>
                        {spots.length <= 0 ? (
                            <li>
                                <h3>Você não tem spots cadastrados</h3>
                            </li>
                        ) : (
                            spots.map(spot => (
                                <li key={spot._id}>
                                    <header
                                        style={{
                                            backgroundImage: `url(${spot.thumbnail_url})`,
                                        }}
                                    />
                                    <strong>{spot.company}</strong>
                                    <span>
                                        {spot.price
                                            ? `R$${spot.price}/dia`
                                            : 'GRATUITO'}
                                    </span>
                                </li>
                            ))
                        )}
                    </SpotsList>
                    <Link to="/new">
                        <button type="button">Cadastrar novo spot</button>
                    </Link>
                    <Link to="/" onClick={handleLogout}>
                        Log Out
                    </Link>
                </Content>
            </Container>
        </>
    );
}

Dashboard.propTypes = {
    history: PropTypes.object.isRequired,
};
