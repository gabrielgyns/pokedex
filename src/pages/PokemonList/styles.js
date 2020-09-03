import styled from 'styled-components';
import { shade } from 'polished';

export const List = styled.div`
  margin-top: 30px;
  max-width: 700px;

  a {
    background: #ffffff;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
    text-decoration: none;
    transition: transform 0.2s;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);

      svg {
        color: ${shade(0.2, '#cbcbd6')};
      }
    }

    img {
      width: 80px;
      height: 80px;
    }

    .info-container {
      margin-left: 16px;
      display: flex;
      flex-direction: column;

      width: 150px;
      border-right: 1px solid #cbcbd6;

      small {
        background-color: rgba(0, 0, 0, 0.1);
        width: fit-content;
        border-radius: 10px;
        padding: 2px 10px;
        margin-bottom: 5px;

        line-height: 21px;
        color: #a8a8b3;
        margin-top: 4px;
      }

      strong {
        font-size: 24px;
        line-height: 28px;
        color: #3d3d4d;
        font-weight: bold;

        &::first-letter {
          text-transform: uppercase;
        }
      }

      .info-container__types {
        margin: 0;
        width: auto;
        display: flex;
        flex-direction: row;
        
        span {
          background-color: rgba(0, 0, 0, 0.1);
          width: fit-content;
          border-radius: 10px;
          padding: 2px 10px;
          margin-right: 5px;
  
          font-size: 16px;
          line-height: 21px;
          /* color: #a8a8b3; */
          color: #3d3d4d;
          margin-top: 4px;
        }

        .grass {
          background-color: #DEFDE0;
        }
        .fire {
          background-color: #FDDFDF;
        }
        .electric {
          background-color: #FCF7DE;
        }
        .water {
          background-color: #DEF3FD;
        }
        .ground {
          background-color: #f4e7da;
        }
        .rock {
          background-color: #d5d5d4;
        }
        .fairy {
          background-color: #fceaff;
        }
        .poison {
          background-color: #98d7a5;
        }
        .bug {
          background-color: #f8d5a3;
        }
        .dragon {
          background-color: #97b3e6;
        }
        .psychic {
          background-color: #eaeda1;
        }
        .flying {
          background-color: #F5F5F5;
        }
        .fighting {
          background-color: #E6E0D4;
        }
        .normal {
          background-color: #F5F5F5;
        }
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
      transition: color 0.2s;
    }

    .abilities-container {
      font-size: 18px;
      line-height: 28px;
      color: #3d3d4d;
      font-weight: bold;

      margin-left: 16px;
      display: flex;
      flex-direction: column;

      span {
        font-size: 16px;
        font-weight: normal;
        line-height: 21px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }

  .pagination-container {
    display: flex;
    justify-content: space-between;

    button {
      width: 100px;
      padding: 10px;
      border-radius: 5px;
      border: 0;
      color: #ffffff;
      background: #04d361;
      transition: background-color 0.2s;

      margin-top: 20px;

      &:hover {
        background: ${shade(0.2, '#04d361')};
      }

      &:disabled {
        cursor: not-allowed;
        color: #ffffff;
        background: #cbcbd6;
      }
    }
  }

  @media screen and (max-width: 600px) {
    img {
      width: 150px !important;
      height: 150px !important;
    }

    .card-back-image {
      display: none;
    }

    a {
      display: flex;
      align-items:center;
      flex-direction: column;

      .info-container {
        border-right: none;

        small {
          margin-left: -10px;
          transform: scale(1.25);
        }

        strong {
          transform: scale(1.25);
          /* font-size: 35px; */
          line-height: 50px;

          &::first-letter {
            text-transform: uppercase;
          }
        }

        .info-container__types {
          transform: scale(1.25);
        }
      }

      .abilities-container{
        display: none;
      }

      svg {
        transform: scale(1.25);
        margin-top: 25px;
        margin-left: 0;
      }
    }

    .pagination-container {
      button {
        transform: scale(1.25);
      }
    }
  }

`;