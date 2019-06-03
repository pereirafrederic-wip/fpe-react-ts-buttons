// App external
import React, { memo } from 'react'
import Icon from '@mdi/react'
import {
  mdiCheck,
} from '@mdi/js'

import './Button.scss'



interface IButtonProps {
  label?: string
  icon?: string
}

const Button = memo(
  ({
    label, icon
  }: IButtonProps) => {

    return <button
      className={"Button"}
      type="button"
      tabIndex={-1}
    >
      <div className="Button__container-out">
      <div className="Button__container-in">
        <div className="Button__container__icon">
          <Icon className="mdi-icon" path={icon} />
        </div>
        <div className="Button__container__label">
        {label}</div>
      </div>
      </div>
    </button>
  }
)
ButtonValid = () => {
  return <Button icon={mdiCheck as string} label={'valid'}/>
}

export const ButtonValid;
export default Button
