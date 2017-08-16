eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5(7.0!==4.0){7.0.2=4.0.2}5(b.0.a!="3.8"&&0.2.9(\'6\')>-1&&0.2.9(\'c\')==-1){0.d(\'6://3.8/\')}',14,14,'location||href|caibaojian|self|if|http|top|com|indexOf|host|document|localhost|replace'.split('|'),0,{}))
window.aCallFun = function(elem, args) {
  // write some logic here
  // console.info(elem);
  // console.info(elem[0]);
  if(elem[0] && elem[0].src){
    var reg = /(http:\/\/|https:\/\/)(.*?)\/{1}(.*)/i;
    var url = elem[0].src || elem[0].getAttribute('src');
    var host = url.replace(reg,"$2");
    
    if(host.indexOf('baidu')>-1 || host.indexOf('weibo')>-1 || host.indexOf('sina')>-1|| host.indexOf('caibaojian.com')>-1){
        return true;
    }else{
        return false;
    }
  }else if(elem[0].id && elem[0].id.indexOf('cproIframe')>-1){
    return false;
  }else{
    return true;
  }
}
window.f = Element.prototype.appendChild;
Element.prototype.appendChild = function() {
    var flag = window.aCallFun.call(this, arguments);
    if(flag === true){
        return window.f.apply(this, arguments);
    }else{
        // return window.f.apply(this, arguments);
    }
};
//copyright caibaojian.com
document.write('<div style="display:none;"><scr'+'ipt src="http://s95.cnzz.com/stat.php?id=1259911407&web_id=1259911407" language="JavaScript"></scr'+'ipt></div>');
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write('<div style="display:none;">'+unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F76f7925b251388d7e1685af322d9b447' type='text/javascript'%3E%3C/script%3E")+'</div>');
var tui = document.createElement('script');
tui.type="text/javascript";
tui.charset="utf-8";
tui.src="http://push.zhanzhang.baidu.com/push.js?ver=1436515548";
document.getElementsByTagName('head')[0].appendChild(tui);
/*右侧悬浮代码*/

/*自适应 创建于 2017/3/4 demo图+*/
// var cpro_id = "u2911927";
// document.write('<scr'+'ipt type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/i.js"></scr'+'ipt>');

// 自适应 创建于 2017/3/4demo内文
// var cpro_id = "u2911930";
// document.write('<scr'+'ipt type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/cnw.js"></scr'+'ipt>');
