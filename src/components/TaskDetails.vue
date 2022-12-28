<template>
    <div class="task">
        <h3>{{ task.title}}</h3>
        <div class="icons">
            <i 
                class="material-icons" 
                @click="deleteTask(task.id)"
            >delete</i>
            <i 
                class="material-icons"
                :class="{active : task.isFav}"
                @click="toggleFav(task.id)"
            >favorite</i>
        </div>
    </div>
</template>

<script setup>
import { useTaskStore } from "../stores/TaskStore"

    defineProps(['task'])
    const {deleteTask} = useTaskStore();
    const {toggleFav} = useTaskStore();
    // deleteTask()
</script>