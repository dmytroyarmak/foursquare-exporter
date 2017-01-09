import { FoursquareExporterPage } from './app.po';

describe('foursquare-exporter App', function() {
  let page: FoursquareExporterPage;

  beforeEach(() => {
    page = new FoursquareExporterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
