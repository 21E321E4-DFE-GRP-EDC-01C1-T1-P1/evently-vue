<template>
    <div class="login">
        <h1>Login</h1>
        <input type="text" placeholder="Email">
        <br>
        <input type="password" placeholder="Password">
        <br>
        <div class="btn-login">
            <button>Login</button>
        </div>
        <p> You don't have an account here?
            <span><router-link to='/register'>Create an account</router-link></span></p>
    </div>
</template>
<script>
export default {
    name: "login",
    data(){
        return{};
    },
    method: {}
};
</script>
<style scoped></style>