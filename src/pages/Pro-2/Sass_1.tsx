import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css";

export default function Sass_1() {
    const codesnippet=`
    <style type='text/scss'>
$text-color: red;

  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: $text-color;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
    `;

    const codesnippet1 = `<style type='text/scss'>
    .blog-post {
  
    h1 {
      text-align: center;
      color: blue;
    }
    p {
      font-size: 20px;
    }
    }
  </style>
  
  <div class="blog-post">
    <h1>Blog Title</h1>
    <p>This is a paragraph</p>
  </div>`;
  return (
    <div>
        <DesignTypeScript />
        <h1>SASS - Syntactical Advanced Styling System</h1>
        <p>
            Sass is a CSS pre-processor
        </p>
        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
        <h1>
        Nest CSS with Sass
        </h1>
        <pre>
            <code>
                {codesnippet1}
            </code>
        </pre>
    </div>
  )
}
