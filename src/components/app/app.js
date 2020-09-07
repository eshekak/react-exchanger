import React from "react";
import styled from "styled-components";
import constant from "lodash/constant.js";

import colors from "../../lib/styles/colors/colors.js";
import Carousel from "../carousel/carousel.js";
import CarouselFactory from "../carousel/carousel-factory.js";
import Button from "../button/button.js";
import RateSelector from "../rate-selector/rate-selector.js";
import Input from "../input/input.js";
import rateFormatter from "../../lib/helpers/rate-formatter/rate-formatter.js";

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

const toPockets = [{
    currency: "USD",
    input: constant(<Input isDisabled prefix={constant("+")} value={145.67} />),
    balance: "You have 58.33$",
    // eslint-disable-next-line no-magic-numbers
    rate: formRateString(145.67, {
        selectedCurrencySymbol: "£",
        targetCurrencySymbol: "$"
    })
}, {
    currency: "EUR",
    input: constant(<Input isDisabled prefix={constant("+")} value={145.67} />),
    balance: "You have 58.33$",
    // eslint-disable-next-line no-magic-numbers
    rate: formRateString(145.67, {
        selectedCurrencySymbol: "£",
        targetCurrencySymbol: "$"
    })
}, {
    currency: "GBP",
    input: constant(<Input isDisabled prefix={constant("+")} value={145.67} />),
    balance: "You have 58.33$",
    // eslint-disable-next-line no-magic-numbers
    rate: formRateString(145.67, {
        selectedCurrencySymbol: "£",
        targetCurrencySymbol: "$"
    })
}];

function formRateString(rate, currencySymbols) {
    const [integer, firstTwoFractions, lastTwoFractions] = rateFormatter(rate);
    const {selectedCurrencySymbol, targetCurrencySymbol} = currencySymbols;

    // eslint-disable-next-line max-len
    return `${selectedCurrencySymbol}1 = ${targetCurrencySymbol}${integer}.${firstTwoFractions}${lastTwoFractions || ""}`;
}

function App() {
    return <Wrapper>
        <Header>
            <Button>Cancel</Button>
            <RateSelector rate={1.457} currencySymbols={{
                selectedCurrencySymbol: "£",
                targetCurrencySymbol: "$"
            }} />
            <Button>Exchange</Button>
        </Header>
        <CarouselFactory />
        <Triangle />
        <BottomCarousel pockets={toPockets} />
    </Wrapper>;
}

export default App;
