import React from "./node_modules/react"

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
