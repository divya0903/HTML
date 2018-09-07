
function calc(p,n,r)
{
	var res=0;
	var s=1+(r/100);
	var pow=powerN(s,n);
	
	var s2=pow*p;
	var res=s2-p;
	return res;
	
}
function powerN(a,n)
{
	var p=1;
	for(var i=0;i<n;i++)
	{
		 p=p*a;
	}
	return p;
}