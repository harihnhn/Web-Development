var n, n1, rev = 0, cnt = -1, fov, pov;
n = 1203451;
n1 = n;
//reverse number
while (n1 > 0)
{
    rev = (rev * 10) + (n1 % 10);
    n1 = Math.floor(n1/10); //Math.floor() function for rond of the value
    cnt++;
}
while (rev > 0)
{
    fov = rev % 10;
    pov = PlaceValue(fov, cnt--);
    console.log("\nFace of Value : " + fov + "\nPlace of Value : " + pov);
    rev = Math.floor(rev/10);
}

//function to find place of a value
function PlaceValue(num, pos)
{
    //(num > 0) ? return num * (power(10, pos)) : return num + (power(10, pos));  
    if (num > 0)
        return num * (power(10, pos));
    else
        return num + (power(10, pos));

}

//power function
function power(b, p)
{
    var n = 1;
    while (p-- > 0)
        n *= b;
    return n;
}