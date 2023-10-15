'use client';

import { useContext, useState } from 'react';
import axios from 'axios';

import Modal from './Modal';
import handleInputChange from './handleInputChange';
import { AuthContext } from '../contexts/AuthContext';

export default () => {
  const { setter, ...rest } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, form, setForm);
  };

  const signIn = async () => {
    const response = await axios.post(
      'http://localhost:3000/api/auth/signin',
      form
    );
    setter({ ...rest, user: response.data.user });
  };

  return (
    <Modal onSubmit={signIn} isSignIn>
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
    </Modal>
  );
};
