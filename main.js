var keyboard_letter = {
    0:['q','w','e','r','t','y','u','i','o','p'],
    1:['a','s','d','f','g','h','j','k','l'],
    2:['z','x','c','v','b','n','m'],
    'length':3
}
var keyboard_website = {
    'q':'www.qq.com','w':'www.weibo.com','e':'wwww.hao123.com','r':'zhidao.baidu.com','t':'video.baidu.com','i':'image.baidu.com','o':'tieba.baidu.com'
}
var webchange0 = JSON.parse(localStorage.getItem('webchange')||'null');
if(webchange0){
    keyboard_website = webchange0;
}
for(var index0 = 0;index0<keyboard_letter['length'];index0++){
    var div0 = document.createElement('div');
    keyboard.appendChild(div0);
    div0.className = 'row';
    var row = keyboard_letter[index0];
    for(var index1 = 0;index1<row.length;index1++){
        var kbd0 = document.createElement('kbd');
        div0.appendChild(kbd0);
        var span0 = document.createElement('span');
        kbd0.appendChild(span0);
        span0.textContent = row[index1];
        var button0 = document.createElement('button');
        button0.id = row[index1];
        button0.textContent = 'E';
        var img0 = document.createElement('img');
        kbd0.appendChild(img0);
        kbd0.appendChild(button0);
        if(keyboard_website[row[index1]]){
            img0.src = 'https://' +keyboard_website[row[index1]] +'/favicon.ico'
        }else{
            img0.src= './img/jinyuan.png'
        }
        img0.onerror = function(picture){
            picture.target.src = './img/jinyuan.png'        
        }
        button0.onclick = function(dianji){
            var x = prompt('输入网址');
            var key = dianji.target.id;
            keyboard_website[key] = x;
            var img1 = button0.previousSibling;
            img1.src = 'https://'+x+'/favicon.ico';
            img1.onerror=function(picture){
                picture.target.src = './img/jinyuan.png'
            }
            localStorage.setItem('webchange',JSON.stringify(keyboard_website));
        }
    }
}
document.onkeypress = function(presskey){
    var key = presskey['key'];
    var website = keyboard_website[key];
    window.open('https://' + website,'_blank');
}
