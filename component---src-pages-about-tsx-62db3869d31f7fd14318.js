(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2l/u":function(e,t,n){"use strict";n.r(t);var a=n("+4qg"),A=n.n(a),i=n("9Dj+"),o=n("H8eV"),l=n("Lk+z"),c=n("hiqm"),r=n.n(c),p=n("qw/j"),d=n("lyZU"),s=n("lbR4"),b=d.d.ul.withConfig({displayName:"SocialProfilestyle__SocialProfileWrapper",componentId:"bjd526-0"})(["\n  display: inline-flex;\n"]),m=d.d.div.withConfig({displayName:"SocialProfilestyle__Tooltip",componentId:"bjd526-1"})(["\n  position: absolute;\n  background-color: #fff;\n  pointer-events: none;\n  padding: 0.4rem 0.8rem;\n  border-radius: 3px;\n  color: #333;\n  font-size: 13px;\n  bottom: 90%;\n  left: 50%;\n  opacity: 0;\n  white-space: nowrap;\n  visibility: hidden;\n  z-index: 999;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\n  transform: translate3d(-50%, 0, 0);\n  transition: 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);\n\n  &:after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-top: 6px solid #fff;\n    border-right: 6px solid transparent;\n    border-left: 6px solid transparent;\n    bottom: -6px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"]),h=d.d.li.withConfig({displayName:"SocialProfilestyle__SocialProfileItem",componentId:"bjd526-2"})(["\n  list-style: none;\n  position: relative;\n  margin-right: 20px;\n  &:last-child {\n    margin-right: 0;\n  }\n  &:hover {\n    "," {\n      opacity: 1;\n      visibility: visible;\n      bottom: calc(100% + 5px);\n    }\n  }\n\n  a {\n    color: ",";\n    font-size: 22px;\n    padding: 0.2em;\n    display: block;\n    svg {\n      display: block;\n    }\n  }\n"],m,Object(s.a)("colors.textColor","#292929")),g=function(e){var t=e.items,n=Object(p.a)(e,["items"]);return a.createElement(b,n,t.map((function(e,t){return a.createElement(h,{key:t},a.createElement("a",{href:e.url,"aria-label":"social profile"},e.icon||"icon"),a.createElement(m,null,e.tooltip||"Social Link"))})))},x=n("3Fov"),u=d.d.div.withConfig({displayName:"style__AboutWrapper",componentId:"sc-1fx7ccq-0"})(["\n  position: relative;\n  padding: 90px 75px 0 75px;\n  @media (max-width: 990px) {\n    padding: 80px 45px 30px 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 25px 0 25px;\n  }\n"]),w=d.d.div.withConfig({displayName:"style__AboutPageTitle",componentId:"sc-1fx7ccq-1"})(["\n  margin-bottom: 45px;\n  @media (max-width: 767px) {\n    margin-bottom: 30px;\n  }\n  h2 {\n    font-size: 30px;\n    font-weight: 700;\n    color: ",";\n    line-height: 1.53;\n    margin-bottom: 10px;\n    @media (max-width: 990px) {\n      font-size: 26px;\n    }\n    @media (max-width: 767px) {\n      font-size: 22px;\n      margin-bottom: 10px;\n    }\n  }\n"],Object(s.a)("colors.textColor","#292929")),f=d.d.div.withConfig({displayName:"style__AboutImage",componentId:"sc-1fx7ccq-2"})(["\n  margin-bottom: 90px;\n  @media (max-width: 990px) {\n    margin-bottom: 60px;\n  }\n  @media (max-width: 767px) {\n    margin-bottom: 40px;\n  }\n"]),E=d.d.div.withConfig({displayName:"style__AboutDetails",componentId:"sc-1fx7ccq-3"})(["\n  width: 870px;\n  max-width: 100%;\n  margin: 0 auto;\n\n  h2 {\n    font-size: 21px;\n    font-weight: 500;\n    color: ",";\n    margin-bottom: 40px;\n    @media (max-width: 990px) {\n      margin-bottom: 30px;\n    }\n    @media (max-width: 767px) {\n      font-size: 18px;\n      margin-bottom: 25px;\n    }\n  }\n"],Object(s.a)("colors.textColor","#292929")),y=d.d.div.withConfig({displayName:"style__SocialProfiles",componentId:"sc-1fx7ccq-4"})(["\n  margin-top: 60px;\n  position: relative;\n  @media (max-width: 767px) {\n    margin-top: 40px;\n  }\n\n  &:before {\n    content: '';\n    width: 30px;\n    height: 1px;\n    background: #292929;\n    display: block;\n    margin-bottom: 60px;\n    @media (max-width: 767px) {\n      margin-bottom: 40px;\n    }\n  }\n"]),j=[{icon:a.createElement(x.b,null),url:"https://www.facebook.com/redqinc/",tooltip:"Facebook"},{icon:a.createElement(x.c,null),url:"https://www.instagram.com/redqinc/",tooltip:"Instagram"},{icon:a.createElement(x.g,null),url:"https://twitter.com/redqinc",tooltip:"Twitter"},{icon:a.createElement(x.d,null),url:"https://www.linkedin.com/company/redqinc/",tooltip:"Linked In"}],v=function(e){var t=l.data;return a.createElement(u,null,a.createElement(w,null,a.createElement("h2",null,"About StoryHub"),a.createElement("p",null,"StoryHub is a beautiful Gatsby Blog theme designed to showcase your work in style. Perfect for designers, artists, photographers and developers to use for their portfolio website.")),a.createElement(f,null,a.createElement(r.a,{fluid:t.avatar.childImageSharp.fluid,alt:"author"})),a.createElement(E,null,a.createElement("h2",null,"Hey there, what’s up?"),a.createElement("p",null,"RedQ Team is a creative agency specializing in building scalable, high-performance web & mobile application. Our main concern is creating more value into the application so that can help our customers to grow their business."),a.createElement("p",null,"RedQ Team is a creative agency specializing in building scalable, high-performance web & mobile application. Our main concern is creating more value into the application so that can help our customers to grow their business."),a.createElement(y,null,a.createElement(g,{items:j}))))};t.default=function(e){return A.a.createElement(i.a,null,A.a.createElement(o.a,{title:"About Us",description:"StoryHub is a beautiful Gatsby Blog theme designed to showcase your work in style. Perfect for designers, artists, photographers and developers to use for their portfolio website."}),A.a.createElement(v,null))}},"Lk+z":function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'217\'%20viewBox=\'0%200%20400%20217\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M0%20109v108h401V0H0v109m144-15c-11%200-12%202-1%202h8l-3%206c-5%209-9%2021-8%2022l4-7%206-13%203-10h-9m21%200c-7%204-8%2025-1%2029%208%204%2016-2%2016-14s-7-19-15-15m70%201c-8%204-6%2017%202%2018%204%201%209%200%2010-2%202-2%201%202%200%205-2%205-5%206-11%206h-4c1%202%2010%202%2013%200%205-3%207-17%204-24-3-4-9-6-14-3m27-1c-8%204-10%2021-3%2028%203%203%2010%203%2014%200%204-4%204-12%200-16-4-2-9-3-13-1-3%202-3%202-2-1%201-7%205-9%2011-8%205%200%205-1%201-2h-8m21%202c-2%203-3%205-3%208-1%2015%202%2020%2011%2020%205%200%209-4%2010-11%201-16-9-26-18-17m-173-1l8%201%208%201-3%205-8%2020c0%204%202%202%203-3a141%20141%200%200111-25h-9l-10%201m56%201c-5%203-6%2015-4%2021%204%209%2014%206%2016-5%201-11-5-20-12-16m70%200c-7%203-4%2016%203%2016%204%200%209-5%209-8%200-6-6-10-12-8m51%200c-7%204-6%2024%200%2026%207%201%2011-3%2011-13%200-8-1-11-5-13h-6m-92%207l4%205%204%204-4%204c-4%204-5%206-3%206l4-4%205-5%204%205%205%203-3-4c-5-6-5-6%200-10l4-4c0-2-3-1-6%203l-4%204-4-4c-4-4-6-5-6-3m64%205c-2%203-2%204-1%209%203%208%2015%206%2015-3%200-8-8-11-14-6\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","srcWebp":"/static/09cd2e8bdcdbbbab11c1193a6e6101b9/505b9/about.webp","srcSetWebp":"/static/09cd2e8bdcdbbbab11c1193a6e6101b9/a8ec6/about.webp 443w,\\n/static/09cd2e8bdcdbbbab11c1193a6e6101b9/069b0/about.webp 885w,\\n/static/09cd2e8bdcdbbbab11c1193a6e6101b9/505b9/about.webp 1770w","srcSet":"/static/09cd2e8bdcdbbbab11c1193a6e6101b9/d4ab2/about.jpg 443w,\\n/static/09cd2e8bdcdbbbab11c1193a6e6101b9/79b04/about.jpg 885w,\\n/static/09cd2e8bdcdbbbab11c1193a6e6101b9/49aac/about.jpg 1770w","src":"/static/09cd2e8bdcdbbbab11c1193a6e6101b9/49aac/about.jpg","sizes":"(max-width: 1770px) 100vw, 1770px","presentationWidth":1770,"presentationHeight":960,"originalName":"about.jpg","originalImg":"/static/09cd2e8bdcdbbbab11c1193a6e6101b9/49aac/about.jpg","base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGuAD//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAEFAl//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAE/IV//2gAMAwEAAgADAAAAEPPP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAFhAAAwAAAAAAAAAAAAAAAAAAACCB/9oACAEBAAE/ECr/AP/Z","aspectRatio":1.8458333333333334}}},"site":{"siteMetadata":{"author":"Public Health Coalition","about":"Medical Student COVID-19 Action Network"}}}}')}}]);
//# sourceMappingURL=component---src-pages-about-tsx-62db3869d31f7fd14318.js.map