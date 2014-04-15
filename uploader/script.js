$(document).ready(function() {
  /* variables */
  var preview = $('img');
  var status = $('.status');
  var percent = $('.percent');
  var bar = $('.bar');

  /* only for image preview */
  $("#image").change(function(){
	//$("#texto").html("<p>lalala</p>");
	data=document.getElementById("image").files[0];
	$("#texto").html(data.name+"</br>"+((data.size/1024/1024).toFixed(2))+" MB");
  });

  /* submit form with ajax request */
  $('form').ajaxForm({

    /* set data type json */
    dataType:  'json',

    /* reset before submitting */
    beforeSend: function() {
      status.fadeOut();
      bar.width('0%');
      percent.html('0%');
    },

    /* progress bar call back*/
    uploadProgress: function(event, position, total, percentComplete) {
      var pVel = percentComplete + '%';
      bar.width(pVel);
      percent.html(pVel);
    },

    /* complete call back */
    complete: function(data) {
      preview.fadeOut(800);
      status.html(data.responseJSON.resultado).fadeIn();
      console.log(data)
    }

  });
});
