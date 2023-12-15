import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import '../../App/globals.css';

export default function Custom() {
//     <style>
  

//   h2 {
//     font-family: Lobster, Monospace;
//   }

  

//   .thick-green-border {
//     border-color: green;
//     border-width: 10px;
//     border-style: solid;
//     border-radius: 50%;
//   }

// </style>

  return (
    <div>
        <DesignTypeScript />
        {/* <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"> */}
<div className="container-fluid">
  <h2 className="text-primary text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img className="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."/></a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" className="img-responsive" alt="Three kittens running towards the camera." />
  <div className="row">
    <div className="col-xs-4">
      <button className="btn btn-block btn-primary">Like</button>
    </div>
    <div className="col-xs-4">
      <button className="btn btn-block btn-info">Info</button>
    </div>
    <div className="col-xs-4">
      <button className="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
    </div>
  )
}