import { GroceriesPage } from './app.po';

describe('groceries App', () => {
  let page: GroceriesPage;

  beforeEach(() => {
    page = new GroceriesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
