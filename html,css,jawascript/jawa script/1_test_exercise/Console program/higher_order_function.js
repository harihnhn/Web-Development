var num = 10;
//var x = multiplier(3);
var ans = multiplier(3)(num);
console.log(ans);

//function definition(higher order function)
function multiplier(x)
{
  return function(y)
  {
    return x*y;
  }
}