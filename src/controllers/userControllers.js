import {userSchema} from '../models/userModels.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

export const login = (req, res) => {
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    if(err)
      throw err;
    if(!user) {
      res.send(`No user found!`);
    }else{
      if(!user.comparePasswords(req.body.password, user.hashPassword)){
        res.send(`Incorrect password!`);
      }else{
        res.json({token: jwt.sign({email: user.email, username: user.username, _id: user.id}, 'RESTFULAPIs')});
      }
    }
  })
}
