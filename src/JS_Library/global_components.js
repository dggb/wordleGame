
var id_str = '';
var vue_component = '';
export default{
    mounted() {
        
    },
    install(Vue){      
        Vue.prototype.$handler = async function(e){
            if(vue_component[`answer_${id_str}`].length == 5){
                if(vue_component[`gameOver_${id_str}`]) return; 
            
                if ("KeyA" <= e.code && e.code <= "KeyZ") {
                    if (vue_component[`col_${id_str}`] < vue_component[`length_${id_str}`]) {
                        let item = document.getElementById(`${id_str}_`+vue_component[`row_${id_str}`].toString() + "_" + vue_component[`col_${id_str}`].toString());

                        vue_component.$keyupText(item,e.code[3])
                    }
                }else if (e.code === "Backspace") {
                    vue_component.$BackSpaceUpdate(id_str)
                }else if ( (e.code === "Enter" || e.code === "NumpadEnter") && vue_component[`col_${id_str}`] === vue_component[`length_${id_str}`] ) {
                    vue_component.$enterUpdate(id_str)
                }
            }
        },  
        Vue.prototype.$keyupEvent = async function(data){
            let localstorage_Data = JSON.parse(localStorage.getItem(`answer_${data}`));

            if(localstorage_Data != null){
                if(localstorage_Data.length != 0){
                    localstorage_Data.forEach(el => {
                        el.split("").forEach(sp=>{
                            let item = document.getElementById(`${data}_`+this[`row_${data}`].toString() + "_" + this[`col_${data}`].toString());
                            
                            this[`col_${data}`] = this[`col_${data}`] + 1;
                            item.innerText = sp;
                        })
                        this.$check(el,data);
                    });
                }
            }
            
            window.document.removeEventListener("keyup", this.$handler); 
            id_str = data
            vue_component = this;
            window.document.addEventListener("keyup", this.$handler);
        },
        Vue.prototype.$keyupText = async function(item,text){
            if(item != null){
                if (item.innerText === "") {
                    item.innerText = text
                    vue_component[`col_${id_str}`] += 1;
                }
            }
        },
        Vue.prototype.$enterUpdate = async function(data){
            vue_component[`word_check_${data}`] = "";

            for (let i = 0; i < vue_component[`length_${data}`]; i++) {
                let id_value = document.getElementById(`${data}_`+vue_component[`row_${data}`].toString() + '_' + i.toString());
                
                if(id_value != null){
                    vue_component[`word_check_${data}`] += id_value.innerText;
                }
            }
            
            let localstorage_Data = JSON.parse(localStorage.getItem(`answer_${data}`));

            if(localstorage_Data != null){
                localstorage_Data.push(vue_component[`word_check_${data}`]);
                localStorage.setItem(`answer_${data}`, JSON.stringify(localstorage_Data));
            }else{
                let answer_data = [vue_component[`word_check_${data}`]];
                localStorage.setItem(`answer_${data}`, JSON.stringify(answer_data));
            }

            let check_localCount = localStorage.getItem(`totalChallenge`);            

            if(check_localCount == null){
                localStorage.setItem(`totalChallenge`, 1);
            }else{
                localStorage.setItem(`totalChallenge`, parseInt(check_localCount)+1);
            }

            vue_component.$check(vue_component[`word_check_${data}`],data);    
        },
        Vue.prototype.$BackSpaceUpdate = async function(data){
            if (0 < vue_component[`col_${data}`] && vue_component[`col_${data}`] <= vue_component[`length_${data}`]) {
                vue_component[`col_${data}`] -= 1;
            }
            let item = document.getElementById(`${data}_`+vue_component[`row_${data}`].toString() + '_' + vue_component[`col_${data}`].toString());

            if(item != null){
                item.innerText = "";
            }
        },
        Vue.prototype.$check = async function(check_data,data){
            // 문서에 있는 단어검증 api 사이트가 터진건지 사이트 접속이 아예 안되서 만약 됐을시에 체크하는 로직을 구현했습니다.
            // 일단 무조건 true로 반환을 했습니다
            // 밑에 루틴을 태우면 단어 검증 성공 실패를 반환 합니다.
            // await this.$http.get(`/api/`+check_data+``).then(()=>{
            //     this[`bool_${data}`] = true
            // }).catch((err)=>{
            //     console.log(err);
            //     this[`bool_${data}`] = false
            // })
            this[`bool_${data}`] = true
            if(this[`bool_${data}`]){
                this.$colorChange(data);
                this[`row_${data}`] += 1;
                this[`col_${data}`] = 0;  
    
                if (!this[`gameOver_${data}`] && this[`row_${data}`] === this[`count_${data}`]) {
                    let check_localCount = localStorage.getItem(`totalChallenge`); 
                    let success_wordle = localStorage.getItem(`successWordle`); 

                    let end =  new Date();
                    let diff = end - this[`start_${data}`];
                    
                    this[`playtime_${data}`] = diff / 1000
                    this[`gameOver_${data}`] = true;
                    this[`totalChallenge_${data}`] = check_localCount

                    if(success_wordle != null){
                        this[`successWordle_${data}`] = localStorage.getItem(`successWordle`)
                        this[`percent_${data}`] = localStorage.getItem(`successWordle`) / check_localCount  * 100
                    }

                    let reset = [];
                    localStorage.setItem(`answer_${data}`, JSON.stringify(reset));
                    localStorage.setItem(`answer_local`, '');
                }
            }else{
                alert('단어 검증 실패, 단어를 찾을 수 없습니다.');
            }
        },
        Vue.prototype.$colorChange = async function(data){
            let answer_check = 0;

            for (let i = 0; i < this[`length_${data}`]; i++) {
                let id_value = document.getElementById(`${data}_`+this[`row_${data}`].toString() + '_' + i.toString());
                
                if(id_value != null){
                    let inputText = id_value.innerText;
                    let color = document.getElementById(`${inputText}_${data}`);

                    if (this[`answer_${data}`][i] === inputText) {
                        id_value.classList.add("answer");

                        color.classList.add("answer");
                        answer_check += 1;
                    }
                    else if (this[`answer_${data}`].includes(inputText)) {
                        
                        if(!color.classList.contains('answer')){
                            color.classList.add("have_word");
                        }
                        
                        id_value.classList.add("have_word");
                    }
                    else {
                        color.classList.add("wrong");
                        id_value.classList.add("wrong");
                    }
                    
                    if (answer_check === this[`length_${data}`]) {
                        let check_localCount = localStorage.getItem(`totalChallenge`);  
                        let success_wordle = localStorage.getItem(`successWordle`);            

                        if(success_wordle == null){
                            localStorage.setItem(`successWordle`, 1);
                        }else{
                            localStorage.setItem(`successWordle`, parseInt(success_wordle)+1);
                        }
                                              
                        this[`totalChallenge_${data}`] = check_localCount
                        this[`successWordle_${data}`] = localStorage.getItem(`successWordle`)
                        this[`percent_${data}`] = localStorage.getItem(`successWordle`) / check_localCount  * 100

                        let end =  new Date();
                        let diff = end - this[`start_${data}`];

                        this[`playtime_${data}`] = diff / 1000
                        this[`gameOver_${data}`] = true;

                        let reset = [];
                        localStorage.setItem(`answer_${data}`, JSON.stringify(reset));
                        localStorage.setItem(`answer_local`, '');
                    }
                }
            }
        },
        Vue.prototype.$goLink = async function(page){
            if(page != this.$route.path.substring(1)){
                this.$router.push({ name: page });
            }
        },
        Vue.prototype.$keyPress = async function(data,text){
            if(text === 'ENTER'){
                if(this[`col_${data}`] === this[`length_${data}`]){
                    this.$enterUpdate(data);
                }
            }else if(text === 'BACKSPACE'){
                this.$BackSpaceUpdate(data)
            }else{
                if (this[`col_${data}`] < this[`length_${data}`]) {
                    this.$keyupText(document.getElementById(`${data}_`+this[`row_${data}`].toString() + `_` + this[`col_${data}`].toString()),text)
                }
            }
        }
    },
}