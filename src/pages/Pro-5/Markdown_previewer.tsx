import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'

export default function Markdown_previewer() {
    const codesnippet = `
    <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>

<div id="app"></div>
    `;

    const codesnippet1 = `
    @import url('https://fonts.googleapis.com/css?family=Russo+One');
$darkAccent: #224b4b;
$lightAccent: #2cda9d;
$backgroundBase: #619e9e;

$shadow: 1px 1px 10px 2px darken($backgroundBase, 20%);
$default-border: 1px solid darken($backgroundBase, 35%);

* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background: lighten($backgroundBase, 12%);
  margin: 10px 0;
}

.colorScheme {
  background-color: lighten($backgroundBase, 30%);
  border: $default-border;
  box-shadow: $shadow;
  border-top: none;
}

.toolbar {
  display: flex;
  align-items: center;
  background-color: lighten($darkAccent, 25%);
  padding: 0.3rem;
  border: $default-border;
  box-shadow: $shadow;
  font-family: Russo One;
  font-size: 1rem;
  color: black;
  i {
    width: 25px;
    margin-left: 5px;
  }
  .fa-arrows-alt,
  .fa-compress {
    margin-left: auto;
  }
}

.fa-retweet,
.fa-compress,
.fa-arrows-alt {
  &:hover {
    color: lighten($lightAccent, 10%);
    cursor: pointer;
  }
}

.fa-free-code-camp {
  margin-right: 3px;
}

.editorWrap {
  max-width: 600px;
  margin: 1.125rem auto;
  .toolbar {
    width: 99%;
  }
  textarea {
    @extend .colorScheme;
    width: 99%;
    min-height: 200px;
    margin-bottom: -5px;
    resize: vertical;
    outline: none;
    padding-left: 5px;
    padding-top: 5px;
    font-size: 0.875rem;
  }
}

.converter {
  width: 100px;
  text-align: center;
  font-size: 35px;
  margin: auto;
}

.previewWrap {
  @extend .colorScheme;
  max-width: 800px;
  margin: 1.25rem auto;
  min-height: 200px;
  overflow-wrap: break-word;
}

@media screen and (max-width: 850px) {
  .previewWrap {
    max-width: 630px;
  }
  .editorWrap {
    max-width: 550px;
  }
}

.maximized {
  width: 96%;
  min-height: 100vh;
  margin: auto;
  textarea {
    min-height: 95vh;
    resize: none;
  }
}

.hide {
  display: none;
}

@media screen and (max-width: 650px) {
  body {
    margin: 5px 0;
  }
  .editorWrap {
    width: 80vw;
    margin: 0 auto;
  }
  .maximized {
    width: 95%;
    margin: auto;
  }
  .previewWrap {
    width: 90vw;
  }
}

// MARKDOWN STYLES
#preview {
  padding: 0 1rem;

  blockquote {
    border-left: 3px solid #224b4b;
    color: #224b4b;
    padding-left: 5px;
    margin-left: 25px;
  }

  > p > code {
    padding: 3px;
  }

  code {
    background: white;
    font-size: 0.875rem;
    font-weight: bold;
  }

  pre {
    display: block;
    overflow: auto;
    background: white;
    padding: 5px;
    line-height: 1.2;
  }

  h1 {
    border-bottom: 2px solid $darkAccent;
  }

  h2 {
    border-bottom: 1px solid $darkAccent;
  }

  table {
    border-collapse: collapse;
  }

  td,
  th {
    border: 2px solid $darkAccent;
    padding-left: 5px;
    padding-right: 5px;
  }

  img {
    display: block;
    max-width: 90%;
    margin: 2rem auto;
  }
}

@media screen and (max-width: 420px) {
  body {
    font-size: 0.875rem;
  }
}

    `;

    const codesnippet2 = `
    /* globals marked, Prism, React, ReactDOM */
/* eslint-disable react/prop-types, no-nested-ternary */

// View a more complex version of this project with custom toolbar here:
// https://codepen.io/no_stack_dub_sack/pen/JbPZvm?editors=0110

// coded by @no-stack-dub-sack (github) / @no_stack_sub_sack (Codepen)

// eslint-disable-next-line no-unused-vars
const projectName = 'markdown-previewer';

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

// INSERTS target="_blank" INTO HREF TAGS (required for Codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  handleEditorMaximize() {
    this.setState({
      editorMaximized: !this.state.editorMaximized
    });
  }
  handlePreviewMaximize() {
    this.setState({
      previewMaximized: !this.state.previewMaximized
    });
  }
  render() {
    const classes = this.state.editorMaximized
      ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
      : this.state.previewMaximized
      ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
      : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];
    return (
      <div>
        <div className={classes[0]}>
          <Toolbar
            icon={classes[2]}
            onClick={this.handleEditorMaximize}
            text="Editor"
          />
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        </div>
        <div className="converter" />
        <div className={classes[1]}>
          <Toolbar
            icon={classes[2]}
            onClick={this.handlePreviewMaximize}
            text="Previewer"
          />
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

const Toolbar = (props) => {
  return (
    <div className="toolbar">
      <i className="fa fa-free-code-camp" title="no-stack-dub-sack" />
      {props.text}
      <i className={props.icon} onClick={props.onClick} />
    </div>
  );
};

const Editor = (props) => {
  return (
    <textarea
      id="editor"
      onChange={props.onChange}
      type="text"
      value={props.markdown}
    />
  );
};

const Preview = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer })
      }}
      id="preview"
    />
  );
};

const placeholder = # Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
;

ReactDOM.render(<App />, document.getElementById('app'));

    `;
  return (
    <div>
        <DesignTypeScript />

        <h1>
        Simple React Markdown Previewer
        </h1>

        <pre>
            <code>{codesnippet}</code>
        </pre>

        <h1>
            CSS
        </h1>

        <pre>
            <code>
                {codesnippet1}
            </code>
        </pre>

        <h1>javascript</h1>

        <pre>
            <code>
                {codesnippet2}
            </code>
        </pre>
    </div>
  )
}
