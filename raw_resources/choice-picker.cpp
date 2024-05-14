#include <stdio.h>
#include <bits/stdc++.h>
void initialize_random()
{
    srand(time(0));
}
int get_random_range(int a,int b)
{
    if(a>b)
    b=a;
    int x=rand();
    int len=b-a+1;
    int ans=x%len;
    ans=ans+a;
    return ans;

}
long long array_sum(int* arr,int n)
{
    long long sum=0;
    int j=0;
    while(j<n)
    {
        sum=sum+(long long)arr[j];
        j++;
    }
    return sum;
}
void scan_array(int* arr,int n)
{
    int j=0;
    while(j<n)
    {
        scanf("%d ",arr+j);
        j++;
    }
}
int choice_picker(int* weights,int n)
{
    long long sum=array_sum(weights,n);
    int pick=get_random_range(1,sum);
    printf("pick : %d\n",pick);
    int j=0;
    long long nsum=0;
    while(j<n && nsum<pick)
    {
        nsum=nsum+weights[j];
        j++;
    }
    j--;
    return j;
    
}
int main()
{
    initialize_random();
    int n;
    scanf("%d ",&n);
    int arr[n];
    scan_array(arr,n);
    int x=choice_picker(arr,n);
    printf("\nchoice is : %d\n",x+1);
}