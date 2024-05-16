window.onload = function() {
    var box1 = document.querySelector('.box1');
    box1.style.transition = 'all 0.5s ease-in-out';
    box1.style.transform = 'scale(0.5)';
    setTimeout(function() {
      box1.style.transform = 'scale(1)';
    }, 100);
  }