"use strict";(self["webpackChunkwordlegame"]=self["webpackChunkwordlegame"]||[]).push([[645],{8645:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"abcde"}},[e("v-row",[e("v-col",{attrs:{cols:"3"}}),e("v-col",{attrs:{cols:"6"}},[e("v-card",{staticStyle:{width:"100%"}},[e("div",{staticClass:"card-header"},[t._v(" World 게임 (정답 고정) ")]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"dataTable",attrs:{id:"f_event"}},[t._l(t.count_f,(function(r,s){return[t._l(t.length_f,(function(t,r){return[e("span",{key:t[s],staticClass:"boxCss",attrs:{id:"f_"+s.toString()+"_"+r.toString()}})]}))]}))],2),t.gameOver_f?e("div",[e("h1",{staticStyle:{"text-align":"center"}},[t._v(" 게임이 끝났습니다. "),e("br"),t._v(" 정답 : "+t._s(t.answer_f)+" "),e("br"),t._v(" 게임 플레이 시간 : "+t._s(t.playtime_f.toFixed(2))+" 초 "),e("br"),t._v(" 현재까지 워들 승리 횟수 : "+t._s(t.successWordle_f)+" 회 "),e("br"),t._v(" 현재까지 워들 승률 : "+t._s(t.percent_f.toFixed(2))+"%"),e("br"),t._v(" 현재까지 워들 시도 횟수 : "+t._s(t.totalChallenge_f)+" 회 "),e("br")])]):t._e()])]),e("div",{staticStyle:{"margin-top":"10px"}},t._l(t.keyboard_str,(function(r,s){return e("div",{key:s},[t._l(r,(function(r){return e("div",{key:r,staticClass:"keyboard",attrs:{id:r.toUpperCase()+"_f"},on:{click:function(e){t.$keyPress("f",r.toUpperCase())}}},[t._v(" "+t._s(r.toUpperCase())+" ")])})),2==s?[e("div",{staticClass:"keyboard-sub",on:{click:function(e){return t.$keyPress("f","ENTER")}}},[t._v("Enter")]),e("div",{staticClass:"keyboard-sub",on:{click:function(e){return t.$keyPress("f","BACKSPACE")}}},[t._v("BackSpace")])]:t._e()],2)})),0)],1),e("v-col",{attrs:{cols:"3"}})],1)],1)},a=[],n={data(){return{count_f:6,length_f:5,row_f:0,col_f:0,gameOver_f:!1,answer_f:"WORLD",word_check_f:"",bool_f:!1,start_f:new Date,playtime_f:"-",event_handler:"",keyboard_str:["qwertyuiop","asdfghjkl","zxcvbnm"],totalChallenge_f:0,successWordle_f:0,percent_f:0}},created(){},mounted(){this.$keyupEvent("f")},destroyed(){},methods:{}},c=n,o=r(1001),_=(0,o.Z)(c,s,a,!1,null,"1f7c5b2e",null),l=_.exports}}]);
//# sourceMappingURL=645.53784767.js.map