module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/login-validation',
     handler: 'login-validation.fetchLogin',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
