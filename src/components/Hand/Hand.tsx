import styled from "styled-components";
import { CardDetail } from "../../pages/Blackjack"
import { Card } from "../Card";

interface HandProps {
    playerName: string;
    cards: CardDetail[];
    flipped: boolean;
}

export const Hand = ({ cards, flipped,playerName }: HandProps) => {
    const score = cards.reduce((total, card) => total + card.score, 0);

    return (
        <HandWrapper>
            <div>{playerName}</div>
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