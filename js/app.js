const buttons = document.querySelectorAll('.btn');
const bgPicture = document.querySelector('.img-container');

buttons.forEach(button => {
  let c = 0;
  button.addEventListener('click', function() {
    
    if ( button.classList.contains('btn-left')) {
      
      if( c < 0 ){
        c = 4;
      }
      bgPicture.style.background = `url("../img/contBcg-${c}.jpeg")`;
      c--;
    }
    else if (button.classList.contains('btn-right')) {

      if( c < 4) {
        c++;
      } else {
        c = 0;
      }
      bgPicture.style.background = `url("../img/contBcg-${c}.jpeg")`;
    }
  })
})
