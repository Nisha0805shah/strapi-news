module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/get-news',
     handler: 'get-news.getNews',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
