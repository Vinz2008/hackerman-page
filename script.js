const words = ["import" ," subprocess" ," </br>", "nb_of_times"," </br>"]
pos = 0
a = 0
length = words.length;
 $("body").keydown(function(){
  if (a == 0) {
    $("#text").html(words[pos]);
    
  }
  else {
  $("#text").html(document.getElementById("text").innerHTML +   words[pos]);
  }
  
  pos = pos + 1
  a = a + 1
  if (pos == length)
    pos = 0
});
