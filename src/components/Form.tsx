import { FC } from 'react';
import { useForm } from '../hooks';

interface FormData {
  email: string;
  name: string;
  age: string;
}

const Form: FC = () => {
  const { email, name, age, handleChange } = useForm<FormData>({
    email: '',
    name: '',
    age: '',
  });

  // const [form, setForm] = useState({
  //   email: '',
  //   name: '',
  // });

  // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = target;

  //   setForm((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          // onChange={(e) => handleChange(e)}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age:
        </label>
        <input
          type="text"
          className="form-control"
          name="age"
          value={age}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Form;
