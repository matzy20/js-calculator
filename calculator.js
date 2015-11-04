/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule () {
  // body...



  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  var memory = 0;
  var total = 0;

  var calculator = {

   load: function (number) {
    if (typeof number !== "number") {
      return "error error!";
    }
    total = number;
    return total;
   },
   getTotal: function () {

    return total;

   },
   add: function (number) {

    total = number + total;
    return total;

   },
   subtract: function (number) {

    total = total - number;
    return total;
   },

   multiply: function (number) {

    total = total * number;
    return total;
   },

   divide: function (number) {

    total = total / number;
    return total;
   },

   recallMemory: function () {

    return memory;
   },

   saveMemory: function (number) {
    memory = total;
    return memory;
   },

   clearMemory: function () {
    memory = 0;
    return memory;
   },
  };
  return calculator;
}









  /**
   * Return the value of `total`
   * @return { Number }
   */



  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */


