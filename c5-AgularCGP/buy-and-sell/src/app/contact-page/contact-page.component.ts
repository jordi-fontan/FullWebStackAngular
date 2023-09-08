import { Component, OnInit } from '@angular/core';

import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  
  email:string = '';
  message: string= '';
  listing: Listing;
  

  constructor (
    private route: ActivatedRoute,
    private router: Router,
  ){ 
    

  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const fakeListing = fakeListings.find(listing => listing.id === id);

    if (fakeListing !== undefined){
      this.listing = fakeListing;
    }
    this.message =`Hi I'm interested in your ${this.listing.name.toLowerCase()}!`
  }

  sendMessage():void {
    alert('Your message has been sent');
    this.router.navigateByUrl('/listings');
  }
}
