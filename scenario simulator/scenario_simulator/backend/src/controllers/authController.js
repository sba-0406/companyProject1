const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { name, email, password, role, jobRole } = req.body;

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      role,
      jobRole
    });

    sendTokenResponse(user, 201, res);
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Please provide email and password' });
    }

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    // Authorization logic: 
    // - Admins always pass
    // - Employees/Managers pass unless deactivated or explicitly blocked
    if (user.role !== 'admin') {
      if (!user.isActive) {
        return res.status(403).json({ success: false, error: 'Account has been deactivated' });
      }
      if (user.isAuthorized === false) {
        return res.status(403).json({ success: false, error: 'Your account is pending authorization by an admin' });
      }
    }

    sendTokenResponse(user, 200, res);
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.logout = async (req, res) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  res.status(200).json({ success: true, data: {} });
};

const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token,
      data: {
        id: user._id,
        name: user.name,
        role: user.role
      }
    });
};
