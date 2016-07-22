# Bubbles-Canvas

> Include Library (In Header)

```HTML
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/canvasjs/1.7.0/canvasjs.min.js"></script>
```

> Include Java Scipt (End of Body)

```HTML
<script src="script.js"></script>
```

> HTML

```HTML
<section id="s_backgroundSection">
  <canvas id="canvas" name="bubble"></canvas>
</section>
```
> CSS

```CSS
  #s_backgroundSection {
    position: absolute;
    width: 100%;
    height: 100%;
    /* Double images background */
    /*background-image: url(../images/backgrond-top.png), url(../images/background-bottom.png);*/
    /* Solid background */
    background-color:#1e90ff;
    background-size: contain,cover;
    background-position: bottom,bottom;
    background-repeat: no-repeat,no-repeat;
    background-attachment: fixed;
  }
   //Pull background elements on bottm
  #s_backgroundSection #canvas {
    z-index: 0;
    max-width: 100%;
  }
  //Pull Other elements on top layer
  section,nav,footer {
    position:relative;
    z-index:1;
  }
```



