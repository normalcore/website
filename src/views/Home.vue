<template>
    <div id="app" class="container">
     <div class="title" style="grid-area: 1/1/4/5">Kenesh Isakov</div>
     <div class="description" style="grid-area: 2/1/4/5">
     JavaScript BackEnd Web Developer<br>
     • +6 months real work experience<br>
     • projects of any difficulty<br>
     • responsible and hard-working<br>
     • my github page: <a href="https://github.com/normalcore" target="blank">normalcore</a>
     
     </div>
     <div style="grid-area: 2/8/3/9">
        <div class="cloud"></div>
        <div class="cloud cloud1"></div>
        <div class="cloud cloud2"></div>
        <div class="cloud cloud3"></div>
     </div>
     
     <button @mouseenter="enter('block1')" @click="$router.push('/workexperience')" @mouseleave="leave('block1')" @mousedown="click('block1')" @mouseup="unclick('block1')" class="block block1 piece" style="grid-area: 9/1/5/3"><span>Work Experience</span></button>
     <button @mouseenter="enter('block1')" @click="$router.push('/workexperience')" @mouseleave="leave('block1')" @mousedown="click('block1')" @mouseup="unclick('block1')" class="block block1" style="grid-area: 9/2/8/4"></button>
     <button @mouseenter="enter('block2')" @mouseleave="leave('block2')" @mousedown="click('block2')" @mouseup="unclick('block2')" class="block block2 piece" style="grid-area: 9/4/7/6"></button>
     <button @mouseenter="enter('block2')" @mouseleave="leave('block2')" @mousedown="click('block2')" @mouseup="unclick('block2')" class="block block2 piece" style="grid-area: 7/3/7/6"></button>
     
     <button @mouseenter="enter('block3')" @click="$router.push('/techstacks')" @mouseleave="leave('block3')" @mousedown="click('block3')" @mouseup="unclick('block3')" class="block block3 piece" style="grid-area: 6/5/3/6"></button>
     <button @mouseenter="enter('block3')" @click="$router.push('/techstacks')" @mouseleave="leave('block3')" @mousedown="click('block3')" @mouseup="unclick('block3')" class="block block3 piece" style="grid-area: 7/3/4/6">Tech Stacks</button>
     
     <button @mouseenter="enter('block4')" @click="$router.push('/contact')" @mouseleave="leave('block4')" @mousedown="click('block4')" @mouseup="unclick('block4')" class="block block4 piece" style="grid-area: 9/6/8/9"></button>
     <button @mouseenter="enter('block4')" @click="$router.push('/contact')" @mouseleave="leave('block4')" @mousedown="click('block4')" @mouseup="unclick('block4')" class="block block4 piece" style="grid-area: 9/6/6/8">Contact</button>
     
     <button @mouseenter="enter('block5')" @click="$router.push('/myprojects')" @mouseleave="leave('block5')" @mousedown="click('block5')" @mouseup="unclick('block5')" class="block block5 piece" style="grid-area: 8/8/4/10"></button>
     <button @mouseenter="enter('block5')" @click="$router.push('/myprojects')" @mouseleave="leave('block5')" @mousedown="click('block5')" @mouseup="unclick('block5')" class="block block5 piece" style="grid-area: 6/7/4/10">My Projects</button>
     
     <button @mouseenter="enter('block6')" @mouseleave="leave('block6')" @mousedown="click('block6')" @mouseup="unclick('block6')" class="block block6 piece" style="grid-area: 9/10/5/11"></button>
     <button @mouseenter="enter('block6')" @mouseleave="leave('block6')" @mousedown="click('block6')" @mouseup="unclick('block6')" class="block block6 piece" style="grid-area: 9/9/8/11"></button>
   </div>
 </template>
 
