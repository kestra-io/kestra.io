(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{395:function(t,e,a){"use strict";a.r(e);var s=a(25),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"download"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[t._v("#")]),t._v(" Download")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.aws.s3.Download"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Download a file to a S3 bucket.")])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"download"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.aws.s3.Download"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bucket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-bucket"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/file"')]),t._v("\n")])])]),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("h3",{attrs:{id:"accesskeyid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accesskeyid"}},[t._v("#")]),t._v(" "),a("code",[t._v("accessKeyId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The Access Key Id in order to connect to AWS")])]),t._v(" "),a("p",[t._v("If no connection is defined, we will use default DefaultCredentialsProvider that will try to guess the value")]),t._v(" "),a("h3",{attrs:{id:"bucket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bucket"}},[t._v("#")]),t._v(" "),a("code",[t._v("bucket")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The bucket where to download the file")])]),t._v(" "),a("h3",{attrs:{id:"key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[t._v("#")]),t._v(" "),a("code",[t._v("key")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The key where to download the file")])]),t._v(" "),a("h3",{attrs:{id:"region"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#region"}},[t._v("#")]),t._v(" "),a("code",[t._v("region")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The AWS region to used")])]),t._v(" "),a("h3",{attrs:{id:"requestpayer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestpayer"}},[t._v("#")]),t._v(" "),a("code",[t._v("requestPayer")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Sets the value of the RequestPayer property for this object.")])]),t._v(" "),a("h3",{attrs:{id:"secretkeyid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secretkeyid"}},[t._v("#")]),t._v(" "),a("code",[t._v("secretKeyId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The Secret Key Id in order to connect to AWS")])]),t._v(" "),a("p",[t._v("If no connection is defined, we will use default DefaultCredentialsProvider that will try to guess the value")]),t._v(" "),a("h3",{attrs:{id:"versionid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versionid"}},[t._v("#")]),t._v(" "),a("code",[t._v("versionId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("VersionId used to reference a specific version of the object.")])]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("h3",{attrs:{id:"contentlength"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contentlength"}},[t._v("#")]),t._v(" "),a("code",[t._v("contentLength")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Size of the body in bytes.")])]),t._v(" "),a("h3",{attrs:{id:"contenttype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contenttype"}},[t._v("#")]),t._v(" "),a("code",[t._v("contentType")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("A standard MIME type describing the format of the object data.")])]),t._v(" "),a("h3",{attrs:{id:"metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata"}},[t._v("#")]),t._v(" "),a("code",[t._v("metadata")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("blockquote",[a("p",[t._v("A map of metadata to store with the object in S3.")])]),t._v(" "),a("h3",{attrs:{id:"uri"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[t._v("#")]),t._v(" "),a("code",[t._v("uri")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("h3",{attrs:{id:"versionid-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versionid-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("versionId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Version of the object.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);