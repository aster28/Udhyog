var current_fs, next_fs, previous_fs;
var animating = false;

/* NEXT BUTTON */
$(".next").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  $("#progressbar li")
    .eq($("fieldset").index(next_fs))
    .addClass("active");

  next_fs.show();

  current_fs.animate({ opacity: 0 }, {
    duration: 600,
    complete: function () {
      current_fs.hide();
      animating = false;
    }
  });
});

/* PREVIOUS BUTTON */
$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  previous_fs.show();

  current_fs.animate({ opacity: 0 }, {
    duration: 600,
    complete: function () {
      current_fs.hide();
      animating = false;
    }
  });
});

/* ADD REMOVE ALLERGY */
var allergyCounter = 1;

$("#addButton").click(function () {
  if (allergyCounter > 5) return;
  $("#TextBoxesGroup").append(
    '<input type="text" name="allergy' + allergyCounter + '" placeholder="Allergy ' + allergyCounter + '">'
  );
  allergyCounter++;
});

$("#removeButton").click(function () {
  if (allergyCounter <= 1) return;
  allergyCounter--;
  $("#TextBoxesGroup input:last").remove();
});

/* IMAGE PREVIEW */
$("#imageUpload").change(function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      $("#preview").attr("src", e.target.result).show();
    };
    reader.readAsDataURL(file);
  }
});

/* AJAX SUBMIT */
$("#msform").submit(function (e) {
  e.preventDefault();

  var formData = new FormData(this);

  $.ajax({
    url: "/saveForm",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function () {
      alert("Form submitted successfully!");
    },
    error: function () {
      alert("Error submitting form.");
    }
  });
});
