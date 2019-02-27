import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import ReactTestUtils from 'react-dom/test-utils';

import richTextToolbarDriverFactory from './RichTextToolbar.driver';

const getTextArea = base => base.$('.public-DraftEditor-content');
const toolbarDriver = async base =>
  await richTextToolbarDriverFactory(
    base.$('[data-hook=richtextarea-toolbar]'),
  );

export default base => {
  return {
    ...baseUniDriverFactory(base),
    getButtonTypes: async () => (await toolbarDriver(base)).getButtonTypes(),
    getContent: () => base.text(),
    enterText: async text => {
      const textAreaNative = await getTextArea(base).getNative();

      if (base.type === 'react') {
        ReactTestUtils.Simulate.beforeInput(textAreaNative, { data: text });
      } else if (base.type === 'protractor') {
        textAreaNative.sendKeys(text);
      }
    },
  };
};
