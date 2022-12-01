// コンストラクタを定義する
function Person(name, age) {
    this.name = name;
    this.age = age;

    // 非効率なやり方
    // this.getName = function() {
    //     return this.name;
    // };
}
// プロトタイプを宣言
Person.prototype.getName = function() {
    return this.name;
}

var person = new Person('John', 20);
console.log(person.getName());

Person.prototype.getName = function() {
    return `Hello ${this.name}`;
}

console.log(person.getName());