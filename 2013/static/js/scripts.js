$(document).ready(function(){	
	jQuery(function(){
		jQuery('ul#menu-topo').superfish();
	});
	$('#mycarousel').jcarousel({
		wrap: 'circular',
		scroll: 1,
	});
	/*Slides Home*/
	$('div.slides').after('<div class="feature-menu">').cycle({
		fx:'fade',
		timeout: 6000,
		delay:  -1000,
		cleartype: false,
		pager: true,
		next: '#next', 
		prev: '#prev',
		pager:  'div.feature-menu'
	});
	/*Slides Home*/

	$("#contatoc").validate();
	$('#ctelefone').mask("(99) 9999-9999");  
});

//Menu Ativo
function setActive() {
  aObj = document.getElementById('menu-topo').getElementsByTagName('a');
  for(i=0;i<aObj.length;i++) { 
	if(document.location.href.indexOf(aObj[i].href)>=0) {
	  aObj[i].className='active';
	}
  }
}