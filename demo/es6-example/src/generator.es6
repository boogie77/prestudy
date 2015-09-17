// 深入解析js异步编程利器Generator

// 我们在编写Nodejs程序时，经常会用到回调函数，在一个操作执行完成之后对返回的数据进行处理，我简单的理解它为异步编程。
// 如果操作很多，那么回调的嵌套就会必不可少，那么如果操作非常多，那么回调的嵌套就会变得让人无法忍受了。
// 我们知道的Promises就是问了解决这个问题而提出来的。
// 然而，promises并不是一种新的功能，它只是一种新的写法，原来横向发展的回调函数，被排成了队竖向发展。
// 然而，Generator不同，它是一种新的解决方案。