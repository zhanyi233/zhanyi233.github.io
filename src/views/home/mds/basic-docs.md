##### 1.说一下常见的 git 操作

```javascript
git branch 查看本地所有分支
git status 查看当前状态
git commit 提交
git branch -a 查看所有的分支
git branch -r 查看远程所有分支
git commit -am "init" 提交并且加注释
git remote add origin git@192.168.1.119:ndshow
git push origin master 将文件给推到服务器上
git remote show origin 显示远程库origin里的资源
git push origin master:develop
git push origin master:hb-dev 将本地库与服务器上的库进行关联
git checkout --track origin/dev 切换到远程dev分支
git branch -D master develop 删除本地库develop
git checkout -b dev 建立一个新的本地分支dev
git merge origin/dev 将分支dev与当前分支进行合并
git checkout dev 切换到本地dev分支
git remote show 查看远程库
git add .
git rm 文件名(包括路径) 从git中删除指定文件
git clone git://github.com/schacon/grit.git 从服务器上将代码给拉下来
git config --list 看所有用户
git ls-files 看已经被提交的
git rm [file name] 删除一个文件
git commit -a 提交当前repos的所有的改变
git add [file name] 添加一个文件到git index
git commit -v 当你用－v参数的时候可以看commit的差异
git commit -m "This is the message describing the commit" 添加commit信息
git commit -a -a是代表add，把所有的change加到git index里然后再commit
git commit -a -v 一般提交命令
git log 看你commit的日志
git diff 查看尚未暂存的更新
git rm a.a 移除文件(从暂存区和工作区中删除)
git rm --cached a.a 移除文件(只从暂存区中删除)
git commit -m "remove" 移除文件(从Git中删除)
git rm -f a.a 强行移除修改后文件(从暂存区和工作区中删除)
git diff --cached 或 $ git diff --staged 查看尚未提交的更新
git stash push 将文件给push到一个临时空间中
git stash pop 将文件从临时空间pop下来
```
##### 2.说一下怎么把类数组转换为数组?

```
//通过call调用数组的slice方法来实现转换
Array.prototype.slice.call(arrayLike)

//通过call调用数组的splice方法来实现转换
Array.prototype.splice.call(arrayLike,0)

//通过apply调用数组的concat方法来实现转换
Array.prototype.concat.apply([],arrayLike)

//通过Array.from方法来实现转换
Array.from(arrayLike)
```

##### 3.说一下slice splice split 的区别?

```
/ slice(start,[end])
// slice(start,[end])方法：该方法是对数组进行部分截取，该方法返回一个新数组
// 参数start是截取的开始数组索引，end参数等于你要取的最后一个字符的位置值加上1（可选）。
// 包含了源函数从start到 end 所指定的元素，但是不包括end元素，比如a.slice(0,3)；
// 如果出现负数就把负数与长度相加后再划分。
// slice中的负数的绝对值若大于数组长度就会显示所有数组
// 若参数只有一个，并且参数大于length，则为空。
// 如果结束位置小于起始位置，则返回空数组
// 返回的个数是end-start的个数
// 不会改变原数组
var arr = [1,2,3,4,5,6]
/*console.log(arr.slice(3))//[4,5,6] 从下标为0的到3，截取3之后的数
console.log(arr.slice(0,3))//[1,2,3] 从下标为0的地方截取到下标为3之前的数
console.log(arr.slice(0,-2))//[1,2,3,4]
console.log(arr.slice(-4,4))//[3,4]
console.log(arr.slice(-7))//[1,2,3,4,5,6]
console.log(arr.slice(-3,-3))// []
console.log(arr.slice(8))//[]*/
// 个人总结：slice的参数如果是正数就从左往右数，如果是负数的话就从右往左边数，
// 截取的数组与数的方向一致，如果是2个参数则截取的是数的交集，没有交集则返回空数组 
// ps：slice也可以切割字符串，用法和数组一样，但要注意空格也算字符
```

```
// splice(start,deletecount,item)
// start：起始位置
// deletecount：删除位数
// item：替换的item
// 返回值为被删除的字符串
// 如果有额外的参数，那么item会插入到被移除元素的位置上。
// splice:移除，splice方法从array中移除一个或多个数组，并用新的item替换它们。
//举一个简单的例子 
var a=['a','b','c']; 
var b=a.splice(1,1,'e','f'); 
 console.log(a) //['a', 'e', 'f', 'c']
 console.log(b) //['b']

 var a = [1, 2, 3, 4, 5, 6];
//console.log("被删除的为：",a.splice(1, 1, 8, 9)); //被删除的为：2
// console.log("a数组元素：",a); //1,8,9,3,4,5,6

// console.log("被删除的为：", a.splice(0, 2)); //被删除的为：1,2
// console.log("a数组元素：", a) //3,4,5,6
console.log("被删除的为：", a.splice(1, 0, 2, 2)) //插入 第二个数为0，表示删除0个  
console.log("a数组元素：", a) //1,2,2,2,3,4,5,6
```

```
// split(字符串)
// string.split(separator,limit)：split方法把这个string分割成片段来创建一个字符串数组。
// 可选参数limit可以限制被分割的片段数量。
// separator参数可以是一个字符串或一个正则表达式。
// 如果separator是一个空字符，会返回一个单字符的数组，不会改变原数组。
var a="0123456";  
var b=a.split("",3);  
console.log(b);//b=["0","1","2"]
// 注意：String.split() 执行的操作与 Array.join 执行的操作是相反的。
```