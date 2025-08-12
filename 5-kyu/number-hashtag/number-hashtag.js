function getHashtags(post) {
  return post.split(' ').filter(y=>/^#+[A-Za-z]+$/.test(y)).map(x=>x.slice(x.lastIndexOf('#')+1))
  
}