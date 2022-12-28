import { defineStore } from "pinia";

export const useTaskStore =defineStore('taskStore',{
  state:()=>({
    tasks:[],
    name:[],
    loading:false,
    error:null
  }),
  getters:{
    Favs:(state)=>{
      return state.tasks.filter(t => t.isFav)
    },
    FavCount(){
      return this.tasks.reduce((p,c)=>{
        return c.isFav ? p+1 : p
      },0)
    },
    TotalCount:(state)=>{
      return state.tasks.length
    }
  },
  actions:{
    async fetchTasks(){
      this.tasks =[]
      this.loading= true
      try{
        const res = await fetch('http://localhost:3001/tasks')
        if(!res.ok){
          throw Error('No data avalable!!')
        }
        this.tasks = await res.json()
      }
      catch(err){
        this.error=err.message
      }
      finally{
        this.loading = false
      }
    },
    addTask(task){
      this.tasks.push(task)
    },
    deleteTask(id){
      this.tasks= this.tasks.filter(t=>{
        return t.id !== id
      })
    },
    toggleFav(id){
      const task = this.tasks.find(t=>t.id === id)
      task.isFav = !task.isFav
    }
  }

})