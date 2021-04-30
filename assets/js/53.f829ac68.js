(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{448:function(t,s,a){"use strict";a.r(s);var n=a(11),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"罗马数字转整数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#罗马数字转整数"}},[t._v("#")]),t._v(" 罗马数字转整数")]),t._v(" "),a("p",[t._v("力扣🔗："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/roman-to-integer",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/roman-to-integer"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("罗马数字包含以下七种字符： "),a("code",[t._v("I")]),t._v("， "),a("code",[t._v("V")]),t._v("， "),a("code",[t._v("X")]),t._v("， "),a("code",[t._v("L")]),t._v("，"),a("code",[t._v("C")]),t._v("，"),a("code",[t._v("D")]),t._v(" 和 "),a("code",[t._v("M")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("字符          数值\nI             1\nV             5\nX             10\nL             50\nC             100\nD             500\nM             1000\n")])])]),a("p",[t._v("例如， 罗马数字 2 写做 "),a("code",[t._v("II")]),t._v(" ，即为两个并列的 1。12 写做 "),a("code",[t._v("XII")]),t._v(" ，即为 "),a("code",[t._v("X + II")]),t._v(" 。 27 写做 "),a("code",[t._v("XXVII")]),t._v(", 即为 "),a("code",[t._v("XX + V + II")]),t._v("。")]),t._v(" "),a("p",[t._v("通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 "),a("code",[t._v("IIII")]),t._v("，而是 "),a("code",[t._v("IV")]),t._v("。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 "),a("code",[t._v("IX")]),t._v("。这个特殊的规则只适用于以下六种情况：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("I")]),t._v(" 可以放在 "),a("code",[t._v("V")]),t._v(" (5) 和 "),a("code",[t._v("X")]),t._v(" (10) 的左边，来表示 4 和 9。")]),t._v(" "),a("li",[a("code",[t._v("X")]),t._v(" 可以放在 "),a("code",[t._v("L")]),t._v(" (50) 和 "),a("code",[t._v("C")]),t._v(" (100) 的左边，来表示 40 和 90。")]),t._v(" "),a("li",[a("code",[t._v("C")]),t._v(" 可以放在 "),a("code",[t._v("D")]),t._v(" (500) 和 "),a("code",[t._v("M")]),t._v(" (1000) 的左边，来表示 400 和 900。")])]),t._v(" "),a("p",[t._v("给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。")]),t._v(" "),a("p",[a("strong",[t._v("示例 1：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('输入: "III"\n输出: 3\n')])])]),a("p",[a("strong",[t._v("示例 2：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('输入: "IV"\n输出: 4\n')])])]),a("p",[a("strong",[t._v("示例 3：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('输入: "IX"\n输出: 9\n')])])]),a("p",[a("strong",[t._v("示例 4：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('输入: "LVIII"\n输出: 58\n解释: L = 50, V= 5, III = 3.\n')])])]),a("p",[a("strong",[t._v("示例 5：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('输入: "MCMXCIV"\n输出: 1994\n解释: M = 1000, CM = 900, XC = 90, IV = 4.\n')])])]),a("p",[a("strong",[t._v("提示：")])]),t._v(" "),a("ul",[a("li",[t._v("题目所给测试用例皆符合罗马数字书写规则，不会出现跨位等情况。")]),t._v(" "),a("li",[t._v("IC 和 IM 这样的例子并不符合题目要求，49 应该写作 XLIX，999 应该写作 CMXCIX 。")]),t._v(" "),a("li",[t._v("关于罗马数字的详尽书写规则，可以参考 "),a("a",{attrs:{href:"https://b2b.partcommunity.com/community/knowledge/zh_CN/detail/10753/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97#knowledge_article",target:"_blank",rel:"noopener noreferrer"}},[t._v("罗马数字 - Mathematics"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" 解题思路")]),t._v(" "),a("ul",[a("li",[t._v("从左往右依次遍历每一个罗马数字，将其转为整数并逐个求和。")]),t._v(" "),a("li",[t._v("当前面的罗马数字比后面的罗马数字小时，则代表是特殊组合，如 "),a("code",[t._v("IV")]),t._v("，此时需要减去两倍前面罗马数字代表的整数。")])]),t._v(" "),a("h2",{attrs:{id:"代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\r\n * @param {string} s\r\n * @return {number}\r\n */")]),t._v("\r\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("romanToInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("L")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("M")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" \r\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" loop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" \r\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" current "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前循环的罗马数字")]),t._v("\r\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" prev "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上一次循环的罗马数字")]),t._v("\r\n\r\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("loop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("loop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果前面的罗马数字比当前的罗马数字小，则代表是特殊组合")]),t._v("\r\n      result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n\r\n    prev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current\r\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\r\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n\r\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\r\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);