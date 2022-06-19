// q1
// function setCase(name)
// {
//     firstLetter = name.charAt(0)
// firstLetter = firstLetter.toUpperCase();
// remainingLetters = name.slice(1)
// remainingLetters = remainingLetters.toLowerCase();
// name= firstLetter + remainingLetters;
// return name

// }


// firstName = prompt('Enter your first name')
// firstName = setCase(firstName)

// lastName = prompt('Enter your last name')
// lastName = setCase(lastName)

// fullName = firstName + " " + lastName
// Greeting = "Dear " + fullName + "\n Welcome to my Website"

// alert(Greeting)


// q2
// userInp = prompt('Enter your favorite mobile phone model.')
// document.write("My favourite phone is: " + userInp)
// strLength = userInp.length;
// document.write("\n Length of String: " + strLength)



// q3
// str = "Pakistani"
// i = str.indexOf("n")
// document.write("String: " + str)
// document.write('<br>')
// document.write("Index of 'n': " + i)



// q4
// str = "Hello World"
// i = str.lastIndexOf("l")
// document.write("String: " + str)
// document.write('<br>')
// document.write("Index of 'n': " + i)



// q5
// str = "Pakistani"
// char = str.charAt(3)
// document.write("String: " + str)
// document.write('<br>')
// document.write("Character at Index 3: " + char)



// q6
// function setCase(name)
// {
//     firstLetter = name.charAt(0)
// firstLetter = firstLetter.toUpperCase();
// remainingLetters = name.slice(1)
// remainingLetters = remainingLetters.toLowerCase();
// name= firstLetter + remainingLetters;
// return name

// }

// firstName = prompt('Enter your first name')
// firstName = setCase(firstName)

// lastName = prompt('Enter your last name')
// lastName = setCase(lastName)

// fullName = firstName + " " + lastName
// Greeting = "Dear ".concat(fullName,"\n Welcome to my Website")

// alert(Greeting)



// q7
// var city = "Hyderabad"
// var newCity = city.replace("Hyder","Islam")
// document.write("City: " + city)
// document.write("<br>")
// document.write("After Replacement: " + newCity)




// q8
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var newMessage = message.replace(/and/g,"&")
// document.write(message)
// document.write("<br>")
// document.write(newMessage)



// q9
// str = "472"
// num = parseInt(str)
// document.write("Value= " + str )
// document.write("<br>")
// document.write("Type: " + typeof(str) )
// document.write("<br>")
// document.write("Value= " + num )
// document.write("<br>")
// document.write("Type: " + typeof(num) )

// q10
// str=prompt("Enter a word")
// strN=str.toUpperCase();
// document.write("userInput: "+ str +"<br> Upper case: "+ strN )

// q11
// function setTitleCase(str)
// {
//     firstLetter = str.charAt(0)
// firstLetter = firstLetter.toUpperCase();
// remainingLetters = str.slice(1)
// remainingLetters = remainingLetters.toLowerCase();
// str= firstLetter + remainingLetters;
// return str

// }
// userInp = prompt("ENTER YOUR STRING")
// titleCase = setTitleCase(userInp)
// document.write("User Input: " + userInp)
// document.write("<br>")
// document.write("Title Case: " + titleCase)

// q12
// var num = 35.36;
// str = num.toString();
 
// str1=str.slice(0,2)
 
// str2=str.slice(3,5)
 
// str=str1+str2
// document.write("NUmber: " + num + "<br> String: "+ str) 

// q13
// var str = prompt ("enter username")
// for (i=0;i<str.length;i++){
//     console.log(str.charCodeAt(i))
//     if ( str.charCodeAt(i) == 33 || str.charCodeAt(i) == 46 ||str.charCodeAt(i) == 44 || str.charCodeAt(i) == 64 )
//     {
//         alert("don't use !.,@")
//         console.log("if")
//         break;
//     }
    
// }

