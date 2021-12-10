const words = ["hello","world"]
pos = 0
 $("#text").keydown(function(){
  $("#text").html(words[pos]);
  pos = pos + 1
});
