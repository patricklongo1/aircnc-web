import styled from 'styled-components';
import background from '../../assets/background.jpg';

export const Container = styled.div`
    min-height: 100%;
    padding: 80px 0;
    background: #000 url(${background}) no-repeat;
    background-size: cover;
`;

export const LogoBox = styled.div`
    display: flex;
    justify-content: center;
    background: none;
    margin: 0px auto;
    max-width: 450px;
    margin-bottom: 50px;
`;

export const Content = styled.div`
    margin: 0px auto;
    max-width: 450px;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    button {
        margin-bottom: 10px;
        border: 0;
        border-radius: 2px;
        width: 100%;
        height: 42px;
        padding: 0 20px;
        font-size: 16px;
        font-weight: bold;
        background: #f05a5b;
        color: #fff;
        transition: background 0.2s;

        &:hover {
            background: #e14f50;
        }
    }

    a {
        font-size: 14px;
        color: #444;
        font-weight: bold;
        transition: color 0.2s;

        &:hover {
            color: #e14f50;
        }
    }
`;

export const SpotsList = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 30px;

    li {
        display: flex;
        flex-direction: column;

        header {
            width: 100%;
            height: 120px;
            background-size: cover;
            border-radius: 4px;
        }

        strong {
            margin-top: 10px;
            font-size: 24px;
            color: #444;
            margin-bottom: 4px;
        }

        span {
            font-size: 15px;
            color: #999;
        }
    }
`;
