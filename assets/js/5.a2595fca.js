(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(t,e,s){"use strict";s.r(e);var n=s(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),s("center",[t._v("Build great things at any scale")]),s("p",[s("a",{attrs:{href:"https://jenkins.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jenkins"),s("OutboundLink")],1),t._v("是用来持续集成的利器，它可以帮我们打包（build）、跑测试（test）、部署到测试或者生产环境（deploy）")]),t._m(2),s("p",[t._v("首先确保您的电脑安装了"),s("a",{attrs:{href:"https://www.docker.com/docker-mac",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),s("OutboundLink")],1),t._v("，推荐国内docker镜像仓库"),s("a",{attrs:{href:"https://c.163.com/hub#/m/home/",target:"_blank",rel:"noopener noreferrer"}},[t._v("网易蜂巢"),s("OutboundLink")],1)]),t._m(3),s("p",[t._v("命令介绍")]),t._m(4),t._m(5),s("p",[t._v("docker run 命令执行后在浏览器打开 http://localhost:8080")]),s("p",[t._v("按照下图步骤初始化jenkins")]),t._m(6),t._m(7),s("p",[t._v("点击 系统管理 > 管理插件 > 可选插件 > nodeJs Plugin")]),s("p",[t._v("安装成功后")]),s("p",[t._v("点击 系统管理 > Global Tool Configuration，参考下图配置")]),t._m(8),t._m(9),s("p",[t._v("配置git访问权限，参考下图")]),s("p",[t._v("第一步")]),t._m(10),s("p",[t._v("第二步")]),t._m(11),t._m(12),t._m(13),t._m(14),s("p",[t._v("使用Git获取源代码")]),t._m(15),s("p",[t._v("配置构建环境和脚本")]),t._m(16),t._m(17),s("p",[t._v("点击立即构建，待构建完成W显示的是个太阳说明构建成功。")]),t._m(18),t._m(19),s("p",[t._v("本项目展示的是一个Web前端项目的构建过程，Jenkins还可以构建Android Apk，Java War包等更多构建需求。")]),s("p",[t._v("构建执行完毕，可以执行各种bash命令以及SSH远程命令，完成最终的发布过程。")])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"jenkins使用及部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins使用及部署","aria-hidden":"true"}},[this._v("#")]),this._v(" Jenkins使用及部署")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://otj0cetqv.bkt.clouddn.com/170723/jenkins_icon.jpg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-docker extra-class"},[s("pre",{pre:!0,attrs:{class:"language-docker"}},[s("code",[t._v("docker pull hub.c.163.com/library/jenkins"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\ndocker run "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p 8080"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8080 "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p 50000"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("50000 "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("v /your/home"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/jenkins_home hub.c.163.com/library/jenkins"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("docker pull image_path // 下载一个镜像")]),e("li",[this._v("docker run // 启动容器\n"),e("ul",[e("li",[this._v("-p 将本地的8080映射到容器的8080")]),e("li",[this._v("-v 将本地的路径挂载到容器的/var/jenkins_home路径")]),e("li",[this._v("最后一个参数是镜像名称")]),e("li",[this._v("还可加入-d命令，使容器可以运行在后台")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://otj0cetqv.bkt.clouddn.com/170723/jenkins_start_1.png",alt:""}}),e("img",{attrs:{src:"http://otj0cetqv.bkt.clouddn.com/170723/jenkins_start_2.png",alt:""}}),e("img",{attrs:{src:"http://otj0cetqv.bkt.clouddn.com/170723/jenkins_start_3.png",alt:""}}),e("img",{attrs:{src:"http://otj0cetqv.bkt.clouddn.com/170723/jenkins_start_4.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"安装jenkins插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装jenkins插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装jenkins插件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://otj0cetqv.bkt.clouddn.com/170723/jenkins_start_5.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"配置ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置ssh","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置SSH")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://otj0cetqv.bkt.clouddn.com/170723/jenkins_start_6.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们配置SSH的方式访问代码仓库，把ssh的 "),e("strong",[this._v("私钥")]),this._v(" 复制到此处")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://otj0cetqv.bkt.clouddn.com/170723/jenkins_start_7.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"创建job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建job","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建Job")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://otj0cetqv.bkt.clouddn.com/170723/jenkins_start_8.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://otj0cetqv.bkt.clouddn.com/170723/jenkins_start_9.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://otj0cetqv.bkt.clouddn.com/170723/jenkins_start_10.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"控制台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控制台","aria-hidden":"true"}},[this._v("#")]),this._v(" 控制台")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://otj0cetqv.bkt.clouddn.com/170723/jenkins_start_11.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])}],!1,null,null,null);e.default=r.exports}}]);