import { AngularDemoPage } from './app.po';

describe('angular-demo App', () => {
  let page: AngularDemoPage;

  beforeEach(() => {
    page = new AngularDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
