import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import RichTextInputArea from './RichTextInputArea';
import richTextInputAreaPrivateDriverFactory from './RichTextInputArea.private.driver';

describe('RichTextInputArea', () => {
  const createDriver = createUniDriverFactory(
    richTextInputAreaPrivateDriverFactory,
  );

  describe('Editor', () => {
    it('should render the text when `value` prop is plain text', async () => {
      const text = 'Some text';
      const driver = createDriver(<RichTextInputArea value={text} />);

      expect(await driver.exists()).toBeTruthy();
      expect(await driver.getContent()).toBe(text);
    });

    it('should render the text when `value` prop contains HTML elements', async () => {
      const texts = ['Some', 'text'];
      const expectedText = texts.join(' ');
      const driver = createDriver(
        <RichTextInputArea
          value={`<p>${texts[0]} <strong>${texts[1]}</strong></p>`}
        />,
      );

      expect(await driver.exists()).toBeTruthy();
      expect(await driver.getContent()).toBe(expectedText);
    });

    it('should invoke `onChange` with parsed HTML value after typing text', async () => {
      const callback = jest.fn();
      const text = 'Some text';
      const expectedHtmlValue = `<p>${text}</p>\n`;
      const driver = createDriver(<RichTextInputArea onChange={callback} />);

      await driver.enterText(text);

      expect(callback).toHaveBeenCalledWith(expectedHtmlValue);
    });
  });

  describe('Toolbar', () => {
    it('should render all supported buttons', async () => {
      const buttons = [
        'bold',
        'italic',
        'underline',
        'link',
        'unordered-list-item',
        'ordered-list-item',
      ];
      const driver = createDriver(<RichTextInputArea />);

      expect(await driver.getButtonTypes()).toEqual(buttons);
    });

    it('should render text as bold after click the bold button', async () => {
      let currentValue;
      const driver = createDriver(
        <RichTextInputArea onChange={value => (currentValue = value)} />,
      );
      const typedText = 'Test';
      const expectedText = `<p><strong>${typedText}</strong></p>\n`;

      await driver.clickBoldButton();
      await driver.enterText(typedText);

      expect(currentValue).toBe(expectedText);
    });
  });
});
