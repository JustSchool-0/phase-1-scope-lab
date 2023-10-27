// noinspection ES6ConvertVarToLetConst
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  // noinspection JSUndeclaredVariable
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  // noinspection JSUndeclaredVariable
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'ted';

function changeLeastFavoriteCustomer() {
  // noinspection JSConstantReassignment
  leastFavoriteCustomer = 'bob';
}
