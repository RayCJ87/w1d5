var numList = [];

module.exports = {
 numData : numList,
 storeANum : function (num) {
  numList.push(num);
  return numList;
},
 sortTheList : function (numList) {
  var sorted = numList.sort(function (a, b){return a-b});
  return sorted;
}
}