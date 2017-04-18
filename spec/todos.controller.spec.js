describe('TodosController', () => {
  let ControllerToTest;
  let MockTodosFactory;

  beforeEach(() => {
    module('sampleApp');

    MockTodosFactory = {
      list: [],
      add: jasmine.createSpy(),
      clear: jasmine.createSpy()
    };

    inject(($controller) => {
      ControllerToTest = $controller('TodosController', { TodosFactory: MockTodosFactory });
    });
  });

  describe('init()', () => {
    it('should set inputText correctly', () => {
      expect(ControllerToTest.inputText).toEqual('');
    });
    it('should set list correctly', () => {
      expect(ControllerToTest.list).toEqual([]);
    });
  });

  describe('#isSubmitButtonDisabled()', () => {
    it('should be true when inputText is empty', () => {
      ControllerToTest.inputText = '';
      expect(ControllerToTest.isSubmitButtonDisabled()).toBe(true);
    });
    it('should be false when inputText contains a single character', () => {
      ControllerToTest.inputText = 'z';
      expect(ControllerToTest.isSubmitButtonDisabled()).toBe(false);
    });
    it('should be false when inputText contains several characters', () => {
      ControllerToTest.inputText = 'zyx';
      expect(ControllerToTest.isSubmitButtonDisabled()).toBe(false);
    });
  });

  describe('#isClearButtonDisabled()', () => {
    it('should be true when list is empty', () => {
      ControllerToTest.list = [];
      expect(ControllerToTest.isClearButtonDisabled()).toBe(true);
    });
    it('should be false when list contains a single item', () => {
      ControllerToTest.list = ['z'];
      expect(ControllerToTest.isClearButtonDisabled()).toBe(false);
    });
    it('should be false when list contains several items', () => {
      ControllerToTest.list = ['z', 'y', 'x'];
      expect(ControllerToTest.isClearButtonDisabled()).toBe(false);
    });
  });

  describe('#add()', () => {
    it('should call TodosFactory.add() with correct parameter', () => {
      const newTodo = 'laze around';

      ControllerToTest.inputText = newTodo;
      ControllerToTest.add();
      expect(MockTodosFactory.add).toHaveBeenCalledWith(newTodo);
    });
    it('should reset inputText', () => {
      const newTodo = 'laze around';

      ControllerToTest.inputText = newTodo;
      ControllerToTest.add();
      expect(ControllerToTest.inputText).toEqual('');
    });
  });

  describe('#clear()', () => {
    it('should call TodosFactory.clear()', () => {
      const newTodo = 'nothing';

      ControllerToTest.inputText = newTodo;
      ControllerToTest.add();
      ControllerToTest.clear();
      expect(MockTodosFactory.clear).toHaveBeenCalled();
    });
    it('should reset list', () => {
      const newTodo = 'nothing';

      ControllerToTest.inputText = newTodo;
      ControllerToTest.add();
      ControllerToTest.clear();
      expect(ControllerToTest.list).toEqual([]);
    });
  });
});
