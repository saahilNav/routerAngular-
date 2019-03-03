import { Component, OnInit } from '@angular/core';
import { RoutingServiceService } from '../routing-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.scss']
})
export class DetailCOmponentComponent implements OnInit {
 public value1:any;
 public value2:any;
  public item:any;

  constructor(private interservice:RoutingServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe( 
      switchMap((params:Params) => this.interservice.getDataId(+params['id'])))
      .subscribe(data => {this.item = data;
        console.log(this.item)});
  }

}
