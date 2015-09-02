// Javascript 操作符与语句

// [操作符优先级]

// [1]操作符：
// 　　[1.1]一元操作符：只能操作一个值的操作符
// 　　　　[1.1.1]递增和递减操作符++ -- 有Number()的隐式类型转换
// 　　　　[1.1.2]一元加和减操作符+ - 有Number()的隐式类型转换
// 　　　　 [注意]可以使用一元加操作符将其他类型的数值转换为数字型

// 　　[1.2]位操作符：用内存中表示数值的位来操作数值。ECMAScript中的所有数值都以IEEE-754 64位格式存储，但位操作符先将64位的值转换成32位的整数，然后执行操作，最后再将结果转换回64位
// 　　　　[1.2.1]在对于NaN和Infinity应用位操作时，这两个值都会被当作0来处理
// 　　　　[1.2.2]对于非数值应用位操作符时，会先使用Number()将该值转换成数值再应用位操作
// 　　　　[1.2.3]按位非(NOT) ~ : 其本质是操作数的负值减1 e.g. ~ 25; //26
// 　　　　　　　 按位与(AND)& :只要有1位是0，就是0 e.g. 14 & 3 (1110) & (0011) => (0010);//2
// 　　　　　　　 按位或(OR)|: 只要有1位是1，就是1 e.g. 14 | 3 (1110) | (0011) => (1111);//15
// 　　　　　　　 按位异或（XOR）^:相同为0，否则为1 e.g. 14 ^ 3 (1110) ^ (0011) => (1101);//13
// 　　　　　　　 左移<< :左移不会影响符号位，左移多少位，相当于乘以2的多少次 e.g. 8 << 2 => 8*2*2 //32
// 　　　　　　　 有符号的右移>>:不会影响符号位，右移多少位，相当于除以2的多少次 e.g. 8 >> 2 =>8/(2*2)//2
// 　　　　　　　 无符号的右移>>>:会影响符号位
// 　　　　[1.2.4]应用：
// 　　　　　　[1.2.4.1]小数取整: 3.84 >> 0 //3
// 　　　　　　[1.2.4.2]不用任何中间变量交换值，原因是两次对同一个数作异或会还原 a ^ b ^ b = a
var n1 = 3; // (011)
var n2 = 5; // (101)
console.log(n1.toString(2), n2.toString(2));　　　　
n1 ^= n2; // 110
console.log(n1.toString(2), n2.toString(2));　　　
n2 ^= n1; // 011
console.log(n1.toString(2), n2.toString(2));　　　
n1 ^= n2; // 101
console.log(n1.toString(2), n2.toString(2));　　　
// 　　　　　　　　n1 = 3;(101) n2 = 5;(011)
// 　　　　　　[1.2.4.3]奇偶判断: if(num & 1)//奇数

// 　　[1.3]布尔操作符: 或|| 且&& 非!
// 　　　　[1.3.1]逻辑非 !,将它的操作数转换为一个布尔值，然后再对其求反
// 　　　　  [注意]同时使用两个逻辑非操作符，实际上就会模拟Boolean()转型函数的行为
// 　　　　[1.3.2]逻辑与 &&,短路操作，如果第一个操作数能够决定结果，就不会再对第二个操作数求值
// 　　　　  [注意]如果第一个为真，则返回第二个，如果第一个为假，则返回第一个
// 　　　　[1.3.3]逻辑或 ||,短路操作，如果第一个操作数结果为true，就不会再对第二个操作数求值
// 　　　　  [注意]如果第一个为真，则返回第一个，如果第一个为假，则返回第二个
// 　　　　[1.3.4]布尔操作符应用
// 　　　　　　[1.3.4.1] a||b 将b作为a的初始值
// 　　　　　　[1.3.4.2] a && a() 若a没有值，则执行结果为false;若a有值，则执行函数a();多用于回调函数

// 　　[1.4]乘性及加性操作符: * / % + -,有Number()的隐式类型转换
// 　　　　[1.4.1] *
// 　　　　　　+- Infinity * 0 = NaN
// 　　　　　　+- Infinity * +- n(包括Infinity) = +- Infinity
// 　　　　[1.4.2] /
// 　　　　　　+- Infinity / +- Infinity = NaN
// 　　　　　　0 / 0 = NaN
// 　　　　　　+- Infinity / +- n = +- Infinity
// 　　　　　　+- Infinity / 0 = +- Infinity
// 　　　　　　+- n / 0 = +- Infinity
// 　　　　[1.4.3] %
// 　　　　　　+- Infinity % +- Infinity = NaN
// 　　　　　　+- Infinity % +- n = NaN
// 　　　　　　+- n % 0 = NaN
// 　　　　[1.4.4] + 只要有一个是字符串，则+变为字符串连接符，否则是加法运算符
// 　　　　  [注意1]乘除优先级大于加减优先级，连接符优先级和加减优先级是同级
// 　　　　  [注意2]连字符和加号的优先级一样，尽量在加法运算和连字符同时出现时，给加法运算加上括号
// 　　　　[1.4.5] - Infinity - Infinity = NaN

