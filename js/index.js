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
                    // titleA.innerHTML = data.result.songs[i].al.name;
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

        ajax({
            type: 'get',
            url: 'https://api.imjad.cn/cloudmusic/?type=search&s='+oinp.val(),
            judg: true,
            success: function(data){
                window.location.href="#search1";
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
            //console.log("13");
            ajax({
                type: 'get',
                url:'https://api.imjad.cn/cloudmusic/?type=search&s='+oinp.val(),
                judg: true,
                success:function(data){
                    window.location.href="#search1";
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
                        ospan.css('cursor', 'pointer');
                        oli.append(oimg);
                        oli.append(titleA);
                        oli.append(ospan);
                        oul.append(oli)
                    }
                }

            })
        }
    })

    oul.click(function(e){
        var oEvent = e || window.event;
        var target = oEvent.srcElement || oEvent.target;

        if(target.nodeName.toLowerCase() == 'a') {
            window.open("play.html?data-song=" + target.getAttribute('data-song'));
        }

        /*
        if(target.nodeName.toLowerCase() == 'img'){
            var mv_id = target.getAttribute('data-id');
            if(mv_id==0)
                alert('no mv');
            else {
                ajax({
                    type: 'get',
                    url: 'https://api.imjad.cn/cloudmusic/?type=mv&id=' + mv_id,
                    judg: true,
                    success: function (data) {
                        var ovio = $('#vio');
                        ovio.attr('src', data.data.brs["480"]);
                    }
                })
            }
        }

        if(target.nodeName.toLowerCase()== 'a' ){
            ajax({
                type:'get',
                url: 'https://api.imjad.cn/cloudmusic/?type=song&id='+target.getAttribute('data-song')+'&br=128000',
                judg:true,
                success: function (data) {
                    var oaud = $('#aaud');
                    oaud.attr('src',data.data[0].url);

                    ajax({
                        type: 'get',
                        url: 'https://api.imjad.cn/cloudmusic/?type=lyric&id='+target.getAttribute('data-song')+'&br=128000',
                        judg:true,
                        success:function(data){
                            var lyric = data.lrc.lyric;

                            var timeReg = /\[\d{2}\:\d{2}\.\d{1,3}]/g;
                            var time = lyric.match(timeReg);

                            var Alyric = [];
                            var lyrics = lyric.replace(timeReg,'');
                            var Alyric = lyrics.split('\n');

                            var Atime =[];
                            for(var i=0; i<time.length-1;i++){
                                seconds = time[i].toString().slice(1,-1).split(':');

                                seconds = parseInt (seconds[0])*60 + parseInt(seconds[1]);
                                Atime[i]=seconds
                            }

                            aud.ontimeupdate = function () {
                                var oul1 = $('#lyricontent');
                                for(var i=0; i<Atime.length; i++){
                                    if(this.currentTime>Atime[i]){
                                        oul1.html('');
                                        var li = $("<li/>")
                                        li.html(Alyric[i]);
                                        oul1.append(li)
                                    }
                                }
                            }
                        }
                    })

                }
            })
        }
        */
    })


});
