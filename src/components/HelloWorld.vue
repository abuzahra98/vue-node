<template>

    <div class="card" v-for="(book,index) in state.books" :key="index">
    <h1>{{book.id}}</h1>
    <!-- <h4><span style="color:black;">Auther: </span>{{ book.auther }}</h4> -->
    <div>  <span style="color:black;">Title:</span>   {{ book.title }} </div>
    <img style="    width: 10rem;  border-radius: 10px;   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; " :src="book.image" alt="">
    <button class="delete-btn" @click="deleteBooks(book.id)">delete</button>
    </div>
  

    <div>
      <form @submit.prevent="addBook">
    <label for="title">Title:</label>
    <input type="text" v-model="state.title" id="title" />
    <br />
    <label for="image">Image:</label>
    <input type="text" v-model="state.image" id="image" />
    <br />
    <button type="submit">Add Book</button>
  </form>
    </div>
  
</template>

<script setup >
import api from '../api';

import {reactive} from 'vue'
const state = reactive({
  books:{},
  title:'',
  image:''
})
const deleteBooks = async(bookId)=>{
  const response = await api.delete(`/books/${bookId}`);
    console.log(response);
if(response.status == 200)
{
  await getBooks()
}
    
}

const getBooks = async () => {
  const response = await api.get('/books');
  state.books = response.data
}

const addBook = async () => {
   const body = {
    title:state.title,
    image:state.image
   }
  const response = await api.post('/books',body);
  await getBooks()

  console.log(response)
}


getBooks()
</script>

<style scoped>
.card{
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; 
   display: flex;
  justify-content: center;
   align-items: center;
   flex-direction: column;
  }

  .delete-btn {
    color: white;
    background: red;
    border: none;
    padding: 0.3rem 1rem;
    margin: 1rem;
    margin-inline-start: 13rem;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
