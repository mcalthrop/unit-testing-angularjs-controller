function SampleController() {
  const controller = this;

  controller.inputText = '';

  controller.isSubmitButtonDisabled = function () {
    return !controller.inputText;
  };
}

angular
  .module('sampleApp')
  .controller('SampleController', SampleController);
