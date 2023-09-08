import { Component,OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {

  listing: Listing;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const fakeListing = fakeListings.find(listing => listing.id === id);

    if (fakeListing !== undefined){
      this.listing = fakeListing;
    }
  
  
}
}
