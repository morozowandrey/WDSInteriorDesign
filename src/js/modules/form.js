$(window).on('load',function(){
	$(".contact-input__button ").on('click',function(e){
		
		var field = $(".field-wrap input,textarea");

		for (var i = 0; i < field.length; i++) {
			if(field.eq(i).val()===""){
				e.preventDefault();

				// console.log(field.eq(i));
				field.eq(i).addClass("field__invalid");
				}
			else if(field.eq(i).val()!==""){
				field.eq(i).removeClass("field__invalid");
				}
			}	
		})	
	$(".field-wrap input,textarea").keyup(function(){
		
		var field = $(".field-wrap input,textarea");
		for (var i = 0; i < field.length; i++) {
			if(field.eq(i).val()!==""){
				field.eq(i).removeClass("field__invalid");
			}
		}
	})
	})