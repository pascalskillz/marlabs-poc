export class Stock {
    companyName: string
    stockSymbol: string;
    currentPrice: number;
    lastPrice: number;
    percentDifference: Number;
    isNegative: boolean;
    differenceAmount: any;

    constructor(companyName: string, stockSymbol: string, lastPrice: number, currentPrice: number) {
        this.companyName = companyName;
        this.stockSymbol = stockSymbol;
        this.lastPrice = lastPrice;
        this.currentPrice = currentPrice
    }
}
