// eslint-disable-next-line
import React, { useEffect, useRef, useContext } from 'react'
import { Context } from '../Context'

function Filters() {
  const filters = useRef()
  const context = useContext(Context)
  const { setBlur, setSepia, setVintage } = context

  const eventController = {
    sepia: setSepia,
    vintage: setVintage,
    blur: setBlur,
  }

  const setListeners = () => {
    filters.current
    .querySelectorAll('[name]')
    .forEach(input => {
      input.addEventListener('change', (evt) => {
        const [enabled, range] = evt.target.parentElement.querySelectorAll('input')
        const controllerName = evt.target.name.split('_')[0]
        eventController[controllerName]({
          checked: enabled.checked,
          range: range.value
        })
      })
    })
  }
  
  useEffect(() => {
    setListeners()
  }, [])

  return (
    <section className="filter">
      <div className="filter__controllers" ref={filters}>
        <h2 className="filter__title">Titulo</h2>
        <p className="filter__desc">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        <div className="filter__container">
          <label htmlFor="sepia_filter" className="filter__label">Sepia:</label>
          <input type="checkbox" name="sepia_filter" id="" className="filter__checkbox" />
          <label htmlFor="sepia_percentage" className="filter__label">Filter percentage:</label>
          <input type="range" name="sepia_percentage" id="" className="filter__range" />
        </div>
        <div className="filter__container">
          <label htmlFor="vintage_filter" className="filter__label">Vintage:</label>
          <input type="checkbox" name="vintage_filter" id="" className="filter__checkbox" />
          <label htmlFor="vintage_percentage" className="filter__label">Filter percentage:</label>
          <input type="range" name="vintage_percentage" id="" className="filter__range" />
        </div>
        <div className="filter__container">
          <label htmlFor="blur_filter" className="filter__label">Blur:</label>
          <input type="checkbox" name="blur_filter" id="" className="filter__checkbox" />
          <label htmlFor="blur_percentage" className="filter__label">Filter percentage:</label>
          <input type="range" name="blur_percentage" id="" className="filter__range" />
        </div>
      </div>
    </section>
  )
}

export default Filters;