"use strict";(self.webpackChunkpets_support_front=self.webpackChunkpets_support_front||[]).push([[820],{1136:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,i,o,s=t(2791),c=t(5048),d=t(5677),a=function(n){return n.friends.items},u=function(n){return n.friends.isLoading},h=t(9439),l=t(168),f=t(6444),m=f.ZP.div(r||(r=(0,l.Z)(["\n  display: block;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.1);\n"]))),p=f.ZP.div(i||(i=(0,l.Z)(["\n  background-color: ",";\n  margin: 10% auto;\n  padding: 12px;\n  position: absolute;\n  top: 5%;\n  left: 45%;\n  border: 1px solid ",";\n  box-shadow: ",";\n  border-radius: 8px;\n\n  margin-bottom: 4px;\n\n  font-weight: ",";\n  font-size: ",";\n  line-height: 16px;\n\n  @media (min-width: ",") {\n    left: 40%;\n    margin: 5% auto;\n  }\n\n  @media (min-width: ",") {\n    left: 58%;\n    top: 7%;\n    margin: 5% auto;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.hoverGoHome}),(function(n){return n.theme.shadows.hoursWorkModalShadow}),(function(n){return n.theme.fontWeight.medium}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.screenSizes.tablet}),(function(n){return n.theme.screenSizes.desktop})),x=f.ZP.li(o||(o=(0,l.Z)(["\n  margin-bottom: 4px;\n\n  font-weight: ",";\n  font-size: ",";\n  line-height: 16px;\n"])),(function(n){return n.theme.fontWeight.medium}),(function(n){return n.theme.fontSizes.xs})),g=t(184),j=function(n){var e=n.workDays,t=["MN","TU","WE","TH","FR","SA","SU"];return(0,g.jsx)("ul",{children:e.map((function(n,e){return(0,g.jsxs)(x,{children:[t[e]," ",n.from," - ",n.to]},n._id)}))})};var w,v,k,b,z,S,Z,y,P,D=function(n){var e=n.workDays,t=n.onClick;return(0,g.jsx)("div",{children:(0,g.jsx)(m,{onClick:t,children:(0,g.jsx)(p,{children:e?(0,g.jsx)(j,{workDays:e}):(0,g.jsx)("p",{children:"There are no working hours"})})})})},L=f.ZP.h2(w||(w=(0,l.Z)(["\n  text-align: center;\n  margin: 0;\n  margin-bottom: 12px;\n  padding: 0 8px;\n\n  a {\n    color: ",";\n    font-weight: ",";\n    font-size: ",";\n    line-height: 16px;\n\n    :hover {\n      color: ",";\n    }\n\n    @media (min-width: ",") {\n      font-size: ",";\n      line-height: 22px;\n    }\n\n    @media (min-width: ",") {\n      font-size: ",";\n      line-height: 27px;\n    }\n  }\n"])),(function(n){return n.theme.colors.hoverGoHome}),(function(n){return n.theme.fontWeight.bold}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.navAccent}),(function(n){return n.theme.screenSizes.tablet}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.screenSizes.desktop}),(function(n){return n.theme.fontSizes.ms})),F=f.ZP.div(v||(v=(0,l.Z)(["\n  display: flex;\n  gap: 12px;\n  position: relative;\n"]))),_=f.ZP.div(k||(k=(0,l.Z)(["\n  img {\n    max-width: fit-content;\n\n    @media (min-width: ",") {\n      max-width: 217px;\n    }\n\n    @media (min-width: ",") {\n    }\n  }\n"])),(function(n){return n.theme.screenSizes.tablet}),(function(n){return n.theme.screenSizes.desktop})),C=f.ZP.div(b||(b=(0,l.Z)(["\n  padding: 8px;\n  @media (min-width: ",") {\n  }\n\n  @media (min-width: ",") {\n  }\n"])),(function(n){return n.theme.screenSizes.tablet}),(function(n){return n.theme.screenSizes.desktop})),E=f.ZP.li(z||(z=(0,l.Z)(["\n  margin-bottom: 4px;\n\n  font-weight: ",";\n  font-size: ",";\n  line-height: 16px;\n\n  @media (min-width: ",") {\n    font-size: ",";\n    line-height: 19px;\n  }\n\n  @media (min-width: ",") {\n    font-size: ",";\n    line-height: 22px;\n  }\n\n  a {\n    /* text-decoration: none; */\n    color: ",";\n  }\n  :hover {\n    cursor: pointer;\n    color: ",";\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.fontWeight.medium}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.screenSizes.tablet}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.screenSizes.desktop}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.hoverGoHome}),(function(n){return n.theme.colors.hoverGoHome})),H=function(n){var e=n.workDays,t=new Date,r=function(n){return(n.getDay()+6)%7}(t),i=e[r];var o=function(n,e){n.isOpen;var t=n.from,r=n.to,i=e.getHours(),o=parseInt(t),s=parseInt(r);return"".concat(i).padStart(2,"0").slice(0,2)>=o&&"".concat(i).padStart(2,"0").slice(0,2)<s}(i,t);return(0,g.jsx)("p",{children:o?i.from+" - "+i.to:"--------------------------"})},W=t.p+"static/media/defaultLogo.b103636758c7636ae5dc.jpg",G=function(n){var e=n.friend,t=(0,s.useState)(!1),r=(0,h.Z)(t,2),i=r[0],o=r[1];(0,s.useEffect)((function(){var n=function(n){27===n.keyCode&&o(!1)};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[]);var c=e.title,d=e.imageUrl,a=void 0===d?W:d,u=e.address,l=e.email,f=e.phone,m=e.workDays,p=e.addressUrl,x=e.url,j="mailto:".concat(l),w="tel:".concat(f);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(L,{children:(0,g.jsx)("a",{href:x,target:"_blank",rel:"noreferrer",children:c})}),(0,g.jsxs)(F,{children:[(0,g.jsx)(_,{children:a?(0,g.jsx)("img",{src:a,alt:"Logo",className:"FriendLogo",width:"110",height:"78"}):(0,g.jsx)("img",{src:W,alt:"Logo",className:"FriendLogo",width:"110",height:"78"})}),(0,g.jsx)(C,{children:(0,g.jsxs)("ul",{className:"FriendInfoList",children:[(0,g.jsxs)(E,{onClick:function(){o(!i)},children:["Time:",(0,g.jsx)("br",{}),m?(0,g.jsx)(H,{workDays:m}):(0,g.jsx)("p",{children:"--------------------------"})]}),(0,g.jsxs)(E,{children:["Email:",(0,g.jsx)("br",{}),l?(0,g.jsx)("a",{href:j,children:l}):(0,g.jsx)("p",{children:"--------------------------"})]}),(0,g.jsxs)(E,{children:["Phone:",(0,g.jsx)("br",{}),f?(0,g.jsx)("a",{href:w,children:f}):(0,g.jsx)("p",{children:"--------------------------"})]}),(0,g.jsxs)(E,{children:["Address:",(0,g.jsx)("br",{}),u?(0,g.jsx)("address",{children:(0,g.jsx)("a",{href:p,target:"_blank",rel:"noreferrer",children:u})}):(0,g.jsx)("p",{children:"--------------------------"})]})]})}),i&&(0,g.jsx)(D,{workDays:m,onClick:function(n){o(!1)}})]})]})},I=f.ZP.div(S||(S=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),N=f.ZP.div(Z||(Z=(0,l.Z)(["\n  display: flex;\n  justify-content: space-around;\n  padding: 20px;\n\n  @media (min-width: ",") {\n    padding: 32px;\n    display: block;\n  }\n\n  @media (min-width: ",") {\n    padding: 16px;\n  }\n"])),(function(n){return n.theme.screenSizes.tablet}),(function(n){return n.theme.screenSizes.desktop})),T=f.ZP.ul(y||(y=(0,l.Z)(["\n  display: grid;\n  grid-gap: 12px;\n\n  @media (min-width: ",") {\n    grid-gap: 32px;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n  }\n\n  @media (min-width: ",") {\n    grid-gap: 32px;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n  }\n"])),(function(n){return n.theme.screenSizes.tablet}),(function(n){return n.theme.screenSizes.desktop})),U=f.ZP.li(P||(P=(0,l.Z)(["\n  background-color: ",";\n  border-radius: ",";\n  box-shadow: ",";\n\n  padding: 12px 4px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.large}),(function(n){return n.theme.shadows.inputShadow})),A=function(n){var e=n.ourFriends;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(N,{children:(0,g.jsx)(T,{children:e.map((function(n){return(0,g.jsx)(U,{children:(0,g.jsx)(G,{friend:n})},n._id)}))})})})},M=t(9649),O=t(1192),B=function(){var n=(0,c.I0)();(0,s.useEffect)((function(){n((0,d.B)())}),[n]);var e=(0,c.v9)(a),t=(0,c.v9)(u)?(0,g.jsx)(M.a,{}):(0,g.jsx)(A,{ourFriends:e});return(0,g.jsxs)(I,{children:[(0,g.jsx)(O.D,{children:"Our friends"}),t]})}}}]);
//# sourceMappingURL=820.c5db005a.chunk.js.map