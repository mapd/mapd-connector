
describe('MapdCon Browser Tests', () => {
  require('./browser/getters-setters.spec.js');
  require('./browser/connect.spec.js');
  require('./browser/disconnect.spec.js');
  require('./browser/getServerStatus.spec.js');

  require('./browser/createFrontendView.spec.js'); // must be first for the following methods
  require('./browser/getFrontendViews.spec.js');
  require('./browser/getFrontendView.spec.js');
  require('./browser/deleteFrontendView.spec.js'); // must be last!

  require('./browser/createLink.spec.js');
  require('./browser/getLinkView.spec.js');
  require('./browser/getDatabases.spec.js');
  require('./browser/getFields.spec.js');
  require('./browser/getTables.spec.js');
  
});

