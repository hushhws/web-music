$(document).ready(function () {
    var obtn1 = $('#recommend-btn1');
    var obtn2 = $('#recommend-btn2');
    var obtn3 = $('#recommend-btn3');
    var obtn4 = $('#recommend-btn4');
    var obtn5 = $('#recommend-btn5');
    var oul = $('#recommend-ul');

    obtn1.click(function(){
        window.location.href="#auto-recommend-title";
        //var oid = obtn.attr("id");
        //console.log(oid);
        var rand = parseInt(Math.random() * 20);
        ajax({
            type: 'get',
            url: 'https://api.imjad.cn/cloudmusic/?type=search&search_type=1000&s='+ obtn1.text(),
            judg: true,
            success: function(data){
                console.log(obtn1.text());
                var playlist_id = data.result.playlists[rand].id;
                ajax({
                    type: 'get',
                    url: 'https://api.imjad.cn/cloudmusic/?type=search&type=playlist&id='+playlist_id,
                    judg: true,
                    success:function(data){
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
        })
    });

    obtn2.click(function(){
        window.location.href="#auto-recommend-title";
        var rand = parseInt(Math.random() * 20);
        ajax({
            type: 'get',
            url: 'https://api.imjad.cn/cloudmusic/?type=search&search_type=1000&s='+ obtn2.text(),
            judg: true,
            success: function(data){
                console.log(obtn2.text());
                var playlist_id = data.result.playlists[rand].id;
                ajax({
                    type: 'get',
                    url: 'https://api.imjad.cn/cloudmusic/?type=search&type=playlist&id='+playlist_id,
                    judg: true,
                    success:function(data){
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
        })
    });

    obtn3.click(function(){
        window.location.href="#auto-recommend-title";
        var rand = parseInt(Math.random() * 20);
        ajax({
            type: 'get',
            url: 'https://api.imjad.cn/cloudmusic/?type=search&search_type=1000&s='+ obtn3.text(),
            judg: true,
            success: function(data){
                console.log(obtn3.text());
                var playlist_id = data.result.playlists[rand].id;
                ajax({
                    type: 'get',
                    url: 'https://api.imjad.cn/cloudmusic/?type=search&type=playlist&id='+playlist_id,
                    judg: true,
                    success:function(data){
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
        })
    });

    obtn4.click(function(){
        window.location.href="#auto-recommend-title";
        var rand = parseInt(Math.random() * 20);
        ajax({
            type: 'get',
            url: 'https://api.imjad.cn/cloudmusic/?type=search&search_type=1000&s='+ obtn4.text(),
            judg: true,
            success: function(data){
                console.log(obtn4.text());
                var playlist_id = data.result.playlists[rand].id;
                ajax({
                    type: 'get',
                    url: 'https://api.imjad.cn/cloudmusic/?type=search&type=playlist&id='+playlist_id,
                    judg: true,
                    success:function(data){
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
        })
    });

    obtn5.click(function(){
        window.location.href="#auto-recommend-title";
        var rand = parseInt(Math.random() * 20);
        ajax({
            type: 'get',
            url: 'https://api.imjad.cn/cloudmusic/?type=search&search_type=1000&s='+ obtn5.text(),
            judg: true,
            success: function(data){
                console.log(obtn5.text());
                var playlist_id = data.result.playlists[rand].id;
                ajax({
                    type: 'get',
                    url: 'https://api.imjad.cn/cloudmusic/?type=search&type=playlist&id='+playlist_id,
                    judg: true,
                    success:function(data){
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
        })
    });

    oul.click(function(e) {
        var oEvent = e || window.event;
        var target = oEvent.srcElement || oEvent.target;

        if ((target.nodeName.toLowerCase() == 'a' || target.nodeName.toLowerCase() == 'img')) {
            window.open("play.html?data-song=" + target.getAttribute('data-song'));
        }
    })

});

