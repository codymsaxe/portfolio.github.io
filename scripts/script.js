window.onscroll = function(){
  if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
    document.getElementById("header").style.padding = "0% 5%";
    document.getElementById("header").style.background = "#004d80";
    document.getElementById("header").style.color = "#cce6ff";
    document.getElementById("logo").style.color = "#fff";
  } else {
    document.getElementById("header").style.padding = "3% 8%";
    document.getElementById("header").style.background = "#cce6ff";
    document.getElementById("header").style.color = "#004d80";
    document.getElementById("logo").style.color = "#000";
  }
}

function menuToggle(){
  var element = document.getElementById("navigation");
  element.classList.toggle("show");
}


//*** Email JS ***//
const btn = document.getElementById('sendButton');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_dvieqci';

   var params = {
     from_name : document.getElementById("from_name").value,
     email_id : document.getElementById("email_id").value,
     message : document.getElementById("message").value
   }

   emailjs.send(serviceID, templateID, params).then(function (res){
    if(res.status = 200){
      btn.value = "Send Email";
      alert("Message Sent!");
    } else {
      btn.value = "Send Email";
      alert("An Error Has Occurred. Try Again Later.");
    }
    document.getElementById("from_name").value = "";
    document.getElementById("email_id").value = "";
    document.getElementById("message").value = "";
   })
});
