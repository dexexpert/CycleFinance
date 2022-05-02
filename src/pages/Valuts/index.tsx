import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import {useTheme} from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';

import { CustomPage } from '../../components/Page'
import PageHeader from '../../components/Page/Header';
import { Board } from '../../components/Board';
import ValutCard, {IValutsCard} from './ValutsCard';

interface State {
  search: string;
  valutType: string;
  myValut: boolean;
  protocols: string[];
}

interface IProtocol {
  img: string;
  protocol: string;
}

export const protocols: IProtocol[] = [
  {img:`${process.env.PUBLIC_URL}/img/pangolin.jpg`, protocol: 'Pangolin'},
  {img:`${process.env.PUBLIC_URL}/img/avaware.png`, protocol: 'Avaware'},
  {img:`${process.env.PUBLIC_URL}/img/traderjoe.png`, protocol: 'Trader Joe'},
  {img:`${process.env.PUBLIC_URL}/img/olive.png`, protocol: 'Olive Cash'},
  {img:`${process.env.PUBLIC_URL}/img/blue1.png`, protocol: 'Tip Blue'},
  {img:`${process.env.PUBLIC_URL}/img/lydia.png`, protocol: 'Lydia'},
]

export const valutTypes = [
  'All',
  'Single Staking',
  'Stables',
  'LP Tokens',
  'CYCLE Valuts',
]

const ValutCards:IValutsCard[] = [
  {
    protocol: 3,
    valutType: [3],
    pair: 'AVAX/WETH.e',
    lp: 'JLP',
    payment: 0,
    farmLink: 'https://analytics.traderjoexyz.com/pairs/0xfe15c2695f1f920da45c30aae47d11de51007af9',
  },
  {
    protocol: 2,
    valutType: [3],
    pair: 'AVAX/AVE',
    lp: 'PGL',
    payment: 0,
    farmLink: 'https://info.pangolin.exchange/#/pair/0x62a2f206cc78babac9db4dbc0c9923d4fddef047',
  },
  {
    protocol: 5,
    valutType: [3],
    pair: 'AVAX/AVE',
    lp: 'PGL',
    payment: 0,
    farmLink: 'https://info.pangolin.exchange/#/pair/0x62a2f206cc78babac9db4dbc0c9923d4fddef047',
  },
]

const LpHunt = () => {

  const theme = useTheme();

  const [values, setValues] = React.useState<State>({
    search: '',
    valutType: '0',
    myValut: false,
    protocols: []
  });

  const handleProtocolChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setValues(
      { ...values, 
        protocols: typeof value === 'string' ? value.split(',') : value,
      }
    );
  };

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleValutTypeChange = (event: SelectChangeEvent) => {
    setValues({ ...values, valutType: event.target.value});
  };
  console.log(values);
  return (
    <CustomPage>
      <PageHeader title='Auto-compound LP tokens + earn $CYCLE'/>
      <div className='flex justify-center text-4xl text-gray-300'>TVL: $361,604</div>
      <div className='flex flex-col items-center md:space-y-7 space-y-3'>
        <div className=' w-1/2 text-white text-base'>
          <Board className='flex flex-col items-center px-6 space-y-5'>
            <div className='flex flex-row w-full space-x-2 items-center'>
              <div className='w-2/3'>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  className = 'w-full'
                  value={values.search}
                  onChange={handleChange('search')}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  // style={{color: theme.palette.primary.light}}
                  placeholder='Search...'
              />
              </div>
              <div className='w-1/3'>
                <FormControlLabel
                  label="My Vaults"
                  control={
                    <Checkbox
                      style={{color: 'white'}}
                      // checked={checked[0] && checked[1]}
                      // indeterminate={checked[0] !== checked[1]}
                      // onChange={handleChange1}
                    />
                  }
                />
              </div>
            </div>
            <div className='flex flex-wrap lg:space-y-0 space-y-3'>
              <FormControl>
                <InputLabel id="demo-simple-select-label" className='text-white'>Valut Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.valutType}
                  label="Valut Type"
                  onChange={handleValutTypeChange}
                  className=' text-white text-left w-40 mr-8'
                >
                  {valutTypes.map((v,i) => {
                    return (
                      <MenuItem key={i} value={i}>{v}</MenuItem>
                    )
                  })}
                </Select> 
              </FormControl>
              <FormControl sx={{width: '300px'}}>
                <InputLabel id="demo-multiple-checkbox-label">Protocols</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={values.protocols}
                  onChange={handleProtocolChange}
                  input={<OutlinedInput label="Protocols" />}
                  renderValue={(selected) => {
                    let value = '';
                    selected.map(s=> {
                      value += protocols[parseInt(s)-1].protocol+', ';
                    })
                    return value}}
                  // MenuProps={MenuProps}
                >
                  {protocols.map((p, index) => {
                    let f = false;
                    values.protocols.map(p => {
                      if(p.toString() === (index+1).toString()) f=true;
                    })
                    return <MenuItem key={index} value={index+1}>
                      <Checkbox  style={{color: 'white'}} checked={f}/>
                      <img src={p.img} alt="" className=' rounded-t-full w-10'/>
                      <ListItemText primary={p.protocol} />
                    </MenuItem>
                  })}
                </Select>
              </FormControl>
            </div>
          </Board>
        </div>
        
      </div>
      <div className='flex flex-row flex-wrap justify-center w-full '>
       
        {
          ValutCards.map((v,i) => {
            let pf = false, vf = false;
            values.protocols.map(p => {
              if(p.toString() === v.protocol.toString()) pf=true;
            })
            if(values.protocols.length === 0) pf = true;
            v.valutType.map(v => {
              if(v === parseInt(values.valutType)) vf = true;
            })
            if(values.valutType == '0') vf = true;
            if(vf && pf)
              return <div className=' md:w-[600px] w-9/12'><ValutCard {...v} key={i} /> </div>
            }
          )
        }
       
        
      </div>
    </CustomPage>
  )
};

export default LpHunt;
