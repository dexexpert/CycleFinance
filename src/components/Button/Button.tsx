import React, {FunctionComponent} from 'react';
import { Link } from 'react-router-dom';

import Icons from '../Icons/index';

type Props = {
  title?: string,
  icon?: string,
  tooltip?: string,
  onClick?: () => void;
}

export const Button:FunctionComponent<Props> = (props: Props) => (<div>
  <div className=' inline-block py-2 px-5 bg-[#FAB801] rounded-lg text-[#f2f2f2] transition-all hover:bg-[#E45C5A] cursor-pointer text-base'>
    {props.title?props.title:<></>}
    {props.icon?<Icons type={props.icon} />:<></>}
    {props.tooltip?
      <div data-tooltip-target="tooltip-default" id="tooltip-default" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
          {props.tooltip}
          <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    :<></>}
  </div>
  </div>
)

