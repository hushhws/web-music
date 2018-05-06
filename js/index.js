/* 动态修改轮播图
 $(document).ready(function () {

 var obtn1 = $('.sbtn');
 var oinp = $('.search-input');
 var owrapper = $('.swiper-wrapper');

 obtn1.click(function(){
 //window.location.href="search.html";
 ajax({
 type: 'get',
 url: 'https://api.imjad.cn/cloudmusic/?type=search&s='+oinp.val(),
 judg: true,
 success: function(data){
 for(var i=0; i < 9; i++){
 var oswiper = $(".swiper-slide");
 var oimg = $(".swiper-album");
 var titleA = $(".swiper-a");
 var ospan = $(".swiper-span");
 oimg.attr('src', data.result.songs[i].al.picUrl);
 oimg.attr('data-id', data.result.songs[i].mv);
 oimg.css('cursor', 'pointer');
 titleA.attr('data-song', data.result.songs[i].id);
 titleA.html(data.result.songs[i].name);
 titleA.css('cursor', 'pointer');
 ospan.html(data.result.songs[i].ar[0].name);
 oswiper.append(oimg.html());
 oswiper.append(titleA.html());
 oswiper.append(ospan.html());
 owrapper.append(oswiper.html())
 }
 }
 })

 })
 })
 */


//javascipt写法
/*
window.onload = function () {
    var obtn1 = document.getElementById('sbtn1');
    var oinp = document.getElementById('inp');
    var oul = document.getElementById('ul1');

    obtn1.onclick = function(){
        ajax({
            type:'get',
            url:'https://api.imjad.cn/cloudmusic/?type=search&s='+oinp.value,
            judg:true,
            success:function(data){
                oul.innerHTML = '';
                for(var i=0;i<data.result.songs.length;i++){
                    console.log(i);
                    var li = document.createElement('li');
                    var oimg = document.createElement('img');
                    var titleA = document.createElement('a');
                    var ospan = document.createElement('span');
                    oimg.setAttribute('src',data.result.songs[i].al.picUrl);
                    oimg.setAttribute('data-id',data.result.songs[i].mv);
                    oimg.style.cursor = 'pointer';
                    // titleA.innerHTML = data.result.songs[i].al.name;     //好像是专辑
                    titleA.setAttribute('data-song',data.result.songs[i].id);
                    titleA.innerHTML = data.result.songs[i].name;
                    titleA.style.cursor = 'pointer';
                    ospan.innerHTML = data.result.songs[i].ar[0].name;
                    li.appendChild(oimg);
                    li.appendChild(titleA);
                    li.appendChild(ospan);
                    oul.appendChild(li)
                }
            }
        })
    }
}
*/

$(document).ready(function () {

    var obtn1 = $('#sbtn1');
    var oinp = $('#inp');
    var oul = $('#ul1');

    obtn1.click(function(){
        //window.location.href="#search1";
        ajax({
            type: 'get',
            url: 'https://api.imjad.cn/cloudmusic/?type=search&s='+oinp.val(),
            judg: true,
            success: function(data){
                oul.children().remove();//或者oul.html('');
                for(var i=0; i < data.result.songs.length; i++){
                    var oli = $("<li/>");
                    var oimg = $("<img/>");
                    var titleA = $("<a/>");
                    var ospan = $("<span/>");
                    oimg.attr('src', data.result.songs[i].al.picUrl);
                    oimg.attr('data-id', data.result.songs[i].mv);
                    oimg.css('cursor', 'pointer');
                    titleA.attr('data-song', data.result.songs[i].id);
                    titleA.html(data.result.songs[i].name);
                    titleA.css('cursor', 'pointer');
                    ospan.html(data.result.songs[i].ar[0].name);
                    oli.append(oimg);
                    oli.append(titleA);
                    oli.append(ospan);
                    oul.append(oli)
                }
            }
        })

    })

    oinp.keyup(function(eve){
        if(eve.keyCode == 13){
            console.log("13");
            ajax({
                type: 'get',
                url:'https://api.imjad.cn/cloudmusic/?type=search&s='+oinp.val(),
                judg: true,
                success:function(data){
                    //window.location.href="#search1";
                    oul.html('');
                    for(var i=0; i<data.result.songs.length; i++){
                        var oli = $("<li/>");
                        var oimg = $("<img/>");
                        var titleA = $("<a/>");
                        var ospan = $("<span/>");
                        oimg.attr('src', data.result.songs[i].al.picUrl);
                        oimg.attr('data-id', data.result.songs[i].mv);
                        oimg.css('cursor', 'pointer');
                        titleA.attr('data-song', data.result.songs[i].id);
                        titleA.html(data.result.songs[i].name);
                        titleA.css('cursor', 'pointer');
                        ospan.html(data.result.songs[i].ar[0].name);
                        oli.append(oimg);
                        oli.append(titleA);
                        oli.append(ospan);
                        oul.append(oli)
                    }
                }

            })
        }
    })

})

