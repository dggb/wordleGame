"use strict";(self["webpackChunkwordlegame"]=self["webpackChunkwordlegame"]||[]).push([[346],{346:function(t,s,e){e.r(s),e.d(s,{default:function(){return c}});var n=function(){var t=this,s=t._self._c;return s("div",[s("v-row",[s("v-col",{staticClass:"col_sub"}),s("v-col",{staticClass:"col_body"},[s("v-card",{staticStyle:{width:"100%"}},[s("div",{staticClass:"card-header"},[t._v(" World 게임 (정답 고정) "),s("v-dialog",{attrs:{transition:"dialog-top-transition",width:"auto"},model:{value:t.isActiveTop,callback:function(s){t.isActiveTop=s},expression:"isActiveTop"}},[[s("v-card",[s("v-toolbar",{staticStyle:{"text-align":"initial",color:"whitesmoke","font-size":"20px","font-weight":"bold","background-color":"lightslategrey"},attrs:{color:""}},[t._v("도움말")]),s("v-card-text",{staticStyle:{width:"420px","text-align":"left"}},[s("h1",{staticClass:"helpHeader"},[t._v("게임 방법")]),s("br"),s("p",[t._v(" 6번의 게임을 시도를 하시면 됩니다. ")]),s("ul",[s("li",[t._v(" 각각의 5개의 글자를 입력하시면 됩니다. ")]),s("li",[t._v(" 타일의 색상으로 정답을 유추 할 수 있습니다. ")])]),s("br"),s("p",{staticStyle:{color:"black"}},[t._v(" Ex) ")]),s("img",{attrs:{src:e(7515)}}),s("br"),s("p",[t._v("- 녹색은 단어 및 위치가 맞으면 색상이 표시 됩니다. ")]),s("img",{attrs:{src:e(1958)}}),s("br"),s("p",[t._v("- 황색은 단어만 맞고 위치가 틀렸을때 표시 됩니다. ")]),s("img",{attrs:{src:e(1079)}}),s("br"),s("p",[t._v("- 회색은 단어 및 위치가 모두 틀리면 표시 됩니다. ")])]),s("v-card-actions",{staticClass:"justify-end"},[s("v-btn",{attrs:{variant:"text"},on:{click:function(s){t.isActiveTop=!1}}},[t._v("Close")])],1)],1)]],2),s("button",{attrs:{type:"button"},on:{click:function(s){return t.help()}}},[s("svg",{staticClass:"game-icon",staticStyle:{filter:"invert(100%) sepia(100%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)","padding-top":"5px"},attrs:{xmlns:"http://www.w3.org/2000/svg",height:"28",viewBox:"4 4 24 24",width:"28","data-testid":"icon-help"}},[s("path",{attrs:{fill:"var(--color-tone-1)",d:"M14.8333 23H17.1666V20.6667H14.8333V23ZM15.9999 4.33334C9.55992 4.33334 4.33325 9.56001 4.33325 16C4.33325 22.44 9.55992 27.6667 15.9999 27.6667C22.4399 27.6667 27.6666 22.44 27.6666 16C27.6666 9.56001 22.4399 4.33334 15.9999 4.33334ZM15.9999 25.3333C10.8549 25.3333 6.66659 21.145 6.66659 16C6.66659 10.855 10.8549 6.66668 15.9999 6.66668C21.1449 6.66668 25.3333 10.855 25.3333 16C25.3333 21.145 21.1449 25.3333 15.9999 25.3333ZM15.9999 9.00001C13.4216 9.00001 11.3333 11.0883 11.3333 13.6667H13.6666C13.6666 12.3833 14.7166 11.3333 15.9999 11.3333C17.2833 11.3333 18.3333 12.3833 18.3333 13.6667C18.3333 16 14.8333 15.7083 14.8333 19.5H17.1666C17.1666 16.875 20.6666 16.5833 20.6666 13.6667C20.6666 11.0883 18.5783 9.00001 15.9999 9.00001Z"}})])])],1),s("div",{staticClass:"card-body"},[s("div",{staticClass:"dataTable",attrs:{id:"f_event"}},[t._l(t.count_f,(function(e,n){return[t._l(t.length_f,(function(t,e){return[s("span",{key:t[n],staticClass:"boxCss",attrs:{id:"f_"+n.toString()+"_"+e.toString()}})]}))]}))],2),t.gameOver_f?s("div",{staticClass:"fontCss"},[s("h1",{staticStyle:{"text-align":"center"}},[t._v(" 게임이 끝났습니다. "),s("br"),t._v(" 정답 : "+t._s(t.answer_f)+" "),s("br"),t._v(" 게임 플레이 시간 : "+t._s(t.playtime_f.toFixed(2))+" 초 "),s("br"),t._v(" 현재까지 워들 승리 횟수 : "+t._s(t.successWordle_f)+" 회 "),s("br"),t._v(" 현재까지 워들 승률 : "+t._s(t.percent_f.toFixed(2))+"%"),s("br"),t._v(" 현재까지 워들 시도 횟수 : "+t._s(t.totalChallenge_f)+" 회 "),s("br")])]):t._e()])]),s("div",{staticStyle:{"margin-top":"10px"}},t._l(t.keyboard_str,(function(e,n){return s("div",{key:n},[t._l(e,(function(e){return s("div",{key:e,staticClass:"keyboard",attrs:{id:e.toUpperCase()+"_f"},on:{click:function(s){t.$keyPress("f",e.toUpperCase())}}},[t._v(" "+t._s(e.toUpperCase())+" ")])})),2==n?[s("div",{staticClass:"keyboard-sub",on:{click:function(s){return t.$keyPress("f","ENTER")}}},[t._v("Enter")]),s("div",{staticClass:"keyboard-sub",on:{click:function(s){return t.$keyPress("f","BACKSPACE")}}},[t._v("BackSpace")])]:t._e()],2)})),0)],1),s("v-col",{staticClass:"col_sub"})],1)],1)},r=[],a={data(){return{count_f:6,length_f:5,row_f:0,col_f:0,gameOver_f:!1,answer_f:"WORLD",word_check_f:"",bool_f:!1,start_f:new Date,playtime_f:"-",event_handler:"",keyboard_str:["qwertyuiop","asdfghjkl","zxcvbnm"],totalChallenge_f:0,successWordle_f:0,percent_f:0,isActiveTop:!1}},created(){},mounted(){this.$keyupEvent("f")},destroyed(){},methods:{help(){this.isActiveTop=!0}}},A=a,o=e(1001),i=(0,o.Z)(A,n,r,!1,null,"18048f74",null),c=i.exports},7515:function(t){t.exports="data:image/png;base64,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"},1958:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAAAtCAYAAAD2rxo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATQSURBVHhe7ZvNK25dGMb9Ayb+ASMZSQYiUkoxUKQokjMwUQYyU2LC5DjeopSRISnFyNxEFFE6HZ/Jd+jgleT15uN+u5+9tvfZa99r3+voPNty9v2rq86x13Zd5+569tl7bbJAEBKClF1IDFJ2ITFI2YXEIGUXEoOUXUgMZNm/fvvrQ6WzOP/lQ6VDZY5TOtSaOKVDrYlTJqTsFtKhMscpHWpNnNKh1sQpE5FljxuTL1XAOKXj2nwkjwfnK2W3kI5r85E8HpyvlN1COq7NR/J4cL5SdgvpuDYfyePB+UrZLaTj2nwkjwfn+66yPzw8QEdHB2RlZRmVnZ0NVVVVMDQ0BEdHR+rMaEy+VAE5/f3zhzrb499/buD78ldyLScdbj4+k5OTgZngzHB278Xk+1nzIPf39zA9PQ3Nzc2Qn5//lq2oqAi6urpgbW0NXl5e1OpoON+MlT1dOTk5MD4+Dk9PT+o70Jh8qQJykrKHcS0PFrm8vDyQiVJ7ezucn5+rs8xwvrGUHYVXevwER2HypQrIScoexqU8m5ubUFJSEsgTpfr6eri4uFBn03C+v63sOEgf/G9ndXUVqqurA2saGhrg5uZGrQpj8qUKyEnKHsaVPI+Pj6lbFD8HXgiHh4ffuoF3AAsLC29X/dzcXJidnYXX19fUcROcb0bK7rO4uJj6h/hr8vLyYGNjQx0NY/KlCshJyh7GlTyHh4dQVlb2lqOtrQ3u7u7U0f/Bda2trbC0tKS+Eg3nm9Gyb29vQ2FhYWAdfgBMmHypAnKSsodxJY/ei4qKCjg5OVFHgzw/P6s/8XC+sV7ZCwoKYGtrSx0NY/KlCshJyh7GlTxnZ2dQWVkZyILdGB0dhYODA3YjwwTnm5Gy473V7u4u1NbWBtY0NjbC7e2tWhXG5EsVkJOUPYwrefBq3d/fH8iSLty9a2pqgqmpKbi8vFRn8XC+v63snGQ3RsqeDu6s4A5Leh5K2Jvu7u7Ps/WIgcfGxmSfXcoeAB9K8QqPV/L0XJRwZ2Zvb0+dScP5ZrTspaWl0NfXB/v7++y2EWLypQrIScoexrU8PrjlOD8/D52dnYG3qLrwgxH1wMr5ZvQB9Vcx+VIF5CRlD+Nq2XWw/HNzc1BcXBzIi8+A73lP4yNlt5AONx8fKXs0KysrsLy8rP4WZn19PfVuxs9bU1MDV1dX6mgYzlfKbiEdbj4+UnYafMM+MzOTejOK++24RU3d5uI2NW5J+nlNL598OF8pu4V0uPn4SNnDYNFHRkYC71/wAXVwcBBOT09TpceNjJ2dHWhpaQnknZiYUN+FJsoXkbJbSIebj49eLk4DAwPqTBqT72fLg6W22XZMFz684o8DR8H5StktpMPNx0fKbub6+hp6enoCV3hKeLy3tzfy9sWH85WyW0iHm4+PlD0avGU5Pj5O/a5DXV1d6h7e9/a3rfFHgW22rRHO911lzxQmX6qAcUrHtflIHg/OV8puIR3X5iN5PDhfKbuFdFybj+Tx4Hyl7BbScW0+kseD85WyW0jHtflIHg/OV8puIR3X5iN5PDjfyLJ/lHSoAsYpHSpznNKh1sQpHWpNnDIhZbeQDpU5TulQa+KUDrUmTpkgyy4IfyJSdiExSNmFxCBlFxKDlF1IDFJ2ISEA/AdqNfLHkZPkTQAAAABJRU5ErkJggg=="},1079:function(t){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=346.9f3754f1.js.map