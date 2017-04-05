import { BurgerjointsPage } from './app.po';

describe('burgerjoints App', () => {
  let page: BurgerjointsPage;

  beforeEach(() => {
    page = new BurgerjointsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
