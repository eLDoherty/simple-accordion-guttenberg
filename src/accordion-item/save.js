/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {

	const {
		attributes: { title, content }
	} = props;

	const blockProps = useBlockProps.save({ 
		className: 'simple-accordion__wrapper--item ac'
	});

	return (
		<div {...blockProps}>
			<h2 className="ac-header">
				<button type="button" className="ac-trigger">{title}</button>
				<span className="open-accordion"></span>
				<span className="close-accordion"></span>
			</h2>
			<div className="ac-panel">
				<p className="ac-text">{content}</p>
			</div>
		</div>
	);
}
