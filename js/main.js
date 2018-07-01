$(function(){
    countTime();
    document.title = "【等待响铃】C7Bell";
});
function countTime() {  
    //获取当前时间  
    var date = new Date();  
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    
    //输出时间
    if(hours<10){
        document.getElementById("_h").innerHTML = "0"+hours;
    }else{
        document.getElementById("_h").innerHTML = hours;
    }
    
    if(min<10){
        document.getElementById("_m").innerHTML = "0"+min;
    }else{
        document.getElementById("_m").innerHTML = min;
    }
    
    if(sec<10){
        document.getElementById("_s").innerHTML = "0"+sec;
    }else{
        document.getElementById("_s").innerHTML = sec;
    }
    
    //判断并响铃
    if(sec===0){
        if(hours==7){
            if(min==28){
                ringing("readyup");
            }else if(min==30){
                ringing("up");
            }else if(min==45){
                ringing("down");
            }else if(min==48){
                ringing("readyup");
            }else if(min==50){
                ringing("up");
            }
        }else if(hours==8){
            if(min==30){
                ringing("down");
            }else if(min==38){
                ringing("readyup");
            }else if(min==40){
                ringing("up");
            }
        }else if(hours==9){
            if(min==20){
                ringing("down");
            }else if(min==48){
                ringing("readyup");
            }else if(min==50){
                ringing("up");
            }
        }else if(hours==10){
            if(min==30){
                ringing("down");
            }else if(min==38){
                ringing("readyup");
            }else if(min==40){
                ringing("up");
            }
        }else if(hours==11){
            if(min==20){
                ringing("down");
            }else if(min==28){
                ringing("readyup");
            }else if(min==30){
                ringing("up");
            }
        }else if(hours==12){
            if(min==10){
                ringing("down");
            }
        }else if(hours==14){
            if(min==48){
                ringing("readyup");
            }else if(min==50){
                ringing("up");
            }
        }else if(hours==15){
            if(min==30){
                ringing("down");
            }else if(min==43){
                ringing("readyup");
            }else if(min==45){
                ringing("up");
            }
        }else if(hours==16){
            if(min==25){
                ringing("down");
            }else if(min==33){
                ringing("readyup");
            }else if(min==35){
                ringing("up");
            }
        }else if(hours==17){
            if(min==15){
                ringing("down");
            }
        }else if(hours==18){
            if(min==28){
                ringing("readyup");
            }else if(min==30){
                ringing("up");
            }else if(min==58){
                ringing("up");
            }
        }else if(hours==19){
            if(min===0){
                ringing("up");
            }else if(min==50){
                ringing("down");
            }else if(min==58){
                ringing("readyup");
            }
        }else if(hours==20){
            if(min===0){
                ringing("up");
            }else if(min==50){
                ringing("down");
            }else if(min==58){
                ringing("readyup");
            }
        }else if(hours==21){
            if(min===0){
                ringing("up");
            }else if(min==50){
                ringing("down");
            }else if(min==58){
                ringing("readyup");
            }
        }else if(hours==22){
            if(min===0){
                ringing("up");
            }else if(min=='30'){
                ringing("down");
            }
        }
    }
    //递归每秒调用countTime方法，显示动态时间效果
    setTimeout(function(){
        countTime();
    },1000);
}

function ringing(type){
    var upring = "https://wavelet.wicp.net/o_1ch7ol1dn1vso897foqljsk3a.mp3";//上课铃和预备铃
    var downring = "https://wavelet.wicp.net/o_1ch7ons1v1vvs1pbf1ttf14p81dfpa.mp3";//下课铃
    if(type=="up" || type=="readyup"){
        if(type=="readyup"){
            $('body').overhang({
		        type: 'warn',
		        message: '预备铃已响起。'
	        });
	        $(".layui-timeline").prepend('<li class="layui-timeline-item"><i class="layui-icon layui-timeline-axis">&#xe63f;</i><div class="layui-timeline-content layui-text"><div class="layui-timeline-title">'+$("#_h").text()+":"+$("#_m").text()+":"+$("#_s").text()+'&nbsp;&nbsp;预备铃'+'</div></div></li>');
            document.title ="【预备铃】C7Bell";
        }else{
            $('body').overhang({
		        type: 'info',
		        message: '上课铃已响起。'
	        });
	        $(".layui-timeline").prepend('<li class="layui-timeline-item"><i class="layui-icon layui-timeline-axis">&#xe63f;</i><div class="layui-timeline-content layui-text"><div class="layui-timeline-title">'+$("#_h").text()+":"+$("#_m").text()+":"+$("#_s").text()+'&nbsp;&nbsp;上课铃'+'</div></div></li>');
            document.title ="【上课铃】C7Bell";
        }
        var audioUp = new Audio(upring);
        audioUp.play();
        setTimeout(function(){
            document.title ="【等待响铃】C7Bell";
            //delete audioUp;//销毁对象
        },30000);
        
    }else{
        $('body').overhang({
	        type: 'success',
	        message: '下课铃已响起。'
	    });
	    $(".layui-timeline").prepend('<li class="layui-timeline-item"><i class="layui-icon layui-timeline-axis">&#xe63f;</i><div class="layui-timeline-content layui-text"><div class="layui-timeline-title">'+$("#_h").text()+":"+$("#_m").text()+":"+$("#_s").text()+'&nbsp;&nbsp;下课铃'+'</div></div></li>');
        document.title ="【下课铃】C7Bell";
        var audioDown = new Audio(downring);
        audioDown.play();
        setTimeout(function(){
            document.title ="【等待响铃】C7Bell";
            //delete audioDown;//销毁对象
        },30000);
    }
    $("#history_not").remove();
}
