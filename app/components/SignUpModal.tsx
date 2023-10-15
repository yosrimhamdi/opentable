'use client';

import { useContext, useState } from 'react';
import axios from 'axios';

import Modal from './Modal';
import handleInputChange from './handleInputChange';
import { AuthContext } from '../contexts/AuthContext';

export default () => {
  const { setter, ...rest } = useContext(AuthContext);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, form, setForm);
  };

  const signUp = async () => {
    const response = await axios.post(
      'http://localhost:3000/api/auth/signup',
      form
    );
    setter({ ...rest, user: response.data.user });
  };

  return (
    <Modal onSubmit={signUp}>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="First Name"
          name="first_name"
          value={form.first_name}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="Last Name"
          name="last_name"
          value={form.last_name}
          onChange={onInputChange}
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-full"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={onInputChange}
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="border rounded p-2 py-3 w-full"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={onInputChange}
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="border rounded p-2 py-3 w-full"
          placeholder="Password Confirm"
          name="passwordConfirm"
          value={form.passwordConfirm}
          onChange={onInputChange}
        />
      </div>
    </Modal>
  );
};
