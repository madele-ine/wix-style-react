import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const getToolbar = base => base.$('[data-hook=richtextarea-toolbar]');

export default base => {
  return {
    ...baseUniDriverFactory(base),
  };
};
