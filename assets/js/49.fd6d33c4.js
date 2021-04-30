(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{443:function(s,t,a){"use strict";a.r(t);var n=a(11),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"删除排序数组中的重复项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除排序数组中的重复项"}},[s._v("#")]),s._v(" 删除排序数组中的重复项")]),s._v(" "),a("p",[s._v("力扣🔗："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),a("p",[s._v("给定一个排序数组，你需要在 "),a("strong",[s._v("原地")]),s._v(" 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。")]),s._v(" "),a("p",[s._v("不要使用额外的数组空间，你必须在 "),a("strong",[s._v("原地")]),s._v(" "),a("strong",[s._v("修改输入数组")]),s._v(" 并在使用 O(1) 额外空间的条件下完成。")]),s._v(" "),a("p",[a("strong",[s._v("示例 1：")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("给定数组 nums = [1,1,2], \n\n函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 \n\n你不需要考虑数组中超出新长度后面的元素。\n")])])]),a("p",[a("strong",[s._v("示例 2：")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("给定 nums = [0,0,1,1,1,2,2,3,3,4],\n\n函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。\n\n你不需要考虑数组中超出新长度后面的元素。\n")])])]),a("p",[a("strong",[s._v("说明：")])]),s._v(" "),a("p",[s._v("为什么返回数值是整数，但输出的答案是数组呢?")]),s._v(" "),a("p",[s._v("请注意，输入数组是以**「引用」**方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。")]),s._v(" "),a("p",[s._v("你可以想象内部操作如下:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("  // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝\nint len = removeDuplicates(nums);\n\n// 在函数里修改输入数组对于调用者是可见的。\n// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。\nfor (int i = 0; i < len; i++) {\n    print(nums[i]);\n}\n")])])]),a("h2",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[s._v("#")]),s._v(" 解题思路")]),s._v(" "),a("ul",[a("li",[s._v("设置快慢双指针 "),a("code",[s._v("fast")]),s._v(" 和 "),a("code",[s._v("slow")]),s._v("，分别指向 "),a("code",[s._v("nums")]),s._v(" 的第二位和第一位。")]),s._v(" "),a("li",[s._v("比较两指针指向的值。如果 "),a("code",[s._v("nums[fast] === nums[slow]")]),s._v("，表示是重复项，往后移动快指针；如果 "),a("code",[s._v("nums[fast] !== nums[slow]")]),s._v("，表示是下一个非重复项，此时检查两指针距离是否超过 "),a("code",[s._v("1")]),s._v("，若超过则更新 "),a("code",[s._v("nums[slow + 1] = nums[fast]")]),s._v("，随后向后移动两指针。")]),s._v(" "),a("li",[s._v("重复上一步操作直到快指针到达 "),a("code",[s._v("nums")]),s._v(" 末尾，此时已将所有非重复项按序排列在该数组左端，返回 "),a("code",[s._v("slow + 1")]),s._v("，也就是非重复项组成的长度即可。")])]),s._v(" "),a("h2",{attrs:{id:"代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[s._v("#")]),s._v(" 代码实现")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */")]),s._v("\r\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeDuplicates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("nums")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 慢指针")]),s._v("\r\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" fast "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 快指针")]),s._v("\r\n\r\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fast "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 快指针跳过重复项")]),s._v("\r\n      fast"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fast "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\r\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果存在重复项，则修改慢指针后面一项的值为快指针指向的值")]),s._v("\r\n        nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\r\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\r\n      slow"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\r\n      fast"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\r\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\r\n\r\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\r\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\r\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);