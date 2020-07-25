import { BAD_REQUEST, INTERNAL_SERVER_ERROR, OK, UNAUTHORIZED } from 'http-status-codes';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userService from './user.service';
import User from './user.model';

export default {
  async singup(req, res) {
    try {
      const { error, value } = await userService.validateUser(req.body);
      if (error) {
        return res.status(BAD_REQUEST).json({ error });
      }
      const user = await User.create(value);
      return res.status(OK).json({ success: true, msg: 'User created successfully' });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  },
  async singin(req, res) {
    try {
      const { error, value } = userService.validateUser(req.body);
      if (error) {
        return res.status(BAD_REQUEST).json(error);
      }
      const user = await User.findOne({ email: value.email });
      if (!user) {
        return res.status(BAD_REQUEST).json({ err: 'Invalid email' });
      }
      const matched = await bcrypt.compare(value.password, user.password);
      if (!matched) {
        return res.status(UNAUTHORIZED).json({ err: 'Invalid password' });
      }
      const token = await jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: '1d' });
      return res.json({ success: true, token });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  },
  async test(req, res) {
    return res.json(req.user);
  },
};
