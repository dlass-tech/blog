var posts=["2026/02/21/Welcome!/","2026/02/21/classworks/","2026/02/20/dlass/","2026/02/20/iccce/","2026/02/20/inkeys/","2026/02/20/hello_world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };