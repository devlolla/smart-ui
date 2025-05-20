import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-D4lIrffr.js";const p=t=>{const g=Array.from({length:5},(a,i)=>i+1),[f,x]=y.useState(0);return e.jsxs("div",{className:`star-rating rating-${t.theme}`,children:[e.jsx("h1",{children:t.title}),e.jsx("div",{className:"star-container",children:g.map((a,i)=>{const n=a<=f?"starActive":"starInactive";return console.log(n),e.jsx("button",{disabled:t.disabled,"data-testId":`${t.testIdPrefix}-${i}`,className:`${n}`,onClick:()=>x(a),children:e.jsx("span",{className:"star",children:" ★ "})},a)})})]})};p.__docgenInfo={description:"",methods:[],displayName:"SmartRating",props:{testIdPrefix:{required:!0,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},theme:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""}}};const v={title:"Components/SmartRating",component:p,tags:["autodocs"],argTypes:{title:{control:"text"},theme:{control:"text"},disabled:{control:"boolean"}}},r={args:{title:"Avalie este produto",theme:"primary",disabled:!1,testIdPrefix:"star"}},s={args:{title:"Avaliação desativada",theme:"primary",disabled:!0,testIdPrefix:"disabled"}};var l,o,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "Avalie este produto",
    theme: "primary",
    // ou "primary", conforme seu estilo
    disabled: false,
    testIdPrefix: "star"
  }
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var m,c,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: "Avaliação desativada",
    theme: "primary",
    disabled: true,
    testIdPrefix: "disabled"
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const I=["Default","Disabled"];export{r as Default,s as Disabled,I as __namedExportsOrder,v as default};
