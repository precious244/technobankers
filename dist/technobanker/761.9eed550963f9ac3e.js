"use strict";(self.webpackChunktechnobanker=self.webpackChunktechnobanker||[]).push([[761],{6761:(x,c,a)=>{a.d(c,{Z:()=>U});var l=a(8996),t=a(1571),s=a(646),f=a(7185),d=a(7802),h=a(6895),n=a(433),u=a(3447);function m(e,r){if(1&e&&(t.TgZ(0,"span",17),t._uU(1),t.qZA()),2&e){const i=r.$implicit;t.xp6(1),t.hij(" ",i.bookAuthor,",")}}function b(e,r){if(1&e&&(t.TgZ(0,"p",105),t._uU(1),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Oqu(i.book.seriesName)}}function _(e,r){if(1&e&&(t.TgZ(0,"span",106),t._uU(1),t.qZA()),2&e){const i=r.$implicit;t.xp6(1),t.hij(" ",i.keyword,", ")}}function v(e,r){if(1&e&&(t.TgZ(0,"p",107),t._uU(1),t.qZA()),2&e){const i=r.$implicit;t.xp6(1),t.hij("Relevant for roles : ",i.roles,"")}}function k(e,r){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const i=r.$implicit;t.xp6(1),t.hij(" ",i.bookAuthor,",")}}function w(e,r){1&e&&(t.TgZ(0,"div",109)(1,"span",110),t._uU(2,"A field is required"),t.qZA()())}function Z(e,r){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,w,3,0,"div",108),t.qZA()),2&e){const i=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!i.detailModel.formGroupEmail.controls.clientName.valid)}}function O(e,r){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,Z,2,1,"div",49),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.f.clientName.errors)}}function T(e,r){1&e&&(t.TgZ(0,"div",109)(1,"span",110),t._uU(2,"A valid email is required"),t.qZA()())}function C(e,r){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,T,3,0,"div",108),t.qZA()),2&e){const i=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!i.detailModel.formGroupEmail.controls.clientEmail.valid)}}function M(e,r){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,C,2,1,"div",49),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.f.clientEmail.errors)}}function y(e,r){1&e&&t._UZ(0,"img",111)}function A(e,r){if(1&e&&(t.TgZ(0,"div",112)(1,"div",113)(2,"div",114),t._UZ(3,"img",115),t.qZA()()()),2&e){const i=r.$implicit;t.xp6(3),t.MGl("src","http://54.251.83.205/technobanker/backend/bookPreview/",i.imagePreview,"",t.LSH)}}function P(e,r){1&e&&(t.TgZ(0,"div",116),t._UZ(1,"button",117),t.qZA())}let U=(()=>{class e{constructor(i,o,g,p){this.router=i,this.activatedRoute=o,this.toastr=g,this.bookService=p,this.detailModel=new l.n,this.submitted=!1,this.book={},this.previewsOfBook={},this.isLoading=!1,this.authorOfBook={},this.toggleLoading=()=>{this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},3e3)}}ngOnInit(){this.activatedRoute.paramMap.subscribe(i=>{this.bookService.getDetailBook({bookId:i.params.id}).subscribe(p=>{this.detailModel.singleBook=p.data,this.book=this.detailModel.singleBook,this.detailModel.authorOfBook=p.data.authorOfBook,this.detailModel.roles=p.data.rolesOfBook,this.detailModel.keywordOfBook=p.data.keywordOfBook,this.detailModel.previewsOfBook=p.data.previewsOfBook,this.previewsOfBook=this.detailModel.previewsOfBook})})}submitEmail(){this.activatedRoute.paramMap.subscribe(i=>{this.detailModel.formGroupEmail.controls.bookId.setValue(i.params.id),this.bookService.submitEmail(this.detailModel.formGroupEmail.value).subscribe(p=>{this.bookService.submitEmail(p.data),this.submitted=!0,this.toastr.success("Email successfully send!","Success")},p=>{this.router.navigate(["/pdf-not-found"])})})}goToLibrary(){this.router.navigate(["our-library"])}get f(){return this.detailModel.formGroupEmail.controls}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(s.F0),t.Y36(s.gz),t.Y36(f._W),t.Y36(d.Z))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-detail-book"]],decls:166,vars:25,consts:[[1,"background-color","sticky","top-0",2,"z-index","9999999"],[1,"flex","flex-wrap","items-center","justify-between","mx-auto","px-4","font-weight"],["href","",1,"flex","items-center"],["src","..//../../../assets/icon-technobanker.png","alt","Flowbite Logo",1,"h-8","mr-3"],[1,"self-center","whitespace-nowrap","text-white"],[1,"flex","md:order-2"],["id","navbar-sticky",1,"items-center","justify-between","hidden","w-full","md:flex","md:w-auto","md:order-1"],[1,"flex","flex-col","p-4","md:p-0","font-medium","md:flex-row","md:space-x-8","md:mt-0","md:border-0","dark:bg-gray-800","md:dark:bg-gray-900","dark:border-gray-700"],["href","","aria-current","page",1,"block","py-2","pl-3","pr-4","text-white","font-weight"],["routerLink","our-library","href","#",1,"block","py-2","pl-3","pr-4","text-white","font-weight",3,"routerLinkActive"],["id","home","loading","lazy",1,"banner1","height100p"],[1,"pt-5","pl-20"],["type","button",1,"text-white"],["id","home","loading","lazy",1,"grid","grid-cols-2","gap-4"],[1,"ml-20","pl-10","mt-10","image-home1",3,"src"],[1,"position-section1"],[1,"text-color-yellow","text-status"],[1,"text-white","text-author"],["class","text-white text-author",4,"ngFor","ngForOf"],[1,"mt-20","text-color-yellow","home-text-section-2","position-title-book"],[1,"flex","position-info-book"],[1,"text-volume","text-center","pt-1","bg-slate-600","text-white"],["class","ml-3 bg-slate-600 text-series text-center pt-1 text-white",4,"ngIf"],[1,"sub-text-section-2","text-white","position-text-desc"],[1,"text-white","position-text-key"],["class","text-white",4,"ngFor","ngForOf"],[1,"flex","background-color-section-2"],[1,"text-title-section2","text-white"],[1,"text-p-section2","text-white","text-center"],["class","text-p2-section2 text-white text-center",4,"ngFor","ngForOf"],[1,"grid","grid-cols-2","mb-20"],[1,"col-start-1","col-end-2"],[1,"text-color-gray","text-title-section3"],[1,"text-color-gray","mt-10","ml-20","grid","grid-cols-2"],[1,"mt-2"],[4,"ngFor","ngForOf"],[1,"mt-5","ml-20","text-color-gray","paragraph"],[1,"mt-5"],["data-modal-target","defaultModal","data-modal-toggle","defaultModal","type","button",1,"mt-10","text-blue-700","hover:text-white","border","border-blue-700","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","mr-2","mb-2","dark:border-blue-500","dark:text-blue-500","dark:hover:text-white","dark:hover:bg-blue-500","dark:focus:ring-blue-800"],["data-modal-target","citationModal","data-modal-toggle","citationModal","type","button",1,"mt-10","text-blue-700","hover:text-white","border","border-blue-700","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","mr-2","mb-2","dark:border-blue-500","dark:text-blue-500","dark:hover:text-white","dark:hover:bg-blue-500","dark:focus:ring-blue-800"],[1,"mt-5","text-version"],["type","button",1,"mt-5","items-center","py-2.5","px-5","text-base","font-medium","text-center","text-white","rounded-lg","focus:ring-4","focus:ring-blue-300","dark:focus:ring-blue-900","button"],[1,"mt-10","ml-20","box"],[1,"text-start-reading","mt-10"],[1,"mt-5","text-get-started","text-color-gray"],["src","../../../../assets/image-logo.png",1,"ml-20","pl-20","mt-5"],[3,"formGroup"],[1,"form-group"],["formControlName","clientName","type","text","placeholder","Your name",1,"input-text","mt-5","ml-7"],[4,"ngIf"],["formControlName","clientEmail","type","text","placeholder","example@gmail.com","required","",1,"input-text","mt-5","ml-7"],[1,"flex","mt-5"],[1,"position-flag","pl-8","pt-4"],["src","../../../../assets/flag.png",1,""],[1,"pt-3","pl-3"],["formControlName","clientNumber","type","text","placeholder","Phone (optional)",1,"input-text2","ml-2"],["type","button",1,"mt-5","items-center","text-base","font-medium","text-white","rounded-lg","focus:ring-4","focus:ring-blue-300","dark:focus:ring-blue-900","button2",3,"click"],[1,"flex","pl-20","pl-20","ml-20"],["style","width : 25px","src","../../../../assets/loading.gif",4,"ngIf"],[1,""],["id","defaultModal","tabindex","-1","aria-hidden","true",1,"fixed","top-0","left-0","right-0","z-50","hidden","w-full","p-4","overflow-x-hidden","overflow-y-auto","md:inset-0","h-[calc(100%-1rem)]","max-h-full"],[1,"relative","modal-preview"],[1,"relative","bg-white","rounded-lg","shadow","dark:bg-gray-700"],[1,"flex","items-start","justify-between","p-4","border-b","rounded-t","dark:border-gray-600"],[1,"text-center","text-xl","text-color-gray","font-weight-700","dark:text-white"],["type","button","data-modal-hide","defaultModal",1,"text-gray-400","bg-transparent","hover:bg-gray-200","hover:text-gray-900","rounded-lg","text-sm","p-1.5","ml-auto","inline-flex","items-center","dark:hover:bg-gray-600","dark:hover:text-white"],["aria-hidden","true","fill","currentColor","viewBox","0 0 20 20","xmlns","http://www.w3.org/2000/svg",1,"w-5","h-5"],["fill-rule","evenodd","d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule","evenodd"],[1,"sr-only"],["id","default-carousel","data-carousel","static",1,"relative","pl-20","pt-10","pb-10","pr-20","space-y-4"],[1,"overflow-hidden","relative","rounded-lg","lg:h-64","xl:h-80","2xl:h-100","preview-book"],["class","hidden","data-carousel-item","",4,"ngFor","ngForOf"],[1,"flex","absolute","rounded-lg","h-8","w-44","bottom-12","items-center","left-1/2","z-30","space-x-3","-translate-x-1/2"],["class","position-button-preview",4,"ngFor","ngForOf"],["id","citationModal","tabindex","-1","aria-hidden","true",1,"fixed","top-0","left-0","right-0","z-50","hidden","w-full","p-4","overflow-x-hidden","overflow-y-auto","md:inset-0","h-[calc(100%-1rem)]","max-h-full"],[1,"relative","w-full","max-w-2xl","max-h-full"],[1,"flex","items-start","justify-between","p-4","dark:border-gray-600"],[1,"text-xl","font-semibold","text-color-gray","font-weight-700","dark:text-white"],["type","button","data-modal-hide","citationModal",1,"text-gray-400","bg-transparent","hover:bg-gray-200","hover:text-gray-900","rounded-lg","text-sm","p-1.5","ml-auto","inline-flex","items-center","dark:hover:bg-gray-600","dark:hover:text-white"],[1,"space-y-6","p-5"],[1,"rounded-lg","border","border-gray-300","p-5","pt-5","pl-5"],[1,"text-citation","rounded-lg","focus:border-black","text-color-gray2","dark:text-gray-400",3,"value"],["inputTarget",""],[1,"citation-button","p-5"],["type","button",1,"flex","rounded-lg","border","border-gray-700","p-5","items-center","px-5","py-2","hover:bg-gray-100","dark:hover:bg-gray-600","hover:text-gray-900","dark:hover:text-white",3,"ngxClipboard"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg",1,"w-4","h-4","mr-2"],["d","M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"],["d","M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"],[1,"text-sm","font-medium"],[1,"footer","grid","grid-cols-3"],[1,"col-start-1","col-end-2","ml-20"],["src","../../../../assets/Footer.png"],[1,"mb-10","text-white","text2-title-footer"],[1,"mt-5","text-white","subtext2-footer"],[1,"position-text-footer"],[1,"text-white","text-title-footer"],[1,"mt-5","text-white","subtext-footer"],["src","../../../../assets/phone-number.png"],["src","../../../../assets/Email.png"],["src","../../../../assets/date-time.png"],[1,"footer2","grid","grid-cols-3"],["src","../../../../assets/Footer2.png",1,"img-footer2"],[1,"position-h1","text-white"],[1,"font-weight-footer"],[1,"position2-h1","text-white"],[1,"ml-3","bg-slate-600","text-series","text-center","pt-1","text-white"],[1,"text-white"],[1,"text-p2-section2","text-white","text-center"],["class","pl-10 text-sm",4,"ngIf"],[1,"pl-10","text-sm"],[2,"color","#EB5757"],["src","../../../../assets/loading.gif",2,"width","25px"],["data-carousel-item","",1,"hidden"],[1,"duration-700","ease-in-out"],[1,"preview-book"],["alt","Book Preview",1,"absolute","top-1/2","left-1/2","w-full","-translate-x-1/2","-translate-y-1/2",3,"src"],[1,"position-button-preview"],["type","button","aria-current","false","aria-label","Slide 1","data-carousel-slide-to","item",1,"w-3","h-3","rounded-full"]],template:function(i,o){if(1&i&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),t._UZ(3,"img",3),t.TgZ(4,"span",4),t._uU(5,"Technobankers"),t.qZA()(),t._UZ(6,"div",5),t.TgZ(7,"div",6)(8,"ul",7)(9,"li")(10,"a",8),t._uU(11,"Home"),t.qZA()(),t.TgZ(12,"li")(13,"a",9),t._uU(14,"Our Library"),t.qZA()()()()()(),t.TgZ(15,"div",10)(16,"div",11)(17,"button",12),t._uU(18," Home / "),t.qZA(),t.TgZ(19,"button",12),t._uU(20," Our Library / "),t.qZA(),t.TgZ(21,"button",12),t._uU(22," Detail Book"),t.qZA()(),t.TgZ(23,"div",13),t._UZ(24,"img",14),t.TgZ(25,"div",15)(26,"p",16),t._uU(27,"NEW RELEASE"),t.qZA(),t.TgZ(28,"p",17),t._uU(29,"By "),t.YNc(30,m,2,1,"span",18),t.qZA(),t.TgZ(31,"h1",19),t._uU(32),t.qZA(),t.TgZ(33,"div",20)(34,"p",21),t._uU(35),t.qZA(),t.YNc(36,b,2,1,"p",22),t.qZA(),t.TgZ(37,"p",23),t._uU(38),t.qZA(),t.TgZ(39,"p",24),t._uU(40," Keywords : "),t.YNc(41,_,2,1,"span",25),t.qZA()()()(),t.TgZ(42,"div",26)(43,"h1",27),t._uU(44,"Overview"),t.qZA(),t.TgZ(45,"p",28),t._uU(46),t.qZA(),t.YNc(47,v,2,1,"p",29),t.qZA(),t.TgZ(48,"div",30)(49,"div",31)(50,"h2",32),t._uU(51,"About This Edition"),t.qZA(),t.TgZ(52,"div",33)(53,"p",34),t._uU(54),t.qZA(),t.TgZ(55,"p",34),t._uU(56),t.qZA(),t.TgZ(57,"p",34),t._uU(58),t.qZA(),t.TgZ(59,"p",34),t._uU(60),t.qZA(),t.TgZ(61,"p",34),t._uU(62),t.qZA(),t.TgZ(63,"p",34),t._uU(64,"Author "),t.YNc(65,k,2,1,"span",35),t.qZA()(),t.TgZ(66,"div",36)(67,"h1",34),t._uU(68,"Brief Description"),t.qZA(),t.TgZ(69,"p",37),t._uU(70),t.qZA(),t.TgZ(71,"button",38),t._uU(72," Preview "),t.qZA(),t.TgZ(73,"button",39),t._uU(74," Create Citation "),t.qZA(),t.TgZ(75,"h1",40),t._uU(76,"Available in Full Version"),t.qZA(),t.TgZ(77,"button",41),t._uU(78," Buy Book Now "),t.qZA()()(),t.TgZ(79,"div",42)(80,"h2",43),t._uU(81,"Start Reading Now"),t.qZA(),t.TgZ(82,"h1",44),t._uU(83,"Get 1 FREE Chapter"),t.qZA(),t._UZ(84,"img",45),t.TgZ(85,"form",46)(86,"div",47),t._UZ(87,"input",48),t.YNc(88,O,2,1,"div",49),t.qZA(),t.TgZ(89,"div",47),t._UZ(90,"input",50),t.YNc(91,M,2,1,"div",49),t.qZA(),t.TgZ(92,"div",51)(93,"div",52),t._UZ(94,"img",53),t.qZA(),t.TgZ(95,"p",54),t._uU(96,"+62 "),t.qZA(),t._UZ(97,"input",55),t.qZA(),t.TgZ(98,"button",56),t.NdJ("click",function(){return o.toggleLoading()})("click",function(){return o.submitEmail()}),t.TgZ(99,"div",57),t.YNc(100,y,1,0,"img",58),t.TgZ(101,"span",59),t._uU(102,"Send me free chapter"),t.qZA()()()()()(),t.TgZ(103,"div",60)(104,"div",61)(105,"div",62)(106,"div",63)(107,"h3",64),t._uU(108," Preview "),t.qZA(),t.TgZ(109,"button",65),t.O4$(),t.TgZ(110,"svg",66),t._UZ(111,"path",67),t.qZA(),t.kcU(),t.TgZ(112,"span",68),t._uU(113,"Close modal"),t.qZA()()(),t.TgZ(114,"div",69)(115,"div",70),t.YNc(116,A,4,1,"div",71),t.qZA(),t.TgZ(117,"div",72),t.YNc(118,P,2,0,"div",73),t.qZA()()()()(),t.TgZ(119,"div",74)(120,"div",75)(121,"div",62)(122,"div",76)(123,"h3",77),t._uU(124," Citation "),t.qZA(),t.TgZ(125,"button",78),t.O4$(),t.TgZ(126,"svg",66),t._UZ(127,"path",67),t.qZA(),t.kcU(),t.TgZ(128,"span",68),t._uU(129,"Close modal"),t.qZA()()(),t.TgZ(130,"div",79)(131,"div",80),t._UZ(132,"textarea",81,82),t.qZA()(),t.TgZ(134,"div",83)(135,"button",84),t.O4$(),t.TgZ(136,"svg",85),t._UZ(137,"path",86)(138,"path",87),t.qZA(),t.kcU(),t.TgZ(139,"span",88),t._uU(140,"Copy"),t.qZA()()()()()(),t.TgZ(141,"footer")(142,"div",89)(143,"div",90)(144,"div"),t._UZ(145,"img",91),t.TgZ(146,"h1",92),t._uU(147,"ABOUT US"),t.qZA(),t.TgZ(148,"p",93),t._uU(149,"We focus on developing the professional careers of digital talent or employees by providing various publication materials, workshops, and training that are equipped with a practical curriculum and are supported by experienced experts and facilitators."),t.qZA()()(),t.TgZ(150,"div",94)(151,"h1",95),t._uU(152,"CONTACT US"),t.qZA(),t.TgZ(153,"p",96),t._uU(154,"Cervino Village Unit H Mezzanine Level, Jl. KH Abdullah Syafei No.Kav. 27, RT.3/RW.1, West Tebet, Tebet, South Jakarta City, Jakarta 12810."),t.qZA(),t._UZ(155,"img",97)(156,"img",98)(157,"img",99),t.qZA()(),t.TgZ(158,"div",100),t._UZ(159,"img",101),t.TgZ(160,"h1",102),t._uU(161,"Developed by "),t.TgZ(162,"span",103),t._uU(163,"DIGIMASTER"),t.qZA()(),t.TgZ(164,"h1",104),t._uU(165,"Copyright \xa92023 Technobankers. All Rights Reserved."),t.qZA()()()),2&i){const g=t.MAs(133);t.xp6(13),t.Q6J("routerLinkActive","active"),t.xp6(11),t.s9C("src",o.book.bookImage,t.LSH),t.xp6(6),t.Q6J("ngForOf",o.detailModel.authorOfBook),t.xp6(2),t.hij(" ",o.book.bookTitle," "),t.xp6(3),t.hij("Vol.",o.book.bookVolume,""),t.xp6(1),t.Q6J("ngIf",o.book.seriesName),t.xp6(2),t.hij(" ",o.book.bookDescription," "),t.xp6(3),t.Q6J("ngForOf",o.detailModel.keywordOfBook),t.xp6(5),t.hij("Genre : ",o.book.bookGenre,""),t.xp6(1),t.Q6J("ngForOf",o.detailModel.roles),t.xp6(7),t.hij("ISBN : ",o.book.bookIsbn,""),t.xp6(2),t.hij("Language : ",o.book.bookLanguage,""),t.xp6(2),t.hij("Released : ",o.book.bookReleased,""),t.xp6(2),t.hij("Pages : ",o.book.bookPages,""),t.xp6(2),t.hij("Publisher : ",o.book.bookPublisher,""),t.xp6(3),t.Q6J("ngForOf",o.detailModel.authorOfBook),t.xp6(5),t.Oqu(o.book.bookBriefDesc),t.xp6(15),t.Q6J("formGroup",o.detailModel.formGroupEmail),t.xp6(3),t.Q6J("ngIf",o.f.clientName&&(o.f.clientName.touched||o.f.clientName.dirty)&&!o.f.clientName.valid),t.xp6(3),t.Q6J("ngIf",o.f.clientEmail&&(o.f.clientEmail.touched||o.f.clientEmail.dirty)&&!o.f.clientEmail.valid),t.xp6(9),t.Q6J("ngIf",o.isLoading),t.xp6(16),t.Q6J("ngForOf",o.detailModel.previewsOfBook),t.xp6(2),t.Q6J("ngForOf",o.detailModel.previewsOfBook),t.xp6(14),t.s9C("value",o.book.bookCitation),t.xp6(3),t.Q6J("ngxClipboard",g)}},dependencies:[h.sg,h.O5,s.rH,s.Od,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.sg,n.u,u.yb],styles:[".background-color[_ngcontent-%COMP%]{background-color:#1c1c28}.background-color-dropdown[_ngcontent-%COMP%]{background-color:#222}.font-weight[_ngcontent-%COMP%]{font-weight:600}.font-weight-700[_ngcontent-%COMP%]{font-weight:700}.border-white[_ngcontent-%COMP%]{border-radius:8px;border-color:#fff}.login[_ngcontent-%COMP%]{position:relative;left:130px}@media (min-width: 1200px){.banner1[_ngcontent-%COMP%]{background-image:url(/assets/jumbotron.png);position:relative;width:100%;height:90vh;background-size:cover;margin-bottom:0}}.text-color-yellow[_ngcontent-%COMP%]{color:#ffd249}.position-section1[_ngcontent-%COMP%]{position:relative;right:200px;top:40px}.home-text-section-2[_ngcontent-%COMP%]{position:relative;bottom:30px;width:727px;height:96px;font-weight:700;font-size:32px}.image-home1[_ngcontent-%COMP%]{border-radius:24px;width:350px;height:440px}.text-status[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:24px;line-height:36px}.text-author[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:18px;line-height:27px}.position-title-book[_ngcontent-%COMP%]{position:relative;bottom:55px}.position-info-book[_ngcontent-%COMP%]{position:relative;bottom:90px}.text-volume[_ngcontent-%COMP%]{border-radius:8px;width:70px;height:34px}.text-series[_ngcontent-%COMP%]{border-radius:8px;width:208px;height:34px}.position-text-desc[_ngcontent-%COMP%]{position:relative;bottom:75px}.position-text-key[_ngcontent-%COMP%]{position:relative;bottom:40px}.background-color-section-2[_ngcontent-%COMP%]{background-color:#22223c;width:100%;height:101px}.text-title-section2[_ngcontent-%COMP%]{position:relative;top:30px;left:80px;width:180px;height:42px;font-style:normal;font-weight:700;font-size:28px;line-height:42px}.text-p-section2[_ngcontent-%COMP%]{position:relative;width:120px;height:54px;left:400px;top:25px;font-weight:400;font-size:16px;line-height:24px}.text-p2-section2[_ngcontent-%COMP%]{position:relative;width:180px;left:750px;height:54px;top:25px;font-weight:400;font-size:16px;line-height:24px}.text-color-gray[_ngcontent-%COMP%]{color:#4f4f4f}.text-color-gray2[_ngcontent-%COMP%]{color:#333}.text-citation[_ngcontent-%COMP%]{width:590px;height:42px;left:420px;top:calc(50% + 176px);font-weight:500;font-size:14px;line-height:21px;border-color:transparent}.citation-button[_ngcontent-%COMP%]{position:relative;left:500px}.text-title-section3[_ngcontent-%COMP%]{position:relative;width:730px;height:30px;left:80px;top:40px;font-weight:600;font-size:20px;line-height:30px}.paragraph[_ngcontent-%COMP%]{width:730px}.button[_ngcontent-%COMP%]{position:relative;background-color:#5656c6;filter:drop-shadow(0px 4px 4px rgba(0,0,0,.25)) drop-shadow(0px 4px 4px rgba(0,0,0,.25))}.button2[_ngcontent-%COMP%]{position:relative;width:454px;height:62px;left:30px;text-align:center;background-color:#5656c6;filter:drop-shadow(0px 4px 4px rgba(0,0,0,.25)) drop-shadow(0px 4px 4px rgba(0,0,0,.25))}.position-loading[_ngcontent-%COMP%]{position:relative;left:100px;top:16px}.text-version[_ngcontent-%COMP%]{font-style:normal;font-weight:600;font-size:20px;line-height:30px}.box[_ngcontent-%COMP%]{position:relative;left:70px;width:510px;height:722px;background:#FFFFFF;box-shadow:0 0 8px 1px #00000040;border-radius:16px}.input-text[_ngcontent-%COMP%]{width:454px;height:48px;left:878px;top:437px;background:#FFFFFF;border:1px solid #CECECE;border-radius:8px}.input-text2[_ngcontent-%COMP%]{width:370px;height:48px;left:878px;top:437px;background:#FFFFFF;border:1px solid #CECECE;border-radius:8px}.text-start-reading[_ngcontent-%COMP%]{font-weight:700;font-size:24px;line-height:36px;text-align:center;color:#5656c6}.text-get-started[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:48px;line-height:68px;text-align:center}.modal-preview[_ngcontent-%COMP%]{width:500px;height:562px;border-radius:24px}.preview-book[_ngcontent-%COMP%]{width:330px;height:425px;border-radius:24px}.position-button-preview[_ngcontent-%COMP%]{position:relative;left:70px}.footer[_ngcontent-%COMP%]{background-image:url(Footer.f198f1bf5ed6ddc4.png)}.footer2[_ngcontent-%COMP%]{background-image:url(Footer2.9df54152fa1449b4.png);background-size:cover}.img-footer2[_ngcontent-%COMP%]{width:1440px;height:55px}.text-title-footer[_ngcontent-%COMP%]{font-weight:600;font-size:18px;line-height:24px}.text2-title-footer[_ngcontent-%COMP%]{font-weight:600;font-size:18px;line-height:24px;position:relative;bottom:40px}.subtext-footer[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:18px}.subtext2-footer[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:18px;position:relative;bottom:60px}.position-text-footer[_ngcontent-%COMP%]{position:relative;left:380px;top:30px}.position-h1[_ngcontent-%COMP%]{position:relative;right:370px;padding-top:20px;font-size:14px;font-weight:400}.position2-h1[_ngcontent-%COMP%]{position:relative;right:70px;padding-top:20px;font-size:14px;font-weight:400}.font-weight-footer[_ngcontent-%COMP%]{font-weight:600}"]}),e})()},8996:(x,c,a)=>{a.d(c,{n:()=>t});var l=a(433);class t{constructor(){this.allDataImage=[],this.authorOfBook={},this.roles={},this.keywordOfBook={},this.author=[],this.formGroupEmail=new l.cw({bookId:new l.NI(""),clientName:new l.NI("",[l.kI.required]),clientEmail:new l.NI("",[l.kI.required,l.kI.email]),clientNumber:new l.NI("")})}}},326:(x,c,a)=>{a.d(c,{C:()=>l});const l="https://api.technobankers.net"},7802:(x,c,a)=>{a.d(c,{Z:()=>f});var l=a(529),t=a(326),s=a(1571);let f=(()=>{class d{constructor(n){this.http=n}getListBook(){return this.http.get(`${t.C}/api/technobanker/v1/backoffice/book/get-books`)}getListBookPartly(){return this.http.get(`${t.C}/api/technobanker/v1/backoffice/book/get-books-partly`)}submitEmail(n){const u=(new l.LE).set("bookId",n.bookId).set("clientName",n.clientName).set("clientEmail",n.clientEmail).set("clientNumber",n.clientNumber);return this.http.post("http://54.251.83.205:9091/api/technobanker/v1/backoffice/book/send-email",u)}getDetailBook(n){const u=(new l.LE).set("bookId",n.bookId);return this.http.get("http://54.251.83.205:9091/api/technobanker/v1/backoffice/book/get-detailed-book",{params:u})}saveEmailData(n){sessionStorage.setItem("detail-book",JSON.stringify(n))}previewImage(n){const u=(new l.LE).set("bookId",n.bookId);return this.http.get("http://54.251.83.205:9091/api/technobanker/v1/backoffice/book/get-detailed-book/book-preview",{params:u})}}return d.\u0275fac=function(n){return new(n||d)(s.LFG(l.eN))},d.\u0275prov=s.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);