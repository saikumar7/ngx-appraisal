webpackJsonp([16],{ui5n:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var u=t("LMZF"),e=t("xrDH"),o=[{desc:"His/her original Birth Certificate",optionName:"birthCertificate",inputName:"noBirthCertificate"},{desc:"His/her original Social Security Card",optionName:"socialSecurity",inputName:"noSocialSecurity"},{desc:"Medicaid Card",optionName:"medicaidCard",inputName:"noMedicaidCard"},{desc:"His/her original State I.D. or Drivers License",optionName:"driversLicense",inputName:"noDriversLicense"},{desc:"Court Orders",optionName:"courtOrders",inputName:"noCourtOrders"},{desc:"Education Documents (report card etc.)",optionName:"educationDocuments",inputName:"noEducationDocuments"},{desc:"Original Death Certificates (if parents are deceased)",optionName:"deathCertificates",inputName:"noDeathCertificates"},{desc:"Original Documentation of citizenship or naturalization if applicable.",optionName:"citizenshipDocuments",inputName:"noCitizenshipDocuments"},{desc:"Medical/immunization records",optionName:"medicalRecords",inputName:"noMedicalRecords"},{desc:"Religious documents and Information",optionName:"religiousDocuments",inputName:"noReligiousDocuments"},{desc:"List of known relatives with relationship and contact information.",optionName:"relativesInformation",inputName:"noRelativesInformation"},{desc:"Previous placement information",optionName:"previousPlacementInfo",inputName:"noPreviousPlacementInfo"},{desc:"Passport (if applicable)",optionName:"passport",inputName:"noPassport"},{desc:"Photographs (if applicable)",optionName:"photographs",inputName:"noPhotographs"},{desc:"Resource Guide",optionName:"resourceGuide",inputName:"noResourceGuide"}],a=t("5xYa"),i=t("0nO6"),c=function(){function n(n,l){this.fb=n,this.util=l,this.documentsList=o}return n.prototype.ngOnInit=function(){this.initFormConfig(),this.initDocumentsForm()},n.prototype.initDocumentsForm=function(){var n={},l=this.documentsList.slice();e.each(l,function(l){n[l.inputName]=new i.g("",[]),n[l.optionName]=new i.g(!0,[])}),this.documentsForm=this.fb.group(n)},n.prototype.onNext=function(n){n.form&&n.form.valid&&console.log(n.form.value),this.util.navigate("/review")},n.prototype.onPrevious=function(n){this.util.navigate("/actions")},n.prototype.initFormConfig=function(){this.config={nextBtn:!0,prevBtn:!0,nextBtnLabel:"Review & Sign",previousBtnLabel:"Goals and Actions"}},n.prototype.onToggle=function(n,l){if(n&&l){var t=this.documentsForm.get(l);n.checked?t.setValidators([i.w.required]):t.clearValidators(),t.updateValueAndValidity()}},n}(),s=function(){},r=t("911F"),d=t("k7z1"),_=t("l6RC"),g=t("Un6q"),p=t("V8+5"),m=t("8Xfy"),b=t("ka8K"),f=t("j5BN"),h=u._4({encapsulation:2,styles:[".mat-button-toggle-group,.mat-button-toggle-standalone{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;display:inline-flex;flex-direction:row;border-radius:2px;cursor:pointer;white-space:nowrap;overflow:hidden}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle-disabled .mat-button-toggle-label-content{cursor:default}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay,.mat-button-toggle.cdk-program-focused .mat-button-toggle-focus-overlay{opacity:1}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;cursor:pointer}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}"],data:{}});function v(n){return u._29(2,[u._25(402653184,1,{_inputElement:0}),(n()(),u._6(1,0,null,null,3,"label",[["class","mat-button-toggle-label"]],[[1,"for",0]],null,null,null,null)),(n()(),u._6(2,0,[[1,0],["input",1]],null,0,"input",[["class","mat-button-toggle-input cdk-visually-hidden"]],[[8,"type",0],[8,"id",0],[8,"checked",0],[8,"disabled",0],[1,"name",0],[1,"aria-label",0],[1,"aria-labelledby",0]],[[null,"change"],[null,"click"]],function(n,l,t){var u=!0,e=n.component;return"change"===l&&(u=!1!==e._onInputChange(t)&&u),"click"===l&&(u=!1!==e._onInputClick(t)&&u),u},null,null)),(n()(),u._6(3,0,null,null,1,"div",[["class","mat-button-toggle-label-content"]],null,null,null,null,null)),u._17(null,0),(n()(),u._6(5,0,null,null,0,"div",[["class","mat-button-toggle-focus-overlay"]],null,null,null,null,null))],null,function(n,l){var t=l.component;n(l,1,0,t.inputId),n(l,2,0,t._type,t.inputId,t.checked,t.disabled||null,t.name,t.ariaLabel,t.ariaLabelledby)})}var y=t("VNZS"),C=t("mu6E"),N=t("UHIZ"),x=t("dN2u"),k=t("WuCj"),D=u._4({encapsulation:0,styles:[[".mdcps-fixed-col[_ngcontent-%COMP%]{width:50%}.mdcps-fixed-col[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-radius:0}.mdcps-fixed-col[_ngcontent-%COMP%]   .badge.mdcps-badge[_ngcontent-%COMP%]{padding:5px 10px;margin-right:25px}"]],data:{}});function P(n){return u._29(0,[(n()(),u._6(0,0,null,null,8,"div",[["class","mdcps-docs-reason"]],null,null,null,null,null)),(n()(),u._27(-1,null,["\n                  Please explain:\n                  "])),(n()(),u._6(2,0,null,null,5,"input",[["class","form-control form-control-sm"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0;return"input"===l&&(e=!1!==u._18(n,3)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u._18(n,3).onTouched()&&e),"compositionstart"===l&&(e=!1!==u._18(n,3)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u._18(n,3)._compositionEnd(t.target.value)&&e),e},null,null)),u._5(3,16384,null,0,i.e,[u.D,u.k,[2,i.a]],null,null),u._23(1024,null,i.n,function(n){return[n]},[i.e]),u._5(5,671744,null,0,i.h,[[3,i.d],[8,null],[8,null],[2,i.n]],{name:[0,"name"]},null),u._23(2048,null,i.o,null,[i.h]),u._5(7,16384,null,0,i.p,[i.o],null,null),(n()(),u._27(-1,null,["\n              "]))],function(n,l){n(l,5,0,l.parent.context.$implicit.inputName)},function(n,l){n(l,2,0,u._18(l,7).ngClassUntouched,u._18(l,7).ngClassTouched,u._18(l,7).ngClassPristine,u._18(l,7).ngClassDirty,u._18(l,7).ngClassValid,u._18(l,7).ngClassInvalid,u._18(l,7).ngClassPending)})}function w(n){return u._29(0,[(n()(),u._6(0,0,null,null,28,"tr",[],null,null,null,null,null)),(n()(),u._27(-1,null,["\n            "])),(n()(),u._6(2,0,null,null,1,"td",[["class","mdcps-fixed-col"]],null,null,null,null,null)),(n()(),u._27(3,null,["",""])),(n()(),u._27(-1,null,["\n            "])),(n()(),u._6(5,0,null,null,22,"td",[["class","mdcps-fixed-col"]],null,null,null,null,null)),(n()(),u._27(-1,null,["\n              "])),(n()(),u._27(-1,null,["\n              "])),(n()(),u._6(8,0,null,null,15,"mat-button-toggle-group",[["class","mdcps-toggle-group mat-button-toggle-group"],["role","radiogroup"]],[[2,"mat-button-toggle-vertical",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"]],function(n,l,t){var u=!0;return"change"===l&&(u=!1!==n.component.onToggle(t,n.context.$implicit.inputName)&&u),u},null,null)),u._5(9,16384,null,1,d.b,[u.h],null,{change:"change"}),u._25(603979776,1,{_buttonToggles:1}),u._23(1024,null,i.n,function(n){return[n]},[d.b]),u._5(12,671744,null,0,i.h,[[3,i.d],[8,null],[8,null],[2,i.n]],{name:[0,"name"]},null),u._23(2048,null,i.o,null,[i.h]),u._5(14,16384,null,0,i.p,[i.o],null,null),(n()(),u._27(-1,null,["\n                "])),(n()(),u._6(16,0,null,null,2,"mat-button-toggle",[["class","mat-button-toggle"]],[[2,"mat-button-toggle-standalone",null],[2,"mat-button-toggle-checked",null],[2,"mat-button-toggle-disabled",null],[1,"id",0]],null,null,v,h)),u._5(17,245760,[[1,4]],0,d.a,[[2,d.b],[2,d.c],u.h,b.c,u.k,m.g],{value:[0,"value"]},null),(n()(),u._27(-1,0,["Yes"])),(n()(),u._27(-1,null,["\n                "])),(n()(),u._6(20,0,null,null,2,"mat-button-toggle",[["class","mat-button-toggle"]],[[2,"mat-button-toggle-standalone",null],[2,"mat-button-toggle-checked",null],[2,"mat-button-toggle-disabled",null],[1,"id",0]],null,null,v,h)),u._5(21,245760,[[1,4]],0,d.a,[[2,d.b],[2,d.c],u.h,b.c,u.k,m.g],{value:[0,"value"]},null),(n()(),u._27(-1,0,["No"])),(n()(),u._27(-1,null,["\n              "])),(n()(),u._27(-1,null,["\n              "])),(n()(),u._1(16777216,null,null,1,null,P)),u._5(26,16384,null,0,g.k,[u.P,u.M],{ngIf:[0,"ngIf"]},null),(n()(),u._27(-1,null,["\n            "])),(n()(),u._27(-1,null,["\n          "]))],function(n,l){var t=l.component;n(l,12,0,l.context.$implicit.optionName),n(l,17,0,!0),n(l,21,0,!1);var u=null;n(l,26,0,!(null!=t.documentsForm&&null!=(u=t.documentsForm.get(l.context.$implicit.optionName))&&u.value))},function(n,l){n(l,3,0,l.context.$implicit.desc),n(l,8,0,u._18(l,9).vertical,u._18(l,14).ngClassUntouched,u._18(l,14).ngClassTouched,u._18(l,14).ngClassPristine,u._18(l,14).ngClassDirty,u._18(l,14).ngClassValid,u._18(l,14).ngClassInvalid,u._18(l,14).ngClassPending),n(l,16,0,!u._18(l,17).buttonToggleGroup&&!u._18(l,17).buttonToggleGroupMultiple,u._18(l,17).checked,u._18(l,17).disabled,u._18(l,17).id),n(l,20,0,!u._18(l,21).buttonToggleGroup&&!u._18(l,21).buttonToggleGroupMultiple,u._18(l,21).checked,u._18(l,21).disabled,u._18(l,21).id)})}function F(n){return u._29(0,[(n()(),u._6(0,0,null,null,32,"mdcps-base-form",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"next"],[null,"previous"],[null,"submit"],[null,"reset"]],function(n,l,t){var e=!0,o=n.component;return"submit"===l&&(e=!1!==u._18(n,1).onSubmit(t)&&e),"reset"===l&&(e=!1!==u._18(n,1).onReset()&&e),"next"===l&&(e=!1!==o.onNext(t)&&e),"previous"===l&&(e=!1!==o.onPrevious(t)&&e),e},y.b,y.a)),u._5(1,540672,null,0,i.j,[[8,null],[8,null]],{form:[0,"form"]},null),u._23(2048,null,i.d,null,[i.j]),u._5(3,16384,null,0,i.q,[i.d],null,null),u._5(4,114688,null,0,C.a,[N.l,x.a,k.a],{baseFormGroup:[0,"baseFormGroup"],config:[1,"config"]},{next:"next",previous:"previous"}),(n()(),u._27(-1,0,["\n  "])),(n()(),u._6(6,0,null,0,25,"div",[["class","row"]],null,null,null,null,null)),(n()(),u._27(-1,null,["\n    "])),(n()(),u._6(8,0,null,null,22,"div",[["class","col-12"]],null,null,null,null,null)),(n()(),u._27(-1,null,["\n      "])),(n()(),u._6(10,0,null,null,19,"table",[["class","table table-bordered table-striped"]],null,null,null,null,null)),(n()(),u._27(-1,null,["\n        "])),(n()(),u._6(12,0,null,null,10,"thead",[],null,null,null,null,null)),(n()(),u._27(-1,null,["\n          "])),(n()(),u._6(14,0,null,null,7,"tr",[],null,null,null,null,null)),(n()(),u._27(-1,null,["\n            "])),(n()(),u._6(16,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u._27(-1,null,["Received Documents"])),(n()(),u._27(-1,null,["\n            "])),(n()(),u._6(19,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u._27(-1,null,["Status"])),(n()(),u._27(-1,null,["\n          "])),(n()(),u._27(-1,null,["\n        "])),(n()(),u._27(-1,null,["\n        "])),(n()(),u._6(24,0,null,null,4,"tbody",[],null,null,null,null,null)),(n()(),u._27(-1,null,["\n          "])),(n()(),u._1(16777216,null,null,1,null,w)),u._5(27,802816,null,0,g.j,[u.P,u.M,u.r],{ngForOf:[0,"ngForOf"]},null),(n()(),u._27(-1,null,["\n        "])),(n()(),u._27(-1,null,["\n      "])),(n()(),u._27(-1,null,["\n    "])),(n()(),u._27(-1,null,["\n  "])),(n()(),u._27(-1,0,["\n"]))],function(n,l){var t=l.component;n(l,1,0,t.documentsForm),n(l,4,0,t.documentsForm,t.config),n(l,27,0,t.documentsList)},function(n,l){n(l,0,0,u._18(l,3).ngClassUntouched,u._18(l,3).ngClassTouched,u._18(l,3).ngClassPristine,u._18(l,3).ngClassDirty,u._18(l,3).ngClassValid,u._18(l,3).ngClassInvalid,u._18(l,3).ngClassPending)})}var I=u._2("mdcps-ya-documents",c,function(n){return u._29(0,[(n()(),u._6(0,0,null,null,1,"mdcps-ya-documents",[],null,null,null,F,D)),u._5(1,114688,null,0,c,[i.f,a.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),O=t("vgc3"),j=t("9iV4"),M=t("RyBE"),R=t("oXAn"),L=t("4jwp"),S=t("OFGE"),G=t("R1vt"),T=t("gOiy"),A=t("8on4"),V=t("ppgG"),z=t("3Czw"),B=t("jk5D"),E=t("i0AX"),H=t("zQfh"),U=t("6pLl"),Y=t("Ioj9"),Z=t("ki1d"),X=t("dYU3"),$=t("CZgk"),q=t("9Rbf"),J=t("Lpd/"),Q=t("SlD5"),K=t("c4k3"),W=t("697t"),nn=t("ghl+"),ln=t("e0rv"),tn=t("YXpL"),un=t("nYcr"),en=t("0cZJ"),on=t("FhOc"),an=t("RXNa"),cn=t("3uJi"),sn=t("0bRs"),rn=t("SQSO");t.d(l,"YaDocumentsModuleNgFactory",function(){return dn});var dn=u._3(s,[],function(n){return u._14([u._15(512,u.j,u.Z,[[8,[r.a,I]],[3,u.j],u.w]),u._15(4608,i.A,i.A,[]),u._15(4608,g.m,g.l,[u.t,[2,g.u]]),u._15(4608,i.f,i.f,[]),u._15(6144,_.b,null,[g.d]),u._15(4608,_.c,_.c,[[2,_.b]]),u._15(5120,O.d,O.a,[[3,O.d],[2,j.c],M.c,[2,g.d]]),u._15(5120,R.b,R.a,[[3,R.b]]),u._15(4608,p.a,p.a,[]),u._15(4608,m.i,m.i,[p.a]),u._15(4608,m.h,m.h,[m.i,u.y,g.d]),u._15(136192,m.d,m.b,[[3,m.d],g.d]),u._15(5120,m.l,m.k,[[3,m.l],[2,m.j],g.d]),u._15(5120,m.g,m.e,[[3,m.g],u.y,p.a]),u._15(5120,L.d,L.b,[[3,L.d],u.y,p.a]),u._15(5120,L.g,L.f,[[3,L.g],p.a,u.y]),u._15(4608,S.g,S.g,[L.d,L.g,u.y,g.d]),u._15(5120,S.c,S.h,[[3,S.c],g.d]),u._15(4608,S.f,S.f,[L.g,g.d]),u._15(5120,S.d,S.k,[[3,S.d],g.d]),u._15(4608,S.a,S.a,[S.g,S.c,u.j,S.f,S.d,u.g,u.q,u.y,g.d]),u._15(5120,S.i,S.j,[S.a]),u._15(5120,G.b,G.d,[S.a]),u._15(5120,b.c,b.d,[[3,b.c]]),u._15(4608,f.d,f.d,[]),u._15(5120,T.a,T.b,[S.a]),u._15(4608,A.a,A.a,[]),u._15(4608,V.a,V.a,[]),u._15(4608,z.d,z.d,[p.a]),u._15(135680,z.a,z.a,[z.d,u.y]),u._15(5120,B.b,B.c,[S.a]),u._15(5120,E.b,E.a,[[3,E.b]]),u._15(4608,M.f,f.e,[[2,f.i],[2,f.m]]),u._15(5120,H.a,H.c,[]),u._15(4608,H.b,H.b,[H.a]),u._15(4608,H.e,H.e,[u.y,u.A,g.d]),u._15(4608,H.f,H.f,[H.b,H.e]),u._15(5120,H.i,H.h,[[3,H.i],H.e,H.b]),u._15(6144,H.n,null,[g.d]),u._15(4608,H.o,H.o,[[2,H.n]]),u._15(4608,H.k,H.k,[]),u._15(4608,H.l,H.l,[[2,H.k],[2,H.j],u.A]),u._15(5120,u.b,function(n,l){return[H.m(n,l)]},[g.d,u.A]),u._15(512,i.x,i.x,[]),u._15(512,i.l,i.l,[]),u._15(512,g.c,g.c,[]),u._15(512,i.u,i.u,[]),u._15(512,U.a,U.a,[]),u._15(512,_.a,_.a,[]),u._15(256,f.f,!0,[]),u._15(512,f.m,f.m,[[2,f.f]]),u._15(512,O.c,O.c,[]),u._15(512,Y.a,Y.a,[]),u._15(512,R.c,R.c,[]),u._15(512,f.o,f.o,[]),u._15(512,p.b,p.b,[]),u._15(512,f.x,f.x,[]),u._15(512,f.v,f.v,[]),u._15(512,Z.b,Z.b,[]),u._15(512,X.d,X.d,[]),u._15(512,m.a,m.a,[]),u._15(512,$.g,$.g,[]),u._15(512,L.c,L.c,[]),u._15(512,S.e,S.e,[]),u._15(512,G.c,G.c,[]),u._15(512,q.a,q.a,[]),u._15(512,J.a,J.a,[]),u._15(512,Q.a,Q.a,[]),u._15(512,K.k,K.k,[]),u._15(512,W.a,W.a,[]),u._15(512,nn.c,nn.c,[]),u._15(512,f.t,f.t,[]),u._15(512,T.c,T.c,[]),u._15(512,ln.h,ln.h,[]),u._15(512,tn.b,tn.b,[]),u._15(512,un.d,un.d,[]),u._15(512,A.b,A.b,[]),u._15(512,V.b,V.b,[]),u._15(512,en.a,en.a,[]),u._15(512,z.c,z.c,[]),u._15(512,B.d,B.d,[]),u._15(512,E.c,E.c,[]),u._15(512,on.c,on.c,[]),u._15(512,an.a,an.a,[]),u._15(512,cn.a,cn.a,[]),u._15(512,d.d,d.d,[]),u._15(512,sn.a,sn.a,[]),u._15(512,H.g,H.g,[]),u._15(512,H.p,H.p,[]),u._15(512,H.d,H.d,[[2,H.j],u.A]),u._15(512,rn.a,rn.a,[]),u._15(512,N.m,N.m,[[2,N.r],[2,N.l]]),u._15(512,s,s,[]),u._15(256,G.a,{overlapTrigger:!0,xPosition:"after",yPosition:"below"},[]),u._15(256,ln.a,!1,[]),u._15(256,B.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),u._15(1024,N.j,function(){return[[{path:"",component:c}]]},[])])})}});