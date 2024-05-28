import { facebook, instagram, twitter } from "../assets/icons";
import { afterhours, bbtm, dawnfm, echoes, hob, kissland, melancholy, starboy, thursday } from "../assets/images";


export const socialMedia = [
    { href: "https://www.facebook.com/theweeknd/", src: facebook, alt: "facebook logo" },
    { href: "https://twitter.com/theweeknd/", src: twitter, alt: "twitter logo" },
    { href: "https://www.instagram.com/theweeknd/", src: instagram, alt: "instagram logo" },
];

export const navigation = [
    { name: 'Home', to: '#', current: true },
    { name: 'Marketplace', to: '#', current: false },
  ]


export const albums = [
    {
        imgURL: hob,
        name: "House of Balloons",
        date: "2011",
        spotify: "https://open.spotify.com/embed/album/7zCODUHkfuRxsUjtuzNqbd?utm_source=generator",
    },
    {
        imgURL: thursday,
        name: "Thursday",
        date: "2011",
        spotify: "https://open.spotify.com/embed/album/6F87lH0I09qlrzvCCKc7lz?utm_source=generator",
    },
    {
        imgURL: echoes,
        name: "Echoes of Silence",
        date: "2011",
        spotify: "https://open.spotify.com/embed/album/04hy4jb1GDD00otiwzsFUB?utm_source=generator",
    },
    {
        imgURL: kissland,
        name: "Kissland",
        date: "2013",
        spotify: "https://open.spotify.com/embed/album/3hhDpPtCFuQbppwYgsVhMO?utm_source=generator",
    },
    {
        imgURL: bbtm,
        name: "Beauty Behind the Madness",
        date: "2015",
        spotify: "https://open.spotify.com/embed/album/0P3oVJBFOv3TDXlYRhGL7s?utm_source=generator",
    },
    {
        imgURL: starboy,
        name: "Starboy",
        date: "2016",
        spotify: "https://open.spotify.com/embed/album/2ODvWsOgouMbaA5xf0RkJe?utm_source=generator",
    },
    {
        imgURL: melancholy,
        name: "My Dear Melancholy,",
        date: "2018",
        spotify: "https://open.spotify.com/embed/album/4qZBW3f2Q8y0k1A84d4iAO?utm_source=generator",
    },
    {
        imgURL: afterhours,
        name: "After Hours",
        date: "2020",
        spotify: "https://open.spotify.com/embed/album/742eAldb4AJKLoPgJhGRE7?utm_source=generator",
    },
    {
        imgURL: dawnfm,
        name: "Dawn FM",
        date: "2022",
        spotify: "https://open.spotify.com/embed/album/2nLOHgzXzwFEpl62zAgCEC?utm_source=generator",
    },
];