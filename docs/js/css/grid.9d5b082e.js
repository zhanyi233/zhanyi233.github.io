import{_ as l,a as s,c as d,b as i,f as e,F as o,p as n}from"../../assets/index.b89fcc50.js";function t(a){a.__sourceCode=`<template>
  <div class="grid-temp">
    <span>
      <b>1</b>
      <b>2</b>
    </span>
    <span class="template-2col">
      <b>1</b>
      <b>2</b>
    </span>
    <span class="template-3col">
      <b>1</b>
      <b>2</b>
      <b>3</b>
    </span>
    <span class="template-4up">
      <b>1</b>
      <b>2</b>
      <b>3</b>
      <b>4</b>
    </span>
    <span class="template-sidebar--left">
      <b>1</b>
      <b>2</b>
      <b>3</b>
    </span>
    <span class="template-sidebar--right">
      <b>1</b>
      <b>2</b>
      <b>3</b>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.grid-temp {
  display: grid;
  grid-template-columns: repeat(auto-fit, 30ch);
  place-content: center;
  grid-gap: 5vh;
  margin: 0 auto;

  span {
    background: #fff;
    padding: 10px;
    border-radius: 7px;
    box-shadow: 0 2px 6px -2px rgba(black, 0.42);
    height: 30vh;
    display: grid;
    grid-gap: 0.5rem;

    b {
      background-color: #7b86f5;
      border-radius: 4px;
      display: grid;
      place-items: center;
      color: #fff;
      font-size: 14px;
    }

    &.template {
      &-2col {
        grid-template-columns: repeat(2, 1fr);
      }

      &-3col {
        grid-template-columns: repeat(3, 1fr);
      }

      // NOTE: The 2col will also create this arrangement,
      // this is just more explicit
      &-4up {
        // grid-template-rows / grid-template-columns
        grid-template: repeat(2, 1fr) / repeat(2, 1fr);
      }

      &-sidebar--left {
        grid-template:
          "sidebar mainA"
          "sidebar mainB";

        > :nth-child(1) {
          grid-area: sidebar;
        }
      }

      &-sidebar--right {
        grid-template:
          "mainA sidebar"
          "mainB sidebar";

        > :nth-child(3) {
          grid-area: sidebar;
        }
      }
    }
  }
}
</style>`,a.__sourceCodeTitle="\u591A\u79CD\u5E03\u5C40"}const p={},f={class:"grid-temp"},m=i('<span data-v-d5350afe><b data-v-d5350afe>1</b><b data-v-d5350afe>2</b></span><span class="template-2col" data-v-d5350afe><b data-v-d5350afe>1</b><b data-v-d5350afe>2</b></span><span class="template-3col" data-v-d5350afe><b data-v-d5350afe>1</b><b data-v-d5350afe>2</b><b data-v-d5350afe>3</b></span><span class="template-4up" data-v-d5350afe><b data-v-d5350afe>1</b><b data-v-d5350afe>2</b><b data-v-d5350afe>3</b><b data-v-d5350afe>4</b></span><span class="template-sidebar--left" data-v-d5350afe><b data-v-d5350afe>1</b><b data-v-d5350afe>2</b><b data-v-d5350afe>3</b></span><span class="template-sidebar--right" data-v-d5350afe><b data-v-d5350afe>1</b><b data-v-d5350afe>2</b><b data-v-d5350afe>3</b></span>',6),_=[m];function g(a,b){return s(),d("div",f,_)}typeof t=="function"&&t(p);const v=l(p,[["render",g],["__scopeId","data-v-d5350afe"]]),x={__name:"grid",setup(a){return(b,u)=>{const r=n("v-message"),c=n("code-example");return s(),d(o,null,[e(r,{title:"\u6E29\u99A8\u63D0\u793A",desc:"\u7EC3\u624B\u7684\u6837\u5F0F\uFF0C\u770B\u4E00\u770B\u5C31\u597D\u5566\uFF5E"}),e(c,{component:v})],64)}}};export{x as default};
