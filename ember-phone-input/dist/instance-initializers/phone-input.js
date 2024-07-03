function initialize(appInstance) {
  const config = appInstance.resolveRegistration('config:environment');
  const lazyLoad = config?.phoneInput?.lazyLoad;
  if (!lazyLoad) {
    appInstance.lookup('service:phone-input').load();
  }
}
var phoneInput = {
  initialize
};

export { phoneInput as default, initialize };
//# sourceMappingURL=phone-input.js.map
