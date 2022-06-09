/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
// import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
// import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
// import Link from '@ckeditor/ckeditor5-link/src/link.js';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
// import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
// import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
// import Mention from '@ckeditor/ckeditor5-mention/src/mention';

export default class ClassicEditor extends ClassicEditorBase {}
// class InlineEditor extends InlineEditorBase {}

const builtinPlugins = [
	// Bold,
	Essentials,
	AutoformatPlugin,
	// Heading,
	// Italic,
	// Link,
	// Paragraph,
	// PasteFromOffice,
	// TextTransformation,
	// Mention
];

const defaultConfig = {
	// toolbar: {
	// 	items: [
	// 		'heading',
	// 		'|',
	// 		'bold',
	// 		'italic',
	// 		'link',
	// 		'|',
	// 		'undo',
	// 		'redo'
	// 	]
	// },
	language: 'en'
};

// Plugins to include in the build.
ClassicEditor.builtinPlugins = builtinPlugins;
// InlineEditor.builtinPlugins = builtinPlugins;

// Editor configuration.
ClassicEditor.defaultConfig = defaultConfig;
// InlineEditor.defaultConfig = defaultConfig;

// export default {
// 	ClassicEditor,
// 	InlineEditor
// };
