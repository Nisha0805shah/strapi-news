module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/savemeta-data',
     handler: 'savemeta-data.fetchmetaData',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
