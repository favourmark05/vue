<template>
  <div>
    <h4 class="bg-primary text-white text-center p-2">
      {{ name }}'s' TO DO List
    </h4>
    <div class="container-fluid p-4">
      <div class="row" v-if="filteredTasks.length == 0 ">
        <div class="col text-center">
          <b>Nothing to do. Hurray, sha go and sleep small you hear</b>
        </div>
      </div>
      <div v-else>
        <div class="row">
        <div class="col font-weight-bold">Task</div>
        <div class="col-2 font-weight-bold">Done</div>
      </div>
      </div>
      <div class="row" v-for="task in filteredTasks" :key="task.action">
      <div class="col"> {{ task.action }}</div>
      <div class="col-2">
      <input type="checkbox" v-model="task.done" class="form-check-input">
        {{ task.done }}
      </div>
      </div>
      <div class="row py-2">
        <div class="col">
          <input type="text" v-model="newItem" class="form-control">
        </div>
        <div class="col-2">
          <button class="btn btn-primary" v-on:click="addNewTodo">Add</button>
        </div>
      </div>
      <div class="row bg-secondary py-2 mt-2 text-white">
        <div class="col text-center">
          <input type="checkbox" v-model="hideCompleted" class="form-check-input" />
          <label for="HideTask" class="form-check-label font-weight-bold">
            Hide Completed tasks
          </label>
        </div>
        <div class="col text-center">
          <button class="btn btn-sm btn-danger" v-on:click="deleteCompleted">Delete Completed</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: 'Mark',
      tasks: [],
      hideCompleted: true,
      newItem: ' '
    }
  },
  computed: {
    // hide completed task
    filteredTasks () {
      return this.hideCompleted ? this.tasks.filter(task => !task.done) : this.tasks
    }
  },
  methods: {
    // add new todo
    addNewTodo () {
      this.tasks.push({
        action: this.newItem,
        done: false
      })
      // local storage of the task (persistent)
      localStorage.setItem('todos', JSON.stringify(this.tasks))
      this.newItem = ''
    },
    // storing the data
    storeData () {
      localStorage.setItem('todos', JSON.stringify(this.tasks))
    },
    // delete all completed task
    deleteCompleted () {
      this.tasks = this.tasks.filter(task => !task.done)
      this.storeData()
    }
  },
  created () {
    const data = localStorage.getItem('todos')
    if (data != null) {
      this.tasks = JSON.parse(data)
    }
  }
}
</script>

<style scoped>
</style>
