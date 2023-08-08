const signupFormHandler = async (event) => {
    console.log('hi')
    event.preventDefault();
    console.log('hi')
  
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    console.log("hi",email)
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log("hi",email)
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        console.log(password)
        console.log("hi",email)

        alert('Failed to sign up.');
      }
    }
  };
  
  document.querySelector('#signup-form')?.addEventListener('submit', signupFormHandler);
  