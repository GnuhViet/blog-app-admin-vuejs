<template>
  <div>
      <!-- Nav bar  -->
      <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
        <div class="container">
          <router-link to="/" class="navbar-brand float-left">MEVN Stack CRUD</router-link>
          <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item" v-if="isCheck">
              <router-link to="/" class="nav-link px-3">Login</router-link>
            </li>
            <li class="nav-item" v-if="!isCheck">
              <router-link to="/" class="nav-link" @click="logout">Logout</router-link>
            </li>
          </ul>
        </div>
      </nav>
      
    <!-- Router view -->
    <div class="container mt-5">
      <router-view>
        
      </router-view>
    </div>
  </div>

</template>

<script>
/* eslint-disable */
export default {
  data(){
    return{
      isCheck: false,
    }
  },
  mounted(){
    if(sessionStorage.getItem("JWT") == null){
      this.isCheck = false;
    }
    else{
      this.isCheck = true;
    }
  },
  setup() {
    const logout = async () => {
        sessionStorage.removeItem("JWT");
    }
    return{
        logout
    }
  }
}
</script>