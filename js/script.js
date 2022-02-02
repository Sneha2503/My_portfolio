

const filterContainer=document.querySelector(".portfolio-filter"),
	  filterBtns=filterContainer.children,
	  totalFilterBtn=filterBtns.length,
	  portfolioItems=document.querySelectorAll(".portfolio-item"),
	  totalPortfolioItem=portfolioItems.length;

	  for(let i=0; i<totalFilterBtn; i++){
	  	filterBtns[i].addEventListener("click", function(){
	  		filterContainer.querySelector(".active").classList.remove("active");
	  		this.classList.add("active");

	  		const filterValue=this.getAttribute("data-filter");
	  		for(let k=0; k<totalPortfolioItem; k++){
	  			if(filterValue === portfolioItems[k].getAttribute("data-category")){
	  				portfolioItems[k].classList.remove("hide");
	  				portfolioItems[k].classList.add("show");
	  			}
	  			else{
	  				portfolioItems[k].classList.remove("show");
	  				portfolioItems[k].classList.add("hide");
	  			}
	  			if(filterValue === "all"){
	  				portfolioItems[k].classList.remove("hide");
					portfolioItems[k].classList.add("show");	  				
	  			}

	  		}


	  	})
	}

const lightbox=document.querySelector(".lightbox"),
		lightboxImg=lightbox.querySelector(".lightbox-img"),
		lightboxClose=lightbox.querySelector(".lightbox-close"),
		lightboxText=lightbox.querySelector(".caption-text"),
		lightboxCounter=lightbox.querySelector(".caption-counter");
	let itemIndex=0;

	for(let i=0; i<totalPortfolioItem; i++){
		portfolioItems[i].addEventListener("click", function(){
			itemIndex=i;
			changeItem();
			toggleLightbox();
		})
	}

	function nextItem(){
		if(itemIndex === totalPortfolioItem-1){
			itemIndex=0;
		}
		else{
			itemIndex++;
		}
		changeItem();
	}
	function prevItem(){
		if(itemIndex === 0){
			itemIndex=totalPortfolioItem-1
		}
		else{
			itemIndex--;
		}
		changeItem();
	}

	function toggleLightbox(){
		lightbox.classList.toggle("open");
	}


	function changeItem(){
		imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
		lightboxImg.src=imgSrc;
		lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
		lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortfolioItem;
	}
	lightbox.addEventListener("click", function(event){
		if(event.target === lightboxClose || event.target === lightbox){
			toggleLightbox();
		}
	})


	function mesons() {
		window.location.href = "https://youtu.be/H_HACjJSufQ";
	  }

	  function innovadia() {
		window.location.href = "https://www.youtube.com/watch?v=lTfkts9bvJo";
	  }

	  function ethosway() {
		window.location.href = "https://www.youtube.com/watch?v=Vk52zKfQLx4";
	  }

	  function trackme() {
		window.location.href = "https://www.youtube.com/watch?v=nAh3UD5dOwM";
	  }
	  function quiz() {
		window.location.href = "#";
	  }

	  function rps() {
		window.location.href = "#";
	  }