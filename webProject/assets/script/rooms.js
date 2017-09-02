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
    new HotelRoom('Philoxenia','Pefkochori ,Greece',0.4,0.6,['WiFi','Pool','Air conditioner','Pets','SPA','TV',"Parking",'Restaurant','Fitness'],125,'151.jpeg'),
    new HotelRoom('Imperial Palace','Solun, Greece',0.7,0.2,['WiFi','Pool','Air conditioner','TV',"Parking",'Restaurant','Fitness'],186,'164.jpeg'),
    new HotelRoom('Sentido Ixian','Rhodes Island, Greece',0.3,0.6,['WiFi','Pool','Air conditioner','Pets','TV',"Parking",'Restaurant','Fitness',"Spa"],435,'174.jpeg'),
    new HotelRoom('President','Atina,Greece',0.8,0.2,['WiFi','Pool','Air conditioner','Pets','TV',"Parking",'Restaurant','Fitness'],324,'188.jpeg'),
    new HotelRoom('The George','Mikonos,Greece',0.1,0.7,['WiFi','Pool','Air conditioner','Pets','TV',"Parking",'Restaurant','Fitness','Spa'],586,'200.jpeg'),
    new HotelRoom('Marina Hotel','Kushadasa,Turkey',0.3,1.0,['WiFi','Pool','Air conditioner','SPA','TV',"Parking",'Restaurant'],225,'206.jpeg'),
    new HotelRoom('Ayvalik Cinar','Ayvalik, Turkey',0.7,0.2,['WiFi','Pool','Air conditioner','TV','Restaurant'],95,'212.jpeg'),
    new HotelRoom('Royal Palace','Kushadasa,Turkey',0.4,2.8,['WiFi','Pool','Air conditioner','Pets','TV',"Parking",'Restaurant','Fitness',"Spa"],335,'213.jpeg'),
    new HotelRoom('President','Atina,Greece',0.8,0.2,['WiFi','Pool','Air conditioner','Pets','TV',"Parking",'Restaurant','Fitness'],324,'188.jpeg'),
    new HotelRoom('The George','Kushadasa,Turkey',0.1,0.7,['WiFi','Pool','Air conditioner','Pets','TV',"Parking",'Restaurant','Fitness','Spa'],586,'200.jpeg'),
];

function Hotels(hotel){
    this.hotel=hotel;
}
Hotels.prototype.show=function(){
   
    var result='<ol style="list-style-type:none">';
    this.hotel.forEach(function(element) {
        result+='<li style=""><article><img src='+element.url+'alt="Image of the hotel"/><h3>'+element.hotelname+'</h3><span>'+element.city+'</span><p>Distance to City center '+element.distToCityCenter+' km</p><p>Distance to the beach '+element.distToSea+' km</p></article></li>';
    }, this);
    result+='</ol>';

    document.getElementById('hotels').innerHTML=result;
}

var hotel=new Hotels(hotels);
hotel.show();