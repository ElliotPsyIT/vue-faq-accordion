(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue2-transitions')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue2-transitions'], factory) :
  (factory((global.VueFaqAccordion = {}),global.vue2Transitions));
}(this, (function (exports,vue2Transitions) { 'use strict';

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css="*[data-v-dd43507e] { box-sizing: border-box; margin: 0; padding: 0; } button[data-v-dd43507e] { border: none; background: none; outline: none; } .faq[data-v-dd43507e] { width: 100%; padding: 0 10px; } .faq-wrapper[data-v-dd43507e] { max-width: 825px; margin: 0 auto; } .faq__title[data-v-dd43507e] { text-align: center; margin-bottom: 25px; } .faq__nav[data-v-dd43507e] { display: flex; justify-content: space-between; border-radius: 5px; } .faq__nav-item[data-v-dd43507e] { height: 40px; flex: 1; display: flex; justify-content: center; align-items: center; cursor: pointer; font-size: .8em; font-weight: 400; transition: all 0.3s; text-align: center; user-select: none; color: #000000; } .faq__nav-item_active[data-v-dd43507e] { color: #D50000; } .faq__nav-item[data-v-dd43507e]:hover { color: #D50000; } .faq__nav-item[data-v-dd43507e]:last-child { border-right: none; } .faq__accordion[data-v-dd43507e] { min-height: 250px; } .accordion-fade-slide-enter-active[data-v-dd43507e], .accordion-fade-slide-leave-active[data-v-dd43507e] { transition: all 0.3s; } .accordion-fade-slide-enter[data-v-dd43507e] { transform: translateY(-25px); opacity: 0; } .accordion-fade-slide-leave-to[data-v-dd43507e] { transform: translateY(25px); opacity: 0; } .accordion[data-v-dd43507e] { border: 2px solid #9e9e9e; border-radius: 5px; margin-top: 15px; } .accordion__item[data-v-dd43507e] { border-bottom: 2px solid #9e9e9e; } .accordion__item[data-v-dd43507e]:last-child { border-bottom: none; } .accordion__title[data-v-dd43507e] { display: flex; justify-content: space-between; align-items: center; padding: 15px; cursor: pointer; transition: all 0.3s; color: var(--font-color); } .accordion__title_active[data-v-dd43507e] { color: #D50000; } .accordion__title[data-v-dd43507e]:hover { color: #D50000; } .accordion__title:hover .accordion__toggle-button[data-v-dd43507e]::before, .accordion__title:hover .accordion__toggle-button[data-v-dd43507e]::after { background: #D50000; } .accordion__title-text[data-v-dd43507e] { margin-right: 10px; font-size: .9rem; } .accordion__value[data-v-dd43507e] { padding: 0 25px 25px 25px; text-align: left; font-size: .8rem; color: #000000; } .accordion__toggle-button[data-v-dd43507e] { position: relative; width: 16px; height: 16px; transition: all 0.3s; transform-origin: 50% 50%; padding-left: 16px; cursor: pointer; } .accordion__toggle-button[data-v-dd43507e]::before, .accordion__toggle-button[data-v-dd43507e]::after { content: ''; position: absolute; left: 0; width: 100%; height: 2px; transition: all 0.3s; background: black; } .accordion__toggle-button[data-v-dd43507e]::before { transform: rotate(90deg); } .accordion__toggle-button_active[data-v-dd43507e] { transform: rotate(45deg); } .accordion__toggle-button_active[data-v-dd43507e]::before, .accordion__toggle-button_active[data-v-dd43507e]::after { background: #D50000; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{ref:"rootEl",staticClass:"faq"},[_c('div',{staticClass:"faq-wrapper"},[(_vm.hasNavigation)?_c('nav',{staticClass:"faq__nav"},_vm._l((_vm.categories),function(category,i){return _c('div',{key:("category-" + i),class:_vm.generateCategoryClasses(category),domProps:{"innerHTML":_vm._s(category)},on:{"click":function($event){_vm.makeActiveCategory(category);}}})})):_vm._e(),_vm._v(" "),_c('transition',{attrs:{"name":"accordion-fade-slide","mode":"out-in"}},[(_vm.showAccordion)?_c('div',{staticClass:"accordion"},_vm._l((_vm.categoryItems),function(item,i){return _c('div',{key:("accordion-item-" + i),staticClass:"accordion__item"},[_c('div',{class:_vm.generateQuestionClasses(i),on:{"click":function($event){_vm.makeActive(i);}}},[_c('p',{staticClass:"accordion__title-text",domProps:{"innerHTML":_vm._s(item[_vm.questionProperty])}}),_vm._v(" "),_c('button',{class:_vm.generateButtonClasses(i)})]),_vm._v(" "),_c('collapse-transition',[(i === _vm.activeQuestionIndex)?_c('div',[_c('p',{staticClass:"accordion__value",domProps:{"innerHTML":_vm._s(item[_vm.answerProperty])}})]):_vm._e()])],1)})):_vm._e()])],1)])},staticRenderFns: [],_scopeId: 'data-v-dd43507e',
    name: 'VueFaqAccordion',
    components: {
      CollapseTransition: vue2Transitions.CollapseTransition
    },
    data: function data () {
      return {
        activeTab: '',
        activeQuestionIndex: null,
        showAccordion: false
      }
    },
    props: {
      /**
       * Array of items
       * Object style {questionProperty: string, answerProperty: string, tabName: string}
       * You can change object keys names using other props (questionProperty, answerProperty, tabName)
       */
      items: {
        type: Array,
        required: true
      },
      /**
       * Key name of object in items array for specifying title of question
       */
      questionProperty: {
        type: String,
        default: 'title'
      },
      /**
       * Key name of object in items array for specifying content text of open question
       */
      answerProperty: {
        type: String,
        default: 'value'
      },
      /**
       * Key name of object in items array for specifying navigation tab name
       */
      tabName: {
        type: String,
        default: 'category'
      },
      /**
       * Color for hover and active tab/question
       * possible values: 'red', '#F00', 'rgb(255, 0, 0)'
       */
      activeColor: {
        type: String,
        default: '#D50000'
      },
      /**
       * Color for borders
       */
      borderColor: {
        type: String,
        default: '#9E9E9E'
      },
      /**
       * Color for fonts
       */
      fontColor: {
        type: String,
        default: '#000000'
      }
    },
    computed: {
      categories: function categories () {
        var this$1 = this;

        var uniqueCategories = this.items
          .map(function (item) { return item[this$1.tabName]; })
          .filter(function (category, index, categories) { return categories.indexOf(category) === index; });
        // this.activeTab = uniqueCategories[0] // do not set the first category to active
        return uniqueCategories
      },
      categoryItems: function categoryItems () {
        var this$1 = this;

        return this.items
          .filter(function (item) { return item[this$1.tabName] === this$1.activeTab; })
      },
      hasNavigation: function hasNavigation () {
        return !!this.categories[0]
      }
    },
    methods: {
      makeActive: function makeActive (itemIndex) {
        this.activeQuestionIndex === itemIndex
          ? this.activeQuestionIndex = null
          : this.activeQuestionIndex = itemIndex;
      },
      generateButtonClasses: function generateButtonClasses (buttonIndex) {
        return [
          'accordion__toggle-button',
          this.activeQuestionIndex === buttonIndex
            ? 'accordion__toggle-button_active'
            : null
        ]
      },
      generateQuestionClasses: function generateQuestionClasses (questionIndex) {
        return [
          'accordion__title',
          this.activeQuestionIndex === questionIndex
            ? 'accordion__title_active'
            : null
        ]
      },
      toggleAccordion: function toggleAccordion (category) {
        var this$1 = this;

        this.activeTab = category;
        this.activeQuestionIndex = null;
        setTimeout( function () {
          this$1.showAccordion = !this$1.showAccordion;
        }, 300 );

      },
      makeActiveCategory: function makeActiveCategory (category) {
        // category clicked is active, show its accordion
        if (this.activeTab === category) { 
          this.showAccordion = false;
          this.activeTab = '';
          return
        } 
        // if category clicked not active (another one is active and showing its accordion), 
        // unshow other accordion and toggle to show this category accordion
        else { //( this.activeTab !== category) 
          this.showAccordion = false;
          this.toggleAccordion(category);
          return
        } 
        
      },
      generateCategoryClasses: function generateCategoryClasses (category) {
        return [
          'faq__nav-item',
          this.activeTab === category
            ? 'faq__nav-item_active'
            : null
        ]
      }
    },
    mounted: function mounted () {
      this.$refs.rootEl.style.setProperty('--active-color', this.activeColor);
      this.$refs.rootEl.style.setProperty('--border-color', this.borderColor);
      this.$refs.rootEl.style.setProperty('--font-color', this.fontColor);
    }
  }

  // Import vue component

  // install function executed by Vue.use()
  function install(Vue) {
  	if (install.installed) { return; }
  	install.installed = true;
  	Vue.component('VueFaqAccordion', component);
  }

  // Create module definition for Vue.use()
  var plugin = {
  	install: install,
  };

  // To auto-install when vue is found
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
  	GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
  	GlobalVue = global.Vue;
  }
  if (GlobalVue) {
  	GlobalVue.use(plugin);
  }

  // It's possible to expose named exports when writing components that can
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.install = install;
  exports.default = component;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
