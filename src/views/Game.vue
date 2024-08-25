<script setup >
import { ref } from 'vue'

let x = ref(100)
let y = ref(100)

document.addEventListener("keydown", (e)=>{
    switch(e.key){
        case 'w':
            y.value++
            console.log(x.value, y)
            break
        case 'a':
            x--
            break
        case 's':
            y++
            break
        case 'd':
            x++
            break
    }
});
</script>
<template>
 <div class="text">a</div>

</template>

<style>
.text {
    position: absolute;
    left: v-bind(x)px;
    top: v-bind(y);
    width: 100px;
    height: 100px;
    background-color: black;
}
</style>