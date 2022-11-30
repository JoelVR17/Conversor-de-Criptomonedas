import styled from '@emotion/styled'

const Contenedor = styled.div `
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 30px;
`

const Texto = styled.p `
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Imagen = styled.img `
    display: block;
    width: 120px;
`

const Precio = styled.p `
    font-size: 25px;
    span {
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`}/>
            <div>
                <Precio>El Precio es de: <span>{ PRICE }</span></Precio>
                <Texto>Precio más Alto del día: <span>{ HIGHDAY }</span></Texto>
                <Texto>Precio más Bajo del día: <span>{ LOWDAY }</span></Texto>
                <Texto>Variación Últimas 24 horas: <span>{ CHANGEPCT24HOUR }</span></Texto>
                <Texto>Última Actualización: <span>{ LASTUPDATE }</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado