import moment from 'moment';
import React from 'react';
import Tags from './tags';
import './post.scss';

type HeadProps = {
    /** The main title */
    title: string;
    /** The creation or publishing date of the content */
    date?: moment.Moment | Date;
    /** An array of string tags to display on this component */
    tags?: Array<string>;
    /**
     * This event will be fired when one of the tags is selected (clicked)
     * it will get as parameter the index of the selected tag
     *
     * @param {number} index: The selected (clicked) index from `tags` prop
     */
    onTagClicked?: (index: number) => void;
};

/**
 * Renders a header for a post, including title, publish date and tags
 *
 * @param {HeadProps} props: The props for this component
 * @returns The `React.ReactElement`
 */
function Head({
    title,
    date,
    tags,
    onTagClicked,
}: HeadProps): React.ReactElement {
    const momentDate = moment(date);

    return (
        <div className="head">
            <h1>{title}</h1>
            {date && (
                <h6 className="date">
                    {momentDate.format('DD-MM-YYYY HH:mm')}
                </h6>
            )}
            <Tags tags={tags || []} onTagClicked={onTagClicked} />
            <hr />
        </div>
    );
}

Head.defaultProps = {
    date: undefined,
    tags: [],
    /** Default tag clicked event listener */
    onTagClicked: () => {
        // no action
    },
};

export default Head;
