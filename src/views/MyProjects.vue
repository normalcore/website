<template>
    <div id="app" class="container">
        <button @mouseenter="enter('we1')" @mouseleave="leave('we1')" @mousedown="click('we1')" @mouseup="unclick('we1')" class="block piece" style="grid-area: 1/6/7/1"></button>
        <button @mouseenter="enter('we1')" @mouseleave="leave('we1')" @mousedown="click('we1')" @mouseup="unclick('we1')" class="block piece" style="grid-area: 1/1/9/5">
            <a @click="$router.push('/projects/game')">game</a>
        </button>

        <button @mouseenter="enter('we2')" @click="$router.push('/')" @mouseleave="leave('we2')" @mousedown="click('we2')" @mouseup="unclick('we2')" class="block we2 piece" style="grid-area: 9/6/6/6"></button>
        <button @mouseenter="enter('we2')" @click="$router.push('/')" @mouseleave="leave('we2')" @mousedown="click('we2')" @mouseup="unclick('we2')" class="block we2 piece" style="grid-area: 9/5/7/7">Home</button>

        <button @mouseenter="enter('we3')" @mouseleave="leave('we3')" @mousedown="click('we3')" @mouseup="unclick('we3')" class="block we3 piece" style="grid-area: 8/7/6/9"></button>
        <button @mouseenter="enter('we5')" @mouseleave="leave('we5')" @mousedown="click('we5')" @mouseup="unclick('we5')" class="block we5 piece" style="grid-area: 9/7/6/8"></button>

        <button @mouseenter="enter('we4')" @mouseleave="leave('we4')" @mousedown="click('we4')" @mouseup="unclick('we4')" class="block we4 piece" style="grid-area: 9/8/8/10"></button>

        <button @mouseenter="enter('we5')" @mouseleave="leave('we5')" @mousedown="click('we5')" @mouseup="unclick('we5')" class="block we5 piece fix" style="grid-area: 8/7/6/9"></button>
        
        <button @mouseenter="enter('we9')" @mouseleave="leave('we9')" @mousedown="click('we9')" @mouseup="unclick('we9')" class="block we9 piece" style="grid-area: 9/10/6/11"></button>
        
        <button @mouseenter="enter('we6')" @mouseleave="leave('we6')" @mousedown="click('we6')" @mouseup="unclick('we6')" class="block we6 piece" style="grid-area: 8/9/5/9"></button>
        <button @mouseenter="enter('we6')" @mouseleave="leave('we6')" @mousedown="click('we6')" @mouseup="unclick('we6')" class="block we6 piece" style="grid-area: 6/8/4/11"></button>

        <button @mouseenter="enter('we7')" @mouseleave="leave('we7')" @mousedown="click('we7')" @mouseup="unclick('we7')" class="block we7 piece" style="grid-area: 3/7/3/9"></button>
        <button @mouseenter="enter('we7')" @mouseleave="leave('we7')" @mousedown="click('we7')" @mouseup="unclick('we7')" class="block we7 piece" style="grid-area: 6/6/3/8"></button>

        <button @mouseenter="enter('we8')" @mouseleave="leave('we8')" @mousedown="click('we8')" @mouseup="unclick('we8')" class="block we8 piece" style="grid-area: 2/9/4/11"></button>
        <button @mouseenter="enter('we8')" @mouseleave="leave('we8')" @mousedown="click('we8')" @mouseup="unclick('we8')" class="block we8 piece" style="grid-area: 2/8/3/11"></button>
        
   </div>
 </template>
 
<script>
export default {
    data() {
        return {
          hello: 'world',
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
 
 .block {
     height: 100%;
     width: 100%;
     border:none;
     border-radius: 20px;
     font-size: 50px;
     font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
     background-color: rgb(0, 3, 168);
     
 }

 .piece {
    border-left: solid;
 }

 .we2{
    background-color: rgb(8, 0, 128);
 }

 p{
    margin-bottom: 50%;
    margin-left: 40px;
    text-align: start;
 }

 .fix {
    border-bottom-left-radius: 0%;
 }
 
 </style>
 
