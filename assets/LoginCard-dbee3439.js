import{h as x,b as z,u as P,a as q,c as D,aq as H,R as j,j as e,d as n,F as I,S as r,T as o,i as u,B as b,L as O,aw as U,av as f,Z as y,s as t,ax as B,ay as V}from"./index-731467a7.js";import{H as w}from"./chunk-7OLJDQMT-822190b5.js";import{F as S}from"./chunk-7COXQURZ-3c2cdda3.js";import{C as W}from"./chunk-P675YKMR-2e0badf8.js";import"./chunk-7D6N5TE5-be199884.js";import"./index-8d968404.js";function G(){const[i,C]=x.useState({email:"",password:""}),[v,g]=x.useState(!1),[c,E]=x.useState(""),d=z(),h=P(),a=q(),{loading:L}=D(s=>s.auth),l=H(),p=s=>{const{name:k,value:R}=s.target;C({...i,[k]:R})},T=async()=>{if(i.email===""||i.password==="")return t(a,"Please Fill All The Fields","error");try{const s=await h(B(i)).unwrap();t(a,"Login successfully","success"),console.log(l),l.state&&l.state.from?d(l.state.from,{replace:!0}):d("/")}catch(s){console.log("error",s),t(a,s.message?s.message:"Invalid Credentials","error")}};let m=j("white","gray.700");const F=async()=>{c===""&&t(a,"Please Enter Your Email","error");try{const s=await h(V(c)).unwrap();t(a,"Reset OTP Sent To Your Email","success"),d("/resetpassword")}catch(s){t(a,s.message?s.message:"User Not Found","error"),console.error(s)}};return e.jsxs(e.Fragment,{children:[e.jsx(n,{marginTop:["-5px","-10px","-20px","-30px","-40px"]}),e.jsx(I,{minH:"75vh",align:"center",justify:"center",bg:j("gray.50","gray.800"),width:"100%",children:v?e.jsxs(r,{spacing:5,mx:"auto",maxW:"2xl",py:10,px:10,children:[e.jsxs(r,{align:"center",spacing:2,children:[e.jsx(w,{fontSize:"4xl",children:"Enter Your Email"}),e.jsx(o,{color:"gray.600",fontSize:"lg",children:"This OTP will be sent to your email."})]}),e.jsx(n,{rounded:"lg",bg:m,boxShadow:"lg",p:8,children:e.jsxs(r,{spacing:4,children:[e.jsx(o,{color:"gray.600",fontSize:"md",fontWeight:"bold",children:"Email Address"}),e.jsx(u,{type:"email",value:c,onChange:s=>E(s.target.value),variant:"filled",placeholder:"Enter your email address",required:!0}),e.jsxs(r,{spacing:3,children:[e.jsx(b,{bg:"blue.400",color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},onClick:F,children:"Submit"}),e.jsxs(n,{justifyContent:"center",alignItems:"center",display:"flex",children:["Return To"," ",e.jsx(o,{ml:1,textDecorationLine:"underline",color:"blue.400",cursor:"pointer",onClick:()=>g(!1),children:L?e.jsxs(O,{children:[e.jsx(U,{})," ",e.jsx(o,{children:'"Please wait..."'})]}):"Login"})]})]})]})})]}):e.jsxs(r,{spacing:8,mx:"auto",maxW:"2xl",py:10,px:10,children:[e.jsxs(r,{align:"center",children:[e.jsx(w,{fontSize:"3xl",children:"Login to your account"}),e.jsxs(o,{fontSize:"lg",color:"gray.600",children:["to buy all of our cool ",e.jsx(f,{color:"blue.400",children:"Products"})," ","✌️"]})]}),e.jsx(n,{rounded:"lg",bg:m,boxShadow:"lg",p:9,children:e.jsxs(r,{spacing:3,children:[e.jsxs(y,{id:"email",isRequired:!0,children:[e.jsx(S,{children:"Email address"}),e.jsx(u,{name:"email",type:"email",onChange:p})]}),e.jsxs(y,{id:"password",isRequired:!0,children:[e.jsx(S,{children:"Password"}),e.jsx(u,{name:"password",onChange:p,type:"password"})]}),e.jsxs(r,{spacing:5,children:[e.jsxs(r,{direction:{base:"column",sm:"row"},align:"start",justify:"space-between",children:[e.jsx(W,{children:"Remember me"}),e.jsx(o,{cursor:"pointer",color:"blue.400",onClick:()=>g(!0),children:"Forgot password?"})]}),e.jsx(b,{bg:"blue.400",color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},onClick:T,mb:-2,children:"Login"})]}),e.jsx(r,{children:e.jsxs(n,{justifyContent:"center",alignItems:"center",display:"flex",children:["Don't have a account?",e.jsx(f,{to:"/signup",children:e.jsx(o,{ml:1,textDecorationLine:"underline",color:"blue.400",children:"Sign Up"})})]})})]})})]})}),e.jsx(n,{marginTop:["-10px","-20px","-30px","-40px","-40px"]})]})}export{G as default};
