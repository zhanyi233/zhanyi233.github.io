### 1.随机获取布尔值（true/false）
此函数将使用`Math.random()`方法返回布尔值（真或假）。`Math.random`将创建一个介于0和1之间的随机数，然后我们检查它是否大于或小于0.5。这意味着您有50％/ 50％的机会得到对或错；
```javascript
const randomBoolean = () => Math.random() > = 0.5;
console.log(andomBoolean()); 
```
### 2.检查提供的日期是否为工作日
使用此方法，您将可以检查函数中提供的日期是工作日还是周末。
```javascript
const isWeekday = (date) => date.getDay() % 6 !== 0;
console.log(isWeekday(new Date(2021, 0, 11))); 
// 结果：true(星期一)
console.log(isWeekday(new Date(2021, 0, 10))); 
// 结果：false(星期日)

// 求余数 %
// 日：0 % 6 = 0
// 一：1 % 6 = 1
// 二：2 % 6 = 2
// 三：3 % 6 = 3
// 四：4 % 6 = 4
// 五：5 % 6 = 5
// 六：6 % 6 = 0
```
#### 求余数 %
三种情况：够除有余数、不够除、没有余数

1. 够除有余数：**案例1**：12除以5=2，余数是2，即5*2+2=12，所以12%5=2； **案例2**：7除以3=2，余数是1，即3*2+1=7，所以7%3=1；
2. 不够除，余数为除数：**案例1**：1除以2不够除，除数为1，所以余数为1，即1%2=1； **案例2**：2除以3不够除，除数为2，所以余数为2，即2%3=2；
3. 没有余数，所以为0：**案例1**：0%1=0；**案例2**：1%1=0；**案例3**：2%1=0；案例4：3%1=0；**案例5**：4%1=0；
### 3.反转字符串
有两种不同的方式可以反转字符串。这是使用最简单的人之一`split()`，`reverse()`和`join()`方法。
```javascript
const reverse = str => str.split('').reverse().join('');
```
### 4.检查当前选项卡是否在视图/焦点中
我们可以使用`document.hidden`属性检查当前标签页是否在视图/焦点中。
```javascript
const isBrowserTabInView = () => document.hidden;
isBrowserTabInView(); 
// 结果：根据选项卡是否在视图/焦点中，返回true或false
```
### 5.检查数字是偶数还是奇数
可以使用模运算符（`%`）解决的超简单任务。
```javascript
const isEven = num => num % 2 === 0;
console.log(isEven(2)); 
// 结果：true
console.log(isEven(3)); 
// 结果：false
```
### 6.从日期获取时间
通过使用该`.toTimeString()`方法并将字符串切片在正确的位置，我们可以从提供的日期中获取时间，也可以获取当前时间。
```javascript
const timeFromDate = date => date.toTimeString().slice(0, 8);
console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); 
// 结果："17:30:00"
console.log(timeFromDate(new Date())); 
// 结果：将记录当前时间
```
### 7.将数字截断为固定的小数点
使用该`Math.pow()`方法，我们可以将数字截断为函数中提供的某个小数点。
```javascript
const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
// Examples
toFixed(25.198726354, 1);       // 25.1
toFixed(25.198726354, 2);       // 25.19
toFixed(25.198726354, 3);       // 25.198
toFixed(25.198726354, 4);       // 25.1987
toFixed(25.198726354, 5);       // 25.19872
toFixed(25.198726354, 6);       // 25.198726
```
### 8.检查元素当前是否处于焦点
我们可以使用`document.activeElement`属性检查元素当前是否处于焦点。
```javascript
const elementIsInFocus = (el) => (el === document.activeElement);
elementIsInFocus(anyElement)
// Result: will return true if in focus, false if not in focus
```
### 9.检查当前用户是否支持触摸事件
```javascript
const touchSupported = () => {
  ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
}

console.log(touchSupported());
// Result: will return true if touch events are supported, false if not
```
### 10.检查当前用户是否在Apple设备上
我们可以`navigator.platform`用来检查当前用户是否在Apple设备上。
```javascript
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log(isAppleDevice);
// Result: will return true if user is on an Apple device
```
### 11.滚动到页面顶部
该`window.scrollTo()`方法将使用x和y坐标滚动到。如果将它们设置为零和零，则将滚动到页面顶部。<br />**注意：Internet Explorer不支持该**`**.scrollTo()**`**方法。**
```javascript
const goToTop = () => window.scrollTo(0, 0);
goToTop();
// Result: will scroll the browser to the top of the page
```
### 12.获取参数的平均值
我们可以使用reduce方法获取在此函数中提供的参数的平均值。
```javascript
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
average(1, 2, 3, 4);
// Result: 2.5
```
### 13.转换华氏/摄氏
**_最后一个是2合1！_**<br />应对温度有时会造成混乱。这两个功能将帮助您将华氏温度转换为摄氏温度，反之亦然。
```javascript
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;

const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

// Examples
celsiusToFahrenheit(15);    // 59
celsiusToFahrenheit(0);     // 32
celsiusToFahrenheit(-20);   // -4
fahrenheitToCelsius(59);    // 15
fahrenheitToCelsius(32);    // 0
```

