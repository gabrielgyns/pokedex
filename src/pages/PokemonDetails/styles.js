import styled from 'styled-components';
import { shade } from 'polished';

export const Back = styled.a`
    text-decoration: none;
    color: #3a3a3a;
    transition: color 0.2s;
    transition: transform 0.2s;

    &:hover {
        color: ${shade(0.2, '#3a3a3a')};
        transform: scale(1.2);
    }
`;

export const Deitals = styled.div`
    margin-top: 30px;
    max-width: 100%;

    background: #ffffff;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
    text-decoration: none;
    transition: transform 0.2s;

    .info-container {
        display: flex;

        .info-container__personal {
            margin-right: 30px;
            display: flex;
            flex-direction: column;

            h1 {
                font-size: 24px;
                line-height: 28px;
                color: #3d3d4d;

                &::first-letter {
                    text-transform: uppercase;
                }

                small {
                    color: #cbcbd6;
                    font-size: 16px;
                }
            }

            span {
                color: #3d3d4d;
                line-height: 23px;
            }
        }

        .info-container__stats {
            margin-right: 30px;
            display: flex;
            flex-direction: column;

            strong {
                font-size: 24px;
                line-height: 28px;
                color: #3d3d4d;
                font-weight: bold;
            }

            span {
                color: #3d3d4d;
                line-height: 23px;
            }
        }

        .info-container__abilities {
            display: flex;
            flex-direction: column;

            strong {
                font-size: 24px;
                line-height: 28px;
                color: #3d3d4d;
                font-weight: bold;

                
            }

            span {
                color: #3d3d4d;
                line-height: 23px;

                &::first-letter {
                    text-transform: uppercase;
                }

                p {
                    color: #3d3d4d;
                    font-size: 15px;
                }
            }
        }
    }

    
`;