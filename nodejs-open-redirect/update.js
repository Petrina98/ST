// Fetch and display the current user's email on the profile page
fetch('/api/user')
  .then((response) => response.json())
  .then((userData) => {
    const emailElement = document.getElementById('user-email');
    emailElement.textContent = userData.email;
  });

// Handle email update form submission
const updateEmailForm = document.getElementById('update-email-form');
updateEmailForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newEmail = document.getElementById('new-email').value;

  // Send a PUT request to update the email
  fetch('/api/user/email', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: newEmail }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Display a success message or handle errors
      if (data.success) {
        alert('Email updated successfully');
        // Redirect to the profile page or update the email display
        window.location.href = '/profile';
      } else {
        alert('Failed to update email');
      }
    });
});
