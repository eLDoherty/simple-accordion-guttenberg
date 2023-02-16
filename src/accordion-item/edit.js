/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {

	const {
		attributes: { title, content }, setAttributes
	} = props;

	const blockProps = useBlockProps({
		className: 'simple-accordion__wrapper--item ac'
	});

	return (
		<div {...blockProps}>
			<h2 class="ac-header">
				<button type="button" class="ac-trigger">
					<RichText 
						onChange={ (newTitle) => setAttributes({ title: newTitle }) }
						value={title}
						placeholder="Insert accordion title"
					/>
				</button>
			</h2>
			<div class="ac-panel">
				<RichText 
					tagName="p"
					onChange={ (newContent) => setAttributes({ content: newContent} ) }
					value={content}
					placeholder="Insert accordion content"
					className="ac-text"
				/>
			</div>
		</div>
	);
}
