import { Component, Inject, OnInit, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LeadService } from './lead.service';

@Component({
    selector: 'subscribe',
    templateUrl: 'subscribe.form.html'
})

export class SubscribeComponent implements OnInit, AfterViewChecked {

    subscribeForm: FormGroup;
    submitPending = false;
    submitSuccess = false;
    submitError = false;
   
    constructor(@Inject(LeadService) private leadService: LeadService, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        let emailRegex = `([a-zA-Z0-9_.]{1}[a-zA-Z0-9_.]*)((@[a-zA-Z]{2}[a-zA-Z]*)[\\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))`;        
        this.subscribeForm = this.formBuilder.group({'email': ['', this.validEmail]});
    }

    validEmail(formControl: FormControl) {

        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        return EMAIL_REGEXP.test(formControl.value) ? null : {
            validateEmail: {
                valid: false
              }
        };
    }

    subscribe(value: string) {
        this.submitPending = true;                
        this.leadService.post(value)
          .subscribe(
                data => this.success(JSON.stringify(data)),
                    error => this.error(error),
                        () => this.complete());
    }
    success(value) {
        this.submitError = false;
        this.submitSuccess = true;        
        this.subscribeForm.reset();
    }
    error(error) {        
        this.submitSuccess = false;
        this.submitError = true;
        this.submitPending = false;        
    }
    complete() {        
        this.submitPending = false;        
    }

    public ngAfterViewChecked(): void {
        //$('.top-content').data("backstretch").resize();
    }  
}