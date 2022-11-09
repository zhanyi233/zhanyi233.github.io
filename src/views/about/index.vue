<template>
  <div class="about-wrapper">
    <Particles
      :particlesInit="particlesInit"
      id="tsparticles"
      :options="ParticlesConfig"
    ></Particles>
    <div class="form">
      <div class="title">Hi there 👏</div>
      <ul class="list">
        <li v-for="item in list" :key="item.title" class="list-item">
          <div class="list-item--title">{{ item.title }}</div>
          <div class="list-item__contents">
            <div v-for="child in item.children" :key="child.img">
              <img :src="child.img" alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { loadFull } from "tsparticles";
import ParticlesConfig from "../../assets/data/Particles.js";

const githubPage = "https://github.com/zhanyi233/";

const list = [
  {
    title: "Languages",
    children: [
      {
        url: '',
        img: "https://camo.githubusercontent.com/d63d473e728e20a286d22bb2226a7bf45a2b9ac6c72c59c0e61e9730bfe4168c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c352d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465",
      },
      {
        url: '',
        img: "https://camo.githubusercontent.com/3a0f693cfa032ea4404e8e02d485599bd0d192282b921026e89d271aaa3d7565/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465",
      },
      {
        url: '',
        img: "https://camo.githubusercontent.com/93c855ae825c1757f3426f05a05f4949d3b786c5b22d0edb53143a9e8f8499f6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d463744463145",
      },
      {
        url: '',
        img: "https://camo.githubusercontent.com/6cf9abe9d706421df40ff4feff208a5728df2b77f9eb21f24d09df00a0d69203/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3030374143433f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465",
      },
      {
        url: '',
        img: "https://camo.githubusercontent.com/e0fe31b4bf5a7cffb35f18ee50fcdbe1f61bde74f893781502ba2bf708f270f6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a736f6e2d3545354335433f7374796c653d666f722d7468652d6261646765266c6f676f3d6a736f6e266c6f676f436f6c6f723d7768697465",
      },
      {
        url: '',
        img: "https://camo.githubusercontent.com/8849f369ac031cc842a4ab4248c7f7db6a4b593cad1f2d1c01d3aeb6f0f8dca7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536173732d4343363639393f7374796c653d666f722d7468652d6261646765266c6f676f3d73617373266c6f676f436f6c6f723d7768697465",
      },
      {
        url: '',
        img: "https://camo.githubusercontent.com/510a057988cb5216f5d297ee202f6a08fa179798926cea28e95910f6b8ca5535/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d61726b646f776e2d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d6d61726b646f776e266c6f676f436f6c6f723d7768697465",
      },
    ],
  },
  {
    title: "Technologies",
    children: [
      {
        url: '',
        img: "https://camo.githubusercontent.com/bd2bd127c104ba5c98bb12c70801b075aee1f040009089510f69554300e7ff41/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d4630353033323f7374796c653d666f722d7468652d6261646765266c6f676f3d676974266c6f676f436f6c6f723d7768697465",
      },
      {
        url: '',
        img: "https://camo.githubusercontent.com/50d43af9b68ef63015963f40aac894898d7c655ed221f0bce5013787a68aba26/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5675652e6a732d3335343935453f7374796c653d666f722d7468652d6261646765266c6f676f3d767565646f746a73266c6f676f436f6c6f723d344643303844",
      },
      {
        url: '',
        img: "https://camo.githubusercontent.com/a1eae878fdd3d1c1b687992ca74e5cac85f4b68e60a6efaa7bc8dc9883b71229/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3333393933333f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f6465646f746a73266c6f676f436f6c6f723d7768697465",
      },
      {
        url: '',
        img: "https://camo.githubusercontent.com/55037e0ff8e2c9df84ad631c3d0443a7316776ede7459a5872ccb336d7df2781/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e706d2d4342333833373f7374796c653d666f722d7468652d6261646765266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465",
      },
      {
        url: '',
        img: "https://camo.githubusercontent.com/7f88c331d6547df9a775272bef2dad90549b096b9ef1d542868d282b33096d4f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5961726e2d3243384542423f7374796c653d666f722d7468652d6261646765266c6f676f3d7961726e266c6f676f436f6c6f723d7768697465",
      },
      {
        url: '',
        img: "https://camo.githubusercontent.com/a2644ec12920fb2ed2639b63036bf15f541b48fd89e753f6dfcd1e6b0b2001e5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f456c656374726f6e2d3242324533413f7374796c653d666f722d7468652d6261646765266c6f676f3d656c656374726f6e266c6f676f436f6c6f723d394645414639",
      },
      {
        url: '',
        img: "https://camo.githubusercontent.com/0d05c68cacac5785826b31bdc804adbd19854a6387210318caac1427dfc7e8d9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5765627061636b2d3844443646393f7374796c653d666f722d7468652d6261646765266c6f676f3d5765627061636b266c6f676f436f6c6f723d7768697465",
      },
      {
        url: '',
        img: "https://camo.githubusercontent.com/0fb62d704898141bf5a5dfb5acc68901ecf35372bccde7bb9e5ca0164fb6e38d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f65736c696e742d3341333344313f7374796c653d666f722d7468652d6261646765266c6f676f3d65736c696e74266c6f676f436f6c6f723d7768697465",
      },
      {
        url: '',
        img: "https://camo.githubusercontent.com/f290e2c5e0f18a1b5344324a5489657d0faecef09e9b17a94148d6b384725897/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f70726574746965722d3141324333343f7374796c653d666f722d7468652d6261646765266c6f676f3d7072657474696572266c6f676f436f6c6f723d463742413345",
      },
    ],
  },
  {
    title: "Social",
    children: [
      {
        url: 'https://github.com/zhanyi233/',
        img: 'https://camo.githubusercontent.com/37a7cffb8b4d73c06dbfea643b9e783b144ed5383815c08bcffc9d40a1bee61c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73706f6e736f722d3330333633443f7374796c653d666f722d7468652d6261646765266c6f676f3d4769744875622d53706f6e736f7273266c6f676f436f6c6f723d237768697465',
      },
    ]
  },
];

const particlesInit = async (engine) => {
  await loadFull(engine);
};
</script>

<style lang="scss" scoped>
.about-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .form {
    margin: 100px auto 0 auto;
    width: 800px;
    border: 1px solid #d0d7de;
    color: #000;
    border-radius: 4px;
    padding: 24px;
    box-sizing: border-box;

    .title {
      font-size: 18px;
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
      }
    }
  }
}
</style>
