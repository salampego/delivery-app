"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[711],{711:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var a=t(1413),n=t(9434),i=t(6727),s=t(9841),o=t(6351),c=t(5218),d=t(5011),l=t(6106),u=t(5705),m=t(184),p=function(){var e=(0,n.I0)(),r=i.Ry().shape({name:i.Z_().required(),address:i.Z_().required(),phone:i.Z_().required(),email:i.Z_().email().required(),totalPrice:i.Rx(),date:i.hT(),products:i.IX().of(i.Ry().shape({name:i.Z_(),price:i.Rx(),photo:i.Z_(),quantity:i.Rx()}))}),t=(0,n.v9)(o.fk),p=(0,n.v9)(o.by),h=t.reduce((function(e,r){return e+r.price}),0),f=function(){return c.Am.success("Your order is being processed, we will contact you soon")},_=function(){return c.Am.error("Something went wrong with the order")};return(0,m.jsxs)("section",{className:"shoppingCart",children:[(0,m.jsx)("div",{className:"container",children:(0,m.jsx)(u.J9,{validationSchema:r,onSubmit:function(n,i){var s=i.resetForm,o=n.name,c=n.address,u=n.phone,m=n.email,b=t.map((function(e){var r=(0,a.Z)({},e);return delete r._id,delete r.initialPrice,r}));0!==h?r.validate({name:o,address:c,phone:u,email:m,totalPrice:h,products:b,date:(new Date).toLocaleDateString()}).then((function(){e((0,d.L)({name:o,address:c,phone:u,email:m,totalPrice:h,products:b,date:(new Date).toLocaleDateString()})),p||e((0,l.QS)()),s(),f()})).catch((function(e){console.error(e),_()})):_()},initialValues:{name:"",address:"",phone:"",email:""},children:function(e){var r=e.handleSubmit;return(0,m.jsxs)("form",{className:"basket__form",onSubmit:r,children:[(0,m.jsxs)("div",{className:"basket__form-wrapper",children:[(0,m.jsx)(s.WF,{}),(0,m.jsx)(s.Fv,{})]}),(0,m.jsxs)("div",{className:"basket__totalprice",children:[(0,m.jsxs)("p",{children:["Total price: ",Number(h).toFixed(2),"$"]}),(0,m.jsx)("button",{type:"submit",className:"basket__submit-btn",children:"Pay for the order"})]})]})}})}),(0,m.jsx)(c.x7,{})]})}}}]);
//# sourceMappingURL=711.caacc03d.chunk.js.map