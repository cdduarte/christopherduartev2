import { Christopherduartev2Page } from './app.po';

describe('christopherduartev2 App', function() {
  let page: Christopherduartev2Page;

  beforeEach(() => {
    page = new Christopherduartev2Page();
  });

  it('should display message saying introduction', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Introduction');
  });
});
