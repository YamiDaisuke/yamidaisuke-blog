import React, { useState } from 'react';
import './post.scss';

type TagsProps = {
    /** An array of string tags to display on this component */
    tags: Array<string>;
    /**
     * This event will be fired when one of the tags is selected (clicked)
     * it will get as parameter the index of the selected tag
     *
     * @param {number} index: The selected (clicked) index from `tags` prop
     */
    onTagClicked?: (index: number) => void;
};

/**
 * Renders a list of strings to be used as tags of the content, each string
 * the vales are displayed in a fluent left-to-right way starting from
 * the top left corner of the component
 * @param {TagsProps} props: The props for this component
 * @returns The `React.ReactElement`
 */
function Tags({ tags, onTagClicked }: TagsProps): React.ReactElement {
    const [selectedIndex, changeSelectedIndex] = useState(-1);

    const tagsElements = tags.map(
        (t, index): React.ReactElement => {
            return (
                <li
                    key={t}
                    role="option"
                    aria-selected={selectedIndex === index}
                    className="tag"
                    onClick={() => {
                        changeSelectedIndex(index);
                        onTagClicked?.(index);
                    }}
                    onKeyDown={() => {
                        changeSelectedIndex(index);
                        onTagClicked?.(index);
                    }}
                >
                    {t}
                </li>
            );
        }
    );

    return <div className="tags-container">{tagsElements}</div>;
}

Tags.defaultProps = {
    /** Default empty event listener */
    onTagClicked: () => {
        // no action
    },
};

export default Tags;
