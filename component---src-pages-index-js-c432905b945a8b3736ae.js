(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{199:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var r=a(0),n=a.n(r),i=a(202),s=a(207),o=a(204),l=a(205),d=a(200);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return n.a.createElement(o.a,{location:this.props.location,title:t},n.a.createElement(l.a,{title:"All posts"}),n.a.createElement(s.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return n.a.createElement("article",{key:t.fields.slug,className:"my-4"},n.a.createElement("header",null,n.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},n.a.createElement(i.a,{style:{boxShadow:"none"},to:t.fields.slug,className:"text-blue-500 text-4xl"},a)),n.a.createElement("p",{className:"text-right"},n.a.createElement("small",{className:"text-sm "},t.frontmatter.date))))}))},r}(n.a.Component);t.default=c;var u="2785444898"},200:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(212),n=a.n(r),i=a(213),s=a.n(i);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new n.a(s.a);var l=o.rhythm,d=o.scale},201:function(e,t,a){var r;e.exports=(r=a(203))&&r.default||r},202:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(66),s=a.n(i);a.d(t,"a",function(){return s.a});a(201),a(9).default.enqueue,n.a.createContext({})},203:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),n=a.n(r),i=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},204:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(202),s=a(200);var o=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,o=t.children;return e="/"===a.pathname?n.a.createElement("h1",{className:"text-2xl mb-2 font-serif"},n.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):n.a.createElement("h3",{style:{fontFamily:"sans-serif",marginTop:0}},n.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),n.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},n.a.createElement("header",null,e),n.a.createElement("main",null,o),n.a.createElement("footer",null,"© ",(new Date).getFullYear()))},r}(n.a.Component);t.a=o},205:function(e,t,a){"use strict";var r=a(206),n=a(0),i=a.n(n),s=a(214),o=a.n(s);function l(e){var t=e.description,a=e.lang,n=e.meta,s=e.title,l=r.data.site,d=t||l.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},206:function(e){e.exports={data:{site:{siteMetadata:{title:"TorchShip logs",description:"Bootstrapping SAAS and such solo.",author:"Dwight Doane"}}}}},207:function(e,t,a){"use strict";var r=a(208),n=a(0),i=a.n(n);a(209),a(200);t.a=function(){var e=r.data.site.siteMetadata,t=e.author,a=e.social;return i.a.createElement("div",{className:"mb-6"},i.a.createElement("a",{style:{boxShadow:"none"},href:"https://twitter.com/"+a.twitter,className:"no-underline flex items-center py-2 text-sm"},i.a.createElement("span",null,"Written by ",i.a.createElement("strong",null,t,"."))))}},208:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIDBAUB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwL/2gAMAwEAAhADEAAAAcpWsRcwwa501XiFaAO//8QAGhAAAwEBAQEAAAAAAAAAAAAAAAECEkERE//aAAgBAQABBQJynOHKciKeodHNT89HPSUmv//EABYRAQEBAAAAAAAAAAAAAAAAABABIf/aAAgBAwEBPwHCn//EABgRAAMBAQAAAAAAAAAAAAAAAAABERAx/9oACAECAQE/Aa8XCo//xAAbEAACAQUAAAAAAAAAAAAAAAAQEQACICExQf/aAAgBAQAGPwKOrpRxu3//xAAcEAEAAwADAQEAAAAAAAAAAAABABEhMVGBcZH/2gAIAQEAAT8hsQ/IVAFMuaTiVwMq7ObssfIPgnAD2WJ7i1JfINUf2f/aAAwDAQACAAMAAAAQ+wqB/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQARMSH/2gAIAQMBAT8QTpjkvSNy/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQARIUH/2gAIAQIBAT8QPAnNh1IN/8QAIBABAAIBBAIDAAAAAAAAAAAAAQARITFBUYFhsXGR8P/aAAgBAQABPxA/mIq3E8ddQzs27xu+ND7hmZTR6iLxnU9zIalGNBxKxXNPUARVF+fmJZZvgHBLGjSOlRDQrEteEzH/2Q==",width:25,height:25,src:"/static/882de3dc99c5babc40d3ca6339664ec1/7ca36/dwit.jpg",srcSet:"/static/882de3dc99c5babc40d3ca6339664ec1/7ca36/dwit.jpg 1x,\n/static/882de3dc99c5babc40d3ca6339664ec1/30c0b/dwit.jpg 1.5x,\n/static/882de3dc99c5babc40d3ca6339664ec1/9b664/dwit.jpg 2x"}}},site:{siteMetadata:{author:"Dwight Doane",social:{twitter:"iamdwit"}}}}}},209:function(e,t,a){"use strict";a(29),a(30),a(13),a(92),a(133),a(210);var r=a(14);t.__esModule=!0,t.default=void 0;var n,i=r(a(68)),s=r(a(71)),o=r(a(136)),l=r(a(137)),d=r(a(0)),c=r(a(52)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},A=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),p=function(e){var t=u(e),a=A(t);return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function v(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var B=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?v(e,!0):"")+v(e)}).join("")+"<img "+d+s+o+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(I,(0,l.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},I=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,A=e.draggable,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},f,{onLoad:s,onError:c,ref:t,loading:u,draggable:A,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||"eager"==t.loading||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=B(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,y=e.itemProp,v=e.loading,B=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,Q=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:R?1:0,transition:Q?"opacity "+h+"ms":"none"},o),L="boolean"==typeof m?"lightgray":m,O={transitionDelay:h+"ms"},C=(0,l.default)({opacity:this.state.imgLoaded?0:1},Q&&O,o,A),T={title:t,alt:this.state.isVisible?"":a,style:C,className:f};if(p){var V=p,M=V[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),L&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},Q&&O)}),M.base64&&d.default.createElement(j,{src:M.base64,spreadProps:T,imageVariants:V,generateSources:w}),M.tracedSVG&&d.default.createElement(j,{src:M.tracedSVG,spreadProps:T,imageVariants:V,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(V),d.default.createElement(I,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:B})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:v},M,{imageVariants:V}))}}))}if(g){var z=g,D=z[0],P=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},i);return"inherit"===i.display&&delete P.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},L&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:L,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},Q&&O)}),D.base64&&d.default.createElement(j,{src:D.base64,spreadProps:T,imageVariants:z,generateSources:w}),D.tracedSVG&&d.default.createElement(j,{src:D.tracedSVG,spreadProps:T,imageVariants:z,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(z),d.default.createElement(I,{alt:a,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:B})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:v},D,{imageVariants:z}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var Q=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),N=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:Q,sizes:N,fixed:c.default.oneOfType([Q,c.default.arrayOf(Q)]),fluid:c.default.oneOfType([N,c.default.arrayOf(N)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var L=R;t.default=L},210:function(e,t,a){"use strict";a(211)("fixed",function(e){return function(){return e(this,"tt","","")}})},211:function(e,t,a){var r=a(1),n=a(7),i=a(32),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-c432905b945a8b3736ae.js.map