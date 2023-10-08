import{b1 as z,j as e,v as A,w as I,af as f,K as S,c as x,u as _,b as B,d as r,W as i,b2 as F,b3 as M,F as l,az as m,I as y,b4 as C,b5 as D,aw as L,b6 as P,Q as h,b7 as H,ah as N,ai as O,aL as R,T as b,b8 as U,ak as W,al as t,b9 as G,ba as g,bb as T,bc as V,bd as Q,be as E,bf as K}from"./index-1688aba0.js";import q from"./Footer-f98f6640.js";import{I as p}from"./chunk-6QYXN73V-7d5031dc.js";import{A as J}from"./chunk-V7PAE35Z-de8c7c3e.js";import"./index.esm-1bb290c0.js";import"./chunk-JARCRF6W-e6bbe390.js";var v=s=>{const{className:n,...a}=s,o=z();return e.jsx(A.hr,{"aria-orientation":"horizontal",className:I("chakra-menu__divider",n),...a,__css:o.divider})};v.displayName="MenuDivider";function X(s){return f({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M404.7 79.78h-2.8c-7.5.26-15.8 1.73-24.8 4.3-18 5.16-38.4 14.56-59.3 25.78-41.9 22.4-85.8 52-121.5 68.6-26.4 12.4-59.3 20.4-89.8 27.5-30.5 7.1-58.95 13.4-74.36 20.6-7.13 3.4-10.9 6.9-12.71 9.9-1.8 2.9-2.1 5.2-1.44 8.4 1.32 6.4 8.57 15.4 18.49 21.9l3.29 2.1c162.63-2.3 289.43-13.7 387.73-52.6 2.1-17.6 6.7-34.7 16.5-48.5v-.1l.1-.1c24.5-32.2 8.9-72.58-22.4-84.89-5-1.95-10.7-2.91-17-2.93zm21.9 185.12c-44.2 25.1-103.8 37-169.2 41.2-68.7 4.4-143.7.1-213.52-7.8l1.89 14c31.19 3.2 98.53 11.8 172.83 11.5 77.2-.3 159.6-11.3 208.6-46.2-.2-4.1-.4-8.3-.6-12.7zm7.1 30.2c-46.9 31.5-113.8 42.9-179.9 45.8 44.7 39 89.3 55.1 127.3 59.1 45.2 4.8 81.5-8.7 94.8-19.8 13-10.8 17.5-19.5 18.3-26.2.7-6.8-2-13.3-8.2-20.5-11.3-13.4-33.5-26.4-52.3-38.4z"}}]})(s)}function Y(s){return f({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 29.816l-231 154v106.368l231-154 231 154V183.816zm0 128.043L105 259.783v90.283l151-101.925 151 101.925v-90.283zm0 112l-87 58.725v67.6l87-58 87 58v-67.6zm0 89.957l-87 58v64.368l87-58 87 58v-64.368z"}}]})(s)}const Z=[{name:"Dashboard",icon:V,to:"/admindashboard"},{name:"Profile",icon:X,to:"/adminprofile"},{name:"All Products",icon:Q,to:"/adminallproducts"},{name:"Add Products",icon:E,to:"/adminaddproducts"},{name:"Update Product",icon:Y,to:"/adminaupdateproduct"},{name:"All Users",icon:K,to:"/adminallusers"}],j=({onClose:s,...n})=>e.jsxs(r,{transition:"3s ease",bg:i("white","gray.900"),borderRight:"1px",borderRightColor:i("gray.200","gray.700"),w:{base:"full",md:60},pos:"fixed",h:"full",...n,children:[e.jsxs(l,{h:"20",alignItems:"center",mx:"8",justifyContent:"space-between",children:[e.jsx(r,{w:"80px",fontSize:"2xl",fontFamily:"monospace",fontWeight:"bold",children:e.jsx(m,{to:"/admindashboard",children:e.jsx(y,{src:C})})}),e.jsx(D,{display:{base:"flex",md:"none"},onClick:s})]}),Z.map(a=>e.jsx(m,{to:a.to,children:e.jsx($,{icon:a.icon,children:a.name})},a.name))]}),$=({icon:s,children:n,...a})=>e.jsx(r,{style:{textDecoration:"none"},_focus:{boxShadow:"none"},children:e.jsxs(l,{align:"center",p:"4",mx:"4",borderRadius:"lg",role:"group",cursor:"pointer",_hover:{bg:"cyan.400",color:"white"},...a,children:[s&&e.jsx(L,{mr:"4",fontSize:"16",_groupHover:{color:"white"},as:s}),n]})}),ee=({onOpen:s,user:n,handleLogoutBtn:a,navigate:o,...d})=>e.jsxs(l,{ml:{base:0,md:60},px:{base:4,md:4},height:"20",alignItems:"center",bg:i("white","gray.900"),borderBottomWidth:"1px",borderBottomColor:i("gray.200","gray.700"),justifyContent:{base:"space-between",md:"flex-end"},...d,children:[e.jsx(p,{display:{base:"flex",md:"none"},onClick:s,variant:"outline","aria-label":"open menu",icon:e.jsx(P,{})}),e.jsx(r,{w:"80px",display:{base:"flex",md:"none"},fontSize:"2xl",fontFamily:"monospace",fontWeight:"bold",children:e.jsx(m,{to:"/",children:e.jsx(y,{src:C})})}),e.jsxs(h,{spacing:{base:"0",md:"6"},children:[e.jsx(p,{size:"lg",variant:"ghost","aria-label":"open menu",icon:e.jsx(H,{})}),e.jsx(l,{alignItems:"center",children:e.jsxs(N,{children:[e.jsx(O,{py:2,transition:"all 0.3s",_focus:{boxShadow:"none"},children:e.jsxs(h,{children:[e.jsx(J,{size:"sm"}),e.jsxs(R,{display:{base:"none",md:"flex"},alignItems:"flex-start",spacing:"1px",ml:"2",children:[e.jsxs(b,{fontSize:"sm",children:[" ",n.firstName]}),e.jsx(b,{fontSize:"xs",color:"gray.600",children:"Admin"})]}),e.jsx(r,{display:{base:"none",md:"flex"},children:e.jsx(U,{})})]})}),e.jsxs(W,{bg:i("white","gray.900"),borderColor:i("gray.200","gray.700"),children:[e.jsx(t,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{o("/admindashboard")},children:"Dashboard"}),e.jsx(t,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{o("/adminprofile")},children:"Profile"}),e.jsx(t,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{o("/adminallproducts")},children:"All Products"}),e.jsx(t,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{o("/adminaddproducts")},children:"Add Products"}),e.jsx(t,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{o("/adminaupdateproduct")},children:"Update Product"}),e.jsx(t,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{o("/adminallusers")},children:"All Users"}),e.jsx(v,{}),e.jsx(t,{onClick:a,icon:e.jsx(G,{}),children:"Sign out"})]})]})})]})]}),ie=({children:s})=>{const{isOpen:n,onOpen:a,onClose:o}=S();x(c=>c.auth);const d=x(c=>c.auth.user)||"Admin",k=_(),u=B(),w=()=>{g("token"),g("user"),k(T()),u("/")};return e.jsxs(r,{minH:"100vh",bg:i("gray.100","gray.900"),children:[e.jsx(j,{onClose:o,display:{base:"none",md:"block"}}),e.jsx(F,{isOpen:n,placement:"left",onClose:o,returnFocusOnClose:!1,onOverlayClick:o,size:"full",children:e.jsx(M,{children:e.jsx(j,{onClose:o})})}),e.jsx(ee,{onOpen:a,user:d,handleLogoutBtn:w,navigate:u}),e.jsxs(r,{ml:{base:0,md:60},p:"4",minH:"100%",children:[e.jsx(r,{minH:"70vh",children:s}),e.jsx(r,{minH:"100%",children:e.jsx(q,{})})]})]})};export{ie as default};
