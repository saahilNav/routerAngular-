import { Component, OnInit } from '@angular/core';
import { RoutingServiceService } from 'src/app/routing-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  value: any;


  constructor( private interservice:RoutingServiceService,private router: Router) { }

 async ngOnInit() { 
   console.log("console 1")
   try {
    this.value= await this.interservice.getData() ;
  console.log("") } 
    catch(e) {
    console.log(e); // 30
  }
   
    // .then(reesponse => {this.value = reesponse;
    //     console.log("this i list employyee",this.value)
    //   });
  
      console.log("console 3")
      const numberPromise = new Promise((resolve) => {
        resolve(5);
       
    });

    
    
    numberPromise.then(value => console.log(value));
  

    const numberObservable = new Observable((observer) => {
      observer.next(20);
      observer.next(25);
  });
  
  numberObservable.subscribe(value => console.log(value));


  }

}
