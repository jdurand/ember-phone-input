import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty, b as _defineProperty } from '../_rollupPluginBabelHelpers-DxO3ZUDc.js';
import { action } from '@ember/object';
import { assert } from '@ember/debug';
import { inject } from '@ember/service';
import { isPresent } from '@ember/utils';
import Component from '@glimmer/component';
import 'intl-tel-input/build/css/intlTelInput.css';
import '../styles/styles.css';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<input\n  disabled={{this.disabled}}\n  required={{this.required}}\n  autocomplete={{this.autocomplete}}\n  ...attributes\n  {{on \'input\' this.onInput}}\n  {{did-insert this.onDidInsert}}\n  {{did-update this.onDidUpdate @country @number}}\n  {{will-destroy this.onDestroy}}\n  data-test-loading-iti={{this.isLoadingIntlTelInput}}\n  type={{this.type}}\n/>");

var _class, _descriptor;
/**
  A phone-input component. Usage:
  ```hbs
    <PhoneInput
      allowDropdown=false
      autoPlaceholder='aggressive'
      customPlaceholder='Enter phone number'
      disabled=true
      required=required
      autocomplete=autocomplete
      initialCountry='fr'
      number='123'
      onlyCountries=europeanCountries
      preferredCountries=englishSpeakingCountries
      separateDialCode=true
      intlTelInputOptions=(hash strictMode=true)
      onInitialize=(action 'handleInit')
      update=(action 'handleUpdate')
    />
  ```

  @class PhoneInput
  @public
*/
let PhoneInputComponent = (_class = class PhoneInputComponent extends Component {
  constructor(owner, args) {
    super(owner, args);

    /**
     * You can implement this function to retrieve the phoneInput instance
     * @argument onInitialize
     * @param {PhoneInputComponent} reference to the phoneInput instance
     */
    _initializerDefineProperty(this, "phoneInput", _descriptor, this);
    _defineProperty(this, "isLoadingIntlTelInput", false);
    _defineProperty(this, "type", 'tel');
    _defineProperty(this, "onInitialize", void 0);
    _defineProperty(this, "update", void 0);
    _defineProperty(this, "intlTelInputInstance", null);
    this.onInitialize = this.args.onInitialize || function () {};

    /**
     * You have to implement this function to update the `number`.
     * @argument update
     * @param {string} number The international phoneNumber
     * @param {Object} metadata The phoneNumber metadata
     * @param {string} metadata.extension The extension part of the current number, so if the number was '+1 (702) 123-1234 ext. 12345' this would return '12345'.
     * @param {Object} metadata.selectedCountryData The country data for the currently selected flag.
     * @param {boolean} metadata.isValidNumber The validity of the current `phoneNumber`.
     */

    this.update = this.args.update || function () {};
    if (this.customPlaceholder) {
      assert('`customPlaceholder` must be of type string', typeof this.customPlaceholder === 'string');
    }
    const validAutoPlaceholder = ['polite', 'aggressive', 'off', undefined].includes(this.autoPlaceholder);
    assert("`autoPlaceholder` possible values are 'polite', 'aggressive' and 'off'", validAutoPlaceholder);
    if (this.intlTelInputOptions) {
      assert('`intlTelInputOptions` must be of type string', typeof this.intlTelInputOptions === 'object');
    }
  }

  /**
   * It will force the selected country. Set the country by it's country code.
   * Useful if you want to provide the component with a country, instead of
   * using the built-in country dropdown.
   * Defaults to ''.
   * @argument country
   * @type {string}
   */
  get country() {
    return this.args.country || '';
  }

  /**
   * The international phone number. This is the main data supposed
   * to be persisted / handled.
   * @argument number
   * @type {string|null}
   */
  get number() {
    return this.args.number || null;
  }

  /**
   * Setting this to true will disable the input and the country dropdown.
   * Defaults to `false`
   * @argument disabled
   * @type {boolean}
   */
  get disabled() {
    return this.args.disabled || false;
  }

  /**
   * Setting this to true will make the input field required. This will enable client side form validation.
   * Defaults to `false`
   * @argument required
   * @type {boolean}
   */
  get required() {
    return this.args.required || false;
  }

  /**
   * `autocomplete` attribute on input field. Can be used to support browser autocompletion.
   * Defaults to `null`
   * @argument autocomplete
   * @type {string|null}
   */
  get autocomplete() {
    return this.args.autocomplete || null;
  }

  /**
   * Whether or not to allow the dropdown. If disabled, there is no dropdown arrow, and the selected flag is not clickable. Also we display the selected flag on the right instead because it is just a marker of state.
   * @argument allowDropdown
   * @type {boolean}
   */
  get allowDropdown() {
    return isPresent(this.args.allowDropdown) ? this.args.allowDropdown : true;
  }

  /**
   * Add or remove input placeholder with an example number for the selected
   * country. Possible values are 'polite', 'aggressive' and 'off'. Defaults to
   * 'polite'.
   * @argument autoPlaceholder
   * @type {'aggressive' | 'off' | 'polite' | undefined}
   */

  get autoPlaceholder() {
    return this.args.autoPlaceholder || 'polite';
  }

  /**
   * Replace the auto placeholder with a custom placeholder.
   * If defined, must return a string. Defaults to null.
   * @argument customPlaceholder
   * @type {string|null}
   */
  get customPlaceholder() {
    return this.args.customPlaceholder || null;
  }

  /**
   * It will just be the first country in the list. Set the initial country by
   * its country code. Defaults to ''.
   * @argument initialCountry
   * @type {string}
   */
  get initialCountry() {
    return this.args.initialCountry || '';
  }

  /**
   * Display only the countries you specify -
   * [see example](http://jackocnr.com/lib/intl-tel-input/examples/gen/only-countries-europe.html).
   * @argument onlyCountries
   * @type {Array}
   */

  get onlyCountries() {
    return this.args.onlyCountries || Array();
  }

  /**
   * Specify the countries to appear at the top of the list.
   * @argument preferredCountries
   * @type {Array}
   */
  get preferredCountries() {
    return this.args.preferredCountries || ['us', 'gb'];
  }

  /**
   * Display the country dial code next to the selected flag so it's not part of the typed number
   * @argument separateDialCode
   * @type {boolean}
   */
  get separateDialCode() {
    return this.args.separateDialCode || false;
  }

  /**
   * Pass in options directly to intlTelInput.
   * Defaults to null.
   * @argument intlTelInputOptions
   * @type {object|null}
   */
  get intlTelInputOptions() {
    return this.args.intlTelInputOptions || null;
  }
  onInput(event) {
    const internationalPhoneNumber = this.intlTelInputInstance?.getNumber() ?? (event?.target).value;
    const meta = this.metaData(this.intlTelInputInstance);
    this.update(internationalPhoneNumber, meta);
    return true;
  }
  onDidUpdate() {
    this.formatNumber();
  }
  onDidInsert(element) {
    this.loadAndSetup(element);
  }
  onDestroy(element) {
    this.intlTelInputInstance?.destroy();
    element.removeEventListener('countrychange', this.onCountryChange);
  }
  async loadAndSetup(element) {
    try {
      this.isLoadingIntlTelInput = true;
      await this.phoneInput.load();

      // Even if the above promise resolves, it might be at the end of the
      // component lifecycle
      if (this.isDestroying || this.isDestroyed) {
        return;
      }
      this.setupLibrary(element);
      this.formatNumber();
      element.addEventListener('countrychange', this.onCountryChange.bind(this));
    } catch (error) {
      this.args.onError?.(error);
    } finally {
      if (!this.isDestroying && !this.isDestroyed) {
        this.isLoadingIntlTelInput = false;
      }
    }
  }
  formatNumber() {
    if (!this.intlTelInputInstance) {
      return;
    }
    if (this.country) {
      this.intlTelInputInstance.setCountry(this.country);
    }
    if (this.number) {
      this.intlTelInputInstance.setNumber(this.number);
    }
  }
  setupLibrary(element) {
    if (!this.phoneInput.intlTelInput) {
      return;
    }
    const {
      allowDropdown,
      autoPlaceholder,
      customPlaceholder,
      initialCountry,
      onlyCountries,
      preferredCountries,
      separateDialCode,
      intlTelInputOptions
    } = this;
    let options = {
      autoInsertDialCode: false,
      nationalMode: true,
      allowDropdown,
      autoPlaceholder,
      initialCountry,
      onlyCountries,
      preferredCountries,
      separateDialCode
    };
    if (customPlaceholder) {
      options.customPlaceholder = () => customPlaceholder;
    }
    if (intlTelInputOptions) {
      options = {
        ...options,
        ...intlTelInputOptions
      };
    }
    const intlTelInputInstance = this.phoneInput.intlTelInput(element, options);
    if (this.number) {
      intlTelInputInstance.setNumber(this.number);
    }
    this.intlTelInputInstance = intlTelInputInstance;
    if (this.initialCountry) {
      this.intlTelInputInstance.setCountry(this.initialCountry);
    }
    this.onInitialize(this);
    this.update(this.number, this.metaData(intlTelInputInstance));
  }
  metaData(intlTelInputPlugin) {
    if (!intlTelInputPlugin) {
      // Libraries may rely on always receiving an object
      return {};
    }
    const extension = intlTelInputPlugin.getExtension();
    const selectedCountryData = intlTelInputPlugin.getSelectedCountryData();
    const isValidNumber = intlTelInputPlugin.isValidNumber();
    const E164 = intlTelInputPlugin.getNumber(intlTelInputUtils.numberFormat.E164);
    const INTERNATIONAL = intlTelInputPlugin.getNumber(intlTelInputUtils.numberFormat.INTERNATIONAL);
    const NATIONAL = intlTelInputPlugin.getNumber(intlTelInputUtils.numberFormat.NATIONAL);
    const RFC3966 = intlTelInputPlugin.getNumber(intlTelInputUtils.numberFormat.RFC3966);
    return {
      extension,
      selectedCountryData,
      isValidNumber,
      numberFormat: isValidNumber ? {
        E164,
        INTERNATIONAL,
        NATIONAL,
        RFC3966
      } : null
    };
  }
  onCountryChange() {
    const selectedCountry = this.intlTelInputInstance?.getSelectedCountryData();
    if (selectedCountry?.iso2) {
      this.intlTelInputInstance?.setCountry(selectedCountry.iso2);
    }
    this.onInput();
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "phoneInput", [inject], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "onInput", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onInput"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onDidUpdate", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onDidUpdate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onDidInsert", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onDidInsert"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onDestroy", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onDestroy"), _class.prototype)), _class);
setComponentTemplate(TEMPLATE, PhoneInputComponent);

export { PhoneInputComponent as default };
//# sourceMappingURL=phone-input.js.map
