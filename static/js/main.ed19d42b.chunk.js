(this.webpackJsonpstorefront=this.webpackJsonpstorefront||[]).push([[0],{29:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),i=a(13),l=(a(39),a(69)),m=a(70),u=a(67),s=a(66),g=a(65),p=a(64),E=a(20),d=a(63),y=Object(i.b)((function(e){return{categories:e.categories}}))((function(e){return r.a.createElement(d.a,{maxWidth:"md",component:"main"},e.categories.products.map((function(t,a){if(t.category===e.categories.activeCategory)return r.a.createElement(p.a,null,r.a.createElement(p.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(m.a,null,r.a.createElement(g.a,{title:t.name,titleTypographyProps:{align:"center"}}),r.a.createElement(s.a,null,r.a.createElement(E.a,{variant:"h5",color:"textPrimary"},"Category: ",t.category),r.a.createElement(E.a,{variant:"h5",color:"textPrimary"},"Price: ",t.price,"$"),r.a.createElement(E.a,{variant:"h5",color:"textPrimary"},"inStock: ",t.inStock)),r.a.createElement(u.a,null,r.a.createElement(l.a,{variant:"outlined",color:"primary"},"ADD TO CART"),r.a.createElement(l.a,{variant:"outlined",color:"primary"},"VIEW DETAILS")))))})))})),f={categories:[{name:"electronics",displayName:"Elecronics",description:"electronics"},{name:"food",displayName:"Food",description:"food"},{name:"clothing",displayName:"Clothing",description:"clothing"}],products:[{name:"TV",category:"electronics",price:699,inStock:5},{name:"Radio",category:"electronics",price:99,inStock:15},{name:"Shirt",category:"clothing",price:9,inStock:25},{name:"Socks",category:"clothing",price:12,inStock:10},{name:"Apples",category:"food",price:.99,inStock:500},{name:"Eggs",category:"food",price:1.99,inStock:12},{name:"Bread",category:"food",price:2.39,inStock:90}],activeCategory:"food"},h={activate:function(e){return{type:"ACTIVATE",payload:e}}},v=Object(i.b)((function(e){return{categories:e.categories}}),h)((function(e){return r.a.createElement("section",null,r.a.createElement("ul",null,e.categories.categories.map((function(t){return r.a.createElement("li",{onClick:function(){return e.activate(t.name)},key:t.name}," ",t.displayName," ")}))))}));var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"OUR STORE")))};var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{id:"footer"},r.a.createElement("h2",null,"\xa9 codeFellows")))},C=a(68);var T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement(k,null),r.a.createElement(v,null),r.a.createElement(y,null),r.a.createElement(S,null)))},b=a(12),A=a(25),O=Object(b.combineReducers)({categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ACTIVATE":return e.activeCategory=n,{categories:e.categories,products:e.products,activeCategory:e.activeCategory};default:return e}}}),x=Object(b.createStore)(O,Object(A.composeWithDevTools)());function j(){return r.a.createElement(i.a,{store:x},r.a.createElement(T,null))}o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.ed19d42b.chunk.js.map