$(document).ready(function(){
	var username="";
	username=window.location.href.split("=")[1];//获取用户名
	$('#packmanage').hide();
	$('.consolepack').click(function(){
		$('#packmanage').show();
	});
	$('#username').text(username);
	$.ajax({ 
	    type: "POST", 
	    dataType: "json", 
	    url: "http://localhost:8080/springmvc/packState.do" , 
	    success: function (result) {	            	 
	     	var str=new Array();
	     	str=result.split('+');
	     	$('#need-receive').text('待揽'+str[0]);
	     	$('#need-delive').text('待发'+str[1]);
	    },
	    error : function(result) {
	        
	    }
	}); 
	$('#loginout').click(function(event) {
		 
		window.location.replace("../index.html");
	});
// 加载系统时间
setInterval(function(){   
var date=new Date();   
var year=date.getFullYear(); //获取当前年份   
var mon=date.getMonth()+1; //获取当前月份   
var da=date.getDate(); //获取当前日   
var day=date.getDay(); //获取当前星期几   
var h=date.getHours(); //获取小时   
var m=date.getMinutes(); //获取分钟   
var s=date.getSeconds(); //获取秒   
var d=document.getElementById('Date');  
switch(day){
	case 0:
	day='日';
	break;
	case 1:
	day='一';
	break;	
	case 2:
	day='二';
	break;	
	case 3:
	day='三';
	break;	
	case 4:
	day='四';
	break;	
	case 5:
	day='五';
	break;	
	case 6:
	day='六';
	break;
}  
d.innerHTML=year+'-'+mon+'-'+da+' '+'星期'+day+' '+h+':'+m+':'+s;  },1000);  




// 百度地图API

   var map = new BMap.Map("allmap");
    // var poi = new BMap.Point(116.307852,40.057031);
    map.centerAndZoom("济南", 6);  
    var overlays = [];
	var overlaycomplete = function(e){
        overlays.push(e.overlay);
    };
    var styleOptions = {
        strokeColor:"red",    //边线颜色。
        fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3,       //边线的宽度，以像素为单位。
        strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
        fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，solid或dashed。
    }
    map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
    //实例化鼠标绘制工具
    var drawingManager = new BMapLib.DrawingManager(map, {
        isOpen: false, //是否开启绘制模式
        enableDrawingTool: true, //是否显示工具栏
        drawingToolOptions: {
            anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
            offset: new BMap.Size(5, 5), //偏离值
        },
        circleOptions: styleOptions, //圆的样式
        polylineOptions: styleOptions, //线的样式
        polygonOptions: styleOptions, //多边形的样式
        rectangleOptions: styleOptions //矩形的样式
    });  
 	$.ajax({ 
	    type: "POST", 
	    dataType: "json", 
	    url: "http://localhost:8080/springmvc/packpoint.do" , 
	    success: function (result) {	            	 
	     	console.log(result.point[1].id);
	     	 
     		for(var i=0;i<result.size;i++){
		        var marker = new BMap.Marker(new BMap.Point(result.point[i].longitude,result.point[i].latitude));  // 创建标注
		        var content = result.point[i].discription;
		        map.addOverlay(marker);               // 将标注添加到地图中
		        addClickHandler(content,marker);
		    }
		    function addClickHandler(content,marker){
		        marker.addEventListener("click",function(e){
		            openInfo(content,e)}
		        );
		    };
	    },
	    error : function(result) {
	        
	    }
	});
 
    var geoc = new BMap.Geocoder();    
    map.addEventListener("rightclick", function(e){   
        //通过点击百度地图，可以获取到对应的point, 由point的lng、lat属性就可以获取对应的经度纬度     
        var pt = e.point;
        geoc.getLocation(pt, function(rs){
            //addressComponents对象可以获取到详细的地址信息
            var addComp = rs.addressComponents;
            var cityinfo="";
            var site = addComp.province + ", " +addComp.city ;
            //将对应的HTML元素设置值
            cityinfo+=site;
            console.log(cityinfo);
        }); 
    });
	layui.use(['table','element','laypage'], function(){
		var $ = layui.$;
		var table = layui.table,
		element = layui.element,
		laypage=layui.laypage; 
		table.render({
		elem: '#idTest'
		,height: 'full-200'
		,width:'100%'
		,url: 'http://localhost:8080/springmvc/queryAllInfo.do' //数据接口
		,page: true //开启分页
		,cols: [[ //表头
			{field:'packnumber', width:150, title:'快递单号'}
			,{field:'sname', width:80, sort: true, title: '发件人'}
			,{field:'sphone', width:120, title: '发件人手机'}
			,{field:'saddress', width:160, title: '发件地址'} 
			,{field:'rname', width:80, title: '收件人'}
			,{field:'rphone', width:120, title: '收件人手机'}
			,{field:'raddress', width:160, title: '收件人地址'}
			,{field:'thingsType', width:160 , title: '物品类型'}
			,{field:'describe', width:180 , title: '备注'}
			,{field:'weight', width:40, title: '重量'}
			]]
		});
		
		//监听表格复选框选择
		table.on('checkbox(demo)', function(obj){
			console.log(obj)
		});
		//监听工具条
		table.on('tool(demo)', function(obj){
			var data = obj.data;
			if(obj.event === 'detail'){
				layer.msg('ID：'+ data.id + ' 的查看操作');
		} else if(obj.event === 'del'){
			layer.confirm('真的删除行么', function(index){
			obj.del();
			layer.close(index);
		});
		} else if(obj.event === 'edit'){
			layer.alert('编辑行：<br>'+ JSON.stringify(data.rname))
		}
		});

		active = {
		getCheckData: function(){ //获取选中数据
		var checkStatus = table.checkStatus('idTest')
			,data = checkStatus.data;
			layer.alert(JSON.stringify(data));
		}
		
		,isAll: function(){ //验证是否全选
			var checkStatus = table.checkStatus('idTest');
			layer.msg(checkStatus.isAll ? '全选': '未全选')
		}
		};
		$('#consoleallpack').on('click',  function(event) {
			alert('abcde');
		});
		$('.demoTable .layui-btn').on('click', function(){
			var type = $(this).data('type');
			active[type] ? active[type].call(this) : '';
		});
		
	});
 
});