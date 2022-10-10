import passport from 'passport';
import jwtStrategy from './strategies/jwtStrategy';
import {
  localStrategySignUp,
  localStrategySignIn
} from './strategies/localStrategy';

passport.use('signUp', localStrategySignUp);
passport.use('signIn', localStrategySignIn);
passport.use('jwt', jwtStrategy);

export default passport;
