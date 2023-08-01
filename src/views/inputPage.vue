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
    <v-row v-show="answer_i" style="margin: 0px;">
      <v-col class="col_sub"></v-col>
      <v-col class="col_body">
        <v-card style="width:100%;">     
          <div class="card-header" style="background-color:#4caf50">
            World 게임 (정답 입력)

            <v-dialog
              transition="dialog-top-transition"
              width="auto"
              v-model="isActiveTop"
            >
              <template>
                <v-card>
                  <v-toolbar
                    color=""
                    style="text-align: initial;color: whitesmoke;font-size: 20px;font-weight: bold;background-color: lightslategrey;"
                  >도움말</v-toolbar>
                  <v-card-text class="helpBody">
                    <h1 class="helpHeader">게임 방법</h1>
                    <br>
                    <p>
                      6번의 게임을 시도를 하시면 됩니다.
                    </p>
                    <ul>
                      <li>
                        각각의 5개의 글자를 입력하시면 됩니다.
                      </li>
                      <li>
                        타일의 색상으로 정답을 유추 할 수 있습니다.
                      </li>
                    </ul>
                    <br>
                    <p style="color:black">
                      Ex)
                    </p>
                    <img src="../../public//common/a.png">
                    <br>
                    <p>- 녹색은 단어 및 위치가 맞으면 색상이 표시 됩니다. </p>
                    <img src="../../public//common/b.png">
                    <br>
                    <p>- 황색은 단어만 맞고 위치가 틀렸을때 표시 됩니다. </p>
                    <img src="../../public//common/c.png">
                    <br>
                    <p>- 회색은 단어 및 위치가 모두 틀리면 표시 됩니다. </p>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn
                      variant="text"
                      @click="isActiveTop = false"
                    >Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
            <button type="button" @click="help()">
              <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="4 4 24 24" width="28" class="game-icon" data-testid="icon-help"
              style="filter: invert(100%) sepia(100%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);padding-top: 5px;">
                <path fill="var(--color-tone-1)" d="M14.8333 23H17.1666V20.6667H14.8333V23ZM15.9999 4.33334C9.55992 4.33334 4.33325 9.56001 4.33325 16C4.33325 22.44 9.55992 27.6667 15.9999 27.6667C22.4399 27.6667 27.6666 22.44 27.6666 16C27.6666 9.56001 22.4399 4.33334 15.9999 4.33334ZM15.9999 25.3333C10.8549 25.3333 6.66659 21.145 6.66659 16C6.66659 10.855 10.8549 6.66668 15.9999 6.66668C21.1449 6.66668 25.3333 10.855 25.3333 16C25.3333 21.145 21.1449 25.3333 15.9999 25.3333ZM15.9999 9.00001C13.4216 9.00001 11.3333 11.0883 11.3333 13.6667H13.6666C13.6666 12.3833 14.7166 11.3333 15.9999 11.3333C17.2833 11.3333 18.3333 12.3833 18.3333 13.6667C18.3333 16 14.8333 15.7083 14.8333 19.5H17.1666C17.1666 16.875 20.6666 16.5833 20.6666 13.6667C20.6666 11.0883 18.5783 9.00001 15.9999 9.00001Z"></path>
              </svg>
            </button>
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
            <div v-if="gameOver_i" class="fontCss">
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
      <v-col class="col_sub"></v-col>
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
      percent_i:0,
      isActiveTop : false
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
    },

    help(){
      this.isActiveTop = true;
    }
  },
};

</script>
<style scoped>

</style>

