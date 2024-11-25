export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  db: {
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    pass: process.env.DB_PASS,
    user: process.env.DB_USER,
  },
});
