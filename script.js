$(document).ready(function () {
  $(".btn").click(function () {
    if ($(this).val() == "CLR") {
      $(".inputField").val($(".inputField").val().slice(0, -1));
    } else {
      $(".inputField").val($(".inputField").val() + $(this).val());
    }
  });
  $(".clr").click(function () {
    $(".inputField").val(" ");
  });
  $(".finalResult").click(function () {
    $(".inputField").val(eval($(".inputField").val()));
  });
});
