/**************初始化数据**********/

var hashX = init()
var keys = hashX.keys
var hash = hashX.hash

/**********生成键盘**********/

generateKbd(keys, hash)

/*************监听用户*************/

listenToUser(hash)





/*************工具函数*************/

function init(){
  var keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ],
  ]
  var hash = {
    a: 'www.acfun.cn',b: 'www.bilibili.com',
    d: 'www.douyu.com',  f: 'www.facebook.com',
    g: 'www.google.com',y: 'www.youtube.com',
    z: 'www.zhihu.com',p: 'www.panda.tv',
    q: 'www.qq.com',l: 'lol.qq.com',
    x: 'xiaomi.com',s: 'store.steampowered.com',
    o: 'opera.com',h: 'huya.com',
    w: 'weibo.com',  e: 'ele.me',
    r: 'yyets.com',n: 'www.nass.usda.gov',
    t: 'taobao.com',u: 'www.ui.cn',
    i: 'www.icloud.com',  j: 'jquery.com',
    k: 'kuaishou.com',c: 'www.china.com',
    v: 'www.vmovier.com',m: 'www.imooc.com',
  }

//取出localStorage中newHash对应的hash
  var hashInLocalStorage = getFormLocalStorage('newHash');
  if (hashInLocalStorage) {
    hash = hashInLocalStorage
  }
return{
  "keys":keys,
  "hash":hash,
}
}

/********存取用户输入数据函数*********/
function getFormLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name) || 'null')
}

/********创建变量缩写函数*********/
function tag(tagName) {
  return document.createElement(tagName)
}

/********创建button函数*********/
function createBtn(id) {
  var btnx = tag('button');
  btnx.textContent = '编辑';
  btnx.id = id;
  btnx.onclick = function() {
    var img1 = this.previousSibling;
    var key = this.id;
    var x = prompt('请输入要保存的网址');
    hash[key] = x;
    localStorage.setItem('newHash', JSON.stringify(hash))
    console.log(hash)
  }
  return btnx
}

/********创建image函数*********/
function createImg(domain) {
  var imgx = tag('img');
  if (domain) {
    imgx.src = 'http://' + domain + '/favicon.ico';
  } else {
    imgx.src = 'http://91jean.oss-cn-hangzhou.aliyuncs.com/18-8-11/46197852.jpg';
  }
  imgx.onerror = function() {
    this.src = 'http://91jean.oss-cn-hangzhou.aliyuncs.com/18-8-11/46197852.jpg';
  }
  return imgx
}


/********创建新hash函数*********/
function generateKbd(keys,hash){
  for (var i = 0; i < keys.length; i++) {
    var divx = tag('div');

    content.appendChild(divx);

    var row = keys[i];
    for (var j = 0; j < row.length; j++) {

      var btnx = createBtn(row[j])

      var imgx = createImg(hash[row[j]])

      var kbdx = tag('kbd');
      kbdx.textContent = row[j];
      kbdx.appendChild(imgx);
      kbdx.appendChild(btnx);

      divx.appendChild(kbdx);
    }
  }
}


/********监听用户函数*********/
function listenToUser(hash){
  document.onkeypress = function(presskey) {
    var key = presskey.key;
    var website = hash[key];
    console.log(website);
    //location.href=website;当前窗口打开
    window.open('http://' + website, '_blank')
  }
}
