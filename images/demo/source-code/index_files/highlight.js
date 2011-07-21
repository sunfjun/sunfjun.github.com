$(document).ready(function(){
	var globalParent=null;
	var mouse_is_inside=false;
	
	/*The snippet below is activated when an inputfield is focused*/
	$('.inputfield').focus(function(){
		globalParent=$(this).parent('div');
		globalParent.click();
	});
	
	/*This following part will be activated whn the inputfield loses focus*/
	$('.inputfield').blur(function(){
		globalParent.click();
	});
	
	/*Following part will be activated when the user clicks anywhere inside
	the container div of the inputfield*/
	$('.field').click(function(){
		if(!($(this).is('.dummy'))){
			$('.dummy').css('background-color','gray');
			$('.dummy label').css('color','white');
			$('.dummy').removeClass('dummy');
			$(this).css('background-color','black');
			$(this).children('label').css('color','#3cdfdf');
			$(this).addClass('dummy');
		}
	});

	/*The following code checks time and again whether the mouse is inside the form or not*/
	$('form').hover(function(){ 
        	mouse_is_inside=true; 
    	}, 
    	function(){ 
        	mouse_is_inside=false; 
 		}
 	);
 	
	/*If user clicks anywhere outside the form, all highlighting is removed*/
 	$('body').click(function(){ 
        if(!mouse_is_inside)
        {
        	$('.field').css('background-color','gray');
        	$('.field label').css('color','white');
        	$('.dummy').removeClass('dummy');
        }
    });
});