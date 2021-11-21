<template>
<div class="container">
  <div class="q-pa-md q-gutter-sm">
    <q-avatar size="200px" font-size="52px">
      <img src="https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile.png">
    </q-avatar>
  </div>
  <div class="textName">
    <h3>Meu nome</h3>
  </div>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Noiz da Bike</div>
        <div class="text-subtitle2">Tour de bike pela cidade</div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn flat>Quando?</q-btn>
        <q-btn flat>Onde?</q-btn>
        <q-btn flat>Quem vai?</q-btn>
        <q-btn flat style="color:red">Cancelar</q-btn>
      </q-card-actions>

    </q-card>
        <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Clube da Leitura</div>
        <div class="text-subtitle2">Vamos ler o capitulo 10 da Enércia de Virgilio</div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn flat>Quando?</q-btn>
        <q-btn flat>Onde?</q-btn>
        <q-btn flat>Quem vai?</q-btn>
        <q-btn flat style="color:red">Cancelar</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</div>
</template>

<script>
export default {
  name: "Perfil",
  components: {},
};
</script>
<style scoped>
.textName{
  float: left ;
}
.container{
  justify-content: safe center;
}
</style>
