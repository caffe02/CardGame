function clickmenu(){

    if(checkbox_menu.checked){
		maincontent_js.classList.remove('open');
	}else{
        maincontent_js.classList.add('open');
	}
}
const checkbox_menu = document.getElementById('menu');
const maincontent_js = document.getElementById('maincontent_id');
checkbox_menu.checked = false;