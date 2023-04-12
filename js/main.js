$('.sl').slick({
   slide:'li',
   infinite: false,
   slidesToShow: 2.5,
   slidesToScroll: 1,
   arrows:false,
   touchThreshold: 200

 });

 const gnbBtn = document.querySelector('.button1');
 const close = document.querySelector('.button2');
 const gnb = document.querySelector('.gnb');
 const dark = document.querySelector('.dark');
 const sv = document.querySelector('.sv')



 gnbBtn.addEventListener('click',()=>{
  gnb.style.left= `0`;
  dark.style.display = 'block';
  close.style.left ='256px'
  sv.style.opacity = '1';
})

close.addEventListener('click',()=>{
  gnb.style.left= '-500px';
  dark.style.display = 'none';
  close.style.left = '0';
  sv.style.opacity = '0';
})
dark.addEventListener('click',()=>{
  gnb.style.left= '-500px';
  dark.style.display = 'none';
  close.style.left = '0';
  sv.style.opacity = '0';
})