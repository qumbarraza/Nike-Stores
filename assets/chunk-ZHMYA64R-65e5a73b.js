import{r as n,i as D,j as o,b as W,f as E,c as I}from"./index-de3668f2.js";function A(e){return n.Children.toArray(e).filter(t=>n.isValidElement(t))}function R(e,t){return Array.isArray(e)?e.map(r=>r===null?null:t(r)):D(e)?Object.keys(e).reduce((r,i)=>(r[i]=t(e[i]),r),{}):e!=null?t(e):null}var _=e=>o.jsx(W.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});_.displayName="StackItem";function M(e){const{spacing:t,direction:r}=e,i={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":R(r,d=>i[d])}}var O=E((e,t)=>{const{isInline:r,direction:i,align:d,justify:g,spacing:c="0.5rem",wrap:j,children:f,divider:l,className:p,shouldWrapChildren:m,...C}=e,u=r?"row":i??"column",x=n.useMemo(()=>M({spacing:c,direction:u}),[c,u]),s=!!l,y=!m&&!s,S=n.useMemo(()=>{const h=A(f);return y?h:h.map((a,v)=>{const k=typeof a.key<"u"?a.key:v,N=v+1===h.length,b=m?o.jsx(_,{children:a},k):a;if(!s)return b;const L=n.cloneElement(l,{__css:x}),B=N?null:L;return o.jsxs(n.Fragment,{children:[b,B]},k)})},[l,x,s,y,m,f]),w=I("chakra-stack",p);return o.jsx(W.div,{ref:t,display:"flex",alignItems:d,justifyContent:g,flexDirection:u,flexWrap:j,gap:s?void 0:c,className:w,...C,children:S})});O.displayName="Stack";export{O as S,A as g,R as m};
