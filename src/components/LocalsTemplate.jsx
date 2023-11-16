import React from 'react'

export const LocalsTemplate = ( {local} ) => {

    // console.log(local)

  return (
    <>

          <div className='container__lima__hamburguer'>
            <div className='hamburger__local'>
                {local.nombre_local}
            </div>
            <div className='hamburguer__local'>
                  {/* <h1> {localsBase.nombre_local}</h1> */}
                  {/* <h2> {localsBase.distritos[0].map(distrito => (
                            <p>{distrito.nombre_distrito}</p>
                    ))} </h2> */}
                  {local.distritos.map(distr => (
                      <>
                          <p className={`hamburger__district${distr.nombre_distrito === "" ? ' sinpading' : ''}`}>{distr.nombre_distrito}</p>
                          {distr.sedes.map(sede => (
                            <p className='hamburger__sede'><u>{sede}</u></p>
                          ))}
                      </>
                  ))}
            </div>
          </div>
    </>
  )
}
