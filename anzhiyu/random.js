var posts=["2026/02/20/hello_world/","2026/02/20/dlass/","2026/02/20/iccce/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };