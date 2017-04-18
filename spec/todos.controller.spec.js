describe('TodosController', () => {
  let TodosController;
  let MockTodosFactory;

  beforeEach(() => {
    module('sampleApp');

    MockTodosFactory = {
      list: [],
      add: jasmine.createSpy(),
      clear: jasmine.createSpy()
    };

    inject(($controller) => {
      TodosController = $controller('TodosController', { TodosFactory: MockTodosFactory });
    });
  });

  describe('init()', () => {
    it('should set inputText correctly', () => {
      expect(TodosController.inputText).toEqual('');
    });
    it('should set list correctly', () => {
      expect(TodosController.list).toEqual([]);
    });
  });

  describe('#add()', () => {
    it('should call TodosFactory.add() with correct parameter', () => {
      const newTodo = 'laze around';

      TodosController.inputText = newTodo;
      TodosController.add();
      expect(MockTodosFactory.add).toHaveBeenCalledWith(newTodo);
    });
    it('should reset inputText', () => {
      const newTodo = 'laze around';

      TodosController.inputText = newTodo;
      TodosController.add();
      expect(TodosController.inputText).toEqual('');
    });
  });
});
