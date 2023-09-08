import { Component,OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})

export class MyListingsPageComponent implements OnInit {

  listing: Listing[]=[];

  constructor(
   
  ) { }

  ngOnInit(): void {
      this.listing = fakeListings;
  }

  onDeletedClicked(listingId: string):void{
    alert(`Deleting your listing with id ${listingId}`);
  }

}
