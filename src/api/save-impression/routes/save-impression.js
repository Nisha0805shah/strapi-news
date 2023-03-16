module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/save-impression',
     handler: 'save-impression.getImpression',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
