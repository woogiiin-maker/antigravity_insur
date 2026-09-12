import{c as E,r as $,j as e,f as F,X as B,F as _,M as I,N as J,O as U}from"./index-Cn1XKq0X.js";/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};H.node;const Y=E(H);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O={name:"file-down",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]};O.node;const T=E(O);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W={name:"printer",size:24,node:[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]};W.node;const G=E(W),C=[{id:"cancer",title:"암진단비",description:"일반암, 특정암, 소액·유사암 등 암 진단비"},{id:"brain",title:"뇌혈관질환진단비",description:"뇌혈관질환, 뇌졸중, 뇌출혈, 양성뇌종양 진단비"},{id:"heart",title:"허혈성심질환진단비",description:"허혈성심(장)질환, 급성심근경색증, 심혈관특정 진단비"},{id:"cancerMajorTreatment",title:"암주요치료비",description:"암주요치료비Plus, 항암방사선·약물, 중입자, 표적치료"},{id:"cancerLivingExpense",title:"암주요치료생활비",description:"암(유사암) 주요치료생활비 및 암치료지원금"},{id:"circulatoryTreatment",title:"순환계질환(진단·치료비)",description:"순환계질환진단, 신특정순환계 주요치료비, 혈전용해치료 등"},{id:"diseaseDisability",title:"질병후유장해",description:"질병으로 인한 후유장해(3%~ 또는 80% 이상)"},{id:"injuryDisability",title:"상해후유장해",description:"상해사고로 인한 후유장해(3%~100%)"},{id:"diseaseSurgery",title:"질병수술비",description:"질병 1~5종 수술비 및 다빈도 질병수술 담보"},{id:"injurySurgery",title:"상해수술비",description:"상해 1~5종 수술비 및 일반 상해수술 담보"}];function K(t){if(!t||t<=0)return"0원";const d=Math.floor(t/1e8),h=Math.floor(t%1e8/1e4),w=t%1e4;let l="";return d>0&&(l+=`${d}억 `),h>0&&(l+=`${h.toLocaleString()}만 `),!d&&!h&&w>0?l+=`${w.toLocaleString()}원`:l.trim()&&(l+="원"),l.replace(/\s+원$/,"원").trim()}function X(t){return t?t.includes("KB")&&t.includes("라이프")?"KB라이프":t.includes("KB")?"KB손해":t.includes("현대")?"현대해상":t.includes("DB")||t.includes("동부")?"DB손해":t.includes("삼성")?"삼성생명":t.includes("메리츠")?"메리츠화재":t.includes("흥국")&&t.includes("생명")?"흥국생명":t.includes("흥국")?"흥국화재":t.includes("한화")?"한화생명":t.includes("교보")?"교보생명":t.includes("신한")?"신한라이프":t.replace(/(주식회사|화재보험|해상보험)/g,"").trim():"기타"}function q(t){return t?t.replace(/^(\(무\)|무배당)/,"").replace(/_세만기\s*해약환급금.*$/,"").replace(/\(Hi\d+\).*$/,"").replace(/\(\d{4,}\)/g,"").replace(/\s*플랜$/,"").trim():""}function V(t,d){const h=Array.from(new Set(t.map(g=>g.가족이름.trim()).filter(Boolean))),w=d&&d.length>0?d:h,l=new Date,b=`${l.getFullYear()}년 ${String(l.getMonth()+1).padStart(2,"0")}월 ${String(l.getDate()).padStart(2,"0")}일`,j=w.map(g=>{var A;const x=t.filter(r=>r.가족이름.trim()===g),P=((A=x[0])==null?void 0:A.관계)||"",c=x.filter(r=>{const a=r.세부보장명||"";return((r.보장분류||"")==="암"||/암/.test(a))&&/진단/.test(a)&&!/통원|수술|입원|치료자금|치료비|약제비|생활|주요치료/.test(a)}),k=x.filter(r=>{const a=r.세부보장명||"";return((r.보장분류||"")==="뇌질환"||/뇌혈관|뇌졸중|뇌출혈/.test(a))&&/진단/.test(a)&&!/수술|입원|치료|재활/.test(a)}),f=x.filter(r=>{const a=r.세부보장명||"";return((r.보장분류||"")==="심장질환"||/허혈|심근경색|심장|순환계/.test(a))&&/진단/.test(a)&&!/수술|입원|치료|주요치료/.test(a)}),D=x.filter(r=>{const a=r.세부보장명||"",i=r.보장분류||"";return/질병.*(후유장해|장해|고도장해)|특정고도장해/.test(a)||i==="후유장해"&&/질병/.test(a)&&!/상해/.test(a)}),s=x.filter(r=>{const a=r.세부보장명||"",i=r.보장분류||"";return/상해.*(후유장해|장해)/.test(a)||i==="후유장해"&&/상해/.test(a)&&!/질병|질병사망/.test(a)}),o=x.filter(r=>{const a=r.세부보장명||"",i=r.보장분류||"";return(/상해.*(수술|1[-~]5종)/.test(a)||i==="수술·입원"&&/상해수술/.test(a))&&!/질병/.test(a)}),p=x.filter(r=>{const a=r.세부보장명||"",i=r.보장분류||"";return(/질병.*(수술|1[-~]5종)|수술급여금/.test(a)||i==="수술·입원"&&/질병수술/.test(a))&&!/상해수술/.test(a)}),m=x.filter(r=>{const a=r.세부보장명||"";return/암.*(주요치료|치료비|치료자금|치료특약|항암|방사선|약물치료|표적항암|중입자)/.test(a)&&!/생활|지원비|생활자금/.test(a)}),y=x.filter(r=>{const a=r.세부보장명||"";return/암.*(주요치료.*생활|치료.*생활|생활자금|생활비|케어)/.test(a)}),n=x.filter(r=>{const a=r.세부보장명||"";return/순환계.*(주요치료|치료)|심뇌혈관.*(주요치료|치료)|2대질환.*치료|뇌혈관.*수술|허혈.*수술|심혈관.*수술|혈전용해/.test(a)});function z(r,a){const i=a||"";return r==="cancer"?/^(\d+\s*)?(유사암|소액암|상피내암|경계성|갑상선|기타피부)\s*진단/.test(i)?{score:20,isPrimary:!1}:/납입지원/.test(i)?{score:15,isPrimary:!1}:/(특정암|고액암|재진단암|여성특정암|다발성소아암|소아백혈병)/.test(i)?{score:60,isPrimary:!1}:/(암진단비|암진단담보|암진단특약|암진단급여금|암진단\s*([IⅠⅡ1-9]+|\b))/.test(i)?{score:100,isPrimary:!0,label:"핵심"}:{score:35,isPrimary:!1}:r==="brain"?/뇌혈관질환진단/.test(i)?{score:100,isPrimary:!0,label:"핵심"}:/뇌졸중진단/.test(i)?{score:70,isPrimary:!1}:/뇌출혈진단/.test(i)?{score:50,isPrimary:!1}:/(양성뇌종양|뇌병변)/.test(i)?{score:20,isPrimary:!1}:{score:30,isPrimary:!1}:r==="heart"?/허혈(성)?(심장|심)?질환진단/.test(i)?{score:100,isPrimary:!0,label:"핵심"}:/심근경색.*진단/.test(i)?{score:60,isPrimary:!1}:/심혈관|특정심장/.test(i)?{score:40,isPrimary:!1}:{score:20,isPrimary:!1}:r==="cancerMajorTreatment"?/암\s*주요치료/.test(i)?{score:100,isPrimary:!0,label:"핵심"}:/(표적항암|중입자)/.test(i)?{score:70,isPrimary:!1}:/(항암방사선|항암약물)/.test(i)?{score:50,isPrimary:!1}:{score:30,isPrimary:!1}:r==="cancerLivingExpense"?/암.*(주요치료.*생활|치료.*생활|생활자금|생활비)/.test(i)?{score:100,isPrimary:!0,label:"생활비"}:{score:30,isPrimary:!1}:r==="circulatoryTreatment"?/순환계.*(진단|주요치료)/.test(i)?{score:100,isPrimary:!0,label:"핵심"}:/심뇌혈관.*(주요치료|치료)|2대질환.*치료/.test(i)?{score:70,isPrimary:!1}:/혈전/.test(i)?{score:50,isPrimary:!1}:{score:30,isPrimary:!1}:r==="diseaseDisability"?/(80%|고도장해|고도후유장해|특정고도장해)/.test(i)?{score:100,isPrimary:!0,label:"고도장해"}:/질병.*(후유장해|장해)/.test(i)?{score:95,isPrimary:!0,label:"후유장해"}:{score:50,isPrimary:!1}:r==="injuryDisability"?/상해.*(후유장해|장해)/.test(i)&&!/80%|고도/.test(i)?{score:100,isPrimary:!0,label:"후유장해"}:{score:50,isPrimary:!1}:r==="diseaseSurgery"?/(1[-~]5종|1[-~]7종|1[-~]8종|종수술)/.test(i)?{score:100,isPrimary:!0,label:"종수술"}:/질병수술(비|담보)/.test(i)?{score:90,isPrimary:!0,label:"기본수술"}:{score:40,isPrimary:!1}:r==="injurySurgery"?/(1[-~]5종|1[-~]7종|1[-~]8종|종수술)/.test(i)?{score:100,isPrimary:!0,label:"종수술"}:/상해수술(비|담보)/.test(i)?{score:90,isPrimary:!0,label:"기본수술"}:{score:40,isPrimary:!1}:{score:10,isPrimary:!1}}function v(r,a,i){const S=i.map(u=>{const N=z(r,u.세부보장명);return{company:X(u.보험사),policyName:q(u.보험상품명),riderName:u.세부보장명,amountWon:u.보장금액_원||0,amountText:u.보장금액||`${(u.보장금액_원||0).toLocaleString()}원`,originalRecord:u,isPrimary:N.isPrimary,priorityScore:N.score,label:N.label}});S.sort((u,N)=>(N.priorityScore||0)-(u.priorityScore||0)||N.amountWon-u.amountWon);const M=S.reduce((u,N)=>u+N.amountWon,0),R=S.length>0&&M>0;return{categoryId:r,categoryTitle:a,isCovered:R,totalAmountWon:M,totalAmountText:R?K(M):"미가입",items:S}}return{memberName:g,relation:P,coverages:{cancer:v("cancer","암진단비",c),brain:v("brain","뇌혈관질환진단비",k),heart:v("heart","허혈성심질환진단비",f),cancerMajorTreatment:v("cancerMajorTreatment","암주요치료비",m),cancerLivingExpense:v("cancerLivingExpense","암주요치료생활비",y),circulatoryTreatment:v("circulatoryTreatment","순환계질환(진단·치료비)",n),diseaseDisability:v("diseaseDisability","질병후유장해",D),injuryDisability:v("injuryDisability","상해후유장해",s),diseaseSurgery:v("diseaseSurgery","질병수술비",p),injurySurgery:v("injurySurgery","상해수술비",o)}}});return{title:"가족 핵심보장 비교 분석표",baseDate:b,members:j}}function L(t){const d=Math.max(1,t.members.length),h=Math.floor(82/d),w=t.members.map(b=>`
    <th style="border: 1px solid #94a3b8; background-color: #f1f5f9; padding: 9px 6px; text-align: center; width: ${h}%;">
      <div style="font-size: 14px; font-weight: 800; color: #0f172a;">${b.memberName}</div>
      ${b.relation?`<div style="font-size: 10.5px; font-weight: 600; color: #2563eb; margin-top: 2px;">(${b.relation})</div>`:""}
    </th>
  `).join(""),l=C.map((b,j)=>{const g=j%2===0?"#ffffff":"#f8fafc",x=t.members.map(P=>{const c=P.coverages[b.id];if(!c.isCovered)return`
          <td style="border: 1px solid #94a3b8; padding: 8px 6px; vertical-align: top; text-align: center; background-color: ${g};">
            <span style="display: inline-block; padding: 2px 8px; font-size: 10.5px; font-weight: bold; color: #64748b; background-color: #e2e8f0; border-radius: 9999px;">
              미가입
            </span>
          </td>
        `;const k=c.items.map(f=>`
        <div style="margin-bottom: 4px; padding: 4px 6px; background-color: ${f.isPrimary?"#eff6ff":"#ffffff"}; border: 1px solid ${f.isPrimary?"#93c5fd":"#e2e8f0"}; border-radius: 5px; text-align: left;">
          <div style="font-size: 10.5px; font-weight: bold; color: #1e40af;">
            ${f.isPrimary?`<span style="display:inline-block; font-size:9px; background-color:#2563eb; color:#ffffff; padding:0.5px 4px; border-radius:3px; margin-right:3px; vertical-align:middle;">${f.label||"핵심"}</span>`:""}[${f.company}] <span style="font-weight: normal; color: #475569;">${f.policyName}</span>
          </div>
          <div style="font-size: 10.5px; margin-top: 2px; display: flex; justify-content: space-between; align-items: baseline;">
            <span style="color: #334155; font-size: 10px;">• ${f.riderName}</span>
            <span style="color: #0f172a; font-weight: 800; font-size: 10.5px; margin-left: 4px; white-space: nowrap;">${f.amountText}</span>
          </div>
        </div>
      `).join("");return`
        <td style="border: 1px solid #94a3b8; padding: 8px 6px; vertical-align: top; background-color: ${g};">
          <div style="margin-bottom: 6px; text-align: center;">
            <span style="display: inline-block; padding: 2px 8px; font-size: 10.5px; font-weight: bold; color: #1e3a8a; background-color: #dbeafe; border-radius: 9999px;">
              가입
            </span>
            <div style="font-size: 12.5px; font-weight: 800; color: #2563eb; margin-top: 3px;">
              총 ${c.totalAmountText}
            </div>
          </div>
          ${k}
        </td>
      `}).join("");return`
      <tr>
        <td style="border: 1px solid #94a3b8; background-color: #e0edff; padding: 9px 8px; vertical-align: middle; text-align: center; width: 18%;">
          <div style="font-size: 12.5px; font-weight: 800; color: #1e3a8a;">${b.title}</div>
          <div style="font-size: 10px; color: #475569; margin-top: 3px; line-height: 1.3;">${b.description}</div>
        </td>
        ${x}
      </tr>
    `}).join("");return`
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${t.title}</title>
  <style>
    @page {
      size: A4 landscape;
      margin: 8mm 8mm 8mm 8mm;
    }
    body {
      font-family: 'Malgun Gothic', '맑은 고딕', AppleSDGothicNeo, sans-serif;
      color: #0f172a;
      margin: 0;
      padding: 12px;
      background-color: #ffffff;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .header-box {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-bottom: 2.5px solid #2563eb;
      padding-bottom: 6px;
    }
    .title {
      font-size: 18px;
      font-weight: 900;
      color: #1e3a8a;
    }
    .date {
      font-size: 11px;
      color: #64748b;
      font-weight: bold;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
    }
    th, td {
      word-break: keep-all;
      overflow-wrap: break-word;
      line-height: 1.35;
    }
  </style>
</head>
<body>
  <div class="header-box">
    <div class="title">🛡️ ${t.title}</div>
    <div class="date">기준일자: ${t.baseDate} (실제 증권 분석 결과)</div>
  </div>

  <table>
    <thead>
      <tr>
        <th style="border: 1px solid #94a3b8; background-color: #dbeafe; padding: 8px 6px; text-align: center; font-size: 12px; font-weight: bold; color: #1e3a8a; width: 18%;">
          보장 구분
        </th>
        ${w}
      </tr>
    </thead>
    <tbody>
      ${l}
    </tbody>
  </table>

  <div style="margin-top: 10px; font-size: 10px; color: #64748b; text-align: right;">
    ※ 본 비교표는 등록된 실제 보험증권 데이터에서 10대 핵심보장을 추출하여 보험사 및 상품별로 집계한 결과입니다.
  </div>
</body>
</html>
  `.trim()}function Q(t){const d=JSON.stringify(t),h=JSON.stringify(C);return`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <title>가족 10대 핵심보장 모바일 비교표</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", "Malgun Gothic", sans-serif;
      background-color: #f1f5f9;
      color: #0f172a;
      line-height: 1.5;
      padding-bottom: 40px;
    }
    /* 상단 앱바 */
    .app-header {
      background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
      color: #ffffff;
      padding: 18px 16px 14px;
      position: sticky;
      top: 0;
      z-index: 50;
      box-shadow: 0 4px 12px rgba(30, 64, 175, 0.15);
    }
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .app-title {
      font-size: 18px;
      font-weight: 900;
      letter-spacing: -0.3px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .badge-date {
      font-size: 10px;
      background: rgba(255, 255, 255, 0.2);
      padding: 3px 8px;
      border-radius: 9999px;
      font-weight: 600;
    }
    .header-desc {
      font-size: 11.5px;
      opacity: 0.9;
      margin-top: 4px;
    }

    /* 가족 탭 스크롤 바 */
    .family-tabs-wrap {
      background-color: #ffffff;
      border-bottom: 1px solid #e2e8f0;
      padding: 10px 12px;
      position: sticky;
      top: 67px;
      z-index: 40;
      overflow-x: auto;
      white-space: nowrap;
      display: flex;
      gap: 8px;
      -webkit-overflow-scrolling: touch;
    }
    .family-tabs-wrap::-webkit-scrollbar {
      display: none;
    }
    .tab-btn {
      padding: 8px 14px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 700;
      border: 1px solid #e2e8f0;
      background-color: #f8fafc;
      color: #475569;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: all 0.2s;
    }
    .tab-btn.active {
      background-color: #2563eb;
      color: #ffffff;
      border-color: #2563eb;
      box-shadow: 0 2px 6px rgba(37, 99, 235, 0.25);
    }

    /* 메인 콘텐츠 영역 */
    .content-container {
      padding: 14px 12px;
      max-width: 600px;
      margin: 0 auto;
    }

    /* 1. 개인별 모바일 상세 카드 뷰 */
    .coverage-card {
      background-color: #ffffff;
      border-radius: 16px;
      padding: 16px 14px;
      margin-bottom: 12px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 10px;
      border-bottom: 1px solid #f1f5f9;
      padding-bottom: 10px;
    }
    .card-title-group {
      flex: 1;
    }
    .card-title {
      font-size: 15px;
      font-weight: 800;
      color: #0f172a;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .card-desc {
      font-size: 11px;
      color: #64748b;
      margin-top: 2px;
    }
    .status-pill {
      font-size: 11px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 20px;
      white-space: nowrap;
    }
    .status-pill.covered {
      background-color: #dbeafe;
      color: #1e40af;
    }
    .status-pill.uncovered {
      background-color: #f1f5f9;
      color: #94a3b8;
    }

    /* 총 가입금액 강조 박스 */
    .total-amount-box {
      background-color: #eff6ff;
      border-radius: 10px;
      padding: 10px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    .total-label {
      font-size: 12px;
      font-weight: 700;
      color: #1e40af;
    }
    .total-val {
      font-size: 16px;
      font-weight: 900;
      color: #1d4ed8;
    }

    /* 각 특약 상세 목록 */
    .policy-item {
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 9px 10px;
      margin-top: 6px;
      font-size: 11.5px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .policy-item:active {
      background-color: #e0edff;
    }
    .policy-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2px;
    }
    .policy-comp {
      font-weight: 800;
      color: #1e3a8a;
      font-size: 11px;
    }
    .policy-amt {
      font-weight: 800;
      color: #0f172a;
      font-size: 12px;
    }
    .policy-name {
      color: #475569;
      font-size: 11px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .policy-rider {
      color: #64748b;
      font-size: 11px;
      margin-top: 2px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .detail-hint {
      color: #2563eb;
      font-size: 10px;
      font-weight: bold;
    }

    /* 2. 전체 비교 모드 */
    .all-compare-card {
      background-color: #ffffff;
      border-radius: 14px;
      padding: 14px;
      margin-bottom: 12px;
      border: 1px solid #e2e8f0;
    }
    .member-sub-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      border-bottom: 1px solid #f1f5f9;
      font-size: 12px;
    }
    .member-sub-row:last-child {
      border-bottom: none;
    }
    .member-name-tag {
      font-weight: 800;
      color: #1e293b;
      width: 70px;
    }
    .member-cov-val {
      font-weight: 800;
      color: #2563eb;
      text-align: right;
    }

    /* 모바일 팝업 바텀 시트 (약관 및 보장내용 확인) */
    .sheet-overlay {
      position: fixed;
      inset: 0;
      background-color: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(2px);
      z-index: 100;
      display: none;
      align-items: flex-end;
      justify-content: center;
    }
    .sheet-overlay.open {
      display: flex;
      animation: fadeIn 0.2s ease-out;
    }
    .bottom-sheet {
      background-color: #ffffff;
      width: 100%;
      max-width: 500px;
      max-height: 80vh;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      padding: 20px 16px;
      overflow-y: auto;
      box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.15);
      animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .sheet-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 12px;
      margin-bottom: 14px;
    }
    .sheet-title {
      font-size: 16px;
      font-weight: 800;
      color: #0f172a;
    }
    .close-btn {
      background: none;
      border: none;
      font-size: 20px;
      color: #94a3b8;
      cursor: pointer;
      padding: 4px;
    }
    .sheet-content-box {
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 12px;
      font-size: 12.5px;
      line-height: 1.6;
      color: #334155;
      white-space: pre-wrap;
      word-break: break-all;
      margin-top: 8px;
    }
    .sheet-info-row {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      padding: 6px 0;
      border-bottom: 1px solid #f1f5f9;
    }
    .info-label {
      color: #64748b;
      font-weight: 600;
    }
    .info-val {
      color: #0f172a;
      font-weight: 700;
      text-align: right;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
  </style>
</head>
<body>

  <!-- 상단 앱 헤더 -->
  <header class="app-header">
    <div class="header-top">
      <div class="app-title">
        <span>🛡️</span>
        <span>가족 10대 핵심보장</span>
      </div>
      <div class="badge-date">${t.baseDate} 기준</div>
    </div>
    <div class="header-desc">
      암·뇌·심장·후유장해·수술비·주요치료비 가입 비교
    </div>
  </header>

  <!-- 가로 스크롤 가족 선택 탭 -->
  <nav class="family-tabs-wrap" id="familyTabs">
    <!-- JS 동적 생성 -->
  </nav>

  <!-- 메인 보장 피드 -->
  <main class="content-container" id="mainFeed">
    <!-- JS 동적 생성 -->
  </main>

  <!-- 모바일 터치 상세정보 바텀 시트 -->
  <div class="sheet-overlay" id="sheetOverlay">
    <div class="bottom-sheet" id="bottomSheet">
      <div class="sheet-header">
        <div class="sheet-title" id="sheetRiderTitle">보장 상세 정보</div>
        <button class="close-btn" onclick="closeSheet()">✕</button>
      </div>
      <div id="sheetBody">
        <!-- JS 동적 주입 -->
      </div>
    </div>
  </div>

  <script>
    const reportData = ${d};
    const categoryDefs = ${h};

    let selectedTab = 'ALL'; // 'ALL' or memberName

    function init() {
      renderTabs();
      renderFeed();
    }

    // 1. 가족 탭 렌더링
    function renderTabs() {
      const tabsWrap = document.getElementById('familyTabs');
      let html = \`<button class="tab-btn \${selectedTab === 'ALL' ? 'active' : ''}" onclick="selectTab('ALL')">👥 전체 비교</button>\`;

      reportData.members.forEach(m => {
        const isActive = selectedTab === m.memberName;
        html += \`<button class="tab-btn \${isActive ? 'active' : ''}" onclick="selectTab('\${m.memberName}')">
          👤 \${m.memberName} \${m.relation ? \`(\${m.relation})\` : ''}
        </button>\`;
      });

      tabsWrap.innerHTML = html;
    }

    function selectTab(tabName) {
      selectedTab = tabName;
      renderTabs();
      renderFeed();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 2. 메인 피드 렌더링
    function renderFeed() {
      const container = document.getElementById('mainFeed');

      // (A) 개별 가족 선택 모드 (10개 보장 항목 카드 피드)
      if (selectedTab !== 'ALL') {
        const member = reportData.members.find(m => m.memberName === selectedTab);
        if (!member) return;

        let html = '';
        categoryDefs.forEach((def, idx) => {
          const cov = member.coverages[def.id];
          const isCovered = cov && cov.isCovered;

          html += \`
            <div class="coverage-card">
              <div class="card-header">
                <div class="card-title-group">
                  <div class="card-title">
                    <span>\${idx + 1}. \${def.title}</span>
                  </div>
                  <div class="card-desc">\${def.description}</div>
                </div>
                <div class="status-pill \${isCovered ? 'covered' : 'uncovered'}">
                  \${isCovered ? '가입' : '미가입'}
                </div>
              </div>
          \`;

          if (isCovered) {
            html += \`
              <div class="total-amount-box">
                <span class="total-label">\${member.memberName} 님 총 보장금액</span>
                <span class="total-val">\${cov.totalAmountText}</span>
              </div>
              <div style="margin-top: 8px;">
            \`;

            cov.items.forEach(it => {
              const recJson = encodeURIComponent(JSON.stringify(it.originalRecord));
              html += \`
                <div class="policy-item" onclick="openDetailModal('\${recJson}')">
                  <div class="policy-head">
                    <span class="policy-comp">[\${it.company}]</span>
                    <span class="policy-amt">\${it.amountText}</span>
                  </div>
                  <div class="policy-name">\${it.policyName}</div>
                  <div class="policy-rider">
                    <span>• \${it.riderName}</span>
                    <span class="detail-hint">약관보기 ↗</span>
                  </div>
                </div>
              \`;
            });

            html += \`</div>\`;
          } else {
            html += \`
              <div style="text-align: center; padding: 12px; color: #94a3b8; font-size: 12px;">
                가입된 담보가 없습니다.
              </div>
            \`;
          }

          html += \`</div>\`;
        });

        container.innerHTML = html;
        return;
      }

      // (B) 전체 비교 모드
      let allHtml = '';
      categoryDefs.forEach((def, idx) => {
        allHtml += \`
          <div class="all-compare-card">
            <div style="border-bottom: 1.5px solid #2563eb; padding-bottom: 6px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <span style="font-size: 15px; font-weight: 800; color: #1e3a8a;">\${idx + 1}. \${def.title}</span>
                <div style="font-size: 10.5px; color: #64748b;">\${def.description}</div>
              </div>
            </div>
            <div>
        \`;

        reportData.members.forEach(m => {
          const cov = m.coverages[def.id];
          const isCov = cov && cov.isCovered;

          allHtml += \`
            <div class="member-sub-row" onclick="selectTab('\${m.memberName}')" style="cursor: pointer;">
              <div class="member-name-tag">
                \${m.memberName}
                \${m.relation ? \`<span style="font-size: 10px; color: #64748b; font-weight: normal;">(\${m.relation})</span>\` : ''}
              </div>
              <div class="member-cov-val" style="color: \${isCov ? '#2563eb' : '#94a3b8'}; font-weight: \${isCov ? '800' : 'normal'};">
                \${isCov ? cov.totalAmountText : '미가입'}
                <span style="color: #94a3b8; font-size: 10px; margin-left: 4px;">›</span>
              </div>
            </div>
          \`;
        });

        allHtml += \`</div></div>\`;
      });

      container.innerHTML = allHtml;
    }

    // 3. 약관 상세 바텀시트
    function openDetailModal(recJsonStr) {
      try {
        const record = JSON.parse(decodeURIComponent(recJsonStr));
        document.getElementById('sheetRiderTitle').innerText = record.세부보장명 || '보장 상세 정보';

        const content = record.보장내용 && record.보장내용.trim() 
          ? record.보장내용 
          : '등록된 세부 보장내용이 없습니다. 약관 원문을 참조하세요.';

        let html = \`
          <div style="margin-bottom: 12px;">
            <div class="sheet-info-row">
              <span class="info-label">가족 대상</span>
              <span class="info-val">\${record.가족이름} (\${record.관계 || '본인'})</span>
            </div>
            <div class="sheet-info-row">
              <span class="info-label">보험사</span>
              <span class="info-val">\${record.보험사}</span>
            </div>
            <div class="sheet-info-row">
              <span class="info-label">상품명</span>
              <span class="info-val">\${record.보험상품명}</span>
            </div>
            <div class="sheet-info-row">
              <span class="info-label">가입 금액</span>
              <span class="info-val" style="color: #2563eb; font-size: 14px;">\${record.보장금액}</span>
            </div>
            \${record.월보험료 ? \`
              <div class="sheet-info-row">
                <span class="info-label">월 보험료</span>
                <span class="info-val">\${Number(record.월보험료).toLocaleString()}원</span>
              </div>
            \` : ''}
          </div>

          <div style="font-weight: 800; font-size: 12.5px; color: #1e3a8a; margin-top: 10px; display: flex; align-items: center; gap: 4px;">
            <span>📋</span>
            <span>약관 및 지급 기준</span>
          </div>
          <div class="sheet-content-box">\${content}</div>
        \`;

        document.getElementById('sheetBody').innerHTML = html;
        document.getElementById('sheetOverlay').classList.add('open');
      } catch (e) {
        console.error('Error opening detail sheet:', e);
      }
    }

    function closeSheet() {
      document.getElementById('sheetOverlay').classList.remove('open');
    }

    // 바깥 클릭 시 닫기
    document.getElementById('sheetOverlay').addEventListener('click', (e) => {
      if (e.target.id === 'sheetOverlay') {
        closeSheet();
      }
    });

    init();
  <\/script>
</body>
</html>`}const ee=({isOpen:t,onClose:d,records:h,onViewDetailRecord:w})=>{const[l,b]=$.useState(!1),[j,g]=$.useState("ALL"),[x,P]=$.useState(()=>typeof window>"u"?!1:window.innerWidth<768||/iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));$.useEffect(()=>{const s=()=>{P(window.innerWidth<768||/iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const c=$.useMemo(()=>V(h),[h]);if($.useEffect(()=>{var o;if(!t)return;const s=Q(c);(o=window.electronAPI)!=null&&o.updateMobileServerContent&&window.electronAPI.updateMobileServerContent(s).catch(p=>console.error(p))},[t,c]),!t)return null;const k=async()=>{try{b(!0);const s=L(c),o=`가족_핵심보장비교표_${new Date().toISOString().slice(0,10)}.doc`;await J(s,o)}catch(s){console.error("Word export error:",s),alert("워드 파일 저장 중 오류가 발생했습니다: "+s.message)}finally{b(!1)}},f=async()=>{try{b(!0);const s=L(c),o=`가족_핵심보장비교표_${new Date().toISOString().slice(0,10)}.pdf`;await U(s,o)}catch(s){console.error("PDF export error:",s),alert("PDF 파일 저장 중 오류가 발생했습니다: "+s.message)}finally{b(!1)}},D=()=>{const s=L(c),o=window.open("","_blank","width=1150,height=850");o&&(o.document.open(),o.document.write(s),o.document.close(),setTimeout(()=>{o.focus(),o.print()},350))};return x?e.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex flex-col justify-end sm:justify-center p-0 sm:p-3",children:e.jsxs("div",{className:"bg-slate-100 w-full h-[95dvh] sm:h-[90vh] sm:max-w-md mx-auto rounded-t-[32px] sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-250",children:[e.jsx("div",{className:"flex sm:hidden justify-center pt-3 pb-1 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-600 cursor-grab shrink-0",children:e.jsx("div",{className:"w-12 h-1.5 bg-white/40 rounded-full"})}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-600 text-white p-4 shrink-0 shadow-md",children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(F,{className:"w-5 h-5 text-white"}),e.jsx("h2",{className:"text-base font-black tracking-tight",children:"가족 10대 핵심보장"})]}),e.jsxs("div",{className:"flex items-center space-x-1.5",children:[e.jsxs("button",{onClick:k,disabled:l,className:"px-2.5 py-1 text-[11px] font-bold bg-white/20 hover:bg-white/30 rounded-lg text-white transition flex items-center space-x-1",title:"워드 다운로드",children:[e.jsx(T,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"워드"})]}),e.jsxs("button",{onClick:f,disabled:l,className:"px-2.5 py-1 text-[11px] font-bold bg-white/20 hover:bg-white/30 rounded-lg text-white transition flex items-center space-x-1",title:"PDF 다운로드",children:[e.jsx(T,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"PDF"})]}),e.jsx("button",{onClick:d,className:"p-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition ml-1",children:e.jsx(B,{className:"w-5 h-5"})})]})]}),e.jsx("p",{className:"text-[11px] text-blue-100 font-medium",children:"암 · 뇌 · 심장 · 후유장해 · 수술비 · 주요치료비 비교"})]}),e.jsxs("div",{className:"bg-white border-b border-slate-200 p-2 overflow-x-auto flex space-x-1.5 no-scrollbar shrink-0 shadow-2xs",children:[e.jsx("button",{type:"button",onClick:()=>g("ALL"),className:`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${j==="ALL"?"bg-blue-600 text-white shadow-xs":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:"👥 전체 비교"}),c.members.map(s=>e.jsxs("button",{type:"button",onClick:()=>g(s.memberName),className:`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${j===s.memberName?"bg-blue-600 text-white shadow-xs":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:["👤 ",s.memberName]},s.memberName))]}),e.jsx("div",{className:"p-3 overflow-y-auto flex-1 space-y-3 text-xs",children:j!=="ALL"?(()=>{const s=c.members.find(o=>o.memberName===j);return s?C.map((o,p)=>{const m=s.coverages[o.id],y=m&&m.isCovered;return e.jsxs("div",{className:"bg-white rounded-2xl p-3.5 border border-slate-200 shadow-2xs",children:[e.jsxs("div",{className:"flex justify-between items-start border-b border-slate-100 pb-2 mb-2",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"font-extrabold text-slate-900 text-sm flex items-center space-x-1",children:[e.jsxs("span",{className:"text-blue-600 font-black",children:[p+1,"."]}),e.jsx("span",{children:o.title})]}),e.jsx("div",{className:"text-[10.5px] text-slate-400 mt-0.5",children:o.description})]}),e.jsx("span",{className:`px-2 py-0.5 rounded-full text-[11px] font-bold ${y?"bg-blue-100 text-blue-800":"bg-slate-100 text-slate-400"}`,children:y?"가입":"미가입"})]}),y?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-blue-50/80 rounded-xl p-2.5 flex justify-between items-center mb-2",children:[e.jsxs("span",{className:"text-blue-900 font-bold text-[11px]",children:[s.memberName," 님 총 보장금액"]}),e.jsx("span",{className:"text-blue-700 font-black text-sm",children:m.totalAmountText})]}),e.jsx("div",{className:"space-y-1.5",children:m.items.map((n,z)=>e.jsxs("button",{type:"button",onClick:()=>w(n.originalRecord),className:`w-full text-left p-2.5 rounded-xl transition ${n.isPrimary?"bg-blue-50/70 border-2 border-blue-300 hover:bg-blue-100/70 shadow-2xs":"bg-slate-50 hover:bg-blue-50 border border-slate-200"}`,children:[e.jsxs("div",{className:"flex justify-between items-center font-bold text-blue-900 text-[11px]",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[n.isPrimary&&e.jsx("span",{className:"px-1.5 py-0.2 bg-blue-600 text-white rounded-md text-[9px] font-black",children:n.label||"핵심"}),e.jsxs("span",{children:["[",n.company,"]"]})]}),e.jsx("span",{className:"text-slate-900 font-extrabold",children:n.amountText})]}),e.jsx("div",{className:"text-slate-600 truncate text-[11px] mt-0.5",children:n.policyName}),e.jsxs("div",{className:"text-slate-500 text-[10px] truncate mt-0.5 flex justify-between items-center",children:[e.jsxs("span",{className:"truncate",children:["• ",n.riderName]}),e.jsx("span",{className:"text-blue-600 font-bold shrink-0 ml-1",children:"약관보기 ↗"})]})]},z))})]}):e.jsx("div",{className:"py-2 text-center text-slate-400 text-[11px]",children:"가입된 보장이 없습니다."})]},o.id)}):null})():C.map((s,o)=>e.jsxs("div",{className:"bg-white rounded-2xl p-3.5 border border-slate-200 shadow-2xs",children:[e.jsx("div",{className:"border-b-2 border-blue-600 pb-1.5 mb-2 flex justify-between items-center",children:e.jsxs("div",{children:[e.jsxs("div",{className:"font-extrabold text-blue-950 text-sm",children:[e.jsxs("span",{className:"text-blue-600 font-black mr-1",children:[o+1,"."]}),e.jsx("span",{children:s.title})]}),e.jsx("div",{className:"text-[10px] text-slate-400 mt-0.5",children:s.description})]})}),e.jsx("div",{className:"divide-y divide-slate-100",children:c.members.map(p=>{const m=p.coverages[s.id],y=m&&m.isCovered;return e.jsxs("div",{onClick:()=>g(p.memberName),className:"py-2 flex justify-between items-center cursor-pointer hover:bg-slate-50 px-1 rounded-lg transition",children:[e.jsxs("div",{className:"font-bold text-slate-800 text-xs",children:["👤 ",p.memberName,p.relation&&e.jsxs("span",{className:"text-[10px] text-slate-400 ml-1 font-normal",children:["(",p.relation,")"]})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:`font-black text-xs ${y?"text-blue-700":"text-slate-400 font-normal"}`,children:y?m.totalAmountText:"미가입"}),e.jsx("span",{className:"text-slate-300 ml-1",children:"›"})]})]},p.memberName)})})]},s.id))}),e.jsx("div",{className:"bg-white p-3 border-t border-slate-200 flex justify-end shrink-0",children:e.jsx("button",{onClick:d,className:"w-full py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition",children:"닫기"})})]})}):e.jsx("div",{className:"fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-7xl max-h-[96vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150",children:[e.jsxs("div",{className:"px-6 py-3.5 border-b border-slate-200 flex items-center justify-between bg-slate-50/95 gap-3",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0",children:e.jsx(F,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("h2",{className:"text-base font-bold text-slate-900 tracking-tight",children:"가족 핵심보장(10대 주요보장) 비교 분석표"}),e.jsx("span",{className:"px-2 py-0.5 text-[11px] font-semibold bg-blue-100 text-blue-800 rounded-full",children:"10대 보장 완벽 분석"})]}),e.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:"가족별 가입 여부 및 가입된 보험사·상품별 보장금액 비교 (항목 클릭 시 상세 약관 확인)"})]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("button",{onClick:k,disabled:l,className:"flex items-center space-x-1.5 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold rounded-xl shadow-2xs transition disabled:opacity-50",title:"MS Word(.doc) 문서로 저장합니다",children:[e.jsx(T,{className:"w-3.5 h-3.5 text-blue-700"}),e.jsx("span",{children:"워드 저장"})]}),e.jsxs("button",{onClick:f,disabled:l,className:"flex items-center space-x-1.5 px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 text-xs font-bold rounded-xl shadow-2xs transition disabled:opacity-50",title:"A4 가로 PDF 파일로 저장합니다",children:[e.jsx(T,{className:"w-3.5 h-3.5 text-rose-700"}),e.jsx("span",{children:"PDF 저장"})]}),e.jsx("button",{onClick:D,className:"p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition",title:"인쇄 미리보기",children:e.jsx(G,{className:"w-3.5 h-3.5 text-slate-600"})}),e.jsx("button",{onClick:d,className:"text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-200 transition ml-1",children:e.jsx(B,{className:"w-5 h-5"})})]})]}),e.jsxs("div",{className:"px-6 py-2 bg-blue-50/70 border-b border-blue-100 flex items-center justify-between text-xs text-blue-900",children:[e.jsxs("div",{className:"flex items-center space-x-2 font-medium",children:[e.jsx(_,{className:"w-3.5 h-3.5 text-blue-600 shrink-0"}),e.jsxs("span",{children:["총 ",c.members.length,"명의 가족 구성원 실제 증권 데이터 분석 완료"]}),e.jsx("span",{className:"text-slate-300",children:"|"}),e.jsx("span",{className:"text-blue-700 font-bold bg-blue-100/70 px-2 py-0.5 rounded-md",children:"💡 각 보험 항목을 클릭하면 약관 및 보장 상세정보(지급기준)가 표시됩니다"})]}),e.jsxs("span",{className:"text-slate-500 text-[11px] font-semibold",children:[c.baseDate," 기준"]})]}),e.jsxs("div",{className:"p-6 overflow-y-auto flex-1 bg-slate-50/40",children:[e.jsx("div",{className:"border border-slate-300 rounded-xl bg-white shadow-xs",children:e.jsxs("table",{className:"w-full text-left border-collapse table-fixed text-xs",children:[e.jsx("thead",{className:"sticky top-0 z-20 shadow-xs",children:e.jsxs("tr",{className:"bg-slate-100 text-slate-800 font-bold border-b border-slate-300",children:[e.jsx("th",{className:"sticky top-0 z-20 py-3.5 px-3 w-48 text-center border-r border-b border-slate-300 text-slate-900 bg-slate-200 shadow-xs",children:"보장 구분"}),c.members.map(s=>e.jsxs("th",{className:"sticky top-0 z-20 py-3 px-3 text-center border-r last:border-r-0 border-b border-slate-300 bg-slate-100 shadow-xs",children:[e.jsx("div",{className:"text-sm font-bold text-slate-900",children:s.memberName}),s.relation&&e.jsxs("div",{className:"text-[11px] font-semibold text-blue-600 mt-0.5",children:["(",s.relation,")"]})]},s.memberName))]})}),e.jsx("tbody",{children:C.map((s,o)=>e.jsxs("tr",{className:"border-b last:border-b-0 border-slate-200 hover:bg-slate-50/50 transition",children:[e.jsxs("td",{className:"py-3 px-3.5 border-r border-slate-300 bg-slate-100/90 font-bold align-top",children:[e.jsxs("div",{className:"flex items-center space-x-1.5 text-slate-900",children:[e.jsx("span",{className:"w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px] font-black shrink-0",children:o+1}),e.jsx("span",{className:"text-xs font-extrabold tracking-tight",children:s.title})]}),e.jsx("div",{className:"text-[10px] text-slate-500 font-normal mt-1 leading-tight pl-6",children:s.description})]}),c.members.map(p=>{const m=p.coverages[s.id],y=m&&m.isCovered;return e.jsx("td",{className:`py-3 px-2.5 border-r last:border-r-0 border-slate-200 align-top transition-colors ${y?"bg-white":"bg-slate-50/30"}`,children:y?e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex items-center justify-between bg-blue-50/90 border border-blue-200/80 rounded-lg px-2 py-1",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(I,{className:"w-3.5 h-3.5 text-blue-600"}),e.jsx("span",{className:"text-[10.5px] font-bold text-blue-800",children:"가입"})]}),e.jsx("span",{className:"font-extrabold text-blue-900 text-xs",children:m.totalAmountText})]}),e.jsx("div",{className:"space-y-1",children:m.items.map((n,z)=>e.jsxs("button",{type:"button",onClick:()=>w(n.originalRecord),className:`w-full text-left p-1.5 rounded-md transition group cursor-pointer ${n.isPrimary?"bg-blue-50/70 border border-blue-300 hover:bg-blue-100 hover:border-blue-400 shadow-2xs":"bg-slate-50 hover:bg-blue-100/70 border border-slate-200 hover:border-blue-300"}`,title:"클릭하여 상세 약관 및 지급 기준 확인",children:[e.jsxs("div",{className:"flex items-center justify-between text-[11px]",children:[e.jsxs("div",{className:"flex items-center space-x-1 truncate max-w-[130px]",children:[n.isPrimary&&e.jsx("span",{className:"px-1 py-0.2 bg-blue-600 text-white rounded text-[8.5px] font-black shrink-0",children:n.label||"핵심"}),e.jsxs("span",{className:"font-bold text-slate-800 truncate",children:["[",n.company,"]"]})]}),e.jsx("span",{className:"font-extrabold text-slate-900 text-[11px] shrink-0 ml-1",children:n.amountText})]}),e.jsx("div",{className:"text-[10px] text-slate-600 truncate mt-0.5 group-hover:text-blue-700",title:n.policyName,children:n.policyName}),e.jsxs("div",{className:"text-[9.5px] text-slate-400 truncate mt-0.5",title:n.riderName,children:["• ",n.riderName]})]},z))})]}):e.jsxs("div",{className:"h-full min-h-[60px] flex flex-col items-center justify-center text-slate-400 py-2",children:[e.jsx(Y,{className:"w-4 h-4 text-slate-300 mb-1"}),e.jsx("span",{className:"text-[11px] font-medium",children:"미가입"})]})},p.memberName)})]},s.id))})]})}),e.jsx("div",{className:"mt-3 text-[11px] text-slate-400 text-right",children:"※ 본 표는 등록된 실제 증권 데이터에서 10대 핵심보장 항목을 정확히 추출 및 분류한 결과입니다."})]}),e.jsxs("div",{className:"px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between",children:[e.jsx("div",{className:"flex items-center space-x-2 text-xs text-slate-500",children:e.jsx("span",{children:"각 항목을 클릭하면 상세 약관 정보를 확인하실 수 있습니다."})}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:k,disabled:l,className:"px-3.5 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg shadow-2xs transition",children:"워드 저장"}),e.jsx("button",{onClick:f,disabled:l,className:"px-3.5 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg shadow-2xs transition",children:"PDF 저장"}),e.jsx("button",{onClick:d,className:"px-4 py-1.5 text-xs font-bold text-white bg-slate-800 hover:bg-slate-900 rounded-lg shadow-2xs transition",children:"닫기"})]})]})]})})};export{ee as CoreCoverageModal};
