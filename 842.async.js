(self.webpackChunk=self.webpackChunk||[]).push([[842],{74704:function(ie,ce,ae){var he=ae(86116);function te(M,C){var F=typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(!F){if(Array.isArray(M)||(F=he(M))||C&&M&&typeof M.length=="number"){F&&(M=F);var U=0,E=function(){};return{s:E,n:function(){return U>=M.length?{done:!0}:{done:!1,value:M[U++]}},e:function(Y){throw Y},f:E}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ee=!0,re=!1,X;return{s:function(){F=F.call(M)},n:function(){var Y=F.next();return ee=Y.done,Y},e:function(Y){re=!0,X=Y},f:function(){try{!ee&&F.return!=null&&F.return()}finally{if(re)throw X}}}}ie.exports=te,ie.exports.__esModule=!0,ie.exports.default=ie.exports},70794:function(ie,ce,ae){"use strict";ae.d(ce,{O:function(){return de}});var he=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,te=Math.ceil,M=Math.floor,C="[BigNumber Error] ",F=C+"Number primitive has more than 15 significant digits: ",U=1e14,E=14,ee=9007199254740991,re=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],X=1e7,_=1e9;function Y(O){var N,S,R,p=h.prototype={constructor:h,toString:null,valueOf:null},D=new h(1),v=20,I=4,y=-7,G=21,K=-1e7,V=1e7,j=!1,fe=1,Q=0,pe={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xA0",suffix:""},b="0123456789abcdefghijklmnopqrstuvwxyz",ge=!0;function h(e,r){var n,s,t,l,c,i,f,u,o=this;if(!(o instanceof h))return new h(e,r);if(r==null){if(e&&e._isBigNumber===!0){o.s=e.s,!e.c||e.e>V?o.c=o.e=null:e.e<K?o.c=[o.e=0]:(o.e=e.e,o.c=e.c.slice());return}if((i=typeof e=="number")&&e*0==0){if(o.s=1/e<0?(e=-e,-1):1,e===~~e){for(l=0,c=e;c>=10;c/=10,l++);l>V?o.c=o.e=null:(o.e=l,o.c=[e]);return}u=String(e)}else{if(!he.test(u=String(e)))return R(o,u,i);o.s=u.charCodeAt(0)==45?(u=u.slice(1),-1):1}(l=u.indexOf("."))>-1&&(u=u.replace(".","")),(c=u.search(/e/i))>0?(l<0&&(l=c),l+=+u.slice(c+1),u=u.substring(0,c)):l<0&&(l=u.length)}else{if(x(r,2,b.length,"Base"),r==10&&ge)return o=new h(e),$(o,v+o.e+1,I);if(u=String(e),i=typeof e=="number"){if(e*0!=0)return R(o,u,i,r);if(o.s=1/e<0?(u=u.slice(1),-1):1,h.DEBUG&&u.replace(/^0\.0*|\./,"").length>15)throw Error(F+e)}else o.s=u.charCodeAt(0)===45?(u=u.slice(1),-1):1;for(n=b.slice(0,r),l=c=0,f=u.length;c<f;c++)if(n.indexOf(s=u.charAt(c))<0){if(s=="."){if(c>l){l=f;continue}}else if(!t&&(u==u.toUpperCase()&&(u=u.toLowerCase())||u==u.toLowerCase()&&(u=u.toUpperCase()))){t=!0,c=-1,l=0;continue}return R(o,String(e),i,r)}i=!1,u=S(u,r,10,o.s),(l=u.indexOf("."))>-1?u=u.replace(".",""):l=u.length}for(c=0;u.charCodeAt(c)===48;c++);for(f=u.length;u.charCodeAt(--f)===48;);if(u=u.slice(c,++f)){if(f-=c,i&&h.DEBUG&&f>15&&(e>ee||e!==M(e)))throw Error(F+o.s*e);if((l=l-c-1)>V)o.c=o.e=null;else if(l<K)o.c=[o.e=0];else{if(o.e=l,o.c=[],c=(l+1)%E,l<0&&(c+=E),c<f){for(c&&o.c.push(+u.slice(0,c)),f-=E;c<f;)o.c.push(+u.slice(c,c+=E));c=E-(u=u.slice(c)).length}else c-=f;for(;c--;u+="0");o.c.push(+u)}}else o.c=[o.e=0]}h.clone=Y,h.ROUND_UP=0,h.ROUND_DOWN=1,h.ROUND_CEIL=2,h.ROUND_FLOOR=3,h.ROUND_HALF_UP=4,h.ROUND_HALF_DOWN=5,h.ROUND_HALF_EVEN=6,h.ROUND_HALF_CEIL=7,h.ROUND_HALF_FLOOR=8,h.EUCLID=9,h.config=h.set=function(e){var r,n;if(e!=null)if(typeof e=="object"){if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(n=e[r],x(n,0,_,r),v=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(n=e[r],x(n,0,8,r),I=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&(n=e[r],n&&n.pop?(x(n[0],-_,0,r),x(n[1],0,_,r),y=n[0],G=n[1]):(x(n,-_,_,r),y=-(G=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if(n=e[r],n&&n.pop)x(n[0],-_,-1,r),x(n[1],1,_,r),K=n[0],V=n[1];else if(x(n,-_,_,r),n)K=-(V=n<0?-n:n);else throw Error(C+r+" cannot be zero: "+n);if(e.hasOwnProperty(r="CRYPTO"))if(n=e[r],n===!!n)if(n)if(typeof crypto!="undefined"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))j=n;else throw j=!n,Error(C+"crypto unavailable");else j=n;else throw Error(C+r+" not true or false: "+n);if(e.hasOwnProperty(r="MODULO_MODE")&&(n=e[r],x(n,0,9,r),fe=n),e.hasOwnProperty(r="POW_PRECISION")&&(n=e[r],x(n,0,_,r),Q=n),e.hasOwnProperty(r="FORMAT"))if(n=e[r],typeof n=="object")pe=n;else throw Error(C+r+" not an object: "+n);if(e.hasOwnProperty(r="ALPHABET"))if(n=e[r],typeof n=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(n))ge=n.slice(0,10)=="0123456789",b=n;else throw Error(C+r+" invalid: "+n)}else throw Error(C+"Object expected: "+e);return{DECIMAL_PLACES:v,ROUNDING_MODE:I,EXPONENTIAL_AT:[y,G],RANGE:[K,V],CRYPTO:j,MODULO_MODE:fe,POW_PRECISION:Q,FORMAT:pe,ALPHABET:b}},h.isBigNumber=function(e){if(!e||e._isBigNumber!==!0)return!1;if(!h.DEBUG)return!0;var r,n,s=e.c,t=e.e,l=e.s;e:if({}.toString.call(s)=="[object Array]"){if((l===1||l===-1)&&t>=-_&&t<=_&&t===M(t)){if(s[0]===0){if(t===0&&s.length===1)return!0;break e}if(r=(t+1)%E,r<1&&(r+=E),String(s[0]).length==r){for(r=0;r<s.length;r++)if(n=s[r],n<0||n>=U||n!==M(n))break e;if(n!==0)return!0}}}else if(s===null&&t===null&&(l===null||l===1||l===-1))return!0;throw Error(C+"Invalid BigNumber: "+e)},h.maximum=h.max=function(){return me(arguments,p.lt)},h.minimum=h.min=function(){return me(arguments,p.gt)},h.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return M(Math.random()*e)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(n){var s,t,l,c,i,f=0,u=[],o=new h(D);if(n==null?n=v:x(n,0,_),c=te(n/E),j)if(crypto.getRandomValues){for(s=crypto.getRandomValues(new Uint32Array(c*=2));f<c;)i=s[f]*131072+(s[f+1]>>>11),i>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),s[f]=t[0],s[f+1]=t[1]):(u.push(i%1e14),f+=2);f=c/2}else if(crypto.randomBytes){for(s=crypto.randomBytes(c*=7);f<c;)i=(s[f]&31)*281474976710656+s[f+1]*1099511627776+s[f+2]*4294967296+s[f+3]*16777216+(s[f+4]<<16)+(s[f+5]<<8)+s[f+6],i>=9e15?crypto.randomBytes(7).copy(s,f):(u.push(i%1e14),f+=7);f=c/7}else throw j=!1,Error(C+"crypto unavailable");if(!j)for(;f<c;)i=r(),i<9e15&&(u[f++]=i%1e14);for(c=u[--f],n%=E,c&&n&&(i=re[E-n],u[f]=M(c/i)*i);u[f]===0;u.pop(),f--);if(f<0)u=[l=0];else{for(l=-1;u[0]===0;u.splice(0,1),l-=E);for(f=1,i=u[0];i>=10;i/=10,f++);f<E&&(l-=E-f)}return o.e=l,o.c=u,o}}(),h.sum=function(){for(var e=1,r=arguments,n=new h(r[0]);e<r.length;)n=n.plus(r[e++]);return n},S=function(){var e="0123456789";function r(n,s,t,l){for(var c,i=[0],f,u=0,o=n.length;u<o;){for(f=i.length;f--;i[f]*=s);for(i[0]+=l.indexOf(n.charAt(u++)),c=0;c<i.length;c++)i[c]>t-1&&(i[c+1]==null&&(i[c+1]=0),i[c+1]+=i[c]/t|0,i[c]%=t)}return i.reverse()}return function(n,s,t,l,c){var i,f,u,o,a,g,w,m,B=n.indexOf("."),P=v,d=I;for(B>=0&&(o=Q,Q=0,n=n.replace(".",""),m=new h(s),g=m.pow(n.length-B),Q=o,m.c=r(Z(H(g.c),g.e,"0"),10,t,e),m.e=m.c.length),w=r(n,s,t,c?(i=b,e):(i=e,b)),u=o=w.length;w[--o]==0;w.pop());if(!w[0])return i.charAt(0);if(B<0?--u:(g.c=w,g.e=u,g.s=l,g=N(g,m,P,d,t),w=g.c,a=g.r,u=g.e),f=u+P+1,B=w[f],o=t/2,a=a||f<0||w[f+1]!=null,a=d<4?(B!=null||a)&&(d==0||d==(g.s<0?3:2)):B>o||B==o&&(d==4||a||d==6&&w[f-1]&1||d==(g.s<0?8:7)),f<1||!w[0])n=a?Z(i.charAt(1),-P,i.charAt(0)):i.charAt(0);else{if(w.length=f,a)for(--t;++w[--f]>t;)w[f]=0,f||(++u,w=[1].concat(w));for(o=w.length;!w[--o];);for(B=0,n="";B<=o;n+=i.charAt(w[B++]));n=Z(n,u,i.charAt(0))}return n}}(),N=function(){function e(s,t,l){var c,i,f,u,o=0,a=s.length,g=t%X,w=t/X|0;for(s=s.slice();a--;)f=s[a]%X,u=s[a]/X|0,c=w*f+u*g,i=g*f+c%X*X+o,o=(i/l|0)+(c/X|0)+w*u,s[a]=i%l;return o&&(s=[o].concat(s)),s}function r(s,t,l,c){var i,f;if(l!=c)f=l>c?1:-1;else for(i=f=0;i<l;i++)if(s[i]!=t[i]){f=s[i]>t[i]?1:-1;break}return f}function n(s,t,l,c){for(var i=0;l--;)s[l]-=i,i=s[l]<t[l]?1:0,s[l]=i*c+s[l]-t[l];for(;!s[0]&&s.length>1;s.splice(0,1));}return function(s,t,l,c,i){var f,u,o,a,g,w,m,B,P,d,A,k,ue,Ne,Oe,W,le,z=s.s==t.s?1:-1,L=s.c,T=t.c;if(!L||!L[0]||!T||!T[0])return new h(!s.s||!t.s||(L?T&&L[0]==T[0]:!T)?NaN:L&&L[0]==0||!T?z*0:z/0);for(B=new h(z),P=B.c=[],u=s.e-t.e,z=l+u+1,i||(i=U,u=q(s.e/E)-q(t.e/E),z=z/E|0),o=0;T[o]==(L[o]||0);o++);if(T[o]>(L[o]||0)&&u--,z<0)P.push(1),a=!0;else{for(Ne=L.length,W=T.length,o=0,z+=2,g=M(i/(T[0]+1)),g>1&&(T=e(T,g,i),L=e(L,g,i),W=T.length,Ne=L.length),ue=W,d=L.slice(0,W),A=d.length;A<W;d[A++]=0);le=T.slice(),le=[0].concat(le),Oe=T[0],T[1]>=i/2&&Oe++;do{if(g=0,f=r(T,d,W,A),f<0){if(k=d[0],W!=A&&(k=k*i+(d[1]||0)),g=M(k/Oe),g>1)for(g>=i&&(g=i-1),w=e(T,g,i),m=w.length,A=d.length;r(w,d,m,A)==1;)g--,n(w,W<m?le:T,m,i),m=w.length,f=1;else g==0&&(f=g=1),w=T.slice(),m=w.length;if(m<A&&(w=[0].concat(w)),n(d,w,A,i),A=d.length,f==-1)for(;r(T,d,W,A)<1;)g++,n(d,W<A?le:T,A,i),A=d.length}else f===0&&(g++,d=[0]);P[o++]=g,d[0]?d[A++]=L[ue]||0:(d=[L[ue]],A=1)}while((ue++<Ne||d[0]!=null)&&z--);a=d[0]!=null,P[0]||P.splice(0,1)}if(i==U){for(o=1,z=P[0];z>=10;z/=10,o++);$(B,l+(B.e=o+u*E-1)+1,c,a)}else B.e=u,B.r=+a;return B}}();function we(e,r,n,s){var t,l,c,i,f;if(n==null?n=I:x(n,0,8),!e.c)return e.toString();if(t=e.c[0],c=e.e,r==null)f=H(e.c),f=s==1||s==2&&(c<=y||c>=G)?se(f,c):Z(f,c,"0");else if(e=$(new h(e),r,n),l=e.e,f=H(e.c),i=f.length,s==1||s==2&&(r<=l||l<=y)){for(;i<r;f+="0",i++);f=se(f,l)}else if(r-=c,f=Z(f,l,"0"),l+1>i){if(--r>0)for(f+=".";r--;f+="0");}else if(r+=l-i,r>0)for(l+1==i&&(f+=".");r--;f+="0");return e.s<0&&t?"-"+f:f}function me(e,r){for(var n,s=1,t=new h(e[0]);s<e.length;s++)if(n=new h(e[s]),n.s)r.call(t,n)&&(t=n);else{t=n;break}return t}function Ee(e,r,n){for(var s=1,t=r.length;!r[--t];r.pop());for(t=r[0];t>=10;t/=10,s++);return(n=s+n*E-1)>V?e.c=e.e=null:n<K?e.c=[e.e=0]:(e.e=n,e.c=r),e}R=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,n=/^\.([^.]+)$/,s=/^-?(Infinity|NaN)$/,t=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(l,c,i,f){var u,o=i?c:c.replace(t,"");if(s.test(o))l.s=isNaN(o)?null:o<0?-1:1;else{if(!i&&(o=o.replace(e,function(a,g,w){return u=(w=w.toLowerCase())=="x"?16:w=="b"?2:8,!f||f==u?g:a}),f&&(u=f,o=o.replace(r,"$1").replace(n,"0.$1")),c!=o))return new h(o,u);if(h.DEBUG)throw Error(C+"Not a"+(f?" base "+f:"")+" number: "+c);l.s=null}l.c=l.e=null}}();function $(e,r,n,s){var t,l,c,i,f,u,o,a=e.c,g=re;if(a){e:{for(t=1,i=a[0];i>=10;i/=10,t++);if(l=r-t,l<0)l+=E,c=r,f=a[u=0],o=f/g[t-c-1]%10|0;else if(u=te((l+1)/E),u>=a.length)if(s){for(;a.length<=u;a.push(0));f=o=0,t=1,l%=E,c=l-E+1}else break e;else{for(f=i=a[u],t=1;i>=10;i/=10,t++);l%=E,c=l-E+t,o=c<0?0:f/g[t-c-1]%10|0}if(s=s||r<0||a[u+1]!=null||(c<0?f:f%g[t-c-1]),s=n<4?(o||s)&&(n==0||n==(e.s<0?3:2)):o>5||o==5&&(n==4||s||n==6&&(l>0?c>0?f/g[t-c]:0:a[u-1])%10&1||n==(e.s<0?8:7)),r<1||!a[0])return a.length=0,s?(r-=e.e+1,a[0]=g[(E-r%E)%E],e.e=-r||0):a[0]=e.e=0,e;if(l==0?(a.length=u,i=1,u--):(a.length=u+1,i=g[E-l],a[u]=c>0?M(f/g[t-c]%g[c])*i:0),s)for(;;)if(u==0){for(l=1,c=a[0];c>=10;c/=10,l++);for(c=a[0]+=i,i=1;c>=10;c/=10,i++);l!=i&&(e.e++,a[0]==U&&(a[0]=1));break}else{if(a[u]+=i,a[u]!=U)break;a[u--]=0,i=1}for(l=a.length;a[--l]===0;a.pop());}e.e>V?e.c=e.e=null:e.e<K&&(e.c=[e.e=0])}return e}function J(e){var r,n=e.e;return n===null?e.toString():(r=H(e.c),r=n<=y||n>=G?se(r,n):Z(r,n,"0"),e.s<0?"-"+r:r)}return p.absoluteValue=p.abs=function(){var e=new h(this);return e.s<0&&(e.s=1),e},p.comparedTo=function(e,r){return ne(this,new h(e,r))},p.decimalPlaces=p.dp=function(e,r){var n,s,t,l=this;if(e!=null)return x(e,0,_),r==null?r=I:x(r,0,8),$(new h(l),e+l.e+1,r);if(!(n=l.c))return null;if(s=((t=n.length-1)-q(this.e/E))*E,t=n[t])for(;t%10==0;t/=10,s--);return s<0&&(s=0),s},p.dividedBy=p.div=function(e,r){return N(this,new h(e,r),v,I)},p.dividedToIntegerBy=p.idiv=function(e,r){return N(this,new h(e,r),0,1)},p.exponentiatedBy=p.pow=function(e,r){var n,s,t,l,c,i,f,u,o,a=this;if(e=new h(e),e.c&&!e.isInteger())throw Error(C+"Exponent not an integer: "+J(e));if(r!=null&&(r=new h(r)),i=e.e>14,!a.c||!a.c[0]||a.c[0]==1&&!a.e&&a.c.length==1||!e.c||!e.c[0])return o=new h(Math.pow(+J(a),i?e.s*(2-oe(e)):+J(e))),r?o.mod(r):o;if(f=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new h(NaN);s=!f&&a.isInteger()&&r.isInteger(),s&&(a=a.mod(r))}else{if(e.e>9&&(a.e>0||a.e<-1||(a.e==0?a.c[0]>1||i&&a.c[1]>=24e7:a.c[0]<8e13||i&&a.c[0]<=9999975e7)))return l=a.s<0&&oe(e)?-0:0,a.e>-1&&(l=1/l),new h(f?1/l:l);Q&&(l=te(Q/E+2))}for(i?(n=new h(.5),f&&(e.s=1),u=oe(e)):(t=Math.abs(+J(e)),u=t%2),o=new h(D);;){if(u){if(o=o.times(a),!o.c)break;l?o.c.length>l&&(o.c.length=l):s&&(o=o.mod(r))}if(t){if(t=M(t/2),t===0)break;u=t%2}else if(e=e.times(n),$(e,e.e+1,1),e.e>14)u=oe(e);else{if(t=+J(e),t===0)break;u=t%2}a=a.times(a),l?a.c&&a.c.length>l&&(a.c.length=l):s&&(a=a.mod(r))}return s?o:(f&&(o=D.div(o)),r?o.mod(r):l?$(o,Q,I,c):o)},p.integerValue=function(e){var r=new h(this);return e==null?e=I:x(e,0,8),$(r,r.e+1,e)},p.isEqualTo=p.eq=function(e,r){return ne(this,new h(e,r))===0},p.isFinite=function(){return!!this.c},p.isGreaterThan=p.gt=function(e,r){return ne(this,new h(e,r))>0},p.isGreaterThanOrEqualTo=p.gte=function(e,r){return(r=ne(this,new h(e,r)))===1||r===0},p.isInteger=function(){return!!this.c&&q(this.e/E)>this.c.length-2},p.isLessThan=p.lt=function(e,r){return ne(this,new h(e,r))<0},p.isLessThanOrEqualTo=p.lte=function(e,r){return(r=ne(this,new h(e,r)))===-1||r===0},p.isNaN=function(){return!this.s},p.isNegative=function(){return this.s<0},p.isPositive=function(){return this.s>0},p.isZero=function(){return!!this.c&&this.c[0]==0},p.minus=function(e,r){var n,s,t,l,c=this,i=c.s;if(e=new h(e,r),r=e.s,!i||!r)return new h(NaN);if(i!=r)return e.s=-r,c.plus(e);var f=c.e/E,u=e.e/E,o=c.c,a=e.c;if(!f||!u){if(!o||!a)return o?(e.s=-r,e):new h(a?c:NaN);if(!o[0]||!a[0])return a[0]?(e.s=-r,e):new h(o[0]?c:I==3?-0:0)}if(f=q(f),u=q(u),o=o.slice(),i=f-u){for((l=i<0)?(i=-i,t=o):(u=f,t=a),t.reverse(),r=i;r--;t.push(0));t.reverse()}else for(s=(l=(i=o.length)<(r=a.length))?i:r,i=r=0;r<s;r++)if(o[r]!=a[r]){l=o[r]<a[r];break}if(l&&(t=o,o=a,a=t,e.s=-e.s),r=(s=a.length)-(n=o.length),r>0)for(;r--;o[n++]=0);for(r=U-1;s>i;){if(o[--s]<a[s]){for(n=s;n&&!o[--n];o[n]=r);--o[n],o[s]+=U}o[s]-=a[s]}for(;o[0]==0;o.splice(0,1),--u);return o[0]?Ee(e,o,u):(e.s=I==3?-1:1,e.c=[e.e=0],e)},p.modulo=p.mod=function(e,r){var n,s,t=this;return e=new h(e,r),!t.c||!e.s||e.c&&!e.c[0]?new h(NaN):!e.c||t.c&&!t.c[0]?new h(t):(fe==9?(s=e.s,e.s=1,n=N(t,e,0,3),e.s=s,n.s*=s):n=N(t,e,0,fe),e=t.minus(n.times(e)),!e.c[0]&&fe==1&&(e.s=t.s),e)},p.multipliedBy=p.times=function(e,r){var n,s,t,l,c,i,f,u,o,a,g,w,m,B,P,d=this,A=d.c,k=(e=new h(e,r)).c;if(!A||!k||!A[0]||!k[0])return!d.s||!e.s||A&&!A[0]&&!k||k&&!k[0]&&!A?e.c=e.e=e.s=null:(e.s*=d.s,!A||!k?e.c=e.e=null:(e.c=[0],e.e=0)),e;for(s=q(d.e/E)+q(e.e/E),e.s*=d.s,f=A.length,a=k.length,f<a&&(m=A,A=k,k=m,t=f,f=a,a=t),t=f+a,m=[];t--;m.push(0));for(B=U,P=X,t=a;--t>=0;){for(n=0,g=k[t]%P,w=k[t]/P|0,c=f,l=t+c;l>t;)u=A[--c]%P,o=A[c]/P|0,i=w*u+o*g,u=g*u+i%P*P+m[l]+n,n=(u/B|0)+(i/P|0)+w*o,m[l--]=u%B;m[l]=n}return n?++s:m.splice(0,1),Ee(e,m,s)},p.negated=function(){var e=new h(this);return e.s=-e.s||null,e},p.plus=function(e,r){var n,s=this,t=s.s;if(e=new h(e,r),r=e.s,!t||!r)return new h(NaN);if(t!=r)return e.s=-r,s.minus(e);var l=s.e/E,c=e.e/E,i=s.c,f=e.c;if(!l||!c){if(!i||!f)return new h(t/0);if(!i[0]||!f[0])return f[0]?e:new h(i[0]?s:t*0)}if(l=q(l),c=q(c),i=i.slice(),t=l-c){for(t>0?(c=l,n=f):(t=-t,n=i),n.reverse();t--;n.push(0));n.reverse()}for(t=i.length,r=f.length,t-r<0&&(n=f,f=i,i=n,r=t),t=0;r;)t=(i[--r]=i[r]+f[r]+t)/U|0,i[r]=U===i[r]?0:i[r]%U;return t&&(i=[t].concat(i),++c),Ee(e,i,c)},p.precision=p.sd=function(e,r){var n,s,t,l=this;if(e!=null&&e!==!!e)return x(e,1,_),r==null?r=I:x(r,0,8),$(new h(l),e,r);if(!(n=l.c))return null;if(t=n.length-1,s=t*E+1,t=n[t]){for(;t%10==0;t/=10,s--);for(t=n[0];t>=10;t/=10,s++);}return e&&l.e+1>s&&(s=l.e+1),s},p.shiftedBy=function(e){return x(e,-ee,ee),this.times("1e"+e)},p.squareRoot=p.sqrt=function(){var e,r,n,s,t,l=this,c=l.c,i=l.s,f=l.e,u=v+4,o=new h("0.5");if(i!==1||!c||!c[0])return new h(!i||i<0&&(!c||c[0])?NaN:c?l:1/0);if(i=Math.sqrt(+J(l)),i==0||i==1/0?(r=H(c),(r.length+f)%2==0&&(r+="0"),i=Math.sqrt(+r),f=q((f+1)/2)-(f<0||f%2),i==1/0?r="5e"+f:(r=i.toExponential(),r=r.slice(0,r.indexOf("e")+1)+f),n=new h(r)):n=new h(i+""),n.c[0]){for(f=n.e,i=f+u,i<3&&(i=0);;)if(t=n,n=o.times(t.plus(N(l,t,u,1))),H(t.c).slice(0,i)===(r=H(n.c)).slice(0,i))if(n.e<f&&--i,r=r.slice(i-3,i+1),r=="9999"||!s&&r=="4999"){if(!s&&($(t,t.e+v+2,0),t.times(t).eq(l))){n=t;break}u+=4,i+=4,s=1}else{(!+r||!+r.slice(1)&&r.charAt(0)=="5")&&($(n,n.e+v+2,1),e=!n.times(n).eq(l));break}}return $(n,n.e+v+1,I,e)},p.toExponential=function(e,r){return e!=null&&(x(e,0,_),e++),we(this,e,r,1)},p.toFixed=function(e,r){return e!=null&&(x(e,0,_),e=e+this.e+1),we(this,e,r)},p.toFormat=function(e,r,n){var s,t=this;if(n==null)e!=null&&r&&typeof r=="object"?(n=r,r=null):e&&typeof e=="object"?(n=e,e=r=null):n=pe;else if(typeof n!="object")throw Error(C+"Argument not an object: "+n);if(s=t.toFixed(e,r),t.c){var l,c=s.split("."),i=+n.groupSize,f=+n.secondaryGroupSize,u=n.groupSeparator||"",o=c[0],a=c[1],g=t.s<0,w=g?o.slice(1):o,m=w.length;if(f&&(l=i,i=f,f=l,m-=l),i>0&&m>0){for(l=m%i||i,o=w.substr(0,l);l<m;l+=i)o+=u+w.substr(l,i);f>0&&(o+=u+w.slice(l)),g&&(o="-"+o)}s=a?o+(n.decimalSeparator||"")+((f=+n.fractionGroupSize)?a.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):a):o}return(n.prefix||"")+s+(n.suffix||"")},p.toFraction=function(e){var r,n,s,t,l,c,i,f,u,o,a,g,w=this,m=w.c;if(e!=null&&(i=new h(e),!i.isInteger()&&(i.c||i.s!==1)||i.lt(D)))throw Error(C+"Argument "+(i.isInteger()?"out of range: ":"not an integer: ")+J(i));if(!m)return new h(w);for(r=new h(D),u=n=new h(D),s=f=new h(D),g=H(m),l=r.e=g.length-w.e-1,r.c[0]=re[(c=l%E)<0?E+c:c],e=!e||i.comparedTo(r)>0?l>0?r:u:i,c=V,V=1/0,i=new h(g),f.c[0]=0;o=N(i,r,0,1),t=n.plus(o.times(s)),t.comparedTo(e)!=1;)n=s,s=t,u=f.plus(o.times(t=u)),f=t,r=i.minus(o.times(t=r)),i=t;return t=N(e.minus(n),s,0,1),f=f.plus(t.times(u)),n=n.plus(t.times(s)),f.s=u.s=w.s,l=l*2,a=N(u,s,l,I).minus(w).abs().comparedTo(N(f,n,l,I).minus(w).abs())<1?[u,s]:[f,n],V=c,a},p.toNumber=function(){return+J(this)},p.toPrecision=function(e,r){return e!=null&&x(e,1,_),we(this,e,r,2)},p.toString=function(e){var r,n=this,s=n.s,t=n.e;return t===null?s?(r="Infinity",s<0&&(r="-"+r)):r="NaN":(e==null?r=t<=y||t>=G?se(H(n.c),t):Z(H(n.c),t,"0"):e===10&&ge?(n=$(new h(n),v+t+1,I),r=Z(H(n.c),n.e,"0")):(x(e,2,b.length,"Base"),r=S(Z(H(n.c),t,"0"),10,e,s,!0)),s<0&&n.c[0]&&(r="-"+r)),r},p.valueOf=p.toJSON=function(){return J(this)},p._isBigNumber=!0,p[Symbol.toStringTag]="BigNumber",p[Symbol.for("nodejs.util.inspect.custom")]=p.valueOf,O!=null&&h.set(O),h}function q(O){var N=O|0;return O>0||O===N?N:N-1}function H(O){for(var N,S,R=1,p=O.length,D=O[0]+"";R<p;){for(N=O[R++]+"",S=E-N.length;S--;N="0"+N);D+=N}for(p=D.length;D.charCodeAt(--p)===48;);return D.slice(0,p+1||1)}function ne(O,N){var S,R,p=O.c,D=N.c,v=O.s,I=N.s,y=O.e,G=N.e;if(!v||!I)return null;if(S=p&&!p[0],R=D&&!D[0],S||R)return S?R?0:-I:v;if(v!=I)return v;if(S=v<0,R=y==G,!p||!D)return R?0:!p^S?1:-1;if(!R)return y>G^S?1:-1;for(I=(y=p.length)<(G=D.length)?y:G,v=0;v<I;v++)if(p[v]!=D[v])return p[v]>D[v]^S?1:-1;return y==G?0:y>G^S?1:-1}function x(O,N,S,R){if(O<N||O>S||O!==M(O))throw Error(C+(R||"Argument")+(typeof O=="number"?O<N||O>S?" out of range: ":" not an integer: ":" not a primitive number: ")+String(O))}function oe(O){var N=O.c.length-1;return q(O.e/E)==N&&O.c[N]%2!=0}function se(O,N){return(O.length>1?O.charAt(0)+"."+O.slice(1):O)+(N<0?"e":"e+")+N}function Z(O,N,S){var R,p;if(N<0){for(p=S+".";++N;p+=S);O=p+O}else if(R=O.length,++N>R){for(p=S,N-=R;--N;p+=S);O+=p}else N<R&&(O=O.slice(0,N)+"."+O.slice(N));return O}var de=Y();ce.Z=de}}]);
