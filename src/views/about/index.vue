<template>
  <div class="about-wrapper">
    <Particles
      :particlesInit="particlesInit"
      id="tsparticles"
      :options="ParticlesConfig"
    ></Particles>
    <div class="form-wrapper">
      <div class="form">
        <div class="title">Hi there 👏</div>
        <div class="title-msg">
          😊 Exploring new technologies and developing software solutions and
          quick hacks -- 为爱发电！
        </div>
        <ul class="list">
          <li v-for="item in list" :key="item.title" class="list-item">
            <div class="list-item--title">{{ item.title }}</div>
            <div class="list-item__contents">
              <div
                v-for="child in item.children"
                :key="child.img"
                @click="goTo(child)"
              >
                <img :src="child.img" alt="" />
              </div>
            </div>
          </li>
          <li class="list-item">
            <div class="list-item--title">🤝 Connect with Me</div>
            <div class="list-item--link">
              <a href="mailto:2331767972@qq.com">点击发送邮件</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { loadFull } from "tsparticles";
import ParticlesConfig from "../../assets/data/Particles.js";

const list = [
  {
    title: "Languages",
    children: [
      {
        url: "",
        img: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      },
      {
        url: "",
        img: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      },
      {
        url: "",
        img: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
      },
      {
        url: "",
        img: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
      },
      {
        url: "",
        img: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
      },
    ],
  },
  {
    title: "Technologies",
    children: [
      {
        url: "",
        img: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
      },
      {
        url: "",
        img: "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D",
      },
      {
        url: "",
        img: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
      },
      {
        url: "",
        img: "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white",
      },
      {
        url: "",
        img: "https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white",
      },
      {
        url: "",
        img: "https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white",
      },
      {
        url: "",
        img: "https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white",
      },
      {
        url: "",
        img: "https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E",
      },
    ],
  },
  {
    title: "Social",
    children: [
      {
        url: "https://github.com/zhanyi233/",
        img: "https://img.shields.io/badge/Github-24292f?style=for-the-badge&logo=github&logoColor=white",
      },
    ],
  },
];

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const goTo = ({ url = "" }) => {
  if (url === "") return;
  window.open(url, "_blank");
};
</script>

<style lang="scss" scoped>
.about-wrapper {
  position: relative;
  padding-top: 60px;

  .form-wrapper {
    margin: 0 auto;
    width: 836px;
    height: 600px;
    background: url("../../assets/images/about-bg.png") no-repeat;
    background-size: 100% 100%;

    .form {
      color: #000;
      border-radius: 4px;
      padding: 140px 40px 40px 40px;
      box-sizing: border-box;

      .title {
        font-size: 18px;
      }

      .title-msg {
        margin-top: 10px;
        font-size: 16px;
        color: var(--color-text--lighter);
      }

      .list {
        padding: 0;
        margin: 0;
        list-style: none;

        .list-item {
          margin-top: 20px;

          .list-item--title {
            margin-bottom: 10px;
            font-size: 16px;
          }

          .list-item__contents {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            > div {
              margin: 0 10px 0 0;

              img {
                cursor: pointer;
              }
            }
          }

          .list-item--link {
            a {
              color: var(--color-primary);
            }
          }
        }
      }
    }
  }
}
</style>
