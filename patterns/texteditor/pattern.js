
/* Text editor pattern
 *
 * Options:
 *    theme(string): Theme to use with editor. defaults to whatever it ships with. (null)
 *    mode(string): What type of syntax is it? ('text')
 *    width(integer): Width of the editor. (500)
 *    height(integer): Height of the editor. (200)
 *    tabSize(integer): TODO (4)
 *    softTabs(boolean): Use spaces for tabs. (true)
 *    wrapMode(boolean): Wrap text. (false)
 *    showGutter(boolean): TODO (true),
 *    showPrintMargin(boolean): Show print margin. (false)
 *    readOnly(boolean): Read only editor. (false)
 *
 * Documentation:
 *    # Default
 *
 *    {{ example-1 }}
 *
 *    # Different theme
 *
 *    {{ example-2 }}
 *
 *    # Different options
 *
 *    {{ example-3 }}
 *
 * Example: example-1
 *    <pre class="pat-texteditor" data-pat-texteditor="theme:clouds">
 *    foobar
 *    </pre>
 *
 * Example: example-2
 *    <pre class="pat-texteditor" data-pat-texteditor="mode:javascript;theme:dawn;">
 *    var foo = 'bar';
 *    function foobar() {
 *      return foo;
 *    }
 *    </pre>
 *
 * Example: example-3
 *    <pre class="pat-texteditor"
 *         data-pat-texteditor="mode:javascript;
 *                       theme:ambiance;
 *                       tabSize:2;
 *                       showGutter:false;
 *                       showPrintMargin:true;">
 *    var foo = 'bar';
 *    function foobar() {
 *      return foo;
 *    }
 *    </pre>
 *
 * License:
 *    Copyright (C) 2010 Plone Foundation
 *
 *    This program is free software; you can redistribute it and/or modify it
 *    under the terms of the GNU General Public License as published by the
 *    Free Software Foundation; either version 2 of the License.
 *
 *    This program is distributed in the hope that it will be useful, but
 *    WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General
 *    Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License along
 *    with this program; if not, write to the Free Software Foundation, Inc.,
 *    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */


define([
  'jquery',
  'mockup-patterns-base',
  'mockup-utils',
  'ace',
  'ace-theme-monokai',
  'ace-mode-text',
  'ace-mode-javascript',
  'ace-mode-css'
], function($, Base, utils) {
  'use strict';

  var AcePattern = Base.extend({
    name: 'texteditor',
    defaults: {
      theme: null,
      mode: 'text',
      width: 500,
      height: 200,
      tabSize: 4,
      softTabs: true,
      wrapMode: false,
      showGutter: true,
      showPrintMargin: false,
      readOnly: false
    },
    init: function() {
      var self = this;
      if (!window.ace){
        // XXX hack...
        // wait, try loading later
        setTimeout(function() {
          self.init();
        }, 200);
        return;
      }
      var ace = window.ace;

      // set id on current element
      var id = utils.setId(self.$el);
      self.$wrapper = $('<div/>').css({
        height: self.options.height + 25, // weird sizing issue here...
        width: self.options.width,
        position: 'relative'
      });
      self.$el.wrap(self.$wrapper);
      self.$el.css({
        width: self.options.width,
        height: self.options.height,
        position: 'absolute'
      });

      self.editor = ace.edit(id);
      if (self.options.theme) {
        self.setTheme(self.options.theme);
      }
      self.editor.getSession().setMode('ace/mode/' + self.options.mode);
      self.editor.getSession().setTabSize(parseInt(self.options.tabSize, 10));
      self.editor.getSession().setUseSoftTabs(utils.bool(self.options.softTabs));
      self.editor.getSession().setUseWrapMode(utils.bool(self.options.wrapMode));
      self.editor.renderer.setShowGutter(utils.bool(self.options.showGutter));
      self.editor.setShowPrintMargin(utils.bool(self.options.showPrintMargin));
      self.editor.setReadOnly(utils.bool(self.options.readOnly));
    },
    setSyntax: function(name)
    {
      var self = this;
      var modes = {
        'js': 'javascript',
        'txt': 'text',
        'css': 'css',
        'html': 'html',
        'xml': 'xml'
      };

      var extension = name.substr(name.lastIndexOf('.') + 1);
      var mode = modes[extension];

      if (mode !== undefined){
        self.editor.getSession().setMode('ace/mode/' + mode);
        return true;
      }
    },
    setTheme: function(theme) {
      var self = this;
      self.editor.setTheme('ace/theme/' + theme);
    },
    setText: function(data) {
      var self = this;
      self.editor.setValue(data);
    }
  });

  return AcePattern;

});