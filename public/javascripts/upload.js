$(function(){
	$('#upload').click(function(){
		upload();
	});
});

function upload(){
	$.ajax({
		type: "POST",
		url: "upload",
		data: new FormData($('#uploadForm')[0]),
		processData: false,
	    contentType: false,
		success: function(data){
			$('#xml-content').html(data['result']);	
		}
		// dataType: dataType

	});

}
