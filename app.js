function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("sub").value;
  var message = document.getElementById("msg").value;
  
  let msg = `
  name: ${name}
  email: ${email}
  
  Message:
  ${message}`;

  const send_to = 'info@vrport.com.au'
  
  let emailSubject = encodeURIComponent(subject);
  let emailBody = encodeURIComponent(msg);

  let mailtoLink = `mailto:${send_to}?subject=${emailSubject}&body=${emailBody}`;

  window.location.href = mailtoLink;
}
