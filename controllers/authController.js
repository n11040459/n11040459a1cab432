const jwt = require('jsonwebtoken');
const users = {
  testUser: { password: 'password123', role: 'user' },
  testAdmin: { password: 'password456', role: 'admin' }
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (user && user.password === password) {
    const token = jwt.sign({ username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};
