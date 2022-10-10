import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

const jwtStrategy = new JWTStrategy(
  {
    secretOrKey: process.env.ACCESS_TOKEN_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  async (token, done) => {
    try {
      return done(null, { _id: token._id });
    } catch (error) {
      done(error);
    }
  }
);

export default jwtStrategy;
