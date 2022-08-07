import { useCallback, useEffect, useState } from "react"
import { BlackjackTemplate } from "../templates/BlackjackTemplate";

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];

export interface CardDetail {
    id: number;
    suit: string;
    value: string;
    score: number;
}

/**
 * Base Blackjack page that contains majority of logic
 */
export const Blackjack = () => {
    const [deck, setDeck] = useState<CardDetail[]>([])
    const [playerHand, setPlayerHand] = useState<CardDetail[]>([]);
    const [dealerHand, setDealerHand] = useState<CardDetail[]>([]);
    
    /**
     * Generate the initial ordered deck
     * Aces high.
     */
    const generateDeck = () => {
        let generatedDeck = [];
        let count = 1;

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                const card: CardDetail = {
                    id: count,
                    suit: suits[i],
                    value: values[j],
                    score: j <= 8 
                        ? parseInt(values[j]) 
                        : values[j] === "ace" 
                            ? 11 
                            : 10,
                }

                generatedDeck.push(card);
                count++;
            }
        }

        return generatedDeck;
    }

    /**
     * Shuffles the deck of cards.
     *
     * NB. This may not be the most efficient method of shuffling cards,
     * it can be improved upon in the future.
     */
    const shuffleDeck = (deck: CardDetail[]) => {
        let shuffledDeck = [];
        let originalDeck = deck;

        for (let i = originalDeck.length; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            shuffledDeck.push(originalDeck[j]);
            originalDeck.splice(j, 1);
        }

        return shuffledDeck;
    }

    /**
     * Deals a card from the deck.
     *
     * It also removes the dealt card from the deck.
     */
    const dealCard = (deck: CardDetail[], hand: CardDetail[], setHand: (val: CardDetail[]) => {}) => {
        const topCard = deck[0];
        let tempDeck = deck;
        let tempHand = hand;

        tempHand.push(topCard);

        const removeIndex = tempDeck.map((card) => { return card.id; }).indexOf(topCard.id);
        tempDeck.splice(removeIndex, 1);

        setDeck([...tempDeck]);
        setHand([...tempHand]);
    }

    const reset = () => {
        setDeck(generateDeck());
        setPlayerHand([]);
        setDealerHand([]);
    }

    const BeginGame = () => {
        const shuffledDeck = shuffleDeck(deck);
        setPlayerHand([shuffledDeck[0], shuffledDeck[1]]); 
        setDealerHand([shuffledDeck[2], shuffledDeck[3]]);

        setDeck(shuffledDeck.slice(4));
    }

    useEffect(() => {
        if (deck.length === 0) {
            setDeck(generateDeck());
        }
    }, [deck]);

    return (
        <BlackjackTemplate
            deck={deck}
            playerHand={playerHand}
            dealerHand={dealerHand}
            beginGame={BeginGame}
        />
    )
}
