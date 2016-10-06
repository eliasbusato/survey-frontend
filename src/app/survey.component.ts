import { Component, OnInit, Inject, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LeadService } from './lead.service';
import { Lead } from './lead.interface';
import { SurveyService } from './survey.service';
import { Survey } from './survey.interface';

@Component({
  selector: 'survey',
  templateUrl: 'survey.form.html'
})

export class SurveyComponent implements OnInit, AfterViewChecked {

	surveyForm: FormGroup;
	surveys : Survey[];
	lead: Lead;

    leadId: string;

    submitPending = false;
    submitSuccess = false;
    submitError = false;    

	constructor(
		@Inject(LeadService) private leadService: LeadService, 
		@Inject(SurveyService) private surveyService: SurveyService,
		private formBuilder: FormBuilder, 
		private router: Router) {
	}

	ngOnInit(): void {

        //this.leadId = this.router.routerState.snapshot.root.queryParams.lead;
        this.lead = {                  
            leadSurveys : []
        };
        this.surveys = [];

        this.surveyForm = this.formBuilder.group({            
            'leadSurveys': this.formBuilder.array([ this.formBuilder.group({
                'answer': ['', Validators.required],                
                'survey': this.formBuilder.group({
                    'idSurvey': [''],
                    'questionIndex': [''],
                    'questionDescription': ['']
                })
            }),
            this.formBuilder.group({
                'answer': ['', Validators.required],                
                'survey': this.formBuilder.group({
                    'idSurvey': [''],
                    'questionIndex': [''],
                    'questionDescription': ['']
                })
            }),
            this.formBuilder.group({
                'answer': ['', Validators.required],                
                'survey': this.formBuilder.group({
                    'idSurvey': [''],
                    'questionIndex': [''],
                    'questionDescription': ['']
                })
            })])
        });

		this.surveyService.getSurveys().then(s => this.surveys = s).then(() => this.buildForm());
    }

    buildForm(): void {
        this.surveys.forEach(s => this.lead.leadSurveys.push(
            { 
                'answer': '',                
                'survey': {
                    'idSurvey' : s.idSurvey,
                    'questionDescription' : s.questionDescription,
                    'questionIndex' : s.questionIndex 
                }
            }));        
        this.surveyForm.setValue(this.lead);
    }    

	submit(model: Lead) {
        this.submitPending = true;                
        this.leadService.put(this.leadId, model)
          .subscribe(
                data => this.success(JSON.stringify(data)),
                    error => this.error(error),
                        () => this.complete());

    }
    success(value) {
        this.submitError = false;
        this.submitSuccess = true;        
        this.surveyForm.reset();
    }
    error(error) {        
        this.submitSuccess = false;
        this.submitError = true;
        this.submitPending = false;        
    }
    complete() {        
        this.submitPending = false;        
    }

  	ngAfterViewChecked(): void {
    	//$('.top-content').data("backstretch").resize();
    }  
}