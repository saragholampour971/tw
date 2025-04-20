import React from "react";

const EpisodesList = React.lazy(
  () => import("src/components/series-detail/components/EpisodesList"));


export const descriptionInfo = [
  {label: '78%'},
  {label: 'imdb'},
  {label: '43 دقیقه'},
  {label: '۲۰۱۳ - ۲۰۱5 (پایان انتشار)'},
  {label: 'آمریکا'},
  {label: '۳ فصل(۳۹ قسمت)'},
  {label: 'دوبله فارسی'},
  {label: 'مناسب برای بالای ۱۸ سال'},
]
export const genresList = ["روانشناسی", 'وحشت', 'عملی تخیلی', 'دلهره‌آور']
export const description = "  ویل گراهام ، یک متخصص جنایی FBI ، توانایی غیرقابل انکار و همدردی با دکتر هانیبال لکر ، روانپزشک پزشکی قانونی\n" +
  "        را دارد. با این حال ، او از این که آدمخوار است آگاهی ندارد و ویل گراهام"


export const tabsInfo = [
  {
    label: 'فصل 1', content:
      <EpisodesList data={[
        {
          title: 'مرد آهنی: انتقام برای آزادی',
          duration: '34:33',
          to: "/",
          subtitle: 'فصل ۳ قسمت ۸',
          image: "images/episode.png"
        }, {
          title: 'مرد آهنی: انتقام برای آزادی',
          duration: '34:33',
          to: "/",
          subtitle: 'فصل ۳ قسمت ۸',
          image: "images/episode.png"
        }, {
          title: 'مرد آهنی: انتقام برای آزادی',
          duration: '34:33',
          to: "/",
          subtitle: 'فصل ۳ قسمت ۸',
          image: "images/episode.png"
        }, {
          title: 'مرد آهنی: انتقام برای آزادی',
          duration: '34:33',
          to: "/",
          subtitle: 'فصل ۳ قسمت ۸',
          image: "images/episode.png"
        }, {
          title: 'مرد آهنی: انتقام برای آزادی',
          duration: '34:33',
          to: "/",
          subtitle: 'فصل ۳ قسمت ۸',
          image: "images/episode.png"
        }, {
          title: 'مرد آهنی: انتقام برای آزادی',
          duration: '34:33',
          to: "/",
          subtitle: 'فصل ۳ قسمت ۸',
          image: "images/episode.png"
        }, {
          title: 'مرد آهنی: انتقام برای آزادی',
          duration: '34:33',
          to: "/",
          subtitle: 'فصل ۳ قسمت ۸',
          image: "images/episode.png"
        }, {
          title: 'مرد آهنی: انتقام برای آزادی',
          duration: '34:33',
          to: "/",
          subtitle: 'فصل ۳ قسمت ۸',
          image: "images/episode.png"
        }, {
          title: 'مرد آهنی: انتقام برای آزادی',
          duration: '34:33',
          to: "/",
          subtitle: 'فصل ۳ قسمت ۸',
          image: "images/episode.png"
        }, {
          title: 'مرد آهنی: انتقام برای آزادی',
          duration: '34:33',
          to: "/",
          subtitle: 'فصل ۳ قسمت ۸',
          image: "images/episode.png"
        },

      ]}/>
  },
  {label: 'فصل 2', content: ''},
  {label: 'فصل 3', content: ''},
  {label: 'فصل 4', content: ''},
]


export const links = [
  {label: 'پخش زنده', to: '/'},
  {label: 'فیلم و سریال', to: '/'},
  {label: 'کودک', to: '/'},
  {label: 'ورزش', to: '/'},
  {label: 'آرشیو محتوایی', to: '/'},
]
