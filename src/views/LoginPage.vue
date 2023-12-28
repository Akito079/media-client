<template>
   <div class="d-flex align-items-center gap-3 justify-content-center py-3">
    <button class="btn btn-sm btn-danger" @click="home()" >Home</button>
  </div>
  <div class="container mx-auto my-5 bg-dark text-white p-5 rounded-5">
    <div class="text-center ">
      <h3 class="text-white">Login Form</h3>
    </div>
    <div class=" p-2" v-if="userStatus" >
      <p class="text-danger ">The credentail do not match!</p>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" v-model="userData.email" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" v-model="userData.password" id="exampleInputPassword1">
    </div>
    <button type="button" class="btn bg-danger text-white" @click="login()">Submit</button>
  </div>
</template>
<script src="../js/loginPage.js"></script>
