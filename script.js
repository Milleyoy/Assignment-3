
function toggleMobileNavigation() {
  const mobileNavigation = document.getElementById("mobile-sidenav");
  mobileNavigation.classLsist.toggle('mobile-links-active');
}

function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var age = document.getElementById('enquire').value;
}

  // Perform basic validation
  if (name === '' || enquire === '' || email === '') {
      alert('Please fill in all fields.');
      return false; // Prevent form submission
  }

     return true;