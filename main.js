var keys = {
    '0':['q','w','e','r','t','y','u','i','o','p'],
    '1':['a','s','d','f','g','h','j','k','l'],
    '2':['z','x','c','v','b','n','m'],
    'length':3
}
var hash = {
    'q':'www.qq.com','w':'www.weibo.com','e':'www.ele.me','r':'www.renren.com','t':'lol.qq.com'
}
//取出localStorage中的hash
var hashInlocalStorage = JSON.parse(localStorage.getItem('websitechange') || 'null');
if(hashInlocalStorage){
    hash = hashInlocalStorage;
}
index0 = 0;
while(index0 < keys['length']){
    div1 = document.createElement('div');
    wrapper.appendChild(div1);
    row = keys[index0];
    index1 = 0;
    while( index1 < row['length']){
        kbd1 = document.createElement('kbd');
        kbd1.textContent = row[index1];
        button1 = document.createElement('button');
        button1.textContent = 'E';
        button1.id = row[index1];
        button1.onclick = function(daxian){
            key = (daxian.target.id);
            x = prompt('输入网址');
            hash[key] = x;
            localStorage.setItem('websitechange',JSON.stringify(hash));
        }
        div1.appendChild(kbd1);
        kbd1.appendChild(button1);
        index1 = index1+1;
    }
    index0 = index0+1;
}
document.onkeypress = function(cheng){
    key = cheng['key'];
    website = hash[key];
    window.open('http://' + website, '_blank');
}

