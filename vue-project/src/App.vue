<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          
           <a class="navbar-brand text-4xl font-bold" href="#">BizTech</a>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav lg:text-right">
                    <li class="nav-item hover:text-blue-500  mb-2 lg:mx-3">
                      <RouterLink to="/">Home</RouterLink>
                      </li>
                      <li class="nav-item hover:text-blue-500  mb-2 lg:mx-3 ">
                       <RouterLink to="/about">About</RouterLink>  
                       </li>   
                       <li class="nav-item hover:text-blue-500  mb-2 lg:mx-3 ">
                       <RouterLink to="/contact">Contact</RouterLink>  
                       </li>           
                </ul>
            </div>
        </div>


      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
