import forms from './forms';
import vocabularies from './vocabularies';

export default () => (configContext) => ({
  recordTypes: {
    place: {
      vocabularies,
      forms: forms(configContext),
    },
  },
});
