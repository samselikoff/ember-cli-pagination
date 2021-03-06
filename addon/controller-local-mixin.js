// Generated by CoffeeScript 1.7.1
import Ember from 'ember';
import Util from 'ember-cli-pagination/util';
var PageControllerMixin, c;

c = PageControllerMixin = Ember.Mixin.create({
  queryParams: ["page"],
  page: "1",
  pageChanged: (function() {
    var allLength, hasSetPage, p;
    p = parseInt(this.get('page'));
    allLength = this.get("content.length");
    hasSetPage = !!(this.get('content') && this.get('content').setPage);
    Util.log("ControllerLocalMixin#pageChanged page " + p + " allLength " + allLength + " hasSetPage " + hasSetPage);
    if (hasSetPage) {
      return this.get('content').setPage(p);
    } else {
      return Util.log("ControllerLocalMixin#pageChanged can't set page");
    }
  }).observes("page"),
  totalPagesBinding: "content.totalPages"
});

export default c;
