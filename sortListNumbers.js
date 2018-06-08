var list = [];


function compareNum(a, b) {
  return a - b;
}


var sortNumbers = {
  addToList: function(num) {
    list.push(num);
  },
  sortList: function() {
    return list.sort(compareNum);
  }
};

// sortNumbers.addToList = function(num) {
//   list.push(num);
// };


// sortNumbers.sortList = function() {
//   list.sort(compareNum);
// };

module.exports = sortNumbers;
