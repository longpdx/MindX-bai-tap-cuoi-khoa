  // Animation Text + Ship
  const text = document.getElementById('text');
  const ship = document.getElementById('ship');

  window.addEventListener('scroll', function(){
    const value = window.scrollY;

  //Stop Text scroll over page 1000px
  if (value > 1000) {
    text.style.marginTop = value * 1.0 + 'px';
  } else {
    text.style.marginTop = value * 1.5 + 'px';
  }
    ship.style.left = value * .55 + 'px';
  });
  // Animation Text + Ship End
  
  //Animation Wave
  const wave1 = document.getElementById('wave1');
  const wave2 = document.getElementById('wave2');
  const wave3 = document.getElementById('wave3');
  const wave4 = document.getElementById('wave4');

  window.addEventListener('scroll', function(){
    const value = window.scrollY;

    wave1.style.backgroundPositionX = 300 + value + 4 + 'px';
    wave2.style.backgroundPositionX = 200 + value + -4 + 'px';
    wave3.style.backgroundPositionX = 100 + value + 2 + 'px';
    wave4.style.backgroundPositionX = 400 + value + -2 + 'px';
  });
  // Animation Wave End  