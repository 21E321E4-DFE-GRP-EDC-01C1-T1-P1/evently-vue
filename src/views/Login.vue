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
            password:''
        };
    },
    methods: {
        login: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(
                 (user) => {
                    this.$router.replace('home')
                     alert(`Welcome, ${{email}}`)
                },
                (err) => {
                    alert('Oops, something went wrong' + err.message)
                }
            );
        },
    },
};
</script>
<style scoped></style>