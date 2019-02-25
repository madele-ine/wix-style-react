import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';

import { eyesItInstance } from '../../test/utils/eyes-it';
import { numberInputTestkitFactory } from '../../testkit/protractor';
import { getTestStoryKind, Category } from '../../stories/storiesHierarchy';

describe('NumberInput', () => {
  const eyes = eyesItInstance();
  const kind = getTestStoryKind({
    category: Category.COMPONENTS,
    storyName: 'NumberInput',
  });

  eyes.it('should render NumberInput with veriations', async () => {
    const driver = numberInputTestkitFactory({ dataHook: 'wsr-input' });
    const url = createStoryUrl({
      kind,
      story: '1. NumberInput different states',
    });
    await browser.get(url);
    await waitForVisibilityOf(
      driver.element(),
      'Cannot find NumberInput component',
    );
  });
});
