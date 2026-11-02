/* LaLiga en datos — datos compartidos y modelo de predicción.
   Se actualiza cada lunes (clasificación, forma, calendario). */

const TEAMS = {
  BAR:{n:"FC Barcelona",short:"Barça",pj:11,g:10,e:0,p:1,gf:46,gc:12,form:"GGGPG",h:{pj:6,g:5,e:0,p:1},a:{pj:5,g:5,e:0,p:0},color:"#a50044"},
  ATM:{n:"Atlético de Madrid",short:"Atlético",pj:11,g:9,e:1,p:1,gf:22,gc:8,form:"GGGGG",h:{pj:5,g:4,e:1,p:0},a:{pj:6,g:5,e:0,p:1},color:"#cb3524"},
  RMA:{n:"Real Madrid",short:"Real Madrid",pj:11,g:9,e:0,p:2,gf:28,gc:10,form:"PGGGG",h:{pj:5,g:5,e:0,p:0},a:{pj:6,g:4,e:0,p:2},color:"#1a2341"},
  BET:{n:"Real Betis",short:"Betis",pj:11,g:7,e:2,p:2,gf:18,gc:15,form:"EGPEG",h:{pj:6,g:5,e:0,p:1},a:{pj:5,g:2,e:2,p:1},color:"#00a650"},
  RSO:{n:"Real Sociedad",short:"Real Sociedad",pj:11,g:6,e:1,p:4,gf:20,gc:20,form:"GGGGP",h:{pj:5,g:3,e:1,p:1},a:{pj:6,g:3,e:0,p:3},color:"#0066b3"},
  SEV:{n:"Sevilla FC",short:"Sevilla",pj:11,g:5,e:2,p:4,gf:17,gc:19,form:"PEPGP",h:{pj:5,g:3,e:0,p:2},a:{pj:6,g:2,e:2,p:2},color:"#d2001c"},
  ALA:{n:"Deportivo Alavés",short:"Alavés",pj:11,g:3,e:3,p:5,gf:15,gc:17,form:"EPPPE",h:{pj:6,g:3,e:1,p:2},a:{pj:5,g:0,e:2,p:3},color:"#1c4f9c"},
  CEL:{n:"Celta de Vigo",short:"Celta",pj:11,g:2,e:6,p:3,gf:10,gc:10,form:"GEGEP",h:{pj:6,g:2,e:2,p:2},a:{pj:5,g:0,e:4,p:1},color:"#8ac3ee",dark:true},
  DEP:{n:"RC Deportivo",short:"Deportivo",pj:10,g:2,e:5,p:3,gf:13,gc:13,form:"PEPEP",h:{pj:5,g:1,e:3,p:1},a:{pj:5,g:1,e:2,p:2},color:"#0a4c9b"},
  OSA:{n:"CA Osasuna",short:"Osasuna",pj:10,g:3,e:2,p:5,gf:10,gc:20,form:"PEPGP",h:{pj:5,g:2,e:2,p:1},a:{pj:5,g:1,e:0,p:4},color:"#ab122b"},
  ATH:{n:"Athletic Club",short:"Athletic",pj:10,g:4,e:3,p:3,gf:14,gc:10,form:"EEPGG",h:{pj:6,g:3,e:2,p:1},a:{pj:4,g:1,e:1,p:2},color:"#ee2523"},
  VIL:{n:"Villarreal CF",short:"Villarreal",pj:11,g:3,e:3,p:5,gf:15,gc:15,form:"GPEPG",h:{pj:5,g:1,e:1,p:3},a:{pj:6,g:2,e:2,p:2},color:"#ffe667",dark:true},
  RAY:{n:"Rayo Vallecano",short:"Rayo",pj:10,g:3,e:3,p:4,gf:15,gc:20,form:"GEEPG",h:{pj:5,g:3,e:1,p:1},a:{pj:5,g:0,e:2,p:3},color:"#c8102e"},
  GET:{n:"Getafe CF",short:"Getafe",pj:11,g:3,e:3,p:5,gf:8,gc:16,form:"GPEPG",h:{pj:6,g:3,e:3,p:0},a:{pj:5,g:0,e:0,p:5},color:"#005bac"},
  ESP:{n:"RCD Espanyol",short:"Espanyol",pj:11,g:3,e:2,p:6,gf:13,gc:14,form:"PEPGP",h:{pj:5,g:1,e:1,p:3},a:{pj:6,g:2,e:1,p:3},color:"#1455a3"},
  RAC:{n:"Racing de Santander",short:"Racing",pj:11,g:3,e:2,p:6,gf:15,gc:29,form:"PEPPG",h:{pj:6,g:3,e:2,p:1},a:{pj:5,g:0,e:0,p:5},color:"#00693e"},
  LEV:{n:"Levante UD",short:"Levante",pj:11,g:2,e:4,p:5,gf:16,gc:21,form:"EEPGP",h:{pj:5,g:2,e:1,p:2},a:{pj:6,g:0,e:3,p:3},color:"#00246b"},
  ELC:{n:"Elche CF",short:"Elche",pj:11,g:2,e:4,p:5,gf:14,gc:18,form:"GEEGP",h:{pj:5,g:0,e:1,p:4},a:{pj:6,g:2,e:3,p:1},color:"#00843d"},
  VAL:{n:"Valencia CF",short:"Valencia",pj:11,g:2,e:3,p:6,gf:8,gc:17,form:"PEEGP",h:{pj:6,g:0,e:2,p:4},a:{pj:5,g:2,e:1,p:2},color:"#f7941e",dark:true},
  MAL:{n:"Málaga CF",short:"Málaga",pj:11,g:0,e:5,p:6,gf:8,gc:21,form:"PEPPE",h:{pj:5,g:0,e:3,p:2},a:{pj:6,g:0,e:2,p:4},color:"#0e3b82"}
};

