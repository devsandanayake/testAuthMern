import axios from 'axios';

export const login = async user => {
  // Check if username and password are empty
  if (!user.username || !user.password) {
    console.error('Username and password are required.');
    return;
  }

  try {
    const res = await axios.post('http://localhost:4000/login', {
      username: user.username,
      password: user.password
    });

    if (res.data.token) {
      localStorage.setItem('usertoken', res.data.token);
      return res.data.token;
    } else {
      throw new Error('Token not received in the response');
    }
  } catch (err) {
    console.error(err);
    if (err.response && err.response.data) {
      // Display error message from the server response
      console.error(err.response.data.error || 'Login failed. Please try again later.');
    } else {
      // Display a generic error message
      console.error('Login failed. Please try again later.');
    }
    throw err;
  }
};
