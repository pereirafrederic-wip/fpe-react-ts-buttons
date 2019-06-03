// App external
import React, { memo } from 'react'
import Icon from '@mdi/react'
import {
  mdiCheck,
} from '@mdi/js'



interface IButtonProps {
  label?: string
  icon?:string
}

const ButtonCbp = memo(
  ({
    label,icon
  }: IButtonProps) => {

return         <button
          className={"button"}
          disabled={true}
          type="button"
          tabIndex={-1}
        >
              <div className="button-container">
        <div className="icon-container"><Icon className="mdi-icon" path={icon} /></div>
        <div className="label">{"valid"}</div>
      </div>
        </button>
  }
)
ButtonValid =() => {
  return <ButtonCbp icon={mdiCheck as string} />
}

export const ButtonValid; 
export default ButtonCbp
