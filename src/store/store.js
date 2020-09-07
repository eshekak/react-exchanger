import {observable} from "mobx";

import currencies from "../lib/consts/currencies/currencies.js";

export default observable({
    selectedCurrency: currencies.USD.abbreviation,
    targetCurrency: currencies.GBP.abbreviation,
    exchangeAmount: 12,
    rates: {
        toTargetRate: 1.457,
        toSelectedRate: 1.457
    },
    wallets: {
        [currencies.USD.abbreviation]: 53.45,
        [currencies.EUR.abbreviation]: 100,
        [currencies.GBP.abbreviation]: 80.15
    }
});
