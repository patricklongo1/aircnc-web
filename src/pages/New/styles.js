import styled, { css } from 'styled-components';
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

export const UploadThumbnail = styled.label`
    margin-bottom: 20px;
    border: 1px dashed #999;
    background-size: cover;
    cursor: pointer;
    display: flex;
    height: 160px;
    justify-content: center;
    align-items: center;

    input {
        display: none;
    }

    ${props =>
        props.hasThumbnail &&
        css`
            border: 0;
            img {
                display: none;
            }
        `}
`;

export const Content = styled.div`
    margin: 0px auto;
    max-width: 450px;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    form {
        display: flex;
        flex-direction: column;

        label {
            margin-top: 10px;
            font-size: 16px;
            font-weight: bold;
            color: #444;
            margin-bottom: 5px;
        }

        span {
            font-size: 12px;
            color: #999;
            font-weight: normal;
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
