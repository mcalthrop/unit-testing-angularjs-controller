describe('TodosController', () => {
  var TodosController;

  beforeEach(() => {
    module('sampleApp');

    inject(($controller) => {
      TodosController = $controller('TodosController');
    });
  });

  describe('#init', () => {
    it('should set inputText correctly', () => {
      expect(TodosController.inputText).toEqual('');
    });
    it('should set list correctly', () => {
      expect(TodosController.list).toEqual([]);
    });
  });
});
