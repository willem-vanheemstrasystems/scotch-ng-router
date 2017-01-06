import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CatListComponent } from './cats/cat-list.component';
import { CatDetailsComponent } from './cats/cat-details.component';
import { DogListComponent } from './dogs/dog-list.component';
import { DogDetailsComponent } from './dogs/dog-details.component';
import { PetService } from './shared/model/pet.service';
import { Pet } from './shared/model/pet';
import { AppRouting } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRouting],
  declarations: [
    AppComponent,
    CatListComponent,
    CatDetailsComponent,
    DogListComponent,
    DogDetailsComponent
  ],
  provider: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
