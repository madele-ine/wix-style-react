import { createTestStoryUrl } from '../../test/utils/storybook-helpers';

import { eyesItInstance } from '../../test/utils/eyes-it';
import {
  storySettings,
  testStories,
} from '../../stories/NumberInput/storySettings';

describe('NumberInput', () => {
  const eyes = eyesItInstance();

  eyes.it('should render NumberInput with variations', async () => {
    const testStoryUrl = testName =>
      createTestStoryUrl({ ...storySettings, testName });

    const checkTestStory = async testName => {
      await browser.get(testStoryUrl(testName));
      await eyes.checkWindow(testName);
    };
    eyes.it('should render a box that contains multiple boxes', async () => {
      await checkTestStory(testStories.numberInputVariations);
    });
  });
});
