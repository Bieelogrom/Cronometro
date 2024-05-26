import { useEffect, useRef, useState } from 'react'
import { MainWrapper, BotoesWrapper, Botao, TempoWrapper } from './Estilos'
import { IoPlay, IoPause } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";

function App() {

  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [iniciado, setIniciado] = useState(false);

  useEffect(() => {
    let intervalo;
    if (iniciado) {
      intervalo = setInterval(() => {
        setSegundos((segundos) => segundos + 1)
      }, 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo)
  }, [iniciado])

  const iniciarCronometro = () => {
    setIniciado(true)
  }

  const pausarCronometro = () => {
    setIniciado(false)
  }

  const reiniciarCronometro = () => {
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
    setIniciado(false);
  }

  useEffect(() => {
    if(segundos === 60){
      setSegundos(0);
      setMinutos(minutos + 1)
    }

    if(minutos === 60){
      setMinutos(0);
      horas(minutos + 1)
    }
  }, [segundos, minutos, horas])

  return (
    <>
      <MainWrapper>
        <BotoesWrapper>
          <Botao onClick={iniciarCronometro}>
            <IoPlay />
            Iniciar
          </Botao>
          <Botao onClick={pausarCronometro}>
            <IoPause />
            Pausar
          </Botao>
          <Botao onClick={reiniciarCronometro}>
            <GrPowerReset />
            Reiniciar
          </Botao>
        </BotoesWrapper>
        <TempoWrapper>
          <p>{horas}</p>
          <p>:</p>
          <p>{minutos}</p>
          <p>:</p>
          <p>{segundos}</p>
        </TempoWrapper>
      </MainWrapper>
    </>
  )
}

export default App
