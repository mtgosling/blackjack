import { CardDetail } from "../../pages/Blackjack";
import styled from "styled-components";

interface CardProps {
    card: CardDetail;
    flipped: boolean;
}

export const Card = ({ card, flipped}: CardProps) => {
    const imgPath = flipped ? 'cards/back.png' : `cards/${ card.value }_of_${ card.suit }.png`;
    // This uses stock playing card images made available by google, you can find them in /src/assets/cards

    return (
        <CardWrapper>
            <CardInner>
                <img src={imgPath} alt={`${ card.value } of ${ card.suit }`} />
            </CardInner>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    border: 1px solid #000000;
    border-radius: 5px;
    margin: 5px;
    width: 50px;
    height: 76px;
    padding: 5px;
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 4px 4px 5px 1px rgba(0,0,0,0.75);
`;

const CardInner = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CardImage = styled.img`
    width: 100%;
    height: auto;
`;

