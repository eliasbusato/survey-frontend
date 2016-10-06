import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }      	from './app.component';
import { SubscribeComponent }	from './subscribe.component';
import { SurveyComponent }		from './survey.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: "/subscribe", pathMatch: 'full' },
  	{ path: 'survey-frontend/subscribe', component: SubscribeComponent },
  	{ path: 'survey-frontend/survey', component: SurveyComponent }	
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
