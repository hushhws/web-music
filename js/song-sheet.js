$(document).ready(function () {

    var judge = 0; //判断是否切换为歌单内

    (function ($) {
        $.getUrlParam = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
    })(jQuery);

    var data_playlist_url = $.getUrlParam('data-playlist');

    ajax({
        type: 'get',
        url: 'https://api.imjad.cn/cloudmusic/?type=search&type=playlist&id=' + data_playlist_url,
        judg: true,
        success: function (data) {
            judge = 1;
            oul.children().remove();//或者oul.html('');
            for(var i=0; i < data.playlist.tracks.length; i++){
                var oli = $("<li/>");
                var oimg = $("<img/>");
                var titleA = $("<a/>");
                var ospan = $("<span/>");
                oimg.attr('src', data.playlist.tracks[i].al.picUrl);
                oimg.attr('data-song', data.playlist.tracks[i].id);
                oimg.css('cursor', 'pointer');
                titleA.attr('data-song', data.playlist.tracks[i].id);
                titleA.html(data.playlist.tracks[i].name);
                titleA.css('cursor', 'pointer');
                ospan.html(data.playlist.tracks[i].ar[0].name);
                oli.append(oimg);
                oli.append(titleA);
                oli.append(ospan);
                oul.append(oli)
            }
        }
    });


    var obtn1 = $('#sheet-sbtn1');
    var oinp = $('#sheet-inp');
    var oul = $('#ul1');


    obtn1.click(function(){
        //window.location.href="#search1";
        ajax({
            type: 'get',
            url: 'https://api.imjad.cn/cloudmusic/?type=search&search_type=1000&s='+oinp.val(),
            judg: true,
            success: function(data){
                judge = 0;
                //console.log(oinp.val());
                oul.children().remove();//或者oul.html('');
                for(var i=0; i < data.result.playlists.length; i++){
                    var oli = $("<li/>");
                    var oimg = $("<img/>");
                    var titleA = $("<a/>");
                    var ospan = $("<span/>");
                    oimg.attr('src', data.result.playlists[i].coverImgUrl);
                    oimg.attr('data-playlist', data.result.playlists[i].id);
                    oimg.css('cursor', 'pointer');
                    titleA.attr('data-playlist', data.result.playlists[i].id);
                    titleA.html(data.result.playlists[i].name);
                    titleA.css('cursor', 'pointer');
                    ospan.html(data.result.playlists[i].creator.nickname);
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
                url: 'https://api.imjad.cn/cloudmusic/?type=search&search_type=1000&s='+oinp.val(),
                judg: true,
                success:function(data){
                    judge = 0;
                    oul.children().remove();//或者oul.html('');
                    for(var i=0; i < data.result.playlists.length; i++){
                        var oli = $("<li/>");
                        var oimg = $("<img/>");
                        var titleA = $("<a/>");
                        var ospan = $("<span/>");
                        oimg.attr('src', data.result.playlists[i].coverImgUrl);
                        oimg.attr('data-playlist', data.result.playlists[i].id);
                        oimg.css('cursor', 'pointer');
                        titleA.attr('data-playlist', data.result.playlists[i].id);
                        titleA.html(data.result.playlists[i].name);
                        titleA.css('cursor', 'pointer');
                        ospan.html(data.result.playlists[i].creator.nickname);
                        oli.append(oimg);
                        oli.append(titleA);
                        oli.append(ospan);
                        oul.append(oli)
                    }
                }

            })
        }
    });



    oul.click(function(e) {
        var oEvent = e || window.event;
        var target = oEvent.srcElement || oEvent.target;

        if ((target.nodeName.toLowerCase() == 'a' || target.nodeName.toLowerCase() == 'img') && !judge) {
            ajax({
                type: 'get',
                url: 'https://api.imjad.cn/cloudmusic/?type=search&type=playlist&id='+target.getAttribute('data-playlist'),
                judg: true,
                success:function(data){
                    judge = 1;
                    oul.children().remove();//或者oul.html('');
                    for(var i=0; i < data.playlist.tracks.length; i++){
                        var oli = $("<li/>");
                        var oimg = $("<img/>");
                        var titleA = $("<a/>");
                        var ospan = $("<span/>");
                        oimg.attr('src', data.playlist.tracks[i].al.picUrl);
                        oimg.attr('data-song', data.playlist.tracks[i].id);
                        oimg.css('cursor', 'pointer');
                        titleA.attr('data-song', data.playlist.tracks[i].id);
                        titleA.html(data.playlist.tracks[i].name);
                        titleA.css('cursor', 'pointer');
                        ospan.html(data.playlist.tracks[i].ar[0].name);
                        oli.append(oimg);
                        oli.append(titleA);
                        oli.append(ospan);
                        oul.append(oli)
                    }
                }
            })
        }
    });

    oul.click(function(e) {
        var oEvent = e || window.event;
        var target = oEvent.srcElement || oEvent.target;

        if ((target.nodeName.toLowerCase() == 'a' || target.nodeName.toLowerCase() == 'img') && judge) {
            window.open("play.html?data-song=" + target.getAttribute('data-song'));
        }
    })


});

