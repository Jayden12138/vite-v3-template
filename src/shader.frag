precision mediump float;
varying vec4 v_color;
void main() {
  gl_FragColor = vec4(v_color.r, v_color.g, v_color.b, 1);
}