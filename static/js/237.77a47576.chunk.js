"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[237],{237:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(434),s=n(791),r="contacts-list_list__ER5uk",c="contacts-list_item__pRV9O",l="contacts-list_btn__Qwmw+",o=n(184),i=function(e){var t=e.contacts,n=e.removeContact,a=t.map((function(e){var t=e.id,a=e.name,s=e.number;return(0,o.jsxs)("li",{className:c,children:[a,": ",s," ",(0,o.jsx)("button",{onClick:function(){return n(t)},className:l,children:"Delete"})]},t)}));return(0,o.jsxs)("ol",{className:r,children:[" ",a]})},u=i;i.defaultProps={contacts:[]};var m="contacts-filter_title__JHeB3",d="contacts-filter_label__ZBkTF",f="contacts-filter_input__g9doQ",h=function(e){var t=e.handleChange,n=e.value;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{className:m,children:"Contacts"}),(0,o.jsx)("label",{className:d,children:"Find contacts by name"}),(0,o.jsx)("input",{value:n,name:"filter",className:f,onChange:t})]})},_=n(942),v=n(413),b=n(439),p="contacts-form_formGroup__2fo+P",x="contacts-form_label__LJ0V5",j="contacts-form_input__N2uvt",N="contacts-form_btn__e8WrG",C={name:"",number:""},k=function(e){var t=e.onSubmit,n=(0,s.useState)((0,v.Z)({},C)),a=(0,b.Z)(n,2),r=a[0],c=a[1],l=function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return(0,v.Z)((0,v.Z)({},e),{},(0,_.Z)({},n,a))}))},i=r.name,u=r.number;return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t((0,v.Z)({},r)),c((0,v.Z)({},C))},children:[(0,o.jsxs)("div",{className:p,children:[(0,o.jsx)("label",{className:x,children:"Name"}),(0,o.jsx)("input",{type:"text",className:j,name:"name",value:i,onChange:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,o.jsxs)("div",{className:p,children:[(0,o.jsx)("label",{className:x,children:"Number"}),(0,o.jsx)("input",{type:"tel",className:j,name:"number",value:u,onChange:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,o.jsx)("button",{className:N,type:"submit",children:"Add contact"})]})},g=n(436),Z=n(653),w=function(e){var t=e.contacts,n=e.filter;if(!n)return t.items;var a=n.toLowerCase();return t.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},y=function(e){return e.filter},A={title:"phone-book_title__ielor"},F=function(){var e=(0,a.v9)(w),t=(0,a.v9)(y),n=(0,a.I0)();(0,s.useEffect)((function(){n((0,g.CL)())}),[n]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:A.block,children:[(0,o.jsx)("h3",{className:A.title,children:"Phone Book"}),(0,o.jsx)(k,{onSubmit:function(e){var t=e.name,a=e.number,s=(0,g.v6)({name:t,number:a});n(s)}})]}),(0,o.jsxs)("div",{className:A.block,children:[(0,o.jsx)(h,{value:t,handleChange:function(e){var t=e.target;n((0,Z.T)(t.value))}}),(0,o.jsx)(u,{contacts:e,removeContact:function(e){var t=(0,g.in)(e);n(t)}})]})]})}}}]);
//# sourceMappingURL=237.77a47576.chunk.js.map