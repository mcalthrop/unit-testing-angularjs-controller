describe('TodosController', () => {
  var TodosController;

  beforeEach(() => {
    module('sampleApp');

    inject(($controller) => {
      TodosController = $controller('TodosController');
    });
  });

  it('should expose title', () => {
    expect(TodosController.inputText).toEqual('');
  });
});
