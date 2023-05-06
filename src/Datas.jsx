import React, { useState } from 'react';
//IMAGES
import sener from '../src/Images/SenerSen.png';
import yasemin from '../src/Images/YaseminSakallıoglu.png';
import rifkin from '../src/Images/Rifkin.png';
import kin from '../src/Images/Kin.png';
import konser from '../src/Images/Konser.png';
import yalın from '../src/Images/Yalın.png';
import cocuk from '../src/Images/cocuk.jpg';



const data = [
    {
        "id": 1,
        "title": "BKM Yaz Etkinlikleri: Zengin Mutfağı",
        "place": "Maximum UNIQ Hall",
        "type": "TİYATRO",
        "image": sener,
        "description": "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir lorem ipsum dolor sit amed 1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir lorem ipsum dolor sit amed",
        "time": "25 Haziran Cumartesi 16:00",
        "isAddedToTheCalendar": "add_circle",
        "date": "2023-06-25T16:00:00",
        handleDate: function () {
            const dateNow = new Date();
            const eventDate = new Date(this.date);
            return eventDate > dateNow;
        }
    },
    {
        "id": 2,
        "title": "Yasemin Sakallıoğlu",
        "place": "Maximum UNIQ Box",
        "type": "STAND UP",
        "image": yasemin,
        "description": "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir lorem ipsum dolor sit amed 1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir lorem ipsum dolor sit amed",
        "time": "2 Temmuz Cumartesi 19:00",
        "isAddedToTheCalendar": "add_circle",
        "date": "2023-07-02T19:00:00",
        handleDate: function () {
            const dateNow = new Date();
            const eventDate = new Date(this.date);
            return eventDate > dateNow;
        }
    },
    {
        "id": 3,
        "title": "Sinema Keyfi: Rifkin's Festivali",
        "place": "Maximum UNIQ Lounge",
        "type": "SİNEMA",
        "image": rifkin,
        "description": "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir lorem ipsum dolor sit amed 1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir lorem ipsum dolor sit amed",
        "time": "7 Eylül Salı 21:15",
        'isAddedToTheCalendar': 'add_circle',
        'date': "2024-07-05T21:30:00",
        handleDate: function () {
            const dateNow = new Date();
            const eventDate = new Date(this.date);
            return eventDate > dateNow;
        },
    },
    {
        "id": 4,
        "title": "Kin",
        "place": "Maximum UNIQ Hall",
        "type": "TİYATRO",
        "image": kin,
        "description": "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir lorem ipsum dolor sit amed 1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir lorem ipsum dolor sit amed",
        "time": "10 Temmuz Pazar 10:00",
        "isAddedToTheCalendar": "add_circle",
        "date": "2023-07-10T10:00:00",
        handleDate: function () {
            const dateNow = new Date();
            const eventDate = new Date(this.date);
            return eventDate > dateNow;
        }
    },
    {
        "id": 5,
        "title": "Metallica",
        "place": "Maximum UNIQ Açıkhava",
        "type": "KONSER",
        "image": konser,
        "description": "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir lorem ipsum dolor sit amed 1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir lorem ipsum dolor sit amed",
        "time": "17 Temmuz Pazar 09:00",
        "isAddedToTheCalendar": "add_circle",
        "date": "2023-07-17T09:00:00",
        handleDate: function () {
            const dateNow = new Date();
            const eventDate = new Date(this.date);
            return eventDate > dateNow;
        }
    },
    {
        "id": 6,
        "title": "Yalın",
        "place": "Maximum UNIQ Açıkhava",
        "type": "KONSER",
        "image": yalın,
        "description": "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir lorem ipsum dolor sit amed 1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir lorem ipsum dolor sit amed",
        "time": "24 Nisan Salı 08:30",
        "isAddedToTheCalendar": "add_circle",
        "date": "2022-04-24T08:30:00",
        "handleDate": function () {
            const dateNow = new Date();
            const eventDate = new Date(this.date);
            return eventDate > dateNow;
        }
    },
    {
        "id": 7,
        "title": "Karlar Ülkesi - Soğuk Macera",
        "place": "Maximum UNIQ Hall",
        "type": "ÇOCUK",
        "image": cocuk,
        "description": "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir lorem ipsum dolor sit amed 1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir lorem ipsum dolor sit amed",
        "time": "1 Haziran Çarşamba 18:00",
        "isAddedToTheCalendar": "add_circle",
        "date": "2021-06-01T18:00:00",
        "handleDate": function () {
            const dateNow = new Date();
            const eventDate = new Date(this.date);
            return eventDate > dateNow;
        }
    },
]

// const handleDate = () => {
//     const dateNow = new Date();
//     data.map((item) => item.time > dateNow ? true : false)
// }

export default data