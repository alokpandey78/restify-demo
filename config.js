module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 4000,
  URL: process.env.BASE_URL || 'http://localhost:4000',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://YOUR_URI',
  JWT_SECRET: process.env.JWT_SECRET || 'secret1'
};