<script>
import axios from 'axios';
axios.get("http://api.weatherapi.com/v1/current.json", {
    params: {
      key: "81a8eab529c344cbb50125546241508",
      q: "Bishkek"
    }
})
    .then(function (response){
        let clouds = response.data.current.cloud
        let animDur = 2 - response.data.current.wind_mph / 50

        console.log(response.data.current.is_day, animDur, response.data.current.wind_mph)
        var cloud = document.getElementsByClassName("cloud");
            for(let i = 0; i < cloud.length; i++) {
                if (clouds > 100) {
                    cloud[i].style.backgroundColor = 'rgb(36 31 49)';
                }

                else if (clouds > 80) {
                    cloud[i].style.backgroundColor = 'rgb(119 118 123)';
                }

                else if (clouds > 60) {
                    cloud[i].style.backgroundColor = 'rgb(154 153 150)';
                }

                else if (clouds > 40) {
                    cloud[i].style.backgroundColor = 'rgb(192 191 188)';
                }

                else {
                    cloud[i].style.backgroundColor = 'white';
                }

                cloud[i].style.animationDuration = animDur + 's'
            }

        var dayOrNight = document.getElementsByClassName("container");
            for(let i = 0; i < dayOrNight.length; i++) {
                if (response.data.current.is_day) {
                    dayOrNight[i].style.backgroundColor = 'rgb(34, 61, 184);';
                } else {
                    dayOrNight[i].style.backgroundColor = 'rgb(2 1 13);';
                }
            }

        console.log(response.data.current.cloud)
    })



export default {
    data() {
        return {
          hello: 'world'
        }
    },
    methods: {
        enter(className) {
            var btn = document.getElementsByClassName(className);
            for(let i = 0; i < btn.length; i++) {
                btn[i].style.backgroundColor = 'black';
                btn[i].style.color = 'white';
                btn[i].style.transition = 'backgroundColor, 0.5s';
            }
            
        },
        leave(className) {
            var btn = document.getElementsByClassName(className);
            for(let i = 0; i < btn.length; i++) {
                btn[i].style.backgroundColor = '';
                btn[i].style.color = '';
                btn[i].style.transition = 'backgroundColor, 0.5s';
            }
        },
        click(className) {
            var btn = document.getElementsByClassName(className);
            for(let i = 0; i < btn.length; i++) {
                btn[i].style.backgroundColor = 'white';
                btn[i].style.color = '';
                btn[i].style.transition = '';
            }
        },
        unclick(className) {
            var btn = document.getElementsByClassName(className);
            for(let i = 0; i < btn.length; i++) {
                btn[i].style.backgroundColor = 'black';
                btn[i].style.color = 'white';
                btn[i].style.transition = 'backgroundColor, 0.2s';
            }
        }
    }}
</script>
 
<style scoped>
 body {
         margin: 0;
         padding: 0;
     }
 .container {
     display: grid;
     position: absolute;
     left: 0;
     right: 0;
     height: 100%;
     grid-template-columns: repeat(10, 1fr);
     grid-template-rows: repeat(8, 1fr);
     margin: 0;
     margin-top: 0;
     padding: none;
     background-color: rgb(34, 61, 184);
 }

 .title {
    position: fixed;
    font-size: 100px;
    padding-left: 30px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
    color: white;
    text-decoration:underline;
    
 }

 .description {
    position: fixed;
    top: 115px;
    font-size: 30px;
    padding-left: 70px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    color: white;
    padding-top: 10px;
    line-height: 1.2;
 }
 
 .block {
     height: 100%;
     width: 100%;
     border:none;
     border-radius: 20px;
     font-size: 50px;
     font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
     
 }

 .piece {
    border-left: solid;
 }
 
 .block1 {
     background-color: rgb(241, 89, 0);
     position: relative;
 }
 
 .block2 {
     background-color: rgb(238, 0, 131);
     position: relative;
 }
 
 .block3 {
     background-color: rgb(44, 221, 0);
 }
 
 .block4 {
     background-color: rgb(0, 204, 255);
 }
 .block5 {
     background-color: rgb(0, 3, 168);
 }
 .block6 {
     background-color: rgb(167, 11, 0);
 }

 .cloud {
    position:absolute;
    border-radius: 60px;
    width: 270px;
    height: 100px;
    
    background-color: rgb(255, 255, 255);
    animation-name: move;
    animation-duration: 2s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
 }

 .cloud1 {
    width: 100px;
    height: 100px;
    margin-top: -30px;
    margin-left: 140px;
 }

 .cloud2 {
    width: 100px;
    height: 100px;
    margin-top: -60px;
    margin-left: 90px;
 }

 .cloud3 {
    width: 100px;
    height: 100px;
    margin-top: -50px;
    margin-left: 38px;
 }

 a{
    color: white;
 }

 a:hover {
    color:cyan;
 }

 @keyframes move {
    from{
        transform: translateY(70px )
    }
    to{

    }
 }
 </style>
 
