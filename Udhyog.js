<!-- Load external JavaScript -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>



var next_counter =0;       
var current_fs, next_fs, previous_fs; //fieldsets

var left, opacity, scale; //fieldset properties which we will animate

var animating; //flag to prevent quick multi-click glitches
var isValid = false; 
var next_counter=0;
 var counter = 2;
	
 var animating = false; $(".next").click(function(){ if(animating) return false; animating = true; current_fs = $(this).parent(); next_fs = $(this).parent().next(); $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active"); next_fs.show(); current_fs.animate({opacity: 0}, { step: function(now, mx) { var scale = 1 - (1 - now) * 0.2; var left = (now * 50)+"%"; var opacity = 1 - now; current_fs.css({'transform': 'scale('+scale+')','position': 'absolute'}); next_fs.css({'left': left, 'opacity': opacity}); }, duration: 800, complete: function(){ current_fs.hide(); animating = false; }, easing: 'swing' }); }); $(".previous").click(function(){ if(animating) return false; animating = true; current_fs = $(this).parent(); previous_fs = $(this).parent().prev(); $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active"); previous_fs.show(); current_fs.animate({opacity: 0}, { step: function(now, mx) { var scale = 0.8 + (1 - now) * 0.2; var left = ((1-now) * 50)+"%"; var opacity = 1 - now; current_fs.css({'left': left}); previous_fs.css({'transform': 'scale('+scale+')','opacity': opacity}); }, duration: 800, complete: function(){ current_fs.hide(); animating = false; }, easing: 'swing' }); }); 
//--------*************-----------
var allergyCounter = 1; $("#addButton").click(function () { if(allergyCounter > 10){ alert("Only 10 textboxes allowed"); return false; } var newDiv = $('<div>').attr("id", 'AllergyDiv' + allergyCounter); newDiv.html('<label>Allergy ' + allergyCounter + '</label>' + '<input type="text" name="allergy' + allergyCounter + '" id="allergy' + allergyCounter + '">'); newDiv.appendTo("#TextBoxesGroup"); allergyCounter++; }); $("#removeButton").click(function () { if(allergyCounter == 1){ alert("No more textbox to remove"); return false; } allergyCounter--; $("#AllergyDiv" + allergyCounter).remove(); }); // 
$("#msform").submit(function(event){ event.preventDefault(); 
var formData = new FormData(this); 
var plainObject = {}; formData.forEach((value, key) => { if (plainObject[key]) {  if (!Array.isArray(plainObject[key])) { plainObject[key] = [plainObject[key]]; } plainObject[key].push(value); } else { plainObject[key] = value; } }); console.log("Collected Data:", plainObject);  $.ajax({ url: "/saveForm",  type: "POST", data: formData, processData: false, contentType: false, success: function(response){ alert("Form submitted successfully!"); }, error: function(){ alert("Error submitting form."); } }); }); 

//--------*************-----------
const modal = document.getElementById('uploadModal'); const openBtn = document.getElementById('openModal'); const closeBtn = document.querySelector('.close');

const imageUpload = document.getElementById('imageUpload'); const preview = document.getElementById('preview'); openBtn.onclick = () => modal.style.display = 'block'; closeBtn.onclick = () => modal.style.display = 'none'; window.onclick = (event) => { if (event.target === modal) modal.style.display = 'none'; }; imageUpload.addEventListener('change', function() { const file = this.files[0]; if (file && file.type.startsWith('image/')) { const reader = new FileReader(); reader.onload = function(e) { preview.src = e.target.result; preview.style.display = 'block'; }; reader.readAsDataURL(file); } else { alert('Please select a valid image file.'); } }); 
$(document).ready(function(){
  $(".next").click(function(){
    $(this).closest("fieldset").hide().next().show();
    $("#progressbar li.active").next().addClass("active");
  });

  $(".previous").click(function(){
    $(this).closest("fieldset").hide().prev().show();
    $("#progressbar li.active").last().removeClass("active");
  });
});

