const passport = require('koa-passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { JWT } = require('../../common/config');
const User = require('../../resources/users/user.service');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT.SECRET_KEY,
  session: false
};

passport.use(
  new Strategy(opts, async (jwt_payload, done) => {
    console.log(jwt_payload);

    const user = await User.getById(jwt_payload.payload.id);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  })
);
