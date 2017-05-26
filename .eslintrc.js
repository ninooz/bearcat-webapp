// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    globals: {
        'Vue': true,
        '$': true,
        'moment': true,
        '_': true,
        // 'this': true
        'zt_open_account': true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // 双峰驼命名格式
        "camelcase": 1,
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        // always-multiline：多行模式必须带逗号，单行模式不能带逗号
        "comma-dangle": [1, "never"],
        // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
        "array-bracket-spacing": [1, "never"],
        // if while function 后面的{必须与if在同一行，java风格
        "brace-style": [2, "1tbs", {"allowSingleLine": true}],
        // 行缩进
        "indent": [1, 4, {"SwitchCase": 1}],
        // 强制在对象字面量的属性中键和值之间使用一致的间距
        "key-spacing": [1, {"beforeColon": false, "afterColon": true}],
        // 要求在注释周围有空行      ( 要求在块级注释之前有一空行)
        "lines-around-comment": [1, {"beforeBlockComment": true}],
        // 要求构造函数首字母大写  （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
        "new-cap": [2, {"newIsCap": true, "capIsNew": false}],
        // 不允许多个空行
        "no-multiple-empty-lines": [1, {"max": 3}],
        //函数定义时括号前面要不要有空格
        "space-before-function-paren": [1, "always"],
        //禁止无效的this，只能用在构造器，类，对象字面量
        "no-invalid-this": 0,
        //语句强制分号结尾
        "semi": [1, "always"],
        //注释风格要不要有空格什么的
        "spaced-comment": 0,
        "no-trailing-spaces": 0,
        //变量定义后未使用
        "no-unused-vars": 1,
        "keyword-spacing": 1,
        // 文件末尾强制换行
        "eol-last": 1,
        // 必须使用全等
        "eqeqeq": 1,
        // 没有执行不到的代码
        'no-unreachable': 1
    }
}
