// 1. Declare a variable in global scope called customerName using var and assign it 'bob'.
var customerName = 'bob';

// 2. Function to uppercase the global customerName variable.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function that declares a global variable bestCustomer and assigns it 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob'; // No var/let/const, so it's global
}

// 4. Function to overwrite the global bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant in global scope called leastFavoriteCustomer.
const leastFavoriteCustomer = 'someone';

// 6. Function that tries to change the constant leastFavoriteCustomer.
function changeLeastFavoriteCustomer() {
  // This will throw an error because leastFavoriteCustomer is a const
  leastFavoriteCustomer = 'someone else';
}
