

//gallery item filter
const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;

 for (let i=0; i<filterButtons.length; i++){
 	filterButtons[i].addEventListener("click",function(){
 		for (let j = 0; j < filterButtons.length; j++) {
 			filterButtons[j].classList.remove("active")
 		}
 		this.classList.add("active");
 		const target=this.getAttribute("data-target")

 		for (let k=0; k<items.length; k++) {
 			items[k].style.display="none";
 			if (target==items[k].getAttribute("data-id"))
 			{
 				items[k].style.display="block";
 			}
 			if (target=="all") {
 				items[k].style.display="block";
 			}
 		}

 	})
 }

// lightbox

 const closeLightbox=document.querySelector(".close-lightbox");
 const lightbox=document.querySelector(".lightbox");
 const lightboxImage=lightbox.querySelector("img")

     lightbox.addEventListener("click",function(){
     	if (event.target!=lightboxImage) {
     		lightbox.classList.remove("show");
 	    lightbox.classList.add("hide");
     	}
     })

     closeLightbox.addEventListener("click",function(){
 	    lightbox.classList.remove("show");
 	    lightbox.classList.add("hide");
     })

const gallery=document.querySelector(".portfolio-gallery");
const galleryItem=gallery.querySelectorAll(".item");

galleryItem.forEach(function(element){
	element.querySelector(".fa-plus").addEventListener("click",function(){
		lightbox.classList.remove("hide");
		lightbox.classList.add("show");
		lightboxImage.src=element.querySelector("img").getAttribute("src")
	})
})

// navbar links

const navbar=document.querySelector("#navbar");
      a=navbar.querySelectorAll("a");
  
      a.forEach(function(element){
      	element.addEventListener("click",function(){
      		for (let i =0; i<a.length; i++) {
      			a[i].classList.remove("active");
      		}
      		this.classList.add("active")
      		document.querySelector("#navbar ul").classList.toggle("show");
      	})
      })

alert("Hey, kindly leave a message..Thanks:)")

// Smooth Scrolling
$("navbar a, .btn").on("click", function(event) {
	if (this.hash !=="") {
		event.preventDefault();

		const hash = this.hash;

		$("html, body").animate(
		{
			scrollTop: $(hash).offset().top - 80
		},
		800
		);
	}
})

// nav-drop 

const navDrop=document.querySelector(".navdrop");

navDrop.addEventListener("click",function(){
	  document.querySelector("#navbar ul").classList.toggle("show")
})

