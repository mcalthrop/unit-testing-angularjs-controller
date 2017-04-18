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

  describe('#isSubmitButtonDisabled()', () => {
    it('should be true when inputText is empty', () => {
      TodosController.inputText = '';
      expect(TodosController.isSubmitButtonDisabled()).toBe(true);
    });
    it('should be false when inputText contains a single character', () => {
      TodosController.inputText = 'z';
      expect(TodosController.isSubmitButtonDisabled()).toBe(false);
    });
    it('should be false when inputText contains several characters', () => {
      TodosController.inputText = 'zyx';
      expect(TodosController.isSubmitButtonDisabled()).toBe(false);
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

  describe('#clear()', () => {
    it('should call TodosFactory.clear()', () => {
      const newTodo = 'nothing';

      TodosController.inputText = newTodo;
      TodosController.add();
      TodosController.clear();
      expect(MockTodosFactory.clear).toHaveBeenCalled();
    });
    it('should reset list', () => {
      const newTodo = 'nothing';

      TodosController.inputText = newTodo;
      TodosController.add();
      TodosController.clear();
      expect(TodosController.list).toEqual([]);
    });
  });
});
