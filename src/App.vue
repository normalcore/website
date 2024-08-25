<template>
  <div id="app" class="container"></div>
  <router-view/>
 </template>
 
<script>
export default {
    data() {
        return {
          hello: 'world',
          cloud: 0
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
        },
        cloud(){

        }
    }}
</script>
 
<style>
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
 
 }
 
 .block {
     height: 100%;
     width: 100%;
     border:none;
     border-radius: 15px;
     font-size: 50px;
     
 }
 
 .block1 {
     background-color: blueviolet;
 }
 
 .block2 {
     background-color: aqua;
 }
 
 .block3 {
     background-color: orange;
 }
 
 .block4 {
     background-color: lime;
 }
 .block5 {
     background-color: gray;
 }
 .block6 {
     background-color: magenta;
 }
 </style>
 
