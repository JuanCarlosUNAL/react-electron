import initStoryshots from '@storybook/addon-storyshots';
import {sep} from 'path';

const dirNameArray = __dirname.split(sep);
const moduleName = dirNameArray[dirNameArray.length - 2];
const storyName = moduleName.replace(/Screen/, '');

initStoryshots({
  storyKindRegex: storyName,
});
