(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{820:function(t,a,s){"use strict";s.r(a);var e=s(9),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[s("img",{attrs:{width:"25",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiCiAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDIwIDIwIgogICAgIHN0eWxlPSItbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyI+CiAgICA8cGF0aAogICAgICAgIGQ9Ik0xMSAxMy44MjRWNi4xNzZBMi4zOTUgMi4zOTUgMCAwIDAgMTIuNCA0YTIuNCAyLjQgMCAxIDAtNC44IDBjMCAuOTY3LjU3NiAxLjc5NiAxLjQgMi4xNzZ2Ny42NDlBMi4zOTMgMi4zOTMgMCAwIDAgNy42IDE2YTIuNCAyLjQgMCAxIDAgNC44IDBjMC0uOTY3LS41NzUtMS43OTYtMS40LTIuMTc2ek0xMCAyLjYxNWExLjM4NCAxLjM4NCAwIDEgMSAwIDIuNzY4YTEuMzg0IDEuMzg0IDAgMCAxIDAtMi43Njh6bTAgMTQuNzdhMS4zODUgMS4zODUgMCAxIDEgMC0yLjc3YTEuMzg1IDEuMzg1IDAgMCAxIDAgMi43N3oiCiAgICAgICAgZmlsbD0iIzMzMyIvPgo8L3N2Zz4=",alt:"Sequential"}}),t._v(" Sequential\n")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.core.tasks.flows.Sequential"')]),t._v("\n")])])]),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sequential\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.tests\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sequential\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.flows.Sequential\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1st\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Return\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{task.id}} > {{taskrun.startDate}}"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2nd\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Return\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{task.id}} > {{taskrun.id}}"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" last\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Return\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{task.id}} > {{taskrun.startDate}}"')]),t._v("\n")])])]),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("h3",{attrs:{id:"errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[t._v("#")]),t._v(" "),s("code",[t._v("errors")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[s("a",{attrs:{href:"#task-2"}},[t._v("Task-2")])])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("List of tasks to run if any tasks failed on this FlowableTask")])]),t._v(" "),s("h3",{attrs:{id:"tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tasks"}},[t._v("#")]),t._v(" "),s("code",[t._v("tasks")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[s("a",{attrs:{href:"#task-2"}},[t._v("Task-2")])])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Min items:")]),t._v(" "),s("code",[t._v("1")])])]),t._v(" "),s("h2",{attrs:{id:"definitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[t._v("#")]),t._v(" Definitions")]),t._v(" "),s("h3",{attrs:{id:"task-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-2"}},[t._v("#")]),t._v(" "),s("code",[t._v("Task-2")])]),t._v(" "),s("h4",{attrs:{id:"type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" "),s("code",[t._v("type")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[s("a",{attrs:{href:"#task-1"}},[t._v("Task-1")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);