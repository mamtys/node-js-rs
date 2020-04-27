const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../resources/users/user.repository');

const cryptManager = require('../../helpers/cryptManager');

const opts = {
  usernameField: 'login',
  passwordField: 'password',
  session: false
};

passport.use(
  new LocalStrategy(opts, async (login, password, done) => {
    const user = await User.getByLogin(login);

    if (!user) return done(null, false);

    const isPasswordValid = await cryptManager.isPasswordValid(
      password,
      user.password
    );
    if (!isPasswordValid) {
      return done(null, false);
    }

    return done(null, user);
  })
);
