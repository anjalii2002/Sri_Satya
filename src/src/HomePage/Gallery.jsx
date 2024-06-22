import React from 'react'
import { Link } from "react-router-dom";
const Gallery = () => {
  return (

  <>
  <style>
    {
        `
        .menu,
.nav-icon span {
    transition: all .3s ease-in-out
}

.menu .nav-menu li a,
.nav-menu li a {
    line-height: 56px
}

*,
::after,
::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

.effectTab-header .caption,
.effectTab-header .title {
    font-weight: 700;
    padding-bottom: 20px;
    position: relative;
    display: inline-block;
    color: #555;
    margin: 0 0 20px;
    text-align: center;
    text-transform: uppercase
}

.effectTab-header .title {
    font-size: 36px;
    font-family: Oswald, sans-serif
}

.effectTab-header .caption {
    font-size: 30px;
    font-family: 'Open Sans', sans-serif
}

.column-1,
.column-10,
.column-11,
.column-12,
.column-2,
.column-3,
.column-4,
.column-5,
.column-7,
.column-8,
.column-9 {
    float: left;
    padding: 15px
}

.effectTab-header .title::after,
.effectTab-header .title::before {
    position: absolute;
    background: linear-gradient(to right, #ed6ea0 0, #ec8c69 100%);
    content: ""
}

.effectTab-header .title::before {
    left: 0;
    width: 156%;
    height: 3px;
    margin-left: -28%;
    bottom: -1.5px
}

.effectTab-header .title::after {
    left: 50%;
    width: 25px;
    height: 25px;
    bottom: -26px;
    margin: 0 0 0 -10px;
    -webkit-clip-path: polygon(75% 0, 75% 69%, 41% 93%, 0 68%, 0 0);
    clip-path: polygon(75% 0, 75% 69%, 41% 93%, 0 68%, 0 0)
}



.column-1 {
    width: 8.333333333333333%
}

.column-2 {
    width: 16.66666666666667%
}

.column-3 {
    width: 25%
}

.column-4 {
    width: 33.33333333333333%
}

.column-5 {
    width: 41.66666666666667%
}

.column-6 {
    width: 50%;
    float: left;
    padding: 15px
}

.column-7 {
    width: 58.33333333333333%
}

.column-8 {
    width: 66.66666666666667%
}

.column-9 {
    width: 75%
}

.column-10 {
    width: 83.33333333333333%
}

.column-11 {
    width: 91.66666666666667%
}

.column-12,
.wrapper-full {
    width: 100%
}



.custom-row::after {
    content: "";
    display: table;
    clear: both
}

.wrapper {
    max-width: 1140px;
    margin: 0 auto;
    position: relative
}

.header {
    background-color: #485666;
    padding: 8px 0;
    position: static;
    z-index: 2000
}

.header h1 {
    color: #fff;
    font-family: Poppins;
    font-weight: 400;
    font-size: 2.2rem;
    padding-left: 40px
}

.rotate {
    position: absolute;
    transform: rotate(-20deg);
    left: 0;
    font-size: 2.8rem;
    top: 5px
}

.ex_padd {
    padding-top: 170px!important
}


.nav-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around
}

.nav-menu li {
    list-style: none;
    position: relative
}

.nav-menu li a {
    color: #fff;
    text-decoration: none;
    display: inline-block;
    padding: 0 20px
}

.nav-menu li:after,
.nav-menu li:before {
    content: "";
    position: absolute;
    height: 3px;
    background-color: rgba(255, 255, 255, .2);
    bottom: 0;
    width: 0;
    transition: all .3s ease-in-out
}

.nav-menu li:before {
    left: 0
}

.nav-menu li:after {
    right: 0
}

.nav-menu li:hover:after,
.nav-menu li:hover:before {
    width: 50%
}

.nav-menu li.active:after,
.nav-menu li.active:before {
    background-color: rgba(0, 128, 128, 1)
}

.menu {
    width: 200px;
    background-color: #0B466C;
    text-align: center;
    padding: 40px;
    position: fixed;
    top: 96px;
    right: -200px;
    overflow: scroll;
    height: calc(100% - 96px);
    z-index: 1000
}

.menu.active {
    right: 0
}

.menu .nav-menu {
    flex-direction: column;
    width: 150px
}

.menu .nav-menu li {
    margin: 10px 0;
    width: 80%
}

.box-tab {
    margin: 10px 0
}

.effect {
    margin: auto;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, .07);
    background-color: #fff;
    border: 5px solid #f5f5f5
}

.tab-container {
    padding: 50px 0
}

.tab-head {
    text-align: center;
    padding-bottom: 10px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto
}

.tab .effect {
    position: relative;
    overflow: hidden;
    max-height: 240px;
    max-width: 350px;
    background: #3085a3;
    text-align: center;
    cursor: pointer
}

.grid-width3,
.grid-width6 {
    max-height: 270px!important;
    max-width: 530px!important
}

.grid-width8 {
    max-width: 700px!important
}

.tab .effect img {
    position: relative;
    display: block;
    min-height: 100%;
    opacity: .8
}

.tab .effect .tab-text {
    padding: 2em;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.25rem;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.tab-text h2 {
    color: #fff;
    margin: 0;
    font-size: 1.5rem
}

.tab-text p {
    color: #fff;
    margin: 0;
    font-size: 1rem
}

.hide {
    display: none
}

@media (max-width:575px) {
    .column-xs-1,
    .column-xs-10,
    .column-xs-11,
    .column-xs-12,
    .column-xs-2,
    .column-xs-3,
    .column-xs-4,
    .column-xs-5,
    .column-xs-7,
    .column-xs-8,
    .column-xs-9 {
        float: left;
        padding: 15px
    }
    .column-xs-1 {
        width: 8.333333333333333%
    }
    .column-xs-2 {
        width: 16.66666666666667%
    }
    .column-xs-3 {
        width: 25%
    }
    .column-xs-4 {
        width: 33.33333333333333%
    }
    .column-xs-5 {
        width: 41.66666666666667%
    }
    .column-xs-6 {
        width: 50%;
        float: left;
        padding: 15px
    }
    .column-xs-7 {
        width: 58.33333333333333%
    }
    .column-xs-8 {
        width: 66.66666666666667%
    }
    .column-xs-9 {
        width: 75%
    }
    .column-xs-10 {
        width: 83.33333333333333%
    }
    .column-xs-11 {
        width: 91.66666666666667%
    }
    .column-xs-12 {
        width: 100%
    }
    .hide-xs {
        display: none
    }
    .effectTab-header .title::before {
        width: 125%;
        left: 15%
    }
    .tab-container {
        padding-top: 25px;
        padding-bottom: 25px
    }
}

@media (min-width:576px) and (max-width:767px) {
    .column-sm-1,
    .column-sm-10,
    .column-sm-11,
    .column-sm-12,
    .column-sm-2,
    .column-sm-3,
    .column-sm-4,
    .column-sm-5,
    .column-sm-7,
    .column-sm-8,
    .column-sm-9 {
        float: left;
        padding: 15px
    }
    .column-sm-1 {
        width: 8.333333333333333%
    }
    .column-sm-2 {
        width: 16.66666666666667%
    }
    .column-sm-3 {
        width: 25%
    }
    .column-sm-4 {
        width: 33.33333333333333%
    }
    .column-sm-5 {
        width: 41.66666666666667%
    }
    .column-sm-6 {
        width: 50%;
        float: left;
        padding: 15px
    }
    .column-sm-7 {
        width: 58.33333333333333%
    }
    .column-sm-8 {
        width: 66.66666666666667%
    }
    .column-sm-9 {
        width: 75%
    }
    .column-sm-10 {
        width: 83.33333333333333%
    }
    .column-sm-11 {
        width: 91.66666666666667%
    }
    .column-sm-12 {
        width: 100%
    }
    .hide-sm {
        display: none
    }
    .visible-sm {
        display: block
    }
    .tab-container {
        padding-top: 25px;
        padding-bottom: 25px
    }
}

@media (max-width:1000px) {
    .header h1 {
        padding-left: 70px
    }
    .rotate {
        left: 30px
    }
    @media (min-width:768px) and (max-width:991px) {
        .column-md-1,
        .column-md-10,
        .column-md-11,
        .column-md-12,
        .column-md-2,
        .column-md-3,
        .column-md-4,
        .column-md-5,
        .column-md-7,
        .column-md-8,
        .column-md-9 {
            float: left;
            padding: 15px
        }
        .column-md-1 {
            width: 8.333333333333333%
        }
        .column-md-2 {
            width: 16.66666666666667%
        }
        .column-md-3 {
            width: 25%
        }
        .column-md-4 {
            width: 33.33333333333333%
        }
        .column-md-5 {
            width: 41.66666666666667%
        }
        .column-md-6 {
            width: 50%;
            float: left;
            padding: 15px
        }
        .column-md-7 {
            width: 58.33333333333333%
        }
        .column-md-8 {
            width: 66.66666666666667%
        }
        .column-md-9 {
            width: 75%
        }
        .column-md-10 {
            width: 83.33333333333333%
        }
        .column-md-11 {
            width: 91.66666666666667%
        }
        .column-md-12 {
            width: 100%
        }
        .hide-md {
            display: none
        }
        .visible-md {
            display: block
        }
    }
}

.effect.effect-one {
    background: #18a367;
    position: relative
}

.effect.effect-one .tab-text {
    padding: 1em
}

.effect.effect-one .tab-text::after,
.effect.effect-one .tab-text::before {
    position: absolute;
    content: '';
    opacity: 0
}

.effect.effect-one .tab-text::before {
    top: 50px;
    right: 30px;
    bottom: 50px;
    left: 30px;
    border-top: 2px solid rgba(255, 255, 255, .3);
    border-bottom: 2px solid rgba(255, 255, 255, .3);
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0
}

.effect.effect-one .tab-text::after {
    top: 30px;
    right: 50px;
    bottom: 30px;
    left: 50px;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    -webkit-transform: scale(1, 0);
    transform: scale(1, 0);
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0
}

.effect.effect-one .icons-block {
    z-index: 1000;
    position: absolute;
    bottom: 14px;
    width: 100%;
    left: 0;
    text-align: center
}



.effect.effect-one h2 {
    padding-top: 20%;
    -webkit-transition: -webkit-transform .35s;
    transition: transform .35s;
    font-weight: 600;
    font-size: 1.7rem;
    font-family: Oswald, sans-serif
}

.effect.effect-one p,
.effect.effect-two h2,
.effect.effect-two p.description {
    font-family: Poppins
}

.effect-one .pt-1 {
    padding-top: 10%!important
}

.effect-one .pt-2 {
    padding-top: 16%!important
}

.effect-one .pt-3 {
    padding-top: 28%!important
}

.effect.effect-one p {
    padding: .5em 2.7em;
    text-transform: none;
    opacity: 0;
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
    font-size: .92rem;
    line-height: 16px;
    color: rgba(255, 255, 255, .9)
}

.effect.effect-one h2,
.effect.effect-one img {
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0)
}

.effect.effect-one .tab-text::after,
.effect.effect-one .tab-text::before,
.effect.effect-one img,
.effect.effect-one p {
    -webkit-transition: opacity .35s, -webkit-transform .35s;
    transition: opacity .35s, transform .35s
}

.effect.effect-one:hover img {
    opacity: .7;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0) scale(1.1, 1.1)
}

.effect.effect-one:hover .tab-text::after,
.effect.effect-one:hover .tab-text::before {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1)
}

.effect.effect-one:hover h2,
.effect.effect-one:hover p {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

.effect.effect-one:hover .tab-text::after,
.effect.effect-one:hover h2,
.effect.effect-one:hover img,
.effect.effect-one:hover p {
    -webkit-transition-delay: .15s;
    transition-delay: .15s
}

.effect.effect-two .tab-text {
    top: auto;
    bottom: 0;
    padding: 1em;
    height: 3.75em;
    background: rgba(241, 169, 1, .95);
    color: #3c4a50;
    -webkit-transition: -webkit-transform .35s;
    transition: transform .35s;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0)
}

.effect.effect-two .col3 {
    height: 5.5rem!important
}

.effect.effect-two h2 {
    float: left;
    font-size: 1.1rem;
    font-weight: 600;
    word-break: break-all;
    width: 50%;
    text-align: left;
    display: inline-block
}

.effect-two .col3-head {
    width: 100%!important;
    padding-bottom: 10px
}



.effect.effect-two p.description {
    position: absolute;
    font-size: 1rem!important;
    bottom: 7em;
    color: #fff;
    text-transform: none;
    opacity: 0;
    -webkit-backface-visibility: hidden;
    -webkit-transition: opacity .35s;
    transition: opacity .35s;
    line-height: 18px;
    padding: 15px 50px;
    background-color: rgba(0, 0, 0, .5);
    right: 30px;
    left: 30px;
    -webkit-clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%);
    clip-path: polygon(7% 0, 100% 0, 93% 100%, 2% 100%)
}

.effect.effect-two p.col6 {
    left: 80px!important;
    right: 80px!important;
    bottom: 8rem
}


.effect.effect-two:hover p.description {
    opacity: 1
}


.effect.effect-two:hover h2 {
    -webkit-transition-delay: 50ms;
    transition-delay: 50ms
}


.effect.effect-three {
    background: linear-gradient(-45deg, #0C71E9 0, #034B96, 100%);
    text-align: left
}

.effect.effect-three h2 {
    transform: translate3d(25px, 0, 0);
    -webkit-transform: translate3d(25px, 0, 0);
    transition: all .35s;
    font-family: Oswald;
    font-size: 1.6rem
}

.effect.effect-three h2:before {
    content: "[ ";
    position: absolute;
    left: -15px;
    bottom: 3px;
    font-weight: 400
}

.effect.effect-three:hover h2 {
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    opacity: .5
}

.effect.effect-three .tab-text:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border: 140px solid red;
    border-radius: 50% 0 0 50%;
    opacity: 0;
    transform: translate3d(50%, 50%, 0) rotate3d(0, 0, 1, 135deg);
    transition: all .35s .15s;
    border-color: transparent transparent transparent #fff
}

.effect.effect-three:hover .tab-text:before {
    transform: translate3d(50%, 50%, 0) rotate3d(0, 0, 1, 45deg);
    opacity: .8;
    transition-delay: 0s
}

.effect.effect-three p {
    position: absolute;
    width: 31px;
    height: 36px;
    bottom: 70px;
    right: -31px;
    font-size: 120%
}

.effect.effect-three p a {
    width: 31px;
    height: 36px;
    position: absolute;
    opacity: 0;
    transition: all .35s cubic-bezier(.25, .4, .2, .5) 0s
}

.effect.effect-three p a i {
    color: #5d504f;
    transition: transform .35s cubic-bezier(.5, .2, .4, .25) 0s
}

.effect.effect-three p a i:hover {
    color: #cc6055
}

.effect.effect-three:hover p a {
    opacity: 1
}

.effect.effect-three:hover p a:nth-child(1) {
    transform: translate3d(0, 60px, 0);
    -webkit-transform: translate3d(0, 60px, 0);
    transition: all .35s cubic-bezier(.5, .2, .4, .25) .15s;
    -webkit-transition: all .35s cubic-bezier(.5, .2, .4, .25) .15s
}

.effect.effect-three:hover p a:nth-child(1) i {
    transform: translate3d(-100px, 0, 0);
    transition: transform .35s cubic-bezier(.25, .4, .2, .5) .15s;
    -webkit-transform: translate3d(-100px, 0, 0);
    -webkit-transition: transform .35s cubic-bezier(.25, .4, .2, .5) .15s
}

.effect.effect-three:hover p a:nth-child(2) {
    transform: translate3d(0, 30px, 0);
    transition: all .35s cubic-bezier(.5, .2, .4, .25) .25s;
    -webkit-transform: translate3d(0, 30px, 0);
    -webkit-transition: all .35s cubic-bezier(.5, .2, .4, .25) .25s
}

.effect.effect-three:hover p a:nth-child(2) i {
    transform: translate3d(-80px, 0, 0);
    transition: transform .35s cubic-bezier(.25, .4, .2, .5) .25s;
    -webkit-transform: translate3d(-80px, 0, 0);
    -webkit-transition: transform .35s cubic-bezier(.25, .4, .2, .5) .25s
}

.effect.effect-three:hover p a:nth-child(3) {
    transform: translate3d(0, 0, 0);
    transition: all .35s cubic-bezier(.5, .2, .4, .25) .35s;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-transition: all .35s cubic-bezier(.5, .2, .4, .25) .35s
}

.effect.effect-three:hover p a:nth-child(3) i {
    transform: translate3d(-45px, 0, 0);
    transition: transform .35s cubic-bezier(.25, .4, .2, .5) .35s;
    -webkit-transform: translate3d(-45px, 0, 0);
    -webkit-transition: transform .35s cubic-bezier(.25, .4, .2, .5) .35s
}

.effect.effect-three img {
    transform: scale3d(1.1, 1.1, 1) translate3d(15px, 0, 0);
    transition: all .35s;
    transform-origin: 85% 100%;
    -webkit-transform: scale3d(1.1, 1.1, 1) translate3d(15px, 0, 0);
    -webkit-transition: all .35s;
    -webkit-transform-origin: 85% 100%
}

.effect.effect-three:hover img {
    transform: scale3d(1.1, 1.1, 1) translate3d(0, 0, 0);
    -webkit-transform: scale3d(1.1, 1.1, 1) translate3d(0, 0, 0);
    opacity: .6
}

.effect.effect-four {
    background: #2e5d5a
}

.effect-four .tab-text h2 {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 1em 1.2em;
    font-family: Oswald
}

.effect-four .tab-text p {
    width: 65%;
    font-size: 68%;
    line-height: 1;
    letter-spacing: 1px;
    text-align: left;
    float: right;
    padding-left: 15px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: translate3d(40px, 0, 0);
    -webkit-transform: translate3d(40px, 0, 0);
    opacity: 0;
    transition: all .35s;
    font-family: "Open sans";
    padding-bottom: 5px
}

.effect-four .tab-text p:after,
.effect-four .tab-text p:before {
    width: 10px;
    height: 10px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 50px;
    content: "";
    position: absolute
}

.effect.effect-five h2,
.effect.effect-six h2 {
    font-family: Oswald
}

.effect-four .tab-text p:after {
    top: -5px;
    left: -5px;
    -webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%)
}

.effect-four .tab-text p:before {
    right: 0;
    bottom: -6px;
    -webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%)
}



.effect-four:hover p {
    transform: translate3d(0, 0, 0);
    opacity: 1
}

.effect.effect-four img {
    max-width: none;
    width: calc(100% + 60px);
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1.12);
    transition: all .35s;
    -webkit-transform: translate3d(0, 0, 0) scale(1.12);
    -webkit-transition: all .35s
}

.effect.effect-four:hover img {
    transform: translate3d(-20px, 0, 0) scale(1);
    -webkit-transform: translate3d(-20px, 0, 0) scale(1);
    opacity: .5
}

.effect.effect-five {
    background: #162633;
    text-align: left
}

.col3-block-height {
    min-height: 480px!important
}

.effect.effect-five h2 {
    transform: translate3d(0, 20px, 0);
    transition: all .35s;
    -webkit-transform: translate3d(0, 20px, 0);
    -webkit-transition: all .35s
}

.effect.effect-five:hover h2 {
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    opacity: .6
}

.effect.effect-five img {
    transition: all .35s
}

.effect.effect-five:hover img {
    opacity: .6;
    transform: translate3d(0, 0, 0) scale(1.16);
    -webkit-transform: translate3d(0, 0, 0) scale(1.16)
}

.effect.effect-five .tab-text:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 180%;
    background-color: #FFF;
    opacity: .8;
    transform-origin: 0 100%;
    transform: rotate(90deg);
    transition: all .35s;
    -webkit-transform-origin: 0 100%;
    -webkit-transform: rotate(90deg);
    -webkit-transition: all .35s
}

.effect.effect-seven .tab-text:after,
.effect.effect-six .tab-text:before {
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    content: ""
}

.effect.effect-five:hover .tab-text:before {
    transform: rotate(67deg);
    -webkit-transform: rotate(67deg)
}

.effect.effect-five p {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 15px 25px 0
}

.effect.effect-five p a {
    color: #5d504f;
    margin: 0 5px
}

.effect.effect-five p a:hover {
    color: #cc6055
}

.effect.effect-five p a i {
    opacity: 0;
    font-size: 120%;
    transform: translate3d(0, 50px, 0);
    transition: all .35s;
    -webkit-transform: translate3d(0, 50px, 0);
    -webkit-transition: all .35s
}

.effect.effect-five:hover p a i {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0)
}

.effect.effect-five:hover p a:nth-child(1) i {
    transition-delay: .15s;
    -webkit-transition-delay: .15s
}

.effect.effect-five:hover p a:nth-child(2) i {
    transition-delay: .1s;
    -webkit-transition-delay: .1s
}

.effect.effect-five:hover p a:nth-child(3) i {
    transition-delay: .05s;
    -webkit-transition-delay: .05s
}

.effect.effect-six {
    background-color: #3498db
}

.effect.effect-six h2 {
    text-align: left
}

.effect.effect-six img {
    transition: all .35s;
    transform: translate3d(0, 0, 0) scale(1.05);
    -webkit-transition: all .35s;
    -webkit-transform: translate3d(0, 0, 0) scale(1.05)
}

.effect.effect-six:hover img {
    opacity: .4;
    transform: translate3d(-50px, 0, 0) scale(1);
    -webkit-transform: translate3d(-50px, 0, 0) scale(1)
}


.effect.effect-six p {
    max-width: 130px;
    padding: 0 10px;
    margin: 30px;
    text-align: right;
    font-size: .9rem;
    line-height: 1.1;
    position: absolute;
    bottom: 0;
    right: 0;
    border-right: 3px solid #fff;
    opacity: 0;
    transition: all .35s;
    font-family: Poppins
}

.effect.effect-six:hover p {
    opacity: 1
}

.effect.effect-six .tab-text:before {
    background-color: rgba(255, 255, 255, .4);
    transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, -101%, 0);
    transition: all .6s;
    -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, -101%, 0);
    -webkit-transition: all .6s
}

.effect.effect-six:hover .tab-text:before {
    transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, 101%, 0);
    -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, 101%, 0)
}

.effect.effect-seven {
    background: linear-gradient(-45deg, #f3cf3f 0, #f33f58 100%)
}

.effect.effect-eight,
.effect.effect-nine {
    background: linear-gradient(-180deg, #fff 10%, #000 100%)
}

.effect.effect-seven img {
    transition: all .35s;
    transform: translate3d(0, 0, 0) scale(1);
    -webkit-transition: all .35s;
    -webkit-transform: translate3d(0, 0, 0) scale(1)
}

.effect.effect-seven:hover img {
    opacity: .6;
    transform: translate3d(-50px, 0, 0) scale(1.1) rotate(3deg);
    -webkit-transform: translate3d(-50px, 0, 0) scale(1.1) rotate(3deg)
}

.effect.effect-seven h2 {
    padding-top: 20%;
    transform: scale3d(.8, .8, 1);
    transition: all .35s;
    -webkit-transform: scale3d(.8, .8, 1);
    -webkit-transition: all .35s;
    font-family: Oswald
}

.effect.effect-seven .col8-head {
    padding-top: 9%
}

.effect.effect-seven:hover h2 {
    transform: scale3d(1, 1, 1);
    -webkit-transform: scale3d(1, 1, 1)
}

.effect.effect-seven p {
    font-size: .9rem;
    padding: 10px 5px;
    transform: scale3d(.8, .8, 1);
    -webkit-transform: scale3d(.8, .8, 1);
    opacity: 0;
    transition: all .35s;
    -webkit-transition: all .35s;
    font-family: Poppins
}

.effect.effect-seven:hover p {
    transform: scale3d(1, 1, 1);
    -webkit-transform: scale3d(1, 1, 1);
    opacity: 1
}

.effect.effect-seven .tab-text:after {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 0, 1);
    -webkit-transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 0, 1);
    opacity: 0;
    transition: all .35s;
    -webkit-transition: all .35s
}

.effect.effect-seven:hover .tab-text:after {
    transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 1, 1);
    -webkit-transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 1, 1);
    opacity: 1
}



.effect.effect-seven .c4 {
    right: 0;
    text-align: right;
    padding-right: 15px
}

.effect.effect-seven .c3 {
    bottom: 50%;
    margin-bottom: -40px;
    left: 23%
}


.effect.effect-eight img {
    transition: all .3s ease-in-out;
    transform: translate3d(0, 0, 0) scale(1, 1);
    -webkit-transition: all .3s ease-in-out;
    -webkit-transform: translate3d(0, 0, 0) scale(1, 1)
}

.effect.effect-eight:hover img {
    opacity: .6;
    transform: translate3d(-20px, 0, 0) scale(1.1, 1.1);
    -webkit-transform: translate3d(-20px, 0, 0) scale(1.1, 1.1)
}

.effect.effect-eight .tab-text h2 {
    font-family: Oswald;
    transform: scale3d(.9, .9, 1);
    transition: all .5s ease-in-out;
    -webkit-transform: scale3d(.9, .9, 1);
    -webkit-transition: all .5s ease-in-out
}

.effect.effect-eight .col8-head {
    padding-top: 9%
}

.effect.effect-eight:hover h2 {
    transform: scale3d(1.1, 1.1, 1);
    transition: all .5s ease-in-out;
    -webkit-transform: scale3d(1.1, 1.1, 1);
    -webkit-transition: all .5s ease-in-out
}

.effect.effect-eight p {
    font-size: .9rem;
    padding: 10px 5px;
    transform: scale3d(.8, .8, 1);
    -webkit-transform: scale3d(.8, .8, 1);
    opacity: 0;
    transition: all .35s;
    -transition: all .35s;
    font-family: Poppins
}

.effect.effect-eight:hover p {
    transform: scale3d(1, 1, 1);
    -webkit-transform: scale3d(1, 1, 1);
    opacity: 1
}

.effect.effect-eight .tab-text:after {
    content: "";
    position: absolute;
    left: -230px;
    top: 0;
    border-top: 208px solid rgba(7, 0, 2, .3);
    border-left: 140px solid rgba(240, 74, 126, .6);
    border-bottom: 188px solid transparent;
    border-right: 160px solid transparent;
    transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out
}

.effect.effect-eight:hover .tab-text:after {
    transform: rotate3d(0, 0, 1, 52deg) scale3d(1, 1, 1);
    -webkit-transform: rotate3d(0, 0, 1, 52deg) scale3d(1, 1, 1);
    opacity: 1;
    top: 103px;
    left: -378px;
    border-top: 325px solid rgba(240, 74, 126, .8);
    border-left: 422px solid rgba(240, 74, 126, .8);
    border-bottom: 218px solid transparent;
    border-right: 160px solid transparent
}






.effect.effect-nine img {
    transition: all .3s ease-in-out;
    transform: translate3d(0, 0, 0) scale(1, 1);
    -webkit-transition: all .3s ease-in-out;
    -webkit-transform: translate3d(0, 0, 0) scale(1, 1)
}

.effect.effect-nine:hover img {
    opacity: .6;
    transform: translate3d(-20px, 0, 0) scale(1.1, 1.1);
    -webkit-transform: translate3d(-20px, 0, 0) scale(1.1, 1.1)
}

.effect.effect-nine .tab-text h2 {
    font-family: Oswald;
    transform: scale3d(.9, .9, 1);
    transition: all .5s ease-in-out;
    -webkit-transform: scale3d(.9, .9, 1);
    -webkit-transition: all .5s ease-in-out;
    z-index: 2;
    position: relative;
    padding-top: 18%
}

.effect.effect-nine:hover h2 {
    transform: scale3d(1, 1, 1);
    transition: all .5s ease-in-out;
    -webkit-transform: scale3d(1, 1, 1);
    -webkit-transition: all .5s ease-in-out
}

.effect.effect-nine p {
    font-size: .8rem;
    padding: 10px 5px;
    transform: scale3d(.8, .8, 1);
    -webkit-transform: scale3d(.8, .8, 1);
    opacity: 0;
    -webkit-transition: all .35s;
    transition: all .35s;
    font-family: Poppins;
    z-index: 2;
    position: relative
}

.effect.effect-nine:hover p {
    transform: scale3d(1, 1, 1);
    -webkit-transform: scale3d(1, 1, 1);
    opacity: 1
}

.effect.effect-nine .tab-text:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100% - 0px);
    height: inherit;
    border-top: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid transparent;
    transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out
}

.effect.effect-nine:hover .tab-text:after {
    opacity: 1;
    top: 0;
    left: 0;
    border-top: 135px solid rgba(0, 0, 0, .5);
    border-left: 135px solid rgba(0, 0, 0, .5);
    border-bottom: 135px solid rgba(0, 0, 0, .5);
    border-right: 135px solid rgba(0, 0, 0, .5)
}



.effect.effect-ten {
    background-color: #162633
}

.effect.effect-ten img {
    transition: all .35s;
    transform: translate3d(-20px, 0, 0) scale(1.1, 1.1);
    -webkit-transition: all .35s;
    -webkit-transform: translate3d(-20px, 0, 0) scale(1.1, 1.1)
}

.effect.effect-ten:hover img {
    opacity: .85;
    transform: translate3d(0, 0, 0) scale(1, 1);
    -webkit-transform: translate3d(0, 0, 0) scale(1, 1)
}

.effect.effect-ten h2 {
    transform: translate3d(0, 5px, 0);
    -webkit-transform: translate3d(0, 5px, 0);
    transition: all .35s;
    -webkit-transition: all .35s;
    font-family: Oswald;
    z-index: 2;
    position: relative;
    padding-top: 10%
}

.effect.effect-ten:hover h2 {
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0)
}

.effect.effect-ten p {
    font-size: .8rem;
    line-height: 1.1;
    padding-top: 5px;
    transform: translate3d(0, 10px, 0);
    transition: all .35s;
    -webkit-transform: translate3d(0, 10px, 0);
    -webkit-transition: all .35s;
    font-family: Poppins
}

.effect.effect-ten:hover p {
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0)
}

.effect.effect-ten .tab-text {
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    perspective: 300px
}

.effect.effect-ten .tab-text:after {
    content: "";
    width: 180%;
    height: 180%;
    background: linear-gradient(-45deg, rgba(0, 0, 0, 0) 49%, rgba(0, 0, 0, .45) 50%);
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transition: all .4s linear;
    transition: all .4s linear
}

.effect.effect-ten .tab-text:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background: linear-gradient(-45deg, rgba(0, 0, 0, 0) 49%, rgba(132, 132, 132, .45) 50%, rgba(255, 255, 255, .65) 65%);
    transform: rotate3d(-1, 1, 0, 20deg);
    transform-origin: 50% 50%;
    transition: width .2s linear .2s, height .2s linear .2s, bottom .2s linear 0s, right .2s linear 0s;
    -webkit-transform: rotate3d(-1, 1, 0, 20deg);
    -webkit-transform-origin: 50% 50%;
    -webkit-transition: width .2s linear .2s, height .2s linear .2s, bottom .2s linear 0s, right .2s linear 0s
}

.effect.effect-ten:hover .tab-text:after {
    top: -80%;
    left: -80%;
    background: linear-gradient(-45deg, rgba(0, 0, 0, 0) 49%, rgba(0, 0, 0, .45) 60%)
}

.effect.effect-ten:hover .tab-text:before {
    width: 100%;
    height: 100%;
    bottom: 50%;
    right: 50%;
    -webkit-transition: width .2s linear 0s, height .2s linear 0s, bottom .2s linear .2s, right .2s linear .2s;
    transition: width .2s linear 0s, height .2s linear 0s, bottom .2s linear .2s, right .2s linear .2s
}


.effect.effect-eleven {
    background-color: #3498db
}

.effect.effect-eleven img {
    transform: translate3d(-10px, 0, 0);
    transition: all .35s;
    -webkit-transform: translate3d(-10px, 0, 0);
    -webkit-transition: all .35s
}

.effect.effect-eleven:hover img {
    opacity: .6;
    transform: translate3d(-30px, 0, 0) scale(1.1, 1.1);
    -webkit-transform: translate3d(-30px, 0, 0) scale(1.1, 1.1)
}

.effect.effect-eleven h2 {
    text-align: left;
    transform: translate3d(-10px, 0, 0);
    transition: all .55s 0s;
    -webkit-transform: translate3d(-10px, 0, 0);
    -webkit-transition: all .55s 0s;
    font-family: Oswald;
    z-index: 2;
    position: relative;
    padding-top: 10%
}

.effect.effect-eleven:hover h2 {
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0)
}

.effect.effect-eleven p {
    text-align: left;
    line-height: 1.2;
    padding-top: 34px;
    padding-left: 1px;
    font-size: .9rem;
    transform: translate3d(15px, 0, 0);
    -webkit-transform: translate3d(15px, 0, 0);
    opacity: 0;
    transition: all .35s 0s;
    z-index: 5;
    position: absolute;
    word-spacing: 3px;
    top: 65px;
    width: calc(100% - 4em);
    font-family: Poppins
}

.effect.effect-eleven:hover p {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
    -webkit-transition-delay: .2s;
    transition-delay: .2s
}

.effect.effect-eleven .tab-text:before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    border-top: 125px solid rgba(255, 255, 255, .3);
    border-right: 350px solid transparent;
    border-bottom: 125px solid rgba(255, 255, 255, .3);
    transform: translate3d(-100%, 0, 0);
    transition: all .35s;
    -webkit-transform: translate3d(-100%, 0, 0);
    -webkit-transition: all .35s
}

.effect.effect-eleven .tab-text:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    border-top: 125px solid transparent;
    border-right: 350px solid rgba(255, 255, 255, .3);
    border-bottom: 125px solid transparent;
    transform: translate3d(100%, 0, 0);
    transition: all .35s;
    -webkit-transform: translate3d(100%, 0, 0);
    -webkit-transition: all .35s
}

.effect.effect-eleven:hover .tab-text:after,
.effect.effect-eleven:hover .tab-text:before {
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0)
}



.effect.effect-twelve {
    background: #42b078
}

.effect-twelve .tab-text h2 {
    position: relative;
    padding: .5em 0;
    text-align: left;
    overflow: hidden;
    font-family: Oswald
}

.effect.effect-twelve h2:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #fff;
    transform: translate3d(-100%, 0, 0);
    transition: all .35s;
    -webkit-transform: translate3d(-100%, 0, 0);
    -webkit-transition: all .35s
}

.effect.effect-twelve:hover h2:after {
    transform: translate3d(0, 0, 0)
}

.effect-twelve .tab-text p {
    padding: .7em 0;
    font-size: .8rem;
    text-align: left;
    line-height: 1.1;
    transform: translate3d(100%, 0, 0);
    -webkit-transform: translate3d(100%, 0, 0);
    opacity: 0;
    transition: all .35s;
    -webkit-transition: all .35s;
    font-family: Poppins
}

.effect-twelve:hover p {
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    opacity: 1
}

.effect.effect-twelve img {
    max-width: none;
    opacity: 1;
    transform: translate3d(-10px, 0, 0);
    transition: all .35s;
    -webkit-transform: translate3d(-10px, 0, 0);
    -webkit-transition: all .35s
}

.effect.effect-twelve:hover img {
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    opacity: .4
}


@media (max-width:575px) {
    .effect.effect-two p.description {
        bottom: 5.8em
    }
}

@media (min-width:576px) and (max-width:767px) {
    .tab .effect .tab-text h2 {
        font-size: 1.3rem!important;
        font-family: Oswald
    }
    .effect.effect-two p.description {
        bottom: 5.8em
    }
}

@media (min-width:768px) and (max-width:991px) {
    .effect h2 {
        font-size: 1.3rem!important
    }
}`
    }
  </style>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <section
    className="wrapper-full tab-container effectTab-header"
    id="style_1"
    style={{ paddingTop: 170 }}
  >
    <div className="wrapper tab-item">
      <div className="custom-row">
        <div className="wrapper " align="center">
       
            <h1 className="ti title">Thrilling Events</h1>
      
        </div>
        <div className="column-12 column-xs-12 column-sm-12 tab">
          <div className="custom-row">
            <Link to="/women">
            <div className="column-4 column-md-6 column-xs-12 hide-sm hide-md box-tab">
              <div className="effect effect-one">
                <img
                  src="https://www.hindustantimes.com/ht-img/img/2024/03/07/1600x900/alakla_1709820002051_1709820006677.jpg"
                  className="img-fluid"
                />
                <div className="tab-text">
                  {/* <h2>Three column 4</h2> */}
                  <p>Womens Day Event</p>
             
                </div>
              </div>
            </div></Link>
           <Link to="/national">           
            <div className="column-8 column-md-6 hide-xs hide-sm hide-md box-tab">
              <div className="effect grid-width8 effect-one">
                <img
                  src="https://static.tnnbt.in/thumb/msid-108060044,thumbsize-68880,width-1280,height-720,resizemode-75/108060044.jpg"
                  className="img-fluid"
                />
                <div className="tab-text">
                  {/* <h2 className="pt-1">grid column 8</h2> */}
                  <p>
             National Science Day
                  </p>
                 
                </div>
              </div>
            </div></Link>
            <Link to="/lok">
            <div className="column-6 column-md-6 hide-xs hide-sm box-tab">
              <div className="effect grid-width6 effect-one">
                <img
                  src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/ezgif-6-71afb7c9d526_1200x768.jpeg?size=690:388"
                  className="img-fluid"
                />
                <div className="tab-text">
                  {/* <h2 className="pt-2">column 6 grid</h2> */}
                  <p>
                  National Lok Adalat day
                  </p>
                 
                </div>
              </div>
            </div></Link>
            <Link to="/uni">
            <div className="column-3 column-md-6 column-sm-6 hide-xs box-tab">
              <div className="effect grid-width3 effect-one">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8AsK55ofAUOYosPHb53zyS-ux9PswF1_JLHR0hMxVQ&s"
                  className="img-fluid"
                />
                <div className="tab-text">
                  {/* <h2 className="pt-3">column 3</h2> */}
                  <p>University Events </p>
                 
                </div>
              </div>
            </div></Link>
            <Link to="/r&d">
            <div className="column-3 column-sm-6 hide-xs hide-md box-tab">
              <div className="effect grid-width3 effect-one">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhv141457CgoRWtFlqQVn5dl68uBhDHpXJO85x7iP25w&s"
                  className="img-fluid"
                />
                <div className="tab-text">
                  {/* <h2 className="pt-3">column 3</h2> */}
                  <p>R & D Departments</p>
                 
                </div>
              </div>
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
 

</>
  )
}

export default Gallery