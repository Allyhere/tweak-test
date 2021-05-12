import React, { useState, useEffect, useContext } from 'react'
import { fabric } from 'fabric'
import { Context } from '../Context'

function ImageLoader() {
  const [canvas, setCanvas] = useState('')
  const filter = useContext(Context)

  const initCanvas = () => new fabric.Canvas('filterCanvas')
  useEffect(() => setCanvas(initCanvas()), [])

  useEffect(() => {
    onFilterChange(filter.filterState, canvas)
  }, [filter, canvas])
    
  
  const onFilterChange = (filter, canvas) => {
 
    canvas._objects?.length && 
    canvas._objects[0].filters.push(new fabric.Image.filters.Sepia({ opacity: 0.1 })) &&
    canvas._objects[0].applyFilters() &&
    canvas.renderAll()
  }
    
  const onImageChange = ({ target }) => {
    const imgURL = URL.createObjectURL(target.files[0])
    fabric.Image.fromURL(imgURL, (img) => canvas.add(img))
  }
  
  return (
    <section className="canvas">
      <canvas id="filterCanvas"></canvas>
      <label htmlFor="image-file" className="canvas__file-label sr-only">Insert image</label>
      <input
        type="file"
        name="image-file"
        className="canvas__file-field"
        onChange={onImageChange}
      />
    </section>
  )
}

export default ImageLoader;