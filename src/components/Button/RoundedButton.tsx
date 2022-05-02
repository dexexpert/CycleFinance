import React, {FunctionComponent} from 'react';

import Icons from '../Icons/index';

type Props = {
  title?: string,
  icon?: string,
  tooltip?: string,
  onlyBorder?: boolean,
  className?: string,
  disabled?: boolean,
  onClick?: () => void;
}

export const RoundedButton:FunctionComponent<Props> = (props: Props) => {
  const {title, icon, tooltip, onlyBorder, className, disabled, onClick} = props;
  return (
    <button
      disabled={disabled?true:false} 
      className={`inline-block py-1 px-6 rounded-full transition-all text-base
        ${className?className:''}
        ${disabled?'':' cursor-pointer'}
        ${!disabled?(onlyBorder?' border border-[#FAB801] text-[#FAB801] hover:text-black hover:bg-[#FAB801]':'bg-[#FAB801] hover:bg-[#E45C5A] text-[#f2f2f2]'):' bg-[#FAB801] opacity-70'}`}>
      {title?title:<></>}
      {icon?<Icons type={icon} />:<></>}
      {tooltip?
        <div data-tooltip-target="tooltip-default" id="tooltip-default" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
            {tooltip}
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      :<></>}
    </button>
)
}

