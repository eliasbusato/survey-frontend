import { NgModule }                                 from '@angular/core';
import { BrowserModule }                            from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { HttpModule }                               from '@angular/http';

import { AppComponent }                             from './app.component';
import { SubscribeComponent }                       from './subscribe.component';
import { SurveyComponent }                          from './survey.component';
import { LeadService }                              from './lead.service';
import { SurveyService }                            from './survey.service';

import { routing }                                  from './app.routing';


@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    SubscribeComponent,
    SurveyComponent  	
  ],
  providers: [
    LeadService,
    SurveyService
  ],
  bootstrap: [ 
  	AppComponent
  ]
})

export class AppModule { }
