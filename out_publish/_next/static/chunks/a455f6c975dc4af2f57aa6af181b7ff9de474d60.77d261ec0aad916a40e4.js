(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"1OyB":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return o}))},"2rMq":function(e,t,n){var o;!function(){"use strict";var r=!("undefined"===typeof window||!window.document||!window.document.createElement),i={canUseDOM:r,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return i}.call(t,n,t,e))||(e.exports=o)}()},SPKb:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var o=n("1OyB"),r=n("vuIU"),i=n("U8pU"),a=n("JX7q");function s(e,t){return!t||"object"!==Object(i.a)(t)&&"function"!==typeof t?Object(a.a)(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}var d=n("rePB"),p=n("q1tI"),f=n.n(p),h=n("17x9"),w=n.n(h),m=n("dAtF"),g=n.n(m),b=n("2rMq"),v=n.n(b),y="https://platform.twitter.com/widgets.js",O=function(e){function t(e){var n;return Object(o.a)(this,t),(n=s(this,c(t).call(this,e))).state={isLoading:!0},n}return l(t,e),Object(r.a)(t,[{key:"buildChromeOptions",value:function(e){return e.chrome="",this.props.noHeader&&(e.chrome=e.chrome+" noheader"),this.props.noFooter&&(e.chrome=e.chrome+" nofooter"),this.props.noBorders&&(e.chrome=e.chrome+" noborders"),this.props.noScrollbar&&(e.chrome=e.chrome+" noscrollbar"),this.props.transparent&&(e.chrome=e.chrome+" transparent"),e}},{key:"buildOptions",value:function(){var e=Object.assign({},this.props.options);return this.props.autoHeight&&(e.height=this.refs.embedContainer.parentNode.offsetHeight),e=Object.assign({},e,{theme:this.props.theme,linkColor:this.props.linkColor,borderColor:this.props.borderColor,lang:this.props.lang})}},{key:"renderWidget",value:function(e){var t=this,n=this.props.onLoad;this.isMountCanceled||window.twttr.widgets.createTimeline({sourceType:this.props.sourceType,screenName:this.props.screenName,userId:this.props.userId,ownerScreenName:this.props.ownerScreenName,slug:this.props.slug,id:this.props.id||this.props.widgetId,url:this.props.url},this.refs.embedContainer,e).then((function(e){t.setState({isLoading:!1}),n&&n(e)}))}},{key:"componentDidMount",value:function(){var e=this;v.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){if(window.twttr){var t=e.buildOptions();t=e.buildChromeOptions(t),e.renderWidget(t)}else console.error("Failure to load window.twttr in TwitterTimelineEmbed, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return f.a.createElement(f.a.Fragment,null,e&&t,f.a.createElement("div",{ref:"embedContainer"}))}}]),t}(p.Component);Object(d.a)(O,"propTypes",{sourceType:w.a.oneOf(["profile","likes","list","collection","url","widget"]).isRequired,screenName:g()(w.a.string,(function(e){return!e.hasOwnProperty("userId")&&("profile"===e.sourceType||"likes"===e.sourceType)})),userId:g()(w.a.number,(function(e){return!e.hasOwnProperty("screenName")&&("profile"===e.sourceType||"likes"===e.sourceType)})),ownerScreenName:g()(w.a.string,(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")})),slug:g()(w.a.string,(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")})),id:g()(w.a.oneOfType([w.a.number,w.a.string]),(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("ownerScreenName")&&!e.hasOwnProperty("slug")||"collection"===e.sourceType})),url:g()(w.a.string,(function(e){return"url"===e.sourceType})),widgetId:g()(w.a.string,(function(e){return"widget"===e.sourceType})),options:w.a.object,autoHeight:w.a.bool,theme:w.a.oneOf(["dark","light"]),linkColor:w.a.string,borderColor:w.a.string,noHeader:w.a.bool,noFooter:w.a.bool,noBorders:w.a.bool,noScrollbar:w.a.bool,transparent:w.a.bool,lang:w.a.string,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func});var j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=s(this,c(t).call(this,e))).state={isLoading:!0},n}return l(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createShareButton(e.props.url,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterShareButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return f.a.createElement(f.a.Fragment,null,e&&t,f.a.createElement("div",{ref:"embedContainer"}))}}]),t}(p.Component);Object(d.a)(j,"propTypes",{url:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func});var C=function(e){function t(e){var n;return Object(o.a)(this,t),(n=s(this,c(t).call(this,e))).state={isLoading:!0},n}return l(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createFollowButton(e.props.screenName,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterFollowButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return f.a.createElement(f.a.Fragment,null,e&&t,f.a.createElement("div",{ref:"embedContainer"}))}}]),t}(p.Component);Object(d.a)(C,"propTypes",{screenName:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func});var T=function(e){function t(e){var n;return Object(o.a)(this,t),(n=s(this,c(t).call(this,e))).state={isLoading:!0},n}return l(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createHashtagButton(e.props.tag,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterHashtagButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return f.a.createElement(f.a.Fragment,null,e&&t,f.a.createElement("div",{ref:"embedContainer"}))}}]),t}(p.Component);Object(d.a)(T,"propTypes",{tag:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func});var L=function(e){function t(e){var n;return Object(o.a)(this,t),(n=s(this,c(t).call(this,e))).state={isLoading:!0},n}return l(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMentionButton(e.props.screenName,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterMentionButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return f.a.createElement(f.a.Fragment,null,e&&t,f.a.createElement("div",{ref:"embedContainer"}))}}]),t}(p.Component);Object(d.a)(L,"propTypes",{screenName:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func});var M=function(e){function t(e){var n;return Object(o.a)(this,t),(n=s(this,c(t).call(this,e))).state={isLoading:!0},n}return l(t,e),Object(r.a)(t,[{key:"renderWidget",value:function(){var e=this,t=this.props.onLoad;window.twttr?this.isMountCanceled||window.twttr.widgets.createTweet(this.props.tweetId,this.refs.embedContainer,this.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterTweetEmbed, aborting load.")}},{key:"componentDidMount",value:function(){var e=this;v.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){e.renderWidget()}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return f.a.createElement(f.a.Fragment,null,e&&t,f.a.createElement("div",{ref:"embedContainer"}))}}]),t}(p.Component);Object(d.a)(M,"propTypes",{tweetId:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func});var k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=s(this,c(t).call(this,e))).state={isLoading:!0},n}return l(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMoment(e.props.momentId,e.refs.shareMoment,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterMomentShare, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return f.a.createElement(f.a.Fragment,null,e&&t,f.a.createElement("div",{ref:"shareMoment"}))}}]),t}(p.Component);Object(d.a)(k,"propTypes",{momentId:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func});var E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=s(this,c(t).call(this,e))).state={isLoading:!0},n}return l(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createDMButton(e.props.id,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterDMButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return f.a.createElement(f.a.Fragment,null,e&&t,f.a.createElement("div",{ref:"embedContainer"}))}}]),t}(p.Component);Object(d.a)(E,"propTypes",{id:w.a.number.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func});var U=function(e){function t(e){var n;return Object(o.a)(this,t),(n=s(this,c(t).call(this,e))).state={isLoading:!0},n}return l(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createVideo(e.props.id,e.refs.embedContainer).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterVideoEmbed, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return f.a.createElement(f.a.Fragment,null,e&&t,f.a.createElement("div",{ref:"embedContainer"}))}}]),t}(p.Component);Object(d.a)(U,"propTypes",{id:w.a.string.isRequired,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func});var F=function(e){function t(e){var n;return Object(o.a)(this,t),(n=s(this,c(t).call(this,e))).state={isLoading:!0},n}return l(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createPeriscopeOnAirButton(e.props.username,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterOnAirButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return f.a.createElement(f.a.Fragment,null,e&&t,f.a.createElement("div",{ref:"embedContainer"}))}}]),t}(p.Component);Object(d.a)(F,"propTypes",{username:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func})},dAtF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n,o){return"boolean"==typeof e?e:"function"==typeof e?e(t,n,o):!(!0!==!!e)&&!!e},r=function(e,t){return Object.hasOwnProperty.call(e,t)},i=function(e,t,n,o){return o?new Error(o):new Error("Required "+e[t]+" `"+t+"` was not specified in `"+n+"`.")};t.default=function(e,t,n){return function(e,t){if("function"!=typeof e)throw new TypeError("The typeValidator argument must be a function with the signature function(props, propName, componentName).");if(t&&"string"!=typeof t)throw new TypeError("The error message is optional, but must be a string if provided.")}(e,n),function(a,s,c){for(var u=arguments.length,l=Array(3<u?u-3:0),d=3;d<u;d++)l[d-3]=arguments[d];return o(t,a,s,c)?r(a,s)?e.apply(void 0,[a,s,c].concat(l)):i(a,s,c,n):e.apply(void 0,[a,s,c].concat(l))}}},ojxP:function(e,t,n){var o,r,i;i=function(){var e,t,n=document,o=n.getElementsByTagName("head")[0],r={},i={},a={},s={};function c(e,t){for(var n=0,o=e.length;n<o;++n)if(!t(e[n]))return!1;return 1}function u(e,t){c(e,(function(e){return t(e),1}))}function l(t,n,o){t=t.push?t:[t];var p=n&&n.call,f=p?n:o,h=p?t.join(""):n,w=t.length;function m(e){return e.call?e():r[e]}function g(){if(!--w)for(var e in r[h]=1,f&&f(),a)c(e.split("|"),m)&&!u(a[e],m)&&(a[e]=[])}return setTimeout((function(){u(t,(function t(n,o){return null===n?g():(o||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),s[n]?(h&&(i[h]=1),2==s[n]?g():setTimeout((function(){t(n,!0)}),0)):(s[n]=1,h&&(i[h]=1),void d(n,g)))}))}),0),l}function d(e,r){var i,a=n.createElement("script");a.onload=a.onerror=a.onreadystatechange=function(){a.readyState&&!/^c|loade/.test(a.readyState)||i||(a.onload=a.onreadystatechange=null,i=1,s[e]=2,r())},a.async=1,a.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,o.insertBefore(a,o.lastChild)}return l.get=d,l.order=function(e,t,n){!function o(r){r=e.shift(),e.length?l(r,o):l(r,t,n)}()},l.path=function(t){e=t},l.urlArgs=function(e){t=e},l.ready=function(e,t,n){e=e.push?e:[e];var o,i=[];return!u(e,(function(e){r[e]||i.push(e)}))&&c(e,(function(e){return r[e]}))?t():(o=e.join("|"),a[o]=a[o]||[],a[o].push(t),n&&n(i)),l},l.done=function(e){l([null],e)},l},e.exports?e.exports=i():void 0===(r="function"===typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=r)}}]);