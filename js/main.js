var keys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ],
]


var hash = {
  a: 'www.acfun.cn',
  b: 'www.bilibili.com',
  c: 'www.cilimao.me',
  d: 'www.douyu.com',
  f: 'facebook.com',
  g: 'google.com',
  y: 'youtube.com',
}
//取出hashInLocalStorage中newHash对用的hash
var hashInLocalStorage = JSON.parse(localStorage.getItem('newHash') || 'null')
if (hashInLocalStorage) {
  hash = hashInLocalStorage
}
var i = 0;
while (i < keys.length) {
  divx = document.createElement('div');
  content.appendChild(divx);
  row = keys[i];
  j = 0;
  while (j < row.length) {
    kbdx = document.createElement('kbd');
    kbdx.textContent = row[j];
    btnx = document.createElement('button');
    btnx.textContent = '编辑';
    btnx.id = row[j];
    btnx.onclick = function(btnclick) {
      key = btnclick['target']['id']; //btnclick.target=this
      x = prompt('give me a website');
      hash[key] = x;
      localStorage.setItem('newHash', JSON.stringify(hash))
      console.log(hash)
    }
    kbdx.appendChild(btnx);
    divx.appendChild(kbdx);
    j = j + 1;
  }
  i = i + 1;
}
document.onkeypress = function(presskey) {
  key = presskey.key;
  website = hash[key];
  console.log(website);
  //location.href=website;当前窗口打开
  window.open('http://' + website, '_blank')
}
