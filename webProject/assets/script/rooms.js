function HotelRoom(hotelname,city,distToSea,distToCityCenter,uslugi,price,url){
    this.hotelname=hotelname;
    this.city=city;
    this.distToCityCenter=distToCityCenter;
    this.distToSea=distToSea;
    this.uslugi=uslugi;
    this.price=price;
    this.likes=0;
    this.url=url;
}
HotelRoom.prototype.showInfo=function(){

    var result='<article><h4>'+this.hotelname+'</h4><br/><span>'+this.city+'</span></article>'
    return result;
}
var hotels=[
    new HotelRoom('Philoxenia','Pefkochori ,Greece',0.4,0.6,['WiFi','Pool','Air conditioner','Pets','SPA','TV',"Parking",'Restaurant','Fitness'],125),
    new HotelRoom('Imperial Palace','Solun, Greece',0.7,0.2,['WiFi','Pool','Air conditioner','TV',"Parking",'Restaurant','Fitness'],186,),
    new HotelRoom('Sentido Ixian','Rhodes Island, Greece',0.3,0.6,['WiFi','Pool','Air conditioner','Pets','TV',"Parking",'Restaurant','Fitness',"Spa"],435,),
    new HotelRoom('President','Atina,Greece',0.8,0.2,['WiFi','Pool','Air conditioner','Pets','TV',"Parking",'Restaurant','Fitness'],324),
    new HotelRoom('The George','Mikonos,Greece',0.1,0.7,['WiFi','Pool','Air conditioner','Pets','TV',"Parking",'Restaurant','Fitness','Spa'],586,),
    new HotelRoom('Marina Hotel','Kushadasa,Turkey',0.3,1.0,['WiFi','Pool','Air conditioner','SPA','TV',"Parking",'Restaurant'],225),
    new HotelRoom('Ayvalik Cinar','Ayvalik, Turkey',0.7,0.2,['WiFi','Pool','Air conditioner','TV','Restaurant'],95),
    new HotelRoom('Royal Palace','Kushadasa,Turkey',0.4,2.8,['WiFi','Pool','Air conditioner','Pets','TV',"Parking",'Restaurant','Fitness',"Spa"],335),
    new HotelRoom('President','Atina,Greece',0.8,0.2,['WiFi','Pool','Air conditioner','Pets','TV',"Parking",'Restaurant','Fitness'],324),
    new HotelRoom('The George','Kushadasa,Turkey',0.1,0.7,['WiFi','Pool','Air conditioner','Pets','TV',"Parking",'Restaurant','Fitness','Spa'],586),
];
for(var index=0;index<hotels.length;index++){
document.getElementById('hotels').innerHTML=hotels[index].showInfo();

}