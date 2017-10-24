$(function(){
  $('#survey').submit(function(event){
    event.preventDefault();
    var luckScore = 0;

    $('input:checkbox:checked').each(function(){
      var change = parseInt($(this).val());
      luckScore += change;
    })

    if (luckScore < 0){
      $('.result').text("unlucky fortune");
    } else if (luckScore === 0) {
      $('.result').text("neutral fortune");
    } else {
      $('.result').text("lucky fortune");
    }

  });
});
