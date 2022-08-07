import styled from "styled-components";
import { CardDetail } from "../../pages/Blackjack"
import { Card } from "../Card";

interface HandProps {
    playerName: string;
    cards: CardDetail[];
    flipped: boolean;
    score: number;
}

export const Hand = ({ cards, flipped, playerName, score }: HandProps) => {
    

    return (
        <HandWrapper>
            <h4>{playerName}</h4>
            <div>Score: {score}</div>
            <Cards>{cards.map((card) => (
                    <Card key={card.id} card={card} flipped={flipped} />
            ))}</Cards>
        </HandWrapper>
    )
}

const HandWrapper = styled.div`
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 20px;
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`