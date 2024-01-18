import { Router } from '@angular/router';
import { AuthServiceService } from './../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nutritionin-app';

  isLogoutVisible = true;

  constructor(private authService:AuthServiceService , private route:Router ) {

  }

  ngOnInit() {
    
  }


  logout(){
    console.log("loggin out")
    localStorage.clear();
    this.authService.logout();
    this.route.navigate(['/login'])
  }
}
