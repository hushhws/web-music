$(function () {
    var btn=$('.btn'),
        login=$('.login'),
        register=$('.register'),
        popMask=$('.pop-mask'),
        popLayer=$('.pop-layer'),
        close=$('.close'),
        popContent=$('.pop-content'),
        loginWindow=$('.login-window').html(),
        registerWindow=$('.register-window').html();

    function showLayer(){
        // 登录
        btn.on('click',function(){
           registerTab();
        })
        login.on('click',function () {
            registerTab();
        })

        // 注册
        register.click(function(){
            maskShow(270,330);
            popContent.html(registerWindow);
            register.addClass('active');
            login.removeClass('active');

            // 账号表单校验
            $('.input[name=account]').blur(function(){
                var accountVal = $('input[name=account]').val();
                formVerify('account',accountVal);
            })
            // 验证码表单校验
            $('input[name=verify]').blur(function(){
                var verifyVal= $('input[name=verify]').val();
                formVerify('verify',verifyVal);
            })
            return false;
        })

        // 关闭弹出层
        close.click(function () {
            maskHide();
        });
    }
    // 注册显示函数
    function registerTab() {
        maskShow(310,330);
        popContent.html(loginWindow);
        login.addClass('active');
        register.removeClass('active');
        // 账号表单校验
        $('.input[name=account]').blur(function(){
            var accountVal = $('input[name=account]').val();
            formVerify('account',accountVal);
        })
        // 密码表单校验
        $('.input[name=password]').blur(function(){
            var passwordVal = $('input[name=password]').val();
            formVerify('password',passwordVal);
        })
        return false;
    }

    // 弹出层显示
    function maskShow(h,w){
        popMask.show();
        popLayer.show();
        popLayer.css({
            'height':h,
            'width':w
        })
    }
    // 弹出层隐藏
    function maskHide(){
        popMask.hide();
        popLayer.hide();
    }
    //表单验证函数(第一个参数为检测类型，第二个参数为表单数据)
    function formVerify(form,val) {
        // 账号检测
        if(form==='account'){
            var accountVal = $('input[name=account]').val();
            // 如果输入的登录名是11位数字或者非数字则可以登录，否则显示错误提示
            if(isNaN(accountVal)||(isNaN(accountVal)===false&&accountVal.length===11)){
                $('.erro-name').hide();
            }else{
                $('.erro-name').show();
            }
        }
        // 密码检测
        if(form==='password'){
            // 如果密码长度在6-16位之间则正确，否则显示错误提示
            if(val.length>=6&&val.length<=16){
                $('.erro-psd').hide();
            }else{
                $('.erro-psd').show();
            }
        }
        // 验证码检测
        if(form==='verify'){
            if(val==='gyyd'){
                $('.erro-verify').hide();
            }else{
                $('.erro-verify').show();
            }
        }
    }


    showLayer();

})
