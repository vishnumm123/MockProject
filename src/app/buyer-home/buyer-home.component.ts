import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.css']
})
export class BuyerHomeComponent implements OnInit {

  buyerdata;

  constructor(private newService : ServiceService ,private router:Router) { }

  ngOnInit() {
    this.newService.GetBuyer().subscribe(data=>{this.buyerdata = data
      console.log(data);
    });

  }

  Logout(){
    localStorage.removeItem("user-data");
    this.router.navigate(['home']);
  }
  


}
