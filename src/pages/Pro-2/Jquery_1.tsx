import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css"

export default function Jquery_1() {
    const codesnippet = `
    <script>
    $(document).ready(function() {
      $("#target1").css("color", "red");
      $("#target1").prop("disabled", true);
      $("#target4").remove();
      $("#target2").appendTo("#right-well");
      $("#target5").clone().appendTo("#left-well");
      $("#target1").parent().css("background-color", "red");
      $("#right-well").children().css("color", "orange");
  $(".target:nth-child(2)").addClass("animated bounce");
  
    });
  </script>
  
  <!-- Only change code above this line -->
  
  <div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
      <div class="col-xs-6">
        <h4>#left-well</h4>
        <div class="well" id="left-well">
          <button class="btn btn-default target" id="target1">#target1</button>
          <button class="btn btn-default target" id="target2">#target2</button>
          <button class="btn btn-default target" id="target3">#target3</button>
        </div>
      </div>
      <div class="col-xs-6">
        <h4>#right-well</h4>
        <div class="well" id="right-well">
          <button class="btn btn-default target" id="target4">#target4</button>
          <button class="btn btn-default target" id="target5">#target5</button>
          <button class="btn btn-default target" id="target6">#target6</button>
        </div>
      </div>
    </div>
  </div>
    `;

    const codesnippet2 = `
    <script>
    $(document).ready(function() {
      $("#target1").css("color", "red");
      $("#target1").prop("disabled", true);
      $("#target4").remove();
      $("#target2").appendTo("#right-well");
      $("#target5").clone().appendTo("#left-well");
      $("#target1").parent().css("background-color", "red");
      $("#right-well").children().css("color", "orange");
      $("#left-well").children().css("color", "green");
      $(".target:nth-child(2)").addClass("animated bounce");
      $(".target:even").addClass("animate shake")
    });
  </script>
  
  <!-- Only change code above this line -->
  
  <div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
      <div class="col-xs-6">
        <h4>#left-well</h4>
        <div class="well" id="left-well">
          <button class="btn btn-default target" id="target1">#target1</button>
          <button class="btn btn-default target" id="target2">#target2</button>
          <button class="btn btn-default target" id="target3">#target3</button>
        </div>
      </div>
      <div class="col-xs-6">
        <h4>#right-well</h4>
        <div class="well" id="right-well">
          <button class="btn btn-default target" id="target4">#target4</button>
          <button class="btn btn-default target" id="target5">#target5</button>
          <button class="btn btn-default target" id="target6">#target6</button>
        </div>
      </div>
    </div>
  </div> 
    `;
  return (
    <><div>
          <DesignTypeScript />
          <h1>Target a Specific Child of an Element Using jQuery</h1>
          <pre>
              <code>
                  {codesnippet}
              </code>
          </pre>

          {/* <!-- Only change code above this line -->
     */}
          <div className="container-fluid">
              <h3 className="text-primary text-center">jQuery Playground</h3>
              <div className="row">
                  <div className="col-xs-6">
                      <h4>#left-well</h4>
                      <div className="well" id="left-well">
                          <button className="btn btn-default target" id="target1">#target1</button>
                          <button className="btn btn-default target" id="target2">#target2</button>
                          <button className="btn btn-default target" id="target3">#target3</button>
                      </div>
                  </div>
                  <div className="col-xs-6">
                      <h4>#right-well</h4>
                      <div className="well" id="right-well">
                          <button className="btn btn-default target" id="target4">#target4</button>
                          <button className="btn btn-default target" id="target5">#target5</button>
                          <button className="btn btn-default target" id="target6">#target6</button>
                      </div>
                  </div>
              </div>
          </div>
      </div><h1>
      Target Even Elements Using jQuery
</h1>
     <pre>
        <code>
            {codesnippet2}
        </code>
     </pre>
</>
  )
}
