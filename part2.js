let num= 61;

for (let i=num+1;i<=100;i++)
{
    let isPrime = true;
    for(j=num; j > 1; j--)
    {
        if (i % j === 0)
        isPrime = false;
    }
    if(isPrime)
    {
        console.log(i);
        break;
    } 
}