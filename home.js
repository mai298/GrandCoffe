var searchIcon = document.querySelector('.search-icon');
var searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', function(e) {
  e.stopPropagation();
  searchInput.classList.toggle('active');
});

document.addEventListener('click', function(e) {
  if (!searchInput.contains(e.target) && e.target !== searchIcon) {
    searchInput.classList.remove('active');
  }
});

var currentSlide = 0;

function plusSlides(n, slides) {
  var i;
  var slidesToShow = slides;
  var slideIndex = currentSlide + n;
  if (slideIndex < 0) {
    slideIndex = slidesToShow - 1;
  } else if (slideIndex >= slidesToShow) {
    slideIndex = 0;
  }
  for (i = 0; i < slidesToShow; i++) {
    if (i == slideIndex) {
      var content1 = document.getElementsByClassName("content1")[i];
      var content2 = document.getElementsByClassName("content2")[i];
      if (content1 && content2) {
        content1.style.display = "none";
        content2.style.display = "block";
      }
    } else {
      var content1 = document.getElementsByClassName("content1")[i];
      var content2 = document.getElementsByClassName("content2")[i];
      if (content1 && content2) {
        content1.style.display = "block";
        content2.style.display = "none";
      }
    }
  }
  currentSlide = slideIndex;
}