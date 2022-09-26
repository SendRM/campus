module.exports = (imgs) => {
  let imgArr = [];
  if (imgs instanceof Array) {
    imgs.forEach(item => {
      imgArr.push(item.path.split('public')[1])
    })
  } else {
    imgArr.push(imgs.path.split('public')[1])
  }
  return imgArr;
}