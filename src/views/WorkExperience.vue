<template>
    <div id="app" class="container">
     <button @mouseenter="enter('we1')" @mouseleave="leave('we1')" @mousedown="click('we1')" @mouseup="unclick('we1')" class="block we1 piece" style="grid-area: 8/4/4/6"></button>
     <button @mouseenter="enter('we1')" @mouseleave="leave('we1')" @mousedown="click('we1')" @mouseup="unclick('we1')" class="block we1 piece" style="grid-area: 7/3/7/6"></button>

     <button @mouseenter="enter('we2')" @mouseleave="leave('we2')" @mousedown="click('we2')" @mouseup="unclick('we2')" class="block we2 piece" style="grid-area: 2/2/3/4"></button>
     <button @mouseenter="enter('we2')" @mouseleave="leave('we2')" @mousedown="click('we2')" @mouseup="unclick('we2')" class="block we2 piece" style="grid-area: 2/1/4/3"></button>

     <button @mouseenter="enter('we3')" @mouseleave="leave('we3')" @mousedown="click('we3')" @mouseup="unclick('we3')" class="block we3 piece" style="grid-area: 3/3/7/4"></button>
     <button @mouseenter="enter('we3')" @mouseleave="leave('we3')" @mousedown="click('we3')" @mouseup="unclick('we3')" class="block we3 piece" style="grid-area: 4/1/7/4"></button>

     <button @mouseenter="enter('we4')" @click="$router.push('/')" @mouseleave="leave('we4')" @mousedown="click('we4')" @mouseup="unclick('we4')" class="block we4 piece" style="grid-area: 3/3/7/4"></button>
     <button @mouseenter="enter('we4')" @click="$router.push('/')" @mouseleave="leave('we4')" @mousedown="click('we4')" @mouseup="unclick('we4')" class="block we4 piece" style="grid-area: 4/1/7/4">Home</button>

     <button @mouseenter="enter('we5')" @mouseleave="leave('we5')" @mousedown="click('we5')" @mouseup="unclick('we5')" class="block we5 piece" style="grid-area: 1/2/1/4"></button>

     <button @mouseenter="enter('we6')" @mouseleave="leave('we6')" @mousedown="click('we6')" @mouseup="unclick('we6')" class="block we6 piece" style="grid-area: 1/5/1/7"></button>
     <button @mouseenter="enter('we6')" @mouseleave="leave('we6')" @mousedown="click('we6')" @mouseup="unclick('we6')" class="block we6 piece" style="grid-area: 1/4/4/6"></button>

     <button @mouseenter="enter('we7')" @mouseleave="leave('we7')" @mousedown="click('we7')" @mouseup="unclick('we7')" class="block we7 piece" style="grid-area: 8/1/9/4"></button>
     <button @mouseenter="enter('we7')" @mouseleave="leave('we7')" @mousedown="click('we7')" @mouseup="unclick('we7')" class="block we7 piece" style="grid-area: 7/1/9/3"></button>

     <button @mouseenter="enter('we8')" @mouseleave="leave('we8')" @mousedown="click('we8')" @mouseup="unclick('we8')" class="block we8 piece" style="grid-area: 6/6/9/7"></button>
     <button @mouseenter="enter('we8')" @mouseleave="leave('we8')" @mousedown="click('we8')" @mouseup="unclick('we8')" class="block we8 piece" style="grid-area: 8/4/8/7"></button>

     <button @mouseenter="enter('')" @mouseleave="leave('')" @mousedown="click('')" @mouseup="unclick('')" class="block piece" style="grid-area: 1/7/9/11">
        <p>
            Worked 6 months as a lead<br>
            backend developer at<br>
            startup company project:<br>
            <a href="https://github.com/TBCounter/TBCounter-backend" target="blank">TBCounter</a>
        </p>    
     </button>
     <button @mouseenter="enter('we9')" @mouseleave="leave('we9')" @mousedown="click('we9')" @mouseup="unclick('we9')" class="block we9 piece" style="grid-area: 3/6/6/7"></button>
     

     
     
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
     background-color: rgb(241, 89, 0);
     
 }

 .we4{
    background-color: rgb(243, 57, 0);
 }

 .piece {
    border-left: solid;
 }

 p{
    margin-left: 40px;
    text-align: start;
    text-indent: 20px;
 }
 
 a {
    color:black;
 }

 a:hover {
    color: blue
 }

 @keyframes move {
    from{
        transform: translateY(70px )
    }
    to{

    }
 }
 </style>
 
