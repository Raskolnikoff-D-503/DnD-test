import React from 'react';
import {CSSObjectWithLabel, SingleValue} from 'react-select';
import Creatable from 'react-select/creatable';

import './CustomSelect.scss';

type Props = {
  value?: SingleValue<{label: string; value: string}>;
  onChange?: (newValue: SingleValue<{label: string; value: string}>) => void;
  options?: {label: string; value: string}[];
  placeholder?: string;
  createLabel?: string;
};

const styles = {
  menuList: (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
    ...provided,

    margin: '0',
    padding: '0',
    overflow: 'overlay',

    '::-webkit-scrollbar': {
      width: '20px',
    },

    '::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },

    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#d6dee1',
      borderRadius: '20px',
      border: '6px solid transparent',
      backgroundClip: 'content-box',
    },

    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#a8bbbf',
    },
  }),

  control: (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
    ...provided,

    borderRadius: '0',

    '::focus': {
      borderColor: 'black',
    },
  }),

  option: (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
    ...provided,

    background: '1px solid black',
  }),
};

export const CustomSelect = ({value, onChange, options = []}: Props) => {
  return (
    <Creatable
      styles={styles}
      className="custom-select"
      value={value}
      isClearable
      onChange={onChange}
      options={options}
      formatCreateLabel={(value) => `Create Directory "${value}"`}
    />
  );
};
