<template> 
    <div class="login-section">
      <p v-if="authenticated">
        You are logged in {{ user.name }}
        <br/>
        <button @click="logout">Log out</button>
      </p>
      <p v-else>
        Please Login
        <br/>
        <button @click="login">Login</button>
      </p>
      </div>
    
      
    </template>
    
    <style scoped>
    .login-section {
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(37, 37, 37, 0.67);
      backdrop-filter: blur(4px);
      padding: 8px;
      border-radius: 8px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
      z-index: 1000;
        }
    
    p {
      color: white;
      text-align: center;
      margin: 0;
    }
    
    button {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 8px;
    }
    
    button:hover {
      background-color: #2980b9;
    }
    </style>
    
    <script>
    //
    // Login/Logout Functionality
    //
    
    import config from '../../auth_config';
    import store from '../../src/scene/scene_object';
    
    import {ref, computed, onMounted} from "vue";
    import {useStore} from "vuex";
    import { createAuth0Client } from '@auth0/auth0-spa-js';
    
    export default {
      name: 'App',
      setup(){
        
        let auth0Client = ref();
    
        onMounted(async () => {
          auth0Client.value = await createAuth0Client({
            domain: config.domain,
            clientId: config.clientId
          });
    
          let userData = await auth0Client.value.getUser();
          store.store.commit("setUser", userData);
        })
    
        let authenticated = computed(function () {
          return store.store.getters.authenticated
        });
    
        let user = computed(function () {
          return store.store.state.user
        });
    
        async function login() {
          try {
            await auth0Client.value.loginWithPopup({});
            let userData = await auth0Client.value.getUser();
            store.store.commit("setUser", userData);
          } catch (e) {
            console.error(e);
          }
        }
        function logout() {
          return auth0Client.value.logout();
        }
    
        return {
          authenticated, 
          user,
          auth0Client,
          login,
          logout
        }
      }
    }
    
    </script>
    