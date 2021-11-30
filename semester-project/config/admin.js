module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '820bd4c4643881e122aba1bcd9a55f70'),
  },
});
