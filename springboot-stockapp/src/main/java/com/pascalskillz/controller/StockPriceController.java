package com.pascalskillz.controller;

import com.pascalskillz.model.Stock;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.Duration;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ThreadLocalRandom;

@RestController
@CrossOrigin
public class StockPriceController {


    //private static Stock[] stocks = new Stock[10];
    private static Map<String, Stock> stocks = new HashMap<>();

    static {
        Stock amazon = new Stock("Amazon", "AMZN", 2900.0, 0.0);
        stocks.put("AMZN", amazon);

        Stock tesla = new Stock("Tesla", "TSLA", 1550.0, 0.0);
        stocks.put("TSLA", tesla);

        Stock microsoft = new Stock("Microsoft", "MSFT", 200.0, 0.0);
        stocks.put("MSFT", microsoft);

        Stock facebook = new Stock("Facebook", "FB", 260.0, 0.0);
        stocks.put("FB", facebook);

        Stock netflix = new Stock("Netflix", "NFLX", 500.0, 0.0);
        stocks.put("NFLX", netflix);

    }

    @GetMapping("/stocks/{stockCode}/price")
    public Flux<Double> getStockPrice(@PathVariable String stockCode){
        if(stockCode.equalsIgnoreCase("AMZN"))
            return Flux.interval(Duration.ofSeconds(3)).map(price -> getRandomNumber(2800, 3100)).log();
        else if(stockCode.equalsIgnoreCase("TSLA"))
            return Flux.interval(Duration.ofSeconds(3)).map(price -> getRandomNumber(1500, 1600)).log();
        else if(stockCode.equalsIgnoreCase("MSFT"))
            return Flux.interval(Duration.ofSeconds(3)).map(price -> getRandomNumber(195, 210)).log();
        else if(stockCode.equalsIgnoreCase("FB"))
            return Flux.interval(Duration.ofSeconds(3)).map(price -> getRandomNumber(250, 280)).log();
        else if(stockCode.equalsIgnoreCase("NFLX"))
            return Flux.interval(Duration.ofSeconds(3)).map(price -> getRandomNumber(480, 510)).log();
        else
            return Flux.interval(Duration.ofSeconds(3)).map(price -> getRandomNumber(150, 300)).log();
    }
    private Double getRandomNumber(double min, double max) {

        double val =  ThreadLocalRandom.current().nextDouble(min, max + 1);
        /* Convert to 2 decimal places */
        return Math.round(val * 100.0)/100.0;
    }

//
    /*@GetMapping("/stocks/{stockCode}")
    public Flux<Stock> getAllStockPrice(@PathVariable String stockCode) {
        if(stocks.containsKey(stockCode.toUpperCase())){
            Stock theStock = stocks.get(stockCode.toUpperCase());

            if(theStock.getStockSymbol().equalsIgnoreCase("AMZN"))
                return Flux.interval(Duration.ofSeconds(3)).map(price -> newStockPrice(theStock,2800, 3100)).log();
            else if(theStock.getStockSymbol().equalsIgnoreCase("TSLA"))
                return Flux.interval(Duration.ofSeconds(3)).map(price -> newStockPrice(theStock,1500, 1600)).log();
            else if(theStock.getStockSymbol().equalsIgnoreCase("MSFT"))
                return Flux.interval(Duration.ofSeconds(3)).map(price -> newStockPrice(theStock,195, 210)).log();
            else if(theStock.getStockSymbol().equalsIgnoreCase("FB"))
                return Flux.interval(Duration.ofSeconds(3)).map(price -> newStockPrice(theStock,250, 280)).log();

            else return Flux.interval(Duration.ofSeconds(3)).map(price -> newStockPrice(theStock,150, 300)).log();
        }
        else {
            return Flux.empty();
        }
    }*/

    @GetMapping("/stocks")
    public List<Stock> getStocks(){
        List<Stock> list = new ArrayList<>(stocks.values());
        return list;
    }

    public Stock newStockPrice(Stock stock, double min, double max){
        stock.setCurrentPrice(getRandomNumber(min, max));
        return stock;
    }

    @GetMapping("/stocks/price")
    public double getStockPrice(){
        System.out.println("Ramdom Stock price generated");
        return getRandomNumber(400, 500);
    }

}
