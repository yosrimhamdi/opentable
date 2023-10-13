'use client';

import { useState } from 'react';

import Modal from './Modal';
import handleInputChange from './handleInputChange';

export default () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, form, setForm);
  };

  const signUp = () => {
    console.log(form);
  };

  return (
    <Modal onSubmit={signUp}>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="First Name"
          name="firstName"
          value={form.firstName}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="Last Name"
          name="lastName"
          value={form.lastName}
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
