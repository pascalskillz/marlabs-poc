package com.pascalskillz.model;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class Stock {

    private String companyName;
    private String stockSymbol;
    private double currentPrice;
    private double lastPrice;
    private int percentDifference;
    private boolean isNegative;
    private String differenceAmount;

    public Stock(String companyName, String stockSymbol, double lastPrice, double currentPrice){
        this.companyName = companyName;
        this.stockSymbol = stockSymbol;
        this.lastPrice = lastPrice;
        this.currentPrice = currentPrice;
    }

}
