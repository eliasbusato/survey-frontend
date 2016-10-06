import { SurveyFrontendPage } from './app.po';

describe('survey-frontend App', function() {
  let page: SurveyFrontendPage;

  beforeEach(() => {
    page = new SurveyFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
