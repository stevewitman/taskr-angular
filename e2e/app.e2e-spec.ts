import { TaskrAngularPage } from './app.po';

describe('taskr-angular App', function() {
  let page: TaskrAngularPage;

  beforeEach(() => {
    page = new TaskrAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
