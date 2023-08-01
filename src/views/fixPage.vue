<template>
  <div>    
    <v-row>
      <v-col class="col_sub"></v-col>
      <v-col class="col_body">
        <v-card style="width:100%;">     
          <div class="card-header">
            World 게임 (정답 고정)

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
                  <v-card-text style="width: 420px;text-align:left">
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
            <div class="dataTable" id="f_event">
                <template v-for="(count,c_index) in count_f">
                  <template v-for="(length,l_index) in length_f" >
                      <span :key="length[c_index]" :id="`f_`+c_index.toString()+`_`+l_index.toString()" class="boxCss">
                      </span>
                  </template>
                </template>
            </div>
            <div v-if="gameOver_f" class="fontCss">
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
      percent_f:0,
      isActiveTop : false
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
    help(){
      this.isActiveTop = true;
    }
  },
};

</script>
<style scoped>

</style>

