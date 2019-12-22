import styled from 'styled-components';
import background from '../../assets/background.jpg';

export const Container = styled.div`
    min-height: 100%;
    padding: 80px 0;
    background: #000 url(${background}) no-repeat;
    background-size: cover;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 450px;
    width: 100%;
`;

export const Box = styled.div`
    width: 100%;
    background: #fff;
    margin-top: 50px;
    border-radius: 4px;
    padding: 30px;

    p {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 30px;
    }

    form {
        display: flex;
        flex-direction: column;

        span {
            font-size: 14px;
            color: #444;
            font-weight: bold;
            margin-bottom: 8px;
        }

        input {
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 2px;
            height: 45px;
            padding: 0 15px;
            font-size: 16px;
        }

        button {
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
    }
`;
