import{a as F,u as g,b as E,c as l,j as e,F as m,d as r,I as b,T as s,a3 as f,n as k,B as z,a4 as C,a5 as v,s as j,a6 as I,h as R,a7 as T}from"./index-b97bc1d8.js";import{E as B}from"./Error-34d8d2d4.js";import{L as D}from"./Loading-ce1fa89e.js";import"./chunk-5MKCW436-b1c3a239.js";const L=({favoriteId:i,id:n,title:c,description:x,price:a,img:p,data:t})=>{const o=F(),u=g(),y=E(),h=l(d=>d.auth.token),w=async()=>{try{await u(C([i,h])).unwrap(),await u(v(h)).unwrap(),j(o,"Product removed from favourites","success")}catch{j(o,"Something went wrong","error")}},S=()=>{I("singleProduct",t),y("/description")};return e.jsx(e.Fragment,{children:e.jsxs(m,{flexDirection:"column",mb:"30px",children:[e.jsx(r,{overflow:"hidden",children:e.jsx(b,{onClick:S,className:"imgAnimation",cursor:"pointer",src:p[0]})}),e.jsxs(r,{mt:"15px",children:[e.jsxs(m,{fontSize:["14px","14px","16px","16px","18px"],justifyContent:"space-between",children:[e.jsx(s,{children:f(c)}),e.jsxs(s,{children:["₹",k(a)]})]}),e.jsx(s,{fontSize:["12px","12px","15px","15px","17px"],color:"gray",my:"2px",children:f(x,20)}),e.jsx(z,{variant:"ghost",borderRadius:"20px",border:"1px solid #cecdce",mt:"20px",onClick:w,children:"Remove"})]})]})})};function O(){const i=g(),n=l(t=>t.auth.token),{isLoading:c,isError:x,favourite:a}=l(t=>t.favourite),p=async t=>{try{await i(v(t)).unwrap()}catch(o){console.log(o)}};return R.useEffect(()=>{p(n)},[n]),c?e.jsx(D,{}):x?e.jsx(B,{}):e.jsx(e.Fragment,{children:e.jsxs(r,{maxW:"1450px",minHeight:"60vh",mx:"auto",my:"20px",p:"15px",children:[e.jsx(s,{fontSize:"20px",fontWeight:500,children:"Favourites"}),a.length?e.jsx(r,{display:"grid",gap:["20px","20px","20px","40px","40px"],mt:"40px",gridTemplateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"],children:a.map(t=>e.jsx(L,{...t,data:t},t.favoriteId))}):e.jsx(r,{children:e.jsx(T,{h:"30vh",children:e.jsx(s,{fontSize:"20px",children:"Your favourite items will be displayed here."})})})]})})}export{O as default};
