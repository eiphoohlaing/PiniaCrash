<template>
    <form @submit.prevent="handleSumit">
        <input 
            type="text"
            placeholder="I need to..."
            v-model="newTask"
        >
        <button>Add</button>
    </form>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";

    const {addTask} =useTaskStore()
    const newTask = ref('')
    const handleSumit = ()=>{
        if(newTask.value.length > 0){
            addTask({
                title:newTask.value,
                isFav:false,
                id:Math.floor(Math.random() * 10000)
            })
            newTask.value = ''
        }
    }
    
</script>

