(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{674:function(t,e,a){"use strict";a.r(e);var v=a(9),r=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("\n     Slack\n")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.plugin.singer.taps.Slack"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("A Singer tap to fetch data from a GitHub api.")])]),t._v(" "),a("p",[t._v("Full documentation can be found "),a("a",{attrs:{href:"https://github.com/Mashey/tap-slack",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("h3",{attrs:{id:"apitoken"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apitoken"}},[t._v("#")]),t._v(" "),a("code",[t._v("apiToken")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Min length:")]),t._v(" "),a("code",[t._v("1")])])]),t._v(" "),a("blockquote",[a("p",[t._v("a GitHub personnal access token")])]),t._v(" "),a("p",[t._v("Login to your GitHub account, go to the "),a("a",{attrs:{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("Personal Access Tokens"),a("OutboundLink")],1),t._v(" settings page, and generate a new token with at least the "),a("code",[t._v("repo")]),t._v(" scope.")]),t._v(" "),a("h3",{attrs:{id:"archivedchannels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#archivedchannels"}},[t._v("#")]),t._v(" "),a("code",[t._v("archivedChannels")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Sync Archived Channels.")])]),t._v(" "),a("p",[t._v("Specifies whether the tap will sync archived channels or not. Note that a bot cannot join an archived channel, so unless the bot was added to the channel prior to it being archived it will not be able to sync the data from that channel.")]),t._v(" "),a("h3",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args"}},[t._v("#")]),t._v(" "),a("code",[t._v("args")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Python command args")])]),t._v(" "),a("p",[t._v("Arguments list to pass to main python script")]),t._v(" "),a("h3",{attrs:{id:"channels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channels"}},[t._v("#")]),t._v(" "),a("code",[t._v("channels")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Channels to Sync.")])]),t._v(" "),a("p",[t._v("By default the tap will sync all channels it has been invited to, but this can be overriden to limit it ot specific channels. Note this needs to be channel ID, not the name, as recommended by the Slack API. To get the ID for a channel, either use the Slack API or find it in the URL.")]),t._v(" "),a("h3",{attrs:{id:"datewindowsize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datewindowsize"}},[t._v("#")]),t._v(" "),a("code",[t._v("dateWindowSize")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("7")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Channels to Sync.")])]),t._v(" "),a("p",[t._v("Due to the potentially high volume of data when syncing certain streams (messages, files, threads) this tap implements date windowing based on a configuration parameter.5 means the tap to sync 5 days of data per request, for applicable streams.")]),t._v(" "),a("h3",{attrs:{id:"env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[t._v("#")]),t._v(" "),a("code",[t._v("env")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Additional environnements variable to add for current process.")])]),t._v(" "),a("h3",{attrs:{id:"exitonfailed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exitonfailed"}},[t._v("#")]),t._v(" "),a("code",[t._v("exitOnFailed")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("true")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Exit if any non true return value")])]),t._v(" "),a("p",[t._v("This tells bash that it should exit the script if any statement returns a non-true return value."),a("br"),t._v("\nThe benefit of using -e is that it prevents errors snowballing into serious issues when they could have been caught earlier.")]),t._v(" "),a("h3",{attrs:{id:"files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[t._v("#")]),t._v(" "),a("code",[t._v("files")])]),t._v(" "),a("p",[t._v("🔒 "),a("em",[t._v("Deprecated")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The list of files that will be uploaded to internal storage,")])]),t._v(" "),a("p",[t._v("use "),a("code",[t._v("outputsFiles")]),t._v(" property instead")]),t._v(" "),a("h3",{attrs:{id:"inputfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputfiles"}},[t._v("#")]),t._v(" "),a("code",[t._v("inputFiles")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Input files are extra files supplied by user that make it simpler organize code.")])]),t._v(" "),a("p",[t._v("Describe a files map that will be written and usable in execution context. In python execution context is in a temp folder, for bash scripts, you can reach files using a inputsDirectory variable like 'source "+t._s(t.inputsDirectory)+"/myfile.sh'")]),t._v(" "),a("h3",{attrs:{id:"interpreter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interpreter"}},[t._v("#")]),t._v(" "),a("code",[t._v("interpreter")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("/bin/sh")])]),t._v(" "),a("li",[a("strong",[t._v("Min length:")]),t._v(" "),a("code",[t._v("1")])])]),t._v(" "),a("p",[t._v("Interpreter to used")]),t._v(" "),a("h3",{attrs:{id:"interpreterargs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interpreterargs"}},[t._v("#")]),t._v(" "),a("code",[t._v("interpreterArgs")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("[-c]")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Interpreter args used")])]),t._v(" "),a("h3",{attrs:{id:"outputfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputfiles"}},[t._v("#")]),t._v(" "),a("code",[t._v("outputFiles")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Output file list that will be uploaded to internal storage")])]),t._v(" "),a("p",[t._v("List of key that will generate temporary files."),a("br"),t._v("\nOn the command, just can use with special variable named "),a("code",[t._v("outputFiles.key")]),t._v("."),a("br"),t._v("\nIf you add a files with "),a("code",[t._v('["first"]')]),t._v(", you can use the special vars "),a("code",[t._v("echo 1 >> {[ outputFiles.first }}")]),t._v(" and you used on others tasks using "),a("code",{pre:!0},[t._v("{{  outputs.task-id.files.first  }}")])]),t._v(" "),a("h3",{attrs:{id:"outputsfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputsfiles"}},[t._v("#")]),t._v(" "),a("code",[t._v("outputsFiles")])]),t._v(" "),a("p",[t._v("🔒 "),a("em",[t._v("Deprecated")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Deprecated Output file")])]),t._v(" "),a("p",[t._v("use "),a("code",[t._v("outputFiles")])]),t._v(" "),a("h3",{attrs:{id:"privatechannels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#privatechannels"}},[t._v("#")]),t._v(" "),a("code",[t._v("privateChannels")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("true")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Join Private Channels.")])]),t._v(" "),a("p",[t._v("Specifies whether to sync private channels or not.")]),t._v(" "),a("h3",{attrs:{id:"publicchannels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publicchannels"}},[t._v("#")]),t._v(" "),a("code",[t._v("publicChannels")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Join Public Channels.")])]),t._v(" "),a("p",[t._v("Specifies whether to have the tap auto-join all public channels in your ogranziation.")]),t._v(" "),a("h3",{attrs:{id:"pythonpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pythonpath"}},[t._v("#")]),t._v(" "),a("code",[t._v("pythonPath")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("/usr/bin/python3")])]),t._v(" "),a("li",[a("strong",[t._v("Min length:")]),t._v(" "),a("code",[t._v("1")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The python interpreter to use")])]),t._v(" "),a("p",[t._v("Set the python interpreter path to use")]),t._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" "),a("code",[t._v("requirements")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Requirements are python dependencies to add to the python execution process")])]),t._v(" "),a("p",[t._v("Python dependencies list to setup in the virtualenv, in the same format than requirements.txt")]),t._v(" "),a("h3",{attrs:{id:"startdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#startdate"}},[t._v("#")]),t._v(" "),a("code",[t._v("startDate")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),a("blockquote",[a("p",[t._v("Determines how much historical data will be extracted.")])]),t._v(" "),a("p",[t._v("Please be aware that the larger the time period and amount of data, the longer the initial extraction can be expected to take.")]),t._v(" "),a("h3",{attrs:{id:"streamsconfigurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#streamsconfigurations"}},[t._v("#")]),t._v(" "),a("code",[t._v("streamsConfigurations")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Min items:")]),t._v(" "),a("code",[t._v("1")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The list of stream configurations")])]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("h3",{attrs:{id:"count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#count"}},[t._v("#")]),t._v(" "),a("code",[t._v("count")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Counter of streams")])]),t._v(" "),a("h3",{attrs:{id:"schemas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schemas"}},[t._v("#")]),t._v(" "),a("code",[t._v("schemas")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Map of schemas captured")])]),t._v(" "),a("p",[t._v("Key is stream name, value is uri of the schema file on ion kestra storage")]),t._v(" "),a("h3",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" "),a("code",[t._v("state")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Uri of the state file")])]),t._v(" "),a("h3",{attrs:{id:"streams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#streams"}},[t._v("#")]),t._v(" "),a("code",[t._v("streams")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Map of stream captured")])]),t._v(" "),a("p",[t._v("Key is stream name, value is uri of the stream file on ion kestra storage")])])}),[],!1,null,null,null);e.default=r.exports}}]);