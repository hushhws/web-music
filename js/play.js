$(document).ready(function () {

    /* 解析url，获取data-song */
    (function ($) {
        $.getUrlParam = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
    })(jQuery);

    var data_song_url = $.getUrlParam('data-song');

    ajax({
        type: 'get',
        url: 'https://api.imjad.cn/cloudmusic/?type=song&id=' + data_song_url + '&br=128000',
        judg: true,
        success: function (data) {
            var oaud = $('#aaud');
            oaud.attr('src', data.data[0].url);

            var lyricArea = $('#lyricontent');

            ajax({
                type: 'get',
                url: 'https://api.imjad.cn/cloudmusic/?type=lyric&id='+ data_song_url +'&br=128000',
                judg:true,
                success:function(data){
                    var lrc = data.lrc.lyric;
                    console.log(lrc);
/*
                    var lyrics = lrc.split("\n");//按换行可以知道有多少句歌词
                    var lrcObj = {}; //存储每个时间点歌词
                    var Atime = {}; //存储时间
                    for(var i=0; i<lyrics.length; i++){
                        var lyric = decodeURIComponent(lyrics[i]);
                        var timeReg = /\[\d{2}\:\d{2}\.\d{1,3}]/g;
                        var timeRegExpArr = lyric.match(timeReg); //获取前面时间，如[00:20.499]
                        if(!timeRegExpArr) continue;
                        var clause = lyric.replace(timeReg,'');//获取该时间的歌词

                        for(var k=0; k<timeRegExpArr.length; k++){
                            var seconds = timeRegExpArr[k].toString().slice(1,-1).split(':');
                            seconds = parseInt (seconds[0])*60 + parseInt(seconds[1]);//按秒转化时间
                            lrcObj[seconds] = clause;//按秒存储歌词
                            Atime[i] = seconds;//存储第i句歌词的时间
                        }
                    }
                    console.log(Atime);
                    console.log(lrcObj);

                    lyricArea.html('');
                    lyricArea.scrollTop(0);

                    var i=0;
                    for(var k in lrcObj){ //在存储歌词的数组lrcObj中依次append
                        var txt = lrcObj[k];
                        if(!txt) txt = "&nbsp;";
                        var li = $("<li data-no='" + i + "' class='lrc-item'>" + txt + "</li>");
                        lyricArea.append(li);
                        i++;
                    }

                    //lyricArea.html('');
                    console.log("ready");
                    aaud.ontimeupdate = function () {
                        //console.log(this.currentTime);
                        for(var i=0; i<Atime.length; i++){
                            if(this.currentTime > Atime[i]){
                                lyricArea.html('');
                                var lii = $("<li data-no='" + i + "' class='lrc-item'>" + lrcObj[Atime[i]] + "</li>");
                                lyricArea.append(lii);
                            }
                        }
                    }
                    console.log("finish");

*/






                    //匹配时间
                    var timeReg = /\[\d{2}\:\d{2}\.\d{1,3}]/g;
                    var time = lrc.match(timeReg); //获取前面时间，如[00:20.499]
                    //console.log("time:"+time);

                    //匹配歌词
                    var Alyric = [];
                    var lyrics = lrc.replace(timeReg,'');//获取该时间的歌词
                    var Alyric = lyrics.split('\n');//按换行把每一句存储在Alyric数组中


                    var Atime =[];
                    for(var i=0; i<time.length-1;i++){ //按秒转化时间
                        var seconds = time[i].toString().slice(1,-1).split(':');
                        seconds = parseInt (seconds[0])*60 + parseInt(seconds[1]);
                        Atime[i]=seconds //存储第i句歌词的时间
                    }

                    //console.log(Atime);

                    for(var k in Alyric){ //在存储歌词的数组lrcObj中依次append
                        var txt = Alyric[k];
                        if(!txt) txt = "&nbsp;";
                        var li = $("<li data-no='" + k + "' class='lrc-item'>" + txt + "</li>");
                        lyricArea.append(li);
                        i++;
                    }

                    aaud.ontimeupdate = function () {
                        for (var i = 0; i < Atime.length; i++) {
                            if (this.currentTime > Atime[i]) {
                                $(".lplaying").removeClass("lplaying");     // 移除其余句子的正在播放样式
                                $(".lrc-item[data-no='" + i + "']").addClass("lplaying");    // 加上正在播放样式
                                var scroll = (lyricArea.children().height() * i) - ($(".lyric").height() / 2);
                                lyricArea.stop().animate({scrollTop: scroll}, 1000);  // 平滑滚动到当前歌词位置(更改这个数值可以改变歌词滚动速度，单位：毫秒)
                            }
                        }

                    }

                }
            })
        }
    });

    ajax({
        type: 'get',
        url: 'https://api.imjad.cn/cloudmusic/?type=detail&id=' + data_song_url,
        judg: true,
        success: function (data) {
            var musiccover = $('#music-cover');
            musiccover.attr('src', data.songs[0].al.picUrl);
            musiccover.css('cursor', 'pointer');
            var musicinfor = $('.musicinformation');
            var musicname = $("<div/>");
            musicname.html(data.songs[0].name);
            musicinfor.html('');
            var author = $("<div/>");
            author.html(data.songs[0].ar[0].name);
            musicinfor.append(musicname);
            musicinfor.append(author);
        }
    });



});
