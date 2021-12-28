var scroll = setInterval(function(){ window.scrollBy(0,1000); }, 10);
const start = ["import" ," subprocess" ," </br>", "import ", "os", " </br>"]
const words = [/*"import" ," subprocess" ," </br>",*/ " </br>"," </br>","nb_of_times ","= ","int(","input(","))"," </br>","for ","i ","in ","range","(nb_of_times","):","<br>","&nbsp;&nbsp;&nbsp;&nbsp;","try",":"," </br>","&nbsp;&nbsp;&nbsp;&nbsp;","&nbsp;&nbsp;&nbsp;&nbsp;","print(","subprocess",".","check_output","([","'ping',"," 'google.com'","]))"," </br>","&nbsp;&nbsp;&nbsp;&nbsp;","except ","subprocess", ".", "Called", "Process", "Error ", "as ", "err", ":", " </br>" ,"&nbsp;&nbsp;&nbsp;&nbsp;","&nbsp;&nbsp;&nbsp;&nbsp;", "print(", "err)", " </br>", "confi","gure","_logging","(settings",".LOGGING_CONFIG",", settings",".LOGGING","</br>","&nbsp;&nbsp;&nbsp;&nbsp;","if ", "set_prefix:","</br>","&nbsp;&nbsp;&nbsp;&nbsp;","&nbsp;&nbsp;&nbsp;&nbsp;","set-script","_prefix(","</br>","&nbsp;&nbsp;&nbsp;&nbsp;","&nbsp;&nbsp;&nbsp;&nbsp;","&nbsp;&nbsp;&nbsp;&nbsp;","'/'", " if ","settings.","FORCE_","SCRIPT_","_NAME ","is ","None ","else ","settings.","FORCE_","SCRIPT_","_NAME ","</br>","&nbsp;&nbsp;&nbsp;&nbsp;","&nbsp;&nbsp;&nbsp;&nbsp;",")","</br>","&nbsp;&nbsp;&nbsp;&nbsp;","apps","populate(","settings.","INSTALLED_","APPS",")","</br>"]
pos = 0
a = 0
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
  if (pos == words.length-1) {
    pos = 0
    console.log(words.length)
  }
  
});
