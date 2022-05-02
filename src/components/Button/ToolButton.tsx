import React, {FC} from 'react';
import { Link } from 'react-router-dom';

import Icons from '../Icons/index';

interface IToolButton {
  title?: string,
  icon?: string,
  tooltip?: string,
}


type Props = {
  buttonProps: IToolButton[],
  onClick?: () => void;
}

export const ToolButton:FC<Props> = (props: Props) => (

  <div className='flex flex-row' onClick={props.onClick}>{
   props.buttonProps.map((btn, i) => {
    return (
     <div 
      key={i}
      className={
        (props.buttonProps.length === 1?'rounded-xl': 
          (i !== 0)?
          (i === props.buttonProps.length-1? 'rounded-r-xl':''):
            'rounded-l-xl') + ' p-2 h-10 border border-[#3b3d76] bg-[#2a2c54] color-[#f2f2f2] transition-all hover:bg-[#2a2c54] cursor-pointer text-base'}>
          {btn.title?btn.title:<></>}
          {btn.icon?<Icons type={btn.icon} />:<></>}
          {btn.tooltip?
            <div data-tooltip-target="tooltip-default" id="tooltip-default" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-xl shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                {btn.tooltip}
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          :<></>}
     </div>
    )
  })}
  </div>
)

