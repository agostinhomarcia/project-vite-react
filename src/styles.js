import styled from 'styled-components';


export const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color:	#CD5C5C;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const ContainerItens = styled.div`
    background:#fff;
    padding:25px;
    border-radius:5px;
    

`;

export const List = styled.ul`
    padding:0;
    margin-top:30px;
`;

export const ItemList = styled.li`
    color:#000;
    font-size:15px;
    font-weight:400;
    background: #FFA07A;
    box-shadow: 1px 4px 10px rgba(0,0,0,0.2);
    border-radius:5px;
    height:60px;
    list-style-type:none;
    margin-bottom:20px;
    display:flex;
    justify-content:center;
    align-items:center;

`;

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height:40px;
    font-size:15px;
    font-weight:500;
    outline:none;
    padding-left:10px;
`;

export const Button = styled.button`
    width:85px;
    height:40px;
    background-color:#FA8072;
    border-radius:5px;
    color:#fff;
    border:none;
    cursor: pointer;
    margin-left:20px;
`;

