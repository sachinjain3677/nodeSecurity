import {userSchema} from '../models/userModels.js';
import bcrypt from 'bcryptjs';

const User = mongoose.model('User', userSchema);

export const register = (req, res) => {
  var newUser = new User(req.body);
  newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
  newUser.save((err, user) => {
    if(err) return res.send({
      message: err
    });
    user.hashPassword = undefined;
    return res.json(user);
  })
}
