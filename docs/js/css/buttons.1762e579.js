import{_ as a,m as b,h as i,o as s,k as h}from"../../assets/index.99e2910b.js";function r(n){n.__sourceCode=`<template>
  <div class="btn-holder">
    <button class="btn btn-1 hover-filled-slide-down">
      <span>hover me</span>
    </button>
    <button class="btn btn-1 hover-filled-slide-up">
      <span>hover me</span>
    </button>
    <button class="btn btn-1 hover-filled-slide-left">
      <span>hover me</span>
    </button>
    <button class="btn btn-1 hover-filled-slide-right">
      <span>hover me</span>
    </button>
    <button class="btn btn-1 hover-filled-opacity">
      <span>hover me</span>
    </button>
  </div>
  <div class="btn-holder">
    <button class="btn btn-2 hover-slide-down">
      <span>hover me</span>
    </button>
    <button class="btn btn-2 hover-slide-up">
      <span>hover me</span>
    </button>
    <button class="btn btn-2 hover-slide-left">
      <span>hover me</span>
    </button>
    <button class="btn btn-2 hover-slide-right">
      <span>hover me</span>
    </button>
    <button class="btn btn-2 hover-opacity">
      <span>hover me</span>
    </button>
  </div>
  <div class="btn-holder">
    <button class="btn btn-3 hover-border-1">
      <span>hover me</span>
    </button>
    <button class="btn btn-3 hover-border-2">
      <span>hover me</span>
    </button>
    <button class="btn btn-3 hover-border-3">
      <span>hover me</span>
    </button>
    <button class="btn btn-3 hover-border-4">
      <span>hover me</span>
    </button>
    <button class="btn btn-3 hover-border-5">
      <span>hover me</span>
    </button>
  </div>
  <div class="btn-holder">
    <button class="btn btn-4 hover-border-6">
      <span>hover me</span>
    </button>
    <button class="btn btn-4 hover-border-7">
      <span>hover me</span>
    </button>
    <button class="btn btn-4 hover-border-8">
      <span>hover me</span>
    </button>
    <button class="btn btn-4 hover-border-9">
      <span>hover me</span>
    </button>
    <button class="btn btn-4 hover-border-10">
      <span>hover me</span>
    </button>
  </div>
  <div class="btn-holder">
    <button class="btn btn-5 hover-border-11">
      <span>hover me</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:active,
:hover,
:focus {
  outline: 0 !important;
  outline-offset: 0;
}

::before,
::after {
  position: absolute;
  content: "";
}

.btn-holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: 10px auto 35px;
}

.btn {
  position: relative;
  display: inline-block;
  width: auto;
  height: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0px 25px 15px;
  min-width: 150px;
}

.btn span {
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  transition: 0.3s;
}

/*--- btn-1 ---*/
.btn-1::before {
  background-color: var(--color-primary);
  transition: 0.3s ease-out;
}
.btn-1 span {
  color: rgb(255, 255, 255);
  border: 1px solid var(--color-primary);
  transition: 0.2s 0.1s;
}
.btn-1 span:hover {
  color: var(--color-primary);
  transition: 0.2s 0.1s;
}

/* 1.hover-filled-slide-down */
.btn.hover-filled-slide-down::before {
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
.btn.hover-filled-slide-down:hover::before {
  height: 0%;
}

/* 2.hover-filled-slide-up */
.btn.hover-filled-slide-up::before {
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
.btn.hover-filled-slide-up:hover::before {
  height: 0%;
}

/* 3.hover-filled-slide-left */
.btn.hover-filled-slide-left::before {
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.btn.hover-filled-slide-left:hover::before {
  width: 0%;
}

/* 4. hover-filled-slide-right */
.btn.hover-filled-slide-right::before {
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
.btn.hover-filled-slide-right:hover::before {
  width: 0%;
}

/* 5. hover-filled-opacity */
.btn.hover-filled-opacity::before {
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
}
.btn.hover-filled-opacity:hover::before {
  opacity: 0;
}

/*--- btn-2 ---*/
.btn-2::before {
  background-color: var(--color-primary);
  transition: 0.3s ease-out;
}
.btn-2 span {
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  transition: 0.2s;
}
.btn-2 span:hover {
  color: rgb(255, 255, 255);
  transition: 0.2s 0.1s;
}

/* 6. hover-slide-down */
.btn.hover-slide-down::before {
  top: 0;
  left: 0;
  right: 0;
  height: 0%;
  width: 100%;
}
.btn.hover-slide-down:hover::before {
  height: 100%;
}

/* 7. hover-slide-up */
.btn.hover-slide-up::before {
  bottom: 0;
  left: 0;
  right: 0;
  height: 0%;
  width: 100%;
}
.btn.hover-slide-up:hover::before {
  height: 100%;
}

/* 8. hover-slide-left */
.btn.hover-slide-left::before {
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 0%;
}
.btn.hover-slide-left:hover::before {
  width: 100%;
}

/* 9. hover-slide-right */
.btn.hover-slide-right::before {
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 0%;
}
.btn.hover-slide-right:hover::before {
  width: 100%;
}

/* 10. hover-opacity */
.btn.hover-opacity::before {
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
}
.btn.hover-opacity:hover::before {
  opacity: 1;
}

/*--- btn-3 ---*/
.btn-3 {
  padding: 5px;
}
.btn-3 span {
  color: rgb(255, 255, 255);
  background-color: var(--color-primary);
}
.btn-3::before,
.btn-3::after {
  background: transparent;
  z-index: 2;
}

/* 11. hover-border-1 */
.btn.hover-border-1::before,
.btn.hover-border-1::after {
  width: 10%;
  height: 25%;
  transition: 0.35s;
}
.btn.hover-border-1::before {
  top: 0;
  left: 0;
  border-left: 1px solid var(--color-primary);
  border-top: 1px solid var(--color-primary);
}
.btn.hover-border-1::after {
  bottom: 0;
  right: 0;
  border-right: 1px solid var(--color-primary);
  border-bottom: 1px solid var(--color-primary);
}
.btn.hover-border-1:hover::before,
.btn.hover-border-1:hover::after {
  width: 99%;
  height: 98%;
}

/* 12. hover-border-2 */
.btn.hover-border-2::before,
.btn.hover-border-2::after {
  width: 10%;
  height: 25%;
  transition: 0.35s;
}
.btn.hover-border-2::before {
  bottom: 0;
  left: 0;
  border-left: 1px solid var(--color-primary);
  border-bottom: 1px solid var(--color-primary);
}
.btn.hover-border-2::after {
  top: 0;
  right: 0;
  border-right: 1px solid var(--color-primary);
  border-top: 1px solid var(--color-primary);
}
.btn.hover-border-2:hover::before,
.btn.hover-border-2:hover::after {
  width: 99%;
  height: 99%;
}

/* 13. hover-border-3 */
.btn.hover-border-3::before,
.btn.hover-border-3::after {
  width: 0%;
  height: 0%;
  opacity: 0;
  transition: width 0.2s 0.15s linear, height 0.15s linear, opacity 0s 0.35s;
}
.btn.hover-border-3::before {
  top: 0;
  right: 0;
  border-top: 1px solid var(--color-primary);
  border-left: 1px solid var(--color-primary);
}
.btn.hover-border-3::after {
  bottom: 0;
  left: 0;
  border-bottom: 1px solid var(--color-primary);
  border-right: 1px solid var(--color-primary);
}
.btn.hover-border-3:hover::before,
.btn.hover-border-3:hover::after {
  width: 100%;
  height: 99%;
  opacity: 1;
  transition: width 0.2s linear, height 0.15s 0.2s linear, opacity 0s;
}

/* 14. hover-border-4 */
.btn.hover-border-4::before,
.btn.hover-border-4::after {
  width: 0%;
  height: 0%;
  opacity: 0;
  transition: width 0.2s linear, height 0.15s 0.2s ease-out, opacity 0s 0.35s;
}
.btn.hover-border-4::before {
  bottom: 0;
  left: -1px;
  border-top: 1px solid var(--color-primary);
  border-left: 1px solid var(--color-primary);
}
.btn.hover-border-4::after {
  top: 0;
  right: 0;
  border-bottom: 1px solid var(--color-primary);
  border-right: 1px solid var(--color-primary);
}
.btn.hover-border-4:hover::before,
.btn.hover-border-4:hover::after {
  width: 100%;
  height: 99%;
  opacity: 1;
  transition: width 0.2s 0.15s ease-out, height 0.15s ease-in, opacity 0s;
}

/* 15. hover-border-5 */
.btn.hover-border-5::before,
.btn.hover-border-5::after {
  width: 0%;
  height: 0%;
  opacity: 0;
}
.btn.hover-border-5::before {
  top: 0;
  right: 0;
  border-top: 1px solid var(--color-primary);
  border-left: 1px solid var(--color-primary);
  transition: width 0.2s 0.5s ease-out, height 0.15s 0.35s linear,
    opacity 0s 0.7s;
}
.btn.hover-border-5::after {
  bottom: 0;
  left: 0px;
  border-bottom: 1px solid var(--color-primary);
  border-right: 1px solid var(--color-primary);
  transition: width 0.2s 0.15s linear, height 0.15s ease-in, opacity 0s 0.35s;
}
.btn.hover-border-5:hover::before,
.btn.hover-border-5:hover::after {
  width: 100%;
  height: 96%;
  opacity: 1;
}
.btn.hover-border-5:hover::before {
  transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s; /* 1,2 */
}
.btn.hover-border-5:hover::after {
  transition: width 0.2s 0.35s linear, height 0.15s 0.5s ease-out,
    opacity 0s 0.3s;
}

/*--- btn-4 ---*/
.btn-4 span {
  color: var(--color-primary);
  background-color: rgb(245, 245, 245);
}
.btn-4 span:hover {
  color: var(--color-primary);
}
.btn-4::before,
.btn-4::after {
  width: 15%;
  height: 2px;
  background-color: var(--color-primary);
  z-index: 2;
}

/* 16. hover-border-6 */
.btn.hover-border-6::before,
.btn.hover-border-6::after {
  top: 0;
  transition: width 0.2s 0.35s ease-out;
}
.btn.hover-border-6::before {
  right: 50%;
}
.btn.hover-border-6::after {
  left: 50%;
}
.btn.hover-border-6:hover::before,
.btn.hover-border-6:hover::after {
  width: 50%;
  transition: width 0.2s ease-in;
}

.btn.hover-border-6 span::before,
.btn.hover-border-6 span::after {
  width: 0%;
  height: 0%;
  background: transparent;
  opacity: 0;
  z-index: 2;
  transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s 0.35s;
}
.btn.hover-border-6 span::before {
  top: 0;
  left: 0;
  border-left: 2px solid var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
}
.btn.hover-border-6 span::after {
  top: 0;
  right: 0;
  border-right: 2px solid var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
}
.btn.hover-border-6 span:hover::before,
.btn.hover-border-6 span:hover::after {
  width: 50%;
  height: 96%;
  opacity: 1;
  transition: height 0.2s 0.2s ease-in, width 0.2s 0.4s linear, opacity 0s 0.2s;
}

/* 17. hover-border-7 */
.btn.hover-border-7::before,
.btn.hover-border-7::after {
  bottom: 0;
  transition: width 0.2s 0.35s ease-out;
}
.btn.hover-border-7::before {
  right: 50%;
}
.btn.hover-border-7::after {
  left: 50%;
}
.btn.hover-border-7:hover::before,
.btn.hover-border-7:hover::after {
  width: 50%;
  transition: width 0.2s ease-in;
}

.btn.hover-border-7 span::before,
.btn.hover-border-7 span::after {
  width: 0%;
  height: 0%;
  background: transparent;
  opacity: 0;
  z-index: 2;
  transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s 0.35s;
}
.btn.hover-border-7 span::before {
  bottom: 0;
  left: 0;
  border-left: 2px solid var(--color-primary);
  border-top: 2px solid var(--color-primary);
}
.btn.hover-border-7 span::after {
  bottom: 0;
  right: 0;
  border-right: 2px solid var(--color-primary);
  border-top: 2px solid var(--color-primary);
}
.btn.hover-border-7 span:hover::before,
.btn.hover-border-7 span:hover::after {
  width: 50%;
  height: 96%;
  opacity: 1;
  transition: height 0.2s 0.2s ease-in, width 0.2s 0.4s linear, opacity 0s 0.2s;
}

/* 18. hover-border-8 */
.btn.hover-border-8::before,
.btn.hover-border-8::after {
  bottom: 0;
  width: 15%;
  transition: width 0.2s 0.35s ease-out;
}
.btn.hover-border-8::before {
  right: 50%;
}
.btn.hover-border-8::after {
  left: 50%;
}
.btn.hover-border-8:hover::before {
  width: 50%;
  transition: width 0.2s ease-in;
}
.btn.hover-border-8:hover::after {
  width: 50%;
  transition: width 0.1s ease-in;
}

.btn.hover-border-8 span::before,
.btn.hover-border-8 span::after {
  width: 0%;
  height: 0%;
  bottom: 0;
  background: transparent;
  opacity: 0;
  z-index: 2;
}
.btn.hover-border-8 span::before {
  left: 0%;
  border-left: 2px solid var(--color-primary);
  transition: height 0.25s ease-in, opacity 0s 0.35s;
}
.btn.hover-border-8 span:hover::before {
  height: 96%;
  opacity: 1;
  transition: height 0.25s 0.2s ease-out, opacity 0s 0.2s;
}
.btn.hover-border-8 span::after {
  right: 0%;
  border-right: 2px solid var(--color-primary);
  border-top: 2px solid var(--color-primary);
  transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s 0.35s;
}
.btn.hover-border-8 span:hover::after {
  width: 99%;
  height: 96%;
  opacity: 1;
  transition: height 0.15s 0.1s linear, width 0.2s 0.25s linear, opacity 0s 0.1s;
}

/* 19. hover-border-9 */
.btn.hover-border-9::before,
.btn.hover-border-9::after {
  bottom: 0;
  width: 15%;
  transition: width 0.2s 0.35s ease-out;
}
.btn.hover-border-9::before {
  right: 50%;
}
.btn.hover-border-9::after {
  left: 50%;
}
.btn.hover-border-9:hover::before {
  width: 50%;
  transition: width 0.1s ease-in;
}
.btn.hover-border-9:hover::after {
  width: 50%;
  transition: width 0.2s ease-in;
}

.btn.hover-border-9 span::before,
.btn.hover-border-9 span::after {
  width: 0%;
  height: 0%;
  bottom: 0;
  background: transparent;
  opacity: 0;
  z-index: 2;
}
.btn.hover-border-9 span::after {
  right: 0%;
  border-right: 2px solid var(--color-primary);
  transition: height 0.25s ease-in, opacity 0s 0.35s;
}
.btn.hover-border-9 span:hover::after {
  height: 96%;
  opacity: 1;
  transition: height 0.25s 0.2s ease-out, opacity 0s 0.2s;
}
.btn.hover-border-9 span::before {
  left: 0%;
  border-left: 2px solid var(--color-primary);
  border-top: 2px solid var(--color-primary);
  transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s 0.35s;
}
.btn.hover-border-9 span:hover::before {
  width: 98.5%;
  height: 96%;
  opacity: 1;
  transition: height 0.15s 0.1s linear, width 0.2s 0.25s linear, opacity 0s 0.1s;
}

/* 20. hover-border-10 */
.btn.hover-border-10::before,
.btn.hover-border-10::after {
  left: 0%;
  height: 30%;
  width: 2px;
  transition: height 0.2s 0.35s ease-out;
}
.btn.hover-border-10::before {
  top: 50%;
}
.btn.hover-border-10::after {
  bottom: 50%;
}
.btn.hover-border-10:hover::before {
  height: 50%;
  transition: height 0.2s ease-in;
}
.btn.hover-border-10:hover::after {
  height: 50%;
  transition: height 0.1s ease-in;
}

.btn.hover-border-10 span::before,
.btn.hover-border-10 span::after {
  width: 0%;
  height: 0%;
  background: transparent;
  opacity: 0;
  z-index: 2;
}
.btn.hover-border-10 span::after {
  bottom: 0;
  left: 0%;
  border-bottom: 2px solid var(--color-primary);
  transition: width 0.25s ease-in, opacity 0s 0.35s;
}
.btn.hover-border-10 span:hover::after {
  width: 100%;
  opacity: 1;
  transition: width 0.25s 0.2s ease-out, opacity 0s 0.2s;
}
.btn.hover-border-10 span::before {
  top: 0%;
  left: 0%;
  border-top: 2px solid var(--color-primary);
  border-right: 2px solid var(--color-primary);
  transition: height 0.15s ease-in, width 0.2s 0.15s linear, opacity 0s 0.35s;
}
.btn.hover-border-10 span:hover::before {
  width: 98.5%;
  height: 96%;
  opacity: 1;
  transition: width 0.2s 0.1s linear, height 0.15s 0.3s ease-out,
    opacity 0s 0.1s;
}

/*--- btn-5 ---*/
.btn-5 span {
  color: var(--color-primary);
  border: 2px solid #e6a23c;
  transition: 0.2s;
}
.btn-5 span:hover {
  background-color: rgb(245, 245, 245);
}

/* 21. hover-border-11 */
.btn.hover-border-11::before,
.btn.hover-border-11::after {
  width: 100%;
  height: 2px;
  background-color: var(--color-primary);
  z-index: 2;
  transition: 0.35s;
}
.btn.hover-border-11::before {
  top: 0;
  right: 0;
}
.btn.hover-border-11::after {
  bottom: 0;
  left: 0;
}
.btn.hover-border-11:hover::before,
.btn.hover-border-11:hover::after {
  width: 0%;
  transition: 0.2s 0.2s ease-out;
}

.btn.hover-border-11 span::before,
.btn.hover-border-11 span::after {
  width: 2px;
  height: 100%;
  background-color: var(--color-primary);
  z-index: 2;
  transition: 0.25s;
}
.btn.hover-border-11 span::before {
  bottom: 0;
  right: -2px;
}
.btn.hover-border-11 span::after {
  top: 0;
  left: -2px;
}
.btn.hover-border-11 span:hover::before,
.btn.hover-border-11 span:hover::after {
  height: 0%;
}
</style>`,n.__sourceCodeTitle="Buttons\u52A8\u6548"}const e={},d=b('<div class="btn-holder" data-v-cef80c3d><button class="btn btn-1 hover-filled-slide-down" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-1 hover-filled-slide-up" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-1 hover-filled-slide-left" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-1 hover-filled-slide-right" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-1 hover-filled-opacity" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button></div><div class="btn-holder" data-v-cef80c3d><button class="btn btn-2 hover-slide-down" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-2 hover-slide-up" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-2 hover-slide-left" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-2 hover-slide-right" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-2 hover-opacity" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button></div><div class="btn-holder" data-v-cef80c3d><button class="btn btn-3 hover-border-1" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-3 hover-border-2" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-3 hover-border-3" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-3 hover-border-4" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-3 hover-border-5" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button></div><div class="btn-holder" data-v-cef80c3d><button class="btn btn-4 hover-border-6" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-4 hover-border-7" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-4 hover-border-8" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-4 hover-border-9" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button><button class="btn btn-4 hover-border-10" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button></div><div class="btn-holder" data-v-cef80c3d><button class="btn btn-5 hover-border-11" data-v-cef80c3d><span data-v-cef80c3d>hover me</span></button></div>',5);function v(n,o){return d}typeof r=="function"&&r(e);const p=a(e,[["render",v],["__scopeId","data-v-cef80c3d"]]),f={__name:"buttons",setup(n){return(o,l)=>{const t=h("code-example");return s(),i(t,{component:p})}}};export{f as default};
