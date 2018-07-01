layui.use(['layer','element'],function(){
        var layer = layui.layer
            ,element = layui.element;
        $(function(){
            $("#home_title").css("top",($(window).height()-$("#home_title").height())/2);
            $("#home_title").css("left",($(window).width()-$("#home_title").width())/2);
            $(window).resize(function(){
                $("#home_title").css("top",($(window).height()-$("#home_title").height())/2);
                $("#home_title").css("left",($(window).width()-$("#home_title").width())/2);
            });
            $("#link_home").click(function(){
                layer.msg($("#link_home").text());
                $("#bgdiv").fadeIn("slow");
                $(".layui-nav").removeClass("layui-bg-black");
                $(".layui-nav").addClass("layui-bg-clean");
                $("#li_more").removeClass("layui-this");
                $("#li_about").removeClass("layui-this");
                $("#li_home").addClass("layui-this");
                $("body").css("background-color","#000000");
                $("#page_time").hide("slow");
                $("#page_history").hide("slow");
                $("#page_about").hide("slow");
                $("#page_home").show("slow");
                $("#home_title").css("top",($(window).height()-$("#home_title").height())/2);
                $("#home_title").css("left",($(window).width()-$("#home_title").width())/2);
            });
            $("#link_time").click(function(){
                layer.msg($("#link_time").text());
                $("#bgdiv").fadeOut("slow");
                $(".layui-nav").addClass("layui-bg-black");
                $(".layui-nav").removeClass("layui-bg-clean");
                $("#li_home").removeClass("layui-this");
                $("#li_about").removeClass("layui-this");
                $("#li_more").addClass("layui-this");
                $("body").css("background-color","#FFFFFF");
                $("#page_home").hide("slow");
                $("#page_history").hide("slow");
                $("#page_about").hide("slow");
                $("#page_time").show("slow");
            });
            $("#link_history").click(function(){
                layer.msg($("#link_history").text());
                $("#bgdiv").fadeOut("slow");
                $(".layui-nav").addClass("layui-bg-black");
                $(".layui-nav").removeClass("layui-bg-clean");
                $("#li_home").removeClass("layui-this");
                $("#li_about").removeClass("layui-this");
                $("#li_more").addClass("layui-this");
                $("body").css("background-color","#FFFFFF");
                $("#page_home").hide("slow");
                $("#page_time").hide("slow");
                $("#page_about").hide("slow");
                $("#page_history").show("slow");
            });
            $("#link_about").click(function(){
                layer.msg($("#link_about").text());
                $("#bgdiv").fadeOut("slow");
                $(".layui-nav").addClass("layui-bg-black");
                $(".layui-nav").removeClass("layui-bg-clean");
                $("#li_home").removeClass("layui-this");
                $("#li_more").removeClass("layui-this");
                $("#li_about").addClass("layui-this");
                $("body").css("background-color","#FFFFFF");
                $("#page_home").hide("slow");
                $("#page_time").hide("slow");
                $("#page_history").hide("slow");
                $("#page_about").show("slow");
            });
        });
    });
