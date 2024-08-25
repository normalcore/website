<template>
    <div id="app" class="container">
        <button @mouseenter="enter('we1')" @click="$router.push('/')" @mouseleave="leave('we1')" @mousedown="click('we1')" @mouseup="unclick('we1')" class="block we1 piece" style="grid-area: 3/2/6/4">Home</button>
        <button @mouseenter="enter('we1')" @click="$router.push('/')" @mouseleave="leave('we1')" @mousedown="click('we1')" @mouseup="unclick('we1')" class="block we1 piece" style="grid-area: 3/1/4/3"></button>

        <div class="popup" v-show="popup">Copied to clipboard!</div>

        <button @mouseenter="enter('we2')" @mouseleave="leave('we2')" @mousedown="click('we2')" @mouseup="unclick('we2')" class="block we2 piece" style="grid-area: 4/1/7/1"></button>
        <button @mouseenter="enter('we2')" @mouseleave="leave('we2')" @mousedown="click('we2')" @mouseup="unclick('we2')" class="block we2 piece fix" style="grid-area: 6/1/9/3"></button>

        <button @mouseenter="enter('we3')" @mouseleave="leave('we3')" @mousedown="click('we3')" @mouseup="unclick('we3')" class="block we3 piece" style="grid-area: 2/2/3/4"></button>
        <button @mouseenter="enter('we3')" @mouseleave="leave('we3')" @mousedown="click('we3')" @mouseup="unclick('we3')" class="block we3 piece" style="grid-area: 1/1/3/3"></button>

        <button @mouseenter="enter('we4')" @mouseleave="leave('we4')" @mousedown="click('we4')" @mouseup="unclick('we4')" class="block piece" style="grid-area: 1/4/6/8">
            <p>
            Telegram:<br>
            <a @click="copy1">+996 508 294 559<br></a>
            Email:<br>
            <a @click="copy2">isakovwebdev@gmail.com<br></a>
            </p>   
        </button>
        <button @mouseenter="enter('we8')" @mouseleave="leave('we8')" @mousedown="click('we8')" @mouseup="unclick('we8')" class="block piece we8" style="grid-area: 6/3/9/8"></button>

        <button @mouseenter="enter('we5')" @mouseleave="leave('we5')" @mousedown="click('we5')" @mouseup="unclick('we5')" class="block we5 piece" style="grid-area: 6/10/9/11"></button>
        <button @mouseenter="enter('we5')" @mouseleave="leave('we5')" @mousedown="click('we5')" @mouseup="unclick('we5')" class="block we5 piece" style="grid-area: 7/8/9/11"></button>

        <button @mouseenter="enter('we6')" @mouseleave="leave('we6')" @mousedown="click('we6')" @mouseup="unclick('we6')" class="block we6 piece" style="grid-area: 3/8/7/10"></button>

        <button @mouseenter="enter('we7')" @mouseleave="leave('we7')" @mousedown="click('we7')" @mouseup="unclick('we7')" class="block we7 piece" style="grid-area: 2/10/6/11"></button>
        <button @mouseenter="enter('we7')" @mouseleave="leave('we7')" @mousedown="click('we7')" @mouseup="unclick('we7')" class="block we7 piece" style="grid-area: 2/8/2/11"></button>
        

   </div>
 </template>
 
<script>
export default {
    data() {
        return {
          hello: 'world',
          popup: false
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
        copy1() {
            navigator.clipboard.writeText("+996 508 294 559");
            this.popup = true;
            setTimeout(()=> {
                this.popup = false;
            }, 2000)
        },
        copy2() {
            navigator.clipboard.writeText("isakovwebdev@gmail.com");
            this.popup = true;
            setTimeout(()=> {
                this.popup = false;
            }, 2000)
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
 }
 
 .block {
     height: 100%;
     width: 100%;
     border:none;
     border-radius: 20px;
     font-size: 50px;
     font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
     background-color: rgb(0, 204, 255);
     
 }

 .popup {
    background-color: white;
    border-radius: 15px;
    position: fixed;
    inset: 0px;
    width: 18rem;
    height:5rem;
    max-width: 100vw;
    max-height: 100dvh;
    margin: auto;
    margin-bottom: 50px;
    font-size: 25px;
    align-content: center;
    text-align: center;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    animation-name: move;
    animation-duration: 0.1s;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
 }

 .popuptext{
    align-content: center;
 }

 .we1 {
    background-color: rgb(0, 148, 216);
 }

 .piece {
    border-left: solid;
 }

 a{
    text-decoration: underline;
 }

 a:hover{
    color: blue;
    cursor:copy;
 }

 p{

    margin-left: 20px;
    text-align: start;
 }

 .fix {
    border-top-left-radius: 0%;
 }

 
 @keyframes move {
    from{
        opacity: 0;
        transform: translateY(70px )
    }
    to{

    }
 }
 </style>
 
