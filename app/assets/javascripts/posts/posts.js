angular.module('vancouverNews')
.factory('posts', [function(){
  var o = {
      posts: [
        {title: 'title 1', upvotes: 5, comments: []},
        {title: 'title 2', upvotes: 2, comments: []},
        {title: 'title 3', upvotes: 15, comments: []},
        {title: 'title 4', upvotes: 9, comments: []},
        {title: 'title 5', upvotes: 4, comments: []}
      ]
    };
  return o;
}])