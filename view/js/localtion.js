$(document).ready(function(){
   
    //以下是layui得代码
  layui.use(['layer','element','carousel','form'],function(){
      var layer=layui.layer,
      element=layui.element,
      carousel = layui.carousel,
      form=layui.form; 
   });
  $("#about").click(function(){//显示关于框
    layer.alert('<center>'+'信息与电气工程学院'+'<br>'+'软件工程1402'+'<br>'+
    '霍胜龙'+'<br>'+'</center>', {
        skin: 'layui-layer-molv' //样式类名
        ,closeBtn: 0,
        title:'快递管理系统',
        offset: '200px'
      });
     });
 
    // 百度地图API功能    
    map = new BMap.Map("allmap");
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT}));   // 左上角，添加比例尺
     
    map.addControl(new BMap.NavigationControl());     //左上角，添加默认缩放平移控件 

    map.addEventListener("click",function(e){
     // alert(e.point.lng+','+e.point.lat);
        var mPoint = new BMap.Point(e.point.lng,e.point.lat);
        var circle = new BMap.Circle(mPoint,3000,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.5});
        map.addOverlay(circle);//这里将圆形区域划出
        var local =  new BMap.LocalSearch(map, {renderOptions: {map: map, autoViewport: false}});  
        local.searchNearby('圆通快递',mPoint,3000);
    });//点击显示该地点的经纬度
     
    map.centerAndZoom(new BMap.Point(121.36132,37.526191), 13);
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    
    var data_info = [
    [121.36132,37.526191,"地址：山东省烟台市红旗中路186号鲁东大学逸夫实验楼"],
                     // [121.46554,37.482606,"地址：山东省烟台市莱山区清泉路30号烟台大学"],
                     // [121.382178,37.549927,"地址：山东省烟台市西大街86号"],
                     // [121.374704,37.537337,"地址：山东省烟台市青年南路116号"]
                    ];
    var opts = {
                width : 250,     // 信息窗口宽度
                height: 80,     // 信息窗口高度
                title : "信息窗口" , // 信息窗口标题
                enableMessage:true//设置允许信息窗发送短息
               };    
    for(var i=0;i<data_info.length;i++){
        var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
        var content = data_info[i][2];
        map.addOverlay(marker);               // 将标注添加到地图中
        addClickHandler(content,marker);
    }
    function addClickHandler(content,marker){
        marker.addEventListener("click",function(e){
            openInfo(content,e)}
        );
    };
    function openInfo(content,e){
        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
        map.openInfoWindow(infoWindow,point); //开启信息窗口
    }
});
      