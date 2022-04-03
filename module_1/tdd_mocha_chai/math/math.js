const math = {
  sum: function(arr) {
    let sum = 0;
    for (num of arr) {
      sum += num;
    }
    return sum;
  },
  
  abs: function(x) {
    return x > 0 ? x : -x;
  },

  odd(x) {
    if (typeof x !== 'number') {
      throw new Error('input should be a number')
    }
    // if (x % 2 === 1) {
    //   return true;
    // } else {
    //   return false;
    // }

    // return x % 2 === 1 ? true : false;

    return x % 2 === 1;
  }
}

module.exports = math