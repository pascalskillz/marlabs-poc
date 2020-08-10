import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string
  password: string
  isAuthenticated: boolean

  constructor(private stockservice: StockService, private router: Router) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.stockservice.login(this.username, this.password).subscribe(
      data => {
        console.log(data)
      }
    )
    this.router.navigate(['/login'])
  }
}
