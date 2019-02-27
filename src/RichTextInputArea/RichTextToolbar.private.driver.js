import publicDriverFactory from './RichTextToolbar';

export default base => {
  const getButtons = () => base.$$(`[data-hook*="richtextarea-button"]`);
  const getButtonByType = type =>
    base.$(`[data-hook*="richtextarea-button-${type}"]`);

  return {
    ...publicDriverFactory(base),
    getButtonTypes: () =>
      getButtons().map(async button =>
        (await button.attr('data-hook')).replace(/^richtextarea-button-/, ''),
      ),
    clickBoldButton: () => getButtonByType('bold').click(),
    clickItalicButton: () => getButtonByType('italic').click(),
    clickUnderlineButton: () => getButtonByType('underline').click(),
    clickUnorderedListButton: () =>
      getButtonByType('unordered-list-item').click(),
    clickOrderedListButton: () => getButtonByType('ordered-list-item').click(),
  };
};
