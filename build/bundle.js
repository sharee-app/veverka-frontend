var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function i(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function a(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let l;function d(t){l=t}const p=[],h=[],$=[],m=[],g=Promise.resolve();let b=!1;function y(t){$.push(t)}let _=!1;const x=new Set;function k(){if(!_){_=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];d(e),v(e.$$)}for(d(null),p.length=0;h.length;)h.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];x.has(e)||(x.add(e),e())}$.length=0}while(p.length);for(;m.length;)m.pop()();b=!1,_=!1,x.clear()}}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const j=new Set;function w(t,e){-1===t.$$.dirty[0]&&(p.push(t),b||(b=!0,g.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function E(c,u,s,f,a,p,h=[-1]){const $=l;d(c);const m=u.props||{},g=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map($?$.$$.context:[]),callbacks:n(),dirty:h,skip_bound:!1};let b=!1;if(g.ctx=s?s(c,m,((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&a(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&w(c,t)),e})):[],g.update(),b=!0,o(g.before_update),g.fragment=!!f&&f(g.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);g.fragment&&g.fragment.l(t),t.forEach(i)}else g.fragment&&g.fragment.c();u.intro&&((_=c.$$.fragment)&&_.i&&(j.delete(_),_.i(x))),function(t,n,c){const{fragment:u,on_mount:i,on_destroy:s,after_update:f}=t.$$;u&&u.m(n,c),y((()=>{const n=i.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]})),f.forEach(y)}(c,u.target,u.anchor),k()}var _,x;d($)}function A(e){let n,o,r,c,l,d,p;return{c(){n=s("main"),o=s("h1"),r=f("Veverka Frontend is housed here "),c=f(e[0]),l=f("!"),d=f(" "),p=s("p"),p.innerHTML='Check out our <a href="https://github.com/microsoftstc/veverka-frontend">repo</a> or else',a(o,"class","svelte-1tky8bj"),a(n,"class","svelte-1tky8bj")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),u(n,o),u(o,r),u(o,c),u(o,l),u(n,d),u(n,p)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(c,t[0])},i:t,o:t,d(t){t&&i(n)}}}function C(t,e,n){let{emoji:o}=e;return t.$$set=t=>{"emoji"in t&&n(0,o=t.emoji)},[o]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),E(this,t,C,A,c,{emoji:0})}}({target:document.body,props:{emoji:"😳"}})}();
//# sourceMappingURL=bundle.js.map