// 　　[1.5]关系及相等操作符：> >= < <= == === != !==,结果都返回一个布尔值
// 　　　　[1.5.1]转换规则：只有两个操作数都是字符串时，才进行字符串比较，其他情况都转换成数字进行比较
// 　　　　  [注意]任何操作数与NaN比较都是false
// 　　　　[1.5.2]相等和全等
// 　　　　　　== :先转换再比较
// 　　　　　　=== : 仅比较不转换
// 　　　　  [注意]null == undefined

// 　　[1.6]条件操作符(三目操作符)
// 　　　　variable = boolean_expression ? true_value : false_value;
// 　　　　e.g. var max = (num1 > num2) ? num1 : num2;
// 　　  [注意]三个操作数不能有一个置空
// 　　　　e.g. 如果没有操作数可以写为:var a = a > 0 ? b : a; //将a赋给a，这样可以避免置空

// 　　[1.7]赋值操作符 = += -= *= /= <<= >>= >>>=
// 　　  [注意]两个字符之间不能有空格

// 　　[1.8]逗号操作符
// 　　　　[1.8.1]用来声明多个变量:var num1 = 1, num2 = 2, num3 = 3;
// 　　　　[1.8.2]用于赋值时，总会返回表达式中的最后一项:var num = (5,4,3,3,1);// num = 1

// [2]操作符的隐式类型转换
// 　　[2.1]Number()
// 　　　　　[2.1.1]一元操作符 ++ -- + -
// 　　　　　[2.1.2]位操作符 ~ & | ^ << >> >>>
// 　　　　　[2.1.3]算术操作符 * / % +(当操作数无字符串时) -
// 　　　　　[2.1.4]关系操作符(除去两个操作数都是字符串的情况) > >= < <= == === != !==

// 　　[2.2]Boolean()
// 　　　　[2.2.1]布尔操作符 或|| 且&& 非!
// 　　　　[2.2.2]各种语句中的判断条件

// 　　[2.3]String()
// 　　　　[2.3.1]对于 + 操作符而言，如果有字符串，则是字符串连接符

// 　　[2.4]Object
// 　　　　[2.4.1]一元操作符|减法操作符|关系操作符:先调用对象的valueOf()方法取得该对象的数值，如果结果是NaN，则在调用toString()方法
// 　　　　[2.4.2]加法操作符:调用toString()方法取得相应的字符串值

// [3]语句
// 　　[3.1]if语句:
// 　　　　if(condition){
// 　　　　　　statement1
// 　　　　}else{
// 　　　　　　statement2
// 　　　　}

// 　　[3.2]do-while语句:循环体中的代码至少执行一次
// 　　　　do{
// 　　　　　　statement
// 　　　　}while(expression)

// 　　[3.3]while语句：
// 　　　　while(expression){
// 　　　　　　statement
// 　　　　}

// 　　[3.4]for语句:for循环中的初始化、条件和自增是三条语句，所以要用分号，而不是逗号
// 　　　　for(initialization; expression; post-loop-expression){
// 　　　　　　statement;
// 　　　　}
// 　　  [注意]由于ECMAScript中不存在块级作用域，因此在循环内部定义的变量也可以在外部访问到

// 　　[3.5]for-in语句:通过for-in循环,所有属性都会被返回一次，但返回的先后次序可能会因浏览器而异
// 　　　　for(property in expression){
// 　　　　　　statement;
// 　　　　}
// 　　  [注意]如果表示要迭代对象的变量值为null或undefined, for-in语句会抛出错误,
//            js5不再抛出错误,只是不再执行循环体。
//            在使用for-in循环之前,先检测确认该对象的值不是null或undefined

// 　　[3.6]label、break、continue语句：
// 　　　　[3.6.1]label:在代码中添加自定义标签
// 　　　　[3.6.2]break:退出本重循环
// 　　　　[3.6.3]continue: 退出本次循环　　　　　　
a: for (var i = 0; i < 10; i++) {　　　　　　　　
	for (var j = 0; j < 10; j++) {　　　　　　　　　　
		if (j == 2) {　　　　　　　　　　　　
			break a;　　　　　　　　　　
		}　　　　　　　　
	}　　　　　　
}

// 　　[3.7]with语句:将代码的作用域设置到一个特定的对象中,作用是为了简化多次编写同一对象的的工作
// 　　　　with(expresstion){
// 　　　　　　statement;
// 　　　　}
// 　　　　with(location){
// 　　　　　　var qs = search.substring(1);
// 　　　　　　var hostName = hostname;
// 　　　　　　var url = href;
// 　　　　}
// 　　  [注意]严格模式下不允许使用with语句，否则将被视为语法错误，由于大量使用with语句会导致性能下降，同时也会给调试代码造成困难，因此在开发大型应用程序时，不建议使用with语句

// 　　[3.8]switch语句:可以使用任何数据类型，每个case的值不一定是常量，可以是变量，甚至是表达式
// 　　　　switch(expresstion){
// 　　　　　　case value1:
// 　　　　　　　　statement;
// 　　　　　　　　break;
// 　　　　　　case value2:
// 　　　　　　　　statement;
// 　　　　　　　　break;
// 　　　　　　default:
// 　　　　　　　　statement;
// 　　　　}
// 　　  [注意]switch语句在比较值时使用的是全等操作符，因此不会发生类型转换