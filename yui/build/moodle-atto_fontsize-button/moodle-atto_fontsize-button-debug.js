YUI.add('moodle-atto_fontsize-button', function (Y, NAME) {
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    atto_fontsize
 * @copyright  2014 Skylar Kelty <S.Kelty@kent.ac.uk>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * Atto text editor fontsize plugin.
 *
 * @namespace M.atto_fontsize
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

var sizes = [
        {
            name: '1 (8pt)',
            size: '8pt',
            spacing: '20px'
        }, {
            name: '2 (10pt)',
            size: '10pt',
            spacing: '25px'
        }, {
            name: '3 (12pt)',
            size: '12pt',
            spacing: '30px'
        }, {
            name: '4 (14pt)',
            size: '14pt',
            spacing: '35px'
        }, {
            name: '5 (18pt)',
            
            size: '18pt',
            spacing: '40px'
        }, {
            name: '6 (24pt)',
            size: '24pt',
            spacing: '45px'
        }, {
            name: '7 (36pt)',
            size: '36pt',
            spacing: '50px'
        }
    ];

Y.namespace('M.atto_fontsize').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    initializer: function() {
        var items = [];
        Y.Array.each(sizes, function(size) {
            items.push({
                text: '<div style="width: 200px; height: ' + size.spacing + '; line-height: ' + size.spacing + ' !important; font-size: ' +
                        size.size +
                        '">'+size.name+'</div>',
                callbackArgs: size.size,
                callback: this._changeStyle
            });
        });

        this.addToolbarMenu({
            icon: 'e/abbr',
            overlayWidth: '4',
            menucolor: '#333333',
            globalItemConfig: {
                callback: this._changeStyle
            },
            items: items
        });
    },

    /**
     * Change the font size to the specified size.
     *
     * @method _changeStyle
     * @param {EventFacade} e
     * @param {string} size The new font size
     * @private
     */
    _changeStyle: function(e, size) {
        this.get('host').formatSelectionInlineStyle({
            'font-size': size
        });
    }
});


}, '@VERSION@');
