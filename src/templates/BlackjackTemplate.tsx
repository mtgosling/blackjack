import { Hand } from "../components/Hand"
import { Deck } from "../components/Deck"
import styled from "styled-components"
import { CardDetail } from "../pages/Blackjack"
import {Button} from "react-bootstrap";

interface BlackjackTemplateProps {
    deck: CardDetail[];
    playerHand: CardDetail[];
    dealerHand: CardDetail[];
    beginGame: () => void;
    dealToPlayer: () => void;
    dealToDealer: () => void;
    playerScore: number;
    dealerScore: number;
    reset: () => void;
    winner: string | null;
    gameStarted: boolean;
}

export const BlackjackTemplate = ({
    deck, 
    playerHand, 
    dealerHand, 
    beginGame, 
    dealToPlayer, 
    dealToDealer, 
    reset, 
    playerScore, 
    winner, 
    gameStarted
}: BlackjackTemplateProps) => {
    return (
        <BlacjackWrapper>
            <BlackjackHeader>
                <h1>Blackjack</h1>
                <p>This app allows you to play a simple game of Blackjack</p>
            </BlackjackHeader>
            <GameAreaBackground>
                <Result>
                    {winner && `The winner is ${winner}`}
                </Result>
                
                <div>
                    <Button variant="primary" onClick={beginGame} disabled={gameStarted}>Begin</Button>
                    <Button variant="secondary" onClick={reset}>Reset</Button>
                </div>

                <div>
                    <Button variant="primary" onClick={dealToPlayer} disabled={(playerScore >= 17) || (winner !== null)}>Deal to Macs</Button>
                    <Button variant="primary" onClick={dealToDealer} disabled={(playerScore < 17) || (winner !== null)}>Deal to Dealer</Button>
                </div>

                <HandsWrapper>
                    <Hand 
                        playerName="Macs"
                        cards={playerHand}
                        flipped={false}
                    />
                    <Hand 
                        playerName="Dealer"
                        cards={dealerHand}
                        flipped={false}
                    />
                </HandsWrapper>
                <DeckWrapper>
                    <Deck
                        deck={deck}
                    />
                </DeckWrapper>
            </GameAreaBackground>
        </BlacjackWrapper>
    )
}

const BlacjackWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const BlackjackHeader = styled.div`
    width: 100%;
    heigh: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F4F4F4;
`;

const GameAreaBackground = styled.div`
    background-color: #529e78;
    flex-grow: 1;
`;

const DeckWrapper = styled.div`
    display: flex;
    justify-content: center;

    > div {
        width: 80%;
    }
`

const HandsWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-content: space-around;

    > div {
        width: 30%;
    }
`;

const Result = styled.div`
    padding: 10px;
`;