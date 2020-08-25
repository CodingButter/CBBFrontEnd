import React from "react"

const FilterInput = ({ setFilter }) => (
    <div id="message-filter">
        <input
            onChange={e => {
                setFilter(e.target.value)
            }}
        />
    </div>
)

export default FilterInput
