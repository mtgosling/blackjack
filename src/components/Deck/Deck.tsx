import styled from "styled-components";
import { CardDetail } from "../../pages/Blackjack";
import { Card} from "../Card";
import { useState} from "react";

interface DeckProps {
    deck: CardDetail[];
}

export const Deck = ({deck}: DeckProps) => {
    const [showCards, setShowCards] = useState<boolean>(false);

    return (
        <DeckWrapper>
            <h3>Deck</h3>
            <div>
                <button onClick={() => setShowCards(!showCards)}>Reveal Deck</button>
            </div>
            <Cards>
            {deck.map((card) => (
                    <Card key={card.id} card={card} flipped={!showCards} />
            ))}
            </Cards>

        </DeckWrapper>
    )
}

const DeckWrapper = styled.div`
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
