import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private stockUrl = "http://localhost:8080/stocks";
  private loginUrl = "http://localhost:8080/login";
  private event: Observable<any>;

  constructor(private httpClient: HttpClient) { }

  /*  getStockPrice(stockCode: string): Observable<any> {
     const url = `${this.stockUrl}/${stockCode}/price`
     const eventSource = new EventSource(url)
     eventSource.onmessage = (event) => {
         return event.data;
     }
     //return this.httpClient.get(url);
   } */

  /* Retrieve from spring backend */
  /* getStockPrice(stockCode: string): Observable<any> {
    const url = `${this.stockUrl}/${stockCode}`

    return new Observable<any>(obs => {
      const eventSource = new EventSource(url);
      eventSource.addEventListener('message', (ev) => {
        //console.log(ev.data);
        obs.next(ev.data);
      })
    })
  } */

  /* Retrieve stock from the angular app */
  getStockPrice(stockCode: string): Observable<any> {
    const url = `${this.stockUrl}/${stockCode}/price`
    return new Observable<any>(obs => {
      const eventSource = new EventSource(url);
      eventSource.addEventListener('message', (ev) => {
        obs.next(ev.data);
        //console.log(ev.data)
      })
    })
  }

  getAllStocks(): Observable<Stock[]> {
    let username = "user@gmail.com"
    let password = "password"
    const headers = new HttpHeaders({ authorization: 'Basic' + btoa(username + ":" + password) })
    return this.httpClient.get<Stock[]>(this.stockUrl, { headers })
  }
  /*  getAllStocks(): Observable<Stock[]> {
     return this.httpClient.get<GetResponseStocks>(this.stockUrl).pipe(
       map(response => response.stocks)
     )
   } */

  getPrice(): Observable<any> {
    const url = `${this.stockUrl}/price`
    return this.httpClient.get(url);
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders({ authorization: 'Basic' + btoa(username + ":" + password) })
    return this.httpClient.get(this.loginUrl, { headers })
  }
}

interface GetResponseStocks {
  stocks: Stock[];
}