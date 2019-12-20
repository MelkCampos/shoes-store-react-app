import styled from 'styled-components'


export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 8px;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button {
        background: #7159c1;
        color: #fff;
        border: 0;
        border-radius: 4px;
        padding: 12px 20px;
        font-weight: bold;
        text-transform: uppercase;
        transition: 0.3s;

        &:hover {
            opacity: 0.8;
        }
    }
`;

export const ProductTable = styled.div`
    width: 100%;

    thead th {
        color: #999;
        text-align: center;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    img {
        height: 120px;
    }

    strong {
        color: #333;
        display: block;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 17px;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #ddd;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }

    button {
        background: none;
        border: 0;
        padding: 6px;
    }

`;

export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
        font-weight: bold;
    }

    strong {
        font-size: 20px;
        margin-left: 5px;
    }
`;

