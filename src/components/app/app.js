import React from "react";
import styled from "styled-components";
import constant from "lodash/constant.js";

import colors from "../../lib/styles/colors/colors.js";
import Carousel from "../carousel/carousel.js";
import Button from "../button/button.js";
import RateSelector from "../rate-selector/rate-selector.js";
import Input from "../input/input.js";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    position: relative;

    padding-top: 1rem;

    width: 400px;

    border-radius: 8px;

    background-color: ${colors.primary};
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 0 1rem;

    height: 2rem;
`;

const Triangle = styled.div`
    position: relative;
    bottom: -10px;

    margin: auto;

    width: 0;
    height: 0;

    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${colors.primary};
`;

const BottomCarousel = styled(Carousel)`
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: ${colors.primaryDark};
`;

const pockets = [{
    currency: "USD",
    input: constant(<Input prefix={constant("-")} value={145.67} />),
    balance: "You have 58.33$",
    rate: "£1 = $1.45"
}, {
    currency: "EUR",
    input: constant(<Input prefix={constant("-")} value={145.67} />),
    balance: "You have 58.33$",
    rate: "£1 = $1.45"
}, {
    currency: "GBP",
    input: constant(<Input prefix={constant("-")} value={145.67} />),
    balance: "You have 58.33$",
    rate: "£1 = $1.45"
}];

function App() {
    return <Wrapper>
        <Header>
            <Button>Cancel</Button>
            <RateSelector rate={1.457} currencySigns={{
                fromCurrencySign: "£",
                toCurrencySign: "$"
            }} />
            <Button>Exchange</Button>
        </Header>
        <Carousel pockets={pockets} />
        <Triangle />
        <BottomCarousel pockets={pockets} />
    </Wrapper>;
}

export default App;
