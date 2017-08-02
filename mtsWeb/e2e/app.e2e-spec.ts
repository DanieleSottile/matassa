import { MtsWebPage } from './app.po';

describe('mts-web App', () => {
  let page: MtsWebPage;

  beforeEach(() => {
    page = new MtsWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
