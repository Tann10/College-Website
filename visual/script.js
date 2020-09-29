//grab a single element and analyze it
// var myLogoLink = document.getElementById("site_content");

// document.write("<p>Node type is "+ myLogoLink.nodeType +"</p>")
// document.write(myLogoLink.innerText);

//02 how many link tags?
// var navItems = document.getElementsByTagName("a");
// document.write("<p>The total links are"+navItems.length+"</p>")

// //navItems is an array
// for(var i=0; i<navItems.length; i++) {
//     if (i%2==0){
//         document.write("<span style='background: yellow';>"+navItems[i]+"</span><br>")
//     }
//     else {
//         document.write("<span style='background: pink';>"+navItems[i]+"</span><br>")

//     }
// }

// 03 making changes
// var sidevar = document.getElementsByClassName('sidebar');
// alert(sidevar[0].innerHTML);

//array of all h1 tags
// main = document.getElementById("main");
// var arrayOfH1s= main.getElementsByTagName('h1');
// arrayOfH1s[0].innerHTML = "Mew Design";
// arrayOfH1s[1].innerHTML = "This is a new title";

//04 creating elements
// var newHeading = document.createElement("h1");
// var newParagraph = document.createElement("p");

// //  to add content either use innerHTML..
// // newHeading.innerHTML = "Did you know?";
// // newParagraph.innerHTML = "JavaScript has nothing to do with Java";

// // or create child nodes manually
// var h1Text = document.createTextNode("Did you know?");
// var paraText = document.createTextNode("JavaScript has nothing to do with Java");
// newHeading.append(h1Text);
// newHeading.append(paraText);
// //..then attach them to where you want
// document.getElementById("attach_here").appendChild(newHeading);
// document.getElementById("attach_here").appendChild(newParagraph);

//05 functions and event handlers
// function add(a, b) {
//     console.log(a+b);
// }

// add(9,8);

// y = function() {
//     alert("Coffee time");
//     alert("Tea time");
// }

// y()

// y = function()
// {
//     return "coffee time";
// }
// alert(y());

// document.onclick = function() {
//     alert("You clicked");
// }

// function prepareHandler() {
//     var myLogo = document.getElementById("logo");
//     myLogo.onclick = function() {
//         alert("you clicked the logo");
//     }
// }

// window.onload = function() {
//     prepareHandler();
// }

//06 working with email field
var emailField = document.getElementById("email");
emailField.onfocus = function() {
    if (emailField.value = "your email") {
        emailField.value = "";
    }
}

emailField.onblur = function() {
    if (emailField.value == ""){
        emailField.value = "your email";
    }
}


//JavaScript Objects
var player = new Object();

player.name = "Bugs Bunny";
player.email = "blah@gwu.edu";
player.phone = 456789;

alert(player.name+' '+player.phone);

var person = {name: 'Daffy Duck', email: 'blah@gwu.edu'};
alert(player.name+' '+player.phone);

function show() {
    alert(this.name+' '+this.phone);
}

player.showInfo = show;
person.showInfo = show;

player.showInfo();
person.showInfo();


