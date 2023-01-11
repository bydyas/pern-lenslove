const ApiError = require('../errors/api.error');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/index');

const generateJwt = (id, email, roles) => {
  return jwt.sign({ id, email, roles }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, roles } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest('Invalid email or password'));
    }

    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest('The user with this email already exists'));
    }

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({ email, password: hashPassword, roles });
    const token = generateJwt(user.id, email, user.roles);

    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.badRequest('The user was not found'));
    }

    const comparePasswords = await bcrypt.compare(password, user.password);
    if (!comparePasswords) {
      return next(ApiError.badRequest('Invalid email or password'));
    }

    const token = generateJwt(user.id, email, user.roles);

    return res.json({ token });
  }

  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.email, req.user.roles);
    return res.json({ token });
  }
}

module.exports = new UserController();
