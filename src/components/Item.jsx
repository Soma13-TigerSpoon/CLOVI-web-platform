import styled from "styled-components";
import ModelList from "./ModelList";
import ShopList from "./ShopList";
import YoutubePlayer from "./YoutubeInItemPage";
import { useState } from "react";
export let videoData;
const dummyData = {
  shops: [
    {
      id: 145,
      name: "변경중",
      shopUrl: "https://search.shopping.naver.com/gate.nhn?id=84285127015",
      logoUrl: "https://www.naver.com/favicon.ico",
      price: 448000,
      soldOutStatus: "InStock",
    },
    {
      id: 146,
      name: "변경중",
      shopUrl: "https://search.shopping.naver.com/gate.nhn?id=23039870682",
      logoUrl: "https://www.naver.com/favicon.ico",
      price: 448000,
      soldOutStatus: "InStock",
    },
  ],
  childItems: [],
  id: 72,
  name: "Penny Loafer",
  order: 6,
  itemImgUrl: "https://shopping-phinf.pstatic.net/main_8428512/84285127015.jpg",
  color: "Black",
  size: "UK 7",
  brand: "Sanders",
};
const dummyVideoList = [
  {
    id: 13,
    title: "슬슬 겨울을 준비해 볼까? 인더로우",
    creator: "킹타쿠Kingtaku",
    profileImgUrl:
      "https://yt3.ggpht.com/LFde7BcLM9FPCP8EyPwgEEFZBbeK7JrhvhVtgieYv1C5RNrzLGdBNtxI3Ti_M061AkyRryFyEA=s176-c-k-c0x00ffffff-no-rj",
    videoUrl: "8mJhlqh8M14",
    timeShopItemLists: [
      {
        times: {
          id: 48,
          start: 26,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 134,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=34443850115",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 159000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 135,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=31315176795",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 159000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 65,
              name: "Traveller Chino Pants",
              order: 5,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_3131517/31315176795.5.jpg",
              color: "Olive Grey",
              size: "2",
              brand: "Intheraw",
            },
            affiliationLink: {
              id: 583,
              name: "제휴",
              shopUrl:
                "https://intheraw.co.kr/product/detail.html?product_no=318&cate_no=45&display_group=1",
              logoUrl: null,
              price: 159000,
              soldOutStatus: "InStock",
            },
          },
          {
            item: {
              shops: [
                {
                  id: 147,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=31792235590",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 245000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 148,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=24809680984",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 386000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 74,
              name: "Hero",
              order: 6,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_3179223/31792235590.jpg",
              color: "Black",
              size: "41",
              brand: "Ancient Greek Sandals",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 45,
          start: 33,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [],
              childItems: [],
              id: 66,
              name: "Collarless Painters Shirt",
              order: 4,
              itemImgUrl:
                "https://assets.peggsandson.com/media/catalog/product/c/o/collarless_painters_shirt_-_off_white_black_stripe_1_.jpg?q=80",
              color: "White",
              size: "M",
              brand: "MHL.",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 46,
          start: 281,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 142,
                  name: "변경중",
                  shopUrl:
                    "https://cr.shopping.naver.com/adcr.nhn?x=1K9Dm%2FdaumlrklTuUv4ubv%2F%2F%2Fw%3D%3Ds%2FVhD7nVm9j%2BPGoAAXzXTy5jC4oU6cyKYyGHQVLsiPew1Fak%2BhGy7GjwPG28lQ%2FMgQm%2BW9SW%2B8%2BwPAhap1vL0got4MxA15w3L95BwKwQFkt6ueS9o9Ijw6cYiH9i1uQ6CGxd3hVxlaW2Uk70lY2wIiig9ytIgz3QyTUOOKkpdn9udMgxyjuDfJ4k2%2FBCM3o%2BYhNTfJDiX6KZP%2FMwSF4I%2BIl8yC8YNNEzdH8%2B22UgKZzpJqDzAXajB4x%2BjQxJyP8QjW2IvbQAMv9TKT7sMxOv%2FPz9rXyqENDUD8omnd%2BAEOivlwpGwz6XJ7z8LuqN3nDdDdSZvgpK2CkjmS991sgSBtK%2B4Sx5OmdeMeieUJoEF7k0wqDYsYrKBSSBIDfHGFYk7rSNaqhLqtV5lX9FxiuIiIOb6lldJfg7ByRf%2BQwnxa7n1z60u0HcQR0hGQb360IpJz%2Fj8rZwwW8gd7Jh8XSe7p64f6siGrEOAovp3oJEP5HhDWt66Wl4C6TysXFIhX36xrlboeVZAoTYXuz%2BWmUKzBmVhP26siJoKF%2FhLtXJfrTc39LTFmHxIqaVHbifXMw3pRT9F4qgKajv39VSfb7yGEoS7J9dSKObVIONlvRMSgqAgq6RxC1k0tLD1i3h9NdnDqtfp5YBAienpw9OEwmhK3869C1ExeQLSjmPXTwsePs4rdCNEZw3KYTk19SOG03yH0Ov0TGsg%2Bbn%2BbdG3gGmJ5Q%3D%3D&nvMid=34812284664&catId=50000836",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 187600,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 68,
              name: "Bay Meadows",
              order: 4,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_8309992/83099920566.jpg",
              color: "Acid Orange",
              size: "M",
              brand: "LVC",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 70,
          start: 286,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 134,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=34443850115",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 159000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 135,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=31315176795",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 159000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 65,
              name: "Traveller Chino Pants",
              order: 5,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_3131517/31315176795.5.jpg",
              color: "Olive Grey",
              size: "2",
              brand: "Intheraw",
            },
            affiliationLink: {
              id: 583,
              name: "제휴",
              shopUrl:
                "https://intheraw.co.kr/product/detail.html?product_no=318&cate_no=45&display_group=1",
              logoUrl: null,
              price: 159000,
              soldOutStatus: "InStock",
            },
          },
        ],
      },
      {
        times: {
          id: 47,
          start: 364,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 143,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84694837347",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 179000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 144,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=34440187174",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 179000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 70,
              name: "Northern Half Zip Knit Pullover",
              order: 4,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_3444018/34440187174.3.jpg",
              color: "Smoky Grey",
              size: "1",
              brand: "Intheraw",
            },
            affiliationLink: {
              id: 583,
              name: "제휴",
              shopUrl:
                "https://intheraw.co.kr/product/detail.html?product_no=318&cate_no=45&display_group=1",
              logoUrl: null,
              price: 159000,
              soldOutStatus: "InStock",
            },
          },
          {
            item: {
              shops: [],
              childItems: [],
              id: 71,
              name: "Wide Tapered Denim",
              order: 5,
              itemImgUrl:
                "https://m.slowsteadyclub.com/web/product/medium/202203/a1adbe9e817bc7b5010866a30ddc63f3.jpg",
              color: "Ice Blue",
              size: "1",
              brand: "Hatski",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 145,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84285127015",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 448000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 146,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=23039870682",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 448000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 72,
              name: "Penny Loafer",
              order: 6,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_8428512/84285127015.jpg",
              color: "Black",
              size: "UK 7",
              brand: "Sanders",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 71,
          start: 410,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [],
              childItems: [],
              id: 104,
              name: "Northern Half Zip Knit Pullover",
              order: 4,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_3498339/34983394499.jpg",
              color: "Brown Melange",
              size: "2",
              brand: "Intheraw",
            },
            affiliationLink: {
              id: 586,
              name: "제휴",
              shopUrl:
                "https://intheraw.co.kr/product/detail.html?product_no=338&cate_no=67&display_group=1",
              logoUrl: null,
              price: 179000,
              soldOutStatus: "InStock",
            },
          },
        ],
      },
    ],
  },
  {
    id: 20,
    title: "포터리가 추구하는 건 뭘까?",
    creator: "킹타쿠Kingtaku",
    profileImgUrl:
      "https://yt3.ggpht.com/LFde7BcLM9FPCP8EyPwgEEFZBbeK7JrhvhVtgieYv1C5RNrzLGdBNtxI3Ti_M061AkyRryFyEA=s176-c-k-c0x00ffffff-no-rj",
    videoUrl: "a2OQLGjpQpw",
    timeShopItemLists: [
      {
        times: {
          id: 104,
          start: 59,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 293,
                  name: "Pottery",
                  shopUrl: "https://bit.ly/3T71f08",
                  logoUrl:
                    "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/5/2639m008Rv_4X4y8m63629v0emYtU4_8b2mv.gif?v=202210012035&hash=r&serviceCode=CL",
                  price: 295000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 139,
              name: "Washed Sports Jacket",
              order: 3,
              itemImgUrl:
                "https://ptry.co.kr/web/product/medium/202203/0d9d8e6d059eb8f801293683816fceee.jpg",
              color: "Black",
              size: "2",
              brand: "Pottery",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 295,
                  name: "Pottery",
                  shopUrl: "https://bit.ly/3T71f08",
                  logoUrl:
                    "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/5/2639m008Rv_4X4y8m63629v0emYtU4_8b2mv.gif?v=202210012035&hash=r&serviceCode=CL",
                  price: 189000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 140,
              name: "Washed Tapered Pants",
              order: 3,
              itemImgUrl:
                "https://ptry.co.kr/web/product/medium/202203/4102de4a3194e1c9ff0f1c4fde48e8d6.jpg",
              color: "Black",
              size: "2",
              brand: "Pottery",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 294,
                  name: "Pottery",
                  shopUrl: "https://bit.ly/3T71f08",
                  logoUrl:
                    "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/5/2639m008Rv_4X4y8m63629v0emYtU4_8b2mv.gif?v=202210012035&hash=r&serviceCode=CL",
                  price: 169000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 138,
              name: "Button Down Shirt",
              order: 4,
              itemImgUrl:
                "https://ptry.co.kr/web/product/extra/big/202201/9a4763995543f956c7d1b6b8db18995c.jpg",
              color: "White",
              size: "2",
              brand: "Pottery",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 232,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=34308796334",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 145000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 233,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=33998643747",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 138900,
                  soldOutStatus: "InStock",
                },
                {
                  id: 234,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=34308822273",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 146270,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 115,
              name: "척테일러 1970s",
              order: 6,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_3354299/33542997422.20220717111218.jpg",
              color: "Parchment",
              size: "255",
              brand: "converse",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 105,
          start: 224,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 296,
                  name: "Pottery",
                  shopUrl:
                    "https://ptry.co.kr/product/detail.html?product_no=391&cate_no=319&display_group=1",
                  logoUrl:
                    "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/5/2639m008Rv_4X4y8m63629v0emYtU4_8b2mv.gif?v=202210012035&hash=r&serviceCode=CL",
                  price: 389000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 141,
              name: "Fine Wool Sports Jacket",
              order: 3,
              itemImgUrl:
                "https://ptry.co.kr/web/product/medium/202202/c9e86c848182813da6f7e52ef0c0949e.jpg",
              color: "Black",
              size: "2",
              brand: "Pottery",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 297,
                  name: "Pottery",
                  shopUrl: "https://bit.ly/3T71f08",
                  logoUrl:
                    "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/5/2639m008Rv_4X4y8m63629v0emYtU4_8b2mv.gif?v=202210012035&hash=r&serviceCode=CL",
                  price: 219000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 142,
              name: "Fine Wool One Pleated Tapered Pants",
              order: 3,
              itemImgUrl:
                "https://ptry.co.kr/web/product/medium/202202/820456417417a2daf9a78fbc21e1a914.jpg",
              color: "Black",
              size: "2",
              brand: "Pottery",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 294,
                  name: "Pottery",
                  shopUrl: "https://bit.ly/3T71f08",
                  logoUrl:
                    "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/5/2639m008Rv_4X4y8m63629v0emYtU4_8b2mv.gif?v=202210012035&hash=r&serviceCode=CL",
                  price: 169000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 138,
              name: "Button Down Shirt",
              order: 4,
              itemImgUrl:
                "https://ptry.co.kr/web/product/extra/big/202201/9a4763995543f956c7d1b6b8db18995c.jpg",
              color: "White",
              size: "2",
              brand: "Pottery",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 225,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=34729438882",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 290000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 111,
              name: "Gustave Derby",
              order: 6,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_3472943/34729438882.jpg",
              color: "NOIR",
              size: "40",
              brand: "A.P.C.",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 298,
                  name: "Pottery",
                  shopUrl: "https://bit.ly/3T71f08",
                  logoUrl:
                    "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/5/2639m008Rv_4X4y8m63629v0emYtU4_8b2mv.gif?v=202210012035&hash=r&serviceCode=CL",
                  price: 129000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 143,
              name: "Slim Tie",
              order: 9,
              itemImgUrl:
                "https://ptry.co.kr/web/product/medium/202205/aa47c16380c2de88b057125ecef71a9f.jpg",
              color: "Black",
              size: "Free",
              brand: "Pottery",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 106,
          start: 332,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 299,
                  name: "Pottery",
                  shopUrl: "https://bit.ly/3T71f08",
                  logoUrl:
                    "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/5/2639m008Rv_4X4y8m63629v0emYtU4_8b2mv.gif?v=202210012035&hash=r&serviceCode=CL",
                  price: 179000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 144,
              name: "Comfort Shirts",
              order: 4,
              itemImgUrl:
                "https://ptry.co.kr/web/product/medium/202201/e177f54ef80de17d4f48f5705a14318b.jpg",
              color: "White",
              size: "1",
              brand: "Pottery",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 300,
                  name: "Pottery",
                  shopUrl: "https://bit.ly/3T71f08",
                  logoUrl:
                    "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/5/2639m008Rv_4X4y8m63629v0emYtU4_8b2mv.gif?v=202210012035&hash=r&serviceCode=CL",
                  price: 195000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 145,
              name: "One-Washed Wide Denim",
              order: 5,
              itemImgUrl:
                "https://ptry.co.kr/web/product/medium/202202/923cfca56249003e8088841f1e82f528.jpg",
              color: "Blue",
              size: "2",
              brand: "Pottery",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 107,
          start: 335,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 147,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=31792235590",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 245000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 148,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=24809680984",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 386000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 74,
              name: "Hero",
              order: 6,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_3179223/31792235590.jpg",
              color: "Black",
              size: "41",
              brand: "Ancient Greek Sandals",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 108,
          start: 345,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 301,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=83638709916",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 25000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 146,
              name: "Cotton Tee",
              order: 4,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_8363870/83638709916.jpg",
              color: "Grey",
              size: "M",
              brand: "wouldbe",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 302,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84743842183",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 239000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 303,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84065414158",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 181900,
                  soldOutStatus: "InStock",
                },
                {
                  id: 304,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84531522532",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 176000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 305,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=30609794999",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 389000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 147,
              name: "Fatigue Pants Regular",
              order: 5,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_8474384/84743842183.jpg",
              color: "Green",
              size: "2",
              brand: "orSlow",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 109,
          start: 349,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 145,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84285127015",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 448000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 146,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=23039870682",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 448000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 72,
              name: "Penny Loafer",
              order: 6,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_8428512/84285127015.jpg",
              color: "Black",
              size: "UK 7",
              brand: "Sanders",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 110,
          start: 352,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 306,
                  name: "Pottery",
                  shopUrl: "https://bit.ly/3T71f08",
                  logoUrl:
                    "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/5/2639m008Rv_4X4y8m63629v0emYtU4_8b2mv.gif?v=202210012035&hash=r&serviceCode=CL",
                  price: 259000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 148,
              name: "Work Jacket",
              order: 2,
              itemImgUrl:
                "https://ptry.co.kr/web/product/medium/202208/910118a9a5e1faf2bb2d7a83077ed6e0.jpg",
              color: "Navy",
              size: "1",
              brand: "Pottery",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 111,
          start: 384,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 307,
                  name: "Pottery",
                  shopUrl: "https://bit.ly/3T71f08",
                  logoUrl:
                    "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/5/2639m008Rv_4X4y8m63629v0emYtU4_8b2mv.gif?v=202210012035&hash=r&serviceCode=CL",
                  price: 179000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 149,
              name: "Comfort Shirt",
              order: 4,
              itemImgUrl:
                "https://ptry.co.kr/web/product/medium/202208/bba54c4553b4c199df1a56ec835633d9.jpg",
              color: "Ecru",
              size: "1",
              brand: "Pottery",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 112,
          start: 408,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [],
              childItems: [],
              id: 150,
              name: "Comfort Crewneck Knit",
              order: 4,
              itemImgUrl:
                "https://ptry.co.kr/web/product/extra/big/202209/19a54916cf7e74f76ebf3685e64cd40c.jpg",
              color: "Dark Navy",
              size: "2",
              brand: "Pottery",
            },
            affiliationLink: {
              id: 587,
              name: "제휴",
              shopUrl: "https://bit.ly/3T71f08",
              logoUrl: null,
              price: 239000,
              soldOutStatus: "InStock",
            },
          },
        ],
      },
      {
        times: {
          id: 113,
          start: 420,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [],
              childItems: [],
              id: 151,
              name: "Melton Wool Mac Coat",
              order: 2,
              itemImgUrl:
                "https://ptry.co.kr/web/product/medium/202209/d6c6d8d57df8023b2eb374a877edb368.jpg",
              color: "Dark Navy",
              size: "2",
              brand: "Pottery",
            },
            affiliationLink: {
              id: 588,
              name: "제휴",
              shopUrl: "https://bit.ly/3T71f08",
              logoUrl: null,
              price: 789000,
              soldOutStatus: "InStock",
            },
          },
        ],
      },
      {
        times: {
          id: 114,
          start: 446,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [],
              childItems: [],
              id: 152,
              name: "Chore Jacket",
              order: 2,
              itemImgUrl:
                "https://ptry.co.kr/web/product/medium/202209/aa0d9bd9ebacaa0c908c510a0e207ddb.jpg",
              color: "Marine",
              size: "2",
              brand: "Pottery",
            },
            affiliationLink: {
              id: 589,
              name: "제휴",
              shopUrl: "https://bit.ly/3T71f08",
              logoUrl: null,
              price: 1350000,
              soldOutStatus: "InStock",
            },
          },
        ],
      },
    ],
  },
  {
    id: 24,
    title: "넌 어떻게 입고 싶어?",
    creator: "킹타쿠Kingtaku",
    profileImgUrl:
      "https://yt3.ggpht.com/LFde7BcLM9FPCP8EyPwgEEFZBbeK7JrhvhVtgieYv1C5RNrzLGdBNtxI3Ti_M061AkyRryFyEA=s176-c-k-c0x00ffffff-no-rj",
    videoUrl: "ZrIWWWhADko",
    timeShopItemLists: [
      {
        times: {
          id: 152,
          start: 13,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 302,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84743842183",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 239000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 303,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84065414158",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 181900,
                  soldOutStatus: "InStock",
                },
                {
                  id: 304,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84531522532",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 176000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 305,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=30609794999",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 389000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 147,
              name: "Fatigue Pants Regular",
              order: 5,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_8474384/84743842183.jpg",
              color: "Green",
              size: "2",
              brand: "orSlow",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 147,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=31792235590",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 245000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 148,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=24809680984",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 386000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 74,
              name: "Hero",
              order: 6,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_3179223/31792235590.jpg",
              color: "Black",
              size: "41",
              brand: "Ancient Greek Sandals",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 151,
          start: 49,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [],
              childItems: [],
              id: 216,
              name: "Gym Long Sleeve Tee",
              order: 4,
              itemImgUrl:
                "https://media.catchfashion.com/images/h_l?t=ps&url=https%3A%2F%2Fres.cloudinary.com%2Fssenseweb%2Fimage%2Fupload%2F211602M213013_1.jpg",
              color: "Navy",
              size: "M",
              brand: "MHL.",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 153,
          start: 211,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 246,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=83817736654",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 76000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 120,
              name: "Relaxed Shirts",
              order: 4,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_8381773/83817736654.1.jpg",
              color: "White",
              size: "S",
              brand: "wouldbe",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 154,
          start: 277,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 457,
                  name: "A.DECADE",
                  shopUrl:
                    "https://adecade.co.kr/product/detail.html?product_no=152&cate_no=84&display_group=1",
                  logoUrl:
                    "https://lh3.googleusercontent.com/p/AF1QipOU6wy8h1PzHjM59Ut6gpagNWqmj8YxXY9aWxiO=s1600-w400",
                  price: 269000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 217,
              name: "Sports Jacket",
              order: 3,
              itemImgUrl:
                "https://ecimg.cafe24img.com/pg239b32365166069/adecade/web/product/extra/small/20220929/b6775cbc418f2a9b6b16f76a79eebdc1.jpg",
              color: "Navy",
              size: "1",
              brand: "SEW x Wouldbe",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 246,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=83817736654",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 76000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 120,
              name: "Relaxed Shirts",
              order: 4,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_8381773/83817736654.1.jpg",
              color: "White",
              size: "S",
              brand: "wouldbe",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 302,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84743842183",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 239000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 303,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84065414158",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 181900,
                  soldOutStatus: "InStock",
                },
                {
                  id: 304,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84531522532",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 176000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 305,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=30609794999",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 389000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 147,
              name: "Fatigue Pants Regular",
              order: 5,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_8474384/84743842183.jpg",
              color: "Green",
              size: "2",
              brand: "orSlow",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 145,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84285127015",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 448000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 146,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=23039870682",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 448000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 72,
              name: "Penny Loafer",
              order: 6,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_8428512/84285127015.jpg",
              color: "Black",
              size: "UK 7",
              brand: "Sanders",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [],
              childItems: [],
              id: 218,
              name: "Pearl Weave Bag",
              order: 10,
              itemImgUrl:
                "https://images.onthelook.co.kr/pr/chhYM4B6R6P483JTrE8y2J.jpeg?w=600&q=80&f=webp",
              color: "Natural",
              size: "Free",
              brand: "Namer Clothing",
            },
            affiliationLink: null,
          },
        ],
      },
      {
        times: {
          id: 155,
          start: 317,
        },
        model: {
          id: 4,
          name: "킹타쿠",
          height_cm: 173,
          weight_kg: 65,
          gender: "M",
        },
        items: [
          {
            item: {
              shops: [
                {
                  id: 214,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84602165178",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 475000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 215,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84544760306",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 370000,
                  soldOutStatus: "InStock",
                },
                {
                  id: 216,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84779079786",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 415910,
                  soldOutStatus: "InStock",
                },
                {
                  id: 217,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=34841444281",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 366010,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 107,
              name: "Type1 Pleated Front Denim Brouse 원 워시",
              order: 2,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_8454476/84544760306.jpg",
              color: "One Wash",
              size: "2",
              brand: "orSlow",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 246,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=83817736654",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 76000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 120,
              name: "Relaxed Shirts",
              order: 4,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_8381773/83817736654.1.jpg",
              color: "White",
              size: "S",
              brand: "wouldbe",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 226,
                  name: "wynd",
                  shopUrl:
                    "https://wyndshop.co.kr/product/service-of-standard-regualr-straight-fatigue-pants-olive-project1/1465/category/24/display/1/",
                  logoUrl:
                    "https://wyndshop.co.kr/urban/images/layout/header/wynd_logo.png",
                  price: 229000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 110,
              name: "Regular Fatigue Pants",
              order: 5,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_3185775/31857757787.20220416131201.jpg",
              color: "Olive",
              size: "1",
              brand: "service of standard",
            },
            affiliationLink: null,
          },
          {
            item: {
              shops: [
                {
                  id: 458,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=34988283813",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 227700,
                  soldOutStatus: "InStock",
                },
                {
                  id: 459,
                  name: "변경중",
                  shopUrl:
                    "https://cr.shopping.naver.com/adcr.nhn?x=7pgTCrkIOyWAnJ6k%2BTMnUf%2F%2F%2Fw%3D%3DsG3RmQ3psrt7PCrTpLDECO4zhYlj3U3r7i2jrGWS6N4OXUJl8OhhyqUjslZhcSc%2BkHxKDLknV0nLKTKtWaTUbDSagjZIg5PtJ3g5tlgfu9P7BGcfoyc861xVPKvlkzzfC%2FEVYspx0NEheUiACcSQb8qHaLxWVhmeeCrG65zYSUxfRtTpSach7ztpSx5RgABB3TFMSD65hWvypNlQWiR8FYeHJE79M4GjNhbrmVQeefqd7ROY4ym3XUrwBXZgoCK1yD1Qmf2ge%2BrufpCO7m6iFQzVyEnkfa1hqWy2q3nRg7czOOiRQykn1zIQz7CBR4R3ZvjiNBumUCBvGTz7mRf4qdVVd6Z%2BmZ5fvTALbBBPmfKKpJnalZl8YBNTVY%2F%2FSODJ0TG82dU3sfNw9RAUjQT0AqXZR%2BVW%2BaoNH2lBCkHN4B9h%2FiRPEXvNPCcKY0sVCu%2BW8ST%2BENeN7kdhJZcYXEGsh7atRtDR0LucDN3VGci88146AJmNbOp%2FDbLyyPmNh27Xw%2BDDnxWhRk9T8J%2Fe2c2zvyJBy%2BmiRWgSuFGDZUUXzyKzQXncWa4saedtpohx34Kh6ed8uHkq9t0IEQA%2BxuPTe9SjysRRvKk3f%2BD46F7wJW%2BWSGq41DHA2cfl31aF5Ry5VKBCqnrV70F0gkDnu1SP893INzXeYN%2FDZHnQssY88vjh3GJZPc%2B2%2BJU7MFissVTGTrAP87PddLG%2Fa2qrgeL9O2g%3D%3D&nvMid=24991654958&catId=50000787",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 258020,
                  soldOutStatus: "InStock",
                },
                {
                  id: 460,
                  name: "변경중",
                  shopUrl:
                    "https://search.shopping.naver.com/gate.nhn?id=84017654070",
                  logoUrl: "https://www.naver.com/favicon.ico",
                  price: 169000,
                  soldOutStatus: "InStock",
                },
              ],
              childItems: [],
              id: 219,
              name: "Originals Desert Trek Beeswax",
              order: 6,
              itemImgUrl:
                "https://shopping-phinf.pstatic.net/main_3498828/34988283813.jpg",
              color: "Beeswax",
              size: "UK 7",
              brand: "클락스",
            },
            affiliationLink: null,
          },
        ],
      },
    ],
  },
];
function setVideoData() {}

