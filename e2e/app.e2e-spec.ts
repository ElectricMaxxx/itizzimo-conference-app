import { ConferenceAppPage } from './app.po';

describe('conference-app App', () => {
  let page: ConferenceAppPage;

  beforeEach(() => {
    page = new ConferenceAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
