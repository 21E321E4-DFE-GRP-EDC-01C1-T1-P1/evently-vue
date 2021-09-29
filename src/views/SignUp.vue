<template>
    <div class="sign-up">
        <h1>Create a new account</h1>
        <input type="text" placeholder="Email" v-model="email" >
        <br>
        <input type="password" placeholder="Password" v-model="password">
        <br>
        <button @click="signUp">registry</button>
        <span>Back to <router-link to="/login">login</router-link></span>
    </div>
</template>
<script>
import firebase from "firebase";

export default {
    name: 'signUp',
    data(){
        return{
            email:'',
            password: '',
        };
    },
    methods: {
        signUp(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(
                (user) => {
                    this.$router.replace('home')
                },
                (err) => {
                    alert('Oops, something went wrong' + err.message)
                }
            );
        },
    },
};
</script>
