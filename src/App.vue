<template>
  <main>
    <!-- Header -->
    <header>
      <img src="./assets/logo.svg" alt="Pinia Logo">
      <h1>Pinia Tasks</h1>
      <!-- <p>{{name}}</p> -->
    </header>
    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm/>
    </div>
    <!-- nav -->
    <nav class="filter">
      <button @click="filter ='all'">All tasks</button>
      <button @click="filter ='favs'">Favs tasks</button>
    </nav>

    <!-- Loading -->
    <div v-if="loading" class="loading">Loading tasks.....</div>
    <p v-if="error" class="error">{{ error}}</p>
    <div class="task-list" v-if=" filter === 'all'">
      <p>You have {{ TotalCount }} tasks left to do</p>
      <p>All tasks</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>
    <div class="task-list" v-if=" filter === 'favs'">
      <p>You have {{ FavCount }} tasks left to do</p>
      <p>Fav task</p>
      <div v-for="task in Favs" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>
  </main>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useTaskStore } from './stores/TaskStore';
import TaskDetails from "./components/TaskDetails.vue"
import TaskForm from './components/TaskForm.vue'
import { ref } from 'vue';

const {fetchTasks} = useTaskStore()
fetchTasks()
const {tasks,loading,error}=storeToRefs(useTaskStore())
const{Favs}=storeToRefs(useTaskStore())
const filter = ref('all')
const{FavCount}=storeToRefs(useTaskStore())
const{TotalCount}=storeToRefs(useTaskStore())

// const {taskStore} = useTaskStore()
// taskStore()
</script>