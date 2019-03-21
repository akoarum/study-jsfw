<template>
  <div>
    <AddTodoForm :addTodo="addTodo" />
    <TodoList :todos="todos" :toggleTodo="toggleTodo" />
  </div>
</template>

<script>
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'

export default {
  components: { AddTodoForm, TodoList },
  data() {
    return {
      todos: [
        { id: 1, todo: 'タイトル', completed: false }
      ]
    }
  },
  methods: {
    toggleTodo(id) {
      const target = this.todos.find(todo => todo.id === id)
      target.completed = !target.completed
    },
    addTodo(value) {
      this.todos = this.todos.concat([{
        id: this.todos.length + 1,
        todo: value,
        completed: false
      }])
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
