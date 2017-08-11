## programação criativa, SESC Santana, São Paulo, de 20/04/17 a 13/07/17
<hr>

### Participantes:

### Arthur Medeiros Pescuma

### Lilia Chou

### Linda Chou

### Tiago Pessoa

### Vinícius Juliane Pereira

### Fernanda Fernandes

### Mary Morita

### Rodrigo Bruno

[Processing de aprendizado](http://rodrigobruno.com/processing/)

### Juliana Harrison Henno
![ju](https://github.com/arteprog/arteprog.github.io/blob/master/assets/images/henno.jpg?raw=true)

Juliana apresentando o código Sensor ultrassônico:

```java
import processing.serial.*;
Serial myPort;        // The serial port
int xPos = 1;         //We declare a variable of integers, horizontal position of the graph
float inByte = 0;    //We declare a variable with decimal numbers

void setup () {
  size(600, 300);
  myPort = new Serial(this, Serial.list()[2], 9600);   // println(Serial.list());
  myPort.bufferUntil('\n');   // Establishes a specific byte to buffer before calling up serialEvent
  background(150);
}

void draw () {
  stroke(255);   // draw the line, stroke is the colour and line:
  line(xPos, height, xPos, height - inByte);

  if (xPos >= width) { // at the edge of the screen, go back to the beginning:
    xPos = 0;
    background(150);
  } else {
    xPos++;    // increment the horizontal position:
  }
}

void serialEvent (Serial myPort) {
  String inString = myPort.readStringUntil('\n');   // get the ASCII string:
  if (inString != null) {
    inString = trim(inString);     // trim off any whitespace:
    inByte = float(inString);    // convert to an int and map to the screen height:
    println(inByte);
    inByte = map(inByte, 0, 30, 0, height);
  }
}
```

<script src="../footer.js"></script>


