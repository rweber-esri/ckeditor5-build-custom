/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';

export default class ClassicEditor extends ClassicEditorBase {}

const builtinPlugins = [
	Essentials,
	Paragraph,
	TextTransformation
];

const defaultConfig = {
	language: 'en'
};

// Plugins to include in the build.
ClassicEditor.builtinPlugins = builtinPlugins;

// Editor configuration.
ClassicEditor.defaultConfig = defaultConfig;
