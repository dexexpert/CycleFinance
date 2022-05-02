import React, {FunctionComponent} from 'react';
import IRoute from '../Routes/IRoute';
import { Link } from 'react-router-dom';

type Props = {
  routes: IRoute[]
}

const SubRouteCard:FunctionComponent<Props> = (props: Props) => (
  <div className='hidden absolute w-40 flex-col top-8 py-2 bg-[#191a32] shadow-xl rounded-lg group-hover:flex z-50'>{
   props.routes.map((sub, i) => {
    return (
      <div key={i} className="hover:bg-[#3b3d76] w-full py-3 px-5">
        <Link to={sub.path===undefined?'/':sub.path} className=''>
          {sub.title}
        </Link>
      </div>
    )
  })}
  </div>
)

export default SubRouteCard;
