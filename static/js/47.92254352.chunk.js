"use strict";(self.webpackChunkpets_support_front=self.webpackChunkpets_support_front||[]).push([[47],{4470:function(n,e,t){t.d(e,{z:function(){return o}});var r=t(184),o=function(n){var e=n.type,t=void 0===e?"button":e,o=n.children,i=n.style,c=n.onClick;return(0,r.jsx)(i,{type:t,onClick:c,children:o})}},2373:function(n,e,t){t.d(e,{Z:function(){return h}});var r,o,i=t(2791),c=t(4164),a=t(168),s=t(6444),l=s.ZP.div(r||(r=(0,a.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  backdrop-filter: ",";\n"])),(function(n){var e=n.color;return void 0===e?"rgba(17, 17, 17, 0.6)":e}),(function(n){return n.filter?"blur(0)":"blur(10px)"})),d=s.ZP.div(o||(o=(0,a.Z)(["\n  max-width: calc(100vw - 20px);\n  max-height: calc(100vh - 20px);\n"]))),u=t(184),m=document.querySelector("#modal-root"),h=function(n){var e=n.children,t=n.onClick;function r(n){"Escape"===n.code&&t()}return(0,i.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}})),(0,c.createPortal)((0,u.jsx)(l,{onClick:function(n){n.target===n.currentTarget&&t()},color:"transparen",filter:"true",children:(0,u.jsx)(d,{children:e})}),m)}},6674:function(n,e,t){t.d(e,{r:function(){return a}});var r,o=t(168),i=t(6444).ZP.p(r||(r=(0,o.Z)(["\n  margin-bottom: 40px;\n\n  font-weight: ",";\n  font-size: ",";\n  letter-spacing: 0.04em;\n  color: ",";\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    font-weight: ",";\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fontWeight.bold}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.regModalTitleColor}),(function(n){return n.theme.fontWeight.medium}),(function(n){return n.theme.fontSizes.ls})),c=t(184),a=function(n){var e=n.children;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i,{children:e})})}},4047:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r=t(9439),o=t(2791),i=t(2373),c=t(2506),a=t(6674),s=t(4470),l=t(6727);l.kM(l.Z_,"numeric",(function(){return this.matches(/^\d+$/,"The number should have digits only")})),l.kM(l.Z_,"leters",(function(){return this.matches(/^[aA-zZ\s]+$/,"The name should have  only alphabets")})),l.kM(l.Z_,"mail",(function(){return this.matches(/^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,"The email address is incorect")}));var d,u,m,h,f,p,x,g,b,Z,w,j,k,v,y,P,z,C=l.Ry().shape({email:l.Z_().mail().required("Please enter your email!"),password:l.Z_().min("7").required("Please enter your password!"),confirmPassword:l.Z_().label("confirm password").required().oneOf([l.iH("password"),null],"Passwords must match"),name:l.Z_().min("3").leters().required("Please enter your name!"),city:l.Z_().min("3").leters().required("Please enter city and region!"),mobilePhone:l.Z_().min("3").numeric().required("Please enter your number!")}),S=t(168),M=t(6444),_=t(1087),q=t(6355),A=M.ZP.div(d||(d=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  background-color: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    padding-top: 60px;\n    padding-bottom: 60px;\n\n    background-color: ",";\n    box-shadow: ",";\n    border-radius: ",";\n  }\n  @media screen and (min-width: 1280px) {\n    width: 618px;\n  }\n"])),(function(n){return n.theme.colors.transparent}),(function(n){return n.theme.colors.regModBack}),(function(n){return n.theme.shadows.regModalShadow}),(function(n){return n.theme.radii.large})),B=M.ZP.div(u||(u=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 40px;\n  margin-top: 28px;\n"]))),E=M.ZP.div(m||(m=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 40px;\n  margin-top: 40px;\n"]))),F=M.ZP.div(h||(h=(0,S.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),L=M.ZP.p(f||(f=(0,S.Z)(["\n  margin-right: 6px;\n  font-family: 'Manrope';\n  font-size: ",";\n  letter-spacing: 0.04em;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.regModalLinkText})),T=(0,M.ZP)(_.rU)(p||(p=(0,S.Z)(["\n  font-family: 'Manrope';\n  font-size: ",";\n  letter-spacing: 0.04em;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.regModalLink})),$=M.ZP.button(x||(x=(0,S.Z)(["\n  width: 280px;\n  height: 44px;\n\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  border: none;\n  cursor: pointer;\n\n  font-weight: ",";\n  font-size: 20px;\n\n  @media screen and (min-width: 768px) {\n    width: 448px;\n  }\n\n  &:hover {\n    border: 2px solid #f59256;\n    background-color: transparent;\n    color: ",";\n  }\n  &:active {\n    border: 2px solid #f59256;\n    background-color: transparent;\n    color: ",";\n  }\n  :not(:last-child) {\n    margin-bottom: 12px;\n  }\n"])),(function(n){return n.theme.colors.regModalActiveBtn}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.large}),(function(n){return n.theme.fontWeight.medium}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.black})),N=M.ZP.button(g||(g=(0,S.Z)(["\n  width: 280px;\n  height: 44px;\n\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  border: none;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    width: 448px;\n  }\n  &:hover {\n    border: 2px solid #f59256;\n    background-color: transparent;\n    color: ",";\n  }\n  &:active {\n    border: 2px solid #f59256;\n    background-color: transparent;\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.regModalActiveBtn}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.large}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.black})),R=(0,M.ZP)(c.l0)(b||(b=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n"]))),W=(0,M.ZP)(c.gN)(Z||(Z=(0,S.Z)(["\n  width: 280px;\n  background-color: ",";\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: ",";\n  padding-top: 11px;\n  padding-bottom: 11px;\n  padding-left: 14px;\n\n  @media screen and (min-width: 768px) {\n    width: 448px;\n    background-color: #fdf7f2;\n    padding-left: 32px;\n    padding-top: 14px;\n    padding-bottom: 14px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 458px;\n  }\n\n  :not(:last-child) {\n    margin-bottom: 16px;\n  }\n  ::placeholder {\n    color: ",";\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.colors.transparent}),(function(n){return n.theme.radii.large}),(function(n){return n.theme.colors.regModalplaceholderColor}),(function(n){return n.theme.fontSizes.s})),H=(0,M.ZP)(c.Bc)(w||(w=(0,S.Z)(["\n  color: ",";\n  margin-bottom: ","px;\n  margin-left: ","px;\n  font-size: ",";\n\n  @media screen and (min-width: 768px) {\n    margin-left: ","px;\n  }\n"])),(function(n){return n.theme.colors.error}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.space[5]})),J=(0,M.ZP)(q.dSq)(j||(j=(0,S.Z)(["\n  color: ",";\n  size: 2em;\n"])),(function(n){return n.theme.colors.regModalActiveBtn})),O=(0,M.ZP)(q.tgn)(k||(k=(0,S.Z)([""]))),U=M.ZP.div(v||(v=(0,S.Z)(["\n  position: relative;\n"]))),V=M.ZP.div(y||(y=(0,S.Z)(["\n  position: absolute;\n  right: 20px;\n  top: 11px;\n\n  @media screen and (min-width: 768px) {\n    top: 14px;\n  }\n"]))),D=t(184),G={email:"",password:"",confirmPassword:"",name:"",city:"",mobilePhone:""},I=function(){var n=(0,o.useState)(!1),e=(0,r.Z)(n,2),t=e[0],i=e[1],l=(0,o.useState)(!1),d=(0,r.Z)(l,2),u=d[0],m=d[1],h=(0,o.useState)(!1),f=(0,r.Z)(h,2),p=f[0],x=f[1],g=(0,o.useState)(!0),b=(0,r.Z)(g,2),Z=b[0],w=b[1],j=(0,o.useState)(!0),k=(0,r.Z)(j,2),v=k[0],y=k[1],P=(0,o.useState)(!1),z=(0,r.Z)(P,2),S=(z[0],z[1]),M=function(){m((function(n){return!n})),w((function(n){return!n}))},_=function(){x((function(n){return!n})),y((function(n){return!n}))};return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(A,{children:[(0,D.jsx)(a.r,{children:"Registration"}),(0,D.jsx)(c.J9,{initialValues:G,onSubmit:function(n,e){var t=e.resetForm;""!==n&&(console.log(n),t())},validationSchema:C,children:(0,D.jsx)(R,{children:t?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(W,{type:"text",name:"name",placeholder:"Name"}),(0,D.jsx)(H,{component:"span",name:"name"}),(0,D.jsx)(W,{type:"text",name:"city",placeholder:"City, region"}),(0,D.jsx)(H,{component:"span",name:"city"}),(0,D.jsx)(W,{type:"number",name:"mobilePhone",placeholder:"Mobile phone"}),(0,D.jsx)(H,{component:"span",name:"mobilePhone"}),(0,D.jsxs)(B,{children:[(0,D.jsx)(s.z,{style:$,type:"submit",children:"Register",onClick:function(){S(!0)}}),(0,D.jsx)(s.z,{style:$,onClick:function(){i(!1)},children:"Back"})]}),(0,D.jsxs)(F,{children:[(0,D.jsx)(L,{children:"Already have an account?"}),(0,D.jsx)(T,{to:"/login",children:"Login"})]})]}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(W,{type:"email",name:"email",placeholder:"Email"}),(0,D.jsx)(H,{component:"span",name:"email"}),(0,D.jsxs)(U,{children:[(0,D.jsx)(W,{type:Z?"password":"text",name:"password",placeholder:"Password"}),(0,D.jsx)(V,{children:u?(0,D.jsx)(J,{onClick:M}):(0,D.jsx)(O,{onClick:M})})]}),(0,D.jsx)(H,{component:"span",name:"password"}),(0,D.jsxs)(U,{children:[(0,D.jsx)(W,{type:v?"password":"text",name:"confirmPassword",placeholder:"Confirm Password"}),(0,D.jsx)(V,{children:p?(0,D.jsx)(J,{onClick:_}):(0,D.jsx)(O,{onClick:_})})]}),(0,D.jsx)(H,{component:"span",name:"confirmPassword"}),(0,D.jsx)(E,{children:(0,D.jsx)(s.z,{style:N,onClick:function(){i(!0)},children:"Next"})}),(0,D.jsxs)(F,{children:[(0,D.jsx)(L,{children:"Already have an account?"}),(0,D.jsx)(T,{to:"/login",children:"Login"})]})]})})})]})})},K=M.ZP.div(P||(P=(0,S.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 300px;\n  height: 300px;\n  background-color: #fdf7f2;\n  box-shadow: ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.shadows.shadow}),(function(n){return n.theme.radii.medium})),Q=M.ZP.button(z||(z=(0,S.Z)(["\n  width: 280px;\n  height: 44px;\n\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  font-size: ",";\n  border: none;\n  cursor: pointer;\n\n  &:hover {\n    border: 2px solid #f59256;\n    background-color: transparent;\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.regModalActiveBtn}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.large}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.black})),X=function(){return(0,D.jsx)(K,{children:(0,D.jsx)(s.z,{style:Q,onClick:function(){console.log("send email")},children:"send email"})})},Y=function(){var n=(0,o.useState)(!1),e=(0,r.Z)(n,2),t=e[0],c=e[1],a=(0,o.useState)(!1),s=(0,r.Z)(a,2),l=s[0];s[1];(0,o.useEffect)((function(){c(!0)}),[]);var d=function(){c(!1)};return(0,D.jsxs)(D.Fragment,{children:[t&&(0,D.jsx)(i.Z,{onClick:d,children:(0,D.jsx)(I,{})}),l&&(0,D.jsx)(i.Z,{onClick:d,children:(0,D.jsx)(X,{})})]})}}}]);
//# sourceMappingURL=47.92254352.chunk.js.map