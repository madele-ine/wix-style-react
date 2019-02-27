import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export default base => {
  const getButtons = () => base.$$(`[data-hook*="richtextarea-button"]`);

  return {
    ...baseUniDriverFactory(base),
    getButtonTypes: () =>
      getButtons().map(async button =>
        (await button.attr('data-hook')).replace(/^richtextarea-button-/, ''),
      ),
  };
};
