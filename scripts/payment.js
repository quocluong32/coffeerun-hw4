(function (window) {
  "use strict";
  var FORM_SELECTOR = '[data-payment="form"]';
  var App = window.App;
  var $ = window.jQuery;

  var FormHandler = App.FormHandler;

  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function (data) {
    console.log(data.title);
    var thankyouMessage = "Thank you for your payment " + data.title + " " + data.username + ".";
    $("#modalText").replaceWith(thankyouMessage);
    $("#ex1").modal();
  });

  console.log(formHandler);
})(window);
