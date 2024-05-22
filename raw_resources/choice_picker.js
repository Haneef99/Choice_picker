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
function to_int(str) //str is a string of numbers
{
    let ans=0;
    let j=0;
    let n=str.length;
    while(j<n)
    {
        ans=(ans*10)+Number(str[j]);
        print(ans);
        j++;
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
function choice_picker(weights,n) //Input is array of integers and length n
{
    let size=array_sum(weights,n);
    let pick=random_number_between(1,size);
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


function choice_picker_strin(str_weights,n) // Use this function if input is array of strings (of numbers) instead of array of integers
{
    let weights=[];
    let j=0;
    while(j<n)
    {
        weights[j]=Number(str_weights[j]);
        j++;
    }
    return choice_picker(weights,n);
}



let arr=new Array(1000,2,1000);
print(choice_picker(arr,3)+1);
