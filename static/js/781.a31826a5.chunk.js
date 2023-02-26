"use strict";(self.webpackChunkpets_support_front=self.webpackChunkpets_support_front||[]).push([[781],{4470:function(n,e,t){t.d(e,{z:function(){return i}});var r=t(184),i=function(n){var e=n.type,t=void 0===e?"button":e,i=n.children,o=n.style,a=n.onClick;return(0,r.jsx)(o,{type:t,onClick:a,children:i})}},6674:function(n,e,t){t.d(e,{r:function(){return c}});var r,i=t(168),o=t(6444).ZP.p(r||(r=(0,i.Z)(["\n  margin-bottom: 40px;\n\n  font-weight: ",";\n  font-size: ",";\n  letter-spacing: 0.04em;\n  color: ",";\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    font-weight: ",";\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fontWeight.bold}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.regModalTitleColor}),(function(n){return n.theme.fontWeight.medium}),(function(n){return n.theme.fontSizes.ls})),a=t(184),c=function(n){var e=n.children;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o,{children:e})})}},1904:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r=t(9439),i=t(2791),o=t(2506),a=t(7689),c=t(9434),s=t(1597),d=t(6674),l=t(4470),m=t(6727);m.kM(m.Z_,"numeric",(function(){return this.matches(/^\+3\d{11}$/,"the number must start with +3 and have digits only and have 12 numbers")})),m.kM(m.Z_,"leters",(function(){return this.matches(/^([A-Za-z][A-Za-z\-\']{1,50})|([\u0410-\u042f\u0401I\u0407\u0490\u0404\u0430-\u044f\u0451\u0456\u0457\u0491\u0454][\u0410-\u042f\u0401I\u0407\u0490\u0404\u0430-\u044f\u0451\u0456\u0457\u0491\u0454\-\']{1,50})$/,"The name should have  only alphabets")})),m.kM(m.Z_,"mail",(function(){return this.matches(/^((?!-)([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"The email address is incorect")})),m.kM(m.Z_,"password",(function(){return this.matches(/^\S+$/,"password must be without spaces")})),m.kM(m.Z_,"city",(function(){return this.matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490']+(?:[\s-][a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490']+)*,\s*[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490']+(?:[\s-][a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490']+)*$/,"is incorect, must be City, region")}));var u,p,h,x,f,g,b,y,Z,w,v,j,k,P,z,S=m.Ry().shape({email:m.Z_().mail().required("Please enter your email!"),password:m.Z_().password().min("7").max("32").required("Please enter your password!"),confirmPassword:m.Z_().password().min("7").max("32").label("confirm password").required().oneOf([m.iH("password"),null],"Passwords must match"),name:m.Z_().min("2").max("16").leters().required("Please enter your name!"),city:m.Z_().min("3").max("40").city().required("Please enter city and region!"),mobilePhone:m.Z_().min("3").numeric().required("Please enter your number!")}),M=t(168),C=t(6444),_=t(1087),A=t(6355),q=C.ZP.div(u||(u=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  background-color: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    padding-top: 60px;\n    padding-bottom: 60px;\n\n    background-color: ",";\n    box-shadow: ",";\n    border-radius: ",";\n  }\n  @media screen and (min-width: 1280px) {\n    width: 618px;\n  }\n"])),(function(n){return n.theme.colors.transparent}),(function(n){return n.theme.colors.regModBack}),(function(n){return n.theme.shadows.regModalShadow}),(function(n){return n.theme.radii.large})),B=C.ZP.div(p||(p=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 40px;\n  margin-top: 28px;\n"]))),F=C.ZP.div(h||(h=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 40px;\n  margin-top: 40px;\n"]))),N=C.ZP.div(x||(x=(0,M.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),W=C.ZP.p(f||(f=(0,M.Z)(["\n  margin-right: 6px;\n  font-family: 'Manrope';\n  font-size: ",";\n  letter-spacing: 0.04em;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.regModalLinkText})),$=(0,C.ZP)(_.rU)(g||(g=(0,M.Z)(["\n  font-family: 'Manrope';\n  font-size: ",";\n  letter-spacing: 0.04em;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.regModalLink})),L=C.ZP.button(b||(b=(0,M.Z)(["\n  width: 280px;\n  height: 44px;\n\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  border: none;\n  cursor: pointer;\n\n  font-weight: ",";\n  font-size: 20px;\n\n  @media screen and (min-width: 768px) {\n    width: 448px;\n  }\n\n  &:hover {\n    border: 2px solid #f59256;\n    background-color: transparent;\n    color: ",";\n  }\n  &:active {\n    border: 2px solid #f59256;\n    background-color: transparent;\n    color: ",";\n  }\n  :not(:last-child) {\n    margin-bottom: 12px;\n  }\n"])),(function(n){return n.theme.colors.regModalActiveBtn}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.large}),(function(n){return n.theme.fontWeight.medium}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.black})),T=C.ZP.button(y||(y=(0,M.Z)(["\n  width: 280px;\n  height: 44px;\n\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  border: none;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    width: 448px;\n  }\n  &:hover {\n    border: 2px solid #f59256;\n    background-color: transparent;\n    color: ",";\n  }\n  &:active {\n    border: 2px solid #f59256;\n    background-color: transparent;\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.regModalActiveBtn}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.large}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.black})),I=(0,C.ZP)(o.l0)(Z||(Z=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n"]))),R=(0,C.ZP)(o.gN)(w||(w=(0,M.Z)(["\n  width: 280px;\n  background-color: ",";\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: ",";\n  padding-top: 11px;\n  padding-bottom: 11px;\n  padding-left: 14px;\n  outline: none;\n\n  @media screen and (min-width: 768px) {\n    width: 448px;\n    background-color: #fdf7f2;\n    padding-left: 32px;\n    padding-top: 14px;\n    padding-bottom: 14px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 458px;\n  }\n\n  :not(:last-child) {\n    margin-bottom: 16px;\n  }\n  ::placeholder {\n    color: ",";\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.colors.transparent}),(function(n){return n.theme.radii.large}),(function(n){return n.theme.colors.regModalplaceholderColor}),(function(n){return n.theme.fontSizes.s})),E=(0,C.ZP)(o.Bc)(v||(v=(0,M.Z)(["\n  color: ",";\n  margin-bottom: ","px;\n  margin-left: ","px;\n  font-size: ",";\n\n  @media screen and (min-width: 768px) {\n    margin-left: ","px;\n  }\n"])),(function(n){return n.theme.colors.error}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.space[5]})),H=(0,C.ZP)(A.dSq)(j||(j=(0,M.Z)(["\n  color: ",";\n  size: 2em;\n"])),(function(n){return n.theme.colors.regModalActiveBtn})),J=(0,C.ZP)(A.tgn)(k||(k=(0,M.Z)([""]))),O=C.ZP.div(P||(P=(0,M.Z)(["\n  position: relative;\n"]))),U=C.ZP.div(z||(z=(0,M.Z)(["\n  position: absolute;\n  right: 20px;\n  top: 11px;\n\n  @media screen and (min-width: 768px) {\n    top: 14px;\n  }\n"]))),V=t(184),D={email:"",password:"",confirmPassword:"",name:"",city:"",mobilePhone:""},G=function(){var n=(0,c.I0)(),e=(0,i.useState)(!1),t=(0,r.Z)(e,2),m=t[0],u=t[1],p=(0,i.useState)(!1),h=(0,r.Z)(p,2),x=h[0],f=h[1],g=(0,i.useState)(!1),b=(0,r.Z)(g,2),y=b[0],Z=b[1],w=(0,i.useState)(!0),v=(0,r.Z)(w,2),j=v[0],k=v[1],P=(0,i.useState)(!0),z=(0,r.Z)(P,2),M=z[0],C=z[1],_=(0,i.useState)(!1),A=(0,r.Z)(_,2),G=A[0],K=A[1],Q=function(){f((function(n){return!n})),k((function(n){return!n}))},X=function(){Z((function(n){return!n})),C((function(n){return!n}))};return(0,V.jsx)(V.Fragment,{children:(0,V.jsxs)(q,{children:[(0,V.jsx)(d.r,{children:"Registration"}),(0,V.jsx)(o.J9,{initialValues:D,onSubmit:function(e,t){var r=t.resetForm;if(""!==e){var i=e.email,o=e.password,a=e.name,c=e.city,d=e.mobilePhone.toString();n(s.ZP.registration({email:i,password:o,name:a,city:c,phone:d})),K(!0),r()}},validationSchema:S,children:(0,V.jsx)(I,{children:m?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(R,{type:"text",name:"name",placeholder:"Name"}),(0,V.jsx)(E,{component:"span",name:"name"}),(0,V.jsx)(R,{type:"text",name:"city",placeholder:"City, region"}),(0,V.jsx)(E,{component:"span",name:"city"}),(0,V.jsx)(R,{type:"tel",name:"mobilePhone",placeholder:"Mobile phone"}),(0,V.jsx)(E,{component:"span",name:"mobilePhone"}),(0,V.jsxs)(B,{children:[(0,V.jsx)(l.z,{style:L,type:"submit",children:"Register",onClick:function(){}}),(0,V.jsx)(l.z,{style:L,onClick:function(){u(!1)},children:"Back"})]}),(0,V.jsxs)(N,{children:[(0,V.jsx)(W,{children:"Already have an account?"}),(0,V.jsx)($,{to:"/login",children:"Login"})]}),G&&(0,V.jsx)(a.Fg,{to:"/confirm-email"})]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(R,{type:"email",name:"email",placeholder:"Email"}),(0,V.jsx)(E,{component:"span",name:"email"}),(0,V.jsxs)(O,{children:[(0,V.jsx)(R,{type:j?"password":"text",name:"password",placeholder:"Password"}),(0,V.jsx)(U,{children:x?(0,V.jsx)(H,{onClick:Q}):(0,V.jsx)(J,{onClick:Q})})]}),(0,V.jsx)(E,{component:"span",name:"password"}),(0,V.jsxs)(O,{children:[(0,V.jsx)(R,{type:M?"password":"text",name:"confirmPassword",placeholder:"Confirm Password"}),(0,V.jsx)(U,{children:y?(0,V.jsx)(H,{onClick:X}):(0,V.jsx)(J,{onClick:X})})]}),(0,V.jsx)(E,{component:"span",name:"confirmPassword"}),(0,V.jsx)(F,{children:(0,V.jsx)(l.z,{style:T,onClick:function(){u(!0)},children:"Next"})}),(0,V.jsxs)(N,{children:[(0,V.jsx)(W,{children:"Already have an account?"}),(0,V.jsx)($,{to:"/login",children:"Login"})]})]})})})]})})},K=t(5847),Q=function(){return(0,V.jsx)(K.N,{children:(0,V.jsx)(K.W,{children:(0,V.jsx)(G,{})})})}},5847:function(n,e,t){t.d(e,{W:function(){return u},N:function(){return p}});var r,i,o=t(168),a=t(6444),c=t.p+"static/media/mobile.5df5d211856d3f566381.png",s=t.p+"static/media/mobile-2x.f1bfc5e90017a28fb242.png",d=t.p+"static/media/tablet.498eb53b6b06180080f2.png",l=t.p+"static/media/tablet-2x.46d68bd5174fb7ecee2a.png",m=t.p+"static/media/desctop.d1ea612636b48552f552.png",u=a.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),p=a.ZP.div(i||(i=(0,o.Z)(["\n  width: 100%;\n  height: 100vh;\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position-y: bottom;\n\n  @media only screen and (-webkit-min-device-pixel-ratio: 2),\n    only screen and (min--moz-device-pixel-ratio: 2),\n    only screen and (-moz-min-device-pixel-ratio: 2),\n    only screen and (-o-min-device-pixel-ratio: 2/1),\n    only screen and (min-device-pixel-ratio: 2),\n    only screen and (min-resolution: 192dpi),\n    only screen and (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n\n  @media screen and (min-width: 768px) {\n    background-image: url(",");\n\n    @media only screen and (-webkit-min-device-pixel-ratio: 2),\n      only screen and (min--moz-device-pixel-ratio: 2),\n      only screen and (-moz-min-device-pixel-ratio: 2),\n      only screen and (-o-min-device-pixel-ratio: 2/1),\n      only screen and (min-device-pixel-ratio: 2),\n      only screen and (min-resolution: 192dpi),\n      only screen and (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n\n  @media screen and (min-width: 1280px) {\n    background-image: url(",");\n\n    @media only screen and (-webkit-min-device-pixel-ratio: 2),\n      only screen and (min--moz-device-pixel-ratio: 2),\n      only screen and (-moz-min-device-pixel-ratio: 2),\n      only screen and (-o-min-device-pixel-ratio: 2/1),\n      only screen and (min-device-pixel-ratio: 2),\n      only screen and (min-resolution: 192dpi),\n      only screen and (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n"])),c,s,d,l,m,m)}}]);
//# sourceMappingURL=781.a31826a5.chunk.js.map