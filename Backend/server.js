// server.js
const { default: axios } = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001; // Use any port you prefer

const DUMMY_DATA = [
  {
    greenhouse_name: "Seracell Seram 1",
    sektors: [
      {
        sektor_name: "Sektör-1",
        sensor_list: [
          {
            sensor_name: "Sıcaklık-1",
            sensor_type: "Hava Sıcaklığı",
            unit: "°C",
            minutely: [
              {
                value: 15.9,
                date: "28 Mayıs 05:48",
              },
              {
                value: 16,
                date: "28 Mayıs 05:53",
              },
              {
                value: 15.9,
                date: "28 Mayıs 05:58",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:03",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:08",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:13",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:18",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:23",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:28",
              },
              {
                value: 16.1,
                date: "28 Mayıs 06:33",
              },
              {
                value: 17,
                date: "28 Mayıs 06:38",
              },
              {
                value: 17.5,
                date: "28 Mayıs 06:43",
              },
              {
                value: 17.9,
                date: "28 Mayıs 06:48",
              },
              {
                value: 18.3,
                date: "28 Mayıs 06:53",
              },
              {
                value: 18.7,
                date: "28 Mayıs 06:58",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:03",
              },
              {
                value: 17.7,
                date: "28 Mayıs 07:08",
              },
              {
                value: 17.4,
                date: "28 Mayıs 07:13",
              },
              {
                value: 17.4,
                date: "28 Mayıs 07:18",
              },
              {
                value: 17.6,
                date: "28 Mayıs 07:23",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:28",
              },
              {
                value: 18,
                date: "28 Mayıs 07:33",
              },
              {
                value: 18.1,
                date: "28 Mayıs 07:38",
              },
              {
                value: 18.2,
                date: "28 Mayıs 07:43",
              },
              {
                value: 18.4,
                date: "28 Mayıs 07:48",
              },
              {
                value: 18.7,
                date: "28 Mayıs 07:53",
              },
              {
                value: 18.8,
                date: "28 Mayıs 07:58",
              },
              {
                value: 19,
                date: "28 Mayıs 08:03",
              },
              {
                value: 19.4,
                date: "28 Mayıs 08:08",
              },
              {
                value: 19.5,
                date: "28 Mayıs 08:13",
              },
              {
                value: 20.1,
                date: "28 Mayıs 08:18",
              },
              {
                value: 20.1,
                date: "28 Mayıs 08:23",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:28",
              },
              {
                value: 22.9,
                date: "28 Mayıs 08:33",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:38",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:43",
              },
              {
                value: 20.5,
                date: "28 Mayıs 08:48",
              },
              {
                value: 21.5,
                date: "28 Mayıs 08:53",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:58",
              },
              {
                value: 23.4,
                date: "28 Mayıs 09:03",
              },
              {
                value: 24.2,
                date: "28 Mayıs 09:08",
              },
              {
                value: 24.4,
                date: "28 Mayıs 09:13",
              },
              {
                value: 24.6,
                date: "28 Mayıs 09:18",
              },
              {
                value: 23,
                date: "28 Mayıs 09:23",
              },
              {
                value: 23,
                date: "28 Mayıs 09:28",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:33",
              },
              {
                value: 25.6,
                date: "28 Mayıs 09:38",
              },
              {
                value: 22.2,
                date: "28 Mayıs 09:43",
              },
              {
                value: 22,
                date: "28 Mayıs 09:48",
              },
              {
                value: 21.1,
                date: "28 Mayıs 09:53",
              },
              {
                value: 21.1,
                date: "28 Mayıs 09:58",
              },
              {
                value: 20.8,
                date: "28 Mayıs 10:03",
              },
              {
                value: 21.3,
                date: "28 Mayıs 10:08",
              },
              {
                value: 21,
                date: "28 Mayıs 10:13",
              },
              {
                value: 21,
                date: "28 Mayıs 10:18",
              },
              {
                value: 21,
                date: "28 Mayıs 10:23",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:28",
              },
              {
                value: 21.5,
                date: "28 Mayıs 10:33",
              },
              {
                value: 21.3,
                date: "28 Mayıs 10:38",
              },
              {
                value: 21.5,
                date: "28 Mayıs 10:43",
              },
              {
                value: 21.6,
                date: "28 Mayıs 10:48",
              },
              {
                value: 21.4,
                date: "28 Mayıs 10:53",
              },
              {
                value: 21.2,
                date: "28 Mayıs 10:58",
              },
              {
                value: 21.2,
                date: "28 Mayıs 11:03",
              },
              {
                value: 20.9,
                date: "28 Mayıs 11:08",
              },
              {
                value: 21,
                date: "28 Mayıs 11:13",
              },
              {
                value: 21.4,
                date: "28 Mayıs 11:18",
              },
              {
                value: 21.5,
                date: "28 Mayıs 11:23",
              },
              {
                value: 21.7,
                date: "28 Mayıs 11:28",
              },
              {
                value: 21.6,
                date: "28 Mayıs 11:33",
              },
              {
                value: 21.8,
                date: "28 Mayıs 11:38",
              },
              {
                value: 21.7,
                date: "28 Mayıs 11:43",
              },
              {
                value: 21.7,
                date: "28 Mayıs 11:48",
              },
              {
                value: 21.6,
                date: "28 Mayıs 11:53",
              },
              {
                value: 22,
                date: "28 Mayıs 11:58",
              },
              {
                value: 21.9,
                date: "28 Mayıs 12:03",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:08",
              },
              {
                value: 22.8,
                date: "28 Mayıs 12:13",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:18",
              },
              {
                value: 21.9,
                date: "28 Mayıs 12:23",
              },
              {
                value: 21.8,
                date: "28 Mayıs 12:28",
              },
              {
                value: 21.7,
                date: "28 Mayıs 12:33",
              },
              {
                value: 21.8,
                date: "28 Mayıs 12:38",
              },
              {
                value: 21.8,
                date: "28 Mayıs 12:43",
              },
              {
                value: 21.5,
                date: "28 Mayıs 12:48",
              },
              {
                value: 21.7,
                date: "28 Mayıs 12:53",
              },
              {
                value: 21.6,
                date: "28 Mayıs 12:58",
              },
              {
                value: 21.4,
                date: "28 Mayıs 13:03",
              },
              {
                value: 22,
                date: "28 Mayıs 13:08",
              },
              {
                value: 22,
                date: "28 Mayıs 13:13",
              },
              {
                value: 21.7,
                date: "28 Mayıs 13:18",
              },
              {
                value: 21.6,
                date: "28 Mayıs 13:23",
              },
              {
                value: 21.5,
                date: "28 Mayıs 13:28",
              },
              {
                value: 21.3,
                date: "28 Mayıs 13:33",
              },
              {
                value: 21.3,
                date: "28 Mayıs 13:38",
              },
              {
                value: 21.3,
                date: "28 Mayıs 13:43",
              },
              {
                value: 21.2,
                date: "28 Mayıs 13:48",
              },
              {
                value: 21.5,
                date: "28 Mayıs 13:53",
              },
              {
                value: 21.7,
                date: "28 Mayıs 13:58",
              },
              {
                value: 21.7,
                date: "28 Mayıs 14:03",
              },
              {
                value: 21.9,
                date: "28 Mayıs 14:08",
              },
              {
                value: 22,
                date: "28 Mayıs 14:13",
              },
              {
                value: 21.1,
                date: "28 Mayıs 14:18",
              },
              {
                value: 20.9,
                date: "28 Mayıs 14:23",
              },
              {
                value: 20.9,
                date: "28 Mayıs 14:28",
              },
              {
                value: 21.4,
                date: "28 Mayıs 14:33",
              },
              {
                value: 22.5,
                date: "28 Mayıs 14:38",
              },
              {
                value: 22.5,
                date: "28 Mayıs 14:43",
              },
              {
                value: 22.9,
                date: "28 Mayıs 14:48",
              },
              {
                value: 23.2,
                date: "28 Mayıs 14:53",
              },
              {
                value: 23.5,
                date: "28 Mayıs 14:58",
              },
              {
                value: 23.1,
                date: "28 Mayıs 15:03",
              },
              {
                value: 23.1,
                date: "28 Mayıs 15:08",
              },
              {
                value: 23.2,
                date: "28 Mayıs 15:13",
              },
              {
                value: 22.8,
                date: "28 Mayıs 15:18",
              },
              {
                value: 22.6,
                date: "28 Mayıs 15:23",
              },
              {
                value: 22.3,
                date: "28 Mayıs 15:28",
              },
              {
                value: 22.6,
                date: "28 Mayıs 15:33",
              },
              {
                value: 22.6,
                date: "28 Mayıs 15:38",
              },
              {
                value: 22.6,
                date: "28 Mayıs 15:43",
              },
              {
                value: 22.2,
                date: "28 Mayıs 15:48",
              },
              {
                value: 22.3,
                date: "28 Mayıs 15:53",
              },
              {
                value: 22.1,
                date: "28 Mayıs 15:58",
              },
              {
                value: 22.1,
                date: "28 Mayıs 16:03",
              },
              {
                value: 22.4,
                date: "28 Mayıs 16:08",
              },
              {
                value: 22.1,
                date: "28 Mayıs 16:13",
              },
              {
                value: 21.7,
                date: "28 Mayıs 16:18",
              },
              {
                value: 21.8,
                date: "28 Mayıs 16:23",
              },
              {
                value: 21.9,
                date: "28 Mayıs 16:28",
              },
              {
                value: 22,
                date: "28 Mayıs 16:33",
              },
              {
                value: 21.9,
                date: "28 Mayıs 16:38",
              },
              {
                value: 22.3,
                date: "28 Mayıs 16:43",
              },
              {
                value: 22.1,
                date: "28 Mayıs 16:48",
              },
              {
                value: 21.9,
                date: "28 Mayıs 16:53",
              },
              {
                value: 22,
                date: "28 Mayıs 16:58",
              },
              {
                value: 21.9,
                date: "28 Mayıs 17:03",
              },
              {
                value: 22.3,
                date: "28 Mayıs 17:10",
              },
              {
                value: 22.4,
                date: "28 Mayıs 17:13",
              },
              {
                value: 23.1,
                date: "28 Mayıs 17:18",
              },
              {
                value: 23.3,
                date: "28 Mayıs 17:23",
              },
              {
                value: 23,
                date: "28 Mayıs 17:28",
              },
              {
                value: 22.3,
                date: "28 Mayıs 17:33",
              },
              {
                value: 22.1,
                date: "28 Mayıs 17:38",
              },
              {
                value: 22.3,
                date: "28 Mayıs 17:43",
              },
            ],
            daily: [
              {
                min: 4.6,
                avg: 8.71,
                max: 18.7,
                date: "28 Nisan 23",
              },
              {
                min: 1.8,
                avg: 11.76,
                max: 22.5,
                date: "29 Nisan 23",
              },
              {
                min: 7.3,
                avg: 14.61,
                max: 24.8,
                date: "30 Nisan 23",
              },
              {
                min: 5.4,
                avg: 16.67,
                max: 26.6,
                date: "01 Mayıs 23",
              },
              {
                min: 9.9,
                avg: 17.62,
                max: 24.3,
                date: "02 Mayıs 23",
              },
              {
                min: 12.2,
                avg: 16.71,
                max: 23.7,
                date: "03 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 18.04,
                max: 25.5,
                date: "04 Mayıs 23",
              },
              {
                min: 11.9,
                avg: 14.13,
                max: 18.3,
                date: "05 Mayıs 23",
              },
              {
                min: 12.1,
                avg: 16.79,
                max: 22.8,
                date: "06 Mayıs 23",
              },
              {
                min: 8.6,
                avg: 17.33,
                max: 25.1,
                date: "07 Mayıs 23",
              },
              {
                min: 8.1,
                avg: 17.2,
                max: 25.8,
                date: "08 Mayıs 23",
              },
              {
                min: 11.6,
                avg: 15.4,
                max: 22.2,
                date: "09 Mayıs 23",
              },
              {
                min: 11,
                avg: 14.35,
                max: 20.2,
                date: "10 Mayıs 23",
              },
              {
                min: 10.5,
                avg: 14.55,
                max: 20.1,
                date: "11 Mayıs 23",
              },
              {
                min: 8,
                avg: 12.99,
                max: 18.3,
                date: "12 Mayıs 23",
              },
              {
                min: 7,
                avg: 15.01,
                max: 23.2,
                date: "13 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 16.34,
                max: 25.1,
                date: "14 Mayıs 23",
              },
              {
                min: 12.4,
                avg: 20.66,
                max: 30.1,
                date: "15 Mayıs 23",
              },
              {
                min: 14.5,
                avg: 20.48,
                max: 28.6,
                date: "16 Mayıs 23",
              },
              {
                min: 15.3,
                avg: 21.31,
                max: 29.3,
                date: "17 Mayıs 23",
              },
              {
                min: 14,
                avg: 18.36,
                max: 23.7,
                date: "18 Mayıs 23",
              },
              {
                min: 10.5,
                avg: 17.76,
                max: 29.1,
                date: "19 Mayıs 23",
              },
              {
                min: 10,
                avg: 18.82,
                max: 27.1,
                date: "20 Mayıs 23",
              },
              {
                min: 11.4,
                avg: 18.95,
                max: 26.9,
                date: "21 Mayıs 23",
              },
              {
                min: 11.1,
                avg: 18.36,
                max: 26.6,
                date: "22 Mayıs 23",
              },
              {
                min: 12.2,
                avg: 19.45,
                max: 26.6,
                date: "23 Mayıs 23",
              },
              {
                min: 11.9,
                avg: 19.38,
                max: 27.8,
                date: "24 Mayıs 23",
              },
              {
                min: 10.7,
                avg: 20.21,
                max: 28.7,
                date: "25 Mayıs 23",
              },
              {
                min: 12.1,
                avg: 21.06,
                max: 29,
                date: "26 Mayıs 23",
              },
              {
                min: 13.8,
                avg: 21.2,
                max: 28.1,
                date: "27 Mayıs 23",
              },
              {
                min: 15.4,
                avg: 20.06,
                max: 25.6,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 12.1,
                avg: 12.36,
                max: 12.7,
                date: "9 - 15 Ocak",
              },
              {
                min: 4.4,
                avg: 10.89,
                max: 20.4,
                date: "16 - 22 Ocak",
              },
              {
                min: -0.1,
                avg: 5.85,
                max: 14,
                date: "23 - 29 Ocak",
              },
              {
                min: -2,
                avg: 4.01,
                max: 16.2,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: -4.2,
                avg: 3.57,
                max: 13.6,
                date: "6 - 12 Şubat",
              },
              {
                min: -2.6,
                avg: 10.9,
                max: 22.9,
                date: "13 - 19 Şubat",
              },
              {
                min: 4.5,
                avg: 13.47,
                max: 23.8,
                date: "20 - 26 Şubat",
              },
              {
                min: 2.6,
                avg: 10.53,
                max: 21.2,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 0,
                avg: 12.14,
                max: 24.7,
                date: "6 - 12 Mart",
              },
              {
                min: 2.5,
                avg: 9.96,
                max: 21.8,
                date: "13 - 19 Mart",
              },
              {
                min: 2.2,
                avg: 12,
                max: 26.5,
                date: "20 - 26 Mart",
              },
              {
                min: -1.4,
                avg: 13.62,
                max: 26,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 3.2,
                avg: 11.33,
                max: 22.8,
                date: "3 - 9 Nisan",
              },
              {
                min: 3.5,
                avg: 15.76,
                max: 29.7,
                date: "10 - 16 Nisan",
              },
              {
                min: 4.6,
                avg: 15.56,
                max: 32.1,
                date: "17 - 23 Nisan",
              },
              {
                min: 1.8,
                avg: 14.2,
                max: 26.6,
                date: "24 - 30 Nisan",
              },
              {
                min: 8.1,
                avg: 16.4,
                max: 25.8,
                date: "1 - 7 Mayıs",
              },
              {
                min: 7,
                avg: 16.9,
                max: 30.1,
                date: "8 - 14 Mayıs",
              },
              {
                min: 10,
                avg: 18.87,
                max: 29.1,
                date: "15 - 21 Mayıs",
              },
              {
                min: 10.7,
                avg: 20.3,
                max: 29,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "Sıcaklık-2",
            sensor_type: "Hava Sıcaklığı",
            unit: "°C",
            minutely: [
              {
                value: 16.1,
                date: "28 Mayıs 05:46",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:47",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:48",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:49",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:50",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:51",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:52",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:53",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:54",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:55",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:56",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:57",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:58",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:59",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:00",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:01",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:02",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:03",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:04",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:05",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:06",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:07",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:08",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:09",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:10",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:11",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:12",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:13",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:14",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:15",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:16",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:17",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:18",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:19",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:20",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:21",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:22",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:23",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:24",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:25",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:26",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:27",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:28",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:29",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:30",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:31",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:32",
              },
              {
                value: 16.7,
                date: "28 Mayıs 06:33",
              },
              {
                value: 16.7,
                date: "28 Mayıs 06:34",
              },
              {
                value: 16.8,
                date: "28 Mayıs 06:35",
              },
              {
                value: 16.8,
                date: "28 Mayıs 06:36",
              },
              {
                value: 16.8,
                date: "28 Mayıs 06:37",
              },
              {
                value: 16.9,
                date: "28 Mayıs 06:38",
              },
              {
                value: 16.9,
                date: "28 Mayıs 06:39",
              },
              {
                value: 16.9,
                date: "28 Mayıs 06:40",
              },
              {
                value: 17,
                date: "28 Mayıs 06:41",
              },
              {
                value: 17,
                date: "28 Mayıs 06:42",
              },
              {
                value: 17.1,
                date: "28 Mayıs 06:43",
              },
              {
                value: 17.1,
                date: "28 Mayıs 06:44",
              },
              {
                value: 17.1,
                date: "28 Mayıs 06:45",
              },
              {
                value: 17.1,
                date: "28 Mayıs 06:46",
              },
              {
                value: 17.2,
                date: "28 Mayıs 06:47",
              },
              {
                value: 17.2,
                date: "28 Mayıs 06:48",
              },
              {
                value: 17.2,
                date: "28 Mayıs 06:49",
              },
              {
                value: 17.3,
                date: "28 Mayıs 06:50",
              },
              {
                value: 17.3,
                date: "28 Mayıs 06:51",
              },
              {
                value: 17.4,
                date: "28 Mayıs 06:52",
              },
              {
                value: 17.4,
                date: "28 Mayıs 06:53",
              },
              {
                value: 17.4,
                date: "28 Mayıs 06:54",
              },
              {
                value: 17.5,
                date: "28 Mayıs 06:55",
              },
              {
                value: 17.5,
                date: "28 Mayıs 06:56",
              },
              {
                value: 17.6,
                date: "28 Mayıs 06:57",
              },
              {
                value: 17.6,
                date: "28 Mayıs 06:58",
              },
              {
                value: 17.6,
                date: "28 Mayıs 06:59",
              },
              {
                value: 17.7,
                date: "28 Mayıs 07:00",
              },
              {
                value: 17.7,
                date: "28 Mayıs 07:01",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:02",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:03",
              },
              {
                value: 17.9,
                date: "28 Mayıs 07:04",
              },
              {
                value: 17.9,
                date: "28 Mayıs 07:05",
              },
              {
                value: 17.9,
                date: "28 Mayıs 07:06",
              },
              {
                value: 17.9,
                date: "28 Mayıs 07:07",
              },
              {
                value: 18,
                date: "28 Mayıs 07:08",
              },
              {
                value: 18.1,
                date: "28 Mayıs 07:09",
              },
              {
                value: 18.1,
                date: "28 Mayıs 07:10",
              },
              {
                value: 18.2,
                date: "28 Mayıs 07:11",
              },
              {
                value: 18.2,
                date: "28 Mayıs 07:12",
              },
              {
                value: 18.3,
                date: "28 Mayıs 07:13",
              },
              {
                value: 18.4,
                date: "28 Mayıs 07:14",
              },
              {
                value: 18.4,
                date: "28 Mayıs 07:15",
              },
              {
                value: 18.4,
                date: "28 Mayıs 07:16",
              },
              {
                value: 18.5,
                date: "28 Mayıs 07:17",
              },
              {
                value: 18.6,
                date: "28 Mayıs 07:18",
              },
              {
                value: 18.6,
                date: "28 Mayıs 07:19",
              },
              {
                value: 18.7,
                date: "28 Mayıs 07:20",
              },
              {
                value: 18.8,
                date: "28 Mayıs 07:21",
              },
              {
                value: 18.8,
                date: "28 Mayıs 07:22",
              },
              {
                value: 18.8,
                date: "28 Mayıs 07:23",
              },
              {
                value: 18.9,
                date: "28 Mayıs 07:24",
              },
              {
                value: 18.9,
                date: "28 Mayıs 07:25",
              },
              {
                value: 19.1,
                date: "28 Mayıs 07:26",
              },
              {
                value: 19.1,
                date: "28 Mayıs 07:27",
              },
              {
                value: 19.2,
                date: "28 Mayıs 07:28",
              },
              {
                value: 19.3,
                date: "28 Mayıs 07:29",
              },
              {
                value: 19.4,
                date: "28 Mayıs 07:30",
              },
              {
                value: 19.4,
                date: "28 Mayıs 07:31",
              },
              {
                value: 19.5,
                date: "28 Mayıs 07:32",
              },
              {
                value: 19.6,
                date: "28 Mayıs 07:33",
              },
              {
                value: 19.7,
                date: "28 Mayıs 07:34",
              },
              {
                value: 19.8,
                date: "28 Mayıs 07:35",
              },
              {
                value: 19.9,
                date: "28 Mayıs 07:36",
              },
              {
                value: 20.1,
                date: "28 Mayıs 07:37",
              },
              {
                value: 20.1,
                date: "28 Mayıs 07:38",
              },
              {
                value: 20.2,
                date: "28 Mayıs 07:39",
              },
              {
                value: 20.3,
                date: "28 Mayıs 07:40",
              },
              {
                value: 20.5,
                date: "28 Mayıs 07:41",
              },
              {
                value: 20.6,
                date: "28 Mayıs 07:42",
              },
              {
                value: 20.8,
                date: "28 Mayıs 07:43",
              },
              {
                value: 20.9,
                date: "28 Mayıs 07:44",
              },
              {
                value: 21.1,
                date: "28 Mayıs 07:45",
              },
              {
                value: 21.2,
                date: "28 Mayıs 07:46",
              },
              {
                value: 21.4,
                date: "28 Mayıs 07:47",
              },
              {
                value: 21.7,
                date: "28 Mayıs 07:48",
              },
              {
                value: 21.9,
                date: "28 Mayıs 07:49",
              },
              {
                value: 22.1,
                date: "28 Mayıs 07:50",
              },
              {
                value: 22.2,
                date: "28 Mayıs 07:51",
              },
              {
                value: 22.4,
                date: "28 Mayıs 07:52",
              },
              {
                value: 22.7,
                date: "28 Mayıs 07:53",
              },
              {
                value: 22.8,
                date: "28 Mayıs 07:54",
              },
              {
                value: 23,
                date: "28 Mayıs 07:55",
              },
              {
                value: 23.2,
                date: "28 Mayıs 07:56",
              },
              {
                value: 23.3,
                date: "28 Mayıs 07:57",
              },
              {
                value: 23.4,
                date: "28 Mayıs 07:58",
              },
              {
                value: 23.6,
                date: "28 Mayıs 07:59",
              },
              {
                value: 23.8,
                date: "28 Mayıs 08:00",
              },
              {
                value: 23.9,
                date: "28 Mayıs 08:01",
              },
              {
                value: 24.1,
                date: "28 Mayıs 08:02",
              },
              {
                value: 24.4,
                date: "28 Mayıs 08:04",
              },
              {
                value: 24.2,
                date: "28 Mayıs 08:05",
              },
              {
                value: 23.3,
                date: "28 Mayıs 08:07",
              },
              {
                value: 23.2,
                date: "28 Mayıs 08:08",
              },
              {
                value: 22.9,
                date: "28 Mayıs 08:09",
              },
              {
                value: 22.7,
                date: "28 Mayıs 08:10",
              },
              {
                value: 22.8,
                date: "28 Mayıs 08:11",
              },
              {
                value: 22.6,
                date: "28 Mayıs 08:13",
              },
              {
                value: 22.7,
                date: "28 Mayıs 08:14",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:16",
              },
              {
                value: 22.1,
                date: "28 Mayıs 08:17",
              },
              {
                value: 21.6,
                date: "28 Mayıs 08:19",
              },
              {
                value: 21,
                date: "28 Mayıs 08:20",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:22",
              },
              {
                value: 22.1,
                date: "28 Mayıs 08:23",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:24",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:25",
              },
              {
                value: 22.6,
                date: "28 Mayıs 08:26",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:27",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:28",
              },
              {
                value: 22.4,
                date: "28 Mayıs 08:29",
              },
              {
                value: 22.5,
                date: "28 Mayıs 08:30",
              },
              {
                value: 22.4,
                date: "28 Mayıs 08:31",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:32",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:34",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:35",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:36",
              },
              {
                value: 21.8,
                date: "28 Mayıs 08:37",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:38",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:40",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:41",
              },
              {
                value: 21.4,
                date: "28 Mayıs 08:43",
              },
              {
                value: 21.2,
                date: "28 Mayıs 08:44",
              },
              {
                value: 21.5,
                date: "28 Mayıs 08:46",
              },
              {
                value: 21.2,
                date: "28 Mayıs 08:47",
              },
              {
                value: 20.5,
                date: "28 Mayıs 08:49",
              },
              {
                value: 19.8,
                date: "28 Mayıs 08:50",
              },
              {
                value: 20.4,
                date: "28 Mayıs 08:52",
              },
              {
                value: 20.9,
                date: "28 Mayıs 08:53",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:55",
              },
              {
                value: 21.4,
                date: "28 Mayıs 08:56",
              },
              {
                value: 21.4,
                date: "28 Mayıs 08:57",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:58",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:59",
              },
              {
                value: 23.1,
                date: "28 Mayıs 09:00",
              },
              {
                value: 22.8,
                date: "28 Mayıs 09:01",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:02",
              },
              {
                value: 23.3,
                date: "28 Mayıs 09:03",
              },
              {
                value: 22.9,
                date: "28 Mayıs 09:04",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:05",
              },
              {
                value: 24.1,
                date: "28 Mayıs 09:07",
              },
              {
                value: 24.2,
                date: "28 Mayıs 09:08",
              },
              {
                value: 22.6,
                date: "28 Mayıs 09:10",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:11",
              },
              {
                value: 23.8,
                date: "28 Mayıs 09:13",
              },
              {
                value: 24.4,
                date: "28 Mayıs 09:14",
              },
              {
                value: 25.1,
                date: "28 Mayıs 09:16",
              },
              {
                value: 24.9,
                date: "28 Mayıs 09:17",
              },
              {
                value: 25.1,
                date: "28 Mayıs 09:19",
              },
              {
                value: 24.8,
                date: "28 Mayıs 09:20",
              },
              {
                value: 23.8,
                date: "28 Mayıs 09:22",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:23",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:25",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:26",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:28",
              },
              {
                value: 23.6,
                date: "28 Mayıs 09:29",
              },
              {
                value: 23.6,
                date: "28 Mayıs 09:30",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:31",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:32",
              },
              {
                value: 24,
                date: "28 Mayıs 09:33",
              },
              {
                value: 23.8,
                date: "28 Mayıs 09:34",
              },
              {
                value: 24.6,
                date: "28 Mayıs 09:35",
              },
              {
                value: 25.1,
                date: "28 Mayıs 09:36",
              },
              {
                value: 25.1,
                date: "28 Mayıs 09:37",
              },
              {
                value: 25.6,
                date: "28 Mayıs 09:38",
              },
              {
                value: 25.8,
                date: "28 Mayıs 09:39",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:40",
              },
              {
                value: 23,
                date: "28 Mayıs 09:41",
              },
              {
                value: 22.4,
                date: "28 Mayıs 09:43",
              },
              {
                value: 22.9,
                date: "28 Mayıs 09:46",
              },
              {
                value: 22.7,
                date: "28 Mayıs 09:47",
              },
              {
                value: 22.6,
                date: "28 Mayıs 09:48",
              },
              {
                value: 21.8,
                date: "28 Mayıs 09:49",
              },
              {
                value: 21.7,
                date: "28 Mayıs 09:50",
              },
              {
                value: 21.3,
                date: "28 Mayıs 09:52",
              },
              {
                value: 21.6,
                date: "28 Mayıs 09:53",
              },
              {
                value: 21.9,
                date: "28 Mayıs 09:54",
              },
              {
                value: 21.9,
                date: "28 Mayıs 09:55",
              },
              {
                value: 22,
                date: "28 Mayıs 09:56",
              },
              {
                value: 21.9,
                date: "28 Mayıs 09:57",
              },
              {
                value: 21.6,
                date: "28 Mayıs 09:58",
              },
              {
                value: 21.6,
                date: "28 Mayıs 09:59",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:00",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:01",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:02",
              },
              {
                value: 21.3,
                date: "28 Mayıs 10:04",
              },
              {
                value: 21.6,
                date: "28 Mayıs 10:05",
              },
              {
                value: 20.8,
                date: "28 Mayıs 10:07",
              },
              {
                value: 20.6,
                date: "28 Mayıs 10:08",
              },
              {
                value: 21.6,
                date: "28 Mayıs 10:10",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:11",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:13",
              },
              {
                value: 21.5,
                date: "28 Mayıs 10:14",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:15",
              },
              {
                value: 22,
                date: "28 Mayıs 10:16",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:17",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:18",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:19",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:20",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:21",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:22",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:23",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:24",
              },
              {
                value: 21.4,
                date: "28 Mayıs 10:25",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:26",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:27",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:28",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:29",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:30",
              },
              {
                value: 21.4,
                date: "28 Mayıs 10:31",
              },
              {
                value: 21.6,
                date: "28 Mayıs 10:32",
              },
              {
                value: 21.5,
                date: "28 Mayıs 10:34",
              },
              {
                value: 21.6,
                date: "28 Mayıs 10:35",
              },
              {
                value: 20.6,
                date: "28 Mayıs 10:37",
              },
              {
                value: 20.8,
                date: "28 Mayıs 10:38",
              },
              {
                value: 20.9,
                date: "28 Mayıs 10:40",
              },
              {
                value: 21.3,
                date: "28 Mayıs 10:41",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:43",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:44",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:45",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:46",
              },
              {
                value: 22.3,
                date: "28 Mayıs 10:47",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:48",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:49",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:50",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:51",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:52",
              },
              {
                value: 22,
                date: "28 Mayıs 10:53",
              },
              {
                value: 22,
                date: "28 Mayıs 10:54",
              },
              {
                value: 22,
                date: "28 Mayıs 10:55",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:56",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:57",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:58",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:59",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:00",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:01",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:02",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:03",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:04",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:05",
              },
              {
                value: 21.7,
                date: "28 Mayıs 11:06",
              },
              {
                value: 21.5,
                date: "28 Mayıs 11:07",
              },
              {
                value: 21.4,
                date: "28 Mayıs 11:08",
              },
              {
                value: 21.4,
                date: "28 Mayıs 11:09",
              },
              {
                value: 21.4,
                date: "28 Mayıs 11:10",
              },
              {
                value: 21.4,
                date: "28 Mayıs 11:11",
              },
              {
                value: 21.5,
                date: "28 Mayıs 11:12",
              },
              {
                value: 21.6,
                date: "28 Mayıs 11:13",
              },
              {
                value: 21.7,
                date: "28 Mayıs 11:14",
              },
              {
                value: 21.8,
                date: "28 Mayıs 11:15",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:16",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:17",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:18",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:19",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:20",
              },
              {
                value: 22.3,
                date: "28 Mayıs 11:21",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:22",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:23",
              },
              {
                value: 22.4,
                date: "28 Mayıs 11:24",
              },
              {
                value: 22.5,
                date: "28 Mayıs 11:25",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:26",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:27",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:28",
              },
              {
                value: 22.9,
                date: "28 Mayıs 11:29",
              },
              {
                value: 22.9,
                date: "28 Mayıs 11:30",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:31",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:32",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:33",
              },
              {
                value: 22.4,
                date: "28 Mayıs 11:34",
              },
              {
                value: 22.4,
                date: "28 Mayıs 11:35",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:36",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:37",
              },
              {
                value: 22.9,
                date: "28 Mayıs 11:38",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:39",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:40",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:41",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:42",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:43",
              },
              {
                value: 22.5,
                date: "28 Mayıs 11:44",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:45",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:46",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:47",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:48",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:49",
              },
              {
                value: 22.4,
                date: "28 Mayıs 11:50",
              },
              {
                value: 22.3,
                date: "28 Mayıs 11:51",
              },
              {
                value: 22.4,
                date: "28 Mayıs 11:52",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:53",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:54",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:55",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:56",
              },
              {
                value: 22.9,
                date: "28 Mayıs 11:57",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:58",
              },
              {
                value: 22.5,
                date: "28 Mayıs 11:59",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:00",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:01",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:02",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:03",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:04",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:05",
              },
              {
                value: 23,
                date: "28 Mayıs 12:06",
              },
              {
                value: 23.1,
                date: "28 Mayıs 12:07",
              },
              {
                value: 23.4,
                date: "28 Mayıs 12:08",
              },
              {
                value: 23.4,
                date: "28 Mayıs 12:09",
              },
              {
                value: 23.7,
                date: "28 Mayıs 12:10",
              },
              {
                value: 23.9,
                date: "28 Mayıs 12:11",
              },
              {
                value: 23.9,
                date: "28 Mayıs 12:12",
              },
              {
                value: 23.4,
                date: "28 Mayıs 12:13",
              },
              {
                value: 23.6,
                date: "28 Mayıs 12:14",
              },
              {
                value: 23.3,
                date: "28 Mayıs 12:15",
              },
              {
                value: 23.2,
                date: "28 Mayıs 12:16",
              },
              {
                value: 23.1,
                date: "28 Mayıs 12:17",
              },
              {
                value: 23.2,
                date: "28 Mayıs 12:18",
              },
              {
                value: 23.1,
                date: "28 Mayıs 12:19",
              },
              {
                value: 23,
                date: "28 Mayıs 12:20",
              },
              {
                value: 22.8,
                date: "28 Mayıs 12:21",
              },
              {
                value: 22.8,
                date: "28 Mayıs 12:22",
              },
              {
                value: 22.7,
                date: "28 Mayıs 12:23",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:24",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:25",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:26",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:27",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:28",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:29",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:30",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:31",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:32",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:33",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:34",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:35",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:36",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:37",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:38",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:39",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:40",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:41",
              },
              {
                value: 22.7,
                date: "28 Mayıs 12:42",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:43",
              },
              {
                value: 22.8,
                date: "28 Mayıs 12:44",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:45",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:46",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:47",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:48",
              },
              {
                value: 22.2,
                date: "28 Mayıs 12:49",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:50",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:51",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:52",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:53",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:54",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:55",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:56",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:57",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:58",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:59",
              },
              {
                value: 22.5,
                date: "28 Mayıs 13:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:01",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:02",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:03",
              },
              {
                value: 22.8,
                date: "28 Mayıs 13:04",
              },
              {
                value: 23.1,
                date: "28 Mayıs 13:05",
              },
              {
                value: 23.1,
                date: "28 Mayıs 13:06",
              },
              {
                value: 23.2,
                date: "28 Mayıs 13:07",
              },
              {
                value: 23.5,
                date: "28 Mayıs 13:08",
              },
              {
                value: 23.7,
                date: "28 Mayıs 13:09",
              },
              {
                value: 23.7,
                date: "28 Mayıs 13:10",
              },
              {
                value: 23.7,
                date: "28 Mayıs 13:11",
              },
              {
                value: 23.5,
                date: "28 Mayıs 13:12",
              },
              {
                value: 23.4,
                date: "28 Mayıs 13:13",
              },
              {
                value: 23.2,
                date: "28 Mayıs 13:14",
              },
              {
                value: 23.2,
                date: "28 Mayıs 13:15",
              },
              {
                value: 23.1,
                date: "28 Mayıs 13:16",
              },
              {
                value: 22.9,
                date: "28 Mayıs 13:17",
              },
              {
                value: 22.5,
                date: "28 Mayıs 13:18",
              },
              {
                value: 22.3,
                date: "28 Mayıs 13:19",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:20",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:21",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:22",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:23",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:24",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:25",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:26",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:27",
              },
              {
                value: 22.3,
                date: "28 Mayıs 13:28",
              },
              {
                value: 22.1,
                date: "28 Mayıs 13:29",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:30",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:31",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:32",
              },
              {
                value: 22,
                date: "28 Mayıs 13:33",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:34",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:35",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:36",
              },
              {
                value: 22,
                date: "28 Mayıs 13:37",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:38",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:39",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:40",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:41",
              },
              {
                value: 22,
                date: "28 Mayıs 13:42",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:43",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:44",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:45",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:46",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:47",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:48",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:49",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:50",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:51",
              },
              {
                value: 22.1,
                date: "28 Mayıs 13:52",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:53",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:54",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:55",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:56",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:57",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:58",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:59",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:01",
              },
              {
                value: 22.3,
                date: "28 Mayıs 14:02",
              },
              {
                value: 22.4,
                date: "28 Mayıs 14:03",
              },
              {
                value: 22.4,
                date: "28 Mayıs 14:04",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:05",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:06",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:07",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:08",
              },
              {
                value: 22.7,
                date: "28 Mayıs 14:09",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:10",
              },
              {
                value: 22.9,
                date: "28 Mayıs 14:11",
              },
              {
                value: 23.1,
                date: "28 Mayıs 14:12",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:13",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:14",
              },
              {
                value: 22.4,
                date: "28 Mayıs 14:15",
              },
              {
                value: 22.2,
                date: "28 Mayıs 14:16",
              },
              {
                value: 21.8,
                date: "28 Mayıs 14:17",
              },
              {
                value: 21.6,
                date: "28 Mayıs 14:18",
              },
              {
                value: 21.5,
                date: "28 Mayıs 14:19",
              },
              {
                value: 21.4,
                date: "28 Mayıs 14:20",
              },
              {
                value: 21.4,
                date: "28 Mayıs 14:21",
              },
              {
                value: 21.3,
                date: "28 Mayıs 14:22",
              },
              {
                value: 21.2,
                date: "28 Mayıs 14:23",
              },
              {
                value: 21.2,
                date: "28 Mayıs 14:24",
              },
              {
                value: 21.3,
                date: "28 Mayıs 14:25",
              },
              {
                value: 21.3,
                date: "28 Mayıs 14:26",
              },
              {
                value: 21.4,
                date: "28 Mayıs 14:27",
              },
              {
                value: 21.6,
                date: "28 Mayıs 14:28",
              },
              {
                value: 21.8,
                date: "28 Mayıs 14:29",
              },
              {
                value: 21.8,
                date: "28 Mayıs 14:30",
              },
              {
                value: 21.9,
                date: "28 Mayıs 14:31",
              },
              {
                value: 22.3,
                date: "28 Mayıs 14:32",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:33",
              },
              {
                value: 22.9,
                date: "28 Mayıs 14:34",
              },
              {
                value: 23.1,
                date: "28 Mayıs 14:35",
              },
              {
                value: 23.6,
                date: "28 Mayıs 14:36",
              },
              {
                value: 23.9,
                date: "28 Mayıs 14:37",
              },
              {
                value: 23.8,
                date: "28 Mayıs 14:38",
              },
              {
                value: 24.1,
                date: "28 Mayıs 14:39",
              },
              {
                value: 24.1,
                date: "28 Mayıs 14:40",
              },
              {
                value: 24.5,
                date: "28 Mayıs 14:41",
              },
              {
                value: 24.9,
                date: "28 Mayıs 14:42",
              },
              {
                value: 25.2,
                date: "28 Mayıs 14:43",
              },
              {
                value: 25.5,
                date: "28 Mayıs 14:44",
              },
              {
                value: 25.7,
                date: "28 Mayıs 14:45",
              },
              {
                value: 25.8,
                date: "28 Mayıs 14:46",
              },
              {
                value: 26.1,
                date: "28 Mayıs 14:47",
              },
              {
                value: 26.4,
                date: "28 Mayıs 14:48",
              },
              {
                value: 26.8,
                date: "28 Mayıs 14:49",
              },
              {
                value: 26.9,
                date: "28 Mayıs 14:50",
              },
              {
                value: 27.1,
                date: "28 Mayıs 14:51",
              },
              {
                value: 27.4,
                date: "28 Mayıs 14:52",
              },
              {
                value: 27.8,
                date: "28 Mayıs 14:53",
              },
              {
                value: 28.2,
                date: "28 Mayıs 14:54",
              },
              {
                value: 28.5,
                date: "28 Mayıs 14:55",
              },
              {
                value: 28.8,
                date: "28 Mayıs 14:56",
              },
              {
                value: 28.9,
                date: "28 Mayıs 14:57",
              },
              {
                value: 29.2,
                date: "28 Mayıs 14:59",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:00",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:01",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:02",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:03",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:04",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:05",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:06",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:07",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:08",
              },
              {
                value: 29.4,
                date: "28 Mayıs 15:09",
              },
              {
                value: 29.5,
                date: "28 Mayıs 15:10",
              },
              {
                value: 29.5,
                date: "28 Mayıs 15:11",
              },
              {
                value: 29.5,
                date: "28 Mayıs 15:12",
              },
              {
                value: 29.5,
                date: "28 Mayıs 15:13",
              },
              {
                value: 29.5,
                date: "28 Mayıs 15:14",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:15",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:16",
              },
              {
                value: 29.1,
                date: "28 Mayıs 15:17",
              },
              {
                value: 28.1,
                date: "28 Mayıs 15:18",
              },
              {
                value: 26.2,
                date: "28 Mayıs 15:20",
              },
              {
                value: 25.3,
                date: "28 Mayıs 15:21",
              },
              {
                value: 25.1,
                date: "28 Mayıs 15:22",
              },
              {
                value: 24.9,
                date: "28 Mayıs 15:23",
              },
              {
                value: 24.6,
                date: "28 Mayıs 15:24",
              },
              {
                value: 24.2,
                date: "28 Mayıs 15:25",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:26",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:27",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:28",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:29",
              },
              {
                value: 24,
                date: "28 Mayıs 15:30",
              },
              {
                value: 24,
                date: "28 Mayıs 15:31",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:32",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:33",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:34",
              },
              {
                value: 23.8,
                date: "28 Mayıs 15:35",
              },
              {
                value: 23.8,
                date: "28 Mayıs 15:36",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:37",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:38",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:39",
              },
              {
                value: 24,
                date: "28 Mayıs 15:40",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:41",
              },
              {
                value: 24,
                date: "28 Mayıs 15:42",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:43",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:44",
              },
              {
                value: 23.6,
                date: "28 Mayıs 15:45",
              },
              {
                value: 23.4,
                date: "28 Mayıs 15:46",
              },
              {
                value: 23.4,
                date: "28 Mayıs 15:47",
              },
              {
                value: 23.5,
                date: "28 Mayıs 15:48",
              },
              {
                value: 23.3,
                date: "28 Mayıs 15:49",
              },
              {
                value: 23.5,
                date: "28 Mayıs 15:50",
              },
              {
                value: 23.6,
                date: "28 Mayıs 15:51",
              },
              {
                value: 23.5,
                date: "28 Mayıs 15:52",
              },
              {
                value: 23.4,
                date: "28 Mayıs 15:53",
              },
              {
                value: 23.5,
                date: "28 Mayıs 15:54",
              },
              {
                value: 23.5,
                date: "28 Mayıs 15:55",
              },
              {
                value: 23.6,
                date: "28 Mayıs 15:56",
              },
              {
                value: 23.3,
                date: "28 Mayıs 15:57",
              },
              {
                value: 23.3,
                date: "28 Mayıs 15:58",
              },
              {
                value: 23,
                date: "28 Mayıs 15:59",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:00",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:01",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:02",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:03",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:04",
              },
              {
                value: 23.3,
                date: "28 Mayıs 16:05",
              },
              {
                value: 23.5,
                date: "28 Mayıs 16:06",
              },
              {
                value: 23.6,
                date: "28 Mayıs 16:07",
              },
              {
                value: 23.7,
                date: "28 Mayıs 16:08",
              },
              {
                value: 23.6,
                date: "28 Mayıs 16:09",
              },
              {
                value: 23.4,
                date: "28 Mayıs 16:10",
              },
              {
                value: 23.2,
                date: "28 Mayıs 16:11",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:12",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:13",
              },
              {
                value: 23,
                date: "28 Mayıs 16:14",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:15",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:16",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:17",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:18",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:19",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:20",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:21",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:22",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:23",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:24",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:25",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:26",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:27",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:28",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:29",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:30",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:31",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:32",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:33",
              },
              {
                value: 23,
                date: "28 Mayıs 16:34",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:35",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:36",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:37",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:38",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:39",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:40",
              },
              {
                value: 23.2,
                date: "28 Mayıs 16:41",
              },
              {
                value: 23.2,
                date: "28 Mayıs 16:42",
              },
              {
                value: 23.4,
                date: "28 Mayıs 16:43",
              },
              {
                value: 23.3,
                date: "28 Mayıs 16:44",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:45",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:46",
              },
              {
                value: 23,
                date: "28 Mayıs 16:47",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:48",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:49",
              },
              {
                value: 23,
                date: "28 Mayıs 16:50",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:51",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:52",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:53",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:54",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:55",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:56",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:57",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:58",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:59",
              },
              {
                value: 22.6,
                date: "28 Mayıs 17:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 17:01",
              },
              {
                value: 22.6,
                date: "28 Mayıs 17:02",
              },
              {
                value: 22.7,
                date: "28 Mayıs 17:03",
              },
              {
                value: 22.8,
                date: "28 Mayıs 17:04",
              },
              {
                value: 22.8,
                date: "28 Mayıs 17:05",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:06",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:07",
              },
              {
                value: 23.4,
                date: "28 Mayıs 17:10",
              },
              {
                value: 23.4,
                date: "28 Mayıs 17:10",
              },
              {
                value: 23.2,
                date: "28 Mayıs 17:10",
              },
              {
                value: 23.3,
                date: "28 Mayıs 17:11",
              },
              {
                value: 23.2,
                date: "28 Mayıs 17:12",
              },
              {
                value: 23.3,
                date: "28 Mayıs 17:13",
              },
              {
                value: 23.5,
                date: "28 Mayıs 17:14",
              },
              {
                value: 23.8,
                date: "28 Mayıs 17:15",
              },
              {
                value: 23.9,
                date: "28 Mayıs 17:16",
              },
              {
                value: 24.3,
                date: "28 Mayıs 17:17",
              },
              {
                value: 24.9,
                date: "28 Mayıs 17:18",
              },
              {
                value: 25.1,
                date: "28 Mayıs 17:19",
              },
              {
                value: 25.3,
                date: "28 Mayıs 17:20",
              },
              {
                value: 25.3,
                date: "28 Mayıs 17:21",
              },
              {
                value: 25.2,
                date: "28 Mayıs 17:22",
              },
              {
                value: 25.6,
                date: "28 Mayıs 17:23",
              },
              {
                value: 25.4,
                date: "28 Mayıs 17:24",
              },
              {
                value: 25.2,
                date: "28 Mayıs 17:25",
              },
              {
                value: 25.4,
                date: "28 Mayıs 17:26",
              },
              {
                value: 25.1,
                date: "28 Mayıs 17:27",
              },
              {
                value: 24.8,
                date: "28 Mayıs 17:28",
              },
              {
                value: 24.3,
                date: "28 Mayıs 17:29",
              },
              {
                value: 24.3,
                date: "28 Mayıs 17:30",
              },
              {
                value: 24.2,
                date: "28 Mayıs 17:31",
              },
              {
                value: 23.8,
                date: "28 Mayıs 17:32",
              },
              {
                value: 23.7,
                date: "28 Mayıs 17:33",
              },
              {
                value: 23.4,
                date: "28 Mayıs 17:34",
              },
              {
                value: 23.2,
                date: "28 Mayıs 17:35",
              },
              {
                value: 23.2,
                date: "28 Mayıs 17:36",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:37",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:38",
              },
              {
                value: 23.1,
                date: "28 Mayıs 17:39",
              },
              {
                value: 23,
                date: "28 Mayıs 17:40",
              },
              {
                value: 23.1,
                date: "28 Mayıs 17:41",
              },
              {
                value: 23.2,
                date: "28 Mayıs 17:42",
              },
              {
                value: 23.3,
                date: "28 Mayıs 17:43",
              },
              {
                value: 23.5,
                date: "28 Mayıs 17:44",
              },
              {
                value: 23.9,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 10.2,
                avg: 13.18,
                max: 21.6,
                date: "28 Nisan 23",
              },
              {
                min: 8.1,
                avg: 16.67,
                max: 327.7,
                date: "29 Nisan 23",
              },
              {
                min: 12.9,
                avg: 18,
                max: 27.1,
                date: "30 Nisan 23",
              },
              {
                min: 11.9,
                avg: 18.87,
                max: 28.9,
                date: "01 Mayıs 23",
              },
              {
                min: 14.4,
                avg: 19,
                max: 26.4,
                date: "02 Mayıs 23",
              },
              {
                min: 13.8,
                avg: 18.28,
                max: 26.6,
                date: "03 Mayıs 23",
              },
              {
                min: 14.6,
                avg: 20.15,
                max: 28.2,
                date: "04 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 16.55,
                max: 23.2,
                date: "05 Mayıs 23",
              },
              {
                min: 13.1,
                avg: 17.99,
                max: 25.1,
                date: "06 Mayıs 23",
              },
              {
                min: 12.7,
                avg: 19.16,
                max: 27.3,
                date: "07 Mayıs 23",
              },
              {
                min: 13.2,
                avg: 19.36,
                max: 27.6,
                date: "08 Mayıs 23",
              },
              {
                min: 13,
                avg: 17.9,
                max: 25.8,
                date: "09 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 17.06,
                max: 25.6,
                date: "10 Mayıs 23",
              },
              {
                min: 13.2,
                avg: 17.02,
                max: 24.4,
                date: "11 Mayıs 23",
              },
              {
                min: 11.9,
                avg: 15.89,
                max: 24.5,
                date: "12 Mayıs 23",
              },
              {
                min: 8.3,
                avg: 17.13,
                max: 26.2,
                date: "13 Mayıs 23",
              },
              {
                min: 7.8,
                avg: 16.58,
                max: 27.1,
                date: "14 Mayıs 23",
              },
              {
                min: 12.6,
                avg: 21.38,
                max: 33.4,
                date: "15 Mayıs 23",
              },
              {
                min: 15,
                avg: 20.94,
                max: 30.4,
                date: "16 Mayıs 23",
              },
              {
                min: 16.9,
                avg: 22.38,
                max: 34.9,
                date: "17 Mayıs 23",
              },
              {
                min: 15.6,
                avg: 20.01,
                max: 26.1,
                date: "18 Mayıs 23",
              },
              {
                min: 13.2,
                avg: 19.79,
                max: 29.8,
                date: "19 Mayıs 23",
              },
              {
                min: 12.2,
                avg: 19.77,
                max: 28.6,
                date: "20 Mayıs 23",
              },
              {
                min: 13.1,
                avg: 19.67,
                max: 27.6,
                date: "21 Mayıs 23",
              },
              {
                min: 13.7,
                avg: 19.66,
                max: 28.1,
                date: "22 Mayıs 23",
              },
              {
                min: 13.4,
                avg: 20.45,
                max: 29.2,
                date: "23 Mayıs 23",
              },
              {
                min: 14,
                avg: 20.57,
                max: 31.3,
                date: "24 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 21.1,
                max: 31.1,
                date: "25 Mayıs 23",
              },
              {
                min: 13.9,
                avg: 21.55,
                max: 31.1,
                date: "26 Mayıs 23",
              },
              {
                min: 15.2,
                avg: 21.64,
                max: 30.4,
                date: "27 Mayıs 23",
              },
              {
                min: 16.1,
                avg: 20.97,
                max: 29.5,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 7.7,
                avg: 12.12,
                max: 26.9,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: 7.9,
                avg: 14.79,
                max: 29.6,
                date: "6 - 12 Şubat",
              },
              {
                min: 9.8,
                avg: 17.79,
                max: 29.4,
                date: "13 - 19 Şubat",
              },
              {
                min: 9.9,
                avg: 17.24,
                max: 655.3,
                date: "20 - 26 Şubat",
              },
              {
                min: 9.5,
                avg: 16.4,
                max: 27.9,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 7.4,
                avg: 15.91,
                max: 27.9,
                date: "6 - 12 Mart",
              },
              {
                min: 8.7,
                avg: 15.26,
                max: 655.3,
                date: "13 - 19 Mart",
              },
              {
                min: 9.5,
                avg: 17.1,
                max: 641.6,
                date: "20 - 26 Mart",
              },
              {
                min: 6.1,
                avg: 17.32,
                max: 655.2,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 7.1,
                avg: 16.84,
                max: 655.3,
                date: "3 - 9 Nisan",
              },
              {
                min: 6.7,
                avg: 18.89,
                max: 45.4,
                date: "10 - 16 Nisan",
              },
              {
                min: 11.5,
                avg: 19.06,
                max: 28.6,
                date: "17 - 23 Nisan",
              },
              {
                min: 8.1,
                avg: 17.46,
                max: 327.7,
                date: "24 - 30 Nisan",
              },
              {
                min: 12.7,
                avg: 18.46,
                max: 28.2,
                date: "1 - 7 Mayıs",
              },
              {
                min: 7.8,
                avg: 18.39,
                max: 34.9,
                date: "8 - 14 Mayıs",
              },
              {
                min: 12.2,
                avg: 20.13,
                max: 31.3,
                date: "15 - 21 Mayıs",
              },
              {
                min: 12.9,
                avg: 21.04,
                max: 31.1,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "Sıcaklık-3",
            sensor_type: "Hava Sıcaklığı",
            unit: "°C",
            minutely: [
              {
                value: 16,
                date: "28 Mayıs 05:50",
              },
              {
                value: 16,
                date: "28 Mayıs 05:55",
              },
              {
                value: 16,
                date: "28 Mayıs 06:00",
              },
              {
                value: 16,
                date: "28 Mayıs 06:05",
              },
              {
                value: 16.1,
                date: "28 Mayıs 06:10",
              },
              {
                value: 16.1,
                date: "28 Mayıs 06:15",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:20",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:25",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:30",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:35",
              },
              {
                value: 16.7,
                date: "28 Mayıs 06:40",
              },
              {
                value: 17,
                date: "28 Mayıs 06:50",
              },
              {
                value: 17.2,
                date: "28 Mayıs 06:55",
              },
              {
                value: 17.5,
                date: "28 Mayıs 07:00",
              },
              {
                value: 17.7,
                date: "28 Mayıs 07:05",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:10",
              },
              {
                value: 18.1,
                date: "28 Mayıs 07:15",
              },
              {
                value: 18.3,
                date: "28 Mayıs 07:20",
              },
              {
                value: 18.6,
                date: "28 Mayıs 07:25",
              },
              {
                value: 18.9,
                date: "28 Mayıs 07:30",
              },
              {
                value: 19.2,
                date: "28 Mayıs 07:35",
              },
              {
                value: 19.5,
                date: "28 Mayıs 07:40",
              },
              {
                value: 19.8,
                date: "28 Mayıs 07:45",
              },
              {
                value: 20.3,
                date: "28 Mayıs 07:50",
              },
              {
                value: 20.8,
                date: "28 Mayıs 07:55",
              },
              {
                value: 21.4,
                date: "28 Mayıs 08:00",
              },
              {
                value: 21.9,
                date: "28 Mayıs 08:05",
              },
              {
                value: 21.9,
                date: "28 Mayıs 08:10",
              },
              {
                value: 22,
                date: "28 Mayıs 08:15",
              },
              {
                value: 21.5,
                date: "28 Mayıs 08:20",
              },
              {
                value: 21.6,
                date: "28 Mayıs 08:25",
              },
              {
                value: 21.8,
                date: "28 Mayıs 08:30",
              },
              {
                value: 21.8,
                date: "28 Mayıs 08:35",
              },
              {
                value: 21.9,
                date: "28 Mayıs 08:40",
              },
              {
                value: 21.5,
                date: "28 Mayıs 08:45",
              },
              {
                value: 21.3,
                date: "28 Mayıs 08:50",
              },
              {
                value: 21.6,
                date: "28 Mayıs 08:55",
              },
              {
                value: 22,
                date: "28 Mayıs 09:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 09:05",
              },
              {
                value: 23.3,
                date: "28 Mayıs 09:10",
              },
              {
                value: 23.9,
                date: "28 Mayıs 09:15",
              },
              {
                value: 24.1,
                date: "28 Mayıs 09:20",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:25",
              },
              {
                value: 23.4,
                date: "28 Mayıs 09:30",
              },
              {
                value: 24,
                date: "28 Mayıs 09:35",
              },
              {
                value: 24.3,
                date: "28 Mayıs 09:40",
              },
              {
                value: 23.1,
                date: "28 Mayıs 09:45",
              },
              {
                value: 22.4,
                date: "28 Mayıs 09:50",
              },
              {
                value: 22.1,
                date: "28 Mayıs 09:55",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:00",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:05",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:10",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:15",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:20",
              },
              {
                value: 22,
                date: "28 Mayıs 10:25",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:30",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:35",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:40",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:45",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:50",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:55",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:00",
              },
              {
                value: 22,
                date: "28 Mayıs 11:05",
              },
              {
                value: 21.8,
                date: "28 Mayıs 11:10",
              },
              {
                value: 21.8,
                date: "28 Mayıs 11:15",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:20",
              },
              {
                value: 22.3,
                date: "28 Mayıs 11:25",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:30",
              },
              {
                value: 22.5,
                date: "28 Mayıs 11:35",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:40",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:45",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:50",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:55",
              },
              {
                value: 22.7,
                date: "28 Mayıs 12:00",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:05",
              },
              {
                value: 23.6,
                date: "28 Mayıs 12:10",
              },
              {
                value: 24,
                date: "28 Mayıs 12:15",
              },
              {
                value: 23.7,
                date: "28 Mayıs 12:20",
              },
              {
                value: 23.3,
                date: "28 Mayıs 12:25",
              },
              {
                value: 23,
                date: "28 Mayıs 12:30",
              },
              {
                value: 23,
                date: "28 Mayıs 12:35",
              },
              {
                value: 23,
                date: "28 Mayıs 12:40",
              },
              {
                value: 23,
                date: "28 Mayıs 12:45",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:50",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:55",
              },
              {
                value: 22.8,
                date: "28 Mayıs 13:00",
              },
              {
                value: 23,
                date: "28 Mayıs 13:05",
              },
              {
                value: 23.6,
                date: "28 Mayıs 13:10",
              },
              {
                value: 23.5,
                date: "28 Mayıs 13:15",
              },
              {
                value: 22.9,
                date: "28 Mayıs 13:20",
              },
              {
                value: 22.8,
                date: "28 Mayıs 13:25",
              },
              {
                value: 22.5,
                date: "28 Mayıs 13:30",
              },
              {
                value: 22.3,
                date: "28 Mayıs 13:35",
              },
              {
                value: 22.1,
                date: "28 Mayıs 13:40",
              },
              {
                value: 22,
                date: "28 Mayıs 13:45",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:50",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:55",
              },
              {
                value: 22.4,
                date: "28 Mayıs 14:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:05",
              },
              {
                value: 22.9,
                date: "28 Mayıs 14:10",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:15",
              },
              {
                value: 22.2,
                date: "28 Mayıs 14:20",
              },
              {
                value: 21.9,
                date: "28 Mayıs 14:25",
              },
              {
                value: 22.1,
                date: "28 Mayıs 14:30",
              },
              {
                value: 23,
                date: "28 Mayıs 14:35",
              },
              {
                value: 23.8,
                date: "28 Mayıs 14:40",
              },
              {
                value: 24.9,
                date: "28 Mayıs 14:45",
              },
              {
                value: 26.1,
                date: "28 Mayıs 14:50",
              },
              {
                value: 27.5,
                date: "28 Mayıs 14:55",
              },
              {
                value: 28.4,
                date: "28 Mayıs 15:00",
              },
              {
                value: 28.8,
                date: "28 Mayıs 15:05",
              },
              {
                value: 29.1,
                date: "28 Mayıs 15:10",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:15",
              },
              {
                value: 27.8,
                date: "28 Mayıs 15:20",
              },
              {
                value: 25.8,
                date: "28 Mayıs 15:25",
              },
              {
                value: 24.7,
                date: "28 Mayıs 15:30",
              },
              {
                value: 24.4,
                date: "28 Mayıs 15:35",
              },
              {
                value: 24.3,
                date: "28 Mayıs 15:40",
              },
              {
                value: 24.3,
                date: "28 Mayıs 15:45",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:50",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:55",
              },
              {
                value: 23.3,
                date: "28 Mayıs 16:00",
              },
              {
                value: 23.4,
                date: "28 Mayıs 16:05",
              },
              {
                value: 23.3,
                date: "28 Mayıs 16:10",
              },
              {
                value: 23,
                date: "28 Mayıs 16:15",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:20",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:25",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:30",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:35",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:40",
              },
              {
                value: 23,
                date: "28 Mayıs 16:45",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:50",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:55",
              },
              {
                value: 22.8,
                date: "28 Mayıs 17:00",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:05",
              },
              {
                value: 23.4,
                date: "28 Mayıs 17:10",
              },
              {
                value: 23.8,
                date: "28 Mayıs 17:15",
              },
              {
                value: 25.3,
                date: "28 Mayıs 17:20",
              },
              {
                value: 25.8,
                date: "28 Mayıs 17:25",
              },
              {
                value: 25.1,
                date: "28 Mayıs 17:30",
              },
              {
                value: 24.1,
                date: "28 Mayıs 17:35",
              },
              {
                value: 23.7,
                date: "28 Mayıs 17:40",
              },
              {
                value: 24,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 10.1,
                avg: 13.29,
                max: 23.2,
                date: "28 Nisan 23",
              },
              {
                min: 8,
                avg: 16.62,
                max: 26.3,
                date: "29 Nisan 23",
              },
              {
                min: 12.6,
                avg: 17.81,
                max: 26.3,
                date: "30 Nisan 23",
              },
              {
                min: 11.8,
                avg: 19.53,
                max: 30.4,
                date: "01 Mayıs 23",
              },
              {
                min: 14.1,
                avg: 19.7,
                max: 27.5,
                date: "02 Mayıs 23",
              },
              {
                min: 13.6,
                avg: 18.55,
                max: 27.1,
                date: "03 Mayıs 23",
              },
              {
                min: 14.5,
                avg: 20.65,
                max: 29.9,
                date: "04 Mayıs 23",
              },
              {
                min: 12.7,
                avg: 16.42,
                max: 22.9,
                date: "05 Mayıs 23",
              },
              {
                min: 13,
                avg: 18.55,
                max: 27,
                date: "06 Mayıs 23",
              },
              {
                min: 12.5,
                avg: 19.8,
                max: 29.3,
                date: "07 Mayıs 23",
              },
              {
                min: 13,
                avg: 19.9,
                max: 29.5,
                date: "08 Mayıs 23",
              },
              {
                min: 12.8,
                avg: 18.05,
                max: 26.9,
                date: "09 Mayıs 23",
              },
              {
                min: 12.6,
                avg: 17.44,
                max: 26.5,
                date: "10 Mayıs 23",
              },
              {
                min: 13.1,
                avg: 17.3,
                max: 24.6,
                date: "11 Mayıs 23",
              },
              {
                min: 12.2,
                avg: 15.89,
                max: 23.6,
                date: "12 Mayıs 23",
              },
              {
                min: 8.3,
                avg: 17.68,
                max: 27.1,
                date: "13 Mayıs 23",
              },
              {
                min: 7.8,
                avg: 17.01,
                max: 27.2,
                date: "14 Mayıs 23",
              },
              {
                min: 12.7,
                avg: 21.71,
                max: 33.4,
                date: "15 Mayıs 23",
              },
              {
                min: 14.8,
                avg: 21.06,
                max: 29.9,
                date: "16 Mayıs 23",
              },
              {
                min: 16.8,
                avg: 23.06,
                max: 34.7,
                date: "17 Mayıs 23",
              },
              {
                min: 15.5,
                avg: 20.4,
                max: 27,
                date: "18 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 19.94,
                max: 30.3,
                date: "19 Mayıs 23",
              },
              {
                min: 11.8,
                avg: 20.26,
                max: 30.2,
                date: "20 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 20.16,
                max: 29.2,
                date: "21 Mayıs 23",
              },
              {
                min: 13.4,
                avg: 19.91,
                max: 29.1,
                date: "22 Mayıs 23",
              },
              {
                min: 13.2,
                avg: 20.91,
                max: 30,
                date: "23 Mayıs 23",
              },
              {
                min: 13.7,
                avg: 20.8,
                max: 31.5,
                date: "24 Mayıs 23",
              },
              {
                min: 12.6,
                avg: 21.59,
                max: 31.3,
                date: "25 Mayıs 23",
              },
              {
                min: 13.6,
                avg: 22.12,
                max: 32,
                date: "26 Mayıs 23",
              },
              {
                min: 15,
                avg: 22.24,
                max: 32,
                date: "27 Mayıs 23",
              },
              {
                min: 15.9,
                avg: 21.02,
                max: 29.2,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 14.8,
                avg: 15.18,
                max: 15.5,
                date: "9 - 15 Ocak",
              },
              {
                min: 9.5,
                avg: 18.04,
                max: 28.4,
                date: "16 - 22 Ocak",
              },
              {
                min: 9.1,
                avg: 15.18,
                max: 25.2,
                date: "23 - 29 Ocak",
              },
              {
                min: 7,
                avg: 13.47,
                max: 26.3,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: 7.6,
                avg: 13.96,
                max: 29.3,
                date: "6 - 12 Şubat",
              },
              {
                min: 10.1,
                avg: 16.99,
                max: 25.4,
                date: "13 - 19 Şubat",
              },
              {
                min: 10.3,
                avg: 16.89,
                max: 29.8,
                date: "20 - 26 Şubat",
              },
              {
                min: 9.9,
                avg: 16.03,
                max: 26,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 6.9,
                avg: 15.72,
                max: 26.7,
                date: "6 - 12 Mart",
              },
              {
                min: 8.2,
                avg: 15.13,
                max: 29.1,
                date: "13 - 19 Mart",
              },
              {
                min: 8.9,
                avg: 16.94,
                max: 27.5,
                date: "20 - 26 Mart",
              },
              {
                min: 5.7,
                avg: 17.22,
                max: 28.8,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 6.7,
                avg: 16.74,
                max: 28.4,
                date: "3 - 9 Nisan",
              },
              {
                min: 6.8,
                avg: 18.77,
                max: 44.3,
                date: "10 - 16 Nisan",
              },
              {
                min: 11.3,
                avg: 19,
                max: 28,
                date: "17 - 23 Nisan",
              },
              {
                min: 8,
                avg: 17.73,
                max: 30.4,
                date: "24 - 30 Nisan",
              },
              {
                min: 12.5,
                avg: 18.85,
                max: 29.9,
                date: "1 - 7 Mayıs",
              },
              {
                min: 7.8,
                avg: 18.71,
                max: 34.7,
                date: "8 - 14 Mayıs",
              },
              {
                min: 11.8,
                avg: 20.49,
                max: 31.5,
                date: "15 - 21 Mayıs",
              },
              {
                min: 12.6,
                avg: 21.47,
                max: 32,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "hava nemim-1",
            sensor_type: "Hava Nemi",
            unit: "%",
            minutely: [
              {
                value: 95.4,
                date: "28 Mayıs 05:50",
              },
              {
                value: 95.2,
                date: "28 Mayıs 05:55",
              },
              {
                value: 94.9,
                date: "28 Mayıs 06:00",
              },
              {
                value: 95,
                date: "28 Mayıs 06:05",
              },
              {
                value: 94.8,
                date: "28 Mayıs 06:10",
              },
              {
                value: 94.3,
                date: "28 Mayıs 06:15",
              },
              {
                value: 94.4,
                date: "28 Mayıs 06:20",
              },
              {
                value: 93.9,
                date: "28 Mayıs 06:25",
              },
              {
                value: 94.1,
                date: "28 Mayıs 06:30",
              },
              {
                value: 93.7,
                date: "28 Mayıs 06:35",
              },
              {
                value: 93.5,
                date: "28 Mayıs 06:40",
              },
              {
                value: 92,
                date: "28 Mayıs 06:50",
              },
              {
                value: 92.1,
                date: "28 Mayıs 06:55",
              },
              {
                value: 92.1,
                date: "28 Mayıs 07:00",
              },
              {
                value: 92.4,
                date: "28 Mayıs 07:05",
              },
              {
                value: 92.2,
                date: "28 Mayıs 07:10",
              },
              {
                value: 92.3,
                date: "28 Mayıs 07:15",
              },
              {
                value: 91.7,
                date: "28 Mayıs 07:20",
              },
              {
                value: 91.6,
                date: "28 Mayıs 07:25",
              },
              {
                value: 91.4,
                date: "28 Mayıs 07:30",
              },
              {
                value: 90.2,
                date: "28 Mayıs 07:35",
              },
              {
                value: 89.5,
                date: "28 Mayıs 07:40",
              },
              {
                value: 89.3,
                date: "28 Mayıs 07:45",
              },
              {
                value: 88.4,
                date: "28 Mayıs 07:50",
              },
              {
                value: 89.5,
                date: "28 Mayıs 07:55",
              },
              {
                value: 88.2,
                date: "28 Mayıs 08:00",
              },
              {
                value: 86.4,
                date: "28 Mayıs 08:05",
              },
              {
                value: 77.1,
                date: "28 Mayıs 08:10",
              },
              {
                value: 74.1,
                date: "28 Mayıs 08:15",
              },
              {
                value: 73.8,
                date: "28 Mayıs 08:20",
              },
              {
                value: 72.6,
                date: "28 Mayıs 08:25",
              },
              {
                value: 74,
                date: "28 Mayıs 08:30",
              },
              {
                value: 72.6,
                date: "28 Mayıs 08:35",
              },
              {
                value: 72.5,
                date: "28 Mayıs 08:40",
              },
              {
                value: 75.4,
                date: "28 Mayıs 08:45",
              },
              {
                value: 73.4,
                date: "28 Mayıs 08:50",
              },
              {
                value: 74.4,
                date: "28 Mayıs 08:55",
              },
              {
                value: 74.3,
                date: "28 Mayıs 09:00",
              },
              {
                value: 74.7,
                date: "28 Mayıs 09:05",
              },
              {
                value: 68.9,
                date: "28 Mayıs 09:10",
              },
              {
                value: 71.2,
                date: "28 Mayıs 09:15",
              },
              {
                value: 64.2,
                date: "28 Mayıs 09:20",
              },
              {
                value: 65.1,
                date: "28 Mayıs 09:25",
              },
              {
                value: 69.1,
                date: "28 Mayıs 09:30",
              },
              {
                value: 64.9,
                date: "28 Mayıs 09:35",
              },
              {
                value: 65.1,
                date: "28 Mayıs 09:40",
              },
              {
                value: 66,
                date: "28 Mayıs 09:45",
              },
              {
                value: 67.4,
                date: "28 Mayıs 09:50",
              },
              {
                value: 69.1,
                date: "28 Mayıs 09:55",
              },
              {
                value: 71.3,
                date: "28 Mayıs 10:00",
              },
              {
                value: 69.9,
                date: "28 Mayıs 10:05",
              },
              {
                value: 70.7,
                date: "28 Mayıs 10:10",
              },
              {
                value: 68,
                date: "28 Mayıs 10:15",
              },
              {
                value: 68.4,
                date: "28 Mayıs 10:20",
              },
              {
                value: 67.8,
                date: "28 Mayıs 10:25",
              },
              {
                value: 65.7,
                date: "28 Mayıs 10:30",
              },
              {
                value: 65.5,
                date: "28 Mayıs 10:35",
              },
              {
                value: 67.5,
                date: "28 Mayıs 10:40",
              },
              {
                value: 66.7,
                date: "28 Mayıs 10:45",
              },
              {
                value: 67,
                date: "28 Mayıs 10:50",
              },
              {
                value: 65.1,
                date: "28 Mayıs 10:55",
              },
              {
                value: 65.8,
                date: "28 Mayıs 11:00",
              },
              {
                value: 67.3,
                date: "28 Mayıs 11:05",
              },
              {
                value: 66.2,
                date: "28 Mayıs 11:10",
              },
              {
                value: 67.1,
                date: "28 Mayıs 11:15",
              },
              {
                value: 65,
                date: "28 Mayıs 11:20",
              },
              {
                value: 64.5,
                date: "28 Mayıs 11:25",
              },
              {
                value: 64.2,
                date: "28 Mayıs 11:30",
              },
              {
                value: 63.3,
                date: "28 Mayıs 11:35",
              },
              {
                value: 64.9,
                date: "28 Mayıs 11:40",
              },
              {
                value: 63.6,
                date: "28 Mayıs 11:45",
              },
              {
                value: 65,
                date: "28 Mayıs 11:50",
              },
              {
                value: 63.2,
                date: "28 Mayıs 11:55",
              },
              {
                value: 63.3,
                date: "28 Mayıs 12:00",
              },
              {
                value: 61.5,
                date: "28 Mayıs 12:05",
              },
              {
                value: 60.8,
                date: "28 Mayıs 12:10",
              },
              {
                value: 61,
                date: "28 Mayıs 12:15",
              },
              {
                value: 60,
                date: "28 Mayıs 12:20",
              },
              {
                value: 61.2,
                date: "28 Mayıs 12:25",
              },
              {
                value: 63.3,
                date: "28 Mayıs 12:30",
              },
              {
                value: 63.1,
                date: "28 Mayıs 12:35",
              },
              {
                value: 63.9,
                date: "28 Mayıs 12:40",
              },
              {
                value: 62,
                date: "28 Mayıs 12:45",
              },
              {
                value: 64.3,
                date: "28 Mayıs 12:50",
              },
              {
                value: 63.5,
                date: "28 Mayıs 12:55",
              },
              {
                value: 65,
                date: "28 Mayıs 13:00",
              },
              {
                value: 64.6,
                date: "28 Mayıs 13:05",
              },
              {
                value: 64.4,
                date: "28 Mayıs 13:10",
              },
              {
                value: 64.2,
                date: "28 Mayıs 13:15",
              },
              {
                value: 64.7,
                date: "28 Mayıs 13:20",
              },
              {
                value: 64.5,
                date: "28 Mayıs 13:25",
              },
              {
                value: 65.1,
                date: "28 Mayıs 13:30",
              },
              {
                value: 65.9,
                date: "28 Mayıs 13:35",
              },
              {
                value: 68.7,
                date: "28 Mayıs 13:40",
              },
              {
                value: 67.2,
                date: "28 Mayıs 13:45",
              },
              {
                value: 68.1,
                date: "28 Mayıs 13:50",
              },
              {
                value: 66.3,
                date: "28 Mayıs 13:55",
              },
              {
                value: 66.1,
                date: "28 Mayıs 14:00",
              },
              {
                value: 65.7,
                date: "28 Mayıs 14:05",
              },
              {
                value: 65.4,
                date: "28 Mayıs 14:10",
              },
              {
                value: 65,
                date: "28 Mayıs 14:15",
              },
              {
                value: 67,
                date: "28 Mayıs 14:20",
              },
              {
                value: 67.1,
                date: "28 Mayıs 14:25",
              },
              {
                value: 67.9,
                date: "28 Mayıs 14:30",
              },
              {
                value: 65.9,
                date: "28 Mayıs 14:35",
              },
              {
                value: 65.1,
                date: "28 Mayıs 14:40",
              },
              {
                value: 70,
                date: "28 Mayıs 14:45",
              },
              {
                value: 69.9,
                date: "28 Mayıs 14:50",
              },
              {
                value: 71.2,
                date: "28 Mayıs 14:55",
              },
              {
                value: 69.3,
                date: "28 Mayıs 15:00",
              },
              {
                value: 69.6,
                date: "28 Mayıs 15:05",
              },
              {
                value: 71.4,
                date: "28 Mayıs 15:10",
              },
              {
                value: 74,
                date: "28 Mayıs 15:15",
              },
              {
                value: 58.6,
                date: "28 Mayıs 15:20",
              },
              {
                value: 60.4,
                date: "28 Mayıs 15:25",
              },
              {
                value: 63.3,
                date: "28 Mayıs 15:30",
              },
              {
                value: 63.1,
                date: "28 Mayıs 15:35",
              },
              {
                value: 63.8,
                date: "28 Mayıs 15:40",
              },
              {
                value: 62.6,
                date: "28 Mayıs 15:45",
              },
              {
                value: 62.1,
                date: "28 Mayıs 15:50",
              },
              {
                value: 62.6,
                date: "28 Mayıs 15:55",
              },
              {
                value: 65,
                date: "28 Mayıs 16:00",
              },
              {
                value: 64.1,
                date: "28 Mayıs 16:05",
              },
              {
                value: 64.3,
                date: "28 Mayıs 16:10",
              },
              {
                value: 65,
                date: "28 Mayıs 16:15",
              },
              {
                value: 66.3,
                date: "28 Mayıs 16:20",
              },
              {
                value: 67.1,
                date: "28 Mayıs 16:25",
              },
              {
                value: 68.1,
                date: "28 Mayıs 16:30",
              },
              {
                value: 67.1,
                date: "28 Mayıs 16:35",
              },
              {
                value: 66.6,
                date: "28 Mayıs 16:40",
              },
              {
                value: 65.2,
                date: "28 Mayıs 16:45",
              },
              {
                value: 65.6,
                date: "28 Mayıs 16:50",
              },
              {
                value: 65,
                date: "28 Mayıs 16:55",
              },
              {
                value: 65.5,
                date: "28 Mayıs 17:00",
              },
              {
                value: 65.6,
                date: "28 Mayıs 17:05",
              },
              {
                value: 63.7,
                date: "28 Mayıs 17:10",
              },
              {
                value: 64,
                date: "28 Mayıs 17:15",
              },
              {
                value: 60.7,
                date: "28 Mayıs 17:20",
              },
              {
                value: 60.5,
                date: "28 Mayıs 17:25",
              },
              {
                value: 59.1,
                date: "28 Mayıs 17:30",
              },
              {
                value: 61.8,
                date: "28 Mayıs 17:35",
              },
              {
                value: 65.1,
                date: "28 Mayıs 17:40",
              },
              {
                value: 64.7,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 36.9,
                avg: 71.58,
                max: 82.5,
                date: "28 Nisan 23",
              },
              {
                min: 30.4,
                avg: 63.54,
                max: 86.6,
                date: "29 Nisan 23",
              },
              {
                min: 43.2,
                avg: 71.57,
                max: 91.3,
                date: "30 Nisan 23",
              },
              {
                min: 30.9,
                avg: 65.82,
                max: 90.8,
                date: "01 Mayıs 23",
              },
              {
                min: 38.2,
                avg: 64.98,
                max: 85.1,
                date: "02 Mayıs 23",
              },
              {
                min: 42.5,
                avg: 78.05,
                max: 96,
                date: "03 Mayıs 23",
              },
              {
                min: 49.1,
                avg: 81.55,
                max: 97.2,
                date: "04 Mayıs 23",
              },
              {
                min: 61,
                avg: 87.52,
                max: 97.6,
                date: "05 Mayıs 23",
              },
              {
                min: 41,
                avg: 72.32,
                max: 94.3,
                date: "06 Mayıs 23",
              },
              {
                min: 39.6,
                avg: 71.4,
                max: 94.9,
                date: "07 Mayıs 23",
              },
              {
                min: 40.5,
                avg: 69.72,
                max: 92.5,
                date: "08 Mayıs 23",
              },
              {
                min: 43.6,
                avg: 75.29,
                max: 93.3,
                date: "09 Mayıs 23",
              },
              {
                min: 43.6,
                avg: 73.13,
                max: 90.7,
                date: "10 Mayıs 23",
              },
              {
                min: 46.1,
                avg: 72.52,
                max: 87.6,
                date: "11 Mayıs 23",
              },
              {
                min: 50.1,
                avg: 78.57,
                max: 90.1,
                date: "12 Mayıs 23",
              },
              {
                min: 35.7,
                avg: 66.17,
                max: 88.5,
                date: "13 Mayıs 23",
              },
              {
                min: 46.3,
                avg: 69.61,
                max: 89.1,
                date: "14 Mayıs 23",
              },
              {
                min: 37.9,
                avg: 67.54,
                max: 92.9,
                date: "15 Mayıs 23",
              },
              {
                min: 51.7,
                avg: 79.64,
                max: 94.7,
                date: "16 Mayıs 23",
              },
              {
                min: 49.4,
                avg: 77.6,
                max: 96.8,
                date: "17 Mayıs 23",
              },
              {
                min: 49.4,
                avg: 77.32,
                max: 96.3,
                date: "18 Mayıs 23",
              },
              {
                min: 40.4,
                avg: 78.37,
                max: 96.6,
                date: "19 Mayıs 23",
              },
              {
                min: 41.1,
                avg: 72.49,
                max: 96.7,
                date: "20 Mayıs 23",
              },
              {
                min: 47,
                avg: 75.45,
                max: 96,
                date: "21 Mayıs 23",
              },
              {
                min: 40.1,
                avg: 74.87,
                max: 95,
                date: "22 Mayıs 23",
              },
              {
                min: 44.5,
                avg: 76.8,
                max: 95.8,
                date: "23 Mayıs 23",
              },
              {
                min: 44.4,
                avg: 77.19,
                max: 97.2,
                date: "24 Mayıs 23",
              },
              {
                min: 42.4,
                avg: 74.27,
                max: 95.3,
                date: "25 Mayıs 23",
              },
              {
                min: 42.3,
                avg: 73.79,
                max: 96.7,
                date: "26 Mayıs 23",
              },
              {
                min: 46.3,
                avg: 75.88,
                max: 96,
                date: "27 Mayıs 23",
              },
              {
                min: 58.6,
                avg: 75.63,
                max: 95.4,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 69.7,
                avg: 70.61,
                max: 71.6,
                date: "9 - 15 Ocak",
              },
              {
                min: 36.5,
                avg: 56.3,
                max: 87.8,
                date: "16 - 22 Ocak",
              },
              {
                min: 30.2,
                avg: 51.26,
                max: 76.9,
                date: "23 - 29 Ocak",
              },
              {
                min: 20.3,
                avg: 49.84,
                max: 81.7,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: 23,
                avg: 45.69,
                max: 70.7,
                date: "6 - 12 Şubat",
              },
              {
                min: 23.7,
                avg: 57.04,
                max: 85.6,
                date: "13 - 19 Şubat",
              },
              {
                min: 33.1,
                avg: 65.86,
                max: 88.9,
                date: "20 - 26 Şubat",
              },
              {
                min: 45,
                avg: 72.07,
                max: 93,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 29,
                avg: 68.13,
                max: 92,
                date: "6 - 12 Mart",
              },
              {
                min: 32.6,
                avg: 70.54,
                max: 91.6,
                date: "13 - 19 Mart",
              },
              {
                min: 28.9,
                avg: 68.43,
                max: 90,
                date: "20 - 26 Mart",
              },
              {
                min: 26.3,
                avg: 74.54,
                max: 95.7,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 38.5,
                avg: 73.71,
                max: 95,
                date: "3 - 9 Nisan",
              },
              {
                min: 30.7,
                avg: 74.36,
                max: 98.2,
                date: "10 - 16 Nisan",
              },
              {
                min: 35.3,
                avg: 73.03,
                max: 94.6,
                date: "17 - 23 Nisan",
              },
              {
                min: 30.4,
                avg: 69.97,
                max: 96.2,
                date: "24 - 30 Nisan",
              },
              {
                min: 39.6,
                avg: 76.27,
                max: 97.6,
                date: "1 - 7 Mayıs",
              },
              {
                min: 35.7,
                avg: 73.02,
                max: 96.8,
                date: "8 - 14 Mayıs",
              },
              {
                min: 40.1,
                avg: 75.72,
                max: 97.2,
                date: "15 - 21 Mayıs",
              },
              {
                min: 42.3,
                avg: 75.44,
                max: 96.7,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "ph sensörüm",
            sensor_type: "pH",
            unit: "",
            minutely: [
              {
                value: 7,
                date: "28 Mayıs 05:50",
              },
              {
                value: 7,
                date: "28 Mayıs 05:55",
              },
              {
                value: 7,
                date: "28 Mayıs 06:00",
              },
              {
                value: 7,
                date: "28 Mayıs 06:05",
              },
              {
                value: 7,
                date: "28 Mayıs 06:10",
              },
              {
                value: 7,
                date: "28 Mayıs 06:15",
              },
              {
                value: 7,
                date: "28 Mayıs 06:20",
              },
              {
                value: 7,
                date: "28 Mayıs 06:25",
              },
              {
                value: 7,
                date: "28 Mayıs 06:30",
              },
              {
                value: 7,
                date: "28 Mayıs 06:35",
              },
              {
                value: 7,
                date: "28 Mayıs 06:40",
              },
              {
                value: 7,
                date: "28 Mayıs 06:50",
              },
              {
                value: 7,
                date: "28 Mayıs 06:55",
              },
              {
                value: 7,
                date: "28 Mayıs 07:00",
              },
              {
                value: 7,
                date: "28 Mayıs 07:05",
              },
              {
                value: 7,
                date: "28 Mayıs 07:10",
              },
              {
                value: 7,
                date: "28 Mayıs 07:15",
              },
              {
                value: 7,
                date: "28 Mayıs 07:20",
              },
              {
                value: 7,
                date: "28 Mayıs 07:25",
              },
              {
                value: 7,
                date: "28 Mayıs 07:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:25",
              },
              {
                value: 7,
                date: "28 Mayıs 14:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 16:00",
              },
              {
                value: 7,
                date: "28 Mayıs 16:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 16:10",
              },
              {
                value: 7,
                date: "28 Mayıs 16:15",
              },
              {
                value: 7,
                date: "28 Mayıs 16:20",
              },
              {
                value: 7,
                date: "28 Mayıs 16:25",
              },
              {
                value: 7,
                date: "28 Mayıs 16:30",
              },
              {
                value: 7,
                date: "28 Mayıs 16:35",
              },
              {
                value: 7,
                date: "28 Mayıs 16:40",
              },
              {
                value: 7,
                date: "28 Mayıs 16:45",
              },
              {
                value: 7,
                date: "28 Mayıs 16:50",
              },
              {
                value: 7,
                date: "28 Mayıs 16:55",
              },
              {
                value: 7,
                date: "28 Mayıs 17:00",
              },
              {
                value: 7,
                date: "28 Mayıs 17:05",
              },
              {
                value: 7,
                date: "28 Mayıs 17:10",
              },
              {
                value: 7,
                date: "28 Mayıs 17:15",
              },
              {
                value: 7,
                date: "28 Mayıs 17:20",
              },
              {
                value: 7,
                date: "28 Mayıs 17:25",
              },
              {
                value: 7,
                date: "28 Mayıs 17:30",
              },
              {
                value: 7,
                date: "28 Mayıs 17:35",
              },
              {
                value: 7,
                date: "28 Mayıs 17:40",
              },
              {
                value: 7,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 7.3,
                avg: 7.33,
                max: 7.4,
                date: "28 Nisan 23",
              },
              {
                min: 7.3,
                avg: 7.36,
                max: 7.4,
                date: "29 Nisan 23",
              },
              {
                min: 7.3,
                avg: 7.34,
                max: 7.4,
                date: "30 Nisan 23",
              },
              {
                min: 7.3,
                avg: 7.31,
                max: 7.4,
                date: "01 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.34,
                max: 7.4,
                date: "02 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.35,
                max: 7.4,
                date: "03 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.31,
                max: 7.4,
                date: "04 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.3,
                max: 7.4,
                date: "05 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.3,
                max: 7.4,
                date: "06 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.27,
                max: 7.3,
                date: "07 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.3,
                max: 7.4,
                date: "08 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.31,
                max: 7.4,
                date: "09 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.33,
                max: 7.4,
                date: "10 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.3,
                max: 7.3,
                date: "11 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.34,
                max: 7.4,
                date: "12 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.29,
                max: 7.4,
                date: "13 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.23,
                max: 7.3,
                date: "14 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.26,
                max: 7.3,
                date: "15 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 30.14,
                max: 6553.5,
                date: "16 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.33,
                max: 7.4,
                date: "17 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.32,
                max: 7.4,
                date: "18 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 30.08,
                max: 6553.5,
                date: "19 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 7.17,
                max: 7.3,
                date: "20 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 7.16,
                max: 7.9,
                date: "21 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 30.07,
                max: 6553.5,
                date: "22 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.25,
                max: 7.3,
                date: "23 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.3,
                max: 7.4,
                date: "24 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.27,
                max: 7.4,
                date: "25 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 7.18,
                max: 7.3,
                date: "26 Mayıs 23",
              },
              {
                min: 7,
                avg: 7.09,
                max: 7.2,
                date: "27 Mayıs 23",
              },
              {
                min: 7,
                avg: 7.06,
                max: 7.1,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 7,
                avg: 7.4,
                max: 8,
                date: "6 - 12 Şubat",
              },
              {
                min: 6.9,
                avg: 7.15,
                max: 7.4,
                date: "13 - 19 Şubat",
              },
              {
                min: 7.1,
                avg: 7.37,
                max: 7.6,
                date: "20 - 26 Şubat",
              },
              {
                min: 7.3,
                avg: 14.02,
                max: 6553.5,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 7.3,
                avg: 10.71,
                max: 6553.5,
                date: "6 - 12 Mart",
              },
              {
                min: 7.2,
                avg: 7.42,
                max: 7.5,
                date: "13 - 19 Mart",
              },
              {
                min: 7.3,
                avg: 17.25,
                max: 6553.5,
                date: "20 - 26 Mart",
              },
              {
                min: 7.3,
                avg: 7.41,
                max: 7.5,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 7.2,
                avg: 7.37,
                max: 7.5,
                date: "3 - 9 Nisan",
              },
              {
                min: 7.1,
                avg: 10.7,
                max: 6553.5,
                date: "10 - 16 Nisan",
              },
              {
                min: 7.2,
                avg: 10.64,
                max: 6553.5,
                date: "17 - 23 Nisan",
              },
              {
                min: 7.2,
                avg: 7.34,
                max: 7.5,
                date: "24 - 30 Nisan",
              },
              {
                min: 7.2,
                avg: 7.3,
                max: 7.4,
                date: "1 - 7 Mayıs",
              },
              {
                min: 7.2,
                avg: 10.57,
                max: 6553.5,
                date: "8 - 14 Mayıs",
              },
              {
                min: 7.1,
                avg: 14.3,
                max: 6553.5,
                date: "15 - 21 Mayıs",
              },
              {
                min: 7,
                avg: 7.17,
                max: 7.4,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "EC sensörüm",
            sensor_type: "EC",
            unit: "mS/cm",
            minutely: [
              {
                value: 0.18,
                date: "28 Mayıs 05:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 05:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "28 Nisan 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "29 Nisan 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "30 Nisan 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "01 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "02 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "03 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "04 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "05 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "06 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "07 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "08 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "09 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "10 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "11 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "12 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "13 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "14 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "15 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.41,
                max: 65.53,
                date: "16 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "17 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "18 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.41,
                max: 65.53,
                date: "19 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "20 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "21 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.41,
                max: 65.53,
                date: "22 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "23 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "24 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "25 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "26 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "27 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 0,
                avg: 0.13,
                max: 0.18,
                date: "6 - 12 Şubat",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "13 - 19 Şubat",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "20 - 26 Şubat",
              },
              {
                min: 0.18,
                avg: 0.25,
                max: 65.53,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 0.18,
                avg: 0.21,
                max: 65.53,
                date: "6 - 12 Mart",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "13 - 19 Mart",
              },
              {
                min: 0.18,
                avg: 0.28,
                max: 65.53,
                date: "20 - 26 Mart",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "3 - 9 Nisan",
              },
              {
                min: 0.18,
                avg: 0.21,
                max: 65.53,
                date: "10 - 16 Nisan",
              },
              {
                min: 0.18,
                avg: 0.21,
                max: 65.53,
                date: "17 - 23 Nisan",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "24 - 30 Nisan",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "1 - 7 Mayıs",
              },
              {
                min: 0.18,
                avg: 0.21,
                max: 65.53,
                date: "8 - 14 Mayıs",
              },
              {
                min: 0.18,
                avg: 0.25,
                max: 65.53,
                date: "15 - 21 Mayıs",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "radyasyon PAR",
            sensor_type: "PAR",
            unit: "μmol/m2•s",
            minutely: [
              {
                value: 2,
                date: "28 Mayıs 05:47",
              },
              {
                value: 4,
                date: "28 Mayıs 05:52",
              },
              {
                value: 8,
                date: "28 Mayıs 05:57",
              },
              {
                value: 15,
                date: "28 Mayıs 06:02",
              },
              {
                value: 21,
                date: "28 Mayıs 06:07",
              },
              {
                value: 28,
                date: "28 Mayıs 06:12",
              },
              {
                value: 37,
                date: "28 Mayıs 06:17",
              },
              {
                value: 43,
                date: "28 Mayıs 06:22",
              },
              {
                value: 52,
                date: "28 Mayıs 06:27",
              },
              {
                value: 65,
                date: "28 Mayıs 06:32",
              },
              {
                value: 78,
                date: "28 Mayıs 06:37",
              },
              {
                value: 89,
                date: "28 Mayıs 06:42",
              },
              {
                value: 100,
                date: "28 Mayıs 06:47",
              },
              {
                value: 108,
                date: "28 Mayıs 06:52",
              },
              {
                value: 113,
                date: "28 Mayıs 06:57",
              },
              {
                value: 122,
                date: "28 Mayıs 07:02",
              },
              {
                value: 128,
                date: "28 Mayıs 07:07",
              },
              {
                value: 135,
                date: "28 Mayıs 07:12",
              },
              {
                value: 152,
                date: "28 Mayıs 07:17",
              },
              {
                value: 198,
                date: "28 Mayıs 07:22",
              },
              {
                value: 265,
                date: "28 Mayıs 07:27",
              },
              {
                value: 250,
                date: "28 Mayıs 07:32",
              },
              {
                value: 307,
                date: "28 Mayıs 07:37",
              },
              {
                value: 348,
                date: "28 Mayıs 07:42",
              },
              {
                value: 383,
                date: "28 Mayıs 07:47",
              },
              {
                value: 407,
                date: "28 Mayıs 07:52",
              },
              {
                value: 435,
                date: "28 Mayıs 07:57",
              },
              {
                value: 466,
                date: "28 Mayıs 08:02",
              },
              {
                value: 481,
                date: "28 Mayıs 08:07",
              },
              {
                value: 507,
                date: "28 Mayıs 08:12",
              },
              {
                value: 525,
                date: "28 Mayıs 08:17",
              },
              {
                value: 599,
                date: "28 Mayıs 08:22",
              },
              {
                value: 261,
                date: "28 Mayıs 08:27",
              },
              {
                value: 640,
                date: "28 Mayıs 08:32",
              },
              {
                value: 411,
                date: "28 Mayıs 08:37",
              },
              {
                value: 274,
                date: "28 Mayıs 08:42",
              },
              {
                value: 259,
                date: "28 Mayıs 08:47",
              },
              {
                value: 581,
                date: "28 Mayıs 08:52",
              },
              {
                value: 433,
                date: "28 Mayıs 08:57",
              },
              {
                value: 607,
                date: "28 Mayıs 09:02",
              },
              {
                value: 814,
                date: "28 Mayıs 09:07",
              },
              {
                value: 817,
                date: "28 Mayıs 09:12",
              },
              {
                value: 675,
                date: "28 Mayıs 09:17",
              },
              {
                value: 466,
                date: "28 Mayıs 09:22",
              },
              {
                value: 690,
                date: "28 Mayıs 09:27",
              },
              {
                value: 814,
                date: "28 Mayıs 09:32",
              },
              {
                value: 893,
                date: "28 Mayıs 09:37",
              },
              {
                value: 339,
                date: "28 Mayıs 09:42",
              },
              {
                value: 398,
                date: "28 Mayıs 09:47",
              },
              {
                value: 531,
                date: "28 Mayıs 09:52",
              },
              {
                value: 414,
                date: "28 Mayıs 09:57",
              },
              {
                value: 455,
                date: "28 Mayıs 10:02",
              },
              {
                value: 692,
                date: "28 Mayıs 10:07",
              },
              {
                value: 448,
                date: "28 Mayıs 10:12",
              },
              {
                value: 562,
                date: "28 Mayıs 10:17",
              },
              {
                value: 538,
                date: "28 Mayıs 10:22",
              },
              {
                value: 705,
                date: "28 Mayıs 10:27",
              },
              {
                value: 631,
                date: "28 Mayıs 10:32",
              },
              {
                value: 525,
                date: "28 Mayıs 10:37",
              },
              {
                value: 533,
                date: "28 Mayıs 10:42",
              },
              {
                value: 538,
                date: "28 Mayıs 10:47",
              },
              {
                value: 566,
                date: "28 Mayıs 10:52",
              },
              {
                value: 437,
                date: "28 Mayıs 10:57",
              },
              {
                value: 451,
                date: "28 Mayıs 11:02",
              },
              {
                value: 352,
                date: "28 Mayıs 11:07",
              },
              {
                value: 411,
                date: "28 Mayıs 11:12",
              },
              {
                value: 509,
                date: "28 Mayıs 11:17",
              },
              {
                value: 533,
                date: "28 Mayıs 11:22",
              },
              {
                value: 542,
                date: "28 Mayıs 11:27",
              },
              {
                value: 496,
                date: "28 Mayıs 11:32",
              },
              {
                value: 583,
                date: "28 Mayıs 11:37",
              },
              {
                value: 522,
                date: "28 Mayıs 11:42",
              },
              {
                value: 501,
                date: "28 Mayıs 11:47",
              },
              {
                value: 514,
                date: "28 Mayıs 11:52",
              },
              {
                value: 540,
                date: "28 Mayıs 11:57",
              },
              {
                value: 640,
                date: "28 Mayıs 12:02",
              },
              {
                value: 753,
                date: "28 Mayıs 12:07",
              },
              {
                value: 843,
                date: "28 Mayıs 12:12",
              },
              {
                value: 653,
                date: "28 Mayıs 12:17",
              },
              {
                value: 509,
                date: "28 Mayıs 12:22",
              },
              {
                value: 472,
                date: "28 Mayıs 12:27",
              },
              {
                value: 551,
                date: "28 Mayıs 12:32",
              },
              {
                value: 634,
                date: "28 Mayıs 12:37",
              },
              {
                value: 612,
                date: "28 Mayıs 12:42",
              },
              {
                value: 505,
                date: "28 Mayıs 12:47",
              },
              {
                value: 623,
                date: "28 Mayıs 12:52",
              },
              {
                value: 562,
                date: "28 Mayıs 12:57",
              },
              {
                value: 573,
                date: "28 Mayıs 13:02",
              },
              {
                value: 799,
                date: "28 Mayıs 13:07",
              },
              {
                value: 623,
                date: "28 Mayıs 13:12",
              },
              {
                value: 394,
                date: "28 Mayıs 13:17",
              },
              {
                value: 533,
                date: "28 Mayıs 13:22",
              },
              {
                value: 414,
                date: "28 Mayıs 13:27",
              },
              {
                value: 390,
                date: "28 Mayıs 13:32",
              },
              {
                value: 322,
                date: "28 Mayıs 13:37",
              },
              {
                value: 294,
                date: "28 Mayıs 13:42",
              },
              {
                value: 276,
                date: "28 Mayıs 13:47",
              },
              {
                value: 485,
                date: "28 Mayıs 13:52",
              },
              {
                value: 496,
                date: "28 Mayıs 13:57",
              },
              {
                value: 457,
                date: "28 Mayıs 14:02",
              },
              {
                value: 610,
                date: "28 Mayıs 14:07",
              },
              {
                value: 695,
                date: "28 Mayıs 14:12",
              },
              {
                value: 309,
                date: "28 Mayıs 14:17",
              },
              {
                value: 361,
                date: "28 Mayıs 14:22",
              },
              {
                value: 442,
                date: "28 Mayıs 14:27",
              },
              {
                value: 736,
                date: "28 Mayıs 14:32",
              },
              {
                value: 823,
                date: "28 Mayıs 14:37",
              },
              {
                value: 795,
                date: "28 Mayıs 14:42",
              },
              {
                value: 775,
                date: "28 Mayıs 14:47",
              },
              {
                value: 817,
                date: "28 Mayıs 14:52",
              },
              {
                value: 814,
                date: "28 Mayıs 14:57",
              },
              {
                value: 682,
                date: "28 Mayıs 15:02",
              },
              {
                value: 651,
                date: "28 Mayıs 15:07",
              },
              {
                value: 655,
                date: "28 Mayıs 15:12",
              },
              {
                value: 527,
                date: "28 Mayıs 15:17",
              },
              {
                value: 420,
                date: "28 Mayıs 15:22",
              },
              {
                value: 424,
                date: "28 Mayıs 15:27",
              },
              {
                value: 566,
                date: "28 Mayıs 15:32",
              },
              {
                value: 520,
                date: "28 Mayıs 15:37",
              },
              {
                value: 712,
                date: "28 Mayıs 15:42",
              },
              {
                value: 610,
                date: "28 Mayıs 15:47",
              },
              {
                value: 461,
                date: "28 Mayıs 15:52",
              },
              {
                value: 405,
                date: "28 Mayıs 15:57",
              },
              {
                value: 400,
                date: "28 Mayıs 16:02",
              },
              {
                value: 457,
                date: "28 Mayıs 16:07",
              },
              {
                value: 287,
                date: "28 Mayıs 16:12",
              },
              {
                value: 254,
                date: "28 Mayıs 16:17",
              },
              {
                value: 361,
                date: "28 Mayıs 16:22",
              },
              {
                value: 294,
                date: "28 Mayıs 16:27",
              },
              {
                value: 309,
                date: "28 Mayıs 16:32",
              },
              {
                value: 342,
                date: "28 Mayıs 16:37",
              },
              {
                value: 427,
                date: "28 Mayıs 16:42",
              },
              {
                value: 320,
                date: "28 Mayıs 16:47",
              },
              {
                value: 296,
                date: "28 Mayıs 16:52",
              },
              {
                value: 313,
                date: "28 Mayıs 16:57",
              },
              {
                value: 305,
                date: "28 Mayıs 17:02",
              },
              {
                value: 477,
                date: "28 Mayıs 17:07",
              },
              {
                value: 483,
                date: "28 Mayıs 17:12",
              },
              {
                value: 601,
                date: "28 Mayıs 17:17",
              },
              {
                value: 725,
                date: "28 Mayıs 17:22",
              },
              {
                value: 440,
                date: "28 Mayıs 17:27",
              },
              {
                value: 263,
                date: "28 Mayıs 17:32",
              },
              {
                value: 335,
                date: "28 Mayıs 17:37",
              },
              {
                value: 394,
                date: "28 Mayıs 17:42",
              },
            ],
            daily: [
              {
                min: 0,
                avg: 71.17,
                max: 747,
                date: "28 Nisan 23",
              },
              {
                min: 0,
                avg: 397.74,
                max: 1553,
                date: "29 Nisan 23",
              },
              {
                min: 0,
                avg: 384.27,
                max: 1385,
                date: "30 Nisan 23",
              },
              {
                min: 0,
                avg: 423.58,
                max: 1516,
                date: "01 Mayıs 23",
              },
              {
                min: 0,
                avg: 418.76,
                max: 1512,
                date: "02 Mayıs 23",
              },
              {
                min: 0,
                avg: 270.16,
                max: 1183,
                date: "03 Mayıs 23",
              },
              {
                min: 0,
                avg: 382.62,
                max: 1473,
                date: "04 Mayıs 23",
              },
              {
                min: 0,
                avg: 102.93,
                max: 697,
                date: "05 Mayıs 23",
              },
              {
                min: 0,
                avg: 397.27,
                max: 1514,
                date: "06 Mayıs 23",
              },
              {
                min: 0,
                avg: 424.96,
                max: 1525,
                date: "07 Mayıs 23",
              },
              {
                min: 0,
                avg: 446.97,
                max: 1534,
                date: "08 Mayıs 23",
              },
              {
                min: 0,
                avg: 308.73,
                max: 1427,
                date: "09 Mayıs 23",
              },
              {
                min: 0,
                avg: 320.82,
                max: 1666,
                date: "10 Mayıs 23",
              },
              {
                min: 0,
                avg: 309.59,
                max: 1425,
                date: "11 Mayıs 23",
              },
              {
                min: 0,
                avg: 182.1,
                max: 782,
                date: "12 Mayıs 23",
              },
              {
                min: 0,
                avg: 453.21,
                max: 1473,
                date: "13 Mayıs 23",
              },
              {
                min: 0,
                avg: 318.98,
                max: 1398,
                date: "14 Mayıs 23",
              },
              {
                min: 0,
                avg: 417.58,
                max: 1398,
                date: "15 Mayıs 23",
              },
              {
                min: 0,
                avg: 295.12,
                max: 1233,
                date: "16 Mayıs 23",
              },
              {
                min: 0,
                avg: 480.12,
                max: 1381,
                date: "17 Mayıs 23",
              },
              {
                min: 0,
                avg: 391.92,
                max: 1359,
                date: "18 Mayıs 23",
              },
              {
                min: 0,
                avg: 369.8,
                max: 1416,
                date: "19 Mayıs 23",
              },
              {
                min: 0,
                avg: 404.87,
                max: 1488,
                date: "20 Mayıs 23",
              },
              {
                min: 0,
                avg: 408.15,
                max: 1446,
                date: "21 Mayıs 23",
              },
              {
                min: 0,
                avg: 341.7,
                max: 1398,
                date: "22 Mayıs 23",
              },
              {
                min: 0,
                avg: 396.97,
                max: 1512,
                date: "23 Mayıs 23",
              },
              {
                min: 0,
                avg: 329.86,
                max: 1457,
                date: "24 Mayıs 23",
              },
              {
                min: 0,
                avg: 455.47,
                max: 1364,
                date: "25 Mayıs 23",
              },
              {
                min: 0,
                avg: 466.4,
                max: 1329,
                date: "26 Mayıs 23",
              },
              {
                min: 0,
                avg: 467.43,
                max: 1418,
                date: "27 Mayıs 23",
              },
              {
                min: 0,
                avg: 365.41,
                max: 893,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 0,
                avg: 140.61,
                max: 997,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: 0,
                avg: 184.73,
                max: 967,
                date: "6 - 12 Şubat",
              },
              {
                min: 0,
                avg: 266.76,
                max: 1294,
                date: "13 - 19 Şubat",
              },
              {
                min: 0,
                avg: 220.78,
                max: 1270,
                date: "20 - 26 Şubat",
              },
              {
                min: 0,
                avg: 192.78,
                max: 1492,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 0,
                avg: 260.48,
                max: 1514,
                date: "6 - 12 Mart",
              },
              {
                min: 0,
                avg: 211.41,
                max: 1481,
                date: "13 - 19 Mart",
              },
              {
                min: 0,
                avg: 310.01,
                max: 1586,
                date: "20 - 26 Mart",
              },
              {
                min: 0,
                avg: 283.08,
                max: 1553,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 0,
                avg: 295,
                max: 1313,
                date: "3 - 9 Nisan",
              },
              {
                min: 0,
                avg: 301.08,
                max: 1647,
                date: "10 - 16 Nisan",
              },
              {
                min: 0,
                avg: 381.38,
                max: 1592,
                date: "17 - 23 Nisan",
              },
              {
                min: 0,
                avg: 363.53,
                max: 1553,
                date: "24 - 30 Nisan",
              },
              {
                min: 0,
                avg: 342.43,
                max: 1666,
                date: "1 - 7 Mayıs",
              },
              {
                min: 0,
                avg: 334.33,
                max: 1473,
                date: "8 - 14 Mayıs",
              },
              {
                min: 0,
                avg: 391.52,
                max: 1512,
                date: "15 - 21 Mayıs",
              },
              {
                min: 0,
                avg: 410.38,
                max: 1418,
                date: "22 - 28 Mayıs",
              },
            ],
          },
        ],
      },
      {
        sektor_name: "Sektör-2",
        sensor_list: [
          {
            sensor_name: "Sıcaklığım-1",
            sensor_type: "Hava Sıcaklığı",
            unit: "°C",
            minutely: [
              {
                value: 16.1,
                date: "28 Mayıs 05:46",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:47",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:48",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:49",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:50",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:51",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:52",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:53",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:54",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:55",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:56",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:57",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:58",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:59",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:00",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:01",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:02",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:03",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:04",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:05",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:06",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:07",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:08",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:09",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:10",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:11",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:12",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:13",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:14",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:15",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:16",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:17",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:18",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:19",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:20",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:21",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:22",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:23",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:24",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:25",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:26",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:27",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:28",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:29",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:30",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:31",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:32",
              },
              {
                value: 16.7,
                date: "28 Mayıs 06:33",
              },
              {
                value: 16.7,
                date: "28 Mayıs 06:34",
              },
              {
                value: 16.8,
                date: "28 Mayıs 06:35",
              },
              {
                value: 16.8,
                date: "28 Mayıs 06:36",
              },
              {
                value: 16.8,
                date: "28 Mayıs 06:37",
              },
              {
                value: 16.9,
                date: "28 Mayıs 06:38",
              },
              {
                value: 16.9,
                date: "28 Mayıs 06:39",
              },
              {
                value: 16.9,
                date: "28 Mayıs 06:40",
              },
              {
                value: 17,
                date: "28 Mayıs 06:41",
              },
              {
                value: 17,
                date: "28 Mayıs 06:42",
              },
              {
                value: 17.1,
                date: "28 Mayıs 06:43",
              },
              {
                value: 17.1,
                date: "28 Mayıs 06:44",
              },
              {
                value: 17.1,
                date: "28 Mayıs 06:45",
              },
              {
                value: 17.1,
                date: "28 Mayıs 06:46",
              },
              {
                value: 17.2,
                date: "28 Mayıs 06:47",
              },
              {
                value: 17.2,
                date: "28 Mayıs 06:48",
              },
              {
                value: 17.2,
                date: "28 Mayıs 06:49",
              },
              {
                value: 17.3,
                date: "28 Mayıs 06:50",
              },
              {
                value: 17.3,
                date: "28 Mayıs 06:51",
              },
              {
                value: 17.4,
                date: "28 Mayıs 06:52",
              },
              {
                value: 17.4,
                date: "28 Mayıs 06:53",
              },
              {
                value: 17.4,
                date: "28 Mayıs 06:54",
              },
              {
                value: 17.5,
                date: "28 Mayıs 06:55",
              },
              {
                value: 17.5,
                date: "28 Mayıs 06:56",
              },
              {
                value: 17.6,
                date: "28 Mayıs 06:57",
              },
              {
                value: 17.6,
                date: "28 Mayıs 06:58",
              },
              {
                value: 17.6,
                date: "28 Mayıs 06:59",
              },
              {
                value: 17.7,
                date: "28 Mayıs 07:00",
              },
              {
                value: 17.7,
                date: "28 Mayıs 07:01",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:02",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:03",
              },
              {
                value: 17.9,
                date: "28 Mayıs 07:04",
              },
              {
                value: 17.9,
                date: "28 Mayıs 07:05",
              },
              {
                value: 17.9,
                date: "28 Mayıs 07:06",
              },
              {
                value: 17.9,
                date: "28 Mayıs 07:07",
              },
              {
                value: 18,
                date: "28 Mayıs 07:08",
              },
              {
                value: 18.1,
                date: "28 Mayıs 07:09",
              },
              {
                value: 18.1,
                date: "28 Mayıs 07:10",
              },
              {
                value: 18.2,
                date: "28 Mayıs 07:11",
              },
              {
                value: 18.2,
                date: "28 Mayıs 07:12",
              },
              {
                value: 18.3,
                date: "28 Mayıs 07:13",
              },
              {
                value: 18.4,
                date: "28 Mayıs 07:14",
              },
              {
                value: 18.4,
                date: "28 Mayıs 07:15",
              },
              {
                value: 18.4,
                date: "28 Mayıs 07:16",
              },
              {
                value: 18.5,
                date: "28 Mayıs 07:17",
              },
              {
                value: 18.6,
                date: "28 Mayıs 07:18",
              },
              {
                value: 18.6,
                date: "28 Mayıs 07:19",
              },
              {
                value: 18.7,
                date: "28 Mayıs 07:20",
              },
              {
                value: 18.8,
                date: "28 Mayıs 07:21",
              },
              {
                value: 18.8,
                date: "28 Mayıs 07:22",
              },
              {
                value: 18.8,
                date: "28 Mayıs 07:23",
              },
              {
                value: 18.9,
                date: "28 Mayıs 07:24",
              },
              {
                value: 18.9,
                date: "28 Mayıs 07:25",
              },
              {
                value: 19.1,
                date: "28 Mayıs 07:26",
              },
              {
                value: 19.1,
                date: "28 Mayıs 07:27",
              },
              {
                value: 19.2,
                date: "28 Mayıs 07:28",
              },
              {
                value: 19.3,
                date: "28 Mayıs 07:29",
              },
              {
                value: 19.4,
                date: "28 Mayıs 07:30",
              },
              {
                value: 19.4,
                date: "28 Mayıs 07:31",
              },
              {
                value: 19.5,
                date: "28 Mayıs 07:32",
              },
              {
                value: 19.6,
                date: "28 Mayıs 07:33",
              },
              {
                value: 19.7,
                date: "28 Mayıs 07:34",
              },
              {
                value: 19.8,
                date: "28 Mayıs 07:35",
              },
              {
                value: 19.9,
                date: "28 Mayıs 07:36",
              },
              {
                value: 20.1,
                date: "28 Mayıs 07:37",
              },
              {
                value: 20.1,
                date: "28 Mayıs 07:38",
              },
              {
                value: 20.2,
                date: "28 Mayıs 07:39",
              },
              {
                value: 20.3,
                date: "28 Mayıs 07:40",
              },
              {
                value: 20.5,
                date: "28 Mayıs 07:41",
              },
              {
                value: 20.6,
                date: "28 Mayıs 07:42",
              },
              {
                value: 20.8,
                date: "28 Mayıs 07:43",
              },
              {
                value: 20.9,
                date: "28 Mayıs 07:44",
              },
              {
                value: 21.1,
                date: "28 Mayıs 07:45",
              },
              {
                value: 21.2,
                date: "28 Mayıs 07:46",
              },
              {
                value: 21.4,
                date: "28 Mayıs 07:47",
              },
              {
                value: 21.7,
                date: "28 Mayıs 07:48",
              },
              {
                value: 21.9,
                date: "28 Mayıs 07:49",
              },
              {
                value: 22.1,
                date: "28 Mayıs 07:50",
              },
              {
                value: 22.2,
                date: "28 Mayıs 07:51",
              },
              {
                value: 22.4,
                date: "28 Mayıs 07:52",
              },
              {
                value: 22.7,
                date: "28 Mayıs 07:53",
              },
              {
                value: 22.8,
                date: "28 Mayıs 07:54",
              },
              {
                value: 23,
                date: "28 Mayıs 07:55",
              },
              {
                value: 23.2,
                date: "28 Mayıs 07:56",
              },
              {
                value: 23.3,
                date: "28 Mayıs 07:57",
              },
              {
                value: 23.4,
                date: "28 Mayıs 07:58",
              },
              {
                value: 23.6,
                date: "28 Mayıs 07:59",
              },
              {
                value: 23.8,
                date: "28 Mayıs 08:00",
              },
              {
                value: 23.9,
                date: "28 Mayıs 08:01",
              },
              {
                value: 24.1,
                date: "28 Mayıs 08:02",
              },
              {
                value: 24.4,
                date: "28 Mayıs 08:04",
              },
              {
                value: 24.2,
                date: "28 Mayıs 08:05",
              },
              {
                value: 23.3,
                date: "28 Mayıs 08:07",
              },
              {
                value: 23.2,
                date: "28 Mayıs 08:08",
              },
              {
                value: 22.9,
                date: "28 Mayıs 08:09",
              },
              {
                value: 22.7,
                date: "28 Mayıs 08:10",
              },
              {
                value: 22.8,
                date: "28 Mayıs 08:11",
              },
              {
                value: 22.6,
                date: "28 Mayıs 08:13",
              },
              {
                value: 22.7,
                date: "28 Mayıs 08:14",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:16",
              },
              {
                value: 22.1,
                date: "28 Mayıs 08:17",
              },
              {
                value: 21.6,
                date: "28 Mayıs 08:19",
              },
              {
                value: 21,
                date: "28 Mayıs 08:20",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:22",
              },
              {
                value: 22.1,
                date: "28 Mayıs 08:23",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:24",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:25",
              },
              {
                value: 22.6,
                date: "28 Mayıs 08:26",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:27",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:28",
              },
              {
                value: 22.4,
                date: "28 Mayıs 08:29",
              },
              {
                value: 22.5,
                date: "28 Mayıs 08:30",
              },
              {
                value: 22.4,
                date: "28 Mayıs 08:31",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:32",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:34",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:35",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:36",
              },
              {
                value: 21.8,
                date: "28 Mayıs 08:37",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:38",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:40",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:41",
              },
              {
                value: 21.4,
                date: "28 Mayıs 08:43",
              },
              {
                value: 21.2,
                date: "28 Mayıs 08:44",
              },
              {
                value: 21.5,
                date: "28 Mayıs 08:46",
              },
              {
                value: 21.2,
                date: "28 Mayıs 08:47",
              },
              {
                value: 20.5,
                date: "28 Mayıs 08:49",
              },
              {
                value: 19.8,
                date: "28 Mayıs 08:50",
              },
              {
                value: 20.4,
                date: "28 Mayıs 08:52",
              },
              {
                value: 20.9,
                date: "28 Mayıs 08:53",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:55",
              },
              {
                value: 21.4,
                date: "28 Mayıs 08:56",
              },
              {
                value: 21.4,
                date: "28 Mayıs 08:57",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:58",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:59",
              },
              {
                value: 23.1,
                date: "28 Mayıs 09:00",
              },
              {
                value: 22.8,
                date: "28 Mayıs 09:01",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:02",
              },
              {
                value: 23.3,
                date: "28 Mayıs 09:03",
              },
              {
                value: 22.9,
                date: "28 Mayıs 09:04",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:05",
              },
              {
                value: 24.1,
                date: "28 Mayıs 09:07",
              },
              {
                value: 24.2,
                date: "28 Mayıs 09:08",
              },
              {
                value: 22.6,
                date: "28 Mayıs 09:10",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:11",
              },
              {
                value: 23.8,
                date: "28 Mayıs 09:13",
              },
              {
                value: 24.4,
                date: "28 Mayıs 09:14",
              },
              {
                value: 25.1,
                date: "28 Mayıs 09:16",
              },
              {
                value: 24.9,
                date: "28 Mayıs 09:17",
              },
              {
                value: 25.1,
                date: "28 Mayıs 09:19",
              },
              {
                value: 24.8,
                date: "28 Mayıs 09:20",
              },
              {
                value: 23.8,
                date: "28 Mayıs 09:22",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:23",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:25",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:26",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:28",
              },
              {
                value: 23.6,
                date: "28 Mayıs 09:29",
              },
              {
                value: 23.6,
                date: "28 Mayıs 09:30",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:31",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:32",
              },
              {
                value: 24,
                date: "28 Mayıs 09:33",
              },
              {
                value: 23.8,
                date: "28 Mayıs 09:34",
              },
              {
                value: 24.6,
                date: "28 Mayıs 09:35",
              },
              {
                value: 25.1,
                date: "28 Mayıs 09:36",
              },
              {
                value: 25.1,
                date: "28 Mayıs 09:37",
              },
              {
                value: 25.6,
                date: "28 Mayıs 09:38",
              },
              {
                value: 25.8,
                date: "28 Mayıs 09:39",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:40",
              },
              {
                value: 23,
                date: "28 Mayıs 09:41",
              },
              {
                value: 22.4,
                date: "28 Mayıs 09:43",
              },
              {
                value: 22.9,
                date: "28 Mayıs 09:46",
              },
              {
                value: 22.7,
                date: "28 Mayıs 09:47",
              },
              {
                value: 22.6,
                date: "28 Mayıs 09:48",
              },
              {
                value: 21.8,
                date: "28 Mayıs 09:49",
              },
              {
                value: 21.7,
                date: "28 Mayıs 09:50",
              },
              {
                value: 21.3,
                date: "28 Mayıs 09:52",
              },
              {
                value: 21.6,
                date: "28 Mayıs 09:53",
              },
              {
                value: 21.9,
                date: "28 Mayıs 09:54",
              },
              {
                value: 21.9,
                date: "28 Mayıs 09:55",
              },
              {
                value: 22,
                date: "28 Mayıs 09:56",
              },
              {
                value: 21.9,
                date: "28 Mayıs 09:57",
              },
              {
                value: 21.6,
                date: "28 Mayıs 09:58",
              },
              {
                value: 21.6,
                date: "28 Mayıs 09:59",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:00",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:01",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:02",
              },
              {
                value: 21.3,
                date: "28 Mayıs 10:04",
              },
              {
                value: 21.6,
                date: "28 Mayıs 10:05",
              },
              {
                value: 20.8,
                date: "28 Mayıs 10:07",
              },
              {
                value: 20.6,
                date: "28 Mayıs 10:08",
              },
              {
                value: 21.6,
                date: "28 Mayıs 10:10",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:11",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:13",
              },
              {
                value: 21.5,
                date: "28 Mayıs 10:14",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:15",
              },
              {
                value: 22,
                date: "28 Mayıs 10:16",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:17",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:18",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:19",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:20",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:21",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:22",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:23",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:24",
              },
              {
                value: 21.4,
                date: "28 Mayıs 10:25",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:26",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:27",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:28",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:29",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:30",
              },
              {
                value: 21.4,
                date: "28 Mayıs 10:31",
              },
              {
                value: 21.6,
                date: "28 Mayıs 10:32",
              },
              {
                value: 21.5,
                date: "28 Mayıs 10:34",
              },
              {
                value: 21.6,
                date: "28 Mayıs 10:35",
              },
              {
                value: 20.6,
                date: "28 Mayıs 10:37",
              },
              {
                value: 20.8,
                date: "28 Mayıs 10:38",
              },
              {
                value: 20.9,
                date: "28 Mayıs 10:40",
              },
              {
                value: 21.3,
                date: "28 Mayıs 10:41",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:43",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:44",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:45",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:46",
              },
              {
                value: 22.3,
                date: "28 Mayıs 10:47",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:48",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:49",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:50",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:51",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:52",
              },
              {
                value: 22,
                date: "28 Mayıs 10:53",
              },
              {
                value: 22,
                date: "28 Mayıs 10:54",
              },
              {
                value: 22,
                date: "28 Mayıs 10:55",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:56",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:57",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:58",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:59",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:00",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:01",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:02",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:03",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:04",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:05",
              },
              {
                value: 21.7,
                date: "28 Mayıs 11:06",
              },
              {
                value: 21.5,
                date: "28 Mayıs 11:07",
              },
              {
                value: 21.4,
                date: "28 Mayıs 11:08",
              },
              {
                value: 21.4,
                date: "28 Mayıs 11:09",
              },
              {
                value: 21.4,
                date: "28 Mayıs 11:10",
              },
              {
                value: 21.4,
                date: "28 Mayıs 11:11",
              },
              {
                value: 21.5,
                date: "28 Mayıs 11:12",
              },
              {
                value: 21.6,
                date: "28 Mayıs 11:13",
              },
              {
                value: 21.7,
                date: "28 Mayıs 11:14",
              },
              {
                value: 21.8,
                date: "28 Mayıs 11:15",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:16",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:17",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:18",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:19",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:20",
              },
              {
                value: 22.3,
                date: "28 Mayıs 11:21",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:22",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:23",
              },
              {
                value: 22.4,
                date: "28 Mayıs 11:24",
              },
              {
                value: 22.5,
                date: "28 Mayıs 11:25",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:26",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:27",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:28",
              },
              {
                value: 22.9,
                date: "28 Mayıs 11:29",
              },
              {
                value: 22.9,
                date: "28 Mayıs 11:30",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:31",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:32",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:33",
              },
              {
                value: 22.4,
                date: "28 Mayıs 11:34",
              },
              {
                value: 22.4,
                date: "28 Mayıs 11:35",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:36",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:37",
              },
              {
                value: 22.9,
                date: "28 Mayıs 11:38",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:39",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:40",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:41",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:42",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:43",
              },
              {
                value: 22.5,
                date: "28 Mayıs 11:44",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:45",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:46",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:47",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:48",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:49",
              },
              {
                value: 22.4,
                date: "28 Mayıs 11:50",
              },
              {
                value: 22.3,
                date: "28 Mayıs 11:51",
              },
              {
                value: 22.4,
                date: "28 Mayıs 11:52",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:53",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:54",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:55",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:56",
              },
              {
                value: 22.9,
                date: "28 Mayıs 11:57",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:58",
              },
              {
                value: 22.5,
                date: "28 Mayıs 11:59",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:00",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:01",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:02",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:03",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:04",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:05",
              },
              {
                value: 23,
                date: "28 Mayıs 12:06",
              },
              {
                value: 23.1,
                date: "28 Mayıs 12:07",
              },
              {
                value: 23.4,
                date: "28 Mayıs 12:08",
              },
              {
                value: 23.4,
                date: "28 Mayıs 12:09",
              },
              {
                value: 23.7,
                date: "28 Mayıs 12:10",
              },
              {
                value: 23.9,
                date: "28 Mayıs 12:11",
              },
              {
                value: 23.9,
                date: "28 Mayıs 12:12",
              },
              {
                value: 23.4,
                date: "28 Mayıs 12:13",
              },
              {
                value: 23.6,
                date: "28 Mayıs 12:14",
              },
              {
                value: 23.3,
                date: "28 Mayıs 12:15",
              },
              {
                value: 23.2,
                date: "28 Mayıs 12:16",
              },
              {
                value: 23.1,
                date: "28 Mayıs 12:17",
              },
              {
                value: 23.2,
                date: "28 Mayıs 12:18",
              },
              {
                value: 23.1,
                date: "28 Mayıs 12:19",
              },
              {
                value: 23,
                date: "28 Mayıs 12:20",
              },
              {
                value: 22.8,
                date: "28 Mayıs 12:21",
              },
              {
                value: 22.8,
                date: "28 Mayıs 12:22",
              },
              {
                value: 22.7,
                date: "28 Mayıs 12:23",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:24",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:25",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:26",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:27",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:28",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:29",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:30",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:31",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:32",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:33",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:34",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:35",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:36",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:37",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:38",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:39",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:40",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:41",
              },
              {
                value: 22.7,
                date: "28 Mayıs 12:42",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:43",
              },
              {
                value: 22.8,
                date: "28 Mayıs 12:44",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:45",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:46",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:47",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:48",
              },
              {
                value: 22.2,
                date: "28 Mayıs 12:49",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:50",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:51",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:52",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:53",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:54",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:55",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:56",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:57",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:58",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:59",
              },
              {
                value: 22.5,
                date: "28 Mayıs 13:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:01",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:02",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:03",
              },
              {
                value: 22.8,
                date: "28 Mayıs 13:04",
              },
              {
                value: 23.1,
                date: "28 Mayıs 13:05",
              },
              {
                value: 23.1,
                date: "28 Mayıs 13:06",
              },
              {
                value: 23.2,
                date: "28 Mayıs 13:07",
              },
              {
                value: 23.5,
                date: "28 Mayıs 13:08",
              },
              {
                value: 23.7,
                date: "28 Mayıs 13:09",
              },
              {
                value: 23.7,
                date: "28 Mayıs 13:10",
              },
              {
                value: 23.7,
                date: "28 Mayıs 13:11",
              },
              {
                value: 23.5,
                date: "28 Mayıs 13:12",
              },
              {
                value: 23.4,
                date: "28 Mayıs 13:13",
              },
              {
                value: 23.2,
                date: "28 Mayıs 13:14",
              },
              {
                value: 23.2,
                date: "28 Mayıs 13:15",
              },
              {
                value: 23.1,
                date: "28 Mayıs 13:16",
              },
              {
                value: 22.9,
                date: "28 Mayıs 13:17",
              },
              {
                value: 22.5,
                date: "28 Mayıs 13:18",
              },
              {
                value: 22.3,
                date: "28 Mayıs 13:19",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:20",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:21",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:22",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:23",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:24",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:25",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:26",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:27",
              },
              {
                value: 22.3,
                date: "28 Mayıs 13:28",
              },
              {
                value: 22.1,
                date: "28 Mayıs 13:29",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:30",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:31",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:32",
              },
              {
                value: 22,
                date: "28 Mayıs 13:33",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:34",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:35",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:36",
              },
              {
                value: 22,
                date: "28 Mayıs 13:37",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:38",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:39",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:40",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:41",
              },
              {
                value: 22,
                date: "28 Mayıs 13:42",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:43",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:44",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:45",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:46",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:47",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:48",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:49",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:50",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:51",
              },
              {
                value: 22.1,
                date: "28 Mayıs 13:52",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:53",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:54",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:55",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:56",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:57",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:58",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:59",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:01",
              },
              {
                value: 22.3,
                date: "28 Mayıs 14:02",
              },
              {
                value: 22.4,
                date: "28 Mayıs 14:03",
              },
              {
                value: 22.4,
                date: "28 Mayıs 14:04",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:05",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:06",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:07",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:08",
              },
              {
                value: 22.7,
                date: "28 Mayıs 14:09",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:10",
              },
              {
                value: 22.9,
                date: "28 Mayıs 14:11",
              },
              {
                value: 23.1,
                date: "28 Mayıs 14:12",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:13",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:14",
              },
              {
                value: 22.4,
                date: "28 Mayıs 14:15",
              },
              {
                value: 22.2,
                date: "28 Mayıs 14:16",
              },
              {
                value: 21.8,
                date: "28 Mayıs 14:17",
              },
              {
                value: 21.6,
                date: "28 Mayıs 14:18",
              },
              {
                value: 21.5,
                date: "28 Mayıs 14:19",
              },
              {
                value: 21.4,
                date: "28 Mayıs 14:20",
              },
              {
                value: 21.4,
                date: "28 Mayıs 14:21",
              },
              {
                value: 21.3,
                date: "28 Mayıs 14:22",
              },
              {
                value: 21.2,
                date: "28 Mayıs 14:23",
              },
              {
                value: 21.2,
                date: "28 Mayıs 14:24",
              },
              {
                value: 21.3,
                date: "28 Mayıs 14:25",
              },
              {
                value: 21.3,
                date: "28 Mayıs 14:26",
              },
              {
                value: 21.4,
                date: "28 Mayıs 14:27",
              },
              {
                value: 21.6,
                date: "28 Mayıs 14:28",
              },
              {
                value: 21.8,
                date: "28 Mayıs 14:29",
              },
              {
                value: 21.8,
                date: "28 Mayıs 14:30",
              },
              {
                value: 21.9,
                date: "28 Mayıs 14:31",
              },
              {
                value: 22.3,
                date: "28 Mayıs 14:32",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:33",
              },
              {
                value: 22.9,
                date: "28 Mayıs 14:34",
              },
              {
                value: 23.1,
                date: "28 Mayıs 14:35",
              },
              {
                value: 23.6,
                date: "28 Mayıs 14:36",
              },
              {
                value: 23.9,
                date: "28 Mayıs 14:37",
              },
              {
                value: 23.8,
                date: "28 Mayıs 14:38",
              },
              {
                value: 24.1,
                date: "28 Mayıs 14:39",
              },
              {
                value: 24.1,
                date: "28 Mayıs 14:40",
              },
              {
                value: 24.5,
                date: "28 Mayıs 14:41",
              },
              {
                value: 24.9,
                date: "28 Mayıs 14:42",
              },
              {
                value: 25.2,
                date: "28 Mayıs 14:43",
              },
              {
                value: 25.5,
                date: "28 Mayıs 14:44",
              },
              {
                value: 25.7,
                date: "28 Mayıs 14:45",
              },
              {
                value: 25.8,
                date: "28 Mayıs 14:46",
              },
              {
                value: 26.1,
                date: "28 Mayıs 14:47",
              },
              {
                value: 26.4,
                date: "28 Mayıs 14:48",
              },
              {
                value: 26.8,
                date: "28 Mayıs 14:49",
              },
              {
                value: 26.9,
                date: "28 Mayıs 14:50",
              },
              {
                value: 27.1,
                date: "28 Mayıs 14:51",
              },
              {
                value: 27.4,
                date: "28 Mayıs 14:52",
              },
              {
                value: 27.8,
                date: "28 Mayıs 14:53",
              },
              {
                value: 28.2,
                date: "28 Mayıs 14:54",
              },
              {
                value: 28.5,
                date: "28 Mayıs 14:55",
              },
              {
                value: 28.8,
                date: "28 Mayıs 14:56",
              },
              {
                value: 28.9,
                date: "28 Mayıs 14:57",
              },
              {
                value: 29.2,
                date: "28 Mayıs 14:59",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:00",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:01",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:02",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:03",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:04",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:05",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:06",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:07",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:08",
              },
              {
                value: 29.4,
                date: "28 Mayıs 15:09",
              },
              {
                value: 29.5,
                date: "28 Mayıs 15:10",
              },
              {
                value: 29.5,
                date: "28 Mayıs 15:11",
              },
              {
                value: 29.5,
                date: "28 Mayıs 15:12",
              },
              {
                value: 29.5,
                date: "28 Mayıs 15:13",
              },
              {
                value: 29.5,
                date: "28 Mayıs 15:14",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:15",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:16",
              },
              {
                value: 29.1,
                date: "28 Mayıs 15:17",
              },
              {
                value: 28.1,
                date: "28 Mayıs 15:18",
              },
              {
                value: 26.2,
                date: "28 Mayıs 15:20",
              },
              {
                value: 25.3,
                date: "28 Mayıs 15:21",
              },
              {
                value: 25.1,
                date: "28 Mayıs 15:22",
              },
              {
                value: 24.9,
                date: "28 Mayıs 15:23",
              },
              {
                value: 24.6,
                date: "28 Mayıs 15:24",
              },
              {
                value: 24.2,
                date: "28 Mayıs 15:25",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:26",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:27",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:28",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:29",
              },
              {
                value: 24,
                date: "28 Mayıs 15:30",
              },
              {
                value: 24,
                date: "28 Mayıs 15:31",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:32",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:33",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:34",
              },
              {
                value: 23.8,
                date: "28 Mayıs 15:35",
              },
              {
                value: 23.8,
                date: "28 Mayıs 15:36",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:37",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:38",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:39",
              },
              {
                value: 24,
                date: "28 Mayıs 15:40",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:41",
              },
              {
                value: 24,
                date: "28 Mayıs 15:42",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:43",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:44",
              },
              {
                value: 23.6,
                date: "28 Mayıs 15:45",
              },
              {
                value: 23.4,
                date: "28 Mayıs 15:46",
              },
              {
                value: 23.4,
                date: "28 Mayıs 15:47",
              },
              {
                value: 23.5,
                date: "28 Mayıs 15:48",
              },
              {
                value: 23.3,
                date: "28 Mayıs 15:49",
              },
              {
                value: 23.5,
                date: "28 Mayıs 15:50",
              },
              {
                value: 23.6,
                date: "28 Mayıs 15:51",
              },
              {
                value: 23.5,
                date: "28 Mayıs 15:52",
              },
              {
                value: 23.4,
                date: "28 Mayıs 15:53",
              },
              {
                value: 23.5,
                date: "28 Mayıs 15:54",
              },
              {
                value: 23.5,
                date: "28 Mayıs 15:55",
              },
              {
                value: 23.6,
                date: "28 Mayıs 15:56",
              },
              {
                value: 23.3,
                date: "28 Mayıs 15:57",
              },
              {
                value: 23.3,
                date: "28 Mayıs 15:58",
              },
              {
                value: 23,
                date: "28 Mayıs 15:59",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:00",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:01",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:02",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:03",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:04",
              },
              {
                value: 23.3,
                date: "28 Mayıs 16:05",
              },
              {
                value: 23.5,
                date: "28 Mayıs 16:06",
              },
              {
                value: 23.6,
                date: "28 Mayıs 16:07",
              },
              {
                value: 23.7,
                date: "28 Mayıs 16:08",
              },
              {
                value: 23.6,
                date: "28 Mayıs 16:09",
              },
              {
                value: 23.4,
                date: "28 Mayıs 16:10",
              },
              {
                value: 23.2,
                date: "28 Mayıs 16:11",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:12",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:13",
              },
              {
                value: 23,
                date: "28 Mayıs 16:14",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:15",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:16",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:17",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:18",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:19",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:20",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:21",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:22",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:23",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:24",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:25",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:26",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:27",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:28",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:29",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:30",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:31",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:32",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:33",
              },
              {
                value: 23,
                date: "28 Mayıs 16:34",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:35",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:36",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:37",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:38",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:39",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:40",
              },
              {
                value: 23.2,
                date: "28 Mayıs 16:41",
              },
              {
                value: 23.2,
                date: "28 Mayıs 16:42",
              },
              {
                value: 23.4,
                date: "28 Mayıs 16:43",
              },
              {
                value: 23.3,
                date: "28 Mayıs 16:44",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:45",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:46",
              },
              {
                value: 23,
                date: "28 Mayıs 16:47",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:48",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:49",
              },
              {
                value: 23,
                date: "28 Mayıs 16:50",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:51",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:52",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:53",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:54",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:55",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:56",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:57",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:58",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:59",
              },
              {
                value: 22.6,
                date: "28 Mayıs 17:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 17:01",
              },
              {
                value: 22.6,
                date: "28 Mayıs 17:02",
              },
              {
                value: 22.7,
                date: "28 Mayıs 17:03",
              },
              {
                value: 22.8,
                date: "28 Mayıs 17:04",
              },
              {
                value: 22.8,
                date: "28 Mayıs 17:05",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:06",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:07",
              },
              {
                value: 23.4,
                date: "28 Mayıs 17:10",
              },
              {
                value: 23.4,
                date: "28 Mayıs 17:10",
              },
              {
                value: 23.2,
                date: "28 Mayıs 17:10",
              },
              {
                value: 23.3,
                date: "28 Mayıs 17:11",
              },
              {
                value: 23.2,
                date: "28 Mayıs 17:12",
              },
              {
                value: 23.3,
                date: "28 Mayıs 17:13",
              },
              {
                value: 23.5,
                date: "28 Mayıs 17:14",
              },
              {
                value: 23.8,
                date: "28 Mayıs 17:15",
              },
              {
                value: 23.9,
                date: "28 Mayıs 17:16",
              },
              {
                value: 24.3,
                date: "28 Mayıs 17:17",
              },
              {
                value: 24.9,
                date: "28 Mayıs 17:18",
              },
              {
                value: 25.1,
                date: "28 Mayıs 17:19",
              },
              {
                value: 25.3,
                date: "28 Mayıs 17:20",
              },
              {
                value: 25.3,
                date: "28 Mayıs 17:21",
              },
              {
                value: 25.2,
                date: "28 Mayıs 17:22",
              },
              {
                value: 25.6,
                date: "28 Mayıs 17:23",
              },
              {
                value: 25.4,
                date: "28 Mayıs 17:24",
              },
              {
                value: 25.2,
                date: "28 Mayıs 17:25",
              },
              {
                value: 25.4,
                date: "28 Mayıs 17:26",
              },
              {
                value: 25.1,
                date: "28 Mayıs 17:27",
              },
              {
                value: 24.8,
                date: "28 Mayıs 17:28",
              },
              {
                value: 24.3,
                date: "28 Mayıs 17:29",
              },
              {
                value: 24.3,
                date: "28 Mayıs 17:30",
              },
              {
                value: 24.2,
                date: "28 Mayıs 17:31",
              },
              {
                value: 23.8,
                date: "28 Mayıs 17:32",
              },
              {
                value: 23.7,
                date: "28 Mayıs 17:33",
              },
              {
                value: 23.4,
                date: "28 Mayıs 17:34",
              },
              {
                value: 23.2,
                date: "28 Mayıs 17:35",
              },
              {
                value: 23.2,
                date: "28 Mayıs 17:36",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:37",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:38",
              },
              {
                value: 23.1,
                date: "28 Mayıs 17:39",
              },
              {
                value: 23,
                date: "28 Mayıs 17:40",
              },
              {
                value: 23.1,
                date: "28 Mayıs 17:41",
              },
              {
                value: 23.2,
                date: "28 Mayıs 17:42",
              },
              {
                value: 23.3,
                date: "28 Mayıs 17:43",
              },
              {
                value: 23.5,
                date: "28 Mayıs 17:44",
              },
              {
                value: 23.9,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 10.2,
                avg: 13.18,
                max: 21.6,
                date: "28 Nisan 23",
              },
              {
                min: 8.1,
                avg: 16.67,
                max: 327.7,
                date: "29 Nisan 23",
              },
              {
                min: 12.9,
                avg: 18,
                max: 27.1,
                date: "30 Nisan 23",
              },
              {
                min: 11.9,
                avg: 18.87,
                max: 28.9,
                date: "01 Mayıs 23",
              },
              {
                min: 14.4,
                avg: 19,
                max: 26.4,
                date: "02 Mayıs 23",
              },
              {
                min: 13.8,
                avg: 18.28,
                max: 26.6,
                date: "03 Mayıs 23",
              },
              {
                min: 14.6,
                avg: 20.15,
                max: 28.2,
                date: "04 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 16.55,
                max: 23.2,
                date: "05 Mayıs 23",
              },
              {
                min: 13.1,
                avg: 17.99,
                max: 25.1,
                date: "06 Mayıs 23",
              },
              {
                min: 12.7,
                avg: 19.16,
                max: 27.3,
                date: "07 Mayıs 23",
              },
              {
                min: 13.2,
                avg: 19.36,
                max: 27.6,
                date: "08 Mayıs 23",
              },
              {
                min: 13,
                avg: 17.9,
                max: 25.8,
                date: "09 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 17.06,
                max: 25.6,
                date: "10 Mayıs 23",
              },
              {
                min: 13.2,
                avg: 17.02,
                max: 24.4,
                date: "11 Mayıs 23",
              },
              {
                min: 11.9,
                avg: 15.89,
                max: 24.5,
                date: "12 Mayıs 23",
              },
              {
                min: 8.3,
                avg: 17.13,
                max: 26.2,
                date: "13 Mayıs 23",
              },
              {
                min: 7.8,
                avg: 16.58,
                max: 27.1,
                date: "14 Mayıs 23",
              },
              {
                min: 12.6,
                avg: 21.38,
                max: 33.4,
                date: "15 Mayıs 23",
              },
              {
                min: 15,
                avg: 20.94,
                max: 30.4,
                date: "16 Mayıs 23",
              },
              {
                min: 16.9,
                avg: 22.38,
                max: 34.9,
                date: "17 Mayıs 23",
              },
              {
                min: 15.6,
                avg: 20.01,
                max: 26.1,
                date: "18 Mayıs 23",
              },
              {
                min: 13.2,
                avg: 19.79,
                max: 29.8,
                date: "19 Mayıs 23",
              },
              {
                min: 12.2,
                avg: 19.77,
                max: 28.6,
                date: "20 Mayıs 23",
              },
              {
                min: 13.1,
                avg: 19.67,
                max: 27.6,
                date: "21 Mayıs 23",
              },
              {
                min: 13.7,
                avg: 19.66,
                max: 28.1,
                date: "22 Mayıs 23",
              },
              {
                min: 13.4,
                avg: 20.45,
                max: 29.2,
                date: "23 Mayıs 23",
              },
              {
                min: 14,
                avg: 20.57,
                max: 31.3,
                date: "24 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 21.1,
                max: 31.1,
                date: "25 Mayıs 23",
              },
              {
                min: 13.9,
                avg: 21.55,
                max: 31.1,
                date: "26 Mayıs 23",
              },
              {
                min: 15.2,
                avg: 21.64,
                max: 30.4,
                date: "27 Mayıs 23",
              },
              {
                min: 16.1,
                avg: 20.97,
                max: 29.5,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 7.7,
                avg: 12.12,
                max: 26.9,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: 7.9,
                avg: 14.79,
                max: 29.6,
                date: "6 - 12 Şubat",
              },
              {
                min: 9.8,
                avg: 17.79,
                max: 29.4,
                date: "13 - 19 Şubat",
              },
              {
                min: 9.9,
                avg: 17.24,
                max: 655.3,
                date: "20 - 26 Şubat",
              },
              {
                min: 9.5,
                avg: 16.4,
                max: 27.9,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 7.4,
                avg: 15.91,
                max: 27.9,
                date: "6 - 12 Mart",
              },
              {
                min: 8.7,
                avg: 15.26,
                max: 655.3,
                date: "13 - 19 Mart",
              },
              {
                min: 9.5,
                avg: 17.1,
                max: 641.6,
                date: "20 - 26 Mart",
              },
              {
                min: 6.1,
                avg: 17.32,
                max: 655.2,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 7.1,
                avg: 16.84,
                max: 655.3,
                date: "3 - 9 Nisan",
              },
              {
                min: 6.7,
                avg: 18.89,
                max: 45.4,
                date: "10 - 16 Nisan",
              },
              {
                min: 11.5,
                avg: 19.06,
                max: 28.6,
                date: "17 - 23 Nisan",
              },
              {
                min: 8.1,
                avg: 17.46,
                max: 327.7,
                date: "24 - 30 Nisan",
              },
              {
                min: 12.7,
                avg: 18.46,
                max: 28.2,
                date: "1 - 7 Mayıs",
              },
              {
                min: 7.8,
                avg: 18.39,
                max: 34.9,
                date: "8 - 14 Mayıs",
              },
              {
                min: 12.2,
                avg: 20.13,
                max: 31.3,
                date: "15 - 21 Mayıs",
              },
              {
                min: 12.9,
                avg: 21.04,
                max: 31.1,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "nem sens1",
            sensor_type: "Hava Nemi",
            unit: "%",
            minutely: [
              {
                value: 95.4,
                date: "28 Mayıs 05:50",
              },
              {
                value: 95.2,
                date: "28 Mayıs 05:55",
              },
              {
                value: 94.9,
                date: "28 Mayıs 06:00",
              },
              {
                value: 95,
                date: "28 Mayıs 06:05",
              },
              {
                value: 94.8,
                date: "28 Mayıs 06:10",
              },
              {
                value: 94.3,
                date: "28 Mayıs 06:15",
              },
              {
                value: 94.4,
                date: "28 Mayıs 06:20",
              },
              {
                value: 93.9,
                date: "28 Mayıs 06:25",
              },
              {
                value: 94.1,
                date: "28 Mayıs 06:30",
              },
              {
                value: 93.7,
                date: "28 Mayıs 06:35",
              },
              {
                value: 93.5,
                date: "28 Mayıs 06:40",
              },
              {
                value: 92,
                date: "28 Mayıs 06:50",
              },
              {
                value: 92.1,
                date: "28 Mayıs 06:55",
              },
              {
                value: 92.1,
                date: "28 Mayıs 07:00",
              },
              {
                value: 92.4,
                date: "28 Mayıs 07:05",
              },
              {
                value: 92.2,
                date: "28 Mayıs 07:10",
              },
              {
                value: 92.3,
                date: "28 Mayıs 07:15",
              },
              {
                value: 91.7,
                date: "28 Mayıs 07:20",
              },
              {
                value: 91.6,
                date: "28 Mayıs 07:25",
              },
              {
                value: 91.4,
                date: "28 Mayıs 07:30",
              },
              {
                value: 90.2,
                date: "28 Mayıs 07:35",
              },
              {
                value: 89.5,
                date: "28 Mayıs 07:40",
              },
              {
                value: 89.3,
                date: "28 Mayıs 07:45",
              },
              {
                value: 88.4,
                date: "28 Mayıs 07:50",
              },
              {
                value: 89.5,
                date: "28 Mayıs 07:55",
              },
              {
                value: 88.2,
                date: "28 Mayıs 08:00",
              },
              {
                value: 86.4,
                date: "28 Mayıs 08:05",
              },
              {
                value: 77.1,
                date: "28 Mayıs 08:10",
              },
              {
                value: 74.1,
                date: "28 Mayıs 08:15",
              },
              {
                value: 73.8,
                date: "28 Mayıs 08:20",
              },
              {
                value: 72.6,
                date: "28 Mayıs 08:25",
              },
              {
                value: 74,
                date: "28 Mayıs 08:30",
              },
              {
                value: 72.6,
                date: "28 Mayıs 08:35",
              },
              {
                value: 72.5,
                date: "28 Mayıs 08:40",
              },
              {
                value: 75.4,
                date: "28 Mayıs 08:45",
              },
              {
                value: 73.4,
                date: "28 Mayıs 08:50",
              },
              {
                value: 74.4,
                date: "28 Mayıs 08:55",
              },
              {
                value: 74.3,
                date: "28 Mayıs 09:00",
              },
              {
                value: 74.7,
                date: "28 Mayıs 09:05",
              },
              {
                value: 68.9,
                date: "28 Mayıs 09:10",
              },
              {
                value: 71.2,
                date: "28 Mayıs 09:15",
              },
              {
                value: 64.2,
                date: "28 Mayıs 09:20",
              },
              {
                value: 65.1,
                date: "28 Mayıs 09:25",
              },
              {
                value: 69.1,
                date: "28 Mayıs 09:30",
              },
              {
                value: 64.9,
                date: "28 Mayıs 09:35",
              },
              {
                value: 65.1,
                date: "28 Mayıs 09:40",
              },
              {
                value: 66,
                date: "28 Mayıs 09:45",
              },
              {
                value: 67.4,
                date: "28 Mayıs 09:50",
              },
              {
                value: 69.1,
                date: "28 Mayıs 09:55",
              },
              {
                value: 71.3,
                date: "28 Mayıs 10:00",
              },
              {
                value: 69.9,
                date: "28 Mayıs 10:05",
              },
              {
                value: 70.7,
                date: "28 Mayıs 10:10",
              },
              {
                value: 68,
                date: "28 Mayıs 10:15",
              },
              {
                value: 68.4,
                date: "28 Mayıs 10:20",
              },
              {
                value: 67.8,
                date: "28 Mayıs 10:25",
              },
              {
                value: 65.7,
                date: "28 Mayıs 10:30",
              },
              {
                value: 65.5,
                date: "28 Mayıs 10:35",
              },
              {
                value: 67.5,
                date: "28 Mayıs 10:40",
              },
              {
                value: 66.7,
                date: "28 Mayıs 10:45",
              },
              {
                value: 67,
                date: "28 Mayıs 10:50",
              },
              {
                value: 65.1,
                date: "28 Mayıs 10:55",
              },
              {
                value: 65.8,
                date: "28 Mayıs 11:00",
              },
              {
                value: 67.3,
                date: "28 Mayıs 11:05",
              },
              {
                value: 66.2,
                date: "28 Mayıs 11:10",
              },
              {
                value: 67.1,
                date: "28 Mayıs 11:15",
              },
              {
                value: 65,
                date: "28 Mayıs 11:20",
              },
              {
                value: 64.5,
                date: "28 Mayıs 11:25",
              },
              {
                value: 64.2,
                date: "28 Mayıs 11:30",
              },
              {
                value: 63.3,
                date: "28 Mayıs 11:35",
              },
              {
                value: 64.9,
                date: "28 Mayıs 11:40",
              },
              {
                value: 63.6,
                date: "28 Mayıs 11:45",
              },
              {
                value: 65,
                date: "28 Mayıs 11:50",
              },
              {
                value: 63.2,
                date: "28 Mayıs 11:55",
              },
              {
                value: 63.3,
                date: "28 Mayıs 12:00",
              },
              {
                value: 61.5,
                date: "28 Mayıs 12:05",
              },
              {
                value: 60.8,
                date: "28 Mayıs 12:10",
              },
              {
                value: 61,
                date: "28 Mayıs 12:15",
              },
              {
                value: 60,
                date: "28 Mayıs 12:20",
              },
              {
                value: 61.2,
                date: "28 Mayıs 12:25",
              },
              {
                value: 63.3,
                date: "28 Mayıs 12:30",
              },
              {
                value: 63.1,
                date: "28 Mayıs 12:35",
              },
              {
                value: 63.9,
                date: "28 Mayıs 12:40",
              },
              {
                value: 62,
                date: "28 Mayıs 12:45",
              },
              {
                value: 64.3,
                date: "28 Mayıs 12:50",
              },
              {
                value: 63.5,
                date: "28 Mayıs 12:55",
              },
              {
                value: 65,
                date: "28 Mayıs 13:00",
              },
              {
                value: 64.6,
                date: "28 Mayıs 13:05",
              },
              {
                value: 64.4,
                date: "28 Mayıs 13:10",
              },
              {
                value: 64.2,
                date: "28 Mayıs 13:15",
              },
              {
                value: 64.7,
                date: "28 Mayıs 13:20",
              },
              {
                value: 64.5,
                date: "28 Mayıs 13:25",
              },
              {
                value: 65.1,
                date: "28 Mayıs 13:30",
              },
              {
                value: 65.9,
                date: "28 Mayıs 13:35",
              },
              {
                value: 68.7,
                date: "28 Mayıs 13:40",
              },
              {
                value: 67.2,
                date: "28 Mayıs 13:45",
              },
              {
                value: 68.1,
                date: "28 Mayıs 13:50",
              },
              {
                value: 66.3,
                date: "28 Mayıs 13:55",
              },
              {
                value: 66.1,
                date: "28 Mayıs 14:00",
              },
              {
                value: 65.7,
                date: "28 Mayıs 14:05",
              },
              {
                value: 65.4,
                date: "28 Mayıs 14:10",
              },
              {
                value: 65,
                date: "28 Mayıs 14:15",
              },
              {
                value: 67,
                date: "28 Mayıs 14:20",
              },
              {
                value: 67.1,
                date: "28 Mayıs 14:25",
              },
              {
                value: 67.9,
                date: "28 Mayıs 14:30",
              },
              {
                value: 65.9,
                date: "28 Mayıs 14:35",
              },
              {
                value: 65.1,
                date: "28 Mayıs 14:40",
              },
              {
                value: 70,
                date: "28 Mayıs 14:45",
              },
              {
                value: 69.9,
                date: "28 Mayıs 14:50",
              },
              {
                value: 71.2,
                date: "28 Mayıs 14:55",
              },
              {
                value: 69.3,
                date: "28 Mayıs 15:00",
              },
              {
                value: 69.6,
                date: "28 Mayıs 15:05",
              },
              {
                value: 71.4,
                date: "28 Mayıs 15:10",
              },
              {
                value: 74,
                date: "28 Mayıs 15:15",
              },
              {
                value: 58.6,
                date: "28 Mayıs 15:20",
              },
              {
                value: 60.4,
                date: "28 Mayıs 15:25",
              },
              {
                value: 63.3,
                date: "28 Mayıs 15:30",
              },
              {
                value: 63.1,
                date: "28 Mayıs 15:35",
              },
              {
                value: 63.8,
                date: "28 Mayıs 15:40",
              },
              {
                value: 62.6,
                date: "28 Mayıs 15:45",
              },
              {
                value: 62.1,
                date: "28 Mayıs 15:50",
              },
              {
                value: 62.6,
                date: "28 Mayıs 15:55",
              },
              {
                value: 65,
                date: "28 Mayıs 16:00",
              },
              {
                value: 64.1,
                date: "28 Mayıs 16:05",
              },
              {
                value: 64.3,
                date: "28 Mayıs 16:10",
              },
              {
                value: 65,
                date: "28 Mayıs 16:15",
              },
              {
                value: 66.3,
                date: "28 Mayıs 16:20",
              },
              {
                value: 67.1,
                date: "28 Mayıs 16:25",
              },
              {
                value: 68.1,
                date: "28 Mayıs 16:30",
              },
              {
                value: 67.1,
                date: "28 Mayıs 16:35",
              },
              {
                value: 66.6,
                date: "28 Mayıs 16:40",
              },
              {
                value: 65.2,
                date: "28 Mayıs 16:45",
              },
              {
                value: 65.6,
                date: "28 Mayıs 16:50",
              },
              {
                value: 65,
                date: "28 Mayıs 16:55",
              },
              {
                value: 65.5,
                date: "28 Mayıs 17:00",
              },
              {
                value: 65.6,
                date: "28 Mayıs 17:05",
              },
              {
                value: 63.7,
                date: "28 Mayıs 17:10",
              },
              {
                value: 64,
                date: "28 Mayıs 17:15",
              },
              {
                value: 60.7,
                date: "28 Mayıs 17:20",
              },
              {
                value: 60.5,
                date: "28 Mayıs 17:25",
              },
              {
                value: 59.1,
                date: "28 Mayıs 17:30",
              },
              {
                value: 61.8,
                date: "28 Mayıs 17:35",
              },
              {
                value: 65.1,
                date: "28 Mayıs 17:40",
              },
              {
                value: 64.7,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 36.9,
                avg: 71.58,
                max: 82.5,
                date: "28 Nisan 23",
              },
              {
                min: 30.4,
                avg: 63.54,
                max: 86.6,
                date: "29 Nisan 23",
              },
              {
                min: 43.2,
                avg: 71.57,
                max: 91.3,
                date: "30 Nisan 23",
              },
              {
                min: 30.9,
                avg: 65.82,
                max: 90.8,
                date: "01 Mayıs 23",
              },
              {
                min: 38.2,
                avg: 64.98,
                max: 85.1,
                date: "02 Mayıs 23",
              },
              {
                min: 42.5,
                avg: 78.05,
                max: 96,
                date: "03 Mayıs 23",
              },
              {
                min: 49.1,
                avg: 81.55,
                max: 97.2,
                date: "04 Mayıs 23",
              },
              {
                min: 61,
                avg: 87.52,
                max: 97.6,
                date: "05 Mayıs 23",
              },
              {
                min: 41,
                avg: 72.32,
                max: 94.3,
                date: "06 Mayıs 23",
              },
              {
                min: 39.6,
                avg: 71.4,
                max: 94.9,
                date: "07 Mayıs 23",
              },
              {
                min: 40.5,
                avg: 69.72,
                max: 92.5,
                date: "08 Mayıs 23",
              },
              {
                min: 43.6,
                avg: 75.29,
                max: 93.3,
                date: "09 Mayıs 23",
              },
              {
                min: 43.6,
                avg: 73.13,
                max: 90.7,
                date: "10 Mayıs 23",
              },
              {
                min: 46.1,
                avg: 72.52,
                max: 87.6,
                date: "11 Mayıs 23",
              },
              {
                min: 50.1,
                avg: 78.57,
                max: 90.1,
                date: "12 Mayıs 23",
              },
              {
                min: 35.7,
                avg: 66.17,
                max: 88.5,
                date: "13 Mayıs 23",
              },
              {
                min: 46.3,
                avg: 69.61,
                max: 89.1,
                date: "14 Mayıs 23",
              },
              {
                min: 37.9,
                avg: 67.54,
                max: 92.9,
                date: "15 Mayıs 23",
              },
              {
                min: 51.7,
                avg: 79.64,
                max: 94.7,
                date: "16 Mayıs 23",
              },
              {
                min: 49.4,
                avg: 77.6,
                max: 96.8,
                date: "17 Mayıs 23",
              },
              {
                min: 49.4,
                avg: 77.32,
                max: 96.3,
                date: "18 Mayıs 23",
              },
              {
                min: 40.4,
                avg: 78.37,
                max: 96.6,
                date: "19 Mayıs 23",
              },
              {
                min: 41.1,
                avg: 72.49,
                max: 96.7,
                date: "20 Mayıs 23",
              },
              {
                min: 47,
                avg: 75.45,
                max: 96,
                date: "21 Mayıs 23",
              },
              {
                min: 40.1,
                avg: 74.87,
                max: 95,
                date: "22 Mayıs 23",
              },
              {
                min: 44.5,
                avg: 76.8,
                max: 95.8,
                date: "23 Mayıs 23",
              },
              {
                min: 44.4,
                avg: 77.19,
                max: 97.2,
                date: "24 Mayıs 23",
              },
              {
                min: 42.4,
                avg: 74.27,
                max: 95.3,
                date: "25 Mayıs 23",
              },
              {
                min: 42.3,
                avg: 73.79,
                max: 96.7,
                date: "26 Mayıs 23",
              },
              {
                min: 46.3,
                avg: 75.88,
                max: 96,
                date: "27 Mayıs 23",
              },
              {
                min: 58.6,
                avg: 75.63,
                max: 95.4,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 69.7,
                avg: 70.61,
                max: 71.6,
                date: "9 - 15 Ocak",
              },
              {
                min: 36.5,
                avg: 56.3,
                max: 87.8,
                date: "16 - 22 Ocak",
              },
              {
                min: 30.2,
                avg: 51.26,
                max: 76.9,
                date: "23 - 29 Ocak",
              },
              {
                min: 20.3,
                avg: 49.84,
                max: 81.7,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: 23,
                avg: 45.69,
                max: 70.7,
                date: "6 - 12 Şubat",
              },
              {
                min: 23.7,
                avg: 57.04,
                max: 85.6,
                date: "13 - 19 Şubat",
              },
              {
                min: 33.1,
                avg: 65.86,
                max: 88.9,
                date: "20 - 26 Şubat",
              },
              {
                min: 45,
                avg: 72.07,
                max: 93,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 29,
                avg: 68.13,
                max: 92,
                date: "6 - 12 Mart",
              },
              {
                min: 32.6,
                avg: 70.54,
                max: 91.6,
                date: "13 - 19 Mart",
              },
              {
                min: 28.9,
                avg: 68.43,
                max: 90,
                date: "20 - 26 Mart",
              },
              {
                min: 26.3,
                avg: 74.54,
                max: 95.7,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 38.5,
                avg: 73.71,
                max: 95,
                date: "3 - 9 Nisan",
              },
              {
                min: 30.7,
                avg: 74.36,
                max: 98.2,
                date: "10 - 16 Nisan",
              },
              {
                min: 35.3,
                avg: 73.03,
                max: 94.6,
                date: "17 - 23 Nisan",
              },
              {
                min: 30.4,
                avg: 69.97,
                max: 96.2,
                date: "24 - 30 Nisan",
              },
              {
                min: 39.6,
                avg: 76.27,
                max: 97.6,
                date: "1 - 7 Mayıs",
              },
              {
                min: 35.7,
                avg: 73.02,
                max: 96.8,
                date: "8 - 14 Mayıs",
              },
              {
                min: 40.1,
                avg: 75.72,
                max: 97.2,
                date: "15 - 21 Mayıs",
              },
              {
                min: 42.3,
                avg: 75.44,
                max: 96.7,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "nem sens2",
            sensor_type: "Hava Nemi",
            unit: "%",
            minutely: [
              {
                value: 95.4,
                date: "28 Mayıs 05:50",
              },
              {
                value: 95.2,
                date: "28 Mayıs 05:55",
              },
              {
                value: 94.9,
                date: "28 Mayıs 06:00",
              },
              {
                value: 95,
                date: "28 Mayıs 06:05",
              },
              {
                value: 94.8,
                date: "28 Mayıs 06:10",
              },
              {
                value: 94.3,
                date: "28 Mayıs 06:15",
              },
              {
                value: 94.4,
                date: "28 Mayıs 06:20",
              },
              {
                value: 93.9,
                date: "28 Mayıs 06:25",
              },
              {
                value: 94.1,
                date: "28 Mayıs 06:30",
              },
              {
                value: 93.7,
                date: "28 Mayıs 06:35",
              },
              {
                value: 93.5,
                date: "28 Mayıs 06:40",
              },
              {
                value: 92,
                date: "28 Mayıs 06:50",
              },
              {
                value: 92.1,
                date: "28 Mayıs 06:55",
              },
              {
                value: 92.1,
                date: "28 Mayıs 07:00",
              },
              {
                value: 92.4,
                date: "28 Mayıs 07:05",
              },
              {
                value: 92.2,
                date: "28 Mayıs 07:10",
              },
              {
                value: 92.3,
                date: "28 Mayıs 07:15",
              },
              {
                value: 91.7,
                date: "28 Mayıs 07:20",
              },
              {
                value: 91.6,
                date: "28 Mayıs 07:25",
              },
              {
                value: 91.4,
                date: "28 Mayıs 07:30",
              },
              {
                value: 90.2,
                date: "28 Mayıs 07:35",
              },
              {
                value: 89.5,
                date: "28 Mayıs 07:40",
              },
              {
                value: 89.3,
                date: "28 Mayıs 07:45",
              },
              {
                value: 88.4,
                date: "28 Mayıs 07:50",
              },
              {
                value: 89.5,
                date: "28 Mayıs 07:55",
              },
              {
                value: 88.2,
                date: "28 Mayıs 08:00",
              },
              {
                value: 86.4,
                date: "28 Mayıs 08:05",
              },
              {
                value: 77.1,
                date: "28 Mayıs 08:10",
              },
              {
                value: 74.1,
                date: "28 Mayıs 08:15",
              },
              {
                value: 73.8,
                date: "28 Mayıs 08:20",
              },
              {
                value: 72.6,
                date: "28 Mayıs 08:25",
              },
              {
                value: 74,
                date: "28 Mayıs 08:30",
              },
              {
                value: 72.6,
                date: "28 Mayıs 08:35",
              },
              {
                value: 72.5,
                date: "28 Mayıs 08:40",
              },
              {
                value: 75.4,
                date: "28 Mayıs 08:45",
              },
              {
                value: 73.4,
                date: "28 Mayıs 08:50",
              },
              {
                value: 74.4,
                date: "28 Mayıs 08:55",
              },
              {
                value: 74.3,
                date: "28 Mayıs 09:00",
              },
              {
                value: 74.7,
                date: "28 Mayıs 09:05",
              },
              {
                value: 68.9,
                date: "28 Mayıs 09:10",
              },
              {
                value: 71.2,
                date: "28 Mayıs 09:15",
              },
              {
                value: 64.2,
                date: "28 Mayıs 09:20",
              },
              {
                value: 65.1,
                date: "28 Mayıs 09:25",
              },
              {
                value: 69.1,
                date: "28 Mayıs 09:30",
              },
              {
                value: 64.9,
                date: "28 Mayıs 09:35",
              },
              {
                value: 65.1,
                date: "28 Mayıs 09:40",
              },
              {
                value: 66,
                date: "28 Mayıs 09:45",
              },
              {
                value: 67.4,
                date: "28 Mayıs 09:50",
              },
              {
                value: 69.1,
                date: "28 Mayıs 09:55",
              },
              {
                value: 71.3,
                date: "28 Mayıs 10:00",
              },
              {
                value: 69.9,
                date: "28 Mayıs 10:05",
              },
              {
                value: 70.7,
                date: "28 Mayıs 10:10",
              },
              {
                value: 68,
                date: "28 Mayıs 10:15",
              },
              {
                value: 68.4,
                date: "28 Mayıs 10:20",
              },
              {
                value: 67.8,
                date: "28 Mayıs 10:25",
              },
              {
                value: 65.7,
                date: "28 Mayıs 10:30",
              },
              {
                value: 65.5,
                date: "28 Mayıs 10:35",
              },
              {
                value: 67.5,
                date: "28 Mayıs 10:40",
              },
              {
                value: 66.7,
                date: "28 Mayıs 10:45",
              },
              {
                value: 67,
                date: "28 Mayıs 10:50",
              },
              {
                value: 65.1,
                date: "28 Mayıs 10:55",
              },
              {
                value: 65.8,
                date: "28 Mayıs 11:00",
              },
              {
                value: 67.3,
                date: "28 Mayıs 11:05",
              },
              {
                value: 66.2,
                date: "28 Mayıs 11:10",
              },
              {
                value: 67.1,
                date: "28 Mayıs 11:15",
              },
              {
                value: 65,
                date: "28 Mayıs 11:20",
              },
              {
                value: 64.5,
                date: "28 Mayıs 11:25",
              },
              {
                value: 64.2,
                date: "28 Mayıs 11:30",
              },
              {
                value: 63.3,
                date: "28 Mayıs 11:35",
              },
              {
                value: 64.9,
                date: "28 Mayıs 11:40",
              },
              {
                value: 63.6,
                date: "28 Mayıs 11:45",
              },
              {
                value: 65,
                date: "28 Mayıs 11:50",
              },
              {
                value: 63.2,
                date: "28 Mayıs 11:55",
              },
              {
                value: 63.3,
                date: "28 Mayıs 12:00",
              },
              {
                value: 61.5,
                date: "28 Mayıs 12:05",
              },
              {
                value: 60.8,
                date: "28 Mayıs 12:10",
              },
              {
                value: 61,
                date: "28 Mayıs 12:15",
              },
              {
                value: 60,
                date: "28 Mayıs 12:20",
              },
              {
                value: 61.2,
                date: "28 Mayıs 12:25",
              },
              {
                value: 63.3,
                date: "28 Mayıs 12:30",
              },
              {
                value: 63.1,
                date: "28 Mayıs 12:35",
              },
              {
                value: 63.9,
                date: "28 Mayıs 12:40",
              },
              {
                value: 62,
                date: "28 Mayıs 12:45",
              },
              {
                value: 64.3,
                date: "28 Mayıs 12:50",
              },
              {
                value: 63.5,
                date: "28 Mayıs 12:55",
              },
              {
                value: 65,
                date: "28 Mayıs 13:00",
              },
              {
                value: 64.6,
                date: "28 Mayıs 13:05",
              },
              {
                value: 64.4,
                date: "28 Mayıs 13:10",
              },
              {
                value: 64.2,
                date: "28 Mayıs 13:15",
              },
              {
                value: 64.7,
                date: "28 Mayıs 13:20",
              },
              {
                value: 64.5,
                date: "28 Mayıs 13:25",
              },
              {
                value: 65.1,
                date: "28 Mayıs 13:30",
              },
              {
                value: 65.9,
                date: "28 Mayıs 13:35",
              },
              {
                value: 68.7,
                date: "28 Mayıs 13:40",
              },
              {
                value: 67.2,
                date: "28 Mayıs 13:45",
              },
              {
                value: 68.1,
                date: "28 Mayıs 13:50",
              },
              {
                value: 66.3,
                date: "28 Mayıs 13:55",
              },
              {
                value: 66.1,
                date: "28 Mayıs 14:00",
              },
              {
                value: 65.7,
                date: "28 Mayıs 14:05",
              },
              {
                value: 65.4,
                date: "28 Mayıs 14:10",
              },
              {
                value: 65,
                date: "28 Mayıs 14:15",
              },
              {
                value: 67,
                date: "28 Mayıs 14:20",
              },
              {
                value: 67.1,
                date: "28 Mayıs 14:25",
              },
              {
                value: 67.9,
                date: "28 Mayıs 14:30",
              },
              {
                value: 65.9,
                date: "28 Mayıs 14:35",
              },
              {
                value: 65.1,
                date: "28 Mayıs 14:40",
              },
              {
                value: 70,
                date: "28 Mayıs 14:45",
              },
              {
                value: 69.9,
                date: "28 Mayıs 14:50",
              },
              {
                value: 71.2,
                date: "28 Mayıs 14:55",
              },
              {
                value: 69.3,
                date: "28 Mayıs 15:00",
              },
              {
                value: 69.6,
                date: "28 Mayıs 15:05",
              },
              {
                value: 71.4,
                date: "28 Mayıs 15:10",
              },
              {
                value: 74,
                date: "28 Mayıs 15:15",
              },
              {
                value: 58.6,
                date: "28 Mayıs 15:20",
              },
              {
                value: 60.4,
                date: "28 Mayıs 15:25",
              },
              {
                value: 63.3,
                date: "28 Mayıs 15:30",
              },
              {
                value: 63.1,
                date: "28 Mayıs 15:35",
              },
              {
                value: 63.8,
                date: "28 Mayıs 15:40",
              },
              {
                value: 62.6,
                date: "28 Mayıs 15:45",
              },
              {
                value: 62.1,
                date: "28 Mayıs 15:50",
              },
              {
                value: 62.6,
                date: "28 Mayıs 15:55",
              },
              {
                value: 65,
                date: "28 Mayıs 16:00",
              },
              {
                value: 64.1,
                date: "28 Mayıs 16:05",
              },
              {
                value: 64.3,
                date: "28 Mayıs 16:10",
              },
              {
                value: 65,
                date: "28 Mayıs 16:15",
              },
              {
                value: 66.3,
                date: "28 Mayıs 16:20",
              },
              {
                value: 67.1,
                date: "28 Mayıs 16:25",
              },
              {
                value: 68.1,
                date: "28 Mayıs 16:30",
              },
              {
                value: 67.1,
                date: "28 Mayıs 16:35",
              },
              {
                value: 66.6,
                date: "28 Mayıs 16:40",
              },
              {
                value: 65.2,
                date: "28 Mayıs 16:45",
              },
              {
                value: 65.6,
                date: "28 Mayıs 16:50",
              },
              {
                value: 65,
                date: "28 Mayıs 16:55",
              },
              {
                value: 65.5,
                date: "28 Mayıs 17:00",
              },
              {
                value: 65.6,
                date: "28 Mayıs 17:05",
              },
              {
                value: 63.7,
                date: "28 Mayıs 17:10",
              },
              {
                value: 64,
                date: "28 Mayıs 17:15",
              },
              {
                value: 60.7,
                date: "28 Mayıs 17:20",
              },
              {
                value: 60.5,
                date: "28 Mayıs 17:25",
              },
              {
                value: 59.1,
                date: "28 Mayıs 17:30",
              },
              {
                value: 61.8,
                date: "28 Mayıs 17:35",
              },
              {
                value: 65.1,
                date: "28 Mayıs 17:40",
              },
              {
                value: 64.7,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 36.9,
                avg: 71.58,
                max: 82.5,
                date: "28 Nisan 23",
              },
              {
                min: 30.4,
                avg: 63.54,
                max: 86.6,
                date: "29 Nisan 23",
              },
              {
                min: 43.2,
                avg: 71.57,
                max: 91.3,
                date: "30 Nisan 23",
              },
              {
                min: 30.9,
                avg: 65.82,
                max: 90.8,
                date: "01 Mayıs 23",
              },
              {
                min: 38.2,
                avg: 64.98,
                max: 85.1,
                date: "02 Mayıs 23",
              },
              {
                min: 42.5,
                avg: 78.05,
                max: 96,
                date: "03 Mayıs 23",
              },
              {
                min: 49.1,
                avg: 81.55,
                max: 97.2,
                date: "04 Mayıs 23",
              },
              {
                min: 61,
                avg: 87.52,
                max: 97.6,
                date: "05 Mayıs 23",
              },
              {
                min: 41,
                avg: 72.32,
                max: 94.3,
                date: "06 Mayıs 23",
              },
              {
                min: 39.6,
                avg: 71.4,
                max: 94.9,
                date: "07 Mayıs 23",
              },
              {
                min: 40.5,
                avg: 69.72,
                max: 92.5,
                date: "08 Mayıs 23",
              },
              {
                min: 43.6,
                avg: 75.29,
                max: 93.3,
                date: "09 Mayıs 23",
              },
              {
                min: 43.6,
                avg: 73.13,
                max: 90.7,
                date: "10 Mayıs 23",
              },
              {
                min: 46.1,
                avg: 72.52,
                max: 87.6,
                date: "11 Mayıs 23",
              },
              {
                min: 50.1,
                avg: 78.57,
                max: 90.1,
                date: "12 Mayıs 23",
              },
              {
                min: 35.7,
                avg: 66.17,
                max: 88.5,
                date: "13 Mayıs 23",
              },
              {
                min: 46.3,
                avg: 69.61,
                max: 89.1,
                date: "14 Mayıs 23",
              },
              {
                min: 37.9,
                avg: 67.54,
                max: 92.9,
                date: "15 Mayıs 23",
              },
              {
                min: 51.7,
                avg: 79.64,
                max: 94.7,
                date: "16 Mayıs 23",
              },
              {
                min: 49.4,
                avg: 77.6,
                max: 96.8,
                date: "17 Mayıs 23",
              },
              {
                min: 49.4,
                avg: 77.32,
                max: 96.3,
                date: "18 Mayıs 23",
              },
              {
                min: 40.4,
                avg: 78.37,
                max: 96.6,
                date: "19 Mayıs 23",
              },
              {
                min: 41.1,
                avg: 72.49,
                max: 96.7,
                date: "20 Mayıs 23",
              },
              {
                min: 47,
                avg: 75.45,
                max: 96,
                date: "21 Mayıs 23",
              },
              {
                min: 40.1,
                avg: 74.87,
                max: 95,
                date: "22 Mayıs 23",
              },
              {
                min: 44.5,
                avg: 76.8,
                max: 95.8,
                date: "23 Mayıs 23",
              },
              {
                min: 44.4,
                avg: 77.19,
                max: 97.2,
                date: "24 Mayıs 23",
              },
              {
                min: 42.4,
                avg: 74.27,
                max: 95.3,
                date: "25 Mayıs 23",
              },
              {
                min: 42.3,
                avg: 73.79,
                max: 96.7,
                date: "26 Mayıs 23",
              },
              {
                min: 46.3,
                avg: 75.88,
                max: 96,
                date: "27 Mayıs 23",
              },
              {
                min: 58.6,
                avg: 75.63,
                max: 95.4,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 69.7,
                avg: 70.61,
                max: 71.6,
                date: "9 - 15 Ocak",
              },
              {
                min: 36.5,
                avg: 56.3,
                max: 87.8,
                date: "16 - 22 Ocak",
              },
              {
                min: 30.2,
                avg: 51.26,
                max: 76.9,
                date: "23 - 29 Ocak",
              },
              {
                min: 20.3,
                avg: 49.84,
                max: 81.7,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: 23,
                avg: 45.69,
                max: 70.7,
                date: "6 - 12 Şubat",
              },
              {
                min: 23.7,
                avg: 57.04,
                max: 85.6,
                date: "13 - 19 Şubat",
              },
              {
                min: 33.1,
                avg: 65.86,
                max: 88.9,
                date: "20 - 26 Şubat",
              },
              {
                min: 45,
                avg: 72.07,
                max: 93,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 29,
                avg: 68.13,
                max: 92,
                date: "6 - 12 Mart",
              },
              {
                min: 32.6,
                avg: 70.54,
                max: 91.6,
                date: "13 - 19 Mart",
              },
              {
                min: 28.9,
                avg: 68.43,
                max: 90,
                date: "20 - 26 Mart",
              },
              {
                min: 26.3,
                avg: 74.54,
                max: 95.7,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 38.5,
                avg: 73.71,
                max: 95,
                date: "3 - 9 Nisan",
              },
              {
                min: 30.7,
                avg: 74.36,
                max: 98.2,
                date: "10 - 16 Nisan",
              },
              {
                min: 35.3,
                avg: 73.03,
                max: 94.6,
                date: "17 - 23 Nisan",
              },
              {
                min: 30.4,
                avg: 69.97,
                max: 96.2,
                date: "24 - 30 Nisan",
              },
              {
                min: 39.6,
                avg: 76.27,
                max: 97.6,
                date: "1 - 7 Mayıs",
              },
              {
                min: 35.7,
                avg: 73.02,
                max: 96.8,
                date: "8 - 14 Mayıs",
              },
              {
                min: 40.1,
                avg: 75.72,
                max: 97.2,
                date: "15 - 21 Mayıs",
              },
              {
                min: 42.3,
                avg: 75.44,
                max: 96.7,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "hava nemim-1",
            sensor_type: "Hava Nemi",
            unit: "%",
            minutely: [
              {
                value: 90.8,
                date: "28 Mayıs 05:48",
              },
              {
                value: 90,
                date: "28 Mayıs 05:53",
              },
              {
                value: 90.4,
                date: "28 Mayıs 05:58",
              },
              {
                value: 90.1,
                date: "28 Mayıs 06:03",
              },
              {
                value: 90.1,
                date: "28 Mayıs 06:08",
              },
              {
                value: 90,
                date: "28 Mayıs 06:13",
              },
              {
                value: 89.8,
                date: "28 Mayıs 06:18",
              },
              {
                value: 89.4,
                date: "28 Mayıs 06:23",
              },
              {
                value: 89.2,
                date: "28 Mayıs 06:28",
              },
              {
                value: 88.6,
                date: "28 Mayıs 06:33",
              },
              {
                value: 85.6,
                date: "28 Mayıs 06:38",
              },
              {
                value: 83.7,
                date: "28 Mayıs 06:43",
              },
              {
                value: 82.4,
                date: "28 Mayıs 06:48",
              },
              {
                value: 81.1,
                date: "28 Mayıs 06:53",
              },
              {
                value: 80.1,
                date: "28 Mayıs 06:58",
              },
              {
                value: 82.7,
                date: "28 Mayıs 07:03",
              },
              {
                value: 83.8,
                date: "28 Mayıs 07:08",
              },
              {
                value: 84.8,
                date: "28 Mayıs 07:13",
              },
              {
                value: 84.9,
                date: "28 Mayıs 07:18",
              },
              {
                value: 84.5,
                date: "28 Mayıs 07:23",
              },
              {
                value: 83.7,
                date: "28 Mayıs 07:28",
              },
              {
                value: 83.4,
                date: "28 Mayıs 07:33",
              },
              {
                value: 82.6,
                date: "28 Mayıs 07:38",
              },
              {
                value: 82.7,
                date: "28 Mayıs 07:43",
              },
              {
                value: 82.2,
                date: "28 Mayıs 07:48",
              },
              {
                value: 81.4,
                date: "28 Mayıs 07:53",
              },
              {
                value: 81.4,
                date: "28 Mayıs 07:58",
              },
              {
                value: 80.7,
                date: "28 Mayıs 08:03",
              },
              {
                value: 79.7,
                date: "28 Mayıs 08:08",
              },
              {
                value: 78.6,
                date: "28 Mayıs 08:13",
              },
              {
                value: 76.4,
                date: "28 Mayıs 08:18",
              },
              {
                value: 76.6,
                date: "28 Mayıs 08:23",
              },
              {
                value: 70.1,
                date: "28 Mayıs 08:28",
              },
              {
                value: 67.1,
                date: "28 Mayıs 08:33",
              },
              {
                value: 70.9,
                date: "28 Mayıs 08:38",
              },
              {
                value: 70.1,
                date: "28 Mayıs 08:43",
              },
              {
                value: 73.3,
                date: "28 Mayıs 08:48",
              },
              {
                value: 70.8,
                date: "28 Mayıs 08:53",
              },
              {
                value: 70.6,
                date: "28 Mayıs 08:58",
              },
              {
                value: 65.3,
                date: "28 Mayıs 09:03",
              },
              {
                value: 63.1,
                date: "28 Mayıs 09:08",
              },
              {
                value: 61.9,
                date: "28 Mayıs 09:13",
              },
              {
                value: 60.8,
                date: "28 Mayıs 09:18",
              },
              {
                value: 64.3,
                date: "28 Mayıs 09:23",
              },
              {
                value: 64.6,
                date: "28 Mayıs 09:28",
              },
              {
                value: 63.6,
                date: "28 Mayıs 09:33",
              },
              {
                value: 58.5,
                date: "28 Mayıs 09:38",
              },
              {
                value: 66.5,
                date: "28 Mayıs 09:43",
              },
              {
                value: 67.3,
                date: "28 Mayıs 09:48",
              },
              {
                value: 69.3,
                date: "28 Mayıs 09:53",
              },
              {
                value: 69.7,
                date: "28 Mayıs 09:58",
              },
              {
                value: 70.3,
                date: "28 Mayıs 10:03",
              },
              {
                value: 69.2,
                date: "28 Mayıs 10:08",
              },
              {
                value: 69.9,
                date: "28 Mayıs 10:13",
              },
              {
                value: 69.7,
                date: "28 Mayıs 10:18",
              },
              {
                value: 68.9,
                date: "28 Mayıs 10:23",
              },
              {
                value: 66,
                date: "28 Mayıs 10:28",
              },
              {
                value: 65.8,
                date: "28 Mayıs 10:33",
              },
              {
                value: 66.2,
                date: "28 Mayıs 10:38",
              },
              {
                value: 66.2,
                date: "28 Mayıs 10:43",
              },
              {
                value: 65.2,
                date: "28 Mayıs 10:48",
              },
              {
                value: 66.1,
                date: "28 Mayıs 10:53",
              },
              {
                value: 66.3,
                date: "28 Mayıs 10:58",
              },
              {
                value: 66.1,
                date: "28 Mayıs 11:03",
              },
              {
                value: 66.8,
                date: "28 Mayıs 11:08",
              },
              {
                value: 66.6,
                date: "28 Mayıs 11:13",
              },
              {
                value: 65.3,
                date: "28 Mayıs 11:18",
              },
              {
                value: 64.9,
                date: "28 Mayıs 11:23",
              },
              {
                value: 65.2,
                date: "28 Mayıs 11:28",
              },
              {
                value: 65,
                date: "28 Mayıs 11:33",
              },
              {
                value: 64.7,
                date: "28 Mayıs 11:38",
              },
              {
                value: 64.9,
                date: "28 Mayıs 11:43",
              },
              {
                value: 64.8,
                date: "28 Mayıs 11:48",
              },
              {
                value: 65.3,
                date: "28 Mayıs 11:53",
              },
              {
                value: 63.3,
                date: "28 Mayıs 11:58",
              },
              {
                value: 63.2,
                date: "28 Mayıs 12:03",
              },
              {
                value: 62,
                date: "28 Mayıs 12:08",
              },
              {
                value: 61.5,
                date: "28 Mayıs 12:13",
              },
              {
                value: 62.7,
                date: "28 Mayıs 12:18",
              },
              {
                value: 64,
                date: "28 Mayıs 12:23",
              },
              {
                value: 64.6,
                date: "28 Mayıs 12:28",
              },
              {
                value: 65.2,
                date: "28 Mayıs 12:33",
              },
              {
                value: 65,
                date: "28 Mayıs 12:38",
              },
              {
                value: 65.1,
                date: "28 Mayıs 12:43",
              },
              {
                value: 65.2,
                date: "28 Mayıs 12:48",
              },
              {
                value: 65.5,
                date: "28 Mayıs 12:53",
              },
              {
                value: 66.3,
                date: "28 Mayıs 12:58",
              },
              {
                value: 66.9,
                date: "28 Mayıs 13:03",
              },
              {
                value: 65.9,
                date: "28 Mayıs 13:08",
              },
              {
                value: 65.8,
                date: "28 Mayıs 13:13",
              },
              {
                value: 66.5,
                date: "28 Mayıs 13:18",
              },
              {
                value: 66.8,
                date: "28 Mayıs 13:23",
              },
              {
                value: 67.3,
                date: "28 Mayıs 13:28",
              },
              {
                value: 68.3,
                date: "28 Mayıs 13:33",
              },
              {
                value: 68.4,
                date: "28 Mayıs 13:38",
              },
              {
                value: 68.3,
                date: "28 Mayıs 13:43",
              },
              {
                value: 68.5,
                date: "28 Mayıs 13:48",
              },
              {
                value: 67.6,
                date: "28 Mayıs 13:53",
              },
              {
                value: 67.5,
                date: "28 Mayıs 13:58",
              },
              {
                value: 67.1,
                date: "28 Mayıs 14:03",
              },
              {
                value: 66.1,
                date: "28 Mayıs 14:08",
              },
              {
                value: 66.1,
                date: "28 Mayıs 14:13",
              },
              {
                value: 68.8,
                date: "28 Mayıs 14:18",
              },
              {
                value: 69.3,
                date: "28 Mayıs 14:23",
              },
              {
                value: 69.6,
                date: "28 Mayıs 14:28",
              },
              {
                value: 68.8,
                date: "28 Mayıs 14:33",
              },
              {
                value: 66,
                date: "28 Mayıs 14:38",
              },
              {
                value: 65.7,
                date: "28 Mayıs 14:43",
              },
              {
                value: 65.6,
                date: "28 Mayıs 14:48",
              },
              {
                value: 64.2,
                date: "28 Mayıs 14:53",
              },
              {
                value: 63.8,
                date: "28 Mayıs 14:58",
              },
              {
                value: 64.1,
                date: "28 Mayıs 15:03",
              },
              {
                value: 64.9,
                date: "28 Mayıs 15:08",
              },
              {
                value: 64.3,
                date: "28 Mayıs 15:13",
              },
              {
                value: 65.4,
                date: "28 Mayıs 15:18",
              },
              {
                value: 67.2,
                date: "28 Mayıs 15:23",
              },
              {
                value: 68.2,
                date: "28 Mayıs 15:28",
              },
              {
                value: 66.9,
                date: "28 Mayıs 15:33",
              },
              {
                value: 66.8,
                date: "28 Mayıs 15:38",
              },
              {
                value: 65.7,
                date: "28 Mayıs 15:43",
              },
              {
                value: 67,
                date: "28 Mayıs 15:48",
              },
              {
                value: 66.8,
                date: "28 Mayıs 15:53",
              },
              {
                value: 67.2,
                date: "28 Mayıs 15:58",
              },
              {
                value: 67.7,
                date: "28 Mayıs 16:03",
              },
              {
                value: 67,
                date: "28 Mayıs 16:08",
              },
              {
                value: 67.8,
                date: "28 Mayıs 16:13",
              },
              {
                value: 68.9,
                date: "28 Mayıs 16:18",
              },
              {
                value: 68.6,
                date: "28 Mayıs 16:23",
              },
              {
                value: 68.9,
                date: "28 Mayıs 16:28",
              },
              {
                value: 68.7,
                date: "28 Mayıs 16:33",
              },
              {
                value: 68.6,
                date: "28 Mayıs 16:38",
              },
              {
                value: 67.9,
                date: "28 Mayıs 16:43",
              },
              {
                value: 68.1,
                date: "28 Mayıs 16:48",
              },
              {
                value: 67.4,
                date: "28 Mayıs 16:53",
              },
              {
                value: 67.3,
                date: "28 Mayıs 16:58",
              },
              {
                value: 67.6,
                date: "28 Mayıs 17:03",
              },
              {
                value: 66.7,
                date: "28 Mayıs 17:10",
              },
              {
                value: 66.2,
                date: "28 Mayıs 17:13",
              },
              {
                value: 64.8,
                date: "28 Mayıs 17:18",
              },
              {
                value: 64.1,
                date: "28 Mayıs 17:23",
              },
              {
                value: 64.8,
                date: "28 Mayıs 17:28",
              },
              {
                value: 66.7,
                date: "28 Mayıs 17:33",
              },
              {
                value: 67.2,
                date: "28 Mayıs 17:38",
              },
              {
                value: 67.2,
                date: "28 Mayıs 17:43",
              },
            ],
            daily: [
              {
                min: 41.6,
                avg: 75.09,
                max: 90.9,
                date: "28 Nisan 23",
              },
              {
                min: 31.6,
                avg: 67.37,
                max: 96.1,
                date: "29 Nisan 23",
              },
              {
                min: 36.3,
                avg: 73.28,
                max: 93.9,
                date: "30 Nisan 23",
              },
              {
                min: 32.9,
                avg: 62.72,
                max: 92.7,
                date: "01 Mayıs 23",
              },
              {
                min: 44.5,
                avg: 58.45,
                max: 78.3,
                date: "02 Mayıs 23",
              },
              {
                min: 48.9,
                avg: 75.61,
                max: 99.2,
                date: "03 Mayıs 23",
              },
              {
                min: 58.4,
                avg: 85.43,
                max: 100,
                date: "04 Mayıs 23",
              },
              {
                min: 66.1,
                avg: 86.43,
                max: 100,
                date: "05 Mayıs 23",
              },
              {
                min: 46,
                avg: 70.91,
                max: 93.3,
                date: "06 Mayıs 23",
              },
              {
                min: 45.7,
                avg: 70.42,
                max: 96.6,
                date: "07 Mayıs 23",
              },
              {
                min: 48.3,
                avg: 68.56,
                max: 91.2,
                date: "08 Mayıs 23",
              },
              {
                min: 51.3,
                avg: 74.67,
                max: 93.7,
                date: "09 Mayıs 23",
              },
              {
                min: 52.6,
                avg: 73.18,
                max: 90.1,
                date: "10 Mayıs 23",
              },
              {
                min: 53.7,
                avg: 72.59,
                max: 91.7,
                date: "11 Mayıs 23",
              },
              {
                min: 59,
                avg: 76.4,
                max: 93.7,
                date: "12 Mayıs 23",
              },
              {
                min: 40.5,
                avg: 70.04,
                max: 97.3,
                date: "13 Mayıs 23",
              },
              {
                min: 50.5,
                avg: 71.49,
                max: 90.6,
                date: "14 Mayıs 23",
              },
              {
                min: 40.8,
                avg: 65.07,
                max: 89,
                date: "15 Mayıs 23",
              },
              {
                min: 54.3,
                avg: 73.79,
                max: 90.1,
                date: "16 Mayıs 23",
              },
              {
                min: 54.5,
                avg: 77.22,
                max: 97.9,
                date: "17 Mayıs 23",
              },
              {
                min: 55.6,
                avg: 74.79,
                max: 92.4,
                date: "18 Mayıs 23",
              },
              {
                min: 44.9,
                avg: 81.64,
                max: 100,
                date: "19 Mayıs 23",
              },
              {
                min: 47.4,
                avg: 73.57,
                max: 100,
                date: "20 Mayıs 23",
              },
              {
                min: 51,
                avg: 74.63,
                max: 97.6,
                date: "21 Mayıs 23",
              },
              {
                min: 45.1,
                avg: 72.03,
                max: 92.7,
                date: "22 Mayıs 23",
              },
              {
                min: 51.9,
                avg: 73.24,
                max: 97,
                date: "23 Mayıs 23",
              },
              {
                min: 48.6,
                avg: 74.62,
                max: 97.6,
                date: "24 Mayıs 23",
              },
              {
                min: 43.8,
                avg: 69.12,
                max: 94.9,
                date: "25 Mayıs 23",
              },
              {
                min: 47.2,
                avg: 69.74,
                max: 95,
                date: "26 Mayıs 23",
              },
              {
                min: 51.8,
                avg: 72.91,
                max: 94.9,
                date: "27 Mayıs 23",
              },
              {
                min: 58.5,
                avg: 73.94,
                max: 92.1,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 97.3,
                avg: 97.64,
                max: 97.9,
                date: "9 - 15 Ocak",
              },
              {
                min: 52.3,
                avg: 75.33,
                max: 96.3,
                date: "16 - 22 Ocak",
              },
              {
                min: 35.8,
                avg: 70.08,
                max: 89.7,
                date: "23 - 29 Ocak",
              },
              {
                min: 39.9,
                avg: 69.28,
                max: 95.7,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: 33.2,
                avg: 67.77,
                max: 92,
                date: "6 - 12 Şubat",
              },
              {
                min: 26.6,
                avg: 71.66,
                max: 95.9,
                date: "13 - 19 Şubat",
              },
              {
                min: 42.8,
                avg: 73.86,
                max: 98.1,
                date: "20 - 26 Şubat",
              },
              {
                min: 53.9,
                avg: 86.25,
                max: 99.4,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 31,
                avg: 72.88,
                max: 98.5,
                date: "6 - 12 Mart",
              },
              {
                min: 47.8,
                avg: 80.39,
                max: 98.5,
                date: "13 - 19 Mart",
              },
              {
                min: 29.2,
                avg: 75.62,
                max: 98.4,
                date: "20 - 26 Mart",
              },
              {
                min: 26.9,
                avg: 73.75,
                max: 99.3,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 46.8,
                avg: 80.58,
                max: 99,
                date: "3 - 9 Nisan",
              },
              {
                min: 35.3,
                avg: 76.24,
                max: 99.9,
                date: "10 - 16 Nisan",
              },
              {
                min: 34.8,
                avg: 75.48,
                max: 100,
                date: "17 - 23 Nisan",
              },
              {
                min: 31.6,
                avg: 70.5,
                max: 98.7,
                date: "24 - 30 Nisan",
              },
              {
                min: 45.7,
                avg: 75.72,
                max: 100,
                date: "1 - 7 Mayıs",
              },
              {
                min: 40.5,
                avg: 72.17,
                max: 97.3,
                date: "8 - 14 Mayıs",
              },
              {
                min: 44.9,
                avg: 74.86,
                max: 100,
                date: "15 - 21 Mayıs",
              },
              {
                min: 43.8,
                avg: 71.97,
                max: 95,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "phım",
            sensor_type: "pH",
            unit: "",
            minutely: [
              {
                value: 7,
                date: "28 Mayıs 05:50",
              },
              {
                value: 7,
                date: "28 Mayıs 05:55",
              },
              {
                value: 7,
                date: "28 Mayıs 06:00",
              },
              {
                value: 7,
                date: "28 Mayıs 06:05",
              },
              {
                value: 7,
                date: "28 Mayıs 06:10",
              },
              {
                value: 7,
                date: "28 Mayıs 06:15",
              },
              {
                value: 7,
                date: "28 Mayıs 06:20",
              },
              {
                value: 7,
                date: "28 Mayıs 06:25",
              },
              {
                value: 7,
                date: "28 Mayıs 06:30",
              },
              {
                value: 7,
                date: "28 Mayıs 06:35",
              },
              {
                value: 7,
                date: "28 Mayıs 06:40",
              },
              {
                value: 7,
                date: "28 Mayıs 06:50",
              },
              {
                value: 7,
                date: "28 Mayıs 06:55",
              },
              {
                value: 7,
                date: "28 Mayıs 07:00",
              },
              {
                value: 7,
                date: "28 Mayıs 07:05",
              },
              {
                value: 7,
                date: "28 Mayıs 07:10",
              },
              {
                value: 7,
                date: "28 Mayıs 07:15",
              },
              {
                value: 7,
                date: "28 Mayıs 07:20",
              },
              {
                value: 7,
                date: "28 Mayıs 07:25",
              },
              {
                value: 7,
                date: "28 Mayıs 07:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:25",
              },
              {
                value: 7,
                date: "28 Mayıs 14:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 16:00",
              },
              {
                value: 7,
                date: "28 Mayıs 16:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 16:10",
              },
              {
                value: 7,
                date: "28 Mayıs 16:15",
              },
              {
                value: 7,
                date: "28 Mayıs 16:20",
              },
              {
                value: 7,
                date: "28 Mayıs 16:25",
              },
              {
                value: 7,
                date: "28 Mayıs 16:30",
              },
              {
                value: 7,
                date: "28 Mayıs 16:35",
              },
              {
                value: 7,
                date: "28 Mayıs 16:40",
              },
              {
                value: 7,
                date: "28 Mayıs 16:45",
              },
              {
                value: 7,
                date: "28 Mayıs 16:50",
              },
              {
                value: 7,
                date: "28 Mayıs 16:55",
              },
              {
                value: 7,
                date: "28 Mayıs 17:00",
              },
              {
                value: 7,
                date: "28 Mayıs 17:05",
              },
              {
                value: 7,
                date: "28 Mayıs 17:10",
              },
              {
                value: 7,
                date: "28 Mayıs 17:15",
              },
              {
                value: 7,
                date: "28 Mayıs 17:20",
              },
              {
                value: 7,
                date: "28 Mayıs 17:25",
              },
              {
                value: 7,
                date: "28 Mayıs 17:30",
              },
              {
                value: 7,
                date: "28 Mayıs 17:35",
              },
              {
                value: 7,
                date: "28 Mayıs 17:40",
              },
              {
                value: 7,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 7.3,
                avg: 7.33,
                max: 7.4,
                date: "28 Nisan 23",
              },
              {
                min: 7.3,
                avg: 7.36,
                max: 7.4,
                date: "29 Nisan 23",
              },
              {
                min: 7.3,
                avg: 7.34,
                max: 7.4,
                date: "30 Nisan 23",
              },
              {
                min: 7.3,
                avg: 7.31,
                max: 7.4,
                date: "01 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.34,
                max: 7.4,
                date: "02 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.35,
                max: 7.4,
                date: "03 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.31,
                max: 7.4,
                date: "04 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.3,
                max: 7.4,
                date: "05 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.3,
                max: 7.4,
                date: "06 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.27,
                max: 7.3,
                date: "07 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.3,
                max: 7.4,
                date: "08 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.31,
                max: 7.4,
                date: "09 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.33,
                max: 7.4,
                date: "10 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.3,
                max: 7.3,
                date: "11 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.34,
                max: 7.4,
                date: "12 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.29,
                max: 7.4,
                date: "13 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.23,
                max: 7.3,
                date: "14 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.26,
                max: 7.3,
                date: "15 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 30.14,
                max: 6553.5,
                date: "16 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.33,
                max: 7.4,
                date: "17 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.32,
                max: 7.4,
                date: "18 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 30.08,
                max: 6553.5,
                date: "19 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 7.17,
                max: 7.3,
                date: "20 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 7.16,
                max: 7.9,
                date: "21 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 30.07,
                max: 6553.5,
                date: "22 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.25,
                max: 7.3,
                date: "23 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.3,
                max: 7.4,
                date: "24 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.27,
                max: 7.4,
                date: "25 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 7.18,
                max: 7.3,
                date: "26 Mayıs 23",
              },
              {
                min: 7,
                avg: 7.09,
                max: 7.2,
                date: "27 Mayıs 23",
              },
              {
                min: 7,
                avg: 7.06,
                max: 7.1,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 7,
                avg: 7.4,
                max: 8,
                date: "6 - 12 Şubat",
              },
              {
                min: 6.9,
                avg: 7.15,
                max: 7.4,
                date: "13 - 19 Şubat",
              },
              {
                min: 7.1,
                avg: 7.37,
                max: 7.6,
                date: "20 - 26 Şubat",
              },
              {
                min: 7.3,
                avg: 14.02,
                max: 6553.5,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 7.3,
                avg: 10.71,
                max: 6553.5,
                date: "6 - 12 Mart",
              },
              {
                min: 7.2,
                avg: 7.42,
                max: 7.5,
                date: "13 - 19 Mart",
              },
              {
                min: 7.3,
                avg: 17.25,
                max: 6553.5,
                date: "20 - 26 Mart",
              },
              {
                min: 7.3,
                avg: 7.41,
                max: 7.5,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 7.2,
                avg: 7.37,
                max: 7.5,
                date: "3 - 9 Nisan",
              },
              {
                min: 7.1,
                avg: 10.7,
                max: 6553.5,
                date: "10 - 16 Nisan",
              },
              {
                min: 7.2,
                avg: 10.64,
                max: 6553.5,
                date: "17 - 23 Nisan",
              },
              {
                min: 7.2,
                avg: 7.34,
                max: 7.5,
                date: "24 - 30 Nisan",
              },
              {
                min: 7.2,
                avg: 7.3,
                max: 7.4,
                date: "1 - 7 Mayıs",
              },
              {
                min: 7.2,
                avg: 10.57,
                max: 6553.5,
                date: "8 - 14 Mayıs",
              },
              {
                min: 7.1,
                avg: 14.3,
                max: 6553.5,
                date: "15 - 21 Mayıs",
              },
              {
                min: 7,
                avg: 7.17,
                max: 7.4,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "ECim",
            sensor_type: "EC",
            unit: "mS/cm",
            minutely: [
              {
                value: 0.18,
                date: "28 Mayıs 05:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 05:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 06:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 07:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 08:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 09:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 10:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 11:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 12:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 13:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 14:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 15:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:45",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:50",
              },
              {
                value: 0.18,
                date: "28 Mayıs 16:55",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:00",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:05",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:10",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:15",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:20",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:25",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:30",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:35",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:40",
              },
              {
                value: 0.18,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "28 Nisan 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "29 Nisan 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "30 Nisan 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "01 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "02 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "03 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "04 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "05 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "06 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "07 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "08 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "09 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "10 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "11 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "12 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "13 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "14 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "15 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.41,
                max: 65.53,
                date: "16 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "17 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "18 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.41,
                max: 65.53,
                date: "19 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "20 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "21 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.41,
                max: 65.53,
                date: "22 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "23 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "24 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "25 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "26 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "27 Mayıs 23",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 0,
                avg: 0.13,
                max: 0.18,
                date: "6 - 12 Şubat",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "13 - 19 Şubat",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "20 - 26 Şubat",
              },
              {
                min: 0.18,
                avg: 0.25,
                max: 65.53,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 0.18,
                avg: 0.21,
                max: 65.53,
                date: "6 - 12 Mart",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "13 - 19 Mart",
              },
              {
                min: 0.18,
                avg: 0.28,
                max: 65.53,
                date: "20 - 26 Mart",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "3 - 9 Nisan",
              },
              {
                min: 0.18,
                avg: 0.21,
                max: 65.53,
                date: "10 - 16 Nisan",
              },
              {
                min: 0.18,
                avg: 0.21,
                max: 65.53,
                date: "17 - 23 Nisan",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "24 - 30 Nisan",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "1 - 7 Mayıs",
              },
              {
                min: 0.18,
                avg: 0.21,
                max: 65.53,
                date: "8 - 14 Mayıs",
              },
              {
                min: 0.18,
                avg: 0.25,
                max: 65.53,
                date: "15 - 21 Mayıs",
              },
              {
                min: 0.18,
                avg: 0.18,
                max: 0.18,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "RAd'ım",
            sensor_type: "Toplam Radyasyon",
            unit: "W/m2",
            minutely: [
              {
                value: 2,
                date: "28 Mayıs 05:50",
              },
              {
                value: 3.4,
                date: "28 Mayıs 05:55",
              },
              {
                value: 5.4,
                date: "28 Mayıs 06:00",
              },
              {
                value: 8.2,
                date: "28 Mayıs 06:05",
              },
              {
                value: 10.9,
                date: "28 Mayıs 06:10",
              },
              {
                value: 14.5,
                date: "28 Mayıs 06:15",
              },
              {
                value: 17.2,
                date: "28 Mayıs 06:20",
              },
              {
                value: 21.3,
                date: "28 Mayıs 06:25",
              },
              {
                value: 25.6,
                date: "28 Mayıs 06:30",
              },
              {
                value: 30.4,
                date: "28 Mayıs 06:35",
              },
              {
                value: 36.4,
                date: "28 Mayıs 06:40",
              },
              {
                value: 39.8,
                date: "28 Mayıs 06:45",
              },
              {
                value: 45.9,
                date: "28 Mayıs 06:50",
              },
              {
                value: 47.1,
                date: "28 Mayıs 06:55",
              },
              {
                value: 50.5,
                date: "28 Mayıs 07:00",
              },
              {
                value: 52.2,
                date: "28 Mayıs 07:05",
              },
              {
                value: 55,
                date: "28 Mayıs 07:10",
              },
              {
                value: 60.6,
                date: "28 Mayıs 07:15",
              },
              {
                value: 72.4,
                date: "28 Mayıs 07:20",
              },
              {
                value: 102.8,
                date: "28 Mayıs 07:25",
              },
              {
                value: 116.2,
                date: "28 Mayıs 07:30",
              },
              {
                value: 135.1,
                date: "28 Mayıs 07:35",
              },
              {
                value: 142.1,
                date: "28 Mayıs 07:40",
              },
              {
                value: 156,
                date: "28 Mayıs 07:45",
              },
              {
                value: 167.8,
                date: "28 Mayıs 07:50",
              },
              {
                value: 181.3,
                date: "28 Mayıs 07:55",
              },
              {
                value: 193.1,
                date: "28 Mayıs 08:00",
              },
              {
                value: 199.7,
                date: "28 Mayıs 08:05",
              },
              {
                value: 206.9,
                date: "28 Mayıs 08:10",
              },
              {
                value: 220.2,
                date: "28 Mayıs 08:15",
              },
              {
                value: 93.6,
                date: "28 Mayıs 08:20",
              },
              {
                value: 233.7,
                date: "28 Mayıs 08:25",
              },
              {
                value: 259,
                date: "28 Mayıs 08:30",
              },
              {
                value: 235.8,
                date: "28 Mayıs 08:35",
              },
              {
                value: 284.7,
                date: "28 Mayıs 08:40",
              },
              {
                value: 132.1,
                date: "28 Mayıs 08:45",
              },
              {
                value: 135.5,
                date: "28 Mayıs 08:50",
              },
              {
                value: 177.5,
                date: "28 Mayıs 08:55",
              },
              {
                value: 329.8,
                date: "28 Mayıs 09:00",
              },
              {
                value: 231.7,
                date: "28 Mayıs 09:05",
              },
              {
                value: 295.4,
                date: "28 Mayıs 09:10",
              },
              {
                value: 367.4,
                date: "28 Mayıs 09:15",
              },
              {
                value: 304.5,
                date: "28 Mayıs 09:20",
              },
              {
                value: 389.1,
                date: "28 Mayıs 09:25",
              },
              {
                value: 303.8,
                date: "28 Mayıs 09:30",
              },
              {
                value: 407.5,
                date: "28 Mayıs 09:35",
              },
              {
                value: 227.8,
                date: "28 Mayıs 09:40",
              },
              {
                value: 286,
                date: "28 Mayıs 09:45",
              },
              {
                value: 131,
                date: "28 Mayıs 09:50",
              },
              {
                value: 190.3,
                date: "28 Mayıs 09:55",
              },
              {
                value: 153.9,
                date: "28 Mayıs 10:00",
              },
              {
                value: 241.6,
                date: "28 Mayıs 10:05",
              },
              {
                value: 231.3,
                date: "28 Mayıs 10:10",
              },
              {
                value: 225.4,
                date: "28 Mayıs 10:15",
              },
              {
                value: 213.6,
                date: "28 Mayıs 10:20",
              },
              {
                value: 279.2,
                date: "28 Mayıs 10:25",
              },
              {
                value: 273.6,
                date: "28 Mayıs 10:30",
              },
              {
                value: 213.2,
                date: "28 Mayıs 10:35",
              },
              {
                value: 229.5,
                date: "28 Mayıs 10:40",
              },
              {
                value: 239.2,
                date: "28 Mayıs 10:45",
              },
              {
                value: 237.5,
                date: "28 Mayıs 10:50",
              },
              {
                value: 199.7,
                date: "28 Mayıs 10:55",
              },
              {
                value: 170.9,
                date: "28 Mayıs 11:00",
              },
              {
                value: 152.9,
                date: "28 Mayıs 11:05",
              },
              {
                value: 153.2,
                date: "28 Mayıs 11:10",
              },
              {
                value: 187.3,
                date: "28 Mayıs 11:15",
              },
              {
                value: 223.3,
                date: "28 Mayıs 11:20",
              },
              {
                value: 223.7,
                date: "28 Mayıs 11:25",
              },
              {
                value: 229.8,
                date: "28 Mayıs 11:30",
              },
              {
                value: 216.3,
                date: "28 Mayıs 11:35",
              },
              {
                value: 234.8,
                date: "28 Mayıs 11:40",
              },
              {
                value: 197.7,
                date: "28 Mayıs 11:45",
              },
              {
                value: 200.8,
                date: "28 Mayıs 11:50",
              },
              {
                value: 223.3,
                date: "28 Mayıs 11:55",
              },
              {
                value: 240.6,
                date: "28 Mayıs 12:00",
              },
              {
                value: 294.8,
                date: "28 Mayıs 12:05",
              },
              {
                value: 367.6,
                date: "28 Mayıs 12:10",
              },
              {
                value: 322.4,
                date: "28 Mayıs 12:15",
              },
              {
                value: 223,
                date: "28 Mayıs 12:20",
              },
              {
                value: 208.1,
                date: "28 Mayıs 12:25",
              },
              {
                value: 236.1,
                date: "28 Mayıs 12:30",
              },
              {
                value: 254.9,
                date: "28 Mayıs 12:35",
              },
              {
                value: 245.5,
                date: "28 Mayıs 12:40",
              },
              {
                value: 223,
                date: "28 Mayıs 12:45",
              },
              {
                value: 249.3,
                date: "28 Mayıs 12:50",
              },
              {
                value: 246.9,
                date: "28 Mayıs 12:55",
              },
              {
                value: 241.6,
                date: "28 Mayıs 13:00",
              },
              {
                value: 293.7,
                date: "28 Mayıs 13:05",
              },
              {
                value: 294.8,
                date: "28 Mayıs 13:10",
              },
              {
                value: 174.1,
                date: "28 Mayıs 13:15",
              },
              {
                value: 188.3,
                date: "28 Mayıs 13:20",
              },
              {
                value: 175.1,
                date: "28 Mayıs 13:25",
              },
              {
                value: 156.3,
                date: "28 Mayıs 13:30",
              },
              {
                value: 150.9,
                date: "28 Mayıs 13:35",
              },
              {
                value: 127.3,
                date: "28 Mayıs 13:40",
              },
              {
                value: 119.9,
                date: "28 Mayıs 13:45",
              },
              {
                value: 167.8,
                date: "28 Mayıs 13:50",
              },
              {
                value: 181.3,
                date: "28 Mayıs 13:55",
              },
              {
                value: 172.6,
                date: "28 Mayıs 14:00",
              },
              {
                value: 257.3,
                date: "28 Mayıs 14:05",
              },
              {
                value: 277,
                date: "28 Mayıs 14:10",
              },
              {
                value: 165.4,
                date: "28 Mayıs 14:15",
              },
              {
                value: 135.8,
                date: "28 Mayıs 14:20",
              },
              {
                value: 154.6,
                date: "28 Mayıs 14:25",
              },
              {
                value: 239.2,
                date: "28 Mayıs 14:30",
              },
              {
                value: 377.6,
                date: "28 Mayıs 14:35",
              },
              {
                value: 347.2,
                date: "28 Mayıs 14:40",
              },
              {
                value: 270.1,
                date: "28 Mayıs 14:45",
              },
              {
                value: 310.6,
                date: "28 Mayıs 14:50",
              },
              {
                value: 368.6,
                date: "28 Mayıs 14:55",
              },
              {
                value: 314.2,
                date: "28 Mayıs 15:00",
              },
              {
                value: 258,
                date: "28 Mayıs 15:05",
              },
              {
                value: 298.9,
                date: "28 Mayıs 15:10",
              },
              {
                value: 221.6,
                date: "28 Mayıs 15:15",
              },
              {
                value: 190.3,
                date: "28 Mayıs 15:20",
              },
              {
                value: 162.3,
                date: "28 Mayıs 15:25",
              },
              {
                value: 194.4,
                date: "28 Mayıs 15:30",
              },
              {
                value: 199.4,
                date: "28 Mayıs 15:35",
              },
              {
                value: 258,
                date: "28 Mayıs 15:40",
              },
              {
                value: 256,
                date: "28 Mayıs 15:45",
              },
              {
                value: 232.4,
                date: "28 Mayıs 15:50",
              },
              {
                value: 191.7,
                date: "28 Mayıs 15:55",
              },
              {
                value: 143.2,
                date: "28 Mayıs 16:00",
              },
              {
                value: 230.8,
                date: "28 Mayıs 16:05",
              },
              {
                value: 124.4,
                date: "28 Mayıs 16:10",
              },
              {
                value: 116.5,
                date: "28 Mayıs 16:15",
              },
              {
                value: 136.5,
                date: "28 Mayıs 16:20",
              },
              {
                value: 123.3,
                date: "28 Mayıs 16:25",
              },
              {
                value: 160.8,
                date: "28 Mayıs 16:30",
              },
              {
                value: 110.2,
                date: "28 Mayıs 16:35",
              },
              {
                value: 179.6,
                date: "28 Mayıs 16:40",
              },
              {
                value: 130.7,
                date: "28 Mayıs 16:45",
              },
              {
                value: 119.2,
                date: "28 Mayıs 16:50",
              },
              {
                value: 125.4,
                date: "28 Mayıs 16:55",
              },
              {
                value: 118.2,
                date: "28 Mayıs 17:00",
              },
              {
                value: 172.6,
                date: "28 Mayıs 17:05",
              },
              {
                value: 178.2,
                date: "28 Mayıs 17:10",
              },
              {
                value: 253.4,
                date: "28 Mayıs 17:15",
              },
              {
                value: 405.7,
                date: "28 Mayıs 17:20",
              },
              {
                value: 261.4,
                date: "28 Mayıs 17:25",
              },
              {
                value: 160.1,
                date: "28 Mayıs 17:30",
              },
              {
                value: 109.8,
                date: "28 Mayıs 17:35",
              },
              {
                value: 158.7,
                date: "28 Mayıs 17:40",
              },
              {
                value: 213.9,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 0,
                avg: 27.75,
                max: 383.8,
                date: "28 Nisan 23",
              },
              {
                min: 0,
                avg: 179.7,
                max: 791,
                date: "29 Nisan 23",
              },
              {
                min: 0,
                avg: 166.16,
                max: 664.1,
                date: "30 Nisan 23",
              },
              {
                min: 0,
                avg: 178.38,
                max: 745.6,
                date: "01 Mayıs 23",
              },
              {
                min: 0,
                avg: 164.57,
                max: 741.5,
                date: "02 Mayıs 23",
              },
              {
                min: 0,
                avg: 115.36,
                max: 580.7,
                date: "03 Mayıs 23",
              },
              {
                min: 0,
                avg: 160.81,
                max: 714.3,
                date: "04 Mayıs 23",
              },
              {
                min: 0,
                avg: 44.09,
                max: 277,
                date: "05 Mayıs 23",
              },
              {
                min: 0,
                avg: 166.53,
                max: 692.9,
                date: "06 Mayıs 23",
              },
              {
                min: 0,
                avg: 192.01,
                max: 774.6,
                date: "07 Mayıs 23",
              },
              {
                min: 0,
                avg: 202.23,
                max: 719.3,
                date: "08 Mayıs 23",
              },
              {
                min: 0,
                avg: 135.54,
                max: 614.7,
                date: "09 Mayıs 23",
              },
              {
                min: 0,
                avg: 143.51,
                max: 749.9,
                date: "10 Mayıs 23",
              },
              {
                min: 0,
                avg: 134.1,
                max: 647.5,
                date: "11 Mayıs 23",
              },
              {
                min: 0,
                avg: 72.11,
                max: 336.1,
                date: "12 Mayıs 23",
              },
              {
                min: 0,
                avg: 202.92,
                max: 717.6,
                date: "13 Mayıs 23",
              },
              {
                min: 0,
                avg: 140.55,
                max: 753.3,
                date: "14 Mayıs 23",
              },
              {
                min: 0,
                avg: 188.08,
                max: 633.5,
                date: "15 Mayıs 23",
              },
              {
                min: 0,
                avg: 130.07,
                max: 559.8,
                date: "16 Mayıs 23",
              },
              {
                min: 0,
                avg: 211.65,
                max: 629.5,
                date: "17 Mayıs 23",
              },
              {
                min: 0,
                avg: 172.33,
                max: 657.6,
                date: "18 Mayıs 23",
              },
              {
                min: 0,
                avg: 166.28,
                max: 638.8,
                date: "19 Mayıs 23",
              },
              {
                min: 0,
                avg: 179.96,
                max: 698.8,
                date: "20 Mayıs 23",
              },
              {
                min: 0,
                avg: 182.03,
                max: 701,
                date: "21 Mayıs 23",
              },
              {
                min: 0,
                avg: 150.62,
                max: 663.4,
                date: "22 Mayıs 23",
              },
              {
                min: 0,
                avg: 179.37,
                max: 782,
                date: "23 Mayıs 23",
              },
              {
                min: 0,
                avg: 145.1,
                max: 669.5,
                date: "24 Mayıs 23",
              },
              {
                min: 0,
                avg: 209.69,
                max: 702.2,
                date: "25 Mayıs 23",
              },
              {
                min: 0,
                avg: 214.49,
                max: 697.1,
                date: "26 Mayıs 23",
              },
              {
                min: 0,
                avg: 214.58,
                max: 698.9,
                date: "27 Mayıs 23",
              },
              {
                min: 0,
                avg: 155.69,
                max: 407.5,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 0,
                avg: 124.31,
                max: 3713,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: 0,
                avg: 79.32,
                max: 438,
                date: "6 - 12 Şubat",
              },
              {
                min: 0,
                avg: 116.94,
                max: 631.9,
                date: "13 - 19 Şubat",
              },
              {
                min: 0,
                avg: 94.27,
                max: 635.9,
                date: "20 - 26 Şubat",
              },
              {
                min: 0,
                avg: 77.68,
                max: 720,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 0,
                avg: 114.34,
                max: 745.6,
                date: "6 - 12 Mart",
              },
              {
                min: 0,
                avg: 90.82,
                max: 723.2,
                date: "13 - 19 Mart",
              },
              {
                min: 0,
                avg: 136.63,
                max: 754.6,
                date: "20 - 26 Mart",
              },
              {
                min: 0,
                avg: 122.29,
                max: 713.8,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 0,
                avg: 130.72,
                max: 647.8,
                date: "3 - 9 Nisan",
              },
              {
                min: 0,
                avg: 129.68,
                max: 798.2,
                date: "10 - 16 Nisan",
              },
              {
                min: 0,
                avg: 171.1,
                max: 817.2,
                date: "17 - 23 Nisan",
              },
              {
                min: 0,
                avg: 155.85,
                max: 791,
                date: "24 - 30 Nisan",
              },
              {
                min: 0,
                avg: 150.23,
                max: 774.6,
                date: "1 - 7 Mayıs",
              },
              {
                min: 0,
                avg: 146.62,
                max: 753.3,
                date: "8 - 14 Mayıs",
              },
              {
                min: 0,
                avg: 174.13,
                max: 782,
                date: "15 - 21 Mayıs",
              },
              {
                min: 0,
                avg: 186.54,
                max: 702.2,
                date: "22 - 28 Mayıs",
              },
            ],
          },
        ],
      },
      {
        sektor_name: "Sektör-3",
        sensor_list: [
          {
            sensor_name: "Sıcaklık-sensörüm",
            sensor_type: "Hava Sıcaklığı",
            unit: "°C",
            minutely: [
              {
                value: 16,
                date: "28 Mayıs 05:50",
              },
              {
                value: 16,
                date: "28 Mayıs 05:55",
              },
              {
                value: 16,
                date: "28 Mayıs 06:00",
              },
              {
                value: 16,
                date: "28 Mayıs 06:05",
              },
              {
                value: 16.1,
                date: "28 Mayıs 06:10",
              },
              {
                value: 16.1,
                date: "28 Mayıs 06:15",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:20",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:25",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:30",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:35",
              },
              {
                value: 16.7,
                date: "28 Mayıs 06:40",
              },
              {
                value: 17,
                date: "28 Mayıs 06:50",
              },
              {
                value: 17.2,
                date: "28 Mayıs 06:55",
              },
              {
                value: 17.5,
                date: "28 Mayıs 07:00",
              },
              {
                value: 17.7,
                date: "28 Mayıs 07:05",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:10",
              },
              {
                value: 18.1,
                date: "28 Mayıs 07:15",
              },
              {
                value: 18.3,
                date: "28 Mayıs 07:20",
              },
              {
                value: 18.6,
                date: "28 Mayıs 07:25",
              },
              {
                value: 18.9,
                date: "28 Mayıs 07:30",
              },
              {
                value: 19.2,
                date: "28 Mayıs 07:35",
              },
              {
                value: 19.5,
                date: "28 Mayıs 07:40",
              },
              {
                value: 19.8,
                date: "28 Mayıs 07:45",
              },
              {
                value: 20.3,
                date: "28 Mayıs 07:50",
              },
              {
                value: 20.8,
                date: "28 Mayıs 07:55",
              },
              {
                value: 21.4,
                date: "28 Mayıs 08:00",
              },
              {
                value: 21.9,
                date: "28 Mayıs 08:05",
              },
              {
                value: 21.9,
                date: "28 Mayıs 08:10",
              },
              {
                value: 22,
                date: "28 Mayıs 08:15",
              },
              {
                value: 21.5,
                date: "28 Mayıs 08:20",
              },
              {
                value: 21.6,
                date: "28 Mayıs 08:25",
              },
              {
                value: 21.8,
                date: "28 Mayıs 08:30",
              },
              {
                value: 21.8,
                date: "28 Mayıs 08:35",
              },
              {
                value: 21.9,
                date: "28 Mayıs 08:40",
              },
              {
                value: 21.5,
                date: "28 Mayıs 08:45",
              },
              {
                value: 21.3,
                date: "28 Mayıs 08:50",
              },
              {
                value: 21.6,
                date: "28 Mayıs 08:55",
              },
              {
                value: 22,
                date: "28 Mayıs 09:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 09:05",
              },
              {
                value: 23.3,
                date: "28 Mayıs 09:10",
              },
              {
                value: 23.9,
                date: "28 Mayıs 09:15",
              },
              {
                value: 24.1,
                date: "28 Mayıs 09:20",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:25",
              },
              {
                value: 23.4,
                date: "28 Mayıs 09:30",
              },
              {
                value: 24,
                date: "28 Mayıs 09:35",
              },
              {
                value: 24.3,
                date: "28 Mayıs 09:40",
              },
              {
                value: 23.1,
                date: "28 Mayıs 09:45",
              },
              {
                value: 22.4,
                date: "28 Mayıs 09:50",
              },
              {
                value: 22.1,
                date: "28 Mayıs 09:55",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:00",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:05",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:10",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:15",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:20",
              },
              {
                value: 22,
                date: "28 Mayıs 10:25",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:30",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:35",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:40",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:45",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:50",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:55",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:00",
              },
              {
                value: 22,
                date: "28 Mayıs 11:05",
              },
              {
                value: 21.8,
                date: "28 Mayıs 11:10",
              },
              {
                value: 21.8,
                date: "28 Mayıs 11:15",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:20",
              },
              {
                value: 22.3,
                date: "28 Mayıs 11:25",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:30",
              },
              {
                value: 22.5,
                date: "28 Mayıs 11:35",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:40",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:45",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:50",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:55",
              },
              {
                value: 22.7,
                date: "28 Mayıs 12:00",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:05",
              },
              {
                value: 23.6,
                date: "28 Mayıs 12:10",
              },
              {
                value: 24,
                date: "28 Mayıs 12:15",
              },
              {
                value: 23.7,
                date: "28 Mayıs 12:20",
              },
              {
                value: 23.3,
                date: "28 Mayıs 12:25",
              },
              {
                value: 23,
                date: "28 Mayıs 12:30",
              },
              {
                value: 23,
                date: "28 Mayıs 12:35",
              },
              {
                value: 23,
                date: "28 Mayıs 12:40",
              },
              {
                value: 23,
                date: "28 Mayıs 12:45",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:50",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:55",
              },
              {
                value: 22.8,
                date: "28 Mayıs 13:00",
              },
              {
                value: 23,
                date: "28 Mayıs 13:05",
              },
              {
                value: 23.6,
                date: "28 Mayıs 13:10",
              },
              {
                value: 23.5,
                date: "28 Mayıs 13:15",
              },
              {
                value: 22.9,
                date: "28 Mayıs 13:20",
              },
              {
                value: 22.8,
                date: "28 Mayıs 13:25",
              },
              {
                value: 22.5,
                date: "28 Mayıs 13:30",
              },
              {
                value: 22.3,
                date: "28 Mayıs 13:35",
              },
              {
                value: 22.1,
                date: "28 Mayıs 13:40",
              },
              {
                value: 22,
                date: "28 Mayıs 13:45",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:50",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:55",
              },
              {
                value: 22.4,
                date: "28 Mayıs 14:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:05",
              },
              {
                value: 22.9,
                date: "28 Mayıs 14:10",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:15",
              },
              {
                value: 22.2,
                date: "28 Mayıs 14:20",
              },
              {
                value: 21.9,
                date: "28 Mayıs 14:25",
              },
              {
                value: 22.1,
                date: "28 Mayıs 14:30",
              },
              {
                value: 23,
                date: "28 Mayıs 14:35",
              },
              {
                value: 23.8,
                date: "28 Mayıs 14:40",
              },
              {
                value: 24.9,
                date: "28 Mayıs 14:45",
              },
              {
                value: 26.1,
                date: "28 Mayıs 14:50",
              },
              {
                value: 27.5,
                date: "28 Mayıs 14:55",
              },
              {
                value: 28.4,
                date: "28 Mayıs 15:00",
              },
              {
                value: 28.8,
                date: "28 Mayıs 15:05",
              },
              {
                value: 29.1,
                date: "28 Mayıs 15:10",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:15",
              },
              {
                value: 27.8,
                date: "28 Mayıs 15:20",
              },
              {
                value: 25.8,
                date: "28 Mayıs 15:25",
              },
              {
                value: 24.7,
                date: "28 Mayıs 15:30",
              },
              {
                value: 24.4,
                date: "28 Mayıs 15:35",
              },
              {
                value: 24.3,
                date: "28 Mayıs 15:40",
              },
              {
                value: 24.3,
                date: "28 Mayıs 15:45",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:50",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:55",
              },
              {
                value: 23.3,
                date: "28 Mayıs 16:00",
              },
              {
                value: 23.4,
                date: "28 Mayıs 16:05",
              },
              {
                value: 23.3,
                date: "28 Mayıs 16:10",
              },
              {
                value: 23,
                date: "28 Mayıs 16:15",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:20",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:25",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:30",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:35",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:40",
              },
              {
                value: 23,
                date: "28 Mayıs 16:45",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:50",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:55",
              },
              {
                value: 22.8,
                date: "28 Mayıs 17:00",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:05",
              },
              {
                value: 23.4,
                date: "28 Mayıs 17:10",
              },
              {
                value: 23.8,
                date: "28 Mayıs 17:15",
              },
              {
                value: 25.3,
                date: "28 Mayıs 17:20",
              },
              {
                value: 25.8,
                date: "28 Mayıs 17:25",
              },
              {
                value: 25.1,
                date: "28 Mayıs 17:30",
              },
              {
                value: 24.1,
                date: "28 Mayıs 17:35",
              },
              {
                value: 23.7,
                date: "28 Mayıs 17:40",
              },
              {
                value: 24,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 10.1,
                avg: 13.29,
                max: 23.2,
                date: "28 Nisan 23",
              },
              {
                min: 8,
                avg: 16.62,
                max: 26.3,
                date: "29 Nisan 23",
              },
              {
                min: 12.6,
                avg: 17.81,
                max: 26.3,
                date: "30 Nisan 23",
              },
              {
                min: 11.8,
                avg: 19.53,
                max: 30.4,
                date: "01 Mayıs 23",
              },
              {
                min: 14.1,
                avg: 19.7,
                max: 27.5,
                date: "02 Mayıs 23",
              },
              {
                min: 13.6,
                avg: 18.55,
                max: 27.1,
                date: "03 Mayıs 23",
              },
              {
                min: 14.5,
                avg: 20.65,
                max: 29.9,
                date: "04 Mayıs 23",
              },
              {
                min: 12.7,
                avg: 16.42,
                max: 22.9,
                date: "05 Mayıs 23",
              },
              {
                min: 13,
                avg: 18.55,
                max: 27,
                date: "06 Mayıs 23",
              },
              {
                min: 12.5,
                avg: 19.8,
                max: 29.3,
                date: "07 Mayıs 23",
              },
              {
                min: 13,
                avg: 19.9,
                max: 29.5,
                date: "08 Mayıs 23",
              },
              {
                min: 12.8,
                avg: 18.05,
                max: 26.9,
                date: "09 Mayıs 23",
              },
              {
                min: 12.6,
                avg: 17.44,
                max: 26.5,
                date: "10 Mayıs 23",
              },
              {
                min: 13.1,
                avg: 17.3,
                max: 24.6,
                date: "11 Mayıs 23",
              },
              {
                min: 12.2,
                avg: 15.89,
                max: 23.6,
                date: "12 Mayıs 23",
              },
              {
                min: 8.3,
                avg: 17.68,
                max: 27.1,
                date: "13 Mayıs 23",
              },
              {
                min: 7.8,
                avg: 17.01,
                max: 27.2,
                date: "14 Mayıs 23",
              },
              {
                min: 12.7,
                avg: 21.71,
                max: 33.4,
                date: "15 Mayıs 23",
              },
              {
                min: 14.8,
                avg: 21.06,
                max: 29.9,
                date: "16 Mayıs 23",
              },
              {
                min: 16.8,
                avg: 23.06,
                max: 34.7,
                date: "17 Mayıs 23",
              },
              {
                min: 15.5,
                avg: 20.4,
                max: 27,
                date: "18 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 19.94,
                max: 30.3,
                date: "19 Mayıs 23",
              },
              {
                min: 11.8,
                avg: 20.26,
                max: 30.2,
                date: "20 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 20.16,
                max: 29.2,
                date: "21 Mayıs 23",
              },
              {
                min: 13.4,
                avg: 19.91,
                max: 29.1,
                date: "22 Mayıs 23",
              },
              {
                min: 13.2,
                avg: 20.91,
                max: 30,
                date: "23 Mayıs 23",
              },
              {
                min: 13.7,
                avg: 20.8,
                max: 31.5,
                date: "24 Mayıs 23",
              },
              {
                min: 12.6,
                avg: 21.59,
                max: 31.3,
                date: "25 Mayıs 23",
              },
              {
                min: 13.6,
                avg: 22.12,
                max: 32,
                date: "26 Mayıs 23",
              },
              {
                min: 15,
                avg: 22.24,
                max: 32,
                date: "27 Mayıs 23",
              },
              {
                min: 15.9,
                avg: 21.02,
                max: 29.2,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 14.8,
                avg: 15.18,
                max: 15.5,
                date: "9 - 15 Ocak",
              },
              {
                min: 9.5,
                avg: 18.04,
                max: 28.4,
                date: "16 - 22 Ocak",
              },
              {
                min: 9.1,
                avg: 15.18,
                max: 25.2,
                date: "23 - 29 Ocak",
              },
              {
                min: 7,
                avg: 13.47,
                max: 26.3,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: 7.6,
                avg: 13.96,
                max: 29.3,
                date: "6 - 12 Şubat",
              },
              {
                min: 10.1,
                avg: 16.99,
                max: 25.4,
                date: "13 - 19 Şubat",
              },
              {
                min: 10.3,
                avg: 16.89,
                max: 29.8,
                date: "20 - 26 Şubat",
              },
              {
                min: 9.9,
                avg: 16.03,
                max: 26,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 6.9,
                avg: 15.72,
                max: 26.7,
                date: "6 - 12 Mart",
              },
              {
                min: 8.2,
                avg: 15.13,
                max: 29.1,
                date: "13 - 19 Mart",
              },
              {
                min: 8.9,
                avg: 16.94,
                max: 27.5,
                date: "20 - 26 Mart",
              },
              {
                min: 5.7,
                avg: 17.22,
                max: 28.8,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 6.7,
                avg: 16.74,
                max: 28.4,
                date: "3 - 9 Nisan",
              },
              {
                min: 6.8,
                avg: 18.77,
                max: 44.3,
                date: "10 - 16 Nisan",
              },
              {
                min: 11.3,
                avg: 19,
                max: 28,
                date: "17 - 23 Nisan",
              },
              {
                min: 8,
                avg: 17.73,
                max: 30.4,
                date: "24 - 30 Nisan",
              },
              {
                min: 12.5,
                avg: 18.85,
                max: 29.9,
                date: "1 - 7 Mayıs",
              },
              {
                min: 7.8,
                avg: 18.71,
                max: 34.7,
                date: "8 - 14 Mayıs",
              },
              {
                min: 11.8,
                avg: 20.49,
                max: 31.5,
                date: "15 - 21 Mayıs",
              },
              {
                min: 12.6,
                avg: 21.47,
                max: 32,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "nemim hava sens.",
            sensor_type: "Hava Nemi",
            unit: "%",
            minutely: [
              {
                value: 90.8,
                date: "28 Mayıs 05:48",
              },
              {
                value: 90,
                date: "28 Mayıs 05:53",
              },
              {
                value: 90.4,
                date: "28 Mayıs 05:58",
              },
              {
                value: 90.1,
                date: "28 Mayıs 06:03",
              },
              {
                value: 90.1,
                date: "28 Mayıs 06:08",
              },
              {
                value: 90,
                date: "28 Mayıs 06:13",
              },
              {
                value: 89.8,
                date: "28 Mayıs 06:18",
              },
              {
                value: 89.4,
                date: "28 Mayıs 06:23",
              },
              {
                value: 89.2,
                date: "28 Mayıs 06:28",
              },
              {
                value: 88.6,
                date: "28 Mayıs 06:33",
              },
              {
                value: 85.6,
                date: "28 Mayıs 06:38",
              },
              {
                value: 83.7,
                date: "28 Mayıs 06:43",
              },
              {
                value: 82.4,
                date: "28 Mayıs 06:48",
              },
              {
                value: 81.1,
                date: "28 Mayıs 06:53",
              },
              {
                value: 80.1,
                date: "28 Mayıs 06:58",
              },
              {
                value: 82.7,
                date: "28 Mayıs 07:03",
              },
              {
                value: 83.8,
                date: "28 Mayıs 07:08",
              },
              {
                value: 84.8,
                date: "28 Mayıs 07:13",
              },
              {
                value: 84.9,
                date: "28 Mayıs 07:18",
              },
              {
                value: 84.5,
                date: "28 Mayıs 07:23",
              },
              {
                value: 83.7,
                date: "28 Mayıs 07:28",
              },
              {
                value: 83.4,
                date: "28 Mayıs 07:33",
              },
              {
                value: 82.6,
                date: "28 Mayıs 07:38",
              },
              {
                value: 82.7,
                date: "28 Mayıs 07:43",
              },
              {
                value: 82.2,
                date: "28 Mayıs 07:48",
              },
              {
                value: 81.4,
                date: "28 Mayıs 07:53",
              },
              {
                value: 81.4,
                date: "28 Mayıs 07:58",
              },
              {
                value: 80.7,
                date: "28 Mayıs 08:03",
              },
              {
                value: 79.7,
                date: "28 Mayıs 08:08",
              },
              {
                value: 78.6,
                date: "28 Mayıs 08:13",
              },
              {
                value: 76.4,
                date: "28 Mayıs 08:18",
              },
              {
                value: 76.6,
                date: "28 Mayıs 08:23",
              },
              {
                value: 70.1,
                date: "28 Mayıs 08:28",
              },
              {
                value: 67.1,
                date: "28 Mayıs 08:33",
              },
              {
                value: 70.9,
                date: "28 Mayıs 08:38",
              },
              {
                value: 70.1,
                date: "28 Mayıs 08:43",
              },
              {
                value: 73.3,
                date: "28 Mayıs 08:48",
              },
              {
                value: 70.8,
                date: "28 Mayıs 08:53",
              },
              {
                value: 70.6,
                date: "28 Mayıs 08:58",
              },
              {
                value: 65.3,
                date: "28 Mayıs 09:03",
              },
              {
                value: 63.1,
                date: "28 Mayıs 09:08",
              },
              {
                value: 61.9,
                date: "28 Mayıs 09:13",
              },
              {
                value: 60.8,
                date: "28 Mayıs 09:18",
              },
              {
                value: 64.3,
                date: "28 Mayıs 09:23",
              },
              {
                value: 64.6,
                date: "28 Mayıs 09:28",
              },
              {
                value: 63.6,
                date: "28 Mayıs 09:33",
              },
              {
                value: 58.5,
                date: "28 Mayıs 09:38",
              },
              {
                value: 66.5,
                date: "28 Mayıs 09:43",
              },
              {
                value: 67.3,
                date: "28 Mayıs 09:48",
              },
              {
                value: 69.3,
                date: "28 Mayıs 09:53",
              },
              {
                value: 69.7,
                date: "28 Mayıs 09:58",
              },
              {
                value: 70.3,
                date: "28 Mayıs 10:03",
              },
              {
                value: 69.2,
                date: "28 Mayıs 10:08",
              },
              {
                value: 69.9,
                date: "28 Mayıs 10:13",
              },
              {
                value: 69.7,
                date: "28 Mayıs 10:18",
              },
              {
                value: 68.9,
                date: "28 Mayıs 10:23",
              },
              {
                value: 66,
                date: "28 Mayıs 10:28",
              },
              {
                value: 65.8,
                date: "28 Mayıs 10:33",
              },
              {
                value: 66.2,
                date: "28 Mayıs 10:38",
              },
              {
                value: 66.2,
                date: "28 Mayıs 10:43",
              },
              {
                value: 65.2,
                date: "28 Mayıs 10:48",
              },
              {
                value: 66.1,
                date: "28 Mayıs 10:53",
              },
              {
                value: 66.3,
                date: "28 Mayıs 10:58",
              },
              {
                value: 66.1,
                date: "28 Mayıs 11:03",
              },
              {
                value: 66.8,
                date: "28 Mayıs 11:08",
              },
              {
                value: 66.6,
                date: "28 Mayıs 11:13",
              },
              {
                value: 65.3,
                date: "28 Mayıs 11:18",
              },
              {
                value: 64.9,
                date: "28 Mayıs 11:23",
              },
              {
                value: 65.2,
                date: "28 Mayıs 11:28",
              },
              {
                value: 65,
                date: "28 Mayıs 11:33",
              },
              {
                value: 64.7,
                date: "28 Mayıs 11:38",
              },
              {
                value: 64.9,
                date: "28 Mayıs 11:43",
              },
              {
                value: 64.8,
                date: "28 Mayıs 11:48",
              },
              {
                value: 65.3,
                date: "28 Mayıs 11:53",
              },
              {
                value: 63.3,
                date: "28 Mayıs 11:58",
              },
              {
                value: 63.2,
                date: "28 Mayıs 12:03",
              },
              {
                value: 62,
                date: "28 Mayıs 12:08",
              },
              {
                value: 61.5,
                date: "28 Mayıs 12:13",
              },
              {
                value: 62.7,
                date: "28 Mayıs 12:18",
              },
              {
                value: 64,
                date: "28 Mayıs 12:23",
              },
              {
                value: 64.6,
                date: "28 Mayıs 12:28",
              },
              {
                value: 65.2,
                date: "28 Mayıs 12:33",
              },
              {
                value: 65,
                date: "28 Mayıs 12:38",
              },
              {
                value: 65.1,
                date: "28 Mayıs 12:43",
              },
              {
                value: 65.2,
                date: "28 Mayıs 12:48",
              },
              {
                value: 65.5,
                date: "28 Mayıs 12:53",
              },
              {
                value: 66.3,
                date: "28 Mayıs 12:58",
              },
              {
                value: 66.9,
                date: "28 Mayıs 13:03",
              },
              {
                value: 65.9,
                date: "28 Mayıs 13:08",
              },
              {
                value: 65.8,
                date: "28 Mayıs 13:13",
              },
              {
                value: 66.5,
                date: "28 Mayıs 13:18",
              },
              {
                value: 66.8,
                date: "28 Mayıs 13:23",
              },
              {
                value: 67.3,
                date: "28 Mayıs 13:28",
              },
              {
                value: 68.3,
                date: "28 Mayıs 13:33",
              },
              {
                value: 68.4,
                date: "28 Mayıs 13:38",
              },
              {
                value: 68.3,
                date: "28 Mayıs 13:43",
              },
              {
                value: 68.5,
                date: "28 Mayıs 13:48",
              },
              {
                value: 67.6,
                date: "28 Mayıs 13:53",
              },
              {
                value: 67.5,
                date: "28 Mayıs 13:58",
              },
              {
                value: 67.1,
                date: "28 Mayıs 14:03",
              },
              {
                value: 66.1,
                date: "28 Mayıs 14:08",
              },
              {
                value: 66.1,
                date: "28 Mayıs 14:13",
              },
              {
                value: 68.8,
                date: "28 Mayıs 14:18",
              },
              {
                value: 69.3,
                date: "28 Mayıs 14:23",
              },
              {
                value: 69.6,
                date: "28 Mayıs 14:28",
              },
              {
                value: 68.8,
                date: "28 Mayıs 14:33",
              },
              {
                value: 66,
                date: "28 Mayıs 14:38",
              },
              {
                value: 65.7,
                date: "28 Mayıs 14:43",
              },
              {
                value: 65.6,
                date: "28 Mayıs 14:48",
              },
              {
                value: 64.2,
                date: "28 Mayıs 14:53",
              },
              {
                value: 63.8,
                date: "28 Mayıs 14:58",
              },
              {
                value: 64.1,
                date: "28 Mayıs 15:03",
              },
              {
                value: 64.9,
                date: "28 Mayıs 15:08",
              },
              {
                value: 64.3,
                date: "28 Mayıs 15:13",
              },
              {
                value: 65.4,
                date: "28 Mayıs 15:18",
              },
              {
                value: 67.2,
                date: "28 Mayıs 15:23",
              },
              {
                value: 68.2,
                date: "28 Mayıs 15:28",
              },
              {
                value: 66.9,
                date: "28 Mayıs 15:33",
              },
              {
                value: 66.8,
                date: "28 Mayıs 15:38",
              },
              {
                value: 65.7,
                date: "28 Mayıs 15:43",
              },
              {
                value: 67,
                date: "28 Mayıs 15:48",
              },
              {
                value: 66.8,
                date: "28 Mayıs 15:53",
              },
              {
                value: 67.2,
                date: "28 Mayıs 15:58",
              },
              {
                value: 67.7,
                date: "28 Mayıs 16:03",
              },
              {
                value: 67,
                date: "28 Mayıs 16:08",
              },
              {
                value: 67.8,
                date: "28 Mayıs 16:13",
              },
              {
                value: 68.9,
                date: "28 Mayıs 16:18",
              },
              {
                value: 68.6,
                date: "28 Mayıs 16:23",
              },
              {
                value: 68.9,
                date: "28 Mayıs 16:28",
              },
              {
                value: 68.7,
                date: "28 Mayıs 16:33",
              },
              {
                value: 68.6,
                date: "28 Mayıs 16:38",
              },
              {
                value: 67.9,
                date: "28 Mayıs 16:43",
              },
              {
                value: 68.1,
                date: "28 Mayıs 16:48",
              },
              {
                value: 67.4,
                date: "28 Mayıs 16:53",
              },
              {
                value: 67.3,
                date: "28 Mayıs 16:58",
              },
              {
                value: 67.6,
                date: "28 Mayıs 17:03",
              },
              {
                value: 66.7,
                date: "28 Mayıs 17:10",
              },
              {
                value: 66.2,
                date: "28 Mayıs 17:13",
              },
              {
                value: 64.8,
                date: "28 Mayıs 17:18",
              },
              {
                value: 64.1,
                date: "28 Mayıs 17:23",
              },
              {
                value: 64.8,
                date: "28 Mayıs 17:28",
              },
              {
                value: 66.7,
                date: "28 Mayıs 17:33",
              },
              {
                value: 67.2,
                date: "28 Mayıs 17:38",
              },
              {
                value: 67.2,
                date: "28 Mayıs 17:43",
              },
            ],
            daily: [
              {
                min: 41.6,
                avg: 75.09,
                max: 90.9,
                date: "28 Nisan 23",
              },
              {
                min: 31.6,
                avg: 67.37,
                max: 96.1,
                date: "29 Nisan 23",
              },
              {
                min: 36.3,
                avg: 73.28,
                max: 93.9,
                date: "30 Nisan 23",
              },
              {
                min: 32.9,
                avg: 62.72,
                max: 92.7,
                date: "01 Mayıs 23",
              },
              {
                min: 44.5,
                avg: 58.45,
                max: 78.3,
                date: "02 Mayıs 23",
              },
              {
                min: 48.9,
                avg: 75.61,
                max: 99.2,
                date: "03 Mayıs 23",
              },
              {
                min: 58.4,
                avg: 85.43,
                max: 100,
                date: "04 Mayıs 23",
              },
              {
                min: 66.1,
                avg: 86.43,
                max: 100,
                date: "05 Mayıs 23",
              },
              {
                min: 46,
                avg: 70.91,
                max: 93.3,
                date: "06 Mayıs 23",
              },
              {
                min: 45.7,
                avg: 70.42,
                max: 96.6,
                date: "07 Mayıs 23",
              },
              {
                min: 48.3,
                avg: 68.56,
                max: 91.2,
                date: "08 Mayıs 23",
              },
              {
                min: 51.3,
                avg: 74.67,
                max: 93.7,
                date: "09 Mayıs 23",
              },
              {
                min: 52.6,
                avg: 73.18,
                max: 90.1,
                date: "10 Mayıs 23",
              },
              {
                min: 53.7,
                avg: 72.59,
                max: 91.7,
                date: "11 Mayıs 23",
              },
              {
                min: 59,
                avg: 76.4,
                max: 93.7,
                date: "12 Mayıs 23",
              },
              {
                min: 40.5,
                avg: 70.04,
                max: 97.3,
                date: "13 Mayıs 23",
              },
              {
                min: 50.5,
                avg: 71.49,
                max: 90.6,
                date: "14 Mayıs 23",
              },
              {
                min: 40.8,
                avg: 65.07,
                max: 89,
                date: "15 Mayıs 23",
              },
              {
                min: 54.3,
                avg: 73.79,
                max: 90.1,
                date: "16 Mayıs 23",
              },
              {
                min: 54.5,
                avg: 77.22,
                max: 97.9,
                date: "17 Mayıs 23",
              },
              {
                min: 55.6,
                avg: 74.79,
                max: 92.4,
                date: "18 Mayıs 23",
              },
              {
                min: 44.9,
                avg: 81.64,
                max: 100,
                date: "19 Mayıs 23",
              },
              {
                min: 47.4,
                avg: 73.57,
                max: 100,
                date: "20 Mayıs 23",
              },
              {
                min: 51,
                avg: 74.63,
                max: 97.6,
                date: "21 Mayıs 23",
              },
              {
                min: 45.1,
                avg: 72.03,
                max: 92.7,
                date: "22 Mayıs 23",
              },
              {
                min: 51.9,
                avg: 73.24,
                max: 97,
                date: "23 Mayıs 23",
              },
              {
                min: 48.6,
                avg: 74.62,
                max: 97.6,
                date: "24 Mayıs 23",
              },
              {
                min: 43.8,
                avg: 69.12,
                max: 94.9,
                date: "25 Mayıs 23",
              },
              {
                min: 47.2,
                avg: 69.74,
                max: 95,
                date: "26 Mayıs 23",
              },
              {
                min: 51.8,
                avg: 72.91,
                max: 94.9,
                date: "27 Mayıs 23",
              },
              {
                min: 58.5,
                avg: 73.94,
                max: 92.1,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 97.3,
                avg: 97.64,
                max: 97.9,
                date: "9 - 15 Ocak",
              },
              {
                min: 52.3,
                avg: 75.33,
                max: 96.3,
                date: "16 - 22 Ocak",
              },
              {
                min: 35.8,
                avg: 70.08,
                max: 89.7,
                date: "23 - 29 Ocak",
              },
              {
                min: 39.9,
                avg: 69.28,
                max: 95.7,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: 33.2,
                avg: 67.77,
                max: 92,
                date: "6 - 12 Şubat",
              },
              {
                min: 26.6,
                avg: 71.66,
                max: 95.9,
                date: "13 - 19 Şubat",
              },
              {
                min: 42.8,
                avg: 73.86,
                max: 98.1,
                date: "20 - 26 Şubat",
              },
              {
                min: 53.9,
                avg: 86.25,
                max: 99.4,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 31,
                avg: 72.88,
                max: 98.5,
                date: "6 - 12 Mart",
              },
              {
                min: 47.8,
                avg: 80.39,
                max: 98.5,
                date: "13 - 19 Mart",
              },
              {
                min: 29.2,
                avg: 75.62,
                max: 98.4,
                date: "20 - 26 Mart",
              },
              {
                min: 26.9,
                avg: 73.75,
                max: 99.3,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 46.8,
                avg: 80.58,
                max: 99,
                date: "3 - 9 Nisan",
              },
              {
                min: 35.3,
                avg: 76.24,
                max: 99.9,
                date: "10 - 16 Nisan",
              },
              {
                min: 34.8,
                avg: 75.48,
                max: 100,
                date: "17 - 23 Nisan",
              },
              {
                min: 31.6,
                avg: 70.5,
                max: 98.7,
                date: "24 - 30 Nisan",
              },
              {
                min: 45.7,
                avg: 75.72,
                max: 100,
                date: "1 - 7 Mayıs",
              },
              {
                min: 40.5,
                avg: 72.17,
                max: 97.3,
                date: "8 - 14 Mayıs",
              },
              {
                min: 44.9,
                avg: 74.86,
                max: 100,
                date: "15 - 21 Mayıs",
              },
              {
                min: 43.8,
                avg: 71.97,
                max: 95,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "ph probum",
            sensor_type: "pH",
            unit: "",
            minutely: [
              {
                value: 7,
                date: "28 Mayıs 05:50",
              },
              {
                value: 7,
                date: "28 Mayıs 05:55",
              },
              {
                value: 7,
                date: "28 Mayıs 06:00",
              },
              {
                value: 7,
                date: "28 Mayıs 06:05",
              },
              {
                value: 7,
                date: "28 Mayıs 06:10",
              },
              {
                value: 7,
                date: "28 Mayıs 06:15",
              },
              {
                value: 7,
                date: "28 Mayıs 06:20",
              },
              {
                value: 7,
                date: "28 Mayıs 06:25",
              },
              {
                value: 7,
                date: "28 Mayıs 06:30",
              },
              {
                value: 7,
                date: "28 Mayıs 06:35",
              },
              {
                value: 7,
                date: "28 Mayıs 06:40",
              },
              {
                value: 7,
                date: "28 Mayıs 06:50",
              },
              {
                value: 7,
                date: "28 Mayıs 06:55",
              },
              {
                value: 7,
                date: "28 Mayıs 07:00",
              },
              {
                value: 7,
                date: "28 Mayıs 07:05",
              },
              {
                value: 7,
                date: "28 Mayıs 07:10",
              },
              {
                value: 7,
                date: "28 Mayıs 07:15",
              },
              {
                value: 7,
                date: "28 Mayıs 07:20",
              },
              {
                value: 7,
                date: "28 Mayıs 07:25",
              },
              {
                value: 7,
                date: "28 Mayıs 07:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:25",
              },
              {
                value: 7,
                date: "28 Mayıs 14:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 16:00",
              },
              {
                value: 7,
                date: "28 Mayıs 16:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 16:10",
              },
              {
                value: 7,
                date: "28 Mayıs 16:15",
              },
              {
                value: 7,
                date: "28 Mayıs 16:20",
              },
              {
                value: 7,
                date: "28 Mayıs 16:25",
              },
              {
                value: 7,
                date: "28 Mayıs 16:30",
              },
              {
                value: 7,
                date: "28 Mayıs 16:35",
              },
              {
                value: 7,
                date: "28 Mayıs 16:40",
              },
              {
                value: 7,
                date: "28 Mayıs 16:45",
              },
              {
                value: 7,
                date: "28 Mayıs 16:50",
              },
              {
                value: 7,
                date: "28 Mayıs 16:55",
              },
              {
                value: 7,
                date: "28 Mayıs 17:00",
              },
              {
                value: 7,
                date: "28 Mayıs 17:05",
              },
              {
                value: 7,
                date: "28 Mayıs 17:10",
              },
              {
                value: 7,
                date: "28 Mayıs 17:15",
              },
              {
                value: 7,
                date: "28 Mayıs 17:20",
              },
              {
                value: 7,
                date: "28 Mayıs 17:25",
              },
              {
                value: 7,
                date: "28 Mayıs 17:30",
              },
              {
                value: 7,
                date: "28 Mayıs 17:35",
              },
              {
                value: 7,
                date: "28 Mayıs 17:40",
              },
              {
                value: 7,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 8.3,
                avg: 8.33,
                max: 8.4,
                date: "28 Nisan 23",
              },
              {
                min: 8.3,
                avg: 8.36,
                max: 8.4,
                date: "29 Nisan 23",
              },
              {
                min: 8.3,
                avg: 8.34,
                max: 8.4,
                date: "30 Nisan 23",
              },
              {
                min: 8.3,
                avg: 8.31,
                max: 8.4,
                date: "01 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.34,
                max: 7.4,
                date: "02 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.35,
                max: 7.4,
                date: "03 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.31,
                max: 7.4,
                date: "04 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.3,
                max: 7.4,
                date: "05 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.3,
                max: 7.4,
                date: "06 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.27,
                max: 7.3,
                date: "07 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.3,
                max: 7.4,
                date: "08 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.31,
                max: 7.4,
                date: "09 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.33,
                max: 7.4,
                date: "10 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.3,
                max: 7.3,
                date: "11 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.34,
                max: 7.4,
                date: "12 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.29,
                max: 7.4,
                date: "13 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.23,
                max: 7.3,
                date: "14 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.26,
                max: 7.3,
                date: "15 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 30.14,
                max: 6553.5,
                date: "16 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.33,
                max: 7.4,
                date: "17 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.32,
                max: 7.4,
                date: "18 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 30.08,
                max: 6553.5,
                date: "19 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 7.17,
                max: 7.3,
                date: "20 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 7.16,
                max: 7.9,
                date: "21 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 30.07,
                max: 6553.5,
                date: "22 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.25,
                max: 7.3,
                date: "23 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.3,
                max: 7.4,
                date: "24 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.27,
                max: 7.4,
                date: "25 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 7.18,
                max: 7.3,
                date: "26 Mayıs 23",
              },
              {
                min: 7,
                avg: 7.09,
                max: 7.2,
                date: "27 Mayıs 23",
              },
              {
                min: 7,
                avg: 7.06,
                max: 7.1,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 7,
                avg: 7.4,
                max: 8,
                date: "6 - 12 Şubat",
              },
              {
                min: 6.9,
                avg: 7.15,
                max: 7.4,
                date: "13 - 19 Şubat",
              },
              {
                min: 7.1,
                avg: 7.37,
                max: 7.6,
                date: "20 - 26 Şubat",
              },
              {
                min: 7.3,
                avg: 14.02,
                max: 6553.5,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 7.3,
                avg: 10.71,
                max: 6553.5,
                date: "6 - 12 Mart",
              },
              {
                min: 7.2,
                avg: 7.42,
                max: 7.5,
                date: "13 - 19 Mart",
              },
              {
                min: 7.3,
                avg: 17.25,
                max: 6553.5,
                date: "20 - 26 Mart",
              },
              {
                min: 7.3,
                avg: 7.41,
                max: 7.5,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 7.2,
                avg: 7.37,
                max: 7.5,
                date: "3 - 9 Nisan",
              },
              {
                min: 7.1,
                avg: 10.7,
                max: 6553.5,
                date: "10 - 16 Nisan",
              },
              {
                min: 7.2,
                avg: 10.64,
                max: 6553.5,
                date: "17 - 23 Nisan",
              },
              {
                min: 7.2,
                avg: 7.34,
                max: 7.5,
                date: "24 - 30 Nisan",
              },
              {
                min: 7.2,
                avg: 7.3,
                max: 7.4,
                date: "1 - 7 Mayıs",
              },
              {
                min: 7.2,
                avg: 10.57,
                max: 6553.5,
                date: "8 - 14 Mayıs",
              },
              {
                min: 7.1,
                avg: 14.3,
                max: 6553.5,
                date: "15 - 21 Mayıs",
              },
              {
                min: 7,
                avg: 7.17,
                max: 7.4,
                date: "22 - 28 Mayıs",
              },
            ],
          },
        ],
      },
      {
        sektor_name: "Sektör-4",
        sensor_list: [
          {
            sensor_name: "ısı sens1",
            sensor_type: "Hava Sıcaklığı",
            unit: "°C",
            minutely: [
              {
                value: 15.9,
                date: "28 Mayıs 05:48",
              },
              {
                value: 16,
                date: "28 Mayıs 05:53",
              },
              {
                value: 15.9,
                date: "28 Mayıs 05:58",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:03",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:08",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:13",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:18",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:23",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:28",
              },
              {
                value: 16.1,
                date: "28 Mayıs 06:33",
              },
              {
                value: 17,
                date: "28 Mayıs 06:38",
              },
              {
                value: 17.5,
                date: "28 Mayıs 06:43",
              },
              {
                value: 17.9,
                date: "28 Mayıs 06:48",
              },
              {
                value: 18.3,
                date: "28 Mayıs 06:53",
              },
              {
                value: 18.7,
                date: "28 Mayıs 06:58",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:03",
              },
              {
                value: 17.7,
                date: "28 Mayıs 07:08",
              },
              {
                value: 17.4,
                date: "28 Mayıs 07:13",
              },
              {
                value: 17.4,
                date: "28 Mayıs 07:18",
              },
              {
                value: 17.6,
                date: "28 Mayıs 07:23",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:28",
              },
              {
                value: 18,
                date: "28 Mayıs 07:33",
              },
              {
                value: 18.1,
                date: "28 Mayıs 07:38",
              },
              {
                value: 18.2,
                date: "28 Mayıs 07:43",
              },
              {
                value: 18.4,
                date: "28 Mayıs 07:48",
              },
              {
                value: 18.7,
                date: "28 Mayıs 07:53",
              },
              {
                value: 18.8,
                date: "28 Mayıs 07:58",
              },
              {
                value: 19,
                date: "28 Mayıs 08:03",
              },
              {
                value: 19.4,
                date: "28 Mayıs 08:08",
              },
              {
                value: 19.5,
                date: "28 Mayıs 08:13",
              },
              {
                value: 20.1,
                date: "28 Mayıs 08:18",
              },
              {
                value: 20.1,
                date: "28 Mayıs 08:23",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:28",
              },
              {
                value: 22.9,
                date: "28 Mayıs 08:33",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:38",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:43",
              },
              {
                value: 20.5,
                date: "28 Mayıs 08:48",
              },
              {
                value: 21.5,
                date: "28 Mayıs 08:53",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:58",
              },
              {
                value: 23.4,
                date: "28 Mayıs 09:03",
              },
              {
                value: 24.2,
                date: "28 Mayıs 09:08",
              },
              {
                value: 24.4,
                date: "28 Mayıs 09:13",
              },
              {
                value: 24.6,
                date: "28 Mayıs 09:18",
              },
              {
                value: 23,
                date: "28 Mayıs 09:23",
              },
              {
                value: 23,
                date: "28 Mayıs 09:28",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:33",
              },
              {
                value: 25.6,
                date: "28 Mayıs 09:38",
              },
              {
                value: 22.2,
                date: "28 Mayıs 09:43",
              },
              {
                value: 22,
                date: "28 Mayıs 09:48",
              },
              {
                value: 21.1,
                date: "28 Mayıs 09:53",
              },
              {
                value: 21.1,
                date: "28 Mayıs 09:58",
              },
              {
                value: 20.8,
                date: "28 Mayıs 10:03",
              },
              {
                value: 21.3,
                date: "28 Mayıs 10:08",
              },
              {
                value: 21,
                date: "28 Mayıs 10:13",
              },
              {
                value: 21,
                date: "28 Mayıs 10:18",
              },
              {
                value: 21,
                date: "28 Mayıs 10:23",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:28",
              },
              {
                value: 21.5,
                date: "28 Mayıs 10:33",
              },
              {
                value: 21.3,
                date: "28 Mayıs 10:38",
              },
              {
                value: 21.5,
                date: "28 Mayıs 10:43",
              },
              {
                value: 21.6,
                date: "28 Mayıs 10:48",
              },
              {
                value: 21.4,
                date: "28 Mayıs 10:53",
              },
              {
                value: 21.2,
                date: "28 Mayıs 10:58",
              },
              {
                value: 21.2,
                date: "28 Mayıs 11:03",
              },
              {
                value: 20.9,
                date: "28 Mayıs 11:08",
              },
              {
                value: 21,
                date: "28 Mayıs 11:13",
              },
              {
                value: 21.4,
                date: "28 Mayıs 11:18",
              },
              {
                value: 21.5,
                date: "28 Mayıs 11:23",
              },
              {
                value: 21.7,
                date: "28 Mayıs 11:28",
              },
              {
                value: 21.6,
                date: "28 Mayıs 11:33",
              },
              {
                value: 21.8,
                date: "28 Mayıs 11:38",
              },
              {
                value: 21.7,
                date: "28 Mayıs 11:43",
              },
              {
                value: 21.7,
                date: "28 Mayıs 11:48",
              },
              {
                value: 21.6,
                date: "28 Mayıs 11:53",
              },
              {
                value: 22,
                date: "28 Mayıs 11:58",
              },
              {
                value: 21.9,
                date: "28 Mayıs 12:03",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:08",
              },
              {
                value: 22.8,
                date: "28 Mayıs 12:13",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:18",
              },
              {
                value: 21.9,
                date: "28 Mayıs 12:23",
              },
              {
                value: 21.8,
                date: "28 Mayıs 12:28",
              },
              {
                value: 21.7,
                date: "28 Mayıs 12:33",
              },
              {
                value: 21.8,
                date: "28 Mayıs 12:38",
              },
              {
                value: 21.8,
                date: "28 Mayıs 12:43",
              },
              {
                value: 21.5,
                date: "28 Mayıs 12:48",
              },
              {
                value: 21.7,
                date: "28 Mayıs 12:53",
              },
              {
                value: 21.6,
                date: "28 Mayıs 12:58",
              },
              {
                value: 21.4,
                date: "28 Mayıs 13:03",
              },
              {
                value: 22,
                date: "28 Mayıs 13:08",
              },
              {
                value: 22,
                date: "28 Mayıs 13:13",
              },
              {
                value: 21.7,
                date: "28 Mayıs 13:18",
              },
              {
                value: 21.6,
                date: "28 Mayıs 13:23",
              },
              {
                value: 21.5,
                date: "28 Mayıs 13:28",
              },
              {
                value: 21.3,
                date: "28 Mayıs 13:33",
              },
              {
                value: 21.3,
                date: "28 Mayıs 13:38",
              },
              {
                value: 21.3,
                date: "28 Mayıs 13:43",
              },
              {
                value: 21.2,
                date: "28 Mayıs 13:48",
              },
              {
                value: 21.5,
                date: "28 Mayıs 13:53",
              },
              {
                value: 21.7,
                date: "28 Mayıs 13:58",
              },
              {
                value: 21.7,
                date: "28 Mayıs 14:03",
              },
              {
                value: 21.9,
                date: "28 Mayıs 14:08",
              },
              {
                value: 22,
                date: "28 Mayıs 14:13",
              },
              {
                value: 21.1,
                date: "28 Mayıs 14:18",
              },
              {
                value: 20.9,
                date: "28 Mayıs 14:23",
              },
              {
                value: 20.9,
                date: "28 Mayıs 14:28",
              },
              {
                value: 21.4,
                date: "28 Mayıs 14:33",
              },
              {
                value: 22.5,
                date: "28 Mayıs 14:38",
              },
              {
                value: 22.5,
                date: "28 Mayıs 14:43",
              },
              {
                value: 22.9,
                date: "28 Mayıs 14:48",
              },
              {
                value: 23.2,
                date: "28 Mayıs 14:53",
              },
              {
                value: 23.5,
                date: "28 Mayıs 14:58",
              },
              {
                value: 23.1,
                date: "28 Mayıs 15:03",
              },
              {
                value: 23.1,
                date: "28 Mayıs 15:08",
              },
              {
                value: 23.2,
                date: "28 Mayıs 15:13",
              },
              {
                value: 22.8,
                date: "28 Mayıs 15:18",
              },
              {
                value: 22.6,
                date: "28 Mayıs 15:23",
              },
              {
                value: 22.3,
                date: "28 Mayıs 15:28",
              },
              {
                value: 22.6,
                date: "28 Mayıs 15:33",
              },
              {
                value: 22.6,
                date: "28 Mayıs 15:38",
              },
              {
                value: 22.6,
                date: "28 Mayıs 15:43",
              },
              {
                value: 22.2,
                date: "28 Mayıs 15:48",
              },
              {
                value: 22.3,
                date: "28 Mayıs 15:53",
              },
              {
                value: 22.1,
                date: "28 Mayıs 15:58",
              },
              {
                value: 22.1,
                date: "28 Mayıs 16:03",
              },
              {
                value: 22.4,
                date: "28 Mayıs 16:08",
              },
              {
                value: 22.1,
                date: "28 Mayıs 16:13",
              },
              {
                value: 21.7,
                date: "28 Mayıs 16:18",
              },
              {
                value: 21.8,
                date: "28 Mayıs 16:23",
              },
              {
                value: 21.9,
                date: "28 Mayıs 16:28",
              },
              {
                value: 22,
                date: "28 Mayıs 16:33",
              },
              {
                value: 21.9,
                date: "28 Mayıs 16:38",
              },
              {
                value: 22.3,
                date: "28 Mayıs 16:43",
              },
              {
                value: 22.1,
                date: "28 Mayıs 16:48",
              },
              {
                value: 21.9,
                date: "28 Mayıs 16:53",
              },
              {
                value: 22,
                date: "28 Mayıs 16:58",
              },
              {
                value: 21.9,
                date: "28 Mayıs 17:03",
              },
              {
                value: 22.3,
                date: "28 Mayıs 17:10",
              },
              {
                value: 22.4,
                date: "28 Mayıs 17:13",
              },
              {
                value: 23.1,
                date: "28 Mayıs 17:18",
              },
              {
                value: 23.3,
                date: "28 Mayıs 17:23",
              },
              {
                value: 23,
                date: "28 Mayıs 17:28",
              },
              {
                value: 22.3,
                date: "28 Mayıs 17:33",
              },
              {
                value: 22.1,
                date: "28 Mayıs 17:38",
              },
              {
                value: 22.3,
                date: "28 Mayıs 17:43",
              },
            ],
            daily: [
              {
                min: 4.6,
                avg: 8.71,
                max: 18.7,
                date: "28 Nisan 23",
              },
              {
                min: 1.8,
                avg: 11.76,
                max: 22.5,
                date: "29 Nisan 23",
              },
              {
                min: 7.3,
                avg: 14.61,
                max: 24.8,
                date: "30 Nisan 23",
              },
              {
                min: 5.4,
                avg: 16.67,
                max: 26.6,
                date: "01 Mayıs 23",
              },
              {
                min: 9.9,
                avg: 17.62,
                max: 24.3,
                date: "02 Mayıs 23",
              },
              {
                min: 12.2,
                avg: 16.71,
                max: 23.7,
                date: "03 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 18.04,
                max: 25.5,
                date: "04 Mayıs 23",
              },
              {
                min: 11.9,
                avg: 14.13,
                max: 18.3,
                date: "05 Mayıs 23",
              },
              {
                min: 12.1,
                avg: 16.79,
                max: 22.8,
                date: "06 Mayıs 23",
              },
              {
                min: 8.6,
                avg: 17.33,
                max: 25.1,
                date: "07 Mayıs 23",
              },
              {
                min: 8.1,
                avg: 17.2,
                max: 25.8,
                date: "08 Mayıs 23",
              },
              {
                min: 11.6,
                avg: 15.4,
                max: 22.2,
                date: "09 Mayıs 23",
              },
              {
                min: 11,
                avg: 14.35,
                max: 20.2,
                date: "10 Mayıs 23",
              },
              {
                min: 10.5,
                avg: 14.55,
                max: 20.1,
                date: "11 Mayıs 23",
              },
              {
                min: 8,
                avg: 12.99,
                max: 18.3,
                date: "12 Mayıs 23",
              },
              {
                min: 7,
                avg: 15.01,
                max: 23.2,
                date: "13 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 16.34,
                max: 25.1,
                date: "14 Mayıs 23",
              },
              {
                min: 12.4,
                avg: 20.66,
                max: 30.1,
                date: "15 Mayıs 23",
              },
              {
                min: 14.5,
                avg: 20.48,
                max: 28.6,
                date: "16 Mayıs 23",
              },
              {
                min: 15.3,
                avg: 21.31,
                max: 29.3,
                date: "17 Mayıs 23",
              },
              {
                min: 14,
                avg: 18.36,
                max: 23.7,
                date: "18 Mayıs 23",
              },
              {
                min: 10.5,
                avg: 17.76,
                max: 29.1,
                date: "19 Mayıs 23",
              },
              {
                min: 10,
                avg: 18.82,
                max: 27.1,
                date: "20 Mayıs 23",
              },
              {
                min: 11.4,
                avg: 18.95,
                max: 26.9,
                date: "21 Mayıs 23",
              },
              {
                min: 11.1,
                avg: 18.36,
                max: 26.6,
                date: "22 Mayıs 23",
              },
              {
                min: 12.2,
                avg: 19.45,
                max: 26.6,
                date: "23 Mayıs 23",
              },
              {
                min: 11.9,
                avg: 19.38,
                max: 27.8,
                date: "24 Mayıs 23",
              },
              {
                min: 10.7,
                avg: 20.21,
                max: 28.7,
                date: "25 Mayıs 23",
              },
              {
                min: 12.1,
                avg: 21.06,
                max: 29,
                date: "26 Mayıs 23",
              },
              {
                min: 13.8,
                avg: 21.2,
                max: 28.1,
                date: "27 Mayıs 23",
              },
              {
                min: 15.4,
                avg: 20.06,
                max: 25.6,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 12.1,
                avg: 12.36,
                max: 12.7,
                date: "9 - 15 Ocak",
              },
              {
                min: 4.4,
                avg: 10.89,
                max: 20.4,
                date: "16 - 22 Ocak",
              },
              {
                min: -0.1,
                avg: 5.85,
                max: 14,
                date: "23 - 29 Ocak",
              },
              {
                min: -2,
                avg: 4.01,
                max: 16.2,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: -4.2,
                avg: 3.57,
                max: 13.6,
                date: "6 - 12 Şubat",
              },
              {
                min: -2.6,
                avg: 10.9,
                max: 22.9,
                date: "13 - 19 Şubat",
              },
              {
                min: 4.5,
                avg: 13.47,
                max: 23.8,
                date: "20 - 26 Şubat",
              },
              {
                min: 2.6,
                avg: 10.53,
                max: 21.2,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 0,
                avg: 12.14,
                max: 24.7,
                date: "6 - 12 Mart",
              },
              {
                min: 2.5,
                avg: 9.96,
                max: 21.8,
                date: "13 - 19 Mart",
              },
              {
                min: 2.2,
                avg: 12,
                max: 26.5,
                date: "20 - 26 Mart",
              },
              {
                min: -1.4,
                avg: 13.62,
                max: 26,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 3.2,
                avg: 11.33,
                max: 22.8,
                date: "3 - 9 Nisan",
              },
              {
                min: 3.5,
                avg: 15.76,
                max: 29.7,
                date: "10 - 16 Nisan",
              },
              {
                min: 4.6,
                avg: 15.56,
                max: 32.1,
                date: "17 - 23 Nisan",
              },
              {
                min: 1.8,
                avg: 14.2,
                max: 26.6,
                date: "24 - 30 Nisan",
              },
              {
                min: 8.1,
                avg: 16.4,
                max: 25.8,
                date: "1 - 7 Mayıs",
              },
              {
                min: 7,
                avg: 16.9,
                max: 30.1,
                date: "8 - 14 Mayıs",
              },
              {
                min: 10,
                avg: 18.87,
                max: 29.1,
                date: "15 - 21 Mayıs",
              },
              {
                min: 10.7,
                avg: 20.3,
                max: 29,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "ısı sens2",
            sensor_type: "Hava Sıcaklığı",
            unit: "°C",
            minutely: [
              {
                value: 16.1,
                date: "28 Mayıs 05:46",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:47",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:48",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:49",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:50",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:51",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:52",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:53",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:54",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:55",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:56",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:57",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:58",
              },
              {
                value: 16.2,
                date: "28 Mayıs 05:59",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:00",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:01",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:02",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:03",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:04",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:05",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:06",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:07",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:08",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:09",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:10",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:11",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:12",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:13",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:14",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:15",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:16",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:17",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:18",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:19",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:20",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:21",
              },
              {
                value: 16.4,
                date: "28 Mayıs 06:22",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:23",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:24",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:25",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:26",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:27",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:28",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:29",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:30",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:31",
              },
              {
                value: 16.6,
                date: "28 Mayıs 06:32",
              },
              {
                value: 16.7,
                date: "28 Mayıs 06:33",
              },
              {
                value: 16.7,
                date: "28 Mayıs 06:34",
              },
              {
                value: 16.8,
                date: "28 Mayıs 06:35",
              },
              {
                value: 16.8,
                date: "28 Mayıs 06:36",
              },
              {
                value: 16.8,
                date: "28 Mayıs 06:37",
              },
              {
                value: 16.9,
                date: "28 Mayıs 06:38",
              },
              {
                value: 16.9,
                date: "28 Mayıs 06:39",
              },
              {
                value: 16.9,
                date: "28 Mayıs 06:40",
              },
              {
                value: 17,
                date: "28 Mayıs 06:41",
              },
              {
                value: 17,
                date: "28 Mayıs 06:42",
              },
              {
                value: 17.1,
                date: "28 Mayıs 06:43",
              },
              {
                value: 17.1,
                date: "28 Mayıs 06:44",
              },
              {
                value: 17.1,
                date: "28 Mayıs 06:45",
              },
              {
                value: 17.1,
                date: "28 Mayıs 06:46",
              },
              {
                value: 17.2,
                date: "28 Mayıs 06:47",
              },
              {
                value: 17.2,
                date: "28 Mayıs 06:48",
              },
              {
                value: 17.2,
                date: "28 Mayıs 06:49",
              },
              {
                value: 17.3,
                date: "28 Mayıs 06:50",
              },
              {
                value: 17.3,
                date: "28 Mayıs 06:51",
              },
              {
                value: 17.4,
                date: "28 Mayıs 06:52",
              },
              {
                value: 17.4,
                date: "28 Mayıs 06:53",
              },
              {
                value: 17.4,
                date: "28 Mayıs 06:54",
              },
              {
                value: 17.5,
                date: "28 Mayıs 06:55",
              },
              {
                value: 17.5,
                date: "28 Mayıs 06:56",
              },
              {
                value: 17.6,
                date: "28 Mayıs 06:57",
              },
              {
                value: 17.6,
                date: "28 Mayıs 06:58",
              },
              {
                value: 17.6,
                date: "28 Mayıs 06:59",
              },
              {
                value: 17.7,
                date: "28 Mayıs 07:00",
              },
              {
                value: 17.7,
                date: "28 Mayıs 07:01",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:02",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:03",
              },
              {
                value: 17.9,
                date: "28 Mayıs 07:04",
              },
              {
                value: 17.9,
                date: "28 Mayıs 07:05",
              },
              {
                value: 17.9,
                date: "28 Mayıs 07:06",
              },
              {
                value: 17.9,
                date: "28 Mayıs 07:07",
              },
              {
                value: 18,
                date: "28 Mayıs 07:08",
              },
              {
                value: 18.1,
                date: "28 Mayıs 07:09",
              },
              {
                value: 18.1,
                date: "28 Mayıs 07:10",
              },
              {
                value: 18.2,
                date: "28 Mayıs 07:11",
              },
              {
                value: 18.2,
                date: "28 Mayıs 07:12",
              },
              {
                value: 18.3,
                date: "28 Mayıs 07:13",
              },
              {
                value: 18.4,
                date: "28 Mayıs 07:14",
              },
              {
                value: 18.4,
                date: "28 Mayıs 07:15",
              },
              {
                value: 18.4,
                date: "28 Mayıs 07:16",
              },
              {
                value: 18.5,
                date: "28 Mayıs 07:17",
              },
              {
                value: 18.6,
                date: "28 Mayıs 07:18",
              },
              {
                value: 18.6,
                date: "28 Mayıs 07:19",
              },
              {
                value: 18.7,
                date: "28 Mayıs 07:20",
              },
              {
                value: 18.8,
                date: "28 Mayıs 07:21",
              },
              {
                value: 18.8,
                date: "28 Mayıs 07:22",
              },
              {
                value: 18.8,
                date: "28 Mayıs 07:23",
              },
              {
                value: 18.9,
                date: "28 Mayıs 07:24",
              },
              {
                value: 18.9,
                date: "28 Mayıs 07:25",
              },
              {
                value: 19.1,
                date: "28 Mayıs 07:26",
              },
              {
                value: 19.1,
                date: "28 Mayıs 07:27",
              },
              {
                value: 19.2,
                date: "28 Mayıs 07:28",
              },
              {
                value: 19.3,
                date: "28 Mayıs 07:29",
              },
              {
                value: 19.4,
                date: "28 Mayıs 07:30",
              },
              {
                value: 19.4,
                date: "28 Mayıs 07:31",
              },
              {
                value: 19.5,
                date: "28 Mayıs 07:32",
              },
              {
                value: 19.6,
                date: "28 Mayıs 07:33",
              },
              {
                value: 19.7,
                date: "28 Mayıs 07:34",
              },
              {
                value: 19.8,
                date: "28 Mayıs 07:35",
              },
              {
                value: 19.9,
                date: "28 Mayıs 07:36",
              },
              {
                value: 20.1,
                date: "28 Mayıs 07:37",
              },
              {
                value: 20.1,
                date: "28 Mayıs 07:38",
              },
              {
                value: 20.2,
                date: "28 Mayıs 07:39",
              },
              {
                value: 20.3,
                date: "28 Mayıs 07:40",
              },
              {
                value: 20.5,
                date: "28 Mayıs 07:41",
              },
              {
                value: 20.6,
                date: "28 Mayıs 07:42",
              },
              {
                value: 20.8,
                date: "28 Mayıs 07:43",
              },
              {
                value: 20.9,
                date: "28 Mayıs 07:44",
              },
              {
                value: 21.1,
                date: "28 Mayıs 07:45",
              },
              {
                value: 21.2,
                date: "28 Mayıs 07:46",
              },
              {
                value: 21.4,
                date: "28 Mayıs 07:47",
              },
              {
                value: 21.7,
                date: "28 Mayıs 07:48",
              },
              {
                value: 21.9,
                date: "28 Mayıs 07:49",
              },
              {
                value: 22.1,
                date: "28 Mayıs 07:50",
              },
              {
                value: 22.2,
                date: "28 Mayıs 07:51",
              },
              {
                value: 22.4,
                date: "28 Mayıs 07:52",
              },
              {
                value: 22.7,
                date: "28 Mayıs 07:53",
              },
              {
                value: 22.8,
                date: "28 Mayıs 07:54",
              },
              {
                value: 23,
                date: "28 Mayıs 07:55",
              },
              {
                value: 23.2,
                date: "28 Mayıs 07:56",
              },
              {
                value: 23.3,
                date: "28 Mayıs 07:57",
              },
              {
                value: 23.4,
                date: "28 Mayıs 07:58",
              },
              {
                value: 23.6,
                date: "28 Mayıs 07:59",
              },
              {
                value: 23.8,
                date: "28 Mayıs 08:00",
              },
              {
                value: 23.9,
                date: "28 Mayıs 08:01",
              },
              {
                value: 24.1,
                date: "28 Mayıs 08:02",
              },
              {
                value: 24.4,
                date: "28 Mayıs 08:04",
              },
              {
                value: 24.2,
                date: "28 Mayıs 08:05",
              },
              {
                value: 23.3,
                date: "28 Mayıs 08:07",
              },
              {
                value: 23.2,
                date: "28 Mayıs 08:08",
              },
              {
                value: 22.9,
                date: "28 Mayıs 08:09",
              },
              {
                value: 22.7,
                date: "28 Mayıs 08:10",
              },
              {
                value: 22.8,
                date: "28 Mayıs 08:11",
              },
              {
                value: 22.6,
                date: "28 Mayıs 08:13",
              },
              {
                value: 22.7,
                date: "28 Mayıs 08:14",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:16",
              },
              {
                value: 22.1,
                date: "28 Mayıs 08:17",
              },
              {
                value: 21.6,
                date: "28 Mayıs 08:19",
              },
              {
                value: 21,
                date: "28 Mayıs 08:20",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:22",
              },
              {
                value: 22.1,
                date: "28 Mayıs 08:23",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:24",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:25",
              },
              {
                value: 22.6,
                date: "28 Mayıs 08:26",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:27",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:28",
              },
              {
                value: 22.4,
                date: "28 Mayıs 08:29",
              },
              {
                value: 22.5,
                date: "28 Mayıs 08:30",
              },
              {
                value: 22.4,
                date: "28 Mayıs 08:31",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:32",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:34",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:35",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:36",
              },
              {
                value: 21.8,
                date: "28 Mayıs 08:37",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:38",
              },
              {
                value: 22.2,
                date: "28 Mayıs 08:40",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:41",
              },
              {
                value: 21.4,
                date: "28 Mayıs 08:43",
              },
              {
                value: 21.2,
                date: "28 Mayıs 08:44",
              },
              {
                value: 21.5,
                date: "28 Mayıs 08:46",
              },
              {
                value: 21.2,
                date: "28 Mayıs 08:47",
              },
              {
                value: 20.5,
                date: "28 Mayıs 08:49",
              },
              {
                value: 19.8,
                date: "28 Mayıs 08:50",
              },
              {
                value: 20.4,
                date: "28 Mayıs 08:52",
              },
              {
                value: 20.9,
                date: "28 Mayıs 08:53",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:55",
              },
              {
                value: 21.4,
                date: "28 Mayıs 08:56",
              },
              {
                value: 21.4,
                date: "28 Mayıs 08:57",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:58",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:59",
              },
              {
                value: 23.1,
                date: "28 Mayıs 09:00",
              },
              {
                value: 22.8,
                date: "28 Mayıs 09:01",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:02",
              },
              {
                value: 23.3,
                date: "28 Mayıs 09:03",
              },
              {
                value: 22.9,
                date: "28 Mayıs 09:04",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:05",
              },
              {
                value: 24.1,
                date: "28 Mayıs 09:07",
              },
              {
                value: 24.2,
                date: "28 Mayıs 09:08",
              },
              {
                value: 22.6,
                date: "28 Mayıs 09:10",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:11",
              },
              {
                value: 23.8,
                date: "28 Mayıs 09:13",
              },
              {
                value: 24.4,
                date: "28 Mayıs 09:14",
              },
              {
                value: 25.1,
                date: "28 Mayıs 09:16",
              },
              {
                value: 24.9,
                date: "28 Mayıs 09:17",
              },
              {
                value: 25.1,
                date: "28 Mayıs 09:19",
              },
              {
                value: 24.8,
                date: "28 Mayıs 09:20",
              },
              {
                value: 23.8,
                date: "28 Mayıs 09:22",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:23",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:25",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:26",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:28",
              },
              {
                value: 23.6,
                date: "28 Mayıs 09:29",
              },
              {
                value: 23.6,
                date: "28 Mayıs 09:30",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:31",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:32",
              },
              {
                value: 24,
                date: "28 Mayıs 09:33",
              },
              {
                value: 23.8,
                date: "28 Mayıs 09:34",
              },
              {
                value: 24.6,
                date: "28 Mayıs 09:35",
              },
              {
                value: 25.1,
                date: "28 Mayıs 09:36",
              },
              {
                value: 25.1,
                date: "28 Mayıs 09:37",
              },
              {
                value: 25.6,
                date: "28 Mayıs 09:38",
              },
              {
                value: 25.8,
                date: "28 Mayıs 09:39",
              },
              {
                value: 23.2,
                date: "28 Mayıs 09:40",
              },
              {
                value: 23,
                date: "28 Mayıs 09:41",
              },
              {
                value: 22.4,
                date: "28 Mayıs 09:43",
              },
              {
                value: 22.9,
                date: "28 Mayıs 09:46",
              },
              {
                value: 22.7,
                date: "28 Mayıs 09:47",
              },
              {
                value: 22.6,
                date: "28 Mayıs 09:48",
              },
              {
                value: 21.8,
                date: "28 Mayıs 09:49",
              },
              {
                value: 21.7,
                date: "28 Mayıs 09:50",
              },
              {
                value: 21.3,
                date: "28 Mayıs 09:52",
              },
              {
                value: 21.6,
                date: "28 Mayıs 09:53",
              },
              {
                value: 21.9,
                date: "28 Mayıs 09:54",
              },
              {
                value: 21.9,
                date: "28 Mayıs 09:55",
              },
              {
                value: 22,
                date: "28 Mayıs 09:56",
              },
              {
                value: 21.9,
                date: "28 Mayıs 09:57",
              },
              {
                value: 21.6,
                date: "28 Mayıs 09:58",
              },
              {
                value: 21.6,
                date: "28 Mayıs 09:59",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:00",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:01",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:02",
              },
              {
                value: 21.3,
                date: "28 Mayıs 10:04",
              },
              {
                value: 21.6,
                date: "28 Mayıs 10:05",
              },
              {
                value: 20.8,
                date: "28 Mayıs 10:07",
              },
              {
                value: 20.6,
                date: "28 Mayıs 10:08",
              },
              {
                value: 21.6,
                date: "28 Mayıs 10:10",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:11",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:13",
              },
              {
                value: 21.5,
                date: "28 Mayıs 10:14",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:15",
              },
              {
                value: 22,
                date: "28 Mayıs 10:16",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:17",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:18",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:19",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:20",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:21",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:22",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:23",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:24",
              },
              {
                value: 21.4,
                date: "28 Mayıs 10:25",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:26",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:27",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:28",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:29",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:30",
              },
              {
                value: 21.4,
                date: "28 Mayıs 10:31",
              },
              {
                value: 21.6,
                date: "28 Mayıs 10:32",
              },
              {
                value: 21.5,
                date: "28 Mayıs 10:34",
              },
              {
                value: 21.6,
                date: "28 Mayıs 10:35",
              },
              {
                value: 20.6,
                date: "28 Mayıs 10:37",
              },
              {
                value: 20.8,
                date: "28 Mayıs 10:38",
              },
              {
                value: 20.9,
                date: "28 Mayıs 10:40",
              },
              {
                value: 21.3,
                date: "28 Mayıs 10:41",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:43",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:44",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:45",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:46",
              },
              {
                value: 22.3,
                date: "28 Mayıs 10:47",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:48",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:49",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:50",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:51",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:52",
              },
              {
                value: 22,
                date: "28 Mayıs 10:53",
              },
              {
                value: 22,
                date: "28 Mayıs 10:54",
              },
              {
                value: 22,
                date: "28 Mayıs 10:55",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:56",
              },
              {
                value: 22.1,
                date: "28 Mayıs 10:57",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:58",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:59",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:00",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:01",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:02",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:03",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:04",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:05",
              },
              {
                value: 21.7,
                date: "28 Mayıs 11:06",
              },
              {
                value: 21.5,
                date: "28 Mayıs 11:07",
              },
              {
                value: 21.4,
                date: "28 Mayıs 11:08",
              },
              {
                value: 21.4,
                date: "28 Mayıs 11:09",
              },
              {
                value: 21.4,
                date: "28 Mayıs 11:10",
              },
              {
                value: 21.4,
                date: "28 Mayıs 11:11",
              },
              {
                value: 21.5,
                date: "28 Mayıs 11:12",
              },
              {
                value: 21.6,
                date: "28 Mayıs 11:13",
              },
              {
                value: 21.7,
                date: "28 Mayıs 11:14",
              },
              {
                value: 21.8,
                date: "28 Mayıs 11:15",
              },
              {
                value: 21.9,
                date: "28 Mayıs 11:16",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:17",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:18",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:19",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:20",
              },
              {
                value: 22.3,
                date: "28 Mayıs 11:21",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:22",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:23",
              },
              {
                value: 22.4,
                date: "28 Mayıs 11:24",
              },
              {
                value: 22.5,
                date: "28 Mayıs 11:25",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:26",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:27",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:28",
              },
              {
                value: 22.9,
                date: "28 Mayıs 11:29",
              },
              {
                value: 22.9,
                date: "28 Mayıs 11:30",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:31",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:32",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:33",
              },
              {
                value: 22.4,
                date: "28 Mayıs 11:34",
              },
              {
                value: 22.4,
                date: "28 Mayıs 11:35",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:36",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:37",
              },
              {
                value: 22.9,
                date: "28 Mayıs 11:38",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:39",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:40",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:41",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:42",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:43",
              },
              {
                value: 22.5,
                date: "28 Mayıs 11:44",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:45",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:46",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:47",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:48",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:49",
              },
              {
                value: 22.4,
                date: "28 Mayıs 11:50",
              },
              {
                value: 22.3,
                date: "28 Mayıs 11:51",
              },
              {
                value: 22.4,
                date: "28 Mayıs 11:52",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:53",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:54",
              },
              {
                value: 22.8,
                date: "28 Mayıs 11:55",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:56",
              },
              {
                value: 22.9,
                date: "28 Mayıs 11:57",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:58",
              },
              {
                value: 22.5,
                date: "28 Mayıs 11:59",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:00",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:01",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:02",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:03",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:04",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:05",
              },
              {
                value: 23,
                date: "28 Mayıs 12:06",
              },
              {
                value: 23.1,
                date: "28 Mayıs 12:07",
              },
              {
                value: 23.4,
                date: "28 Mayıs 12:08",
              },
              {
                value: 23.4,
                date: "28 Mayıs 12:09",
              },
              {
                value: 23.7,
                date: "28 Mayıs 12:10",
              },
              {
                value: 23.9,
                date: "28 Mayıs 12:11",
              },
              {
                value: 23.9,
                date: "28 Mayıs 12:12",
              },
              {
                value: 23.4,
                date: "28 Mayıs 12:13",
              },
              {
                value: 23.6,
                date: "28 Mayıs 12:14",
              },
              {
                value: 23.3,
                date: "28 Mayıs 12:15",
              },
              {
                value: 23.2,
                date: "28 Mayıs 12:16",
              },
              {
                value: 23.1,
                date: "28 Mayıs 12:17",
              },
              {
                value: 23.2,
                date: "28 Mayıs 12:18",
              },
              {
                value: 23.1,
                date: "28 Mayıs 12:19",
              },
              {
                value: 23,
                date: "28 Mayıs 12:20",
              },
              {
                value: 22.8,
                date: "28 Mayıs 12:21",
              },
              {
                value: 22.8,
                date: "28 Mayıs 12:22",
              },
              {
                value: 22.7,
                date: "28 Mayıs 12:23",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:24",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:25",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:26",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:27",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:28",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:29",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:30",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:31",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:32",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:33",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:34",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:35",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:36",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:37",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:38",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:39",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:40",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:41",
              },
              {
                value: 22.7,
                date: "28 Mayıs 12:42",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:43",
              },
              {
                value: 22.8,
                date: "28 Mayıs 12:44",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:45",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:46",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:47",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:48",
              },
              {
                value: 22.2,
                date: "28 Mayıs 12:49",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:50",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:51",
              },
              {
                value: 22.6,
                date: "28 Mayıs 12:52",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:53",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:54",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:55",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:56",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:57",
              },
              {
                value: 22.4,
                date: "28 Mayıs 12:58",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:59",
              },
              {
                value: 22.5,
                date: "28 Mayıs 13:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:01",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:02",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:03",
              },
              {
                value: 22.8,
                date: "28 Mayıs 13:04",
              },
              {
                value: 23.1,
                date: "28 Mayıs 13:05",
              },
              {
                value: 23.1,
                date: "28 Mayıs 13:06",
              },
              {
                value: 23.2,
                date: "28 Mayıs 13:07",
              },
              {
                value: 23.5,
                date: "28 Mayıs 13:08",
              },
              {
                value: 23.7,
                date: "28 Mayıs 13:09",
              },
              {
                value: 23.7,
                date: "28 Mayıs 13:10",
              },
              {
                value: 23.7,
                date: "28 Mayıs 13:11",
              },
              {
                value: 23.5,
                date: "28 Mayıs 13:12",
              },
              {
                value: 23.4,
                date: "28 Mayıs 13:13",
              },
              {
                value: 23.2,
                date: "28 Mayıs 13:14",
              },
              {
                value: 23.2,
                date: "28 Mayıs 13:15",
              },
              {
                value: 23.1,
                date: "28 Mayıs 13:16",
              },
              {
                value: 22.9,
                date: "28 Mayıs 13:17",
              },
              {
                value: 22.5,
                date: "28 Mayıs 13:18",
              },
              {
                value: 22.3,
                date: "28 Mayıs 13:19",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:20",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:21",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:22",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:23",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:24",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:25",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:26",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:27",
              },
              {
                value: 22.3,
                date: "28 Mayıs 13:28",
              },
              {
                value: 22.1,
                date: "28 Mayıs 13:29",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:30",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:31",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:32",
              },
              {
                value: 22,
                date: "28 Mayıs 13:33",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:34",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:35",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:36",
              },
              {
                value: 22,
                date: "28 Mayıs 13:37",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:38",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:39",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:40",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:41",
              },
              {
                value: 22,
                date: "28 Mayıs 13:42",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:43",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:44",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:45",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:46",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:47",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:48",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:49",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:50",
              },
              {
                value: 21.8,
                date: "28 Mayıs 13:51",
              },
              {
                value: 22.1,
                date: "28 Mayıs 13:52",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:53",
              },
              {
                value: 22.4,
                date: "28 Mayıs 13:54",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:55",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:56",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:57",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:58",
              },
              {
                value: 22.6,
                date: "28 Mayıs 13:59",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:01",
              },
              {
                value: 22.3,
                date: "28 Mayıs 14:02",
              },
              {
                value: 22.4,
                date: "28 Mayıs 14:03",
              },
              {
                value: 22.4,
                date: "28 Mayıs 14:04",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:05",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:06",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:07",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:08",
              },
              {
                value: 22.7,
                date: "28 Mayıs 14:09",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:10",
              },
              {
                value: 22.9,
                date: "28 Mayıs 14:11",
              },
              {
                value: 23.1,
                date: "28 Mayıs 14:12",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:13",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:14",
              },
              {
                value: 22.4,
                date: "28 Mayıs 14:15",
              },
              {
                value: 22.2,
                date: "28 Mayıs 14:16",
              },
              {
                value: 21.8,
                date: "28 Mayıs 14:17",
              },
              {
                value: 21.6,
                date: "28 Mayıs 14:18",
              },
              {
                value: 21.5,
                date: "28 Mayıs 14:19",
              },
              {
                value: 21.4,
                date: "28 Mayıs 14:20",
              },
              {
                value: 21.4,
                date: "28 Mayıs 14:21",
              },
              {
                value: 21.3,
                date: "28 Mayıs 14:22",
              },
              {
                value: 21.2,
                date: "28 Mayıs 14:23",
              },
              {
                value: 21.2,
                date: "28 Mayıs 14:24",
              },
              {
                value: 21.3,
                date: "28 Mayıs 14:25",
              },
              {
                value: 21.3,
                date: "28 Mayıs 14:26",
              },
              {
                value: 21.4,
                date: "28 Mayıs 14:27",
              },
              {
                value: 21.6,
                date: "28 Mayıs 14:28",
              },
              {
                value: 21.8,
                date: "28 Mayıs 14:29",
              },
              {
                value: 21.8,
                date: "28 Mayıs 14:30",
              },
              {
                value: 21.9,
                date: "28 Mayıs 14:31",
              },
              {
                value: 22.3,
                date: "28 Mayıs 14:32",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:33",
              },
              {
                value: 22.9,
                date: "28 Mayıs 14:34",
              },
              {
                value: 23.1,
                date: "28 Mayıs 14:35",
              },
              {
                value: 23.6,
                date: "28 Mayıs 14:36",
              },
              {
                value: 23.9,
                date: "28 Mayıs 14:37",
              },
              {
                value: 23.8,
                date: "28 Mayıs 14:38",
              },
              {
                value: 24.1,
                date: "28 Mayıs 14:39",
              },
              {
                value: 24.1,
                date: "28 Mayıs 14:40",
              },
              {
                value: 24.5,
                date: "28 Mayıs 14:41",
              },
              {
                value: 24.9,
                date: "28 Mayıs 14:42",
              },
              {
                value: 25.2,
                date: "28 Mayıs 14:43",
              },
              {
                value: 25.5,
                date: "28 Mayıs 14:44",
              },
              {
                value: 25.7,
                date: "28 Mayıs 14:45",
              },
              {
                value: 25.8,
                date: "28 Mayıs 14:46",
              },
              {
                value: 26.1,
                date: "28 Mayıs 14:47",
              },
              {
                value: 26.4,
                date: "28 Mayıs 14:48",
              },
              {
                value: 26.8,
                date: "28 Mayıs 14:49",
              },
              {
                value: 26.9,
                date: "28 Mayıs 14:50",
              },
              {
                value: 27.1,
                date: "28 Mayıs 14:51",
              },
              {
                value: 27.4,
                date: "28 Mayıs 14:52",
              },
              {
                value: 27.8,
                date: "28 Mayıs 14:53",
              },
              {
                value: 28.2,
                date: "28 Mayıs 14:54",
              },
              {
                value: 28.5,
                date: "28 Mayıs 14:55",
              },
              {
                value: 28.8,
                date: "28 Mayıs 14:56",
              },
              {
                value: 28.9,
                date: "28 Mayıs 14:57",
              },
              {
                value: 29.2,
                date: "28 Mayıs 14:59",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:00",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:01",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:02",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:03",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:04",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:05",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:06",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:07",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:08",
              },
              {
                value: 29.4,
                date: "28 Mayıs 15:09",
              },
              {
                value: 29.5,
                date: "28 Mayıs 15:10",
              },
              {
                value: 29.5,
                date: "28 Mayıs 15:11",
              },
              {
                value: 29.5,
                date: "28 Mayıs 15:12",
              },
              {
                value: 29.5,
                date: "28 Mayıs 15:13",
              },
              {
                value: 29.5,
                date: "28 Mayıs 15:14",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:15",
              },
              {
                value: 29.3,
                date: "28 Mayıs 15:16",
              },
              {
                value: 29.1,
                date: "28 Mayıs 15:17",
              },
              {
                value: 28.1,
                date: "28 Mayıs 15:18",
              },
              {
                value: 26.2,
                date: "28 Mayıs 15:20",
              },
              {
                value: 25.3,
                date: "28 Mayıs 15:21",
              },
              {
                value: 25.1,
                date: "28 Mayıs 15:22",
              },
              {
                value: 24.9,
                date: "28 Mayıs 15:23",
              },
              {
                value: 24.6,
                date: "28 Mayıs 15:24",
              },
              {
                value: 24.2,
                date: "28 Mayıs 15:25",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:26",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:27",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:28",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:29",
              },
              {
                value: 24,
                date: "28 Mayıs 15:30",
              },
              {
                value: 24,
                date: "28 Mayıs 15:31",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:32",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:33",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:34",
              },
              {
                value: 23.8,
                date: "28 Mayıs 15:35",
              },
              {
                value: 23.8,
                date: "28 Mayıs 15:36",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:37",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:38",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:39",
              },
              {
                value: 24,
                date: "28 Mayıs 15:40",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:41",
              },
              {
                value: 24,
                date: "28 Mayıs 15:42",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:43",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:44",
              },
              {
                value: 23.6,
                date: "28 Mayıs 15:45",
              },
              {
                value: 23.4,
                date: "28 Mayıs 15:46",
              },
              {
                value: 23.4,
                date: "28 Mayıs 15:47",
              },
              {
                value: 23.5,
                date: "28 Mayıs 15:48",
              },
              {
                value: 23.3,
                date: "28 Mayıs 15:49",
              },
              {
                value: 23.5,
                date: "28 Mayıs 15:50",
              },
              {
                value: 23.6,
                date: "28 Mayıs 15:51",
              },
              {
                value: 23.5,
                date: "28 Mayıs 15:52",
              },
              {
                value: 23.4,
                date: "28 Mayıs 15:53",
              },
              {
                value: 23.5,
                date: "28 Mayıs 15:54",
              },
              {
                value: 23.5,
                date: "28 Mayıs 15:55",
              },
              {
                value: 23.6,
                date: "28 Mayıs 15:56",
              },
              {
                value: 23.3,
                date: "28 Mayıs 15:57",
              },
              {
                value: 23.3,
                date: "28 Mayıs 15:58",
              },
              {
                value: 23,
                date: "28 Mayıs 15:59",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:00",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:01",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:02",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:03",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:04",
              },
              {
                value: 23.3,
                date: "28 Mayıs 16:05",
              },
              {
                value: 23.5,
                date: "28 Mayıs 16:06",
              },
              {
                value: 23.6,
                date: "28 Mayıs 16:07",
              },
              {
                value: 23.7,
                date: "28 Mayıs 16:08",
              },
              {
                value: 23.6,
                date: "28 Mayıs 16:09",
              },
              {
                value: 23.4,
                date: "28 Mayıs 16:10",
              },
              {
                value: 23.2,
                date: "28 Mayıs 16:11",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:12",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:13",
              },
              {
                value: 23,
                date: "28 Mayıs 16:14",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:15",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:16",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:17",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:18",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:19",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:20",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:21",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:22",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:23",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:24",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:25",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:26",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:27",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:28",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:29",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:30",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:31",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:32",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:33",
              },
              {
                value: 23,
                date: "28 Mayıs 16:34",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:35",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:36",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:37",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:38",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:39",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:40",
              },
              {
                value: 23.2,
                date: "28 Mayıs 16:41",
              },
              {
                value: 23.2,
                date: "28 Mayıs 16:42",
              },
              {
                value: 23.4,
                date: "28 Mayıs 16:43",
              },
              {
                value: 23.3,
                date: "28 Mayıs 16:44",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:45",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:46",
              },
              {
                value: 23,
                date: "28 Mayıs 16:47",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:48",
              },
              {
                value: 23.1,
                date: "28 Mayıs 16:49",
              },
              {
                value: 23,
                date: "28 Mayıs 16:50",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:51",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:52",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:53",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:54",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:55",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:56",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:57",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:58",
              },
              {
                value: 22.6,
                date: "28 Mayıs 16:59",
              },
              {
                value: 22.6,
                date: "28 Mayıs 17:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 17:01",
              },
              {
                value: 22.6,
                date: "28 Mayıs 17:02",
              },
              {
                value: 22.7,
                date: "28 Mayıs 17:03",
              },
              {
                value: 22.8,
                date: "28 Mayıs 17:04",
              },
              {
                value: 22.8,
                date: "28 Mayıs 17:05",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:06",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:07",
              },
              {
                value: 23.4,
                date: "28 Mayıs 17:10",
              },
              {
                value: 23.4,
                date: "28 Mayıs 17:10",
              },
              {
                value: 23.2,
                date: "28 Mayıs 17:10",
              },
              {
                value: 23.3,
                date: "28 Mayıs 17:11",
              },
              {
                value: 23.2,
                date: "28 Mayıs 17:12",
              },
              {
                value: 23.3,
                date: "28 Mayıs 17:13",
              },
              {
                value: 23.5,
                date: "28 Mayıs 17:14",
              },
              {
                value: 23.8,
                date: "28 Mayıs 17:15",
              },
              {
                value: 23.9,
                date: "28 Mayıs 17:16",
              },
              {
                value: 24.3,
                date: "28 Mayıs 17:17",
              },
              {
                value: 24.9,
                date: "28 Mayıs 17:18",
              },
              {
                value: 25.1,
                date: "28 Mayıs 17:19",
              },
              {
                value: 25.3,
                date: "28 Mayıs 17:20",
              },
              {
                value: 25.3,
                date: "28 Mayıs 17:21",
              },
              {
                value: 25.2,
                date: "28 Mayıs 17:22",
              },
              {
                value: 25.6,
                date: "28 Mayıs 17:23",
              },
              {
                value: 25.4,
                date: "28 Mayıs 17:24",
              },
              {
                value: 25.2,
                date: "28 Mayıs 17:25",
              },
              {
                value: 25.4,
                date: "28 Mayıs 17:26",
              },
              {
                value: 25.1,
                date: "28 Mayıs 17:27",
              },
              {
                value: 24.8,
                date: "28 Mayıs 17:28",
              },
              {
                value: 24.3,
                date: "28 Mayıs 17:29",
              },
              {
                value: 24.3,
                date: "28 Mayıs 17:30",
              },
              {
                value: 24.2,
                date: "28 Mayıs 17:31",
              },
              {
                value: 23.8,
                date: "28 Mayıs 17:32",
              },
              {
                value: 23.7,
                date: "28 Mayıs 17:33",
              },
              {
                value: 23.4,
                date: "28 Mayıs 17:34",
              },
              {
                value: 23.2,
                date: "28 Mayıs 17:35",
              },
              {
                value: 23.2,
                date: "28 Mayıs 17:36",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:37",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:38",
              },
              {
                value: 23.1,
                date: "28 Mayıs 17:39",
              },
              {
                value: 23,
                date: "28 Mayıs 17:40",
              },
              {
                value: 23.1,
                date: "28 Mayıs 17:41",
              },
              {
                value: 23.2,
                date: "28 Mayıs 17:42",
              },
              {
                value: 23.3,
                date: "28 Mayıs 17:43",
              },
              {
                value: 23.5,
                date: "28 Mayıs 17:44",
              },
              {
                value: 23.9,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 10.2,
                avg: 13.18,
                max: 21.6,
                date: "28 Nisan 23",
              },
              {
                min: 8.1,
                avg: 16.67,
                max: 327.7,
                date: "29 Nisan 23",
              },
              {
                min: 12.9,
                avg: 18,
                max: 27.1,
                date: "30 Nisan 23",
              },
              {
                min: 11.9,
                avg: 18.87,
                max: 28.9,
                date: "01 Mayıs 23",
              },
              {
                min: 14.4,
                avg: 19,
                max: 26.4,
                date: "02 Mayıs 23",
              },
              {
                min: 13.8,
                avg: 18.28,
                max: 26.6,
                date: "03 Mayıs 23",
              },
              {
                min: 14.6,
                avg: 20.15,
                max: 28.2,
                date: "04 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 16.55,
                max: 23.2,
                date: "05 Mayıs 23",
              },
              {
                min: 13.1,
                avg: 17.99,
                max: 25.1,
                date: "06 Mayıs 23",
              },
              {
                min: 12.7,
                avg: 19.16,
                max: 27.3,
                date: "07 Mayıs 23",
              },
              {
                min: 13.2,
                avg: 19.36,
                max: 27.6,
                date: "08 Mayıs 23",
              },
              {
                min: 13,
                avg: 17.9,
                max: 25.8,
                date: "09 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 17.06,
                max: 25.6,
                date: "10 Mayıs 23",
              },
              {
                min: 13.2,
                avg: 17.02,
                max: 24.4,
                date: "11 Mayıs 23",
              },
              {
                min: 11.9,
                avg: 15.89,
                max: 24.5,
                date: "12 Mayıs 23",
              },
              {
                min: 8.3,
                avg: 17.13,
                max: 26.2,
                date: "13 Mayıs 23",
              },
              {
                min: 7.8,
                avg: 16.58,
                max: 27.1,
                date: "14 Mayıs 23",
              },
              {
                min: 12.6,
                avg: 21.38,
                max: 33.4,
                date: "15 Mayıs 23",
              },
              {
                min: 15,
                avg: 20.94,
                max: 30.4,
                date: "16 Mayıs 23",
              },
              {
                min: 16.9,
                avg: 22.38,
                max: 34.9,
                date: "17 Mayıs 23",
              },
              {
                min: 15.6,
                avg: 20.01,
                max: 26.1,
                date: "18 Mayıs 23",
              },
              {
                min: 13.2,
                avg: 19.79,
                max: 29.8,
                date: "19 Mayıs 23",
              },
              {
                min: 12.2,
                avg: 19.77,
                max: 28.6,
                date: "20 Mayıs 23",
              },
              {
                min: 13.1,
                avg: 19.67,
                max: 27.6,
                date: "21 Mayıs 23",
              },
              {
                min: 13.7,
                avg: 19.66,
                max: 28.1,
                date: "22 Mayıs 23",
              },
              {
                min: 13.4,
                avg: 20.45,
                max: 29.2,
                date: "23 Mayıs 23",
              },
              {
                min: 14,
                avg: 20.57,
                max: 31.3,
                date: "24 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 21.1,
                max: 31.1,
                date: "25 Mayıs 23",
              },
              {
                min: 13.9,
                avg: 21.55,
                max: 31.1,
                date: "26 Mayıs 23",
              },
              {
                min: 15.2,
                avg: 21.64,
                max: 30.4,
                date: "27 Mayıs 23",
              },
              {
                min: 16.1,
                avg: 20.97,
                max: 29.5,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 7.7,
                avg: 12.12,
                max: 26.9,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: 7.9,
                avg: 14.79,
                max: 29.6,
                date: "6 - 12 Şubat",
              },
              {
                min: 9.8,
                avg: 17.79,
                max: 29.4,
                date: "13 - 19 Şubat",
              },
              {
                min: 9.9,
                avg: 17.24,
                max: 655.3,
                date: "20 - 26 Şubat",
              },
              {
                min: 9.5,
                avg: 16.4,
                max: 27.9,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 7.4,
                avg: 15.91,
                max: 27.9,
                date: "6 - 12 Mart",
              },
              {
                min: 8.7,
                avg: 15.26,
                max: 655.3,
                date: "13 - 19 Mart",
              },
              {
                min: 9.5,
                avg: 17.1,
                max: 641.6,
                date: "20 - 26 Mart",
              },
              {
                min: 6.1,
                avg: 17.32,
                max: 655.2,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 7.1,
                avg: 16.84,
                max: 655.3,
                date: "3 - 9 Nisan",
              },
              {
                min: 6.7,
                avg: 18.89,
                max: 45.4,
                date: "10 - 16 Nisan",
              },
              {
                min: 11.5,
                avg: 19.06,
                max: 28.6,
                date: "17 - 23 Nisan",
              },
              {
                min: 8.1,
                avg: 17.46,
                max: 327.7,
                date: "24 - 30 Nisan",
              },
              {
                min: 12.7,
                avg: 18.46,
                max: 28.2,
                date: "1 - 7 Mayıs",
              },
              {
                min: 7.8,
                avg: 18.39,
                max: 34.9,
                date: "8 - 14 Mayıs",
              },
              {
                min: 12.2,
                avg: 20.13,
                max: 31.3,
                date: "15 - 21 Mayıs",
              },
              {
                min: 12.9,
                avg: 21.04,
                max: 31.1,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "ısı sens3",
            sensor_type: "Hava Sıcaklığı",
            unit: "°C",
            minutely: [
              {
                value: 16,
                date: "28 Mayıs 05:50",
              },
              {
                value: 16,
                date: "28 Mayıs 05:55",
              },
              {
                value: 16,
                date: "28 Mayıs 06:00",
              },
              {
                value: 16,
                date: "28 Mayıs 06:05",
              },
              {
                value: 16.1,
                date: "28 Mayıs 06:10",
              },
              {
                value: 16.1,
                date: "28 Mayıs 06:15",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:20",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:25",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:30",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:35",
              },
              {
                value: 16.7,
                date: "28 Mayıs 06:40",
              },
              {
                value: 17,
                date: "28 Mayıs 06:50",
              },
              {
                value: 17.2,
                date: "28 Mayıs 06:55",
              },
              {
                value: 17.5,
                date: "28 Mayıs 07:00",
              },
              {
                value: 17.7,
                date: "28 Mayıs 07:05",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:10",
              },
              {
                value: 18.1,
                date: "28 Mayıs 07:15",
              },
              {
                value: 18.3,
                date: "28 Mayıs 07:20",
              },
              {
                value: 18.6,
                date: "28 Mayıs 07:25",
              },
              {
                value: 18.9,
                date: "28 Mayıs 07:30",
              },
              {
                value: 19.2,
                date: "28 Mayıs 07:35",
              },
              {
                value: 19.5,
                date: "28 Mayıs 07:40",
              },
              {
                value: 19.8,
                date: "28 Mayıs 07:45",
              },
              {
                value: 20.3,
                date: "28 Mayıs 07:50",
              },
              {
                value: 20.8,
                date: "28 Mayıs 07:55",
              },
              {
                value: 21.4,
                date: "28 Mayıs 08:00",
              },
              {
                value: 21.9,
                date: "28 Mayıs 08:05",
              },
              {
                value: 21.9,
                date: "28 Mayıs 08:10",
              },
              {
                value: 22,
                date: "28 Mayıs 08:15",
              },
              {
                value: 21.5,
                date: "28 Mayıs 08:20",
              },
              {
                value: 21.6,
                date: "28 Mayıs 08:25",
              },
              {
                value: 21.8,
                date: "28 Mayıs 08:30",
              },
              {
                value: 21.8,
                date: "28 Mayıs 08:35",
              },
              {
                value: 21.9,
                date: "28 Mayıs 08:40",
              },
              {
                value: 21.5,
                date: "28 Mayıs 08:45",
              },
              {
                value: 21.3,
                date: "28 Mayıs 08:50",
              },
              {
                value: 21.6,
                date: "28 Mayıs 08:55",
              },
              {
                value: 22,
                date: "28 Mayıs 09:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 09:05",
              },
              {
                value: 23.3,
                date: "28 Mayıs 09:10",
              },
              {
                value: 23.9,
                date: "28 Mayıs 09:15",
              },
              {
                value: 24.1,
                date: "28 Mayıs 09:20",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:25",
              },
              {
                value: 23.4,
                date: "28 Mayıs 09:30",
              },
              {
                value: 24,
                date: "28 Mayıs 09:35",
              },
              {
                value: 24.3,
                date: "28 Mayıs 09:40",
              },
              {
                value: 23.1,
                date: "28 Mayıs 09:45",
              },
              {
                value: 22.4,
                date: "28 Mayıs 09:50",
              },
              {
                value: 22.1,
                date: "28 Mayıs 09:55",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:00",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:05",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:10",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:15",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:20",
              },
              {
                value: 22,
                date: "28 Mayıs 10:25",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:30",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:35",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:40",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:45",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:50",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:55",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:00",
              },
              {
                value: 22,
                date: "28 Mayıs 11:05",
              },
              {
                value: 21.8,
                date: "28 Mayıs 11:10",
              },
              {
                value: 21.8,
                date: "28 Mayıs 11:15",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:20",
              },
              {
                value: 22.3,
                date: "28 Mayıs 11:25",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:30",
              },
              {
                value: 22.5,
                date: "28 Mayıs 11:35",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:40",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:45",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:50",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:55",
              },
              {
                value: 22.7,
                date: "28 Mayıs 12:00",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:05",
              },
              {
                value: 23.6,
                date: "28 Mayıs 12:10",
              },
              {
                value: 24,
                date: "28 Mayıs 12:15",
              },
              {
                value: 23.7,
                date: "28 Mayıs 12:20",
              },
              {
                value: 23.3,
                date: "28 Mayıs 12:25",
              },
              {
                value: 23,
                date: "28 Mayıs 12:30",
              },
              {
                value: 23,
                date: "28 Mayıs 12:35",
              },
              {
                value: 23,
                date: "28 Mayıs 12:40",
              },
              {
                value: 23,
                date: "28 Mayıs 12:45",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:50",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:55",
              },
              {
                value: 22.8,
                date: "28 Mayıs 13:00",
              },
              {
                value: 23,
                date: "28 Mayıs 13:05",
              },
              {
                value: 23.6,
                date: "28 Mayıs 13:10",
              },
              {
                value: 23.5,
                date: "28 Mayıs 13:15",
              },
              {
                value: 22.9,
                date: "28 Mayıs 13:20",
              },
              {
                value: 22.8,
                date: "28 Mayıs 13:25",
              },
              {
                value: 22.5,
                date: "28 Mayıs 13:30",
              },
              {
                value: 22.3,
                date: "28 Mayıs 13:35",
              },
              {
                value: 22.1,
                date: "28 Mayıs 13:40",
              },
              {
                value: 22,
                date: "28 Mayıs 13:45",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:50",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:55",
              },
              {
                value: 22.4,
                date: "28 Mayıs 14:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:05",
              },
              {
                value: 22.9,
                date: "28 Mayıs 14:10",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:15",
              },
              {
                value: 22.2,
                date: "28 Mayıs 14:20",
              },
              {
                value: 21.9,
                date: "28 Mayıs 14:25",
              },
              {
                value: 22.1,
                date: "28 Mayıs 14:30",
              },
              {
                value: 23,
                date: "28 Mayıs 14:35",
              },
              {
                value: 23.8,
                date: "28 Mayıs 14:40",
              },
              {
                value: 24.9,
                date: "28 Mayıs 14:45",
              },
              {
                value: 26.1,
                date: "28 Mayıs 14:50",
              },
              {
                value: 27.5,
                date: "28 Mayıs 14:55",
              },
              {
                value: 28.4,
                date: "28 Mayıs 15:00",
              },
              {
                value: 28.8,
                date: "28 Mayıs 15:05",
              },
              {
                value: 29.1,
                date: "28 Mayıs 15:10",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:15",
              },
              {
                value: 27.8,
                date: "28 Mayıs 15:20",
              },
              {
                value: 25.8,
                date: "28 Mayıs 15:25",
              },
              {
                value: 24.7,
                date: "28 Mayıs 15:30",
              },
              {
                value: 24.4,
                date: "28 Mayıs 15:35",
              },
              {
                value: 24.3,
                date: "28 Mayıs 15:40",
              },
              {
                value: 24.3,
                date: "28 Mayıs 15:45",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:50",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:55",
              },
              {
                value: 23.3,
                date: "28 Mayıs 16:00",
              },
              {
                value: 23.4,
                date: "28 Mayıs 16:05",
              },
              {
                value: 23.3,
                date: "28 Mayıs 16:10",
              },
              {
                value: 23,
                date: "28 Mayıs 16:15",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:20",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:25",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:30",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:35",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:40",
              },
              {
                value: 23,
                date: "28 Mayıs 16:45",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:50",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:55",
              },
              {
                value: 22.8,
                date: "28 Mayıs 17:00",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:05",
              },
              {
                value: 23.4,
                date: "28 Mayıs 17:10",
              },
              {
                value: 23.8,
                date: "28 Mayıs 17:15",
              },
              {
                value: 25.3,
                date: "28 Mayıs 17:20",
              },
              {
                value: 25.8,
                date: "28 Mayıs 17:25",
              },
              {
                value: 25.1,
                date: "28 Mayıs 17:30",
              },
              {
                value: 24.1,
                date: "28 Mayıs 17:35",
              },
              {
                value: 23.7,
                date: "28 Mayıs 17:40",
              },
              {
                value: 24,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 10.1,
                avg: 13.29,
                max: 23.2,
                date: "28 Nisan 23",
              },
              {
                min: 8,
                avg: 16.62,
                max: 26.3,
                date: "29 Nisan 23",
              },
              {
                min: 12.6,
                avg: 17.81,
                max: 26.3,
                date: "30 Nisan 23",
              },
              {
                min: 11.8,
                avg: 19.53,
                max: 30.4,
                date: "01 Mayıs 23",
              },
              {
                min: 14.1,
                avg: 19.7,
                max: 27.5,
                date: "02 Mayıs 23",
              },
              {
                min: 13.6,
                avg: 18.55,
                max: 27.1,
                date: "03 Mayıs 23",
              },
              {
                min: 14.5,
                avg: 20.65,
                max: 29.9,
                date: "04 Mayıs 23",
              },
              {
                min: 12.7,
                avg: 16.42,
                max: 22.9,
                date: "05 Mayıs 23",
              },
              {
                min: 13,
                avg: 18.55,
                max: 27,
                date: "06 Mayıs 23",
              },
              {
                min: 12.5,
                avg: 19.8,
                max: 29.3,
                date: "07 Mayıs 23",
              },
              {
                min: 13,
                avg: 19.9,
                max: 29.5,
                date: "08 Mayıs 23",
              },
              {
                min: 12.8,
                avg: 18.05,
                max: 26.9,
                date: "09 Mayıs 23",
              },
              {
                min: 12.6,
                avg: 17.44,
                max: 26.5,
                date: "10 Mayıs 23",
              },
              {
                min: 13.1,
                avg: 17.3,
                max: 24.6,
                date: "11 Mayıs 23",
              },
              {
                min: 12.2,
                avg: 15.89,
                max: 23.6,
                date: "12 Mayıs 23",
              },
              {
                min: 8.3,
                avg: 17.68,
                max: 27.1,
                date: "13 Mayıs 23",
              },
              {
                min: 7.8,
                avg: 17.01,
                max: 27.2,
                date: "14 Mayıs 23",
              },
              {
                min: 12.7,
                avg: 21.71,
                max: 33.4,
                date: "15 Mayıs 23",
              },
              {
                min: 14.8,
                avg: 21.06,
                max: 29.9,
                date: "16 Mayıs 23",
              },
              {
                min: 16.8,
                avg: 23.06,
                max: 34.7,
                date: "17 Mayıs 23",
              },
              {
                min: 15.5,
                avg: 20.4,
                max: 27,
                date: "18 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 19.94,
                max: 30.3,
                date: "19 Mayıs 23",
              },
              {
                min: 11.8,
                avg: 20.26,
                max: 30.2,
                date: "20 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 20.16,
                max: 29.2,
                date: "21 Mayıs 23",
              },
              {
                min: 13.4,
                avg: 19.91,
                max: 29.1,
                date: "22 Mayıs 23",
              },
              {
                min: 13.2,
                avg: 20.91,
                max: 30,
                date: "23 Mayıs 23",
              },
              {
                min: 13.7,
                avg: 20.8,
                max: 31.5,
                date: "24 Mayıs 23",
              },
              {
                min: 12.6,
                avg: 21.59,
                max: 31.3,
                date: "25 Mayıs 23",
              },
              {
                min: 13.6,
                avg: 22.12,
                max: 32,
                date: "26 Mayıs 23",
              },
              {
                min: 15,
                avg: 22.24,
                max: 32,
                date: "27 Mayıs 23",
              },
              {
                min: 15.9,
                avg: 21.02,
                max: 29.2,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 14.8,
                avg: 15.18,
                max: 15.5,
                date: "9 - 15 Ocak",
              },
              {
                min: 9.5,
                avg: 18.04,
                max: 28.4,
                date: "16 - 22 Ocak",
              },
              {
                min: 9.1,
                avg: 15.18,
                max: 25.2,
                date: "23 - 29 Ocak",
              },
              {
                min: 7,
                avg: 13.47,
                max: 26.3,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: 7.6,
                avg: 13.96,
                max: 29.3,
                date: "6 - 12 Şubat",
              },
              {
                min: 10.1,
                avg: 16.99,
                max: 25.4,
                date: "13 - 19 Şubat",
              },
              {
                min: 10.3,
                avg: 16.89,
                max: 29.8,
                date: "20 - 26 Şubat",
              },
              {
                min: 9.9,
                avg: 16.03,
                max: 26,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 6.9,
                avg: 15.72,
                max: 26.7,
                date: "6 - 12 Mart",
              },
              {
                min: 8.2,
                avg: 15.13,
                max: 29.1,
                date: "13 - 19 Mart",
              },
              {
                min: 8.9,
                avg: 16.94,
                max: 27.5,
                date: "20 - 26 Mart",
              },
              {
                min: 5.7,
                avg: 17.22,
                max: 28.8,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 6.7,
                avg: 16.74,
                max: 28.4,
                date: "3 - 9 Nisan",
              },
              {
                min: 6.8,
                avg: 18.77,
                max: 44.3,
                date: "10 - 16 Nisan",
              },
              {
                min: 11.3,
                avg: 19,
                max: 28,
                date: "17 - 23 Nisan",
              },
              {
                min: 8,
                avg: 17.73,
                max: 30.4,
                date: "24 - 30 Nisan",
              },
              {
                min: 12.5,
                avg: 18.85,
                max: 29.9,
                date: "1 - 7 Mayıs",
              },
              {
                min: 7.8,
                avg: 18.71,
                max: 34.7,
                date: "8 - 14 Mayıs",
              },
              {
                min: 11.8,
                avg: 20.49,
                max: 31.5,
                date: "15 - 21 Mayıs",
              },
              {
                min: 12.6,
                avg: 21.47,
                max: 32,
                date: "22 - 28 Mayıs",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    greenhouse_name: "Seracell Seram 1",
    sektors: [
      {
        sektor_name: "Sektör-1",
        sensor_list: [
          {
            sensor_name: "Sıcaklığımmm",
            sensor_type: "Hava Sıcaklığı",
            unit: "°C",
            minutely: [
              {
                value: 16,
                date: "28 Mayıs 05:50",
              },
              {
                value: 16,
                date: "28 Mayıs 05:55",
              },
              {
                value: 16,
                date: "28 Mayıs 06:00",
              },
              {
                value: 16,
                date: "28 Mayıs 06:05",
              },
              {
                value: 16.1,
                date: "28 Mayıs 06:10",
              },
              {
                value: 16.1,
                date: "28 Mayıs 06:15",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:20",
              },
              {
                value: 16.2,
                date: "28 Mayıs 06:25",
              },
              {
                value: 16.3,
                date: "28 Mayıs 06:30",
              },
              {
                value: 16.5,
                date: "28 Mayıs 06:35",
              },
              {
                value: 16.7,
                date: "28 Mayıs 06:40",
              },
              {
                value: 17,
                date: "28 Mayıs 06:50",
              },
              {
                value: 17.2,
                date: "28 Mayıs 06:55",
              },
              {
                value: 17.5,
                date: "28 Mayıs 07:00",
              },
              {
                value: 17.7,
                date: "28 Mayıs 07:05",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:10",
              },
              {
                value: 18.1,
                date: "28 Mayıs 07:15",
              },
              {
                value: 18.3,
                date: "28 Mayıs 07:20",
              },
              {
                value: 18.6,
                date: "28 Mayıs 07:25",
              },
              {
                value: 18.9,
                date: "28 Mayıs 07:30",
              },
              {
                value: 19.2,
                date: "28 Mayıs 07:35",
              },
              {
                value: 19.5,
                date: "28 Mayıs 07:40",
              },
              {
                value: 19.8,
                date: "28 Mayıs 07:45",
              },
              {
                value: 20.3,
                date: "28 Mayıs 07:50",
              },
              {
                value: 20.8,
                date: "28 Mayıs 07:55",
              },
              {
                value: 21.4,
                date: "28 Mayıs 08:00",
              },
              {
                value: 21.9,
                date: "28 Mayıs 08:05",
              },
              {
                value: 21.9,
                date: "28 Mayıs 08:10",
              },
              {
                value: 22,
                date: "28 Mayıs 08:15",
              },
              {
                value: 21.5,
                date: "28 Mayıs 08:20",
              },
              {
                value: 21.6,
                date: "28 Mayıs 08:25",
              },
              {
                value: 21.8,
                date: "28 Mayıs 08:30",
              },
              {
                value: 21.8,
                date: "28 Mayıs 08:35",
              },
              {
                value: 21.9,
                date: "28 Mayıs 08:40",
              },
              {
                value: 21.5,
                date: "28 Mayıs 08:45",
              },
              {
                value: 21.3,
                date: "28 Mayıs 08:50",
              },
              {
                value: 21.6,
                date: "28 Mayıs 08:55",
              },
              {
                value: 22,
                date: "28 Mayıs 09:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 09:05",
              },
              {
                value: 23.3,
                date: "28 Mayıs 09:10",
              },
              {
                value: 23.9,
                date: "28 Mayıs 09:15",
              },
              {
                value: 24.1,
                date: "28 Mayıs 09:20",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:25",
              },
              {
                value: 23.4,
                date: "28 Mayıs 09:30",
              },
              {
                value: 24,
                date: "28 Mayıs 09:35",
              },
              {
                value: 24.3,
                date: "28 Mayıs 09:40",
              },
              {
                value: 23.1,
                date: "28 Mayıs 09:45",
              },
              {
                value: 22.4,
                date: "28 Mayıs 09:50",
              },
              {
                value: 22.1,
                date: "28 Mayıs 09:55",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:00",
              },
              {
                value: 21.8,
                date: "28 Mayıs 10:05",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:10",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:15",
              },
              {
                value: 21.9,
                date: "28 Mayıs 10:20",
              },
              {
                value: 22,
                date: "28 Mayıs 10:25",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:30",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:35",
              },
              {
                value: 22.2,
                date: "28 Mayıs 10:40",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:45",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:50",
              },
              {
                value: 22.4,
                date: "28 Mayıs 10:55",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:00",
              },
              {
                value: 22,
                date: "28 Mayıs 11:05",
              },
              {
                value: 21.8,
                date: "28 Mayıs 11:10",
              },
              {
                value: 21.8,
                date: "28 Mayıs 11:15",
              },
              {
                value: 22.2,
                date: "28 Mayıs 11:20",
              },
              {
                value: 22.3,
                date: "28 Mayıs 11:25",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:30",
              },
              {
                value: 22.5,
                date: "28 Mayıs 11:35",
              },
              {
                value: 22.7,
                date: "28 Mayıs 11:40",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:45",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:50",
              },
              {
                value: 22.6,
                date: "28 Mayıs 11:55",
              },
              {
                value: 22.7,
                date: "28 Mayıs 12:00",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:05",
              },
              {
                value: 23.6,
                date: "28 Mayıs 12:10",
              },
              {
                value: 24,
                date: "28 Mayıs 12:15",
              },
              {
                value: 23.7,
                date: "28 Mayıs 12:20",
              },
              {
                value: 23.3,
                date: "28 Mayıs 12:25",
              },
              {
                value: 23,
                date: "28 Mayıs 12:30",
              },
              {
                value: 23,
                date: "28 Mayıs 12:35",
              },
              {
                value: 23,
                date: "28 Mayıs 12:40",
              },
              {
                value: 23,
                date: "28 Mayıs 12:45",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:50",
              },
              {
                value: 22.9,
                date: "28 Mayıs 12:55",
              },
              {
                value: 22.8,
                date: "28 Mayıs 13:00",
              },
              {
                value: 23,
                date: "28 Mayıs 13:05",
              },
              {
                value: 23.6,
                date: "28 Mayıs 13:10",
              },
              {
                value: 23.5,
                date: "28 Mayıs 13:15",
              },
              {
                value: 22.9,
                date: "28 Mayıs 13:20",
              },
              {
                value: 22.8,
                date: "28 Mayıs 13:25",
              },
              {
                value: 22.5,
                date: "28 Mayıs 13:30",
              },
              {
                value: 22.3,
                date: "28 Mayıs 13:35",
              },
              {
                value: 22.1,
                date: "28 Mayıs 13:40",
              },
              {
                value: 22,
                date: "28 Mayıs 13:45",
              },
              {
                value: 21.9,
                date: "28 Mayıs 13:50",
              },
              {
                value: 22.2,
                date: "28 Mayıs 13:55",
              },
              {
                value: 22.4,
                date: "28 Mayıs 14:00",
              },
              {
                value: 22.6,
                date: "28 Mayıs 14:05",
              },
              {
                value: 22.9,
                date: "28 Mayıs 14:10",
              },
              {
                value: 22.8,
                date: "28 Mayıs 14:15",
              },
              {
                value: 22.2,
                date: "28 Mayıs 14:20",
              },
              {
                value: 21.9,
                date: "28 Mayıs 14:25",
              },
              {
                value: 22.1,
                date: "28 Mayıs 14:30",
              },
              {
                value: 23,
                date: "28 Mayıs 14:35",
              },
              {
                value: 23.8,
                date: "28 Mayıs 14:40",
              },
              {
                value: 24.9,
                date: "28 Mayıs 14:45",
              },
              {
                value: 26.1,
                date: "28 Mayıs 14:50",
              },
              {
                value: 27.5,
                date: "28 Mayıs 14:55",
              },
              {
                value: 28.4,
                date: "28 Mayıs 15:00",
              },
              {
                value: 28.8,
                date: "28 Mayıs 15:05",
              },
              {
                value: 29.1,
                date: "28 Mayıs 15:10",
              },
              {
                value: 29.2,
                date: "28 Mayıs 15:15",
              },
              {
                value: 27.8,
                date: "28 Mayıs 15:20",
              },
              {
                value: 25.8,
                date: "28 Mayıs 15:25",
              },
              {
                value: 24.7,
                date: "28 Mayıs 15:30",
              },
              {
                value: 24.4,
                date: "28 Mayıs 15:35",
              },
              {
                value: 24.3,
                date: "28 Mayıs 15:40",
              },
              {
                value: 24.3,
                date: "28 Mayıs 15:45",
              },
              {
                value: 24.1,
                date: "28 Mayıs 15:50",
              },
              {
                value: 23.9,
                date: "28 Mayıs 15:55",
              },
              {
                value: 23.3,
                date: "28 Mayıs 16:00",
              },
              {
                value: 23.4,
                date: "28 Mayıs 16:05",
              },
              {
                value: 23.3,
                date: "28 Mayıs 16:10",
              },
              {
                value: 23,
                date: "28 Mayıs 16:15",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:20",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:25",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:30",
              },
              {
                value: 22.7,
                date: "28 Mayıs 16:35",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:40",
              },
              {
                value: 23,
                date: "28 Mayıs 16:45",
              },
              {
                value: 22.9,
                date: "28 Mayıs 16:50",
              },
              {
                value: 22.8,
                date: "28 Mayıs 16:55",
              },
              {
                value: 22.8,
                date: "28 Mayıs 17:00",
              },
              {
                value: 22.9,
                date: "28 Mayıs 17:05",
              },
              {
                value: 23.4,
                date: "28 Mayıs 17:10",
              },
              {
                value: 23.8,
                date: "28 Mayıs 17:15",
              },
              {
                value: 25.3,
                date: "28 Mayıs 17:20",
              },
              {
                value: 25.8,
                date: "28 Mayıs 17:25",
              },
              {
                value: 25.1,
                date: "28 Mayıs 17:30",
              },
              {
                value: 24.1,
                date: "28 Mayıs 17:35",
              },
              {
                value: 23.7,
                date: "28 Mayıs 17:40",
              },
              {
                value: 24,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 10.1,
                avg: 13.29,
                max: 23.2,
                date: "28 Nisan 23",
              },
              {
                min: 8,
                avg: 16.62,
                max: 26.3,
                date: "29 Nisan 23",
              },
              {
                min: 12.6,
                avg: 17.81,
                max: 26.3,
                date: "30 Nisan 23",
              },
              {
                min: 11.8,
                avg: 19.53,
                max: 30.4,
                date: "01 Mayıs 23",
              },
              {
                min: 14.1,
                avg: 19.7,
                max: 27.5,
                date: "02 Mayıs 23",
              },
              {
                min: 13.6,
                avg: 18.55,
                max: 27.1,
                date: "03 Mayıs 23",
              },
              {
                min: 14.5,
                avg: 20.65,
                max: 29.9,
                date: "04 Mayıs 23",
              },
              {
                min: 12.7,
                avg: 16.42,
                max: 22.9,
                date: "05 Mayıs 23",
              },
              {
                min: 13,
                avg: 18.55,
                max: 27,
                date: "06 Mayıs 23",
              },
              {
                min: 12.5,
                avg: 19.8,
                max: 29.3,
                date: "07 Mayıs 23",
              },
              {
                min: 13,
                avg: 19.9,
                max: 29.5,
                date: "08 Mayıs 23",
              },
              {
                min: 12.8,
                avg: 18.05,
                max: 26.9,
                date: "09 Mayıs 23",
              },
              {
                min: 12.6,
                avg: 17.44,
                max: 26.5,
                date: "10 Mayıs 23",
              },
              {
                min: 13.1,
                avg: 17.3,
                max: 24.6,
                date: "11 Mayıs 23",
              },
              {
                min: 12.2,
                avg: 15.89,
                max: 23.6,
                date: "12 Mayıs 23",
              },
              {
                min: 8.3,
                avg: 17.68,
                max: 27.1,
                date: "13 Mayıs 23",
              },
              {
                min: 7.8,
                avg: 17.01,
                max: 27.2,
                date: "14 Mayıs 23",
              },
              {
                min: 12.7,
                avg: 21.71,
                max: 33.4,
                date: "15 Mayıs 23",
              },
              {
                min: 14.8,
                avg: 21.06,
                max: 29.9,
                date: "16 Mayıs 23",
              },
              {
                min: 16.8,
                avg: 23.06,
                max: 34.7,
                date: "17 Mayıs 23",
              },
              {
                min: 15.5,
                avg: 20.4,
                max: 27,
                date: "18 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 19.94,
                max: 30.3,
                date: "19 Mayıs 23",
              },
              {
                min: 11.8,
                avg: 20.26,
                max: 30.2,
                date: "20 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 20.16,
                max: 29.2,
                date: "21 Mayıs 23",
              },
              {
                min: 13.4,
                avg: 19.91,
                max: 29.1,
                date: "22 Mayıs 23",
              },
              {
                min: 13.2,
                avg: 20.91,
                max: 30,
                date: "23 Mayıs 23",
              },
              {
                min: 13.7,
                avg: 20.8,
                max: 31.5,
                date: "24 Mayıs 23",
              },
              {
                min: 12.6,
                avg: 21.59,
                max: 31.3,
                date: "25 Mayıs 23",
              },
              {
                min: 13.6,
                avg: 22.12,
                max: 32,
                date: "26 Mayıs 23",
              },
              {
                min: 15,
                avg: 22.24,
                max: 32,
                date: "27 Mayıs 23",
              },
              {
                min: 15.9,
                avg: 21.02,
                max: 29.2,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 14.8,
                avg: 15.18,
                max: 15.5,
                date: "9 - 15 Ocak",
              },
              {
                min: 9.5,
                avg: 18.04,
                max: 28.4,
                date: "16 - 22 Ocak",
              },
              {
                min: 9.1,
                avg: 15.18,
                max: 25.2,
                date: "23 - 29 Ocak",
              },
              {
                min: 7,
                avg: 13.47,
                max: 26.3,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: 7.6,
                avg: 13.96,
                max: 29.3,
                date: "6 - 12 Şubat",
              },
              {
                min: 10.1,
                avg: 16.99,
                max: 25.4,
                date: "13 - 19 Şubat",
              },
              {
                min: 10.3,
                avg: 16.89,
                max: 29.8,
                date: "20 - 26 Şubat",
              },
              {
                min: 9.9,
                avg: 16.03,
                max: 26,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 6.9,
                avg: 15.72,
                max: 26.7,
                date: "6 - 12 Mart",
              },
              {
                min: 8.2,
                avg: 15.13,
                max: 29.1,
                date: "13 - 19 Mart",
              },
              {
                min: 8.9,
                avg: 16.94,
                max: 27.5,
                date: "20 - 26 Mart",
              },
              {
                min: 5.7,
                avg: 17.22,
                max: 28.8,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 6.7,
                avg: 16.74,
                max: 28.4,
                date: "3 - 9 Nisan",
              },
              {
                min: 6.8,
                avg: 18.77,
                max: 44.3,
                date: "10 - 16 Nisan",
              },
              {
                min: 11.3,
                avg: 19,
                max: 28,
                date: "17 - 23 Nisan",
              },
              {
                min: 8,
                avg: 17.73,
                max: 30.4,
                date: "24 - 30 Nisan",
              },
              {
                min: 12.5,
                avg: 18.85,
                max: 29.9,
                date: "1 - 7 Mayıs",
              },
              {
                min: 7.8,
                avg: 18.71,
                max: 34.7,
                date: "8 - 14 Mayıs",
              },
              {
                min: 11.8,
                avg: 20.49,
                max: 31.5,
                date: "15 - 21 Mayıs",
              },
              {
                min: 12.6,
                avg: 21.47,
                max: 32,
                date: "22 - 28 Mayıs",
              },
            ],
          },
          {
            sensor_name: "ph sensörümmm",
            sensor_type: "pH",
            unit: "",
            minutely: [
              {
                value: 7,
                date: "28 Mayıs 05:50",
              },
              {
                value: 7,
                date: "28 Mayıs 05:55",
              },
              {
                value: 7,
                date: "28 Mayıs 06:00",
              },
              {
                value: 7,
                date: "28 Mayıs 06:05",
              },
              {
                value: 7,
                date: "28 Mayıs 06:10",
              },
              {
                value: 7,
                date: "28 Mayıs 06:15",
              },
              {
                value: 7,
                date: "28 Mayıs 06:20",
              },
              {
                value: 7,
                date: "28 Mayıs 06:25",
              },
              {
                value: 7,
                date: "28 Mayıs 06:30",
              },
              {
                value: 7,
                date: "28 Mayıs 06:35",
              },
              {
                value: 7,
                date: "28 Mayıs 06:40",
              },
              {
                value: 7,
                date: "28 Mayıs 06:50",
              },
              {
                value: 7,
                date: "28 Mayıs 06:55",
              },
              {
                value: 7,
                date: "28 Mayıs 07:00",
              },
              {
                value: 7,
                date: "28 Mayıs 07:05",
              },
              {
                value: 7,
                date: "28 Mayıs 07:10",
              },
              {
                value: 7,
                date: "28 Mayıs 07:15",
              },
              {
                value: 7,
                date: "28 Mayıs 07:20",
              },
              {
                value: 7,
                date: "28 Mayıs 07:25",
              },
              {
                value: 7,
                date: "28 Mayıs 07:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 07:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 08:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 09:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 10:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 11:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 12:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 13:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:25",
              },
              {
                value: 7,
                date: "28 Mayıs 14:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 14:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:00",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:10",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:15",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:20",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:25",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:30",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:35",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:40",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:45",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:50",
              },
              {
                value: 7.1,
                date: "28 Mayıs 15:55",
              },
              {
                value: 7.1,
                date: "28 Mayıs 16:00",
              },
              {
                value: 7,
                date: "28 Mayıs 16:05",
              },
              {
                value: 7.1,
                date: "28 Mayıs 16:10",
              },
              {
                value: 7,
                date: "28 Mayıs 16:15",
              },
              {
                value: 7,
                date: "28 Mayıs 16:20",
              },
              {
                value: 7,
                date: "28 Mayıs 16:25",
              },
              {
                value: 7,
                date: "28 Mayıs 16:30",
              },
              {
                value: 7,
                date: "28 Mayıs 16:35",
              },
              {
                value: 7,
                date: "28 Mayıs 16:40",
              },
              {
                value: 7,
                date: "28 Mayıs 16:45",
              },
              {
                value: 7,
                date: "28 Mayıs 16:50",
              },
              {
                value: 7,
                date: "28 Mayıs 16:55",
              },
              {
                value: 7,
                date: "28 Mayıs 17:00",
              },
              {
                value: 7,
                date: "28 Mayıs 17:05",
              },
              {
                value: 7,
                date: "28 Mayıs 17:10",
              },
              {
                value: 7,
                date: "28 Mayıs 17:15",
              },
              {
                value: 7,
                date: "28 Mayıs 17:20",
              },
              {
                value: 7,
                date: "28 Mayıs 17:25",
              },
              {
                value: 7,
                date: "28 Mayıs 17:30",
              },
              {
                value: 7,
                date: "28 Mayıs 17:35",
              },
              {
                value: 7,
                date: "28 Mayıs 17:40",
              },
              {
                value: 7,
                date: "28 Mayıs 17:45",
              },
            ],
            daily: [
              {
                min: 8.3,
                avg: 8.33,
                max: 8.4,
                date: "28 Nisan 23",
              },
              {
                min: 8.3,
                avg: 8.36,
                max: 8.4,
                date: "29 Nisan 23",
              },
              {
                min: 8.3,
                avg: 8.34,
                max: 8.4,
                date: "30 Nisan 23",
              },
              {
                min: 8.3,
                avg: 8.31,
                max: 8.4,
                date: "01 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.34,
                max: 7.4,
                date: "02 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.35,
                max: 7.4,
                date: "03 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.31,
                max: 7.4,
                date: "04 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.3,
                max: 7.4,
                date: "05 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.3,
                max: 7.4,
                date: "06 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.27,
                max: 7.3,
                date: "07 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.3,
                max: 7.4,
                date: "08 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.31,
                max: 7.4,
                date: "09 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.33,
                max: 7.4,
                date: "10 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.3,
                max: 7.3,
                date: "11 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.34,
                max: 7.4,
                date: "12 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.29,
                max: 7.4,
                date: "13 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.23,
                max: 7.3,
                date: "14 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.26,
                max: 7.3,
                date: "15 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 30.14,
                max: 6553.5,
                date: "16 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.33,
                max: 7.4,
                date: "17 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 7.32,
                max: 7.4,
                date: "18 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 30.08,
                max: 6553.5,
                date: "19 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 7.17,
                max: 7.3,
                date: "20 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 7.16,
                max: 7.9,
                date: "21 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 30.07,
                max: 6553.5,
                date: "22 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.25,
                max: 7.3,
                date: "23 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.3,
                max: 7.4,
                date: "24 Mayıs 23",
              },
              {
                min: 7.2,
                avg: 7.27,
                max: 7.4,
                date: "25 Mayıs 23",
              },
              {
                min: 7.1,
                avg: 7.18,
                max: 7.3,
                date: "26 Mayıs 23",
              },
              {
                min: 7,
                avg: 7.09,
                max: 7.2,
                date: "27 Mayıs 23",
              },
              {
                min: 7,
                avg: 7.06,
                max: 7.1,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 7,
                avg: 7.4,
                max: 8,
                date: "6 - 12 Şubat",
              },
              {
                min: 6.9,
                avg: 7.15,
                max: 7.4,
                date: "13 - 19 Şubat",
              },
              {
                min: 7.1,
                avg: 7.37,
                max: 7.6,
                date: "20 - 26 Şubat",
              },
              {
                min: 7.3,
                avg: 14.02,
                max: 6553.5,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 7.3,
                avg: 10.71,
                max: 6553.5,
                date: "6 - 12 Mart",
              },
              {
                min: 7.2,
                avg: 7.42,
                max: 7.5,
                date: "13 - 19 Mart",
              },
              {
                min: 7.3,
                avg: 17.25,
                max: 6553.5,
                date: "20 - 26 Mart",
              },
              {
                min: 7.3,
                avg: 7.41,
                max: 7.5,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 7.2,
                avg: 7.37,
                max: 7.5,
                date: "3 - 9 Nisan",
              },
              {
                min: 7.1,
                avg: 10.7,
                max: 6553.5,
                date: "10 - 16 Nisan",
              },
              {
                min: 7.2,
                avg: 10.64,
                max: 6553.5,
                date: "17 - 23 Nisan",
              },
              {
                min: 7.2,
                avg: 7.34,
                max: 7.5,
                date: "24 - 30 Nisan",
              },
              {
                min: 7.2,
                avg: 7.3,
                max: 7.4,
                date: "1 - 7 Mayıs",
              },
              {
                min: 7.2,
                avg: 10.57,
                max: 6553.5,
                date: "8 - 14 Mayıs",
              },
              {
                min: 7.1,
                avg: 14.3,
                max: 6553.5,
                date: "15 - 21 Mayıs",
              },
              {
                min: 7,
                avg: 7.17,
                max: 7.4,
                date: "22 - 28 Mayıs",
              },
            ],
          },
        ],
      },
      {
        sektor_name: "Sektör-2",
        sensor_list: [
          {
            sensor_name: "Sıcaklık_Sensörü",
            sensor_type: "Hava Sıcaklığı",
            unit: "°C",
            minutely: [
              {
                value: 15.9,
                date: "28 Mayıs 05:48",
              },
              {
                value: 16,
                date: "28 Mayıs 05:53",
              },
              {
                value: 15.9,
                date: "28 Mayıs 05:58",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:03",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:08",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:13",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:18",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:23",
              },
              {
                value: 15.9,
                date: "28 Mayıs 06:28",
              },
              {
                value: 16.1,
                date: "28 Mayıs 06:33",
              },
              {
                value: 17,
                date: "28 Mayıs 06:38",
              },
              {
                value: 17.5,
                date: "28 Mayıs 06:43",
              },
              {
                value: 17.9,
                date: "28 Mayıs 06:48",
              },
              {
                value: 18.3,
                date: "28 Mayıs 06:53",
              },
              {
                value: 18.7,
                date: "28 Mayıs 06:58",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:03",
              },
              {
                value: 17.7,
                date: "28 Mayıs 07:08",
              },
              {
                value: 17.4,
                date: "28 Mayıs 07:13",
              },
              {
                value: 17.4,
                date: "28 Mayıs 07:18",
              },
              {
                value: 17.6,
                date: "28 Mayıs 07:23",
              },
              {
                value: 17.8,
                date: "28 Mayıs 07:28",
              },
              {
                value: 18,
                date: "28 Mayıs 07:33",
              },
              {
                value: 18.1,
                date: "28 Mayıs 07:38",
              },
              {
                value: 18.2,
                date: "28 Mayıs 07:43",
              },
              {
                value: 18.4,
                date: "28 Mayıs 07:48",
              },
              {
                value: 18.7,
                date: "28 Mayıs 07:53",
              },
              {
                value: 18.8,
                date: "28 Mayıs 07:58",
              },
              {
                value: 19,
                date: "28 Mayıs 08:03",
              },
              {
                value: 19.4,
                date: "28 Mayıs 08:08",
              },
              {
                value: 19.5,
                date: "28 Mayıs 08:13",
              },
              {
                value: 20.1,
                date: "28 Mayıs 08:18",
              },
              {
                value: 20.1,
                date: "28 Mayıs 08:23",
              },
              {
                value: 22.3,
                date: "28 Mayıs 08:28",
              },
              {
                value: 22.9,
                date: "28 Mayıs 08:33",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:38",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:43",
              },
              {
                value: 20.5,
                date: "28 Mayıs 08:48",
              },
              {
                value: 21.5,
                date: "28 Mayıs 08:53",
              },
              {
                value: 21.7,
                date: "28 Mayıs 08:58",
              },
              {
                value: 23.4,
                date: "28 Mayıs 09:03",
              },
              {
                value: 24.2,
                date: "28 Mayıs 09:08",
              },
              {
                value: 24.4,
                date: "28 Mayıs 09:13",
              },
              {
                value: 24.6,
                date: "28 Mayıs 09:18",
              },
              {
                value: 23,
                date: "28 Mayıs 09:23",
              },
              {
                value: 23,
                date: "28 Mayıs 09:28",
              },
              {
                value: 23.7,
                date: "28 Mayıs 09:33",
              },
              {
                value: 25.6,
                date: "28 Mayıs 09:38",
              },
              {
                value: 22.2,
                date: "28 Mayıs 09:43",
              },
              {
                value: 22,
                date: "28 Mayıs 09:48",
              },
              {
                value: 21.1,
                date: "28 Mayıs 09:53",
              },
              {
                value: 21.1,
                date: "28 Mayıs 09:58",
              },
              {
                value: 20.8,
                date: "28 Mayıs 10:03",
              },
              {
                value: 21.3,
                date: "28 Mayıs 10:08",
              },
              {
                value: 21,
                date: "28 Mayıs 10:13",
              },
              {
                value: 21,
                date: "28 Mayıs 10:18",
              },
              {
                value: 21,
                date: "28 Mayıs 10:23",
              },
              {
                value: 21.7,
                date: "28 Mayıs 10:28",
              },
              {
                value: 21.5,
                date: "28 Mayıs 10:33",
              },
              {
                value: 21.3,
                date: "28 Mayıs 10:38",
              },
              {
                value: 21.5,
                date: "28 Mayıs 10:43",
              },
              {
                value: 21.6,
                date: "28 Mayıs 10:48",
              },
              {
                value: 21.4,
                date: "28 Mayıs 10:53",
              },
              {
                value: 21.2,
                date: "28 Mayıs 10:58",
              },
              {
                value: 21.2,
                date: "28 Mayıs 11:03",
              },
              {
                value: 20.9,
                date: "28 Mayıs 11:08",
              },
              {
                value: 21,
                date: "28 Mayıs 11:13",
              },
              {
                value: 21.4,
                date: "28 Mayıs 11:18",
              },
              {
                value: 21.5,
                date: "28 Mayıs 11:23",
              },
              {
                value: 21.7,
                date: "28 Mayıs 11:28",
              },
              {
                value: 21.6,
                date: "28 Mayıs 11:33",
              },
              {
                value: 21.8,
                date: "28 Mayıs 11:38",
              },
              {
                value: 21.7,
                date: "28 Mayıs 11:43",
              },
              {
                value: 21.7,
                date: "28 Mayıs 11:48",
              },
              {
                value: 21.6,
                date: "28 Mayıs 11:53",
              },
              {
                value: 22,
                date: "28 Mayıs 11:58",
              },
              {
                value: 21.9,
                date: "28 Mayıs 12:03",
              },
              {
                value: 22.5,
                date: "28 Mayıs 12:08",
              },
              {
                value: 22.8,
                date: "28 Mayıs 12:13",
              },
              {
                value: 22.3,
                date: "28 Mayıs 12:18",
              },
              {
                value: 21.9,
                date: "28 Mayıs 12:23",
              },
              {
                value: 21.8,
                date: "28 Mayıs 12:28",
              },
              {
                value: 21.7,
                date: "28 Mayıs 12:33",
              },
              {
                value: 21.8,
                date: "28 Mayıs 12:38",
              },
              {
                value: 21.8,
                date: "28 Mayıs 12:43",
              },
              {
                value: 21.5,
                date: "28 Mayıs 12:48",
              },
              {
                value: 21.7,
                date: "28 Mayıs 12:53",
              },
              {
                value: 21.6,
                date: "28 Mayıs 12:58",
              },
              {
                value: 21.4,
                date: "28 Mayıs 13:03",
              },
              {
                value: 22,
                date: "28 Mayıs 13:08",
              },
              {
                value: 22,
                date: "28 Mayıs 13:13",
              },
              {
                value: 21.7,
                date: "28 Mayıs 13:18",
              },
              {
                value: 21.6,
                date: "28 Mayıs 13:23",
              },
              {
                value: 21.5,
                date: "28 Mayıs 13:28",
              },
              {
                value: 21.3,
                date: "28 Mayıs 13:33",
              },
              {
                value: 21.3,
                date: "28 Mayıs 13:38",
              },
              {
                value: 21.3,
                date: "28 Mayıs 13:43",
              },
              {
                value: 21.2,
                date: "28 Mayıs 13:48",
              },
              {
                value: 21.5,
                date: "28 Mayıs 13:53",
              },
              {
                value: 21.7,
                date: "28 Mayıs 13:58",
              },
              {
                value: 21.7,
                date: "28 Mayıs 14:03",
              },
              {
                value: 21.9,
                date: "28 Mayıs 14:08",
              },
              {
                value: 22,
                date: "28 Mayıs 14:13",
              },
              {
                value: 21.1,
                date: "28 Mayıs 14:18",
              },
              {
                value: 20.9,
                date: "28 Mayıs 14:23",
              },
              {
                value: 20.9,
                date: "28 Mayıs 14:28",
              },
              {
                value: 21.4,
                date: "28 Mayıs 14:33",
              },
              {
                value: 22.5,
                date: "28 Mayıs 14:38",
              },
              {
                value: 22.5,
                date: "28 Mayıs 14:43",
              },
              {
                value: 22.9,
                date: "28 Mayıs 14:48",
              },
              {
                value: 23.2,
                date: "28 Mayıs 14:53",
              },
              {
                value: 23.5,
                date: "28 Mayıs 14:58",
              },
              {
                value: 23.1,
                date: "28 Mayıs 15:03",
              },
              {
                value: 23.1,
                date: "28 Mayıs 15:08",
              },
              {
                value: 23.2,
                date: "28 Mayıs 15:13",
              },
              {
                value: 22.8,
                date: "28 Mayıs 15:18",
              },
              {
                value: 22.6,
                date: "28 Mayıs 15:23",
              },
              {
                value: 22.3,
                date: "28 Mayıs 15:28",
              },
              {
                value: 22.6,
                date: "28 Mayıs 15:33",
              },
              {
                value: 22.6,
                date: "28 Mayıs 15:38",
              },
              {
                value: 22.6,
                date: "28 Mayıs 15:43",
              },
              {
                value: 22.2,
                date: "28 Mayıs 15:48",
              },
              {
                value: 22.3,
                date: "28 Mayıs 15:53",
              },
              {
                value: 22.1,
                date: "28 Mayıs 15:58",
              },
              {
                value: 22.1,
                date: "28 Mayıs 16:03",
              },
              {
                value: 22.4,
                date: "28 Mayıs 16:08",
              },
              {
                value: 22.1,
                date: "28 Mayıs 16:13",
              },
              {
                value: 21.7,
                date: "28 Mayıs 16:18",
              },
              {
                value: 21.8,
                date: "28 Mayıs 16:23",
              },
              {
                value: 21.9,
                date: "28 Mayıs 16:28",
              },
              {
                value: 22,
                date: "28 Mayıs 16:33",
              },
              {
                value: 21.9,
                date: "28 Mayıs 16:38",
              },
              {
                value: 22.3,
                date: "28 Mayıs 16:43",
              },
              {
                value: 22.1,
                date: "28 Mayıs 16:48",
              },
              {
                value: 21.9,
                date: "28 Mayıs 16:53",
              },
              {
                value: 22,
                date: "28 Mayıs 16:58",
              },
              {
                value: 21.9,
                date: "28 Mayıs 17:03",
              },
              {
                value: 22.3,
                date: "28 Mayıs 17:10",
              },
              {
                value: 22.4,
                date: "28 Mayıs 17:13",
              },
              {
                value: 23.1,
                date: "28 Mayıs 17:18",
              },
              {
                value: 23.3,
                date: "28 Mayıs 17:23",
              },
              {
                value: 23,
                date: "28 Mayıs 17:28",
              },
              {
                value: 22.3,
                date: "28 Mayıs 17:33",
              },
              {
                value: 22.1,
                date: "28 Mayıs 17:38",
              },
              {
                value: 22.3,
                date: "28 Mayıs 17:43",
              },
            ],
            daily: [
              {
                min: 4.6,
                avg: 8.71,
                max: 18.7,
                date: "28 Nisan 23",
              },
              {
                min: 1.8,
                avg: 11.76,
                max: 22.5,
                date: "29 Nisan 23",
              },
              {
                min: 7.3,
                avg: 14.61,
                max: 24.8,
                date: "30 Nisan 23",
              },
              {
                min: 5.4,
                avg: 16.67,
                max: 26.6,
                date: "01 Mayıs 23",
              },
              {
                min: 9.9,
                avg: 17.62,
                max: 24.3,
                date: "02 Mayıs 23",
              },
              {
                min: 12.2,
                avg: 16.71,
                max: 23.7,
                date: "03 Mayıs 23",
              },
              {
                min: 12.9,
                avg: 18.04,
                max: 25.5,
                date: "04 Mayıs 23",
              },
              {
                min: 11.9,
                avg: 14.13,
                max: 18.3,
                date: "05 Mayıs 23",
              },
              {
                min: 12.1,
                avg: 16.79,
                max: 22.8,
                date: "06 Mayıs 23",
              },
              {
                min: 8.6,
                avg: 17.33,
                max: 25.1,
                date: "07 Mayıs 23",
              },
              {
                min: 8.1,
                avg: 17.2,
                max: 25.8,
                date: "08 Mayıs 23",
              },
              {
                min: 11.6,
                avg: 15.4,
                max: 22.2,
                date: "09 Mayıs 23",
              },
              {
                min: 11,
                avg: 14.35,
                max: 20.2,
                date: "10 Mayıs 23",
              },
              {
                min: 10.5,
                avg: 14.55,
                max: 20.1,
                date: "11 Mayıs 23",
              },
              {
                min: 8,
                avg: 12.99,
                max: 18.3,
                date: "12 Mayıs 23",
              },
              {
                min: 7,
                avg: 15.01,
                max: 23.2,
                date: "13 Mayıs 23",
              },
              {
                min: 7.3,
                avg: 16.34,
                max: 25.1,
                date: "14 Mayıs 23",
              },
              {
                min: 12.4,
                avg: 20.66,
                max: 30.1,
                date: "15 Mayıs 23",
              },
              {
                min: 14.5,
                avg: 20.48,
                max: 28.6,
                date: "16 Mayıs 23",
              },
              {
                min: 15.3,
                avg: 21.31,
                max: 29.3,
                date: "17 Mayıs 23",
              },
              {
                min: 14,
                avg: 18.36,
                max: 23.7,
                date: "18 Mayıs 23",
              },
              {
                min: 10.5,
                avg: 17.76,
                max: 29.1,
                date: "19 Mayıs 23",
              },
              {
                min: 10,
                avg: 18.82,
                max: 27.1,
                date: "20 Mayıs 23",
              },
              {
                min: 11.4,
                avg: 18.95,
                max: 26.9,
                date: "21 Mayıs 23",
              },
              {
                min: 11.1,
                avg: 18.36,
                max: 26.6,
                date: "22 Mayıs 23",
              },
              {
                min: 12.2,
                avg: 19.45,
                max: 26.6,
                date: "23 Mayıs 23",
              },
              {
                min: 11.9,
                avg: 19.38,
                max: 27.8,
                date: "24 Mayıs 23",
              },
              {
                min: 10.7,
                avg: 20.21,
                max: 28.7,
                date: "25 Mayıs 23",
              },
              {
                min: 12.1,
                avg: 21.06,
                max: 29,
                date: "26 Mayıs 23",
              },
              {
                min: 13.8,
                avg: 21.2,
                max: 28.1,
                date: "27 Mayıs 23",
              },
              {
                min: 15.4,
                avg: 20.06,
                max: 25.6,
                date: "28 Mayıs 23",
              },
            ],
            weekly: [
              {
                min: 12.1,
                avg: 12.36,
                max: 12.7,
                date: "9 - 15 Ocak",
              },
              {
                min: 4.4,
                avg: 10.89,
                max: 20.4,
                date: "16 - 22 Ocak",
              },
              {
                min: -0.1,
                avg: 5.85,
                max: 14,
                date: "23 - 29 Ocak",
              },
              {
                min: -2,
                avg: 4.01,
                max: 16.2,
                date: "30 Ocak - 5 Şubat",
              },
              {
                min: -4.2,
                avg: 3.57,
                max: 13.6,
                date: "6 - 12 Şubat",
              },
              {
                min: -2.6,
                avg: 10.9,
                max: 22.9,
                date: "13 - 19 Şubat",
              },
              {
                min: 4.5,
                avg: 13.47,
                max: 23.8,
                date: "20 - 26 Şubat",
              },
              {
                min: 2.6,
                avg: 10.53,
                max: 21.2,
                date: "27 Şubat - 5 Mart",
              },
              {
                min: 0,
                avg: 12.14,
                max: 24.7,
                date: "6 - 12 Mart",
              },
              {
                min: 2.5,
                avg: 9.96,
                max: 21.8,
                date: "13 - 19 Mart",
              },
              {
                min: 2.2,
                avg: 12,
                max: 26.5,
                date: "20 - 26 Mart",
              },
              {
                min: -1.4,
                avg: 13.62,
                max: 26,
                date: "27 Mart - 2 Nisan",
              },
              {
                min: 3.2,
                avg: 11.33,
                max: 22.8,
                date: "3 - 9 Nisan",
              },
              {
                min: 3.5,
                avg: 15.76,
                max: 29.7,
                date: "10 - 16 Nisan",
              },
              {
                min: 4.6,
                avg: 15.56,
                max: 32.1,
                date: "17 - 23 Nisan",
              },
              {
                min: 1.8,
                avg: 14.2,
                max: 26.6,
                date: "24 - 30 Nisan",
              },
              {
                min: 8.1,
                avg: 16.4,
                max: 25.8,
                date: "1 - 7 Mayıs",
              },
              {
                min: 7,
                avg: 16.9,
                max: 30.1,
                date: "8 - 14 Mayıs",
              },
              {
                min: 10,
                avg: 18.87,
                max: 29.1,
                date: "15 - 21 Mayıs",
              },
              {
                min: 10.7,
                avg: 20.3,
                max: 29,
                date: "22 - 28 Mayıs",
              },
            ],
          },
        ],
      },
    ],
  },
];

// Middleware to parse JSON data
app.use(express.json());
app.use(cors());

app.get("/api/data", async (req, res) => {
  try {
    const response = DUMMY_DATA;
    res.json(response.greenhouses);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json({ error: "Failed to fetch data" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
