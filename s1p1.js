const linkTwitterRemove = function (){
 links = document.querySelectorAll(".p-4:last-of-type li");
 links[1].style.display =  "none";
}

linkTwitterRemove();

const removeElementParent = function (){
 ps = document.querySelectorAll(".jumbotron p");
 ps[ps.length-1].style.display =  "none";
}

const link = document.querySelector(".jumbotron a");
link.addEventListener("click",removeElementParent);

const showAuthor = function(ev){
 alert(ev.target.innerText);
}

const authors = document.querySelectorAll(".blog-post p:first-of-type a");

for(let i=0; i<authors.length; i++){
 authors[i].addEventListener("mouseover",showAuthor);
}