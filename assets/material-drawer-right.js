$(function() {
  $('#cart').click(function(){
   if($('.mdl-layout__drawer-right').hasClass('active')){       
      $('.mdl-layout__drawer-right').removeClass('active'); 
   }
   else{
      $('.mdl-layout__drawer-right').addClass('active'); 
   }
  });

  $('.mdl-layout__obfuscator-right').click(function(){
   if($('.mdl-layout__drawer-right').hasClass('active')){       
      $('.mdl-layout__drawer-right').removeClass('active'); 
   }
   else{
      $('.mdl-layout__drawer-right').addClass('active'); 
   }
  });
})