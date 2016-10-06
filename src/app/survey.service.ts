import {Inject} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import { Survey } from './survey.interface';

export class SurveyService {

	restURL = '//survey-rest.herokuapp.com/surveys/';

	constructor(@Inject(Http) private http:Http) {
		this.http = http;
	}

	getSurveys(): Promise<Survey[]> {
    	return this.http.get(this.restURL)
    				.toPromise()
						.then(this.extractData)
                			.catch(this.handleError);
  	}

  	private extractData(res: Response) {
    	let body = res.json();    	  	
    	return body || [];
  	}  

  	private handleError (error: any) {
    	let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    	console.error(errMsg);
    	return Observable.throw(errMsg);
	}
}