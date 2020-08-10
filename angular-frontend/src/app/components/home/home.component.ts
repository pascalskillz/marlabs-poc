import { Component, OnInit } from '@angular/core';
import { StockService } from "src/app/services/stock.service"
import { Router, NavigationEnd } from "@angular/router"
import { Stock } from "src/app/models/stock"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //stocks: any = []
  stocks: Stock[] = [];
  randomStockPrice: number;

  constructor(private stockService: StockService, private router: Router) {

    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return true;
    // };
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // this.reloadCurrentRoute()
      }
    });
  }

  ngOnInit(): void {
    const amazonStock = new Stock("Amazon", "AMZN", 2900, 0);
    this.stocks.push(amazonStock)

    const teslaStock = new Stock("Tesla", "TSLA", 1500, 0);
    this.stocks.push(teslaStock)

    const microsoftStock = new Stock("Microsoft", "MSFT", 190, 0);
    this.stocks.push(microsoftStock);

    const facebookStock = new Stock("Facebook", "FB", 240, 0);
    this.stocks.push(facebookStock);

    const netflix = new Stock("Netflix", "NFLX", 500, 0);
    this.stocks.push(netflix);

    //this.getAllStocks()

    /* for (let i = 0; i < 5; i++) {
      console.log("Inside for loop " + JSON.stringify(this.stocks[i]))
    } */
    for (const stock of this.stocks) {
      this.retrievStockPrice(stock);
    }

    var st = setInterval(() => {
      for (const stock of this.stocks) {
        this.getPercentageChange(stock)
      }
    }, 1000)

  }

  /* getAllStocks() {
    this.stockService.getAllStocks().subscribe(resStocks => {
      for (let i = 0; i < resStocks.length; i++) {
        console.log(resStocks[i])
        this.stocks.push(resStocks[i]);
      }
    })
  } */

  /* getAllStocks() {
    this.stockService.getAllStocks().subscribe(
      data => {
        console.log(data);
        this.stocks = data;
      }
    )
  } */

  /* retrievStockPrice(stock: Stock) {
    this.stockService.getStockPrice(stock.stockSymbol).subscribe(resStock => {
      //console.log("inside retrieve function")
      stock.currentPrice = resStock.currentPrice;
    })
  } */

  retrievStockPrice(stock: Stock) {
    this.stockService.getStockPrice(stock.stockSymbol).subscribe(responsePrice => {
      //console.log(responsePrice)
      stock.currentPrice = responsePrice;
    })
  }

  getPercentageChange(stock: Stock) {
    stock.differenceAmount = this.formatNumber(stock.currentPrice - stock.lastPrice);
    stock.percentDifference = this.formatNumber(stock.differenceAmount / stock.currentPrice * 100);
    stock.isNegative = stock.percentDifference < 0 ? true : false
    stock.differenceAmount = stock.differenceAmount > 0 ? "+" + stock.differenceAmount : stock.differenceAmount;
  }

  /* getRandomStockPrice() {
    this.stockService.getPrice().subscribe(resPrice => {
      this.randomStockPrice = resPrice;
    })
  } */

  formatNumber(val: number) {
    return Math.round(val * 100.0) / 100.0;
  }

  // reloadCurrentRoute() {
  //   let currentUrl = this.router.url;
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate([currentUrl]);
  //   });
  // }

}
