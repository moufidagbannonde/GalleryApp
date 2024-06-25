<template>
  <div>
    <TodoHeader @add-todo="addTodo"/>

    <!-- liste des tâches -->
    <main class="main">
      <div class="">
        <input type="checkbox" id="toggle-all-input" class="">
        <label for="toggle-all-input" class="toggle-all-label">Tout afficher</label>
      </div>

      <ul class="todo-list">
        <li v-for="todo in todos" :key="todo.id">
        <div class="view">
          <input type="checkbox" class="toggle">
          <label :for="todo.id">{{ todo.title }}</label>
        </div>
        </li>

      </ul>
    </main>

    <TodoFooter/>
  </div>
</template>

<script setup lang="ts">
import type { Todo } from '@/@types';
import { ref } from "vue";
import { nanoid } from 'nanoid';
import TodoFooter from "./TodoFooter.vue";
import TodoHeader from "./TodoHeader.vue";
const count = 1;
const todos = ref<Todo[]>([
  {id:'15fc4791-46cf-449b-beaf-ba7439e2fd31', title:'Ma tâche 1', completed:false, started:false},
  {id:'4e8f02b7-3d21-46c9-982e-caa963a6e961', title:'Ma tâche 2', completed:false, started:false},
  {id:'350e2d74-16c9-4911-8f26-f161b7deab66', title:'Ma tâche 3', completed:false, started:false},
  {id:'676fb886-fdcf-4430-96f4-9aac47434a66', title:'Ma tâche 4', completed:false, started:false}
]);

function addTodo(value: string) {
  todos.value.push({
id: nanoid(),
title: value,
completed: false
})
}
</script>

<style scoped></style>
