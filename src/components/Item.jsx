import styled from "styled-components";
import ModelList from "./ModelList";
import YoutubePlayer from "./YoutubeInItemPage";

import { useState } from "react";
import { useParams } from "react-router-dom";

/**
 * 접속 페이지 : http://localhost:3000/item/89
 */

const dummyData = {
  "shops": [
  {
  "id": 177,
  "name": "Balaan",
  "shopUrl": "http://www.balaan.co.kr/shop/goods/goods_view.php?goodsno=17993421",
  "logoUrl": "https://www.balaan.co.kr/favicon.ico",
  "price": 489060,
  "soldOutStatus": "InStock"
  },
  {
  "id": 178,
  "name": "크림",
  "shopUrl": "https://kream.co.kr/products/65219?size=305%28US+W13.5+M12%29",
  "logoUrl": "https://kream.co.kr/favicon.ico",
  "price": 615000,
  "soldOutStatus": "InStock"
  },
  {
  "id": 179,
  "name": "머스트잇",
  "shopUrl": "https://mustit.co.kr/product/product_detail/46000389",
  "logoUrl": "https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_common/ban_share_common.png",
  "price": 497600,
  "soldOutStatus": "InStock"
  }
  ],
  "childItems": [],
  "id": 89,
  "name": "톰삭스 제너럴 퍼포즈 슈 라이트",
  "order": 6,
  "itemImgUrl": "https://shopping-phinf.pstatic.net/main_3330012/33300126639.jpg",
  "color": "크림",
  "size": " ",
"brand": "나이키"
}// ItemResponseDto
const dummyVideoList = [
  {
    "id": 17,
"title": "무난하면서 센스 있는 가을&겨울 남자 코디 추천",
"creator": "핏더사이즈",
"profileImgUrl": "https://yt3.ggpht.com/ytc/AMLnZu-opBs4fsY6Vw06U1VMoTpcaepRcYtkmmPSuOl1=s176-c-k-c0x00ffffff-no-rj",
"videoUrl": "SpzRCbbWmmM",
"timeShopItemLists": [
{
"times": {
"id": 51,
"start": 39
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 149,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34438985886",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 153000,
"soldOutStatus": "InStock"
},
{
"id": 150,
"name": "아트이프엑츠",
"shopUrl": "https://artifacts.co.kr/product/half-zipup-turtle-neck-knit-cream/780/category/105/display/1/",
"logoUrl": "https://artifacts.co.kr/artfinger/img/toplogo.png",
"price": 153000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 75,
"name": "하프 집업 터틀 넥 니트",
"order": 4,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3443898/34438985886.jpg",
"color": "크림",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 208,
"name": "29CM",
"shopUrl": "https://product.29cm.co.kr/catalog/1024334",
"logoUrl": "https://www.29cm.co.kr/favicon.ico",
"price": 153000,
"soldOutStatus": "InStock"
},
{
"id": 209,
"name": "아트이프엑츠",
"shopUrl": "http://artifacts.co.kr/product/detail.html?product_no=644",
"logoUrl": "https://artifacts.co.kr/artfinger/img/toplogo.png",
"price": 153000,
"soldOutStatus": "InStock"
},
{
"id": 210,
"name": "노클레임",
"shopUrl": "https://noclaim.co.kr/product/detail.html?product_no=20950",
"logoUrl": "https://noclaim.co.kr/img/logo.svg",
"price": 153000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 76,
"name": "원 턱 커브드 데님 팬츠",
"order": 5,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3439598/34395989117.jpg",
"color": "블랙",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 151,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34172057218",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 296000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 77,
"name": "리프로덕션오브파운드",
"order": 6,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3417205/34172057218.jpg",
"color": "Brown",
"size": " ",
"brand": "아트이프액츠"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 52,
"start": 87
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 152,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34258165471",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 245000,
"soldOutStatus": "InStock"
},
{
"id": 153,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34258235312",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 245000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 78,
"name": "솔리드 포켓 MA-1",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3425823/34258235312.jpg",
"color": "Black",
"size": " ",
"brand": "아트이프액츠"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 53,
"start": 109
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 154,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=31843400930",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 135000,
"soldOutStatus": "InStock"
},
{
"id": 155,
"name": "아트이프엑츠",
"shopUrl": "https://artifacts.co.kr/product/dewdrop-boucle-knit-cardigan-brown/711/category/43/display/1/",
"logoUrl": "https://artifacts.co.kr/artfinger/img/toplogo.png",
"price": 135000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 79,
"name": "듀드롭 부클 니트 가디건",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3184340/31843400930.jpg",
"color": "브라운",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 55,
"start": 204
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 163,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34409662581",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 360000,
"soldOutStatus": "InStock"
},
{
"id": 164,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=83482788907",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 400000,
"soldOutStatus": "InStock"
},
{
"id": 165,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=82732003838",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 400000,
"soldOutStatus": "InStock"
},
{
"id": 166,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=83944440024",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 400000,
"soldOutStatus": "InStock"
},
{
"id": 167,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34409559098",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 360000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 84,
"name": "FM 5-2",
"order": 1,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3440966/34409662581.jpg",
"color": " ",
"size": " ",
"brand": "프레임몬타나"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 154,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=31843400930",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 135000,
"soldOutStatus": "InStock"
},
{
"id": 155,
"name": "아트이프엑츠",
"shopUrl": "https://artifacts.co.kr/product/dewdrop-boucle-knit-cardigan-brown/711/category/43/display/1/",
"logoUrl": "https://artifacts.co.kr/artfinger/img/toplogo.png",
"price": 135000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 79,
"name": "듀드롭 부클 니트 가디건",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3184340/31843400930.jpg",
"color": "브라운",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 157,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84022700169",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 295000,
"soldOutStatus": "InStock"
},
{
"id": 158,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=82725835004",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 219000,
"soldOutStatus": "InStock"
},
{
"id": 159,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84228058064",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 212900,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 82,
"name": "LOOSE ANKLE DENIM PANTS",
"order": 5,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_8402270/84022700169.jpg",
"color": " ",
"size": "34",
"brand": "오디너리핏츠 "
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 160,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=24458289771",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 187400,
"soldOutStatus": "InStock"
},
{
"id": 161,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=83425614540",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 179900,
"soldOutStatus": "InStock"
},
{
"id": 162,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34791032600",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 239000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 83,
"name": "왈라비",
"order": 6,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_2573930/25739302597.20210125212314.jpg",
"color": "메이플 스웨이드",
"size": " ",
"brand": "클락스"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 56,
"start": 213
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 168,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34945233358",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 165000,
"soldOutStatus": "InStock"
},
{
"id": 169,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34945936502",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 165000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 85,
"name": "Shawl Collar Zipup Knit Cardigan",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3494593/34945936502.jpg",
"color": "Mountain Mist",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 57,
"start": 324
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 168,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34945233358",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 165000,
"soldOutStatus": "InStock"
},
{
"id": 169,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34945936502",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 165000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 85,
"name": "Shawl Collar Zipup Knit Cardigan",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3494593/34945936502.jpg",
"color": "Mountain Mist",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 170,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=12852568591",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 365000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 86,
"name": "M990",
"order": 6,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_1285256/12852568591.jpg",
"color": "그레이",
"size": " ",
"brand": "뉴발란스"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 58,
"start": 337
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 171,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34258166070",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 148000,
"soldOutStatus": "InStock"
},
{
"id": 172,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84728263468",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
},
{
"id": 173,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34127181542",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
},
{
"id": 174,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34126919265",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 87,
"name": "헬릭스 팬츠",
"order": 5,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3412718/34127181542.jpg",
"color": "Brown",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 61,
"start": 366
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 175,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34126947975",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 125000,
"soldOutStatus": "InStock"
},
{
"id": 176,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34127253039",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 125000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 88,
"name": "스트라이프셔츠",
"order": 4,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3412725/34127253039.jpg",
"color": "Indigo",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 59,
"start": 383
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 180,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34409582380",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 324000,
"soldOutStatus": "InStock"
},
{
"id": 181,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=82925118068",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 360000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 90,
"name": "FM 1-4",
"order": 1,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_8292511/82925118068.jpg",
"color": " ",
"size": " ",
"brand": "프레임몬타나"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 175,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34126947975",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 125000,
"soldOutStatus": "InStock"
},
{
"id": 176,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34127253039",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 125000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 88,
"name": "스트라이프셔츠",
"order": 4,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3412725/34127253039.jpg",
"color": "Indigo",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 171,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34258166070",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 148000,
"soldOutStatus": "InStock"
},
{
"id": 172,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84728263468",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
},
{
"id": 173,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34127181542",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
},
{
"id": 174,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34126919265",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 87,
"name": "헬릭스 팬츠",
"order": 5,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3412718/34127181542.jpg",
"color": "Brown",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 177,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=33300126639",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 489060,
"soldOutStatus": "InStock"
},
{
"id": 178,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=33229968184",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 615000,
"soldOutStatus": "InStock"
},
{
"id": 179,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=33729899889",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 497600,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 89,
"name": "톰삭스 제너럴 퍼포즈 슈 라이트",
"order": 6,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3330012/33300126639.jpg",
"color": "크림",
"size": " ",
"brand": "나이키"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 62,
"start": 388
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 182,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34126870965",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 178000,
"soldOutStatus": "InStock"
},
{
"id": 183,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34127268988",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 178000,
"soldOutStatus": "InStock"
},
{
"id": 184,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34126937492",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 178000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 91,
"name": "Cotton Trucker Jacket",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3412726/34127268988.jpg",
"color": "Brown",
"size": "XL",
"brand": "아트이프액츠"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 60,
"start": 443
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 185,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=83094216190",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 101000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 92,
"name": "Wappen Denim Cap",
"order": 0,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_8309421/83094216190.jpg",
"color": "인디고블루",
"size": " ",
"brand": "풀카운트"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 182,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34126870965",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 178000,
"soldOutStatus": "InStock"
},
{
"id": 183,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34127268988",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 178000,
"soldOutStatus": "InStock"
},
{
"id": 184,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34126937492",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 178000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 91,
"name": "Cotton Trucker Jacket",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3412726/34127268988.jpg",
"color": "Brown",
"size": "XL",
"brand": "아트이프액츠"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 171,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34258166070",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 148000,
"soldOutStatus": "InStock"
},
{
"id": 172,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84728263468",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
},
{
"id": 173,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34127181542",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
},
{
"id": 174,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34126919265",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 87,
"name": "헬릭스 팬츠",
"order": 5,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3412718/34127181542.jpg",
"color": "Brown",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 177,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=33300126639",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 489060,
"soldOutStatus": "InStock"
},
{
"id": 178,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=33229968184",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 615000,
"soldOutStatus": "InStock"
},
{
"id": 179,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=33729899889",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 497600,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 89,
"name": "톰삭스 제너럴 퍼포즈 슈 라이트",
"order": 6,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3330012/33300126639.jpg",
"color": "크림",
"size": " ",
"brand": "나이키"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 63,
"start": 448
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 186,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34677695241",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 263000,
"soldOutStatus": "InStock"
},
{
"id": 187,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34677732255",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 263000,
"soldOutStatus": "InStock"
},
{
"id": 188,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34678175631",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 263000,
"soldOutStatus": "InStock"
},
{
"id": 189,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34681058645",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 263000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 93,
"name": "Varsity Jacket",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3467817/34678175631.jpg",
"color": "Navy",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 64,
"start": 529
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 194,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84663315839",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 89000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 97,
"name": "코듀로이 캡",
"order": 0,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_8466331/84663315839.jpg",
"color": "DARK YELLOW",
"size": " ",
"brand": "칼오라인"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 193,
"name": "모스콧",
"shopUrl": "https://moscot.com/products/dahven",
"logoUrl": "https://cdn.shopify.com/s/files/1/2403/8187/files/social-image.jpg?v=1594863638429400318",
"price": 420000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 96,
"name": "DAHVEN",
"order": 1,
"itemImgUrl": "https://cdn.shopify.com/s/files/1/2403/8187/products/dahven-color-black-pos-1_1200x.jpg?v=1644594422",
"color": "Black",
"size": "44size",
"brand": "모스콧"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 186,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34677695241",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 263000,
"soldOutStatus": "InStock"
},
{
"id": 187,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34677732255",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 263000,
"soldOutStatus": "InStock"
},
{
"id": 188,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34678175631",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 263000,
"soldOutStatus": "InStock"
},
{
"id": 189,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34681058645",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 263000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 93,
"name": "Varsity Jacket",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3467817/34678175631.jpg",
"color": "Navy",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 190,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34850659923",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 269000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 94,
"name": "Turtle Neck Knit",
"order": 4,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3485065/34850659923.jpg",
"color": "Black",
"size": "4 size",
"brand": "포터리"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 191,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=32527280952",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 112560,
"soldOutStatus": "InStock"
},
{
"id": 192,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=32660958941",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 131320,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 95,
"name": "소호 와이드 테이퍼드",
"order": 5,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3266095/32660958941.jpg",
"color": "다크네이비",
"size": "L",
"brand": "디그레"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 170,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=12852568591",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 365000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 86,
"name": "M990",
"order": 6,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_1285256/12852568591.jpg",
"color": "그레이",
"size": " ",
"brand": "뉴발란스"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 65,
"start": 535
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 195,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34945239490",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 328000,
"soldOutStatus": "InStock"
},
{
"id": 196,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34946012774",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 328000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 98,
"name": "Wool Blouson",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3494601/34946012774.jpg",
"color": "Brown",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 66,
"start": 557
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 197,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34945305312",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 328000,
"soldOutStatus": "InStock"
},
{
"id": 198,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34946031527",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 328000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 99,
"name": "Wool Blouson",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3494603/34946031527.jpg",
"color": "Navy",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 67,
"start": null
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 195,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34945239490",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 328000,
"soldOutStatus": "InStock"
},
{
"id": 196,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34946012774",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 328000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 98,
"name": "Wool Blouson",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3494601/34946012774.jpg",
"color": "Brown",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 68,
"start": 605
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 163,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34409662581",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 360000,
"soldOutStatus": "InStock"
},
{
"id": 164,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=83482788907",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 400000,
"soldOutStatus": "InStock"
},
{
"id": 165,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=82732003838",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 400000,
"soldOutStatus": "InStock"
},
{
"id": 166,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=83944440024",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 400000,
"soldOutStatus": "InStock"
},
{
"id": 167,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34409559098",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 360000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 84,
"name": "FM 5-2",
"order": 1,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3440966/34409662581.jpg",
"color": " ",
"size": " ",
"brand": "프레임몬타나"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 195,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34945239490",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 328000,
"soldOutStatus": "InStock"
},
{
"id": 196,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34946012774",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 328000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 98,
"name": "Wool Blouson",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3494601/34946012774.jpg",
"color": "Brown",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 199,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34908310054",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 249000,
"soldOutStatus": "InStock"
},
{
"id": 200,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34975573150",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 329100,
"soldOutStatus": "InStock"
},
{
"id": 201,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84832295624",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 446500,
"soldOutStatus": "InStock"
},
{
"id": 202,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34965865911",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 490300,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 100,
"name": "셀비지 데님",
"order": 5,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3490831/34908310054.jpg",
"color": "INDIGO",
"size": "XL",
"brand": "스튜디오니콜슨"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 203,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34203369902",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 609050,
"soldOutStatus": "InStock"
},
{
"id": 204,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34171879817",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 579000,
"soldOutStatus": "InStock"
},
{
"id": 205,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34217787140",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 543300,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 101,
"name": "삼바",
"order": 6,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3421778/34217787140.jpg",
"color": "크림 그린",
"size": " ",
"brand": "아디다스 X 웨일즈보너"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 69,
"start": 615
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 207,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84663299728",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 89000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 103,
"name": "코듀로이 캡",
"order": 0,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_8466329/84663299728.jpg",
"color": "BLACK",
"size": " ",
"brand": "킬오라인"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 197,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34945305312",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 328000,
"soldOutStatus": "InStock"
},
{
"id": 198,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34946031527",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 328000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 99,
"name": "Wool Blouson",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3494603/34946031527.jpg",
"color": "Navy",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 199,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34908310054",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 249000,
"soldOutStatus": "InStock"
},
{
"id": 200,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34975573150",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 329100,
"soldOutStatus": "InStock"
},
{
"id": 201,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84832295624",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 446500,
"soldOutStatus": "InStock"
},
{
"id": 202,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34965865911",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 490300,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 100,
"name": "셀비지 데님",
"order": 5,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3490831/34908310054.jpg",
"color": "INDIGO",
"size": "XL",
"brand": "스튜디오니콜슨"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 206,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=24654136023",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 84500,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 102,
"name": "삼바 오리지널",
"order": 6,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_2465413/24654136023.jpg",
"color": "화이트",
"size": " ",
"brand": "아디다스"
},
"affiliationLink": null
}
]
}
]
  }
  ,
  {
"id": 8,
"title": "흰 티 레이어드 그만..! 스웻 맛집 딱 4개만 추천",
"creator": "핏더사이즈",
"profileImgUrl": "https://yt3.ggpht.com/ytc/AMLnZu-opBs4fsY6Vw06U1VMoTpcaepRcYtkmmPSuOl1=s176-c-k-c0x00ffffff-no-rj",
"videoUrl": "GMHZeGIoHzY",
"timeShopItemLists": [
{
"times": {
"id": 165,
"start": 72
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 478,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34975565631",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 69090,
"soldOutStatus": "InStock"
},
{
"id": 479,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84837044608",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 75960,
"soldOutStatus": "InStock"
},
{
"id": 480,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34977451237",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 76240,
"soldOutStatus": "InStock"
},
{
"id": 481,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34972394080",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 82590,
"soldOutStatus": "InStock"
},
{
"id": 482,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34994796933",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 65120,
"soldOutStatus": "InStock"
},
{
"id": 483,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34610900448",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 46962,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 229,
"name": "Cb SAINT 90’S MTM",
"order": 4,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3461090/34610900448.1.jpg",
"color": "AIRFORCE",
"size": " ",
"brand": "곤니치와봉쥬르"
},
"affiliationLink": {
"id": 611,
"name": "제휴",
"shopUrl": "https://bit.ly/3BgtUsA",
"logoUrl": null,
"price": 55250,
"soldOutStatus": "InStock"
}
},
{
"item": {
"shops": [
{
"id": 484,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34610980803",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 46962,
"soldOutStatus": "InStock"
},
{
"id": 485,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34776056960",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 70640,
"soldOutStatus": "InStock"
},
{
"id": 486,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34776154777",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 79020,
"soldOutStatus": "InStock"
},
{
"id": 487,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84760605241",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 77550,
"soldOutStatus": "InStock"
},
{
"id": 488,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34776623996",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 84100,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 230,
"name": "Cb SAINT 90’S MTM",
"order": 4,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3461098/34610980803.jpg",
"color": "Smoke",
"size": " ",
"brand": "곤니치와봉쥬르"
},
"affiliationLink": {
"id": 613,
"name": "제휴",
"shopUrl": "https://bit.ly/3eq5unM",
"logoUrl": null,
"price": 55250,
"soldOutStatus": "InStock"
}
}
]
},
{
"times": {
"id": 24,
"start": 130
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 484,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34610980803",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 46962,
"soldOutStatus": "InStock"
},
{
"id": 485,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34776056960",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 70640,
"soldOutStatus": "InStock"
},
{
"id": 486,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34776154777",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 79020,
"soldOutStatus": "InStock"
},
{
"id": 487,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84760605241",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 77550,
"soldOutStatus": "InStock"
},
{
"id": 488,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34776623996",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 84100,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 230,
"name": "Cb SAINT 90’S MTM",
"order": 4,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3461098/34610980803.jpg",
"color": "Smoke",
"size": " ",
"brand": "곤니치와봉쥬르"
},
"affiliationLink": {
"id": 613,
"name": "제휴",
"shopUrl": "https://bit.ly/3eq5unM",
"logoUrl": null,
"price": 55250,
"soldOutStatus": "InStock"
}
},
{
"item": {
"shops": [
{
"id": 489,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=bH3sjV4eGiNAaL6AjCs4kv%2F%2F%2Fw%3D%3Ds3OEZxaumfgOwfWm5fH%2FP%2B9Z%2BXIHOeQGDX6mNALgDqQO7N8lPhUTrnNLF9%2B0FABZJ1qt%2FXnecWcKR427KN7Dw3A%2BBNzuQ3QqoP0QDP%2FFKgXX4kzF71K2Hgij0QIJBX8REz6rgQF2RC6mcu%2B5QJ9bDdfBgdBc4%2BY9JIE1b3YbJKwrRtjmgibTL47BDQjvBcrm4GvyiU1XsvBUpUmSLkCijfrf6nwEXmDUkmBBy3XPs7LLDpmNu2Rs3tEPrV0ZTODsbjjVkrw%2Fetq4YrW05dSn8zErbS5erx5UPv4d%2Bxy06w2AK2M%2FBjYK1hKRuIPZfbzK4tj0hmX4wgeKLCV%2Bl05JAb60jWqoS6rVeZV%2FRcYriIiB8q4%2FgGc8Vc7SLiueUsjCmH%2FVuccQYYycLgeJh3ZgiACB1i159oMNzfEiY5%2F4xJo8m8ph6WS%2FnWhLy6PEQqG%2F6UyhPYJVVn4S4J5uc4whlMg764WDfe4apXeC0hOaO%2FmC4SsLr4XU%2B0Gz0OOv6Q0%2Fwgv4%2FuIuHgscNd4jzxRJu6XIiS4JU80cf4MVsDYWxE2ZsPYVSpynLJD7LEtVnbhhBJXSFlseqJb%2BD9y1uadTE7g%3D%3D&nvMid=34325023350&catId=50000836",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 98290,
"soldOutStatus": "InStock"
},
{
"id": 490,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=o8X%2Fj9ihmEtU6LGhF8nzl%2F%2F%2F%2Fw%3D%3Dsww%2BvjpMIum%2B2WVeeCnW0jfBrFByt6eCHAxN434AoaQbZ9gcx1%2BCNtgoS5Jn4UXILauWpB5WlBBX25bNBgANxCQ%2BBNzuQ3QqoP0QDP%2FFKgXX4kzF71K2Hgij0QIJBX8REiitfm6Qka7O4iP1S2SMrm2Bq5AcTXrN%2FKy6R9F8ADBkEkUcBJ6Hon1%2BRG%2BgmR%2FHehGUviyg8X1aXQ3A7xnl1IfaGehdasM%2Fxi8ecUyz6N%2FSIPwB44Nh7O6Qp871d4nSXhpAOI91nXqeGxQ0HL4XSOZ%2Bc4KfP6Y9zuoUFddOaV42rCRdUxvA177jl0VodmokhA4ngWLwD1eOq0sUfCk5av2Su8ir%2FAYpaNK1YU9W3FcJSkzJX8VxBXoaQK7tRxwI3UncC2Axjdz4nn1ywxn7V9ooZuzyM143pjdoWaoLc4ESRmdrAH8a4JP%2FxD1Vf8IPCvzMUa9uJ6SGukeL6q0BQFP9AnOjhhX9W7JytK93sE4zWgKtPRdVF7lS4dpZ0HALvT%2FWltmT43dUq0Cq8VyOYWWq%2Bvf9LTedbkiZpjqZDXbMW0PZluftlGtF9DoWigfFCA%2BQWYR3MWCpmn5lq1fvSBhGloYG4U%2FHZdlq7or%2BhnX86k%2BagRQd5j8Fm6gMGll0VoZByutq2Wajk5S1zfm4KVg%3D%3D&nvMid=34324655406&catId=50000836",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 98290,
"soldOutStatus": "InStock"
},
{
"id": 491,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=B3D5UKuuH4q3tUYyXbaStf%2F%2F%2Fw%3D%3DsHRXiqMbaEiW%2Bwqb5HGAFNIf6JgNMvly%2FzLbV67qsZ6FhyYCYSyWuBKeF4Yner83TULefNjfydaQ91dMSiTU6T0UjjJqlpXhf7MnZCW09ZRsFdFY8EKZvDRmaW0t580zywcyhIzyRgmvNpkNfIyKZu4QCneqyYLrZjIWYUP8mUqBoFonAFIc7LOJ3kg7xOKCQIBKkEBDOaO9TerrenKwfV3vnKrIN6xrCcpoomasxveLD4A0ZaFEwGxp2PdmAp3vfVc36UclHFwy%2FRjanVqQKKJnvOZruyVgkdpL2lJwh57aAbCY81f975eS5nfR25FBiskVBTrklB9oy5vs73WXVAt5cs1bOcIZOEKRXIfT0YPvztRDErmy38VR4HeKfP2AGT7IrqzwqhuT%2FIo6PrraimYoZuzyM143pjdoWaoLc4ETNaJtNf1%2FFfpm6mmevT%2B8KvzMUa9uJ6SGukeL6q0BQFP9AnOjhhX9W7JytK93sE4zWgKtPRdVF7lS4dpZ0HALvT%2FWltmT43dUq0Cq8VyOYWauPhEJA1DBz5zGnflFYhWDVghbvmkPQWjjawZSU3t3NRucnkKAVc9pTs%2B7RAX12s3INzXeYN%2FDZHnQssY88vjh3GJZPc%2B2%2BJU7MFissVTGTaOlsM1%2FI8prRJwMZFhDqnA%3D%3D&nvMid=34322373252&catId=50000836",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 98300,
"soldOutStatus": "InStock"
},
{
"id": 492,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=LY3x8mbfRmZeAh2j7x%2Fj9P%2F%2F%2Fw%3D%3Ds3PYl4rpb3RHRJGNhMahgzlMqWvHhLiRd5Vq0b0%2FANfqe5gtEoJdYcyodzkjtMVBvJUMAO4ZSRQ6N6F54B9g2pUUjjJqlpXhf7MnZCW09ZRsFdFY8EKZvDRmaW0t580zyc%2B3jL82KYMDSV82I86bDMo16BFlSH%2FKx2tgGLuriHlnYEq7B9olB29h%2B4z%2BPDoawWgp38t%2Fi5FBGvNbDuR9ku85h%2BPMP3wb6sxeHyjKTiOR%2BUx9o5fMCzoM3T5lLKrtHT%2F4mBW9kBBYTrCV1JIoJP3%2B06AmmEffVyPw6Imc1GGFqgb%2B6buT8JQDmnXwXiqCKme85mu7JWCR2kvaUnCHntoBsJjzV%2F3vl5Lmd9HbkUGKyRUFOuSUH2jLm%2BzvdZdUC3lyzVs5whk4QpFch9PRg%2Bx4uvH3QsBqxkCPQFMwZSyUf1i4LdMRsf1KcQSmPEFNqxS1mrtfujk2jeI0lAeY18Em6CP0koEUzV2h18gcfSiihTS8kUBwxPvilm8NPHPZE%2FzcOUGZsJfEOoM3Uh6UH5Lopn%2FmNMplpi0DFEq5F%2BJPJhpGedZ1RGaBKfs86oQo%2FakTARUvuS7ufWMv2DQjhfDTxYH0TO%2FeVf5DhCJgkAgeSFgZKv3Z84NTkSeFQOs%2Bbzr0LUTF5AtKOY9dPCx4%2Bzlalnrkf5R1W0zelHjaQO1LdIq15ek7gi7UXqwGDy7Co&nvMid=34323958516&catId=50000836",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 99330,
"soldOutStatus": "InStock"
},
{
"id": 493,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=afJDDf%2BQO%2Fc2TjeP%2BAncav%2F%2F%2Fw%3D%3DsXFYELVOBHM0jdkGQXhWh6Yr2sMO4hWRADM5TXo0ImhdGGPG5t%2FLLqrE9hQ5W6MYJfb2bQdBRyGAt2OB12OwkiCX934oYndG%2BRN63ANtxwETKl5PFGDNXOZRz3avb0kXWgveVOW4ShUmPurkQVYKxdDPVUN4LvLQzBmQdsUzRxVT7SeabJCol0G1SSe%2F1SDkmawmddFove0j3kj35F2f59NLd%2F3sm3dnld0VmRzepiu8qaZc4MGcRuiGwvzAiGSMEvW0EZwjzLkhfvc7rJdEvMfziKuqi6lvlwe2gIVAf2UAlXTdy6Sn%2F2yromYu89VyUtwfFwnAkFQAlc8Mmi2jWna%2B77R%2F7LegoDUjPSD3R%2B5hVjV9rg%2FT9dgDXbU27ixNjI4%2FQAGceEmf5kq9M%2FFG0PdGpQ3VAqggNE1cfYtxfwrj3Qwk5aqU5tdgcM7G51htw6ryltPtHTOrIgcTJwWWBp5fMFfH4jZGJti0twN0Q3bavLX%2FYpcrt%2Fk3MniwlwRn%2FFRw0jSuHM4YJomhLAHGMXuMGapT1rIYsPXzArpt%2BcuZxvfjtGccQX7WPQR9GuLDRqtfp5YBAienpw9OEwmhK3869C1ExeQLSjmPXTwsePs6YBwYpzWDCdFM42TU04lw60Ov0TGsg%2Bbn%2BbdG3gGmJ5Q%3D%3D&nvMid=23515634043&catId=50000836",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 89000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 231,
"name": "G-쇼츠",
"order": 5,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3325572/33255722538.20220703083820.jpg",
"color": "Chino",
"size": "34size",
"brand": "그라미치"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 346,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=83520370352",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 208000,
"soldOutStatus": "InStock"
},
{
"id": 494,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=TEoA6ODFDjTOIaMBdA9ajf%2F%2F%2Fw%3D%3DsSJhi7sC4FX6ZweT0uNGcb7FWDqbqPhMxRmYZWxae%2By5A5TJWXvzb8v1Q%2BavWoxq5m1%2BGiwRY1TY02h8EaoogFT6z6uSuf6Djl5BPNT%2FCH5egGVugw95J1DjL44nfqHJqDg2vbGeblm4KwC%2FTbtbCq49xXn1wBBLTPL8CCrV%2F0QRUdx0LA3AmvT2dxXW5HGlvKSjmcJuDwfyFgUT54i7dtdQ%2Fo99quF3j461rl8prdlC6H2ty%2FdGr59AU0o0tNMqPP2tfKoQ0NQPyiad34AQ6K%2BXCkbDPpcnvPwu6o3ecN0P%2B4mWmYvbaXbQiJqm6uYH%2B83jO8MgUtcbsYULGQCmiOICczlvA7td%2BFl1PfxD%2Fg6GfjzywCC7mD03UWo30ryH8IDqWrK8nqJgV0HV4tSwGckfU8pYEhAFflllyZWL%2B%2FRW%2FqyX5NzvvJSLi%2BwMbFNhL4S5DTPkA6QYVjxS%2BNkxGRcJT3DPUZGtaoL3UtI6x27MTRSN%2FJmG3Oi%2F%2BAQ6h69R1JnBDH2XCDbLKEB11ynvc6v8czihICpRFPJOUwp74be2q1%2BnlgECJ6enD04TCaErfzr0LUTF5AtKOY9dPCx4%2Bzq2ea%2BSWxg1VIrWEzQqv6qCyEbWoBo7P1ACvpPSB9Bwi&nvMid=34860505474&catId=50003822",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 198360,
"soldOutStatus": "InStock"
},
{
"id": 495,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=5bbpQq1S9oCRfqEFq0Jd%2F%2F%2F%2F%2Fw%3D%3Dse2FqNnAHBxwsne5tznjjgPrCe1mL8HiiFVKVAq6VmZLJ48mNo5DFCRgBfvnnz9xoHe4eYOOZonSw101hvZZ29S%2BvZe8ASp%2Fl8BCDygON6oqipK1dPTU9j2yiZSkg7MLjBpMaL%2B18P0WCLdLNHO%2Boq%2BU%2FitaLZTGsAQFgRJ%2FGmYrJYoqVktlXRrv8K5jHtMeaBHCMCM6WJ5bBvXT0OhwsXBu07m1WNgyaJ2XT3EdsxcskkfhrNp5MTJ8sgxI%2BI2qI3VNixbQrwclcLa0J2zu5MvfUO4lpZg06OchH9NxZrBfiD%2F%2FyBSCoqY%2BPAiPkqSfoIBV0A4bGm1B7pIlESi0J%2BAez%2FY8eSma9aMvarLWce5sHgwEh5na7BtWZD8QVTgPnLrka%2FkR9iFsvcN7rVi3CHuaOxL9weDxD95VxKPs8Pgkjj9AAZx4SZ%2FmSr0z8UbQ9KgeO4P0qgUwum74FkpjBv4RAEnA8UIO8%2Bpx51jsL1U6i97%2BLKGzpL%2Ft%2Bu8xQMJTwQTnzwPFhPsbQtXqyQrhLFqkVK6L56h6Ybp1sFcu0sj%2FSGcTDe0MZZfkgTNKABCnSASpVGvoavIFc79KuU3Nf21x0%2BD9UW2JxVsDiCwjs2Uw9kOg0z12t0ZpbTE04U4WXyr0562KQbYDnBxF6hRSWEXrzRZg%2BrccrMlxuqSdNCX%2BM3SJKKb85UMjZ6KBtHOf9dE9CQ7rNDgZADPFWG4AIpm3%2FqvfURSRtl1HksGDYwps%3D&nvMid=34128745476&catId=50000788",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 203800,
"soldOutStatus": "InStock"
},
{
"id": 496,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=ejOexGmXt7WQewPmmaWFDv%2F%2F%2Fw%3D%3Dsb1lRRC1yx9gxMnIrzNi3m6j%2B%2BD%2FRhK9qtrj3WtMw70MhkExvPJ26TNe03n2pHS6wyEzFPP9R%2Bma756bA3d736x3PqEd%2FGCuNS5BIrPGSh2TPb2aaGL%2B%2FOAL0gsrEd7fvy7WsjvL6fGBruqRzbSMBoQdLXoybizBOVFY0bnGAXBsP4mjuJMhWmC0OuK78QgfZfU1c0J241QgACmkn9Ze5YvnsaU3jimpRgannamBn%2BL8QhkkHXK4%2FmSRy5icYE%2F27fDS1I2k11362wutAZALUO8XoZ%2Fdn6Hhb6OIMxlCPVeCeoteVvC5W%2BFtzY0wjvVLtQHWVakD765S7dGUhjDcX2W8zyuoGVaNWJABpYEqsoUHwiM26I10nhz1iUp9JddHODYxBEa88lkboy4bFcIZpQIwoPocGGh4%2BpNfJPmgbSH9rz%2Fe50aNaXWYj1Phwt9iGtIwxQ676pES4sYUdA5DyzPmH9viC5RptGiY%2Fkw1uT1p5fcPlZpUbbC74VOk3UoT7OAvh2x9JjH1Qbkau43809MDJWChoto9jHdm19ArC%2FaZ9qNIzwKnpUVH6ceSgl5mOKJrJ6b2UW%2FKa21ePDqGwnog031HBqUb2Npg3Jaf8lvJ9Lq82cLk22AZWcaUj2Ds00Ov0TGsg%2Bbn%2BbdG3gGmJ5Q%3D%3D&nvMid=83558409994&catId=50003822",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 205000,
"soldOutStatus": "InStock"
},
{
"id": 497,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=4SUzkKjj8nkIF7m3NAtFi%2F%2F%2F%2Fw%3D%3Ds3eb3Itm%2FFX8QPCxhpZR8eeDaYs6AwDUxucSnXc%2Bxf8IvwKmKrmOwz6S2ikf1PZkREzcPRimKUVWyWJ8F9B6x9hppQW9XY7u7uhJ%2FoPrPd2b4j%2B5u0Lm7M9%2FTb3WpIsM04g12xdY%2BDWTr0BhIyU7Wezd4KC2MkE7XZx7rLcicf31yds6gNFAPrqVzkvSrM%2FW%2FhnC736esvCovEg%2FAlDCLIiefk4K50w46SNTS1LJGuNaEyd%2BHDkwLBA27mqimDg9xHpBePg5xF6v4aOBNLY38QM5FO13K73QOemQEZBLsbUltAEI6BRcJBEP3s8wITJUV7YOFJZRljFVdkqzD0Asgsi5tS%2FZaA6ap3DisY%2FO9Kja4SZKVEf5FHUplIf5UOBqSueCfFDuywxl3T1PQ6PKMjPrrTYG12d3bF6S3PGISDVwI7DF4SNVym55l4k%2BrvZJCZ0q12a0u%2Fi95vIszoO3%2B5VE8B3RQodZYnRSswGQmASVUATQNSgpmkgBvpNLG6pcmhdxtSY6aqQTf3GANljUvX0rI5XvHvKi9lq8n1tdGkyj2jqryb9w66xW8kAWcvYDJYBRKyZNv5cP6pWIqiKhmnP0lYmL1Z4JQMnPJPa6fseeocWDYaqxQ6Pu5dB1PMZervB%2FbA3qiOhosQJvCmDgZdZ3pIYTw8JVCk7sANWoG37EAKgu17BFNKOOKMN1SvxZSdzVerypBY5ChjB8R%2F87wy5IWBkq%2Fdnzg1ORJ4VA6z5vOvQtRMXkC0o5j108LHj7OF2e0IcQnpr9P1%2FKRUqBaGd0irXl6TuCLtRerAYPLsKg%3D&nvMid=32838523076&catId=50000788",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 219000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 171,
"name": "메달리스트",
"order": 6,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3350629/33506293345.20220715094330.jpg",
"color": "White",
"size": " ",
"brand": "오트리"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 166,
"start": 148
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 110,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=APUY%2BLgEbypkYfZxqw%2FgAP%2F%2F%2Fw%3D%3DsriKehB79pXDjPDd8Qpc81OfF9rrVL3jGibWoqzSmmHZRHYcDHrCykxB94epjhAHh2989QYirbycVksHH%2BKgo3iTxRfFuPsO2mnX%2Bs00xGrzRNZ%2B2A%2BNdVr5JI14FqGHlszoOS%2BldEn0Q3ex0Yj79Kl0%2BhdAbWodyUUaA15ii2fVsFjNRsebaYecatYc8DYel0VMTTeaCfZTTfDnMT0%2BC2%2BsL5%2FFmRtaq20sMiwJcKAifoI2GPOtw0kvzlg0SPVaVpOnIleynIZ%2Bic%2FQY7PSa0fkLTK0kw1IyQTjMNlb573v8mhidHhNwhjUpEo9H1nm703fJeaHoM%2FefCsPKkKahHvkJ21AqizRQ1Qwslt7G7MbBz7%2BORHa%2BX777%2F5U82WuF9I9WHZtu8KE6bGmqElzzBdmHxf8QqEqtxlHzaQ9bWbbfeYJXXuZ1a5jKJMNhs7kDZy1q%2BWyAE7BiKmIFxVNafSWU30gOGUT4eFqFarbMK8f6YMGUvvejwdG5vUj7PbHKnL%2BMAyYdZ3nm384aUeczj0Fe52faMtIe1g5Al4wFHIKXXZ%2Ff4QGR0g78HSK9qfzi93Ynk92eu8l%2FNBWSNnnkLvCSrczfAvpsQqIKVhRLDPZ3KgKQLzbZgQTCESbK0CyhKZOGM6coyGPYoOICiPD5jTK9C8nBZe5QE%2BwQZU37e8aINN9RwalG9jaYNyWn%2FJbyuaW2DytlYWdBSZbyH0LWbt0irXl6TuCLtRerAYPLsKg%3D&nvMid=30949432693&catId=50003992",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 28300,
"soldOutStatus": "InStock"
},
{
"id": 111,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=pgTs%2BnFdvWUDq3GOuwCGrv%2F%2F%2Fw%3D%3DsN9txFmYSEkVqHar8OyST%2B1ciJGT9peBjpjkkNy6kLxJ%2Blb7DzP0MaGCaEFo9MuKkMVE0NX4T0BaJVv5H1uK3siTxRfFuPsO2mnX%2Bs00xGrzRNZ%2B2A%2BNdVr5JI14FqGHlz%2BqouzuepmLJY6fOzY6qmfo%2BPd8WKawkPRjzfJR1sQypwiIiJRhXt6ssM6yqq4xUCqKUI%2FORrs4uY6HlFgTKcSDrgfajl9Iw6F%2FQrBmgsSbNF%2Flyn1qtCuJHprFKl3DxlkzosrJCgerjP9%2B97d3Iqd9%2BKy%2Fm0d%2BgYWHtEf61Jo4ODV%2F29N%2Fch7PVGOfnzNGa2oRt%2BU%2FFqttU7gqfgOi%2FWHkEsRT3erM3D%2BAbuW65qrcxwaDrhPvLyqrXm%2BehfV1%2BaH9Ot92kKn2pNjNPhtc%2BxE82sld%2BzaPgDPS69FjgdavN81WjUpxJVJrN5mDsz4Bp%2F67A32%2B9Ddrmay7ys5NCUt7SxhziZsgTfOYqctR0QfH1bbUq1gIUBMvFBAVvS2xeIxqpJMuYQkmCBl03YE0tFDkeTff7Stvr7J0Z4ezIf87Kq3jGX89FUcErCB%2Fhr4ryJHq2kvrFXyHi2q08L63HLYg031HBqUb2Npg3Jaf8lvLjzSvnWpokWQzwFAg4%2FngN8XK9CL2gDJjWSz3zy%2BnBAA%3D%3D&nvMid=30833608434&catId=50003990",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 32585,
"soldOutStatus": "InStock"
},
{
"id": 112,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=30949023071",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 29925,
"soldOutStatus": "InStock"
},
{
"id": 113,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=30833608434",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 32585,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 49,
"name": "시그니처 펜 홀더 캡",
"order": 0,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3083360/30833608434.jpg",
"color": "gray",
"size": " ",
"brand": "틀영"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 478,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34975565631",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 69090,
"soldOutStatus": "InStock"
},
{
"id": 479,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84837044608",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 75960,
"soldOutStatus": "InStock"
},
{
"id": 480,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34977451237",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 76240,
"soldOutStatus": "InStock"
},
{
"id": 481,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34972394080",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 82590,
"soldOutStatus": "InStock"
},
{
"id": 482,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34994796933",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 65120,
"soldOutStatus": "InStock"
},
{
"id": 483,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34610900448",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 46962,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 229,
"name": "Cb SAINT 90’S MTM",
"order": 4,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3461090/34610900448.1.jpg",
"color": "AIRFORCE",
"size": " ",
"brand": "곤니치와봉쥬르"
},
"affiliationLink": {
"id": 611,
"name": "제휴",
"shopUrl": "https://bit.ly/3BgtUsA",
"logoUrl": null,
"price": 55250,
"soldOutStatus": "InStock"
}
},
{
"item": {
"shops": [
{
"id": 498,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84466133961",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 178000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 232,
"name": "쉘 기어 쇼츠 카모",
"order": 5,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_8446613/84466133961.jpg",
"color": " ",
"size": "L",
"brand": "그라미치"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 499,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=83412963013",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 455000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 233,
"name": "Broker OG DE Sole Canvas Low-top",
"order": 6,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_8341296/83412963013.jpg",
"color": " ",
"size": " ",
"brand": " 미하라야스히로"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 167,
"start": 202
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 500,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=a%2FXFZOKmAWv4hYRHEvsl4f%2F%2F%2Fw%3D%3DsTRsiw1C6H2uZM63jZA%2B9X6NfaECx4wR2wPHRlDFBhqLX5BahVWOcAHUBbqq4uAYgjY3%2BCFloX%2FaDkxsMEIj1IxuamfTR%2FDdfYBxtxnxbLKYe5TkA7nQi88bmpaRpOaIB7aCILF4xQ4c1dNUpidDLMdiAUTvSmvR2%2BdlUaa3xMuI33vSLBJ%2Bwwxsr2E3%2BXkho21CpJJAraGcU7ZEz2l0J0InB5W1piDv51uF78wmWSGnL%2Fowdnq7%2Fmfq67OVRzok0iFRFMhF9ebXc1zt%2FD3fUOhz8ZNw0o9aCNkUD6%2FEYgBovms9aoGSKCh0y3Yfx9CS9HVu5rIb7la%2Fm8%2BS1DFhJS1IU9u9zdXxT2omDDUgB3YPH0PUUsVVNil%2Bx7sCCmIQqsNnUo4lponPK3bsQGseVxeOELXXCf0u13CXzbTYkXgki46sPhrD0mf%2B7GY4cpp1p4fC%2BqZH2YEnFfjbGw8BJFuBzu6SbXFCFtKM2SyT6srb6gmb8f6redbd8z0zF%2B2AsJ%2BQI7ommU0hcmaH1tA8N4Oo4gMKuypnGcV9yPfSFsMhIag5CjB43i0xCywlp%2Bth%2BYL0DsOgxf%2BE5RsExlm6UJg%3D%3D&nvMid=34787901002&catId=50000830",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 117520,
"soldOutStatus": "InStock"
},
{
"id": 501,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=9ym%2FVq8bpDp%2FmBT0klZtsf%2F%2F%2Fw%3D%3DsK3s3z18%2FtGqotrLKsrLVrp3aCzR9IwNM1OW7eulqPXtZMCfmeuHV79Da3GCU7bjcHG5EEc86Zm7Df%2FW1p3FAScdpiCrFPDD9K2sIQvg2S%2F3OvD4zkqGO393tkn8O5S7yZHxLE%2FdMCGzG9bZQIeUIe2DHICWXLrlN47Meu2gEovdXnfPDQ1LKbzTKx0o9kcxoGHmoR1ZgTUnnKpXTamE7bdDV1otFNG4qbpF5G4tjb8IAkJBgdJK0a0S87vmnNMZnVMEEjTRPeOkg9G66tDDt86RjXPQ3nAHdKArYx3chqu0gFXQDhsabUHukiURKLQn4B7P9jx5KZr1oy9qstZx7m29fqbtDerj7Q%2FJX7lytImaHiXjiBtADConXYkakQQ89Sw%2Fh1I7Z0WhKWMeX%2FkZY0NoMGOnvp8EBvp%2FWBbiqjckTwkQVHAaf1tKNDXHRDZw5eiudN4wUxYjvrJTsG8aODrCvlA%2BEvEy%2BMONBDFWyvuiaOcG36dAAF9n3TeSU%2B%2FyI994BAYbSEoRZkYOU80k%2BYk52BQgOGy%2B9BopLyMGPxRKKVvnYony5rT1%2FrvMw31g6aEzfxaNUBPZafv0HPm33GSZBb0e5bWZkDrZTRd4HRxJvgZwm3f5Yj6%2BAOq29Tx%2BkC5fbzdYPGo8BZjfRoxoXXm3%2FqvfURSRtl1HksGDYwps%3D&nvMid=34588832637&catId=50000830",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 117520,
"soldOutStatus": "InStock"
},
{
"id": 502,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=31655072921",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 89000,
"soldOutStatus": "InStock"
},
{
"id": 503,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=30946815226",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 89000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 234,
"name": "Oversized Sweat Shirt",
"order": 4,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3165507/31655072921.1.jpg",
"color": "Navy",
"size": " ",
"brand": "러프사이드"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 504,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=NeS2c4FklsjaUEvfABhiBv%2F%2F%2Fw%3D%3Dsi2%2Bbuya9PBwKvVtPiwZxLdBYxaMiH9DvljlqbkJ3F5lm892HHYPUr88EqRHlYjuLVcsHSPxaoY0y3pLiBmV41uvocgpOVDnE%2FbB63wCtoE%2BrF2cfO0QdKhPhfGPQW8mxnJxR2iU3ZbhepoWNDzJNA83Lka7aF6z8o48AEgd%2BtYtdA3KKI0CZ%2BTX7Z4UQMk3MSISjt17E9nakeQCwSa%2F5WFCQIOZ9nVIAuaF30kL6eLOr4gSBI3%2BqQaQBuJzQ9QUuDsaYOOau%2BZ%2BK%2FBZwsO865yFY0NfdqFKR6%2F2awh7KpKdQS67L2qnJj%2FQ1AZEiSfS3W8SsqFIlR9s2goUEbjffBw%2BHQlgV%2B6rVWFV64KSswHhq746euCeHFBFOL%2BdGzHfLoYVJkXuCG58hFhrlQhLGIsx1ENESDMhWOczKAb3tFm6fnOCnz%2BmPc7qFBXXTmleNqwkXVMbwNe%2B45dFaHZqJIQOJ4Fi8A9XjqtLFHwpOWr9GC6bbPdf5EX%2BLQIYsX48FKf0DoYVAwqhWacVEs%2Fs%2FWk8iEsGZbmdbZICqt7U2YeHaDBjp76fBAb6f1gW4qo3JPfnj%2F3YJ4taPMCdTzoPvcwZUmNA4gxLTebXdgCfMUNA6oQNECJEFSHpmoLRoyQvsGaXKPr2hvBeZq3%2BeB78DbTZEeNXbkh4OutQ7jH6Ab%2FNy4lzJ9pYrI50u2rO4RMzaxwoy1NXzB440T4xL6qkQY%2F%2BvIKqNwt24x%2B9tpMacQeZdlgV0wFdGtSq39FQqoe1aHtgn3RMSQEDl9GjYRtlUbRHyHtzmHeUO41mJrtL9WrM%3D&nvMid=34103688966&catId=50000830",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 89000,
"soldOutStatus": "InStock"
},
{
"id": 505,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=vVrVxE4Naqb4hCQ4hpbLhv%2F%2F%2Fw%3D%3DsMQLJRWu6%2B2YGhce%2FTVie4QezYPxIOzg%2BpvbfBDzHlnZSqMSl4c5XtRIExxzox1dPmngtIJfkdPV5j1ak%2F%2BWKHpxstvKnx1KBrFaR163WBmoPlXlHo1Op4JR9hcvFAGSB7aCILF4xQ4c1dNUpidDLMdiAUTvSmvR2%2BdlUaa3xMuI33vSLBJ%2Bwwxsr2E3%2BXkhoH1R%2FsqMzaaIM%2FIDRNPK8%2B4nB5W1piDv51uF78wmWSGnL%2Fowdnq7%2Fmfq67OVRzok0iFRFMhF9ebXc1zt%2FD3fUOj%2BnpahQAeiXxhSucWhNN8zQHP9QjZEkJEbRnr8yQXFIHVu5rIb7la%2Fm8%2BS1DFhJS1IU9u9zdXxT2omDDUgB3YOop7vxf38jKKfGhbQHL0DMsNnUo4lponPK3bsQGseVxeOELXXCf0u13CXzbTYkXgki46sPhrD0mf%2B7GY4cpp1pZDwZH7O03eybfOdX4Dmv%2BOCC4wJm5RkNOIarFOTmmyaf%2BVGc27g9qUEMdnCOoMO8b%2FiVihB22hWhknHA1cUFiIg031HBqUb2Npg3Jaf8lvIekKDb0nRN9nUjcePCNFsAgC9jUjLQ5%2Bpt6dFd7RUMbA%3D%3D&nvMid=34787667592&catId=50000830",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 104990,
"soldOutStatus": "InStock"
},
{
"id": 506,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=1qH1GQiHu9yrjokMRs8QMf%2F%2F%2Fw%3D%3DsMU56ugwgJ%2FoMg7aZZNBzZqD3sbiu6fVecZzwJ%2F6A1Lh%2Bl56QJpQ57TAI1W65Y%2FU%2BWRwKwfi%2FzMQj3oi1LcnKjNGijKZuqLYrgGOi3n7dSGHitjeVWQh0tyaiRxZ1PLZ6ZHxLE%2FdMCGzG9bZQIeUIe2DHICWXLrlN47Meu2gEovdXnfPDQ1LKbzTKx0o9kcxoGHmoR1ZgTUnnKpXTamE7bdDV1otFNG4qbpF5G4tjb8IxqDJT4G0d%2B%2B65Sm7PmWsZVMEEjTRPeOkg9G66tDDt86RjXPQ3nAHdKArYx3chqu0gFXQDhsabUHukiURKLQn4B7P9jx5KZr1oy9qstZx7m2qIcdQ5GWTUiQ%2B72Y3JH2Hbinc6VQ4fPTCHm6HCJI4%2FbUSo4ptb4e3739m6tUwqbtoMGOnvp8EBvp%2FWBbiqjck5crXFJj5zrianbtLhpjObfMRYoh5IvyAIaSjSa4hcBLCvlA%2BEvEy%2BMONBDFWyvuiaOcG36dAAF9n3TeSU%2B%2FyI9jIR2ucOEwiVp8GUsigP4BUEIIQMeIFlhennU%2F6H%2Fl5jl3d3PhVslBcLhEmLViyzNHbheLBlFSZWAEidrpSMCHrzRZg%2BrccrMlxuqSdNCX%2BM3SJKKb85UMjZ6KBtHOf9zEFWt2Oa0BOj%2FVPBT0AiQyV0hZbHqiW%2Fg%2FctbmnUxO4%3D&nvMid=34588336091&catId=50000830",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 104990,
"soldOutStatus": "InStock"
},
{
"id": 507,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34167636333",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 89000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 235,
"name": "Oversized Sweat Shirt",
"order": 4,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3476565/34765659006.20220919082906.jpg",
"color": "Oak",
"size": " ",
"brand": "러프사이드"
},
"affiliationLink": null
},
{
"item": {
"shops": [],
"childItems": [],
"id": 236,
"name": "Oversized Sweat Shirt",
"order": 4,
"itemImgUrl": "https://img.29cm.co.kr/next-product/2022/02/15/012d3074ec5e4fb9bed9847bf5044fed_20220215053240.jpg?width=700",
"color": "Melange grey",
"size": " ",
"brand": "러프사이드"
},
"affiliationLink": {
"id": 615,
"name": "제휴",
"shopUrl": "https://bit.ly/3ernoq8",
"logoUrl": null,
"price": 89000,
"soldOutStatus": "InStock"
}
}
]
},
{
"times": {
"id": 168,
"start": 262
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [],
"childItems": [],
"id": 236,
"name": "Oversized Sweat Shirt",
"order": 4,
"itemImgUrl": "https://img.29cm.co.kr/next-product/2022/02/15/012d3074ec5e4fb9bed9847bf5044fed_20220215053240.jpg?width=700",
"color": "Melange grey",
"size": " ",
"brand": "러프사이드"
},
"affiliationLink": {
"id": 615,
"name": "제휴",
"shopUrl": "https://bit.ly/3ernoq8",
"logoUrl": null,
"price": 89000,
"soldOutStatus": "InStock"
}
},
{
"item": {
"shops": [],
"childItems": [],
"id": 237,
"name": "그라미치",
"order": 5,
"itemImgUrl": "https://media.bunjang.co.kr/product/199823461_1_1663680213_w180.jpg",
"color": "Green",
"size": " ",
"brand": "인세인게러지 "
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 177,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=33300126639",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 489060,
"soldOutStatus": "InStock"
},
{
"id": 178,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=33229968184",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 615000,
"soldOutStatus": "InStock"
},
{
"id": 179,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=33729899889",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 497600,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 89,
"name": "톰삭스 제너럴 퍼포즈 슈 라이트",
"order": 6,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3330012/33300126639.jpg",
"color": "크림",
"size": " ",
"brand": "나이키"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 169,
"start": 309
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 95,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=32847839727",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 249000,
"soldOutStatus": "InStock"
},
{
"id": 96,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=83020674117",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 249000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 44,
"name": "모마티01",
"order": 1,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3284783/32847839727.jpg",
"color": "(OR) ",
"size": " ",
"brand": "젠틀몬스터"
},
"affiliationLink": null
},
{
"item": {
"shops": [],
"childItems": [],
"id": 236,
"name": "Oversized Sweat Shirt",
"order": 4,
"itemImgUrl": "https://img.29cm.co.kr/next-product/2022/02/15/012d3074ec5e4fb9bed9847bf5044fed_20220215053240.jpg?width=700",
"color": "Melange grey",
"size": " ",
"brand": "러프사이드"
},
"affiliationLink": {
"id": 615,
"name": "제휴",
"shopUrl": "https://bit.ly/3ernoq8",
"logoUrl": null,
"price": 89000,
"soldOutStatus": "InStock"
}
},
{
"item": {
"shops": [
{
"id": 508,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=A%2BYYXntzROFvrX1tjBjovv%2F%2F%2Fw%3D%3DsstCxzT5fW83KM85Q7RVIXMMx9PDUiaJp%2Fth9UaCXdzmo2Qmm73hs%2FvpHh3mZiUo8IdYCuUpBHhD0GXnH%2BAUyWVIvNAA2XwMLMXcjx9t6lWVDPw5F3V%2BLPX1CC0NEdwn4hliDAjZ%2BzjRdH8RGr8Y3J9Yrh%2BJXf3WHIps3ONNOY0jlYRJwX87zr35zxPPHvCwTn5zgp8%2Fpj3O6hQV105pXjasJF1TG8DXvuOXRWh2aiSEDieBYvAPV46rSxR8KTlq%2F8RJZrcLE%2Ff3aG%2BW6ozLeHjPBceYnJdpU20ZX9bNqs2KAe4%2BarvlL4Y8XR1XWw5t0IKEuzIrjGg2lpF53IdM9CNQiA9Iykz%2F6fCzQ9p%2FY7XTN81WjUpxJVJrN5mDsz4BpDsBCTAL5cA%2FWQ4CjzR2AQJL0kNHhvCbleYjs2uHtHC5lUpUC0V8%2FrQjA6SqJdGOx8f7bjrkPCkcmMx9Gux0RYD84AxenUEPv6sfh8gJrCaGRW%2Fp3nGZalYLdR8Ep%2FCMahvurZNZzpy9N6wdGxqXDUsqs4RLQJFfHCDNxcaz96dYli27CpnQd4zWWeUjtewGSYcTwsFrvVKBun4n2MxwaU5ZVHZOD4zG%2BN4T2l10bBiI%3D&nvMid=82748476116&catId=50000836",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 472000,
"soldOutStatus": "InStock"
},
{
"id": 509,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=%2F5g%2BK8uz9QU5wnugod%2FIdP%2F%2F%2Fw%3D%3Ds2Rspb0oT6gXXADz6xlKxirjmyTHR%2F%2Bzr5A%2BBH7qnSCeAGxhMr0pF4jmAMIK1JeJDB7YQYUwzL4f3VxSJXY%2BZ4cTxkpHAr5UqwzortiKm0gXCD44ZGUnOIbC1%2BAGcPFoVJxfYBSrxU%2BHc8r%2BjyXxpORDfSDBvRkBad9fdnOvVrJHMrJLPXP2h78zS9gTMSTtryKYdYRF3CzhS3OifpWSr56uKWQN4b7WstTXVRp4V%2Fd2Kx7G3krbJiQXzryuwwOqJd8WTsr6wXuUaEY3ua3mifkvXH80JLkd9zVSEsaGXMOA3dlsPV8CCxZSB03WdQOWSI4%2FQAGceEmf5kq9M%2FFG0PYJFvlTNBpxrdJ1aqE2jfgn1U9YbdrCjD6U5d2zbBmQzFXzNAd7sj6m2VJktrekJeoXq9JhuKJasBuTIYtodFKHbmLCblQ1P3Fuwg7EUob5HpX%2FuMyg%2FMgvUhBMnn%2FMVanmryyvDF47lR3l%2BilFNtfWx4I9dTz46mAJPuvQmi08FthmuIpSR2SyhoZMgdrvgSCR6tpL6xV8h4tqtPC%2Btxy02ataTjZggrDUAPmKPpxYejN0iSim%2FOVDI2eigbRzn%2FUtn5a%2BTP9mzbXuhB4mOMfgldIWWx6olv4P3LW5p1MTu&nvMid=82254070629&catId=50000836",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 482000,
"soldOutStatus": "InStock"
},
{
"id": 510,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=XyFemHIESHmcbvMiMw87RP%2F%2F%2Fw%3D%3DsMzTh6312bEma8bPK7IsmeiYCSqZg3OJ1v3rdXJAeItQs%2FkVzd8eB2X8MQUlAUNc60IU9ah3BQcT131zNhHHetFIvNAA2XwMLMXcjx9t6lWVDPw5F3V%2BLPX1CC0NEdwn4hliDAjZ%2BzjRdH8RGr8Y3J9Yrh%2BJXf3WHIps3ONNOY0jTPvLoEHDiWTborwaYt%2B60n5zgp8%2Fpj3O6hQV105pXjasJF1TG8DXvuOXRWh2aiSEDieBYvAPV46rSxR8KTlq%2F8RJZrcLE%2Ff3aG%2BW6ozLeHtVMwgL%2BEQEP%2Fh%2BrASPFwK446iQEhN9M58p2c5%2FLqeViIKEuzIrjGg2lpF53IdM9CE%2F2yXz3LxvxD6ZR1UPRHyTN81WjUpxJVJrN5mDsz4BpS3sjWGj42RcxirnUGniAEFG4tPMnxi5rvDVe6cSR0Vba9iZvRk7ks1x5C6OswBleQGuMzBTZcm%2FCo6%2FrospgpcmFawHZSwgpQnW%2Bm%2FR5EDM%2FOAMXp1BD7%2BrH4fICawmhFr5g18ToPKnNPNxtAWgZ7WNouc%2Bv7MvuFGLFpqIZ%2Fkh%2Bf%2BuIk3vOc3ho9byXrSCiJYtuwqZ0HeM1lnlI7XsBkv2kAvvkTGc74Q8A%2F%2BBIMaKWVR2Tg%2BMxvjeE9pddGwYi&nvMid=82253895580&catId=50000836",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 488000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 238,
"name": "Denim Mexican Tuxedo 5p",
"order": 5,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_2116744/21167444202.20191026150337.jpg",
"color": " ",
"size": "36size",
"brand": "캐피탈"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 375,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84473965897",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 345500,
"soldOutStatus": "InStock"
},
{
"id": 376,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=33496117571",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 309000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 184,
"name": "M990",
"order": 6,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3349611/33496117571.jpg",
"color": "Black White",
"size": " ",
"brand": "뉴발란스"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 171,
"start": 374
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 511,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=31206879856",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 98100,
"soldOutStatus": "InStock"
},
{
"id": 512,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=30990386264",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 106820,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 239,
"name": "Bluer Team Hoodie",
"order": 4,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3099038/30990386264.1.jpg",
"color": "BLUE ",
"size": " ",
"brand": "네이머클로딩"
},
"affiliationLink": {
"id": 618,
"name": "제휴",
"shopUrl": "https://bit.ly/3RpTwZN",
"logoUrl": null,
"price": 98100,
"soldOutStatus": "InStock"
}
}
]
},
{
"times": {
"id": 170,
"start": 440
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 511,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=31206879856",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 98100,
"soldOutStatus": "InStock"
},
{
"id": 512,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=30990386264",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 106820,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 239,
"name": "Bluer Team Hoodie",
"order": 4,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3099038/30990386264.1.jpg",
"color": "BLUE ",
"size": " ",
"brand": "네이머클로딩"
},
"affiliationLink": {
"id": 618,
"name": "제휴",
"shopUrl": "https://bit.ly/3RpTwZN",
"logoUrl": null,
"price": 98100,
"soldOutStatus": "InStock"
}
},
{
"item": {
"shops": [
{
"id": 513,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=28760931947",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 109500,
"soldOutStatus": "InStock"
},
{
"id": 514,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=PackNMqz8giSw6cbOgStb%2F%2F%2F%2Fw%3D%3DsTdLvMCFiFWl7okzsIKnKZFxqF0kAQTY0WcQWUv05t4dMz7O7S1gqSFekjdyqduv3zxdqJDJoGsu1nepo4tuQ8hk7j0upyiDCYdhOXitfUkOijOsA8Yx6WOfCyNpci4IE3g9ONH55AomvVtWEnrH1Wk6bqSnM64AO3y0543uvTE%2FY4PCgsQZXf4ErepboGzrKMSyJnPZDpAdJba8S1elRhiORMpsnhce1EsaRDAvjXDEHb%2FH405dCVKve92t0Uvtxfw7NeoTeyKPTkYsfj0R5A6NXhM1lEyWQk1iHb3%2BG3HBE4GSkc3XyUftgGfrwgwnyicHlbWmIO%2FnW4XvzCZZIacv%2BjB2erv%2BZ%2Brrs5VHOiTSIVEUyEX15tdzXO38Pd9Q6lPtrzY563FPmsITPwpXl9KBBKTWuQ2ctQ2EzhhmAk0rZHqpDAha%2B3Z8Yis3gYkjOvtLePGWEOZNL3kvUwZtLHUHIm9U0JykBUvs02ucgrm8VlyFDCq%2BZVFE5vJHx3cUBQ7IBzIWzTqHg4bBfJIi7BRclQAefL3NUILbRbVwfd8jbBnd5x0KpJmzCayC5Ye1lep6yxFLrcR1ceDygwgtMdZ7lDNAs6UOXahe7ANdNNTXhlK35vxZ99KDb4eyywD59POrgdt7wXXA%2B1Pk1wt54o9dataKC3v6%2BP%2Bv1StShpagli27CpnQd4zWWeUjtewGSlyRoHWLtUOgGxpvwL1Tf9ZZVHZOD4zG%2BN4T2l10bBiI%3D&nvMid=28959114517&catId=50000169",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 116100,
"soldOutStatus": "InStock"
},
{
"id": 515,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=dga5FA7pmafLoR7C%2B8nPaP%2F%2F%2Fw%3D%3DsO4E1pfJiA%2Fr%2BnuF8HIaIU48ujxIrNfTuzUNWDZM40G2R6l4ngvqXXJq48cmC6VqwNjH9f%2FDnj3NCVlvfA6trFBk7j0upyiDCYdhOXitfUkOijOsA8Yx6WOfCyNpci4IE8J1bH6D%2B6aeT%2FM5SpsSCL4V%2FTRBvafksxLKzxNNtWmd1thbNKfHTvu6YSmCudyA%2FQ%2BD%2Fo9glb0ukJK6bM8miKNbqpI6t1N2zkZ6St7s5MnIY97Oc%2B%2BvSk70GwrtVoc67%2FRIFATTsGS361S9ocaPUZ7SHPrLHOqG%2BAOGFu95wakoIzOZ5%2BwZZgnvN9fQcJE5d5LhTIhB9cmJHOf6T6IxqqIwefsEME1qpc2agpsB5My%2Fpd7wRy%2FR4t8%2F%2BAfCgnuKZT9V1EyP7d9uMFbQBouohWN%2FoLNV67G3y1CXDJ9GjmJO8yDn7wuBVUmGprW4Lyi%2BKFl5VNJNKjIFMg3b5VZL2w4yXCbrev10oAdX4zxIkJg7OvQtRMXkC0o5j108LHj7Ot6gLU34W81FM0EsKTOtLnMeaZ28TBv%2FGHHNKQCrmr6I%3D&nvMid=29527016234&catId=50000835",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 129000,
"soldOutStatus": "InStock"
},
{
"id": 516,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=4B5SMogORXkUF9baCb23Z%2F%2F%2F%2Fw%3D%3DsKQNgfFiEKJNEMj8ZzQj6yOispgK2EXEIWFjVf8sr4L%2BScC51C8NCbszez3r6pqj9m24wK%2FUxzHh9yWuSN6dJSRk7j0upyiDCYdhOXitfUkOijOsA8Yx6WOfCyNpci4IEnJxR2iU3ZbhepoWNDzJNA1DxVsNs5D1R1D%2FFq7ewMK9Y%2BvSk0HKSTOY2JQM3Apksv4fxwBpnbd90XiWsq285yTGFSBni8tGMV4V6WU%2BMzv2r4gSBI3%2BqQaQBuJzQ9QUuDsaYOOau%2BZ%2BK%2FBZwsO865yFY0NfdqFKR6%2F2awh7KpKdQS67L2qnJj%2FQ1AZEiSfS3W8SsqFIlR9s2goUEbjffB81SrlfUhv99NFwN07kd%2BWVq746euCeHFBFOL%2BdGzHfLoYVJkXuCG58hFhrlQhLGIsx1ENESDMhWOczKAb3tFm6fnOCnz%2BmPc7qFBXXTmleNqwkXVMbwNe%2B45dFaHZqJIQOJ4Fi8A9XjqtLFHwpOWr%2FIjdQ8%2FrzeXo9sTULmPmF3e3UlpR6eysQtL8KND24MvU8iEsGZbmdbZICqt7U2YeGeDfVfpZDJsSDmWfV0RtZsiGJnVQQi4ygqkPLsN9GU0HornTeMFMWI76yU7BvGjg5uFLdUA5onDMzdbz5tafOoIZ%2BcZX%2BwO7caW%2Fa%2FmIsaClen3uY3f4JFH%2FWXmT5cQwzCi2sNDtVoRihJN9cGXGYU9Aad00pkKaaabfqtwE%2B1ZQuX5QHBAwB0PStoxiRTm2WC%2Fj%2B4i4eCxw13iPPFEm7pciJLglTzRx%2FgxWwNhbETZiDnCBpenznsr2iYgPfz5LRWkbDrUFJ2hBG8QaB8WVzn&nvMid=28828701557&catId=50000810",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 129000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 240,
"name": "112 spitfire",
"order": 5,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_2876093/28760931947.jpg",
"color": "Cream",
"size": "L",
"brand": "비디알"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 517,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=6QKJK4gcJFxvrSuz%2FYJilv%2F%2F%2Fw%3D%3Ds0LmFtwOvPZsgoWFE05b6N%2By7k6TCcjgnyzCeRTRr1eMgb6Wy0nkS0El6a0Zb8vcAVUlOPwM6XUIsnI%2FpNUu80jNbo4h8%2FskxVXqCXlJpy80uiDeVpCV3bu9VHzH2fNEv3g9ONH55AomvVtWEnrH1Wk6bqSnM64AO3y0543uvTE8cH3uKfnbf0iLH2zhXPosuMSyJnPZDpAdJba8S1elRhiORMpsnhce1EsaRDAvjXDEHb%2FH405dCVKve92t0Uvtxfw7NeoTeyKPTkYsfj0R5A6NXhM1lEyWQk1iHb3%2BG3HBE4GSkc3XyUftgGfrwgwnyicHlbWmIO%2FnW4XvzCZZIacv%2BjB2erv%2BZ%2Brrs5VHOiTSIVEUyEX15tdzXO38Pd9Q60c8WIwwiUs3IOpYmpTxRKEHR7l%2FOFGGPsrHy748Meb%2FZHqpDAha%2B3Z8Yis3gYkjOmvP0YrG%2FwGJva%2FEeIjry4HYy2l1cPk7%2BlqJziLuGFzMVlyFDCq%2BZVFE5vJHx3cUBNUQRVWjitw2dr38PTpTYHEA%2By0BewxqWoY3oip1sbjTT1c0Rce%2F8yHBS4j2%2FSutFOw7Bb6VkeI9WWf%2FmoNlNmNxpsahQOcPugTxHeJjizzzNgUcNhPgTGg6m5PkyglzgWXUucoEDYu2%2FeEIzoLxDmfi0nSQnYWWcxu5r0YsMZcmSFgZKv3Z84NTkSeFQOs%2Bbzr0LUTF5AtKOY9dPCx4%2BzhKgva7n318fpqf0pld3Z9P68QYbn9gInQzq%2Bx4VwGKn&nvMid=31336434394&catId=50000792",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 249000,
"soldOutStatus": "InStock"
},
{
"id": 518,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=29440987909",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 249000,
"soldOutStatus": "InStock"
},
{
"id": 519,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84766862099",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 218800,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 241,
"name": "ORIGINAL 1615 첼시부츠",
"order": 6,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3135548/31355489114.20220317181056.jpg",
"color": "Dark Olive",
"size": " ",
"brand": "블러드스톤"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 172,
"start": 468
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 511,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=31206879856",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 98100,
"soldOutStatus": "InStock"
},
{
"id": 512,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=30990386264",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 106820,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 239,
"name": "Bluer Team Hoodie",
"order": 4,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3099038/30990386264.1.jpg",
"color": "BLUE ",
"size": " ",
"brand": "네이머클로딩"
},
"affiliationLink": {
"id": 618,
"name": "제휴",
"shopUrl": "https://bit.ly/3RpTwZN",
"logoUrl": null,
"price": 98100,
"soldOutStatus": "InStock"
}
},
{
"item": {
"shops": [
{
"id": 208,
"name": "29CM",
"shopUrl": "https://product.29cm.co.kr/catalog/1024334",
"logoUrl": "https://www.29cm.co.kr/favicon.ico",
"price": 153000,
"soldOutStatus": "InStock"
},
{
"id": 209,
"name": "아트이프엑츠",
"shopUrl": "http://artifacts.co.kr/product/detail.html?product_no=644",
"logoUrl": "https://artifacts.co.kr/artfinger/img/toplogo.png",
"price": 153000,
"soldOutStatus": "InStock"
},
{
"id": 210,
"name": "노클레임",
"shopUrl": "https://noclaim.co.kr/product/detail.html?product_no=20950",
"logoUrl": "https://noclaim.co.kr/img/logo.svg",
"price": 153000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 76,
"name": "원 턱 커브드 데님 팬츠",
"order": 5,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3439598/34395989117.jpg",
"color": "블랙",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 208,
"name": "29CM",
"shopUrl": "https://product.29cm.co.kr/catalog/1024334",
"logoUrl": "https://www.29cm.co.kr/favicon.ico",
"price": 153000,
"soldOutStatus": "InStock"
},
{
"id": 209,
"name": "아트이프엑츠",
"shopUrl": "http://artifacts.co.kr/product/detail.html?product_no=644",
"logoUrl": "https://artifacts.co.kr/artfinger/img/toplogo.png",
"price": 153000,
"soldOutStatus": "InStock"
},
{
"id": 210,
"name": "노클레임",
"shopUrl": "https://noclaim.co.kr/product/detail.html?product_no=20950",
"logoUrl": "https://noclaim.co.kr/img/logo.svg",
"price": 153000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 76,
"name": "원 턱 커브드 데님 팬츠",
"order": 5,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3439598/34395989117.jpg",
"color": "블랙",
"size": "L",
"brand": "아트이프액츠"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 520,
"name": null,
"shopUrl": "http://m.lostgarden.co.kr/product/detail.html?product_no=1459&cate_no=139&display_group=1",
"logoUrl": null,
"price": 325000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 242,
"name": "리벳 더비슈즈 볼",
"order": 6,
"itemImgUrl": "http://m.lostgarden.co.kr/web/product/big/202111/a0dc07c1d3cd82c9cf9b1324637a07af.jpg",
"color": "White",
"size": " ",
"brand": "로스트가든"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 521,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=83936336937",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 278000,
"soldOutStatus": "InStock"
},
{
"id": 522,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=ZBeIJeTz7wUwx%2BbL3oLP1P%2F%2F%2Fw%3D%3DsZtttYPn%2BkIiMFrtJQC8TrjPDjdk%2FXZaju5wHEcHx6Vr2QuY0BThd8SlBCLX4bzm%2BqmtnrtKWd%2F5nOJsiSrF66j0aQVZgzlrMrwVhrRq1ny4HWHRAE8Ti8F%2FHESfoztQdoxlDeSXZTYC00mOmROg5eKrCA2FDHo2ztW%2FaaY2F5gqSD9%2FJKaczsS8%2BKjgwQeRq6S17UAR%2FPlD%2Fp0b3yRVPzjc%2BBcjMTb6yXAWf17fQzFHzCYeyAyNrknDI%2Bxfy6an5pgelO1cahu5K1m7bNwl8U%2BGwjTt1L3uwCVYuLhf1lyEIZD2l%2Ff8T26dKGAO%2B9yfkNPYrs7mJJWkXWb54FB%2FeUGvqR2unsG9Pw6XBns%2FftjKp2rhjGk0RQbeyY1O9ucAszVa4NL20urU88wwJo33Mxjwd4ZG6WFo7%2Fw%2BNDPR9gP00PziPKHsLmxOCTIrElvKFa373hBxT%2Fj8qiYCqblJ3POab1F7IN3IKwR07ZlPHimofXzpgvSBhshgqAk9bJ%2BXF5BmA3CUt%2BPJRzpwOW%2BVQ8IIaKFrqR1DX%2FaWyxBIY1QCey6%2BQktowgSV%2B7UfEPBudJg1s3xfrZJhVTrUE3XZ2%2B9Jy6nbtz2euVVkKR3gPpnrsoVbHA11Yl68Nch%2FOOXmC6jiAwq7KmcZxX3I99IWwyEhqDkKMHjeLTELLCWn62H6cKFe4DUHdW1swwOAcAUi4&nvMid=32094322788&catId=50000648",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 298400,
"soldOutStatus": "InStock"
},
{
"id": 523,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=fBP8Pi6BoXYvrgUHr9%2F8Z%2F%2F%2F%2Fw%3D%3DsAlEK0%2BnQkqnVBnX1e3fn4VpkVQkoXsSXquK1EnV67BEbZadB7nIyYLkoz%2FK671KdcG7Zs68s30LXdb6VtZpaagX1ZvQPjKrPdO%2BRAysTln90u1fxAVnpSOTBBcX57Myh%2FEVYspx0NEheUiACcSQb8qHaLxWVhmeeCrG65zYSUxfRtTpSach7ztpSx5RgABB3EsvM6Cv3IZ5UkIQ7rS589koEzirVS%2FOjaGgINbdN%2BGWAo6YDBy53dqAAAhsvNFqY92KFBSZXjNOt%2FJQj17cwvRzOJbfK8n%2Fl%2FiDXGNElD4X%2Bzfn7Qbn%2FgAp3BgnCS%2FQKme85mu7JWCR2kvaUnCHntoBsJjzV%2F3vl5Lmd9HbkUGKyRUFOuSUH2jLm%2BzvdZdUCTAMic9CwimdNttYP%2BYAisDvv6SJobOcao14t%2BD0FviXG1jLMEkr9ovMgM8KhQo2OsQXzM6qgTKmm3hoMVxWSS3VfAswAL%2Bv8zX4SZG1j%2FdGvfpoqSca301zq9FFeYEONnFeagIbwJCdg2LRQipiF7EqWnB4rOQk8b0LDwLXXw4WQjt%2B5KBx77mpQaORbj7YR3J7PhSBTizd%2FqxIjlk8gKIE95d3lwbs2GsCkr0E7l7fSFsVgMFrtH0lXA9uojDhOevNFmD6txysyXG6pJ00Jf4zdIkopvzlQyNnooG0c5%2F2wT7xooCdLLXJtEZ7RCESnJXSFlseqJb%2BD9y1uadTE7g%3D%3D&nvMid=32095265168&catId=50000647",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 322050,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 243,
"name": "Senses Shoulder pack",
"order": 10,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3228772/32287729034.20220512103131.jpg",
"color": "Black",
"size": " ",
"brand": "요시다 포터"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 173,
"start": 497
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 524,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34560739657",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
},
{
"id": 525,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34415466981",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 244,
"name": "HALF ZIP-UP SWEATSHIRT",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3456073/34560739657.jpg",
"color": "Navy",
"size": "  ",
"brand": "네이더스"
},
"affiliationLink": {
"id": 621,
"name": "제휴",
"shopUrl": "https://bit.ly/3AOINB7",
"logoUrl": null,
"price": 118000,
"soldOutStatus": "InStock"
}
},
{
"item": {
"shops": [
{
"id": 526,
"name": "변경중",
"shopUrl": "https://cr.shopping.naver.com/adcr.nhn?x=7CuYg2uM5BPIPCy1%2BoXAV%2F%2F%2F%2Fw%3D%3Dsqeh0TAIa8V0b2VUZr72bNF0NBG9ch0nOWdhpG45TS60ascLwROq7s0VSNLd6N9z9MTA9eLfWbaFGkacNSueejtqwpQQhntRTPCOP0Y4MFAwwfulv6eUEMvlS9RZxnBKpnJxR2iU3ZbhepoWNDzJNA1dTTAfU%2BAnP2epzfG5sqUhxDjy4ZvOzDLOoKaXBxq9z9HkzJpgAKUEwKbgx81xgrq1sflEAsSMO5sCwJsHVDm%2FD4xiv5kevJfyV7h8gdW40G2n%2BrWkXo%2B5DqLh23rxuh4gJivEgzN%2B3evVzTOStySbOOV%2Bf4l%2BL2%2F3Ho2%2BLx1H8gOuF9ilw9VAs7HRGydrtu%2BR6EotUMxRdF1UBLrhSl%2FquUk%2FY9UbaCkZksYJoYm9mHE77Ie4Bpf3AkjUArpuoSg66cDX6SX5brrzi4fd6TMSfnOCnz%2BmPc7qFBXXTmleNqwkXVMbwNe%2B45dFaHZqJIQOJ4Fi8A9XjqtLFHwpOWr%2BYw1miavQyGckVjC5BLlrfJzTRNqbXRkipAnD%2F09fvZWI9s8C7ah9A%2FIe%2F7UqCrNTaDBjp76fBAb6f1gW4qo3J3xy1vKIZ%2FXtCptpEwWB2bz6FURihOvVNK6%2BarovFEXbbdKFsHfkpx0LsP%2Fmom8rkqltXvA3bNEMI2yEz96PhO7tQpCzS4j6dPs69FmpzE2PqZ1n9CZtz9IYJb4Nc8uvjOl47qQGZvfastIBsIe8RFmjTcYbzZxXITA6ESwaEGrQmQW9HuW1mZA62U0XeB0cSb4GcJt3%2BWI%2BvgDqtvU8fpNAfeQUEqkxTE3xsAqvnINtt%2F6r31EUkbZdR5LBg2MKb&nvMid=34411645573&catId=50000830",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 118000,
"soldOutStatus": "InStock"
},
{
"id": 527,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34589143180",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 141450,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 245,
"name": "HALF ZIP-UP SWEATSHIRT",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3462217/34622178124.20220912035752.jpg",
"color": "Black",
"size": "  ",
"brand": "네이더스"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 174,
"start": 544
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 524,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34560739657",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
},
{
"id": 525,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34415466981",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 244,
"name": "HALF ZIP-UP SWEATSHIRT",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3456073/34560739657.jpg",
"color": "Navy",
"size": "  ",
"brand": "네이더스"
},
"affiliationLink": {
"id": 621,
"name": "제휴",
"shopUrl": "https://bit.ly/3AOINB7",
"logoUrl": null,
"price": 118000,
"soldOutStatus": "InStock"
}
}
]
},
{
"times": {
"id": 176,
"start": 545
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 524,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34560739657",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
},
{
"id": 525,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34415466981",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 244,
"name": "HALF ZIP-UP SWEATSHIRT",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3456073/34560739657.jpg",
"color": "Navy",
"size": "  ",
"brand": "네이더스"
},
"affiliationLink": {
"id": 621,
"name": "제휴",
"shopUrl": "https://bit.ly/3AOINB7",
"logoUrl": null,
"price": 118000,
"soldOutStatus": "InStock"
}
},
{
"item": {
"shops": [
{
"id": 528,
"name": null,
"shopUrl": "http://m.lostgarden.co.kr/product/detail.html?product_no=1459&cate_no=139&display_group=1https://jentestore.com/goods/view?no=663022&gclid=Cj0KCQjwkOqZBhDNARIsAACsbfJmns8xJkWmJ56eQjYPlGJ3IeDOv3ZZEwZALClmxGbSlEut-9lYXjwaAhqzEALw_wcB",
"logoUrl": null,
"price": 318000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 246,
"name": "루즈핏 데님",
"order": 5,
"itemImgUrl": "https://cdn.jentestore.io/resource/products/663022/663022_1.jpg?_=33009791",
"color": " ",
"size": "33size ",
"brand": "아크네스튜디오"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 529,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=33332652634",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 198000,
"soldOutStatus": "InStock"
},
{
"id": 530,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34849698245",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 215600,
"soldOutStatus": "InStock"
},
{
"id": 531,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34776169744",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 220590,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 247,
"name": "아큐믹 노스 쇼어",
"order": 6,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_8476059/84760592164.jpg",
"color": " ",
"size": " ",
"brand": " IYSO"
},
"affiliationLink": null
}
]
},
{
"times": {
"id": 175,
"start": 570
},
"model": {
"id": 1,
"name": "핏더사이즈",
"height_cm": 183,
"weight_kg": 88,
"gender": "M"
},
"items": [
{
"item": {
"shops": [
{
"id": 193,
"name": "모스콧",
"shopUrl": "https://moscot.com/products/dahven",
"logoUrl": "https://cdn.shopify.com/s/files/1/2403/8187/files/social-image.jpg?v=1594863638429400318",
"price": 420000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 96,
"name": "DAHVEN",
"order": 1,
"itemImgUrl": "https://cdn.shopify.com/s/files/1/2403/8187/products/dahven-color-black-pos-1_1200x.jpg?v=1644594422",
"color": "Black",
"size": "44size",
"brand": "모스콧"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 524,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34560739657",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
},
{
"id": 525,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=34415466981",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 138000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 244,
"name": "HALF ZIP-UP SWEATSHIRT",
"order": 2,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3456073/34560739657.jpg",
"color": "Navy",
"size": "  ",
"brand": "네이더스"
},
"affiliationLink": {
"id": 621,
"name": "제휴",
"shopUrl": "https://bit.ly/3AOINB7",
"logoUrl": null,
"price": 118000,
"soldOutStatus": "InStock"
}
},
{
"item": {
"shops": [],
"childItems": [],
"id": 249,
"name": "PLANET GARMENT DYED PANTS",
"order": 5,
"itemImgUrl": "https://image.msscdn.net/images/goods_img/20210225/1814087/1814087_2_500.jpg?t=20210225102957",
"color": "Pink",
"size": " ",
"brand": "하이드아웃"
},
"affiliationLink": null
},
{
"item": {
"shops": [
{
"id": 536,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=32863071752",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 86000,
"soldOutStatus": "InStock"
},
{
"id": 537,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=32862573999",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 86000,
"soldOutStatus": "InStock"
},
{
"id": 538,
"name": "변경중",
"shopUrl": "https://search.shopping.naver.com/gate.nhn?id=84320067386",
"logoUrl": "https://www.naver.com/favicon.ico",
"price": 86000,
"soldOutStatus": "InStock"
}
],
"childItems": [],
"id": 250,
"name": "Log 1.0 off",
"order": 6,
"itemImgUrl": "https://shopping-phinf.pstatic.net/main_3286307/32863071752.jpg",
"color": "white",
"size": " ",
"brand": "클로그"
},
"affiliationLink": null
}
]
}
]
  }
]// VideoResponseDtoList
function filteringTime(videoList,itemId) { // 필요한 정보만 VideoResponseDtoList에서 추출
  console.log(videoList, itemId);
  let result = [];
  for (let i = 0; i < videoList.length; ++i) {
    for (let j = 0; j < videoList[i].timeShopItemLists.length; ++j) {
      for (
        let k = 0;
        k < videoList[i].timeShopItemLists[j].items.length;
        ++k
      ) {
        if (
          videoList[i].timeShopItemLists[j].items[k].item.id ===
          parseInt(itemId)
        ) {
          result.push({
            index: result.length,
            channelName: videoList[i].creator,
            videoUrl: videoList[i].videoUrl,
            model: videoList[i].timeShopItemLists[j].model,
            time: videoList[i].timeShopItemLists[j].times.start,
          });
        }
      }
    }
  };
  return result;
}
function Item() {
  let { itemId } = useParams();
  const [index, setIndex] = useState(0);
  const [modelClick, setModelClick] = useState(false);
  const [itemData, setItemData] = useState(dummyData);
  const [videoData, setVideoData] = useState(filteringTime(dummyVideoList,itemId));
  console.log(itemId);
  return (
    <ItemPage>
      <div className="itemArea">
        <img className="itemImg" src={itemData.itemImgUrl} alt="Item"></img>
        <div className="itemInfoArea">
          <span className="itemBrand">{itemData.brand}</span>
          <span className="itemName">{itemData.name}</span>
          <span className="itemPrice">최저가 : {itemData.shops[0].price}원</span>
          <div className="shopInfoArea">
            {
              itemData.shops.map((shop) => (
              <a href={shop.shopUrl} target="_blank" rel="noreferrer">
                <img className="logoImg" src={shop.logoUrl} alt="Logo"></img>
                <span>{shop.price}</span>
              </a> 
              )) 
            }
          </div>
        </div>
      </div>
      <div className="videoArea">
        <YoutubePlayer data={videoData[index]} modelClick={modelClick} setModelClick={setModelClick}></YoutubePlayer>
        <div className="modelArea">
          <ModelList datas={videoData} setIndex={setIndex} setModelClick={setModelClick}></ModelList>
        </div>
      </div>
    </ItemPage>
  );
}


const ItemPage = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  .itemArea{
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    .itemImg{
      width: 600px;
    }
    .itemInfoArea{
      display: flex;
      flex-direction: column;
      width: 600px;
      height: 600px;
      justify-content: space-evenly;
      .itemBrand{
        font-size: xx-large;
      }
      .itemName{
        font-size: x-large;
      }
      .itemPrice{
        font-size: xx-large;
      }
      .shopInfoArea{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 360px;
        .logoImg{
          width:20px;
        }
      }
    }
  }
  .videoArea{
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    .modelArea{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 200px;
    }
  }
`;

export default Item;