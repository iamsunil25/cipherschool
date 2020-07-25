//1. convert minute to seconds
function mtos(m) {
    var result = m*60;
         console.log(result);
      
}
 mtos(678);
 

 //2. evenly divided or not
 var number= divide(25,5)
 function divide(m,n){
     if(m/n && m%n==0 ){
        return true;
     }
     else
     {
     return false;
     }
 }
 console.log(number);

 //3. occurance of character in a string
function charcount(sunil,s){
    
    var count=0;
    for(var i=0;i<sunil.length-1;i++)
    {
        if(sunil.charAt(i) == s)
        {
            count++;
        }
    }
    return count;
}
console.log(charcount("ssussnssil","s"));
//4. Add up the number from single number
function addup(n)
{
    return n*(n+1)/2;
}

console.log(addup(5));
//5. replace vowel with number
function replacevowel(m)
{
    var n=m.split(' ');
    var s="";
    for(var i=0;i<n.length-1;i++)
   {
       if(n[i]=="a"){
           s[i]=s[i]+'1';
       }
       else if (n[i]=="e")
       {
        s[i]=s[i]+'2';
    }
     else if(n[i]=="i") 
    {
        s[i]=s[i]+'3';
    }
    else if (n[i]=="o")
    {
        s[i]=s[i]+'4';
    }
    else if(n[i]=="u"){
        s[i]=s[i]+'5';
    }
   }
    return s;

}
console.log(replacevowel("karachi"));
//6. reverse word
function Reverse(m,n)
{ let s="";
  var x = m.split(' ');
  for (let i = 0; i < x.length-1; i++)
  {
    
      if (x[i][0]==n) {
         s += x[i].split("").reverse().join("");
       } 
    else {
        s += x[i];
        }
 }
 console.log(s);

}
Reverse("sun has been set",'s');

    // 7. Hitting the Jackpot

       function jackpot(arr)
       {
           let s= arr[0];

           for(let i=1;i<arr.length;i++)
           {
               if(arr[i]!=s)
               {
                   return false;
               }

           }
           return true;

       }
       let arr = ['sun','shah','sunny'];
       console.log(jackpot(arr));





      // 8. Remove Duplicates from an Array
       function getUnique(array){
        var uniqueArray = [];
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }

    var names = ["ram", "shyam", "geeta"];
    console.log(getUnique(names)); 
//9. data type
      function type(a)
      {
          console.log(typeof(a));

      }
      type(1);
      type("sunil");
      type([2.3,4]);
      type(true);

