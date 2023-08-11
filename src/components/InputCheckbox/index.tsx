import classNames from "classnames"
import { useRef, useState } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`);
  const [checkedValue, setCheckedValue] = useState(checked);

  const onClickCheckbox = () => {
    setCheckedValue(!checked);
    onChange(!checked);
  }


  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checkedValue,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checkedValue}
        disabled={disabled}
        onChange={() => onClickCheckbox()}
      />
    </div>
  )
}
