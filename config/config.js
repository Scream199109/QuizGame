const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionFileStore = require('session-file-store');

//const sessionConfig = require('./sessionConfig');

const FileStore = sessionFileStore(session);

const config = (app) => {
  app.set('view engine', 'hbs');
  app.set('views', path.join(process.env.PWD, 'views'));

  //app.use(session(sessionConfig));
  
  app.use(cookieParser());
  app.use(session({
    store: new FileStore(),
    key: 'user_sid',
    secret: `${process.env.SESSION_SECRET}` ?? 'test',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    },
  }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(process.env.PWD, 'public')));
  hbs.registerPartials(path.join(process.env.PWD, 'views'));
};

module.exports = config;
