import { Hand } from "../components/Hand"
import { Deck } from "../components/Deck"
import styled from "styled-components"
import { CardDetail } from "../pages/Blackjack"
import {Button, Alert} from "react-bootstrap";

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
    dealerScore,
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
                <GameAreaInner>
                    <DealingButtons>
                        <Button variant="primary" onClick={beginGame} disabled={gameStarted}>Begin</Button>
                        <Button variant="secondary" onClick={reset}>Reset</Button>
                    </DealingButtons>

                    {gameStarted && (
                        <DealingButtons>
                            <Button variant="primary" onClick={dealToPlayer} disabled={(playerScore >= 17) || (winner !== null)}>Deal to Macs</Button>
                            <Button variant="primary" onClick={dealToDealer} disabled={(playerScore < 17) || (winner !== null)}>Deal to Dealer</Button>
                        </DealingButtons>
                    )}
                    
                    {winner && (
                        <Result>
                            <Alert>
                                {winner === "draw" ? `its a draw` : `The winner is ${winner}`}
                            </Alert>
                        </Result>
                    )}

                    <HandsWrapper>
                        <Hand 
                            playerName="Macs"
                            cards={playerHand}
                            flipped={false}
                            score={playerScore}
                        />
                        <Hand 
                            playerName="Dealer"
                            cards={dealerHand}
                            flipped={false}
                            score={dealerScore}
                        />
                    </HandsWrapper>

                    <DeckWrapper>
                        <Deck deck={deck} />
                    </DeckWrapper>
                </GameAreaInner>

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

const GameAreaInner = styled.div`
    margin: 0 auto;
`;


const DeckWrapper = styled.div`
    display: flex;
    justify-content: center;

    > div {
        width: 76%;
    }
`

const HandsWrapper = styled.div`
    display: flex;
    margin: 0 auto 20px;
    justify-content: space-around;
    flex-direction: row;
    width: 80%;


    > div {
        width: 45%;
    }
`;

const Result = styled.div`
    padding: 10px;
    max-width: 300px;
    margin: 0 auto;
`;

const DealingButtons = styled.div`
    padding: 10px;

    > button {
        margin: 0 10px;
    }
`;