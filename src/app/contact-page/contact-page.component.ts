import { ListingsService } from './../listings.service';
import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(id)
    .subscribe(listing => {
      this.listing === listing;
      this.message = `Hi, I'm interesed in your ${listing.name.toLowerCase()}`
    });
  }

  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }

}
