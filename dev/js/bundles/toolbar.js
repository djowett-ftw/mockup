window.jQuery&&define("jquery",[],function(){"use strict";return window.jQuery}),define(["jquery","mockup-router","mockup-iframe","mockup-registry","mockup-patterns-base","mockup-patterns-toggle","mockup-patterns-modal","mockup-patterns-tinymce","mockup-patterns-structure","mockup-patterns-autotoc","mockup-patterns-accessibility","mockup-patterns-formunloadalert","mockup-patterns-preventdoublesubmit","mockup-patterns-formautofocus","mockup-patterns-livesearch","mockup-bundles-widgets"],function(a,b,c,d,e){"use strict";var f=e.extend({name:"plone-toolbar",init:function(){var b=this;if(!b.$el.hasClass("modal")){var d=b.$el.filter(".enableFormTabbing");d=d.add(b.$el.find(".enableFormTabbing")),d.addClass("pat-autotoc"),d.patternAutotoc({levels:"legend",section:"fieldset",className:"autotabs"}),b.$el.addClass("pat-accessibility").patternAccessibility({smallbtn:"#accessibility-smallText",normalbtn:"#accessibility-normalText",largebtn:"#accessibility-largeText"}),d=b.$el.filter(".enableUnloadProtection"),d=d.add(b.$el.find(".enableUnloadProtection")),d.addClass("pat-formunloadalert"),a("[onclick^='toggleSelect']",b.$el).attr("onclick",null);var e=a("form[action$=content_status_history] table.listing > thead tr th input[type=checkbox]",b.$el);e.addClass("pat-toggle").patternToggle({target:"table.listing input[type=checkbox]",attribute:"checked",value:"checked",externalClose:!1,preventDefault:!1}),e=a("form[action*=usergroup-groupmembership] table.listing tr th input[type=checkbox]",b.$el),e.addClass("pat-toggle").patternToggle({target:"table.listing input[type=checkbox]",attribute:"checked",value:"checked",externalClose:!1,preventDefault:!1}),e=a("form[action*=usergroup-usermembership] table.listing tr th input[type=checkbox]",b.$el),e.addClass("pat-toggle").patternToggle({target:"form[action*=usergroup-usermembership] table.listing:last input[type=checkbox]",attribute:"checked",value:"checked",externalClose:!1,preventDefault:!1}),e=a("[onchange*='toggleSelect']",b.$el).attr("onchange",null),e.addClass("pat-toggle").patternToggle({target:"form[name=searchform] dd.actionMenuContent input[type=checkbox]",attribute:"checked",value:"checked",externalClose:!1,preventDefault:!1}),a("form",b.$el).not('[action$="@@new-user"]').not('[action$="@@usergroup-groupdetails"]').patternPreventdoublesubmit({message:window.form_resubmit_message});var g=a('form[action*="++add++"]',b.$el);g.addClass("pat-formautofocus");var h=a('form[action*="@@edit"]',b.$el);h.addClass("pat-formautofocus");var i={title:"Login",content:"#content",prependContent:".portalMessage",actions:{'#login_form input[type="submit"]':{displayInModal:!1}}};a("#personaltools-login",b.$el).addClass("pat-modal").patternModal(i),a("#siteaction-contact > a",b.$el).addClass("pat-modal").patternModal();var j={buttons:'.actionButtons > input[type="submit"]'};a("#personaltools-join",b.$el).addClass("pat-modal").patternModal(j);var k={titleSelector:"h2:first",content:"#content-core"};a("#content-history > a, #plone-action-content-history > a",b.$el).addClass("pat-modal").patternModal(k);var l={actionOptions:{displayInModal:!1}};a("#folderChangeDefaultPage, #folderChangeDefaultPage a, #contextSetDefaultPage a",b.$el).addClass("pat-modal").patternModal(l);var m=a('form[name="users_add"]',b.$el);if(m.length>0){var n={ajaxUrl:m[0].action,triggers:['click input[name="form.button.AddUser"]'],buttons:'input[name="form.actions.register"]',content:"#content",prependContent:".portalMessage"};a('input[name="form.button.AddUser"]').addClass("pat-modal").patternModal(n)}var o=a('form[name="groups_add"]',b.$el);if(o.length>0){var p={ajaxUrl:o[0].action,triggers:['click input[name="form.button.AddGroup"]'],buttons:'input[name="form.button.Save"]',content:"#content",prependContent:".portalMessage"};a('input[name="form.button.AddGroup"]').addClass("pat-modal").patternModal(p)}a("#plone-contentmenu-settings > a,a#plone-contentmenu-settings",b.$el).addClass("modal-trigger").patternModal({width:"80%",contentClass:"modal-constrain-types",actionOptions:{displayInModal:!1}}).on("shown.modal.patterns",function(b){function c(){var a=parseInt(h.val(),10);a===k?(i.show(),j.show()):(i.hide(),j.hide())}function d(){f.each(function(){var a=this.id.replace("prefer","allow"),b=j.find("#"+a);this.checked?b[0].disabled=!1:(b[0].disabled=!0,b[0].checked=!1)})}var e=b.$modal,f=a(".current_prefer_form",e),g=a(".current_allow_form",e),h=a(".constrain_types_mode_form",e),i=f.parents(".field"),j=g.parents(".field"),k=1;h.change(c),c(),i.change(d),d()}),a("#workflow-transition-advanced > a,a#workflow-transition-advanced",b.$el).addClass("modal-trigger").patternModal({width:"80%",actionOptions:{displayInModal:!1}});var q=a("#plone-personal-actions-preferences > a, #personaltools-preferences > a",b.$el),r={buttons:'input[type="submit"]',actionOptions:{displayInModal:!1}};q.addClass("pat-modal"),q.patternModal(r);var s={actionOptions:{displayInModal:!1}};a("#plone-contentmenu-actions-rename a",b.$el).addClass("pat-modal").patternModal(s);var t=a("#plone-contentmenu-actions-delete > a, #plone-contentmenu-actions-delete",b.$el);t.addClass("pat-modal").patternModal({actionOptions:{onSuccess:function(b,c){b.$el.on("afterDraw.modal.patterns",function(){var c=a(".portalMessage.info",b.$modal);if(c.length>0){var d=a(".modal-body",b.$modal);d.empty(),d.append(c)}}),b.redraw(c),b.$el.on("hidden.modal.patterns",function(){window.parent.location=b.options.ajaxUrl.split("/").slice(0,-2).join("/")})}}}),a(".toolbar-dropdown > a",b.$el).each(function(){a(this).patternToggle({target:".toolbar-dropdown",value:"toolbar-dropdown-open",menu:"parent"})}),a(".toolbar-dropdown .toolbar-dropdown-menu a",b.$el).click(function(){a(this).parents(".toolbar-dropdown").children("a").trigger("click")}),a(document).on("add-attr.toggle.patterns",".toolbar-dropdown > a",function(){var b=a(this);a(".toolbar-dropdown-open > a").each(function(){b[0]!==a(this)[0]&&a(this).trigger("click")}),c.stretch()}).on("removed-attr.toggle.patterns",".toolbar-dropdown > a",function(){c.shrink()}),c.$el.on("shrink.iframe",function(){a(".toolbar-dropdown-open > a").each(function(){a(this).trigger("click")})}),a(document).on("before-ajax.modal.patterns","a.modal-trigger, a.pat-modal",function(){var b=a(this);a(".toolbar-dropdown-open > a").each(function(){b[0]!==a(this)[0]&&a(this).trigger("click")}),a("body",c.document).css("overflow","hidden"),c.stretch()}).on("show.modal.patterns","a.modal-trigger, a.pat-modal",function(){var b=a(this);a(".toolbar-dropdown-open > a").each(function(){b[0]!==a(this)[0]&&a(this).trigger("click")}),a("body",c.document).css("overflow","hidden"),c.stretch()}).on("hidden.modal.patterns","a.modal-trigger, a.pat-modal",function(){a("body",c.document).css("overflow","visible"),c.shrink()}),a("#plone-action-folderContents > a",b.$el).addClass("modal-trigger").patternModal({width:"96%",position:"middle top",actionOptions:{onSuccess:function(){}}}),a("#plone-sitesetup a",b.$el).addClass("modal-trigger").patternModal({width:"80%",loadLinksWithinModal:!1,actionOptions:{displayInModal:!1}}).on("show.modal.patterns",function(b,c){a("a[href]",c.$modal).each(function(){var b=this.href,c=b.split("/");c.splice(c.length-1,0,"++nodiazo++"),b=c.join("/"),a(this).attr("href",b),a(this).click(function(){window.open(b)})})});var u={width:"50%",buttons:'.formControls > input[type="submit"],.actionButtons input[type="submit"]',automaticallyAddButtonActions:!1};a("#toolbar-manage-portlets a,#manage-dashboard a",b.$el).addClass("pat-modal").patternModal(u).on("render.modal.patterns",function(b,c){a(".section select",c.$raw).removeAttr("onchange"),c.options.actions={".section select":{eventType:"change",onSuccess:function(a){0===a.$modal.find(".pattern-modal-buttons input").length&&a.reloadWindow()},ajaxUrl:function(a){var b=a.val(),c=a.parents("form").attr("action");return c+b}},".actionButtons input":{error:".fieldErrorBox",onSuccess:function(a){a.reloadWindow()}},".portlet-action":{isForm:!0}}}).on("hidden.modal.patterns",function(a,b){b.reloadWindow()}),a("#plone-contentmenu-factories ul li",b.$el).addClass("is-content"),a("#plone-contentmenu-factories ul li#plone-contentmenu-more",b.$el).removeClass("is-content"),a("#plone-contentmenu-factories ul li#plone-contentmenu-settings",b.$el).removeClass("is-content");var v={width:"80%",backdropOptions:{closeOnClick:!1},position:"center top",content:"#content",automaticallyAddButtonActions:!1,actionOptions:{displayInModal:!1,redirectOnResponse:!0,redirectToUrl:function(b,c){var d=a(/<base.*?(\/>|<\/base>)/im.exec(c)[0]);return d.attr("href")+"/view"}},actions:{'input#form-buttons-save, .formControls input[name="form.button.save"]':{},'input#form-buttons-cancel, .formControls input[name="form.button.cancel"]':{modalFunction:"hide"}},routerOptions:{id:"edit",pathExp:"/edit$"}},w=v;w.actionOptions.redirectOnResponse=!0,a("#plone-action-edit > a, #plone-contentmenu-factories ul li.is-content a",b.$el).addClass("pat-modal").patternModal(v),delete w.routerOptions,a("#plone-contentmenu-factories ul li.is-content a",b.$el).addClass("pat-modal").patternModal(w);var x={width:"80%",content:"#content-core",loadLinksWithinModal:!1};a("#plone-action-contentrules > a",b.$el).addClass("pat-modal").patternModal(x).on("render.modal.patterns",function(a,b){b.options.actions={"table.listing a":{ajaxUrl:function(a){return a.attr("href").replace(/@@/g,"++nodiazo++/@@")},displayInModal:!1},'input[name="form.button.AddAssignment"]':{},'a[href$="@@rules-controlpanel"]':{displayInModal:!1}}}),a("#plone-action-local_roles > a",b.$el).addClass("modal-trigger").patternModal({width:"80%",buttons:'#sharing-save-button, input[name="form.button.Cancel"]',automaticallyAddButtonActions:!1,actions:{"#sharing-search-button":{},a:{},'input[name="form.button.Cancel"]':{modalFunction:"hide"},"#sharing-save-button":{onSuccess:function(a,b){a.redraw(b),a.$el.on("hidden.modal.patterns",function(){window.parent.location=a.options.ajaxUrl.split("/").slice(0,-1).join("/")})}}}}),b.$el.find(".mce_editable").addClass("pat-tinymce").each(function(){var b=a(this),c=a.parseJSON(b.attr("data-mce-config"));c.content_css=c.portal_url+"/base.css",delete c.customplugins,delete c.plugins,delete c.theme,b.attr({"data-pat-tinymce":JSON.stringify({relatedItems:{vocabularyUrl:c.portal_url+"/@@getVocabulary?name=plone.app.vocabularies.Catalog"},rel_upload_path:"@@fileUpload",folder_url:c.document_base_url,tiny:c,prependToUrl:"resolveuid/",linkAttribute:"UID",prependToScalePart:"/@@images/image/"})})}),a("body").on("rendered.modal.patterns",function(){new f(a(this))})}}});return window.parent!==window&&(a("body").addClass("pat-plone-toolbar"),d.scan(a("body")),b.redirect(),b.start()),f});