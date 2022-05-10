"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[977],{9438:function(e,t,l){l.r(t);var a=l(7294),n=l(1597),c=l(1944),s=l(8306);t.default=function(e){e.data,e.path;return a.createElement(c.Z,null,a.createElement(s.Z,{title:"🎨 Styling Guide"}),a.createElement("h2",null,"How to start fresh"),a.createElement("p",null,"To throw away all my styles, simply delete all the .scss files except ",a.createElement("code",null,"styles.scss"),", empty out ",a.createElement("code",null,"styles.scss")," and you're set."),a.createElement("hr",null),a.createElement("h2",null,"Reasons to not start fresh"),a.createElement("p",null,"These stylesheets are made to simplify your life while maintaining your potential to customize everything."),a.createElement("hr",null),a.createElement("h3",null,"Auto-pallettes"),a.createElement("h4",null,"Setting the base color"),a.createElement("p",null,"Your probably have some colour you want to use as your accent color. Simply set it as ",a.createElement("code",null,"$accent")," in ",a.createElement("code",null,"colors.scss")," and your palette will be built for you."),a.createElement("h4",null,"Generated Colours"),a.createElement("p",null,"Your specified ",a.createElement("code",{className:"background-accent-base"},"$accent")," is used to generate a ",a.createElement("code",{className:"background-complement-base"},"$complement"),". Both of these colours generate ",a.createElement("b",null,"palettes"),", ",a.createElement("code",{className:"ShowPalette"},"$accent-palette")," & ",a.createElement("code",{className:"ShowComplementPalette"},"$complement-palette")),a.createElement("p",null,"Available tones for a palette are ",a.createElement("code",{className:"background-accent-lightest"},"lightest"),", ",a.createElement("code",{className:"background-accent-lighter"},"lighter"),", ",a.createElement("code",{className:"background-accent-light"},"light"),", ",a.createElement("code",{className:"background-accent-base"},"base"),", ",a.createElement("code",{className:"background-accent-dark"},"dark"),",  ",a.createElement("code",{className:"background-accent-darker"},"darker"),", ",a.createElement("code",{className:"background-accent-darkest"},"darkest")),a.createElement("h4",null,"Your current palettes"),a.createElement("b",{className:"color-accent-base"},"Accent"),a.createElement("div",{style:{width:"100%",height:"40px",marginBlockEnd:"10px"},className:"ShowPalette"},"    "),a.createElement("b",{className:"color-complement-base"},"Complement"),a.createElement("div",{style:{width:"100%",height:"40px",marginBlockEnd:"10px"},className:"ShowComplementPalette"},"    "),a.createElement("h4",null,"Using a palette in SCSS"),a.createElement("p",null,"To use the palette defined by your base color, you can use one of the getter functions for a colour, such as ",a.createElement("code",null,"base($accent-palette)")," or  ",a.createElement("code",null,"darker($accent-palette)"),"."),a.createElement("h4",null,"Using a palette in HTML / JSX"),a.createElement("p",null,"Classnames are auto generated for your accent and complement palette as ",a.createElement("code",null,"(background || color)-(name of palette)-(tone)"),", for example ",a.createElement("code",{className:"background-accent-light"},"background-accent-light")," or ",a.createElement("code",{className:"color-complement-base"},"color-complement-base")),a.createElement("h4",null,"Adding a palette"),a.createElement("p",null,"If you need to go above and beyond the accent and complement, you can add another palette with full functionality by first assigning it to a variable in the same place in ",a.createElement("code",null,"colors-autotheme.scss")," as ",a.createElement("code",null,"$accent-palette")," & ",a.createElement("code",null,"$complement-palette")," (line 232) and then adding the ",a.createElement("code",null,"@include")," for your theme under ",a.createElement("code",null,".color")," and ",a.createElement("code",null,".background")," in the same way as it is done for accent and complement."),a.createElement("hr",null),a.createElement("h4",null,"Customizing base palette"),a.createElement("p",null,'The palette is built by calculating offsets based on a starting "base palette". You can redefine this palette by changing ',a.createElement("code",null,"$base-palette")," (line 58) of ",a.createElement("code",null,"colors-autotheme.scss")),a.createElement("h3",null,"Different files explained"),a.createElement("ul",null,a.createElement("li",null,a.createElement("code",null,"animations.scss")," defines keyframes and mixins for animated components"),a.createElement("li",null,a.createElement("code",null,"colors.scss")," defines all the color variables (including DARK THEME)"),a.createElement("li",null,a.createElement("code",null,"colors-autotheme.scss")," contains code for generating palettes"),a.createElement("li",null,a.createElement("code",null,"cssreset.scss")," a css reset so that the app looks the same across browsers"),a.createElement("li",null,a.createElement("code",null,"fonts.scss")," defines fonts for the app"),a.createElement("li",null,a.createElement("code",null,"styles.scss")," the star of the show, our custom styling goes here")),a.createElement(n.Link,{to:"/",className:"Magic"},"Go back to the homepage"))}}}]);
//# sourceMappingURL=component---src-pages-about-styling-tsx-89c66edce09e839b043b.js.map