(function (global, $, _, undefined) {

  /*
  1. order of footnotes is determined by the location of <sup> tags in the document
  2. the text for each <sup> tag in the document should change to reflect its position
  3. the order of footnotes at the end should change to reflect the position of <sup> tags
  */

  $.fn.footnotes = function (options) {

    var $this = this;

    options = $.extend({
      superScript: '[#]',
      onOrdered: function () {}
    }, options || {});

    var superscripts = $('sup[data-for]');
    var footnotes = this.find('> [data-footnote]');
    this.find('> [data-footnote]').remove();

    superscripts.each(function (index, element) {
      var $element = $(element);
      var forId = $element.attr('data-for');
      var position = index + 1;

      /*
       * update the superscript text to reflect its
       * position in the document
       */
      var $link = $('<a></a>').attr('href', '#footnote' + position);
      $element.text(options.superScript.replace('#', position))
        .wrap($link);

      /*
       * reposition the footnote to reflect the ordinal
       * position of its superscript
       */
      var footnote = _.find(footnotes, function (f) {
        return f.getAttribute('data-footnote') === forId;
      });
      if (!footnote) return;
      footnote.insertAdjacentHTML('afterbegin', '<a name="footnote' + position + '" />');
      $this.append(footnote);
    });

    options.onOrdered.call(this);

    return this;
  };

}(this, jQuery, _, undefined));