(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{751:function(a,t,s){"use strict";s.r(t);var e=s(9),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"eachsequential"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eachsequential"}},[a._v("#")]),a._v(" EachSequential")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"org.kestra.core.tasks.flows.EachSequential"')]),a._v("\n")])])]),s("blockquote",[s("p",[a._v("Execute a tasks for a list of value sequentially")])]),a._v(" "),s("p",[a._v("For each "),s("code",[a._v("value")]),a._v(", "),s("code",[a._v("tasks")]),a._v(" will be executed"),s("br"),a._v("\nThe value must be valid json string representing an arrays, like "),s("code",[a._v('["value1", "value2"]')]),a._v(" or "),s("code",[a._v('[{"key":"value1"}, {"key":"value2"}]')]),s("br"),a._v("\nThe current value is available on vars "),s("code",{pre:!0},[a._v("{{  taskrun.value  }}")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"each_sequential"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"org.kestra.core.tasks.flows.EachSequential"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'["value 1", "value 2", "value 3"]\'')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" each"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("value\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" org.kestra.core.tasks.debugs.Return\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"{{ task.id }} with current value '{{ taskrun.value }}'\"")]),a._v("\n")])])]),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[a._v("#")]),a._v(" Inputs")]),a._v(" "),s("h3",{attrs:{id:"errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[a._v("#")]),a._v(" "),s("code",[a._v("errors")])]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Type:")]),a._v(" "),s("mark",[a._v("array")])]),a._v(" "),s("li",[s("strong",[a._v("SubType:")]),a._v(" "),s("mark",[a._v("object")])]),a._v(" "),s("li",[s("strong",[a._v("Dynamic:")]),a._v(" ❓")]),a._v(" "),s("li",[s("strong",[a._v("Required:")]),a._v(" ❌")])]),a._v(" "),s("blockquote",[s("p",[a._v("List of tasks to run if any tasks failed on this FlowableTask")])]),a._v(" "),s("h3",{attrs:{id:"tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tasks"}},[a._v("#")]),a._v(" "),s("code",[a._v("tasks")])]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Type:")]),a._v(" "),s("mark",[a._v("array")])]),a._v(" "),s("li",[s("strong",[a._v("SubType:")]),a._v(" "),s("mark",[a._v("object")])]),a._v(" "),s("li",[s("strong",[a._v("Dynamic:")]),a._v(" ❓")]),a._v(" "),s("li",[s("strong",[a._v("Required:")]),a._v(" ✔️")]),a._v(" "),s("li",[s("strong",[a._v("Min items:")]),a._v(" "),s("code",[a._v("1")])])]),a._v(" "),s("h3",{attrs:{id:"value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#value"}},[a._v("#")]),a._v(" "),s("code",[a._v("value")])]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Type:")]),a._v(" "),s("mark",[a._v("string")])]),a._v(" "),s("li",[s("strong",[a._v("Dynamic:")]),a._v(" ❓")]),a._v(" "),s("li",[s("strong",[a._v("Required:")]),a._v(" ✔️")]),a._v(" "),s("li",[s("strong",[a._v("Min length:")]),a._v(" "),s("code",[a._v("1")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);