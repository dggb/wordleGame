<template>
  <div>    
    <v-row>
      <v-col class="col_sub"></v-col>
      <v-col class="col_body">
        <v-card style="width:100%;">     
          <div class="card-header">
            World 게임 (정답 고정)
          </div>
          <div class="card-body">
            <div class="dataTable" id="f_event">
                <template v-for="(count,c_index) in count_f">
                  <template v-for="(length,l_index) in length_f" >
                      <span :key="length[c_index]" :id="`f_`+c_index.toString()+`_`+l_index.toString()" class="boxCss">
                      </span>
                  </template>
                </template>
            </div>
            <div v-if="gameOver_f">
                <h1 style="text-align:center;">
                  게임이 끝났습니다. <br>
                  정답 : {{answer_f}} <br>
                  게임 플레이 시간 : {{playtime_f.toFixed(2)}} 초 <br>
                  현재까지 워들 승리 횟수 : {{successWordle_f}} 회 <br>
                  현재까지 워들 승률 : {{percent_f.toFixed(2)}}%<br>
                  현재까지 워들 시도 횟수 : {{totalChallenge_f}} 회 <br>
                </h1>
            </div>
          </div>
        </v-card>  
        <div style="margin-top:10px">
          <div v-for='(ks, index) in keyboard_str' :key="index">
            <div v-for="sp in ks" :key="sp" class="keyboard" @click="$keyPress('f',sp.toUpperCase())" :id="sp.toUpperCase()+`_f`">
                {{sp.toUpperCase()}}
            </div>

            <template v-if="index == 2">
              <div class="keyboard-sub" @click="$keyPress('f','ENTER')">Enter</div>
              <div class="keyboard-sub" @click="$keyPress('f','BACKSPACE')">BackSpace</div>
            </template>
          </div>
        </div>
      </v-col>
      <v-col class="col_sub"></v-col>
    </v-row>
  </div>
  
</template>

<script>

export default {

  data() {
    return {
      count_f : 6,
      length_f : 5,
      row_f : 0,
      col_f : 0,
      gameOver_f : false,
      answer_f : 'WORLD',
      word_check_f : "",
      bool_f : false,
      start_f : new Date(),
      playtime_f : '-',
      event_handler:'',
      keyboard_str : [
        'qwertyuiop',
        'asdfghjkl',
        'zxcvbnm',
      ],
      totalChallenge_f: 0,
      successWordle_f:0,
      percent_f:0
    };
  },
  created(){
  },
  mounted (){
    this.$keyupEvent("f");
  },
  destroyed(){
  },
  methods: {

  },
};

</script>
<style scoped>

</style>

