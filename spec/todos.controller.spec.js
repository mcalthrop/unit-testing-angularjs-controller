describe('TodosController', () => {
  let controllerToTest;
  let MockTodosFactory;

  beforeEach(() => {
    module('sampleApp');

    MockTodosFactory = {
      list: [],
      add: jasmine.createSpy(),
      clear: jasmine.createSpy()
    };

    inject(($controller) => {
      controllerToTest = $controller('TodosController', { TodosFactory: MockTodosFactory });
    });
  });

  describe('init()', () => {
    it('should set inputText correctly', () => {
      expect(controllerToTest.inputText).toEqual('');
    });
    it('should set list correctly', () => {
      expect(controllerToTest.list).toEqual([]);
    });
  });

  describe('#isSubmitButtonDisabled()', () => {
    it('should be true when inputText is empty', () => {
      controllerToTest.inputText = '';
      expect(controllerToTest.isSubmitButtonDisabled()).toBe(true);
    });
    it('should be false when inputText contains a single character', () => {
      controllerToTest.inputText = 'z';
      expect(controllerToTest.isSubmitButtonDisabled()).toBe(false);
    });
    it('should be false when inputText contains several characters', () => {
      controllerToTest.inputText = 'zyx';
      expect(controllerToTest.isSubmitButtonDisabled()).toBe(false);
    });
  });

  describe('#isClearButtonDisabled()', () => {
    it('should be true when list is empty', () => {
      controllerToTest.list = [];
      expect(controllerToTest.isClearButtonDisabled()).toBe(true);
    });
    it('should be false when list contains a single item', () => {
      controllerToTest.list = ['z'];
      expect(controllerToTest.isClearButtonDisabled()).toBe(false);
    });
    it('should be false when list contains several items', () => {
      controllerToTest.list = ['z', 'y', 'x'];
      expect(controllerToTest.isClearButtonDisabled()).toBe(false);
    });
  });

  describe('#add()', () => {
    it('should call TodosFactory.add() with correct parameter', () => {
      const newTodo = 'laze around';

      controllerToTest.inputText = newTodo;
      controllerToTest.add();
      expect(MockTodosFactory.add).toHaveBeenCalledWith(newTodo);
    });
    it('should reset inputText', () => {
      const newTodo = 'laze around some more';

      controllerToTest.inputText = newTodo;
      controllerToTest.add();
      expect(controllerToTest.inputText).toEqual('');
    });
  });

  describe('#clear()', () => {
    it('should call TodosFactory.clear()', () => {
      const newTodo = 'nothing';

      controllerToTest.inputText = newTodo;
      controllerToTest.add();
      controllerToTest.clear();
      expect(MockTodosFactory.clear).toHaveBeenCalled();
    });
    it('should reset list', () => {
      const newTodo = 'nothing';

      controllerToTest.inputText = newTodo;
      controllerToTest.add();
      controllerToTest.clear();
      expect(controllerToTest.list).toEqual([]);
    });
  });
});
