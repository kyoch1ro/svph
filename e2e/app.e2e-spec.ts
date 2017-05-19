import { SvphPage } from './app.po';

describe('svph App', () => {
  let page: SvphPage;

  beforeEach(() => {
    page = new SvphPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
