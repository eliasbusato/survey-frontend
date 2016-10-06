import {Inject} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

export class LeadService {

	restURL = 'http://survey-rest.herokuapp.com/leads/';

	constructor(@Inject(Http) private http:Http) {
		this.http = http;
	}

	post(value) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });
	    let body = JSON.stringify(value);
	    console.log(body);
	    return this.http.post(this.restURL, body, options)
	    	.map(this.extractData)
	    		.catch(this.handleError);
	}

	put(leadId, model) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });
	    let body = JSON.stringify(model);
	    console.log(body);
	    return this.http.put(this.restURL + leadId, body, options)
	    	.map(this.extractData)
	    		.catch(this.handleError);
	}

	extractData(res: Response) {    	
	    let body = res.json();
    	return body.data || {};
  	}

  	handleError (error: any) {    	
    	let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    	console.error(errMsg);
    	return Observable.throw(errMsg);
  	}
}