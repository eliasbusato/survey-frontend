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
var lead_service_1 = require('./lead.service');
var SubscribeComponent = (function () {
    function SubscribeComponent(leadService, formBuilder) {
        this.leadService = leadService;
        this.formBuilder = formBuilder;
        this.submitPending = false;
        this.submitSuccess = false;
        this.submitError = false;
    }
    SubscribeComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    SubscribeComponent.prototype.buildForm = function () {
        var emailRegex = "([a-zA-Z0-9_.]{1}[a-zA-Z0-9_.]*)((@[a-zA-Z]{2}[a-zA-Z]*)[\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))";
        this.subscribeForm = this.formBuilder.group({ 'email': ['', this.validEmail] });
    };
    SubscribeComponent.prototype.validEmail = function (formControl) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(formControl.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    SubscribeComponent.prototype.subscribe = function (value) {
        var _this = this;
        this.submitPending = true;
        this.leadService.post(value)
            .subscribe(function (data) { return _this.success(JSON.stringify(data)); }, function (error) { return _this.error(error); }, function () { return _this.complete(); });
    };
    SubscribeComponent.prototype.success = function (value) {
        this.submitError = false;
        this.submitSuccess = true;
        this.subscribeForm.reset();
    };
    SubscribeComponent.prototype.error = function (error) {
        this.submitSuccess = false;
        this.submitError = true;
        this.submitPending = false;
    };
    SubscribeComponent.prototype.complete = function () {
        this.submitPending = false;
    };
    SubscribeComponent.prototype.ngAfterViewChecked = function () {
        $('.top-content').data("backstretch").resize();
    };
    SubscribeComponent = __decorate([
        core_1.Component({
            selector: 'subscribe',
            templateUrl: 'app/subscribe.form.html'
        }),
        __param(0, core_1.Inject(lead_service_1.LeadService)), 
        __metadata('design:paramtypes', [lead_service_1.LeadService, forms_1.FormBuilder])
    ], SubscribeComponent);
    return SubscribeComponent;
}());
exports.SubscribeComponent = SubscribeComponent;
//# sourceMappingURL=subscribe.component.js.map