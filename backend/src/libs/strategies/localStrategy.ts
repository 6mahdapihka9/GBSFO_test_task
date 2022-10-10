import { Strategy as LocalStrategy } from 'passport-local';
import UserModel from '../../models/UserModel';

export const localStrategySignUp = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  async (req, email, password, done) => {
    try {
      const name = req.body.name;
      const user = await UserModel.findOne({ email });
      if (user) {
        return done(null, false, {
          message: 'user already exists'
        });
      }

      const newUser = await UserModel.create({
        name,
        email,
        passwordHash: password
      });

      return done(null, newUser);
    } catch (error) {
      done(error);
    }
  }
);

export const localStrategySignIn = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  async (req, email, password, done) => {
    try {
      const user = await UserModel.findOne({ email });

      if (!user) {
        return done(null, false, { message: 'user not exist' });
      }

      const validate = await user.isValidPassword(password);

      if (!validate) {
        return done(null, false, { message: 'invalid password' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);
