<template>
  <div>
      <v-row style="margin:0px">
        <v-col cols="12">
          <v-btn style="margin-right:10px" @click="$goLink('/')">
            기본 페이지 이동
          </v-btn>
        </v-col>
      </v-row>
    <v-main style="background:white">    
      <router-view ref=""></router-view>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  created() {

  },
  computed: {

  },
  methods: {
    
  },
};
</script>

<style></style>

<style>

</style>
