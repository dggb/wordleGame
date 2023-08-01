<template>
  <div>    
    <v-row v-show="word_true_i">
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <!-- <input v-model.trim="inputText" style="" type="text" placeholder="영어 5자리로 입력해주세요" /> -->

        <input type="text" v-model.trim="inputText_i" placeholder="영어 5자리로 입력해주세요" style="border:solid 1px black">
        <v-btn @click="word_create" color="success">
          단어 생성
        </v-btn>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
    <v-row v-show="answer_i">
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-card style="width:100%;">     
          <div class="card-header" style="background-color:#4caf50">
            World 게임 (정답 입력)
          </div>
          <div class="card-body">
            <div class="dataTable">
                <template v-for="(count,c_index) in count_i">
                  <template v-for="(length,l_index) in length_i" >
                      <span :key="length[c_index]" :id="`i_`+c_index.toString()+`_`+l_index.toString()" class="boxCss">
                      </span>
                  </template>
                </template>
            </div>
            <div v-if="gameOver_i">
                <h1 style="text-align:center;">
                  게임이 끝났습니다. <br>
                  정답 : {{answer_i}} <br>
                  게임 플레이 시간 : {{playtime_i.toFixed(2)}} 초 <br>
                  현재까지 워들 승리 횟수 : {{successWordle_i}} 회 <br>
                  현재까지 워들 승률 : {{percent_i.toFixed(2)}}%<br>
                  현재까지 워들 시도 횟수 : {{totalChallenge_i}} 회 <br>
                </h1>
            </div>
          </div>
        </v-card>  
        <div style="margin-top:10px">
          <div v-for='(ks, index) in keyboard_str' :key="index">
            <div v-for="sp in ks" :key="sp" class="keyboard" @click="$keyPress('i',sp.toUpperCase())" :id="sp.toUpperCase()+`_i`">
                {{sp.toUpperCase()}}
            </div>

            <template v-if="index == 2">
              <div class="keyboard-sub" @click="$keyPress('i','ENTER')">Enter</div>
              <div class="keyboard-sub" @click="$keyPress('i','BACKSPACE')">BackSpace</div>
            </template>
          </div>
        </div>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText_i: '',
      count_i : 6,
      length_i : 5,
      row_i : 0,
      col_i : 0,
      gameOver_i : false,
      answer_i : '',
      word_check_i : "",
      bool_i : false,
      word_true_i: true,
      start_i : '',
      playtime_i : '-',
      keyboard_str : [
        'qwertyuiop',
        'asdfghjkl',
        'zxcvbnm',
      ],
      totalChallenge_i: 0,
      successWordle_i :0,
      percent_i:0
    };
  },
  created(){
    let answer_check = localStorage.getItem(`answer_local`);

    if(answer_check != null){
      if(answer_check != ''){
        this.answer_i = answer_check
        this.start_i = new Date();
        this.word_true_i = false
      }
    }
  },
  mounted (){
    this.$keyupEvent("i");
  },
  methods: {
    async word_create(){
      let regex = /^[a-z|A-Z]+$/;

      if(regex.test(this.inputText_i)){
        if(this.inputText_i.length == 5){
          this.answer_i = this.inputText_i.toUpperCase();
          this.start_i = new Date();
          this.word_true_i = false

          localStorage.setItem(`answer_local`, this.answer_i);

          // 문서에 있는 단어검증 api 사이트가 터진건지 사이트 접속이 아예 안되서 만약 됐을시에 체크하는 루틴을 구현했습니다.
          // 현재 체크 하는 루틴은 영문 5개 일때만 체크를 하였습니다. 일단 무조건 true로 반환을 했습니다
          // 밑에 루틴을 태우면 단어 검증 성공 실패를 반환 합니다.
          // await this.$http.get(`/api/`+this.inputText_i+``).then(()=>{
          //   this.answer_i = this.inputText_i.toUpperCase();
          //   this.start_i = new Date();
          //   this.word_true_i = false
          //   localStorage.setItem(`answer_local`, this.answer_i);
          // }).catch((err)=>{
          //   console.log(err);
          //   alert('단어 검증 실패, 단어를 찾을 수 없습니다.');
          // })

        }else{
          alert('영문의 글자 수는 5개 만 가능합니다.');
        }
      }else{
        alert('영어만 입력이 가능합니다.');
      }
    }
  },
};

</script>
<style scoped>

</style>

