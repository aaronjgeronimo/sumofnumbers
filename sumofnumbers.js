let test = [1, 2, 3, 4, 5];

function sumFor(data) {
  let total = 0;
  for (const num of data) {
    total += num;
  }
  return total;
}
console.log(sumFor(test));

function sumWhile(data){
  let total = 0;
  let count = 0;
    while(count < data.length){
      total += data[count];
      count++;
    }
  return total;
}
console.log(sumWhile(test));

function sumRecursion(data){
  if(data.length == 0){
        return 0;
    } else {
        return data[0] + sumRecursion(data.slice(1, data.length));
    }
}
console.log(sumRecursion(test));

function sumTheSimpleWay(data){
  return _.reduce(data, function(memo, num){ return memo + num;}, 0);
}
console.log(sumRecursion(test));
