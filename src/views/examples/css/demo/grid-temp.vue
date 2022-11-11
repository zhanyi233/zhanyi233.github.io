<demo>多种布局</demo>
<template>
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
</style>
