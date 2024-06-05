import React, { useState } from 'react'
import data from './data'

const Accordion = () => {

  const [selected, setSelected] = useState(null)

  function handleSingleSelection(getCurrentId){
    console.log(getCurrentId)
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  return (
    <div>
      <div>
        {
          data&& data.length > 0 ?
          data.map((dataItem) => (
            <div>
              <div onClick={() => handleSingleSelection(dataItem.id)}>
                <h3>{dataItem.question}</h3>
                {selected == dataItem.id ? (
                  <div>{dataItem.answer}</div>
                ) : null}
                <span>+</span>
              </div>
            </div>
          ))
          : <div>No data found</div>
        }
      </div>
    </div>
  )
}

export default Accordion