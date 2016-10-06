"use strict";
var router_1 = require('@angular/router');
var subscribe_component_1 = require('./subscribe.component');
var survey_component_1 = require('./survey.component');
var appRoutes = [
    { path: '', redirectTo: "/subscribe", pathMatch: 'full' },
    { path: 'subscribe', component: subscribe_component_1.SubscribeComponent },
    { path: 'survey', component: survey_component_1.SurveyComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map