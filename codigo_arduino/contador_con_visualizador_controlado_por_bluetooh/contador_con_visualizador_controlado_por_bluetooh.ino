/*
  MATRIZ PARA UN VISUALIZADOR DE SIETE SEGMENTOS DE ANODO COMUN
    0 -> ENCENDER el led respectibo del visualizador
    1 -> APAGAR el eld respectivo del visualizador
*/
byte numero[10][8] = {
  {0, 0, 0, 0, 0, 0, 1, 1}, //0
  {1, 0, 0, 1, 1, 1, 1, 1}, //1
  {0, 0, 1, 0, 0, 1, 0, 1}, //2
  {0, 0, 0, 0, 1, 1, 0, 1}, //3
  {1, 0, 0, 1, 1, 0, 0, 1}, //4
  {0, 1, 0, 0, 1, 0, 0, 1}, //5
  {0, 1, 0, 0, 0, 0, 0, 1}, //6
  {0, 0, 0, 1, 1, 1, 1, 1}, //7
  {0, 0, 0, 0, 0, 0, 0, 1}, //8
  {0, 0, 0, 0, 1, 0, 0, 1} //9
};
char dato = ' ';
byte contador = 0; // 0 - 9;

void setup()
{
  Serial.begin(38400);
  for(byte i = 4; i <= 10; i++) {
    pinMode(i, OUTPUT); 
  }
}

void loop()
{
  visualizarValorSieteSegmentos(contador);
  if(Serial.available()>0){
    dato = Serial.read();
    if(dato == '1'){
      if(contador == 9) {
        contador = 0;
      } else {
        contador++;
      }
    }
    Serial.print(contador);
  }
}

void visualizarValorSieteSegmentos(byte n) {
  for(byte i = 0; i < 8; i++) {
    digitalWrite(i+4, numero[n][i]);
  }
}
