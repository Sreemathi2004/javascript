//selecting popup box overlay button

var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");
var addpopupbutton=document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})

//select cancel button

var cancelButton =document.getElementById("cancel-popup")
cancelButton.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})

//select container , add-book,book-title-input,book-authur-input,book-description-input

var container=document.querySelector(".container");
var addbook=document.getElementById("add-book");
var booktitleinput=document.getElementById("book-title-input");
var bookauthorinput=document.getElementById("book-author-input");
var bookdescriptioninput=document.getElementById("book-description-input");
addbook.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","book-container");
    
    div.innerHTML=` <h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deleteContent(event)">Delete</button>`

    if (booktitleinput.value === "") {
        alert(`Kindly Enter Your "BookTitle"`);
        return; // Exit the function
    }
    else if (bookauthorinput.value === "") {
        alert(`Kindly Enter Your "BookAuthor"`);
        return; // Exit the function
    }
   else if (bookdescriptioninput.value === "") {
        alert(`Kindly Enter Your "BookDescription"`);
        return; // Exit the function
    }
    container.append(div);
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";
   
    popupoverlay.style.display="none";
    popupbox.style.display="none";
    
})

function deleteContent(event){
    event.target.parentElement.remove();
}


