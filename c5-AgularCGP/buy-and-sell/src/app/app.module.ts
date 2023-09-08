import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';

import { NewListingsPageComponent } from './new-listings-page/new-listings-page.component';
import { EditListingsPageComponent } from './edit-listings-page/edit-listings-page.component';
import { ListingDataFormComponent } from './listing-data-form/listing-data-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingDetailPageComponent,
    ContactPageComponent,
    MyListingsPageComponent,
   
    NewListingsPageComponent,
    EditListingsPageComponent,
    ListingDataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
