

 window.onload = function() {

	 $('.menus').addClass('go');
	 $('#datas_main').addClass('go');
	 menus_btn($('#menus_main').get());
 }


 function menus_btn(btn_this){
	 $($(btn_this).parent('.menus')).find('button').removeClass('go');
	 $(btn_this).addClass('go');
	 $('.datas').removeClass('go');
	 $('#datas_' + $(btn_this).attr('name')).addClass('go');
     $('#datas_' + $(btn_this).attr('name')).find('.prog').removeClass('go');
     $('#datas_' + $(btn_this).attr('name')).find('.prog_button').removeClass('go');
     $('#datas_' + $(btn_this).attr('name')).find('.one').addClass('go');
 }

 function menus_prog_btn(btn_this){
   $($(btn_this).parent('.prog_header')).find('button').removeClass('go');
   $(btn_this).addClass('go');
   $('.prog').removeClass('go');
   $('#prog_' + $(btn_this).attr('name')).addClass('go');
 }


 function web_open(){

		go_box();
		$('#web').addClass('go');
 }

  function web_end(){

		end_box();
		$('#web').removeClass('go');
 }

  function go_box(){
	 //clearTimeout(open_polotno_close_timer);
	 $('#box').addClass('go');
 }

   function end_box(){
	 //clearTimeout(open_polotno_close_timer);
	 $('#box').removeClass('go');
 }

