import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Dice = ({num, lock, lockDice}) => {

    return  (
        <Die 
            style={lock ? {background: "#59E391"} : {background: "white"}}
            onClick={lockDice}
        >
            <p>{num}</p>
        </Die>
    )
}

const Die = styled.div`
    width: 4.8rem;
    height: 4.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.8rem;
    box-shadow: 0px 4px 8px #c0c0c0;
    margin-bottom: 0.8rem;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover{
        transform: translate(0, -5%);
    }
    p {
        font-size: 1.8rem;
        font-weight: 700;
    }
    @media screen and (max-width: 484px){
        width: 3.2rem;
        height: 3.2rem;
    }
`

export default Dice;