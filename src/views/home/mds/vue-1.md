### Q1：安装超时(install timeout)

```javascript
cnpm : 国内对npm的镜像版本
/*
cnpm website: https://npm.taobao.org/
*/
npm install -g cnpm --registry=https://registry.npm.taobao.org

// cnpm 的大多命令跟 npm 的是一致的,比如安装,卸载这些
yarn 和 npm 改源大法

//使用 nrm 模块 : www.npmjs.com/package/nrm
npm config : npm config set registry https://registry.npm.taobao.org
yarn config : yarn config set registry https://registry.npm.taobao.org
```

### Q2：安装一些需要编译的包:提示没有安装python、build失败等 

因为一些 npm 的包安装需要编译的环境,mac 和 linux 都还好,大多都齐全 window 用户依赖 visual studio 的一些库和python 2+, windows的小伙伴都装上: windows-build-tools python 2.x

### Q3：can’t not find ‘xxModule’ - 找不到某些依赖或者模块

这种情况一般报错信息可以看到是哪个包抛出的信息.，一般卸载这个模块,安装重新安装下即可.

### Q4：data functions should return an object

这个问题是 vue 实例内,单组件的data必须返回一个对象;如下

```javascript
export default {
  name: 'page-router-view',
      data () {
      return {
        tabs: [
          {
            title: '财务信息',
            url: '/userinfo'
          },
          {
            title: '帐号信息',
            url: '/userinfo/base'
          }
        ]
      }
    }
}
```

为什么要 return 一个数据对象呢? 官方解释如下: data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！简言之,组件复用下,不会造成数据同时指向一处,造出牵一发而动全身的破问题...