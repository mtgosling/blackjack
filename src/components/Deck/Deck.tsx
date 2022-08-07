import styled from "styled-components";
import { CardDetail } from "../../pages/Blackjack";
import { Card} from "../Card";
import { useState} from "react";
import { Button } from "react-bootstrap";

interface DeckProps {
    deck: CardDetail[];
}

/**
 * Deck component, displaying all cards remaining in the deck
 *  - Can reveal the cards to show that they are shuffled
 */
export const Deck = ({deck}: DeckProps) => {
    const [showCards, setShowCards] = useState<boolean>(false);

    return (
        <DeckWrapper>
            <h4>Deck</h4>
            <Button onClick={() => setShowCards(!showCards)}>Reveal Deck</Button>
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
    margin: 20px auto 0;
`
