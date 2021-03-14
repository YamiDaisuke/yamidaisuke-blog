/**
 * For the time being this will be our post data source, we are going
 * to move for a more dynamic option with a backend and HTML generation
 * from Markdown
 */
import PostModel from 'models/post';
import moment from 'moment';

const home: Array<PostModel> = [
    {
        title: 'Welcome!',
        tags: ['life'],
        createDate: moment('2021-03-12T15:00:00-03:00'),
        lastEdited: moment('2021-03-14T16:35:00-03:00'),
        status: 'published',
        body: `
        <p>
        Hello, and welcome to this humble blog!. You might be wondering why is this guy
        writing yet another blog tool?, why not use a well know option from out there?.
        Well let me tell you a story:
        </p>

        <p>
        Lately, I've been having fun implementing an Interpreter and Compiler
        in Swift following the great [books by "Thorsten Ball"](https://compilerbook.com)
        one key element in the book is a "Not taking shortcuts" and "Do it yourself"
        philosophy. I have learned a great deal by writing code in that way so I decided
        I want to do more projects like that, I don't expect this projects to be a
        commercial success but I expect to be a great success for my technical growth, it
        will be a good way for me to explore areas outside my comfort zone and my fulltime
        job.
        </p>
        <p>
        Is not that I think I can do better than all other great solutions out there
        is just I want to learn about how this solution solve the problems and I believe
        the best way to learn is by facing the same problems and work out a solution of my
        own.
        </p>
        <p>
        So I have started this project and will continue to work on my other ideas, which
        I'll be describing in another post, later on. But for all of these projects I will
        be following these principles:
        </p>

        <ul>
            <li>Apply TDD</li>
            <li>Document all the code</li>
            <li>Create CI/CD steps</li>
            <li>Use the least possible amount of external dependencies</li>
            <li>Have FUN!!!!</li>
        </ul>

        <p>
        Finally aside from the personal projects, I'll be developing to learn I'll look for
        opportunities to contribute to some open-source projects. I've been a develop
        for quite a while now and I never made the time to get involved in open source
        projects, so I'll look into some small contributions to get the hang of it and work
        my way up from there!.
        </p>

        <h6>
        P.S.: Sorry if my writing is not so good, I'll try to get better
        </h6>
        `,
    },
];

const data = {
    home,
};

export { home };
export default data;
