'use client';

import React, { useState } from 'react';
import { Box, Modal } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default ({
  children,
  onSubmit,
  isSignIn = false,
}: {
  children: React.ReactNode;
  onSubmit: () => void;
  isSignIn?: boolean;
}) => {
  const [open, setOpen] = useState(false);

  const text = {
    signUp: {
      title: 'Create account',
      buttonText: 'Create account',
    },
    signIn: {
      title: 'Login to Opentable',
      buttonText: 'Login',
    },
  };

  const textToUse = isSignIn ? text.signIn : text.signUp;

  return (
    <div>
      <button
        className="border p-1 px-4 rounded mr-3"
        onClick={() => setOpen(true)}
      >
        {textToUse.buttonText}
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2">
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
              <p className="text-sm">{textToUse.title}</p>
            </div>
            <div className="m-auto">
              <div>{children}</div>
              <button
                onClick={onSubmit}
                className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400"
              >
                {textToUse.buttonText}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
