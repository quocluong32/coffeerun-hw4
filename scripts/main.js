(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';     // CHOOSE ONLY ONE...
  //  var SERVER_URL = 'https://co.audstanley.com/coffeeorders';    // if running on the shared server
  //var SERVER_URL = 'http://localhost:3000/coffeeorders';          // if running locally
  var SERVER_URL = 'https://firestore.googleapis.com/v1/projects/coffeerun-19e16/databases/(default)/documents/coffeeOrders/'
  var App = window.App;
  var Truck = App.Truck;
  // eslint-disable-next-line no-unused-vars
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var CheckList = App.CheckList;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  // var truck = new Truck('ncc-1701', new DataStore());
  var truck = new Truck('ncc-1701', remoteDS);
  window.truck = truck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(truck.deliverOrder.bind(truck));
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
      truck.createOrder.call(truck, data);
      checkList.addRow.call(checkList, data);
  });
  console.log(formHandler);

  formHandler.addInputHandler(Validation.isCompanyEmail);
})(window);


//Project ID = coffeerun-19e16  
//getAll https://firestore.googleapis.com/v1/projects/coffeerun-19e16/databases/(default)/documents/coffeeOrders/abc@bignerdranch.com

//POST https://firestore.googleapis.com/v1/{parent=projects/*/databases/*/collectionGroups/*}/indexes

//POST https://firestore.googleapis.com/v1/{parent=projects/*/databases/*/documents/**}/{collectionId}

//POST https://firestore.googleapis.com/v1/projects/coffeerun-19e16/databases/(default)/documents//[COLLECTIONID] HTTP/1.1

