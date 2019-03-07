import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { PeopleListComponent } from './components/simple-form/components/people-list/people-list.component';
import { HeroComponent } from './components/component/hero/hero.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { UtilServicesService } from '../services/util-services.service';
import { TryComponent } from './components/try/try.component';

@NgModule({
  declarations: [
    
    AppComponent,
    SimpleFormComponent,
    PeopleListComponent,
    HeroComponent,
    HeroDetailComponent,
    TryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UtilServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
