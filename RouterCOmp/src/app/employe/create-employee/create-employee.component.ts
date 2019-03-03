import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { RoutingServiceService } from 'src/app/routing-service.service';
import { switchMap } from 'rxjs/operators';
import { ModelStructure } from 'src/app/model';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  sub:any;
  public item:ModelStructure;
  constructor( private router:Router,private interservice:RoutingServiceService ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
    switchMap((params: Params) => this.interservice.getDataId(+params['id'])))
    .subscribe(data => {this.item = data;
      console.log(this.item)});
     
  }
  goBack(){
    // this.location.back();
    window.history.back();
  }
  details(id:any){
    console.log("this id of create details",id)
   this.router.navigate(['/details',id])
  }

}
