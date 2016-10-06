"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var lead_service_1 = require('./lead.service');
var survey_service_1 = require('./survey.service');
var SurveyComponent = (function () {
    function SurveyComponent(leadService, surveyService, formBuilder, router) {
        this.leadService = leadService;
        this.surveyService = surveyService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitPending = false;
        this.submitSuccess = false;
        this.submitError = false;
    }
    SurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leadId = this.router.routerState.snapshot.root.queryParams.lead;
        this.lead = {
            leadSurveys: []
        };
        this.surveys = [];
        this.surveyForm = this.formBuilder.group({
            'leadSurveys': this.formBuilder.array([this.formBuilder.group({
                    'answer': ['', forms_1.Validators.required],
                    'survey': this.formBuilder.group({
                        'idSurvey': [''],
                        'questionIndex': [''],
                        'questionDescription': ['']
                    })
                }),
                this.formBuilder.group({
                    'answer': ['', forms_1.Validators.required],
                    'survey': this.formBuilder.group({
                        'idSurvey': [''],
                        'questionIndex': [''],
                        'questionDescription': ['']
                    })
                }),
                this.formBuilder.group({
                    'answer': ['', forms_1.Validators.required],
                    'survey': this.formBuilder.group({
                        'idSurvey': [''],
                        'questionIndex': [''],
                        'questionDescription': ['']
                    })
                })])
        });
        this.surveyService.getSurveys().then(function (s) { return _this.surveys = s; }).then(function () { return _this.buildForm(); });
    };
    SurveyComponent.prototype.buildForm = function () {
        var _this = this;
        this.surveys.forEach(function (s) { return _this.lead.leadSurveys.push({
            'answer': '',
            'survey': {
                'idSurvey': s.idSurvey,
                'questionDescription': s.questionDescription,
                'questionIndex': s.questionIndex
            }
        }); });
        this.surveyForm.setValue(this.lead);
    };
    SurveyComponent.prototype.submit = function (model) {
        var _this = this;
        this.submitPending = true;
        this.leadService.put(this.leadId, model)
            .subscribe(function (data) { return _this.success(JSON.stringify(data)); }, function (error) { return _this.error(error); }, function () { return _this.complete(); });
    };
    SurveyComponent.prototype.success = function (value) {
        this.submitError = false;
        this.submitSuccess = true;
        this.surveyForm.reset();
    };
    SurveyComponent.prototype.error = function (error) {
        this.submitSuccess = false;
        this.submitError = true;
        this.submitPending = false;
    };
    SurveyComponent.prototype.complete = function () {
        this.submitPending = false;
    };
    SurveyComponent.prototype.ngAfterViewChecked = function () {
        $('.top-content').data("backstretch").resize();
    };
    SurveyComponent = __decorate([
        core_1.Component({
            selector: 'survey',
            templateUrl: 'app/survey.form.html'
        }),
        __param(0, core_1.Inject(lead_service_1.LeadService)),
        __param(1, core_1.Inject(survey_service_1.SurveyService)), 
        __metadata('design:paramtypes', [lead_service_1.LeadService, survey_service_1.SurveyService, forms_1.FormBuilder, router_1.Router])
    ], SurveyComponent);
    return SurveyComponent;
}());
exports.SurveyComponent = SurveyComponent;
//# sourceMappingURL=survey.component.js.map