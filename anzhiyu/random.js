var posts=["2026/02/20/hello_world/","2026/02/20/hello_world.md/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };