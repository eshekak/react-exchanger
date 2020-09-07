import React from "react";
import {observer} from "mobx-react-lite";
import constant from "lodash/constant.js";
import get from "lodash/get.js";
import map from "lodash/map.js";

import store from "../../store/store.js";
import currencies from "../../lib/consts/currencies/currencies.js";
import formatRate from "../../lib/helpers/format-rate/format-rate.js";

import CarouselInput from "./carousel-input.js";
import Carousel from "./carousel.js";

function createPockets(atp = false) {
    const wallets = get(store, "wallets", {});
    const inputValue = calculateInputValue(atp);
    const prefixSymbol = getInputPrefix(atp);

    return map(wallets, (balance, currency) => ({
        currency,
        input: constant(<CarouselInput value={inputValue} prefixSymbol={prefixSymbol} isDisabled={atp} />),
        balance: walletBalance(currency),
        rate: calculateRate(atp)
    }));
}

function calculateInputValue(atp) {
    const exchangeAmount = get(store, "exchangeAmount", "");
    const targetRate = get(store, "rates.target", "");

    return atp
        ? Number(exchangeAmount) * Number(targetRate)
        : exchangeAmount;
}

function getInputPrefix(atp) {
    return atp
        ? "+"
        : "-";
}

function walletBalance(currency) {
    const balanceNumber = get(store, `wallets[${currency}]`, "");
    const currencySymbol = get(currencies, `${currency}.symbol`, "");

    return `You have ${currencySymbol}${balanceNumber}`;
}

function calculateRate(atp) {
    const targetRate = get(store, "rates.target", "");
    const selectedCurrency = get(store, "selectedCurrency", "");
    const targetCurrency = get(store, "targetCurrency", "");
    const selectedCurrencySymbol = get(currencies, `[${selectedCurrency}].symbol`, "");
    const targetCurrencySymbol = get(currencies, `[${targetCurrency}].symbol`, "");

    return atp
        ? formatRate(targetRate, {selectedCurrencySymbol, targetCurrencySymbol})
        : null;
}

function CarouselFactory({className, areTargetPockets = false}) {
    const pockets = createPockets(areTargetPockets);

    return <Carousel className={className} pockets={pockets} />;
}

export default observer(CarouselFactory);