function filteringTime(videoList) {
  let result = [];
  for (let i = 0; i < dummyVideoList.length; ++i) {
    for (let j = 0; j < dummyVideoList[i].timeShopItemLists.length; ++j) {
      for (
        let k = 0;
        k < dummyVideoList[i].timeShopItemLists[j].items.length;
        ++k
      ) {
        if (
          dummyVideoList[i].timeShopItemLists[j].items[k].item.id ===
          dummyData.id
        ) {
          result.push({
            index: result.length,
            channelName: dummyVideoList[i].creator,
            videoUrl: dummyVideoList[i].videoUrl,
            model: dummyVideoList[i].timeShopItemLists[j].model,
            time: dummyVideoList[i].timeShopItemLists[j].times.start,
          });
        }
      }
    }
  }
  console.log(result);
  return result;
}
function Item() {
  const [index, setIndex] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  videoData = filteringTime(dummyVideoList);
  return (
    <ItemPage>
      <ItemArea>
        <ItemImg src={dummyData.itemImgUrl}></ItemImg>
        <ItemInfoArea>
          <Brand>{dummyData.brand}</Brand>
          <Name>{dummyData.name}</Name>
          <Price>최저가 : {dummyData.shops[0].price}원</Price>
          <ShopInfoArea>
            <ShopList shops={dummyData.shops} id={dummyData.id}></ShopList>
          </ShopInfoArea>
        </ItemInfoArea>
      </ItemArea>
      <VideoArea>
        <EmbededVideo>
          <YoutubePlayer data={videoData[index]}></YoutubePlayer>
        </EmbededVideo>
        <ModelArea>
          <ModelList datas={videoData} setIndex={setIndex}></ModelList>
        </ModelArea>
      </VideoArea>
    </ItemPage>
  );
}


const ItemPage = styled.div`
  display: flex;
  height: 100%;
`;

const ItemArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
`;

const ItemImg = styled.img`
  width: 600px;
`;
const ItemInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 600px;
  justify-content: space-evenly;
`;

const ShopInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 360px;
`;
const Brand = styled.span`
  font-size: xx-large;
`;
const Name = styled.span`
  font-size: x-large;
`;
const Price = styled.span`
  font-size: xx-large;
`;

const VideoArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
`;

const EmbededVideo = styled.div``;

const ModelArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 200px;
`;

export default Item;