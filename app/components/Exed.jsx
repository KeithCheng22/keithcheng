import React from 'react'

const Exed = ({studied, school, year, results}) => {
  return (
    <section className='px-10'>
        <h2 className='text-[1.5rem]'>{studied}</h2>
        <p className='-mt-5'>{year} / {school}</p>
        <p>{results}</p>
    </section>
  )
}

export default Exed