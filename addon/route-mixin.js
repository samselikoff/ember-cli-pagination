// Generated by CoffeeScript 1.7.1
import Ember from 'ember';
import Util from 'ember-cli-pagination/util';
var PagedRemoteArray, c;

PagedRemoteArray = Ember.ArrayProxy.extend({
  page: 1,
  fetchContent: function() {
    var modelName, ops, page, perPage, res, store;
    Util.log("PagedRemoteArray#fetchContent");
    page = parseInt(this.get('page') || 1);
    perPage = parseInt(this.get('perPage'));
    store = this.get('store');
    modelName = this.get('modelName');
    ops = {
      page: page
    };
    if (perPage) {
      ops.per_page = perPage;
    }
    res = store.find(modelName, ops);
    res.then((function(_this) {
      return function(rows) {
        Util.log("PagedRemoteArray#fetchContent in res.then " + rows);
        return _this.set("meta", rows.meta);
      };
    })(this));
    return res;
  },
  content: (function() {
    return this.fetchContent();
  }).property("page"),
  totalPagesBinding: "meta.total_pages",
  setPage: function(page) {
    return this.set('page', page);
  }
});

c = Ember.Mixin.create({
  findPaged: function(name, params) {
    return PagedRemoteArray.create({
      page: params.page,
      perPage: params.perPage,
      modelName: name,
      store: this.store
    });
  }
});

export default c;
