import { ListingsService } from './../listings.service';
import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';


@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(
    private listingsService: ListingsService
  ) { }

  ngOnInit() {
    this.listingsService.getListingForUser().subscribe(listings => this.listings = listings);
  }

  onDeleteClicked(listingId: string){
    this.listingsService.deleteListing(listingId)
    .subscribe(() => {
      this.listings = this.listings.filter(
        listing => listing.id !== listingId
      )
    });
  }

}
