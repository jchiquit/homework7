$(document).ready(function(){
	$('#useBilling').click(function(){
		let home = $("#home");
		let billing = $('#billing');
		if (this.checked){
			home.val(billing.val());
			home.disable=true;
		}
		else{
			home.val("");
			home.disable=false;
		}
	})
		});
