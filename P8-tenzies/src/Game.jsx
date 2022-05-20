import React, {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

import styled from 'styled-components';

import Dice from './Dice';

const Game = () => {

    const getNewDice = () => {
        const arr = [];
        for (let i = 0; i < 10; i++){
            arr.push(generateNewDie())
        }
        return arr;
    }

    const generateNewDie = () => {
        return {
            num: Math.ceil(Math.random() * 6),
            lock: false,
            id: nanoid()
        }
    }

    const [dice, setDice] = useState(getNewDice());

    const [tenzies, setTenzies] = useState(false);

    useEffect(() => {
        const allLocked = dice.every(el => el.lock);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(el => el.value === firstValue)
        if(allLocked && allSameValue){
            setTenzies(true);
        }

    }, [dice])  

    const rollDice = () => {
        if(tenzies){
            setDice(getNewDice());
            setTenzies(false);
        } else {
            setDice(prev => prev.map(el => (el.lock ? el : generateNewDie())));
        }
    }

    const lockDice = (id) => {
        setDice(prev => prev.map(el => (el.id === id ? {...el, lock: !el.lock} : el)))
    }

    return (
        <GameDiv>
            {tenzies && <Confetti />}
            <header>
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </header>
            <section className="diceArea">
                {dice.map(el => <Dice key={el.id} num={el.num} lock={el.lock} id={el.id} lockDice={() => lockDice(el.id)}/>)}
            </section>
            <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </GameDiv>
    )
}

const GameDiv = styled.div`
    background: #fafafa;
    width: 90vw;
    max-width: 48rem;
    padding: 4rem 3.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    header {
        text-align: center;
        width: 100%;
        max-width: 28rem;
        /* border: 1px solid black; */
        h1 {
            font-size: 2.8rem;
        }
        p {
            font-size: 1.6rem;
            font-weight: 300;
        }
    }
    .diceArea {
        /* border: 1px solid grey; */
        width: 100%;
        margin: 3.2rem 0rem;
        display: grid;
        grid-template: auto auto / repeat(5, 1fr);
        grid-row-gap: 0.8rem;
        justify-items: center;
        align-items: center;
    }
    button {
        padding: 1.2rem 3.6rem;
        font-size: 1.6rem;
        color: #fafafa;
        background: #5035FF;
        border: none; 
        border-radius: 0.6rem;
        box-shadow: 0px 6px 12px #c0c0c0;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover{
            color: #5035FF;
            background: #fafafa;
        }
    }
    @media screen and (max-width: 484px){
        padding: 2.8rem;
        header {
        width: 100%;
        /* max-width: 28rem; */
        /* border: 1px solid black; */
        h1 {
            font-size: 2.4rem;
        }
        p {
            font-size: 1.2rem;
            /* font-weight: 300; */
        }
    }
        .diceArea{
            width: 120%;
            /* border: 1px solid black; */
            grid-column-gap: 0.4rem;
            grid-row-gap: 0.4rem;
        }
        button{
            padding: 1rem 3.2rem;
        }
    }
`

export default Game;