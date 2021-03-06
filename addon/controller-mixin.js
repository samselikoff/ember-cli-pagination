// Generated by CoffeeScript 1.7.1
import Ember from 'ember';
import Util from 'ember-cli-pagination/util';
var PageControllerMixin, c;

c = PageControllerMixin = Ember.Mixin.create({
  queryParams: ["page"],
  page: "1",
  pageChanged: (function() {
    var p;
    Util.log("PageControllerMixin#pageChanged");
    p = parseInt(this.get('page'));
    if (this.get('content') && this.get('content').setPage) {
      return this.get('content').setPage(p);
    }
  }).observes('page'),
  totalPagesBinding: "content.totalPages"
});

export default c;
