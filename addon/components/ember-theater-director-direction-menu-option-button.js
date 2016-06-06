import Ember from 'ember';
import layout from '../templates/components/ember-theater-director-direction-menu-option-button';

const {
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  layout,

  classNameBindings: ['choice.class'],
  classNames: ['et-menu-option'],
  hook: 'menu_direction_option_button',
  tagName: 'button',

  iconComponent: computed('choice.iconFamily', {
    get() {
      return get(this, 'choice.iconFamily') || get(this, 'iconFamily');
    }
  }),

  click(...args) {
    this._super(...args);
    this.handleAction();
  },

  submit(...args) {
    this._super(...args);
    this.handleAction();
  },

  handleAction() {
    if (get(this, 'choice.inputable')) {
      this.attrs.toggleInput();
    } else {
      this.attrs.choose();
    }
  }
});
