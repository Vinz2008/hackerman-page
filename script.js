const start = ["import" ," subprocess" ," </br>", "import ", "os", " </br>"]
const words = [/*"import" ," subprocess" ," </br>",*/ " </br>"," </br>","nb_of_times ","= ","int(","input(","))"," </br>","for ","i ","in ","range","(nb_of_times","):","<br>","&nbsp;&nbsp;&nbsp;&nbsp;","try",":"," </br>","&nbsp;&nbsp;&nbsp;&nbsp;","&nbsp;&nbsp;&nbsp;&nbsp;","print(","subprocess",".","check_output","([","'ping',"," 'google.com'","]))"," </br>","&nbsp;&nbsp;&nbsp;&nbsp;","except ","subprocess", ".", "Called", "Process", "Error ", "as ", "err", ":", " </br>" ,"&nbsp;&nbsp;&nbsp;&nbsp;","&nbsp;&nbsp;&nbsp;&nbsp;", "print(", "err)", " </br>"]
pos = 0
a = 0
length = words.length;
 $("body").keydown(function(){
  if (a == 0) {
    $("#text").html(start[pos]);
  }
  else {
  if (a < 5 && a != 0)  {
    $("#text").html(document.getElementById("text").innerHTML +   start[pos]);
    
  }
  else {
    if (a == 5) {
      pos = 0
    }
  
  $("#text").html(document.getElementById("text").innerHTML +   words[pos]);
  }
}
  
  pos = pos + 1
  a = a + 1
  if (pos == length)
    pos = 0
});
