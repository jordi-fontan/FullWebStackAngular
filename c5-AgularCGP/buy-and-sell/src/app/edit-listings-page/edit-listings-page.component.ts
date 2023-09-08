import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';


@Component({
  selector: 'app-edit-listings-page',
  templateUrl: './edit-listings-page.component.html',
  styleUrls: ['./edit-listings-page.component.css']
})


export class EditListingsPageComponent implements OnInit {
  name: string='';
  description: string='';
  price: string='';
  listing: Listing;
  constructor(private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    const id=this.route.snapshot.queryParamMap.get('id');
    const result =fakeMyListings.find(listing=>listing.id==id);
      if(result!=undefined) this.listing=result;
  }
  onSubmit():void {
    alert('Saving changes ...');
    this.router.navigateByUrl('/my-listings');
  }
  toNumber(s: string): Number{
    return Number(s);
  }

}