// q14
// A = ["cake" , "apple pie" , "cookie" , "chips", "patties"]
// var str= prompt("enter the item to be searched")
// strlowcase=str.toLowerCase();
// flag=0;
// for (i=0;i<str.length;i++)
// {
//    if(A[i] == strlowcase){
//        alert(str + " is found at index "+ i + " at our bakery.")
//        flag=1;
//    }   
// }
// if( flag == 0)
// {
//     alert("sorry "+ str + " is not available in our bakery ")
// }

// Q15
// var pswd= prompt("enter password")
// if (pswd.length<6 )
// {
//     alert("password must be atleast 6 characters long <br> please enter a valid password")
 
// }
// document.write(pswd)
// for (i=0;i<pswd.length;i++)
// {
//     if (i===0 &&( pswd.charCodeAt(i) >= 48 )&& (pswd.charCodeAt(i) <= 57) ){
//         // console.log(pswd.charCodeAt(i) >= 48)
//         // console.log(pswd.charCodeAt(i) <= 57)
//         // console.log(i)
// alert("password cant start with a number <br> please enter a valid password")
//     }
//    else  if(pswd.charCodeAt(i) < 48 ||( pswd.charCodeAt(i) > 57 && pswd.charCodeAt(i) < 65 ) ||( pswd.charCodeAt(i) > 90 && pswd.charCodeAt(i) < 97 ) || pswd.charCodeAt(i) >122 )
//     {
//         // console.log(pswd.charCodeAt(i) < 48 )
//         // console.log(pswd.charCodeAt(i) > 57 && pswd.charCodeAt(i) < 65 )
//         // console.log(pswd.charCodeAt(i) > 90 )
//         // console.log(pswd.charAt(i))
//         alert("password should contain only alphabets and numbers <br> please enter a valid password")
//     }
          
// }

// q16 
// var university = 'University of Karachi';
// var myarr=university.split("");
// for(i=0;i<myarr.length;i++){
//     document.write(myarr[i]+"<br>")
// }

// q17
// var str=prompt("enter any word")
// document.write("user input: "+str)
// lastCh= str.charAt(str.length-1)
// document.write("<br>last character: "+lastCh)

// q18

// var str= 'The quick brown fox jumps over the lazy dog'
// var arr=str.split(" ")
// var count=0
// for(i=0;i<arr.length-1;i++){
//     if(arr[i]=='the' || arr[i]=="The"){
//         count+=1;
//     }

// }
// alert("the occurs "+count+" times in the sentence")


// ch26-30
// q1
// var num= +prompt("enter a number")
// document.write("number: "+num)
// document.write("<br>round off: "+Math.round(num))
// document.write("<br>floor: "+Math.floor(num))
// document.write("<br>ceil: "+Math.ceil(num))

// q2
// var num= +prompt("enter a neg number")
// document.write("number: "+num)
// document.write("<br>round off: "+Math.round(num))
// document.write("<br>floor: "+Math.floor(num))
// document.write("<br>ceil: "+Math.ceil(num))

// q3
// var num=+prompt('enter a num')
// alert("absolute value of "+num+" is "+Math.abs(num))

// q4
// var val =Math.random()*10%6+1;
// val=Math.floor(val)
// document.write("random dice value is "+ val)

// q5
// var val =Math.random()*10%2+1;
// val=Math.floor(val)
// document.write(val)
// switch (val)
// {case 2:
//     document.write("random coin value: Heads")
// break;
// case 1:
// document.write("random coin value: Tails")
// break;
// }

// // q6
// var val =Math.random()*100+1;
// val=Math.floor(val)
// document.write("random num between 1 and 100 is "+ val)

// q7
// var w=prompt("enter your weight");
// document.write("the weight of the user is "+w)

// q8
// document.write('welcome to guessing game')
// var val=(Math.random()*10)+1
// val=Math.floor(val)
// console.log(val)
// var userI=+prompt("Enter a num between 1 and 10")
// if(userI==val){
//     alert("congrats you guessed the num")
// }
// else{
//     alert("try again")
// }


















































