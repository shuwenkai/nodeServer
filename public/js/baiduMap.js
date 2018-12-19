var points = [{
    id: 1,
    lng: 104.076726,
    lat: 30.606219,
    title: "成都富森美店 ",
    content: ["地址：成都市高新区天和西二街189号富森·美家居1号店负1层0036号", "电话：028-68787728"]
}, {
    id: 2,
    lng: 121.414049,
    lat: 31.213361,
    title: "上海虹桥南丰城店 ",
    content: ["地址：上海市长宁区遵义路100号虹桥南丰城1-L316号", "电话：021-62370638"]
}, {
    id: 3,
    lng: 118.789294,
    lat: 32.049643,
    title: "南京德基店",
    content: ["地址：德基广场二期四楼F432", "电话：025-86777446"]
}, {
    id: 4,
    lng: 113.962403,
    lat: 22.54746,
    title: "深圳万象天地店 ",
    content: ["地址：深圳市南山区深南大道9668号万象天地1层SL178号", "电话：0755-86680590"]
}, {
    id: 5,
    lng: 120.383413,
    lat: 36.071304,
    title: "青岛万象城店",
    content: ["地址：青岛市市南区山东路10号万象城 L-368号", "电话：0532-55575757"]
}];

new BaiduMap({
    id: "container1",
    level: 5,
    titleClass: "title",
    contentClass: "content",
    centerPoint: { // 地图中心点经纬度
        lng: 104.076726,
        lat: 30.606219,
    },
    index: -1,
    points: points,
    showLabel: true
});

new BaiduMap({
    id: "container2",
    level: 5,
    type: ["地图", "卫星"],
    width: 320,
    height: 70,
    titleClass: "title",
    contentClass: "content",
    showMarkPanorama: true,
    mapStyle: "light",
    icon: {
        url: "img/marker.png",
        width: 25,
        height: 96
    },
    centerPoint: { // 地图中心点经纬度
        lng: 104.076726,
        lat: 30.606219,
    },
    index: 0,
    points: points
});

var map = new BaiduMap({
    id: "container3",
    level: 5, //  选填--地图级别--(默认15)
    zoom: true, // 选填--是否启用鼠标滚轮缩放功能--(默认false)
    type: ["地图", "卫星", "三维"], // 选填--显示地图类型--(默认不显示)
    width: 320, // 选填--信息窗口width--(默认自动调整)
    height: 70, // 选填--信息窗口height--(默认自动调整)
    titleClass: "title",
    contentClass: "content",
    showPanorama: true, // 是否显示全景控件(默认false)
    showMarkPanorama: true, // 是否显示标注点全景图(默认false)
    showLabel: false, // 是否显示文本标注(默认false)
    mapStyle: "normal", // 默认normal,可选dark,light
    icon: { // 选填--自定义icon图标
        url: "img/marker2.png",
        width: 34,
        height: 94
    },
    centerPoint: { // 中心点经纬度
        lng: 104.076726,
        lat: 30.606219,
    },
    index: 3, // 开启对应的信息窗口，默认-1不开启
    animate: true, // 是否开启坠落动画，默认false
    points: points, // 标注点--id(唯一标识)
    callback: function(id) {
        $(".list").find("li").eq(id - 1).addClass("active").siblings().removeClass("active");
    }
});

var data = map.getPosition();
var $li = $(".list").find("li");

$li.each(function(i) {
    $(this).data("id", i + 1);
}).on("click", function() {
    map.openInfoWindow($(this).data("id"));
    $(this).addClass("active").siblings().removeClass("active");
}).eq(data.id - 1).addClass("active");