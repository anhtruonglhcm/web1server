import passport from 'passport';
import PassportJwt from 'passport-jwt';
import User from '../resources/user/user.model';

export const configureJWTStragety = () => {
  const opts = {};
  opts.jwtFromRequest = PassportJwt.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.SECRET_KEY;
  passport.use(
    new PassportJwt.Strategy(opts, (payload, done) => {
      User.findOne({ email: payload.user.email }, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        return done(null, false);
      });
    }),
  );
};
