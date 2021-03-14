import moment from 'moment';

/** Current publish status for a post */
type PostStatus = 'draft' | 'published';

/** A blog entry */
interface PostModel {
    title: string;
    /** Assigned tags for search and classification */
    tags: Array<string>;
    /** When was this blog create */
    createDate: moment.Moment | Date;
    /** When this blog changed from status 'draft' to 'published' */
    publishDate?: moment.Moment | Date;
    /** When was this post last modified */
    lastEdited?: moment.Moment | Date;
    /** The post body ready to display */
    body: string;
    /** The current post status */
    status: PostStatus;
}

export default PostModel;
