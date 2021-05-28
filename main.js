
function validate()
{
  var email=document.getElementById("text1").value;

  var regx = /^([a-z 0-9 A-Z\.-]+)@([a-z 0-9 A-Z -]+).([a-z]{2,8})$/;
  if(regx.test(email))
    {
    alert("Hello,"+" "+ email + " " + "Let's start free trial");
    }
  else
    {
    alert("You have entered an invalid email address!");
    }

}
