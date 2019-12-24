/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';
import api from '../../services/api';
import { Container, LogoBox, UploadThumbnail, Content } from './styles';

export default function New({ history }) {
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail]);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const data = new FormData();
            const user_id = localStorage.getItem('user');

            data.append('thumbnail', thumbnail);
            data.append('company', company);
            data.append('techs', techs);
            data.append('price', price);

            await api.post('/spots', data, {
                headers: { user_id },
            });
            history.push('/dashboard');
            toast.success('Spot cadastrado com sucesso');
        } catch (error) {
            toast.error('Falha ao cadastrar spot, verifique os dados');
        }
    }

    return (
        <Container>
            <LogoBox>
                <img src={logo} alt="AirCnC" />
            </LogoBox>
            <Content>
                <form onSubmit={handleSubmit}>
                    <UploadThumbnail
                        style={{ backgroundImage: `url(${preview})` }}
                        hasThumbnail={!!thumbnail}
                    >
                        <input
                            type="file"
                            onChange={event =>
                                setThumbnail(event.target.files[0])
                            }
                        />
                        <img src={camera} alt="Select Thumbnail" />
                    </UploadThumbnail>

                    <label htmlFor="company">EMPRESA*</label>
                    <input
                        type="text"
                        placeholder="Sua empresa incrível"
                        value={company}
                        onChange={event => setCompany(event.target.value)}
                    />

                    <label htmlFor="techs">
                        TECNOLOGIAS* <span>(separadas por vírgula)</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Quais tecnologias usam?"
                        value={techs}
                        onChange={event => setTechs(event.target.value)}
                    />

                    <label htmlFor="price">
                        VALOR DA DIÁRIA* <span>(em branco para GRATUITO)</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Valor cobrado por dia"
                        value={price}
                        onChange={event => setPrice(event.target.value)}
                    />

                    <button type="submit">Cadastrar</button>
                </form>
                <Link to="/dashboard">Cancelar</Link>
            </Content>
        </Container>
    );
}

New.propTypes = {
    history: PropTypes.object.isRequired,
};
