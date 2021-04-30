(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{423:function(t,s,a){"use strict";a.r(s);var n=a(11),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"最接近的三数之和"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最接近的三数之和"}},[t._v("#")]),t._v(" 最接近的三数之和")]),t._v(" "),a("p",[t._v("力扣🔗："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/3sum-closest",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/3sum-closest"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("给定一个包括 n 个整数的数组 "),a("code",[t._v("nums")]),t._v(" 和 一个目标值 "),a("code",[t._v("target")]),t._v("。找出 "),a("code",[t._v("nums")]),t._v(" 中的三个整数，使得它们的和与 "),a("code",[t._v("target")]),t._v(" 最接近。返回这三个数的和。假定每组输入只存在唯一答案。")]),t._v(" "),a("p",[a("strong",[t._v("示例：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("输入：nums = [-1,2,1,-4], target = 1\n输出：2\n解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。\n")])])]),a("p",[a("strong",[t._v("提示：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("3 <= nums.length <= 10^3")])]),t._v(" "),a("li",[a("code",[t._v("-10^3 <= nums[i] <= 10^3")])]),t._v(" "),a("li",[a("code",[t._v("-10^4 <= target <= 10^4")])])]),t._v(" "),a("h2",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" 解题思路")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("首先将 "),a("code",[t._v("nums")]),t._v(" 由小到大进行排序。")])]),t._v(" "),a("li",[a("p",[t._v("然后从左往右依次遍历 "),a("code",[t._v("nums")]),t._v(" 中每个值，记录索引值为 "),a("code",[t._v("base")]),t._v("，直到 "),a("code",[t._v("base")]),t._v(" 等于 "),a("code",[t._v("nums.length - 3")]),t._v("，也就是倒数第三个整数。若 "),a("code",[t._v("nums[base] === num[base - 1]")]),t._v("，则跳过当前循环。")])]),t._v(" "),a("li",[a("p",[t._v("在每个循环体中，"),a("code",[t._v("nums[base]")]),t._v(" 作为固定的加数，设置左指针 "),a("code",[t._v("left")]),t._v(" 和右指针 "),a("code",[t._v("right")]),t._v("，初始值分别为 "),a("code",[t._v("base + 1")]),t._v(" 和 "),a("code",[t._v("nums.length - 1")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("变量 "),a("code",[t._v("result")]),t._v(" 表示结果，变量 "),a("code",[t._v("sum")]),t._v(" 表示当前循环中的三数之和 "),a("code",[t._v("nums[base] + nums[left] + nums[right]")]),t._v("。根据以下情况移动双指针：")]),t._v(" "),a("ul",[a("li",[t._v("当 "),a("code",[t._v("sum < target")]),t._v(" 时，表示左边两数之和较小，因此向右移动左指针。")]),t._v(" "),a("li",[t._v("当 "),a("code",[t._v("sum > target")]),t._v(" 时，表示左边两数之和较大，因此向左移动右指针。")]),t._v(" "),a("li",[t._v("当 "),a("code",[t._v("sum === target")]),t._v(" 时，表示已是最接近 "),a("code",[t._v("target")]),t._v(" 的数，因此直接返回 "),a("code",[t._v("sum")]),t._v("。")]),t._v(" "),a("li",[t._v("如果当前三数之和更接近 "),a("code",[t._v("target")]),t._v(" 或 "),a("code",[t._v("result")]),t._v(" 未赋值，则更新 "),a("code",[t._v("result = sum")]),t._v("。")])])])]),t._v(" "),a("h2",{attrs:{id:"代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\r\n * @param {number[]} nums\r\n * @param {number} target\r\n * @return {number}\r\n */")]),t._v("\r\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("threeSumClosest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n  nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由小到大对数组进行排序")]),t._v("\r\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\r\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result\r\n\r\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" base "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" base "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("base "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" base "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 左指针")]),t._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 右指针")]),t._v("\r\n\r\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每循环一次，当前的 nums[base] 作为不变的加数，移动双指针寻找符合条件的值")]),t._v("\r\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\r\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum\r\n\r\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当三数之和小于 target 时，向右移动左指针")]),t._v("\r\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当左指针指向的值与它右边的值相等时，向右移动左指针")]),t._v("\r\n          left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\r\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n        left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\r\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当三数之和大于 target 时，向右移动左指针")]),t._v("\r\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当右指针指向的值与它左边的值相等时，向左移动右指针")]),t._v("\r\n          right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\r\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n        right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\r\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n\r\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果当前三数之和更接近 target 或者 result 未赋值，则对 result 进行更新 ")]),t._v("\r\n        result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum\r\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n\r\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\r\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);