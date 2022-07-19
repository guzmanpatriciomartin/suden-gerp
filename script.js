fetch('https://gerpsuden.azurewebsites.net/api/contact-courses/?search=0950547398').then(response => response.json())
.then(data => console.log(data));