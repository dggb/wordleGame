<template>
  <div>
      <v-row style="margin:0px">
        <v-col cols="12">
          <v-btn color="primary" style="margin-right:10px" @click="$goLink('fixPage')">
            시작하기
          </v-btn>
          <v-btn color="success" @click="$goLink('inputPage')">
            워들 생성하기
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
