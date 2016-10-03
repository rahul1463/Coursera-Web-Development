function first()
{
	var user,n,flag=0,count=0;
	var color=["cyan","yellow","red","green","purple","Indigo","gray","blue","black","navy"];
	color.sort();
	
	n=color.length;
	var number=(Math.random()*n);
	number=Math.floor(number);
	user=prompt("Hello Guys\n\n I am thinking of one of these colors\n\n Tell which color I am thinking of\n\n"+color);

	
	while(flag!=1)
		{	
			var x=color.indexOf(user);
			if(x==-1)
			{
				alert("Enter correct color as given in list\n\n");
				user=prompt("\nEnter other color\n\n"+color);
			}
			else
			{
			
			if(x<number)
				{	alert("Your guess is not correct\n\n");
					user=prompt("\nEnter other color\n\n"+color);
					count++;
				flag=0;
				}
			else if(x>number)
				{		alert("Your guess is not correct\n\n");
					user=prompt("\nEnter other color\n\n"+color);
				flag=0;
				count++;
				}
			else if(x==number)
				{
				alert("Congratulations ....correct guess\n\nNumber of guesses used by you are  "+count);
				flag=1;
				}
			}
		}
}