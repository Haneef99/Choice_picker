function num_digits(x)
{
    let ans=0;
    while(x>=1)
    {
        ans++;
        x=x/10;
    }
    return ans;
}
function random_number()
{
    let x=Math.random();
    let y=Math.pow(10,15);
    return Math.floor(x*y);
}
function random_number_between(a,b)
{
    if(a>b)
    {
        let temp=a;
        a=b;
        b=temp;
    }
    let size=(b-a+1);
    let val=random_number();
    val=val%size;
    val=val+a;
    return val;
}
function array_sum(arr,n)
{
    let sum=0;
    let j=0;
    while(j<n)
    {
        sum=sum+arr[j];
        j++;
    }
    return sum;
}
function choice_picker(weights,n)
{
    let size=array_sum(weights,n);
    let pick=random_number_between(1,size);
    print(pick);
    print("\n");
    let j=0;
    let nsum=0;
    while(j<n && nsum<pick)
    {
        nsum=nsum+weights[j];
        j++;
    }
    j--;
    return j;
}



let arr=new Array(1000,2,1000);
print(choice_picker(arr,3)+1);
