import React, { useState } from 'react';
import './post.scss';

type TagsProps = {
    tags: Array<string>;
    onTagClicked?: (index: number) => void;
};

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
    onTagClicked: () => {
        // no action
    },
};

export default Tags;
