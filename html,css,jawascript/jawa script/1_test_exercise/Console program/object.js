//object
var obj1 = {
    key1:"value1",
    key2 : 'value2',
    key3 : 1,
    key4 : 2.0,
    key5 : {key5of1 : 5.1, key5of2 : 'five point two'}
}

console.log(obj1);
console.log(obj1.key1 + "\n");
console.log(obj1.key5.key5of1 + "\t" + obj1.key5.key5of2);