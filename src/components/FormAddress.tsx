import { FC } from 'react';
import { useForm } from '../hooks';

interface FormAddress {
  address: string;
  cp: string;
  city: string;
}

const Form: FC = () => {
  const { address, city, cp, handleChange } = useForm<FormAddress>({
    address: '',
    cp: '',
    city: '',
  });

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address:
        </label>
        <input
          type="address"
          className="form-control"
          name="address"
          value={address}
          // onChange={(e) => handleChange(e)}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="cp" className="form-label">
          CP:
        </label>
        <input
          type="text"
          className="form-control"
          name="cp"
          value={cp}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="form-label">
          City:
        </label>
        <input
          type="text"
          className="form-control"
          name="city"
          value={city}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Form;
