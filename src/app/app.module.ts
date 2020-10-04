import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListingComponent } from './listing/listing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './grid/grid.component';
import { RouterModule } from '@angular/router';
import { ExpansioComponent } from './expansio/expansio.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { NumbersComponent } from './numbers/numbers.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { PoetryComponent } from './poetry/poetry.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import { ResumeComponent } from './resume/resume.component';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListingComponent,
    GridComponent,
    ExpansioComponent,
    NumbersComponent,
    PoetryComponent,
    HomeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatPaginatorModule,
    HttpClientModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'grid', component: GridComponent},
      {path: 'contacts', component: ExpansioComponent},
      {path: 'poetry', component: PoetryComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
