import { b as _defineProperty } from '../_rollupPluginBabelHelpers-DxO3ZUDc.js';
import Service from '@ember/service';
import { resolve, all } from 'rsvp';

class PhoneInputService extends Service {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "intlTelInput", null);
  }
  async load() {
    if (this.intlTelInput) return resolve();
    return all([import('intl-tel-input'),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
    // @ts-ignore
    // We need to ignore ts and eslint here because intlTelUtils types are not exported which makes the default module untyped
    import('intl-tel-input/build/js/utils.js')]).then(([intlTelInput]) => {
      if (!this.isDestroying && !this.isDestroyed) {
        this.intlTelInput = intlTelInput.default;
      }
    });
  }
}

export { PhoneInputService as default };
//# sourceMappingURL=phone-input.js.map
