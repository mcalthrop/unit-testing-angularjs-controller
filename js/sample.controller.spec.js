describe('SampleController', () => {
  var SampleController;

  beforeEach(() => {
    module('sampleApp');

    inject(($controller) => {
      SampleController = $controller('SampleController');
    });
  });

  it('should expose title', () => {
    expect(SampleController.inputText).toEqual('');
  });
});