/* Jornada 11 — disputados (30 oct - 1 nov) y pendiente el Deportivo-Osasuna (2 nov) */
const J11_PLAYED = [
  {h:"VIL",a:"ESP",hs:0,as:1,when:"Vie 30 oct"},
  {h:"LEV",a:"ATM",hs:0,as:2,when:"Sáb 31 oct"},
  {h:"RAY",a:"CEL",hs:3,as:0,when:"Sáb 31 oct"},
  {h:"BET",a:"MAL",hs:2,as:1,when:"Sáb 31 oct"},
  {h:"BAR",a:"ALA",hs:6,as:1,when:"Sáb 31 oct"},
  {h:"GET",a:"SEV",hs:3,as:1,when:"Dom 1 nov"},
  {h:"RAC",a:"RMA",hs:0,as:3,when:"Dom 1 nov"},
  {h:"ELC",a:"VAL",hs:0,as:1,when:"Dom 1 nov"},
  {h:"ATH",a:"RSO",hs:2,as:1,when:"Dom 1 nov"}
];
const J11_PENDING = [
  {h:"DEP",a:"OSA",when:"Lun 2 nov · 21:00"}
];

/* Jornada 12 — próximo fin de semana */
const FIXTURES = [
  {h:"SEV",a:"ALA",when:"Vie 6 nov · 21:00"},
  {h:"MAL",a:"RAC",when:"Sáb 7 nov · 14:00"},
  {h:"ESP",a:"DEP",when:"Sáb 7 nov · 16:15"},
  {h:"OSA",a:"ATH",when:"Sáb 7 nov · 18:30"},
  {h:"VAL",a:"RMA",when:"Sáb 7 nov · 21:00"},
  {h:"ELC",a:"BET",when:"Dom 8 nov · 14:00"},
  {h:"RSO",a:"RAY",when:"Dom 8 nov · 16:15"},
  {h:"CEL",a:"LEV",when:"Dom 8 nov · 18:30"},
  {h:"VIL",a:"GET",when:"Dom 8 nov · 18:30"},
  {h:"ATM",a:"BAR",when:"Dom 8 nov · 21:00"}
];

const PRESETS = { tabla:{form:0,loc:0,adv:25,draw:50}, mixto:{form:55,loc:55,adv:28,draw:50} };

function clamp(v,a,b){return Math.max(a,Math.min(b,v));}
function formPts(f){let s=0;for(const c of f) s += c==="G"?3:c==="E"?1:0; return s/5;}
function ppg(t){return (t.g*3+t.e)/t.pj;}
function gdpg(t){return (t.gf-t.gc)/t.pj;}
function homePpg(t){return t.h.pj? (t.h.g*3+t.h.e)/t.h.pj : ppg(t);}
function awayPpg(t){return t.a.pj? (t.a.g*3+t.a.e)/t.a.pj : ppg(t);}
function teamScore(code,isHome,p){
  const t=TEAMS[code]; const wForm=p.form/100, wLoc=p.loc/100;
  const base = ppg(t)*(1-wForm) + formPts(t.form)*wForm;
  const locAdj = isHome ? (homePpg(t)-ppg(t)) : (awayPpg(t)-ppg(t));
  let s = base + gdpg(t)*0.35 + locAdj*wLoc;
  if(isHome) s += p.adv/100;
  return s;
}
function matchProbs(hCode,aCode,p){
  const sh=teamScore(hCode,true,p), sa=teamScore(aCode,false,p);
  const diff=sh-sa;
  let pH=clamp(0.5+diff*0.155,0.04,0.9);
  let pD=clamp((p.draw/100)*0.34-Math.abs(diff)*0.05,0.08,0.34);
  let pA=1-pH-pD;
  if(pA<0.03){const rest=0.97, ratio=pH/(pH+pD); pA=0.03; pH=rest*ratio; pD=rest*(1-ratio);}
  const sum=pH+pD+pA;
  return {pH:pH/sum,pD:pD/sum,pA:pA/sum,diff};
}
function pct(v){return Math.round(v*100)+"%";}
function initials(code){return code;} // 3-letter codes already short and legible
function standings(){
  return Object.entries(TEAMS).map(([code,t])=>({code,t,pts:t.g*3+t.e,dg:t.gf-t.gc}))
    .sort((a,b)=> b.pts-a.pts || b.dg-a.dg || b.t.gf-a.t.gf);
}
function crestStyle(code){
  const t=TEAMS[code];
  return `background:${t.color};color:${t.dark?'#14181f':'#fff'}`;
}
