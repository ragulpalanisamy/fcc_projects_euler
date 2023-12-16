import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css";

export default function Mixins() {
    const codesnippet = `
    <style type='text/scss'>

  @mixin border-radius($radius){
    -webkit-border-radius:$radius;
    -moz-border-radius:$radius;
    -ms-border-radius:$radius;
    border-radius:$radius;
  }

  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>`;

const codesnippet1 = `<style type='text/scss'>

@mixin border-stroke($val) {
   @if $val == light {
   border: 1px solid black;
 }
 @else if $val == medium {
   border: 3px solid black ;
 }
 @else if $val == heavy {
   border: 6px solid black;
 }
 @else {
   border: none;
 }
}


 #box {
   width: 150px;
   height: 150px;
   background-color: red;
   @include border-stroke(medium);
 }
</style>

<div id="box"></div>`;

const codesnippet2 = `
<style type='text/scss'>

@for $j from 1 through 6 {
  .text-1 {
    font-size: 15px;
  }
   .text-2 {
    font-size: 30px;
  }
   .text-3 {
    font-size: 45px;
  }
   .text-4 {
    font-size: 60px;
  }
   .text-5 {
    font-size: 75px;
  }
}


</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>`;

const codesnippet3 = `
<style type='text/scss'>

@each $color in blue, black , red {
  .blue-bg {
    background-color: blue;
  }
  .black-bg {
    background-color: black;
  }
  .red-bg {
    background-color: red;
  }
}

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
`;

const codesnippet4 = `
<style type='text/scss'>

  $x: 1;
@while $x < 11 {
  .text-#{$x} { 
    font-size: 15px * $x;
  }
  $x: $x + 1;
}
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
`;

const codesnippet5 = `
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }

  .info-important {
    @extend .info;
    background-color : magenta;
  }



</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>`;
  return (
    <div>
        <DesignTypeScript />
        <h1>Create Reusable CSS with Mixins</h1>
        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>

        <h1>Use @if and @else to Add Logic To Your Styles</h1>
        <pre>
            <code>
                {codesnippet1}
            </code>
        </pre>

        <h1>Use @for to Create a Sass Loop</h1>
        <pre>
            <code>
                {codesnippet2}
            </code>
        </pre>

        <h1>Use @each to Map Over Items in a List</h1>
        <pre>
            <code>
                {codesnippet3}
            </code>
        </pre>

        <h1>Apply a Style Until a Condition is Met with @while</h1>
        <pre>
            <code>
                {codesnippet4}
            </code>
        </pre>

        <h1>Extend One Set of CSS Styles to Another Element</h1>
        <pre>
            <code>
                {codesnippet5}
            </code>
        </pre>
    </div>
  )
}
