import { GoalsAppAngularPage } from './app.po';

describe('goals-app-angular App', () => {
  let page: GoalsAppAngularPage;

  beforeEach(() => {
    page = new GoalsAppAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
