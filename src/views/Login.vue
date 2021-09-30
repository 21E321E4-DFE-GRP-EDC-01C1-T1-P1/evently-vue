<template>
    <div class="login">
        <h1>Login</h1>
        <input type="text" placeholder="Email" v-model="email">
        <br>
        <input type="password" placeholder="Password" v-model="password">
        <br>
        <div class="btn-login">
            <button @click='login'>Login</button>
        </div>
        <p> You don't have an account here?
            <span><router-link to='/register'>Create an account</router-link></span></p>
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
    name: "login",
    data(){
        return{
            email:'',
            password:'',
        };
    },
    methods: {
        login: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(
                 () => {
                    this.$router.replace('/home')
                     alert("Welcome !!")
                },
                (err) => {
                    alert('Oops, something went wrong' + err.message)
                }
            );
        },
    },
};
</script>
<style scoped>
login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